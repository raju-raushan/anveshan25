import React from "react";
import ParticleBackground from "./ParticleBackground";

interface SectionWithParticlesProps {
  children: React.ReactNode;
  className?: string;
  particleColors?: string[];
  particleCount?: number;
  particleSpread?: number;
  speed?: number;
  particleBaseSize?: number;
  moveParticlesOnHover?: boolean;
  alphaParticles?: boolean;
  disableRotation?: boolean;
}

export default function SectionWithParticles({
  children,
  className = "",
  particleColors = ['#ffffff', '#ffffff'],
  particleCount = 400,
  particleSpread = 15,
  speed = 0.08,
  particleBaseSize = 8.0,
  moveParticlesOnHover = true,
  alphaParticles = true,
  disableRotation = false,
}: SectionWithParticlesProps) {
  return (
    <div className={`relative min-h-screen ${className}`}>
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground
          particleColors={particleColors}
          particleCount={particleCount}
          particleSpread={particleSpread}
          speed={speed}
          particleBaseSize={particleBaseSize}
          moveParticlesOnHover={moveParticlesOnHover}
          alphaParticles={alphaParticles}
          disableRotation={disableRotation}
        />
      </div>
      
      {/* Content with higher z-index */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 