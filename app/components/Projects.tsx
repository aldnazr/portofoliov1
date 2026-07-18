"use client";

import { useEffect, useRef, useState } from "react";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  github?: string;
  demo?: string;
  gradient: string;
  icon: string;
}

const projects: Project[] = [
  {
    title: "CloudSync Platform",
    description: "Real-time collaboration platform",
    longDescription:
      "A full-stack SaaS platform enabling teams to collaborate in real-time with document editing, video conferencing, and project management tools. Handles 10K+ concurrent connections.",
    tags: ["Next.js", "WebSocket", "Redis", "PostgreSQL", "Docker"],
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-violet-500/20 to-purple-500/20",
    icon: "☁️",
  },
  {
    title: "AnalytiQ Dashboard",
    description: "Data visualization & analytics",
    longDescription:
      "Interactive analytics dashboard with real-time data streaming, custom chart builder, and AI-powered insights. Processes millions of data points daily with sub-second response times.",
    tags: ["React", "D3.js", "Node.js", "MongoDB", "AWS"],
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-cyan-500/20 to-blue-500/20",
    icon: "📊",
  },
  {
    title: "SecureVault API",
    description: "Encrypted file storage service",
    longDescription:
      "Enterprise-grade encrypted file storage API with end-to-end encryption, role-based access control, and compliance with SOC2 standards. Serves 50K+ API requests daily.",
    tags: ["Node.js", "TypeScript", "PostgreSQL", "AWS S3", "Docker"],
    github: "https://github.com",
    gradient: "from-emerald-500/20 to-teal-500/20",
    icon: "🔐",
  },
  {
    title: "DevFlow CLI",
    description: "Developer productivity toolkit",
    longDescription:
      "Command-line toolkit automating common development workflows including project scaffolding, code generation, and deployment pipelines. Used by 500+ developers.",
    tags: ["TypeScript", "Node.js", "Go", "Docker", "CI/CD"],
    github: "https://github.com",
    gradient: "from-orange-500/20 to-amber-500/20",
    icon: "⚡",
  },
  {
    title: "EcoTracker Mobile",
    description: "Carbon footprint tracking app",
    longDescription:
      "Cross-platform mobile application helping users track and reduce their carbon footprint through gamification, community challenges, and personalized recommendations.",
    tags: ["React Native", "Python", "FastAPI", "Firebase", "ML"],
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-green-500/20 to-lime-500/20",
    icon: "🌿",
  },
  {
    title: "NexusChat",
    description: "AI-powered chat platform",
    longDescription:
      "Intelligent chat platform with AI assistants, language translation, and smart reply suggestions. Features end-to-end encryption and cross-platform sync.",
    tags: ["Next.js", "OpenAI", "WebSocket", "Redis", "Prisma"],
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-pink-500/20 to-rose-500/20",
    icon: "💬",
  },
];

export default function Projects() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-wider uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A selection of projects I&apos;ve built that showcase my skills and passion
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group card overflow-hidden ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Project visual header */}
              <div
                className={`h-40 -mx-6 -mt-6 mb-5 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <span className="text-5xl group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </span>
                {/* Decorative grid */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-accent-light font-medium mb-3">
                  {project.description}
                </p>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {project.longDescription}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag text-[0.7rem]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-border-color">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted hover:text-accent-light transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted hover:text-accent-light transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
