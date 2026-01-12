
import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
  variant?: 'primary' | 'outline' | 'white' | 'ghost';
  className?: string;
  target?: string;
  rel?: string;
  fullWidth?: boolean;
};

const Button: React.FC<ButtonProps> = ({ 
  children, 
  href, 
  variant = 'primary', 
  className = '', 
  fullWidth = false,
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer active:scale-95 hover:scale-[1.02]";
  
  const variants = {
    primary: "bg-primary hover:bg-primary-hover text-white shadow-lg shadow-red-500/20 hover:shadow-red-500/40",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    white: "border border-slate-200 bg-white hover:border-primary hover:text-primary text-slate-700 shadow-sm",
    ghost: "text-slate-700 hover:bg-slate-100"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseClasses} ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    const isInternal = href.startsWith('#');
    const isExternal = href.startsWith('http');
    const target = props.target || (isExternal ? "_blank" : undefined);
    const rel = props.rel || (isExternal ? "noopener noreferrer" : undefined);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      // 如果是内部哈希链接，拦截默认行为，手动更改 hash
      // 这可以防止在某些预览环境（如 AI Studio）中出现 "refused to connect" 错误
      if (isInternal) {
        e.preventDefault();
        window.location.hash = href;
      }
      
      if (props.onClick) {
        props.onClick(e);
      }
    };

    return (
      <a 
        href={href} 
        className={combinedClasses}
        target={target}
        rel={rel}
        onClick={handleClick}
        {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}
      >
        {children}
      </a>
    );
  }

  // Use type="button" by default for non-link buttons to avoid unintended form submissions
  return (
    <button 
      type="button" 
      className={combinedClasses} 
      {...props as React.ButtonHTMLAttributes<HTMLButtonElement>}
    >
      {children}
    </button>
  );
};

export default Button;
