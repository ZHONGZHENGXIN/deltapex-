import React from 'react';

// Use a union type to support both button and anchor attributes properly
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
  const baseClasses = "inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer";
  
  const variants = {
    primary: "bg-primary hover:bg-primary-hover text-white shadow-lg shadow-red-500/20",
    outline: "border border-primary text-primary hover:bg-primary/10",
    white: "border border-slate-200 bg-white hover:border-primary text-slate-700 shadow-sm",
    ghost: "text-slate-700 hover:bg-slate-100"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseClasses} ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    // Automatically detect external links to open in new tab
    const isExternal = href.startsWith('http');
    const target = props.target || (isExternal ? "_blank" : undefined);
    const rel = props.rel || (isExternal ? "noopener noreferrer" : undefined);

    return (
      <a 
        href={href} 
        className={combinedClasses}
        target={target}
        rel={rel}
        {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props as React.ButtonHTMLAttributes<HTMLButtonElement>}>
      {children}
    </button>
  );
};

export default Button;