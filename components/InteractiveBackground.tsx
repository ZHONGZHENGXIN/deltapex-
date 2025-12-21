import React, { useEffect, useRef } from 'react';

const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: 0, y: 0, radius: 150 };

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      baseSize: number;
      density: number;
      color: string;
      angle: number;
      pulseSpeed: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.baseSize = Math.random() * 2 + 1;
        this.size = this.baseSize;
        this.density = Math.random() * 30 + 1;
        this.color = '183, 28, 28'; // 深红色 RGB
        this.angle = Math.random() * Math.PI * 2; // 随机初始相位
        this.pulseSpeed = 0.02 + Math.random() * 0.03; // 随机呼吸频率
      }

      draw() {
        if (!ctx) return;
        
        // 计算呼吸效果导致的透明度和大小变化
        const pulse = Math.sin(this.angle) * 0.2 + 0.8; // 范围 0.6 到 1.0
        const opacity = 0.3 * pulse; // 基础透明度 0.3
        const currentSize = this.baseSize * (0.9 + pulse * 0.1);

        ctx.fillStyle = `rgba(${this.color}, ${opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentSize, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        // 更新呼吸动画相位
        this.angle += this.pulseSpeed;

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          let maxDistance = mouse.radius;
          let force = (maxDistance - distance) / maxDistance;
          let directionX = forceDirectionX * force * this.density;
          let directionY = forceDirectionY * force * this.density;
          
          // 抗重力排斥效果
          this.x -= directionX;
          this.y -= directionY;
        } else {
          // 缓慢回到原位
          if (this.x !== this.baseX) {
            let dxOrig = this.x - this.baseX;
            this.x -= dxOrig / 20;
          }
          if (this.y !== this.baseY) {
            let dyOrig = this.y - this.baseY;
            this.y -= dyOrig / 20;
          }
        }
      }
    }

    function init() {
      if (!canvas) return;
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 4500;
      for (let i = 0; i < numberOfParticles; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    }

    function connect() {
      if (!ctx) return;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const opacityValue = (1 - distance / 100) * 0.15;
            ctx.strokeStyle = `rgba(183, 28, 28, ${opacityValue})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default InteractiveBackground;