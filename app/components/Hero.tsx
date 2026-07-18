"use client";

import { useEffect, useState, useRef } from "react";

const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "Problem Solver",
  "Tech Enthusiast",
];

function FloatingOrb({
  size,
  color,
  top,
  left,
  delay,
}: {
  size: number;
  color: string;
  top: string;
  left: string;
  delay: number;
}) {
  return (
    <div
      className="absolute rounded-full blur-3xl opacity-20 animate-float pointer-events-none"
      style={{
        width: size,
        height: size,
        background: color,
        top,
        left,
        animationDelay: `${delay}s`,
        animationDuration: `${6 + delay}s`,
      }}
    />
  );
}

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const role = roles[currentRole];

    const tick = () => {
      if (!isDeleting) {
        setDisplayText(role.substring(0, displayText.length + 1));
        if (displayText.length + 1 === role.length) {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setDisplayText(role.substring(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
          return;
        }
      }
    };

    timeoutRef.current = setTimeout(tick, isDeleting ? 40 : 80);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background orbs */}
      <FloatingOrb size={400} color="#8b5cf6" top="10%" left="10%" delay={0} />
      <FloatingOrb size={300} color="#06b6d4" top="60%" left="70%" delay={2} />
      <FloatingOrb size={200} color="#7c3aed" top="30%" left="80%" delay={4} />
      <FloatingOrb size={250} color="#0891b2" top="70%" left="15%" delay={1} />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-muted-light font-medium">
            Available for opportunities
          </span>
        </div>

        {/* Greeting */}
        <p
          className="text-lg md:text-xl text-muted-light mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          Hello, I&apos;m
        </p>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="gradient-text">John Doe</span>
        </h1>

        {/* Typing role */}
        <div
          className="h-12 md:h-14 flex items-center justify-center mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          <span className="text-2xl md:text-3xl font-semibold text-foreground/80 font-mono">
            {displayText}
          </span>
          <span
            className="ml-1 w-[3px] h-8 bg-accent inline-block"
            style={{ animation: "typewriter-blink 1s step-end infinite" }}
          />
        </div>

        {/* Description */}
        <p
          className="text-lg text-muted max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          Passionate about crafting elegant, scalable software solutions.
          4+ years of experience building modern web applications with
          cutting-edge technologies.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.75s" }}
        >
          <a href="#projects" className="btn-primary">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Contact Me
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted/30 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 rounded-full bg-accent/50 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
