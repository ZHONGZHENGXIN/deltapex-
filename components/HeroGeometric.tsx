
import React, { useEffect, useRef } from 'react';

const HeroGeometric: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    // Configuration
    const GLOBE_RADIUS = width < 768 ? 120 : 220;
    const DOT_RADIUS = 1.5;
    const DOT_COUNT = 400; // Number of particles
    const CONNECTION_DISTANCE = 50;
    const ROTATION_SPEED = 0.002;
    const COLOR = "230, 0, 18"; // #E60012 in RGB

    // 3D Point class
    class Point {
      x: number;
      y: number;
      z: number;
      theta: number;
      phi: number;

      constructor() {
        this.theta = Math.random() * 2 * Math.PI;
        this.phi = Math.acos(Math.random() * 2 - 1);
        
        this.x = GLOBE_RADIUS * Math.sin(this.phi) * Math.cos(this.theta);
        this.y = GLOBE_RADIUS * Math.sin(this.phi) * Math.sin(this.theta);
        this.z = GLOBE_RADIUS * Math.cos(this.phi);
      }

      rotate(angle: number) {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const x = this.x * cos - this.z * sin;
        const z = this.x * sin + this.z * cos;
        this.x = x;
        this.z = z;
      }

      project() {
        // Simple weak perspective projection
        const scale = 300 / (300 + this.z); 
        return {
          x: this.x * scale + width * 0.75, // Shift to right
          y: this.y * scale + height * 0.5,
          scale: scale,
          alpha: (this.z + GLOBE_RADIUS) / (2 * GLOBE_RADIUS) // Depth cueing
        };
      }
    }

    // Initialize points
    const points: Point[] = [];
    for (let i = 0; i < DOT_COUNT; i++) {
      points.push(new Point());
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Rotate and Draw
      points.forEach(point => {
        point.rotate(ROTATION_SPEED);
      });

      // Sort points by Z to draw back-to-front (though additive blending makes this less critical)
      points.sort((a, b) => a.z - b.z);

      // Draw Connections first
      ctx.lineWidth = 0.5;
      for (let i = 0; i < points.length; i++) {
        const p1 = points[i];
        const proj1 = p1.project();
        
        // Optimization: check neighbors only
        // For a true mesh, we might need a spatial index, but for 400 points, nested loop is okay if limited
        // We limit connection checks to create a "network" look without full N^2
        for (let j = i + 1; j < points.length; j++) {
            const p2 = points[j];
            const distSq = (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2 + (p1.z - p2.z) ** 2;
            
            if (distSq < CONNECTION_DISTANCE * CONNECTION_DISTANCE) {
                const proj2 = p2.project();
                const alpha = Math.min(proj1.alpha, proj2.alpha) * (1 - Math.sqrt(distSq) / CONNECTION_DISTANCE);
                
                ctx.beginPath();
                ctx.strokeStyle = `rgba(${COLOR}, ${alpha * 0.4})`;
                ctx.moveTo(proj1.x, proj1.y);
                ctx.lineTo(proj2.x, proj2.y);
                ctx.stroke();
            }
        }
      }

      // Draw Dots
      points.forEach(point => {
        const proj = point.project();
        ctx.beginPath();
        ctx.fillStyle = `rgba(${COLOR}, ${proj.alpha})`;
        ctx.arc(proj.x, proj.y, DOT_RADIUS * proj.scale, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
        width = canvas.offsetWidth;
        height = canvas.offsetHeight;
        canvas.width = width;
        canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
      style={{ mixBlendMode: 'multiply' }} 
    />
  );
};

export default HeroGeometric;
