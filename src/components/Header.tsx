"use client";

import { useEffect, useLayoutEffect, useState } from "react";

const asciiFrames = [
  `██████╗ ██╗ ██████╗      ██╗██╗███╗   ███╗███████╗    ███╗   ██╗███████╗███╗   ███╗████████╗
██╔══██╗██║██╔════╝      ██║██║████╗ ████║██╔════╝    ████╗  ██║██╔════╝████╗ ████║╚══██╔══╝
██████╔╝██║██║  ███╗     ██║██║██╔████╔██║███████╗    ██╔██╗ ██║█████╗  ██╔████╔██║   ██║   
██╔══██╗██║██║   ██║██   ██║██║██║╚██╔╝██║╚════██║    ██║╚██╗██║██╔══╝  ██║╚██╔╝██║   ██║   
██████╔╝██║╚██████╔╝╚█████╔╝██║██║ ╚═╝ ██║███████║    ██║ ╚████║███████╗██║ ╚═╝ ██║   ██║   
╚═════╝ ╚═╝ ╚═════╝  ╚════╝ ╚═╝╚═╝     ╚═╝╚══════╝    ╚═╝  ╚═══╝╚══════╝╚═╝     ╚═╝   ╚═╝`,

  `██████╗ ██╗ ██████╗      ██╗██╗███╗   ███╗███████╗    ███╗   ██╗███████╗███╗   ███╗████████╗
██╔══██╗██║██╔════╝      ██║██║████╗ ████║██╔════╝    ████╗  ██║██╔════╝████╗ ████║╚══██╔══╝
██████╔╝██║██║  ███╗░░░░░██║██║██╔████╔██║███████╗░░░░██╔██╗░██║█████╗░░██╔████╔██║   ██║   
██╔══██╗██║██║░░░██║██░░░██║██║██║╚██╔╝██║╚════██║░░░░██║╚██╗██║██╔══╝░░██║╚██╔╝██║   ██║   
██████╔╝██║╚██████╔╝╚█████╔╝██║██║░╚═╝░██║███████║░░░░██║░╚████║███████╗██║░╚═╝░██║░░░██║░░░
╚═════╝░╚═╝░╚═════╝░░╚════╝░╚═╝╚═╝░░░░░░╚═╝╚══════╝░░░░╚═╝░░╚═══╝╚══════╝╚═╝░░░░░░╚═╝   ╚═╝`,

  `██████╗░██╗░██████╗░░░░░██╗██╗███╗░░░███╗███████╗░░░░███╗░░░██╗███████╗███╗░░░███╗████████╗
██╔══██╗██║██╔════╝░░░░░░██║██║████╗░████║██╔════╝░░░░████╗░░██║██╔════╝████╗░████║╚══██╔══╝
██████╔╝██║██║░░███╗░░░░░██║██║██╔████╔██║███████╗░░░░██╔██╗░██║█████╗░░██╔████╔██║░░░██║░░░
██╔══██╗██║██║░░░██║██░░░██║██║██║╚██╔╝██║╚════██║░░░░██║╚██╗██║██╔══╝░░██║╚██╔╝██║░░░██║░░░
██████╔╝██║╚██████╔╝╚█████╔╝██║██║░╚═╝░██║███████║░░░░██║░╚████║███████╗██║░╚═╝░██║░░░██║░░░
╚═════╝░╚═╝░╚═════╝░░╚════╝░╚═╝╚═╝░░░░░░╚═╝╚══════╝░░░░╚═╝░░╚═══╝╚══════╝╚═╝░░░░░░╚═╝   ╚═╝`,

  `██████╗ ██╗ ██████╗      ██╗██╗███╗   ███╗███████╗    ███╗   ██╗███████╗███╗   ███╗████████╗
██╔══██╗██║██╔════╝      ██║██║████╗ ████║██╔════╝    ████╗  ██║██╔════╝████╗ ████║╚══██╔══╝
██████╔╝██║██║  ███╗█████╗██║██║██╔████╔██║███████╗█████╗██╔██╗ ██║█████╗░░██╔████╔██║░░░██║░░░
██╔══██╗██║██║░░░██║██╔══╝██║██║██║╚██╔╝██║╚════██║╚════╝██║╚██╗██║██╔══╝░░██║╚██╔╝██║░░░██║░░░
██████╔╝██║╚██████╔╝╚█████╔╝██║██║░╚═╝░██║███████║      ██║ ╚████║███████╗██║░╚═╝░██║░░░██║░░░
╚═════╝ ╚═╝ ╚═════╝  ╚════╝ ╚═╝╚═╝░░░░░░╚═╝╚══════╝      ╚═╝  ╚═══╝╚══════╝╚═╝░░░░░░╚═╝   ╚═╝`,
];

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  life: number;
}

