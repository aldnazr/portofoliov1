"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Years Experience", value: 4, suffix: "+" },
  { label: "Projects Completed", value: 30, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
  { label: "Contributions", value: 500, suffix: "+" },
];

function AnimatedCounter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="text-3xl md:text-4xl font-bold gradient-text">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-wider uppercase mb-4 block">
            About Me
          </span>
          <h2 className="section-title">
            Crafting <span className="gradient-text">Digital Experiences</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A passionate software engineer dedicated to building impactful
            solutions
          </p>
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Avatar / Visual */}
          <div
            className={`md:col-span-2 flex justify-center ${
              inView ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl glass overflow-hidden relative animate-pulse-glow">
                {/* Abstract avatar */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent-secondary/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-accent to-accent-secondary opacity-80" />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                      JD
                    </div>
                  </div>
                </div>
                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-accent/40 rounded-tl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-accent-secondary/40 rounded-br-lg" />
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-accent/30 animate-float" />
              <div
                className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-accent-secondary/30 animate-float"
                style={{ animationDelay: "2s" }}
              />
            </div>
          </div>

          {/* Text */}
          <div
            className={`md:col-span-3 ${
              inView ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Software Engineer based in{" "}
              <span className="text-accent-light">Indonesia</span>
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              I&apos;m a Software Engineer with 4+ years of experience building
              scalable, high-performance web applications. I specialize in
              modern JavaScript/TypeScript ecosystems, crafting both robust
              backends and polished frontends.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              My approach combines clean architecture, test-driven development,
              and user-centric design. I thrive in agile teams and enjoy
              mentoring junior developers while continuously learning new
              technologies.
            </p>

            {/* Quick info */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: "📍", label: "Location", value: "Jakarta, Indonesia" },
                { icon: "🎓", label: "Education", value: "B.Sc. Computer Science" },
                { icon: "💼", label: "Focus", value: "Full-Stack Development" },
                { icon: "🌐", label: "Languages", value: "English, Indonesian" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-2">
                  <span className="text-lg">{item.icon}</span>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-sm text-foreground font-medium">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`card text-center ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
                inView={inView}
              />
              <p className="text-sm text-muted mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
