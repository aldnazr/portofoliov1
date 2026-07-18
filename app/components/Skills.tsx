"use client";

import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React / Next.js", level: 95, icon: "⚛️" },
      { name: "TypeScript", level: 90, icon: "🔷" },
      { name: "Vue.js", level: 80, icon: "💚" },
      { name: "Tailwind CSS", level: 92, icon: "🎐" },
      { name: "HTML / CSS", level: 95, icon: "🌐" },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 90, icon: "🟢" },
      { name: "Python / Django", level: 82, icon: "🐍" },
      { name: "PostgreSQL", level: 85, icon: "🐘" },
      { name: "REST / GraphQL", level: 88, icon: "📡" },
      { name: "Docker", level: 78, icon: "🐳" },
    ],
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    skills: [
      { name: "Git / GitHub", level: 93, icon: "📂" },
      { name: "CI/CD", level: 80, icon: "🔄" },
      { name: "AWS / Cloud", level: 75, icon: "☁️" },
      { name: "Testing", level: 85, icon: "🧪" },
      { name: "Agile / Scrum", level: 88, icon: "📋" },
    ],
  },
];

function SkillBar({
  skill,
  inView,
  delay,
}: {
  skill: Skill;
  inView: boolean;
  delay: number;
}) {
  return (
    <div
      className="animate-fade-in-up"
      style={{
        animationDelay: `${delay}s`,
        opacity: inView ? undefined : 0,
        animationPlayState: inView ? "running" : "paused",
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="flex items-center gap-2 text-sm font-medium text-foreground">
          <span className="text-base">{skill.icon}</span>
          {skill.name}
        </span>
        <span className="text-xs font-mono text-accent-light">
          {skill.level}%
        </span>
      </div>
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: inView ? `${skill.level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-wider uppercase mb-4 block">
            Skills & Expertise
          </span>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.title}
              className={`card ${inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${catIdx * 0.15}s` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border-color">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skill bars */}
              <div className="flex flex-col gap-5">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    inView={inView}
                    delay={catIdx * 0.15 + skillIdx * 0.08}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