const generateParticles = (count: number): Particle[] => {
  const colors = ["#22c55e", "#a855f7", "#3b82f6", "#06b6d4"];
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    color: colors[Math.floor(Math.random() * colors.length)],
    speedX: (Math.random() - 0.5) * 0.5,
    speedY: (Math.random() - 0.5) * 0.5,
    life: Math.random(),
  }));
};

export function Header() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [particles, setParticles] = useState<Particle[]>(() =>
    generateParticles(40)
  );

  useEffect(() => {
    const transformInterval = setInterval(() => {
      setIsGlitching(true);

      let frame = 0;
      const glitchInterval = setInterval(() => {
        setCurrentFrame(frame);
        frame++;
        if (frame >= asciiFrames.length) {
          clearInterval(glitchInterval);
          setCurrentFrame(0);
          setIsGlitching(false);
        }
      }, 150);
    }, 5000);

    return () => clearInterval(transformInterval);
  }, []);

  useLayoutEffect(() => {
    const particleInterval = setInterval(() => {
      setParticles((prevParticles) => {
        return prevParticles.map((p) => {
          let newX = p.x + p.speedX;
          let newY = p.y + p.speedY;
          const newLife = p.life - 0.01;

          if (newX < 0 || newX > 100) newX = Math.random() * 100;
          if (newY < 0 || newY > 100) newY = Math.random() * 100;
          if (newLife <= 0) {
            const colors = ["#22c55e", "#a855f7", "#3b82f6", "#06b6d4"];
            return {
              ...p,
              x: Math.random() * 100,
              y: Math.random() * 100,
              life: 1,
              color: colors[Math.floor(Math.random() * colors.length)],
            };
          }

          return { ...p, x: newX, y: newY, life: newLife };
        });
      });
    }, 50);

    return () => clearInterval(particleInterval);
  }, []);

  return (
    <header className="relative overflow-hidden border-b-2 border-green-500/50 bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff0010_1px,transparent_1px),linear-gradient(to_bottom,#a855f710_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-[scan_3s_linear_infinite] absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full transition-opacity duration-1000"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              opacity: particle.life,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            }}
          />
        ))}
      </div>

      <div className="relative px-4 py-6 md:py-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <pre
              className={`
              overflow-hidden text-center font-mono text-[clamp(4px,1.2vw,10px)] leading-[1.1] text-green-500
              transition-all duration-150
              ${
                isGlitching
                  ? "animate-pulse drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]"
                  : "drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]"
              }
            `}
              aria-label="Big Jim's NEMT"
            >
              {asciiFrames[currentFrame]}
            </pre>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-center">
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-blue-500 to-green-500 md:w-16" />
            <p className="font-mono text-xs text-green-400 md:text-sm">
              {">"} NON-EMERGENCY MEDICAL TRANSPORT {"<"}
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent via-blue-500 to-green-500 md:w-16" />
          </div>

          <div className="mt-2 text-center">
            <span className="animate-[pulse_2s_ease-in-out_infinite] font-mono text-[10px] text-green-500/60">
              ▓▓▓ SYSTEM ONLINE ▓▓▓
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 h-px w-full max-w-2xl -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
    </header>
  );
}
