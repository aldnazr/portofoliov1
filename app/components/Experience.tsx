"use client";

import { useEffect, useRef, useState } from "react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "TechCorp Global",
    role: "Senior Software Engineer",
    period: "Jan 2024 – Present",
    location: "Jakarta, Indonesia",
    description:
      "Leading a team of 5 engineers to build a next-generation e-commerce platform serving 2M+ users.",
    highlights: [
      "Architected microservices infrastructure reducing API response times by 40%",
      "Implemented CI/CD pipeline cutting deployment time from 2 hours to 15 minutes",
      "Mentored 3 junior developers, conducting weekly code reviews",
    ],
    tags: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
  },
  {
    company: "StartupX",
    role: "Full-Stack Developer",
    period: "Mar 2022 – Dec 2023",
    location: "Bandung, Indonesia",
    description:
      "Core developer building a SaaS analytics dashboard from scratch, reaching 10K+ monthly active users.",
    highlights: [
      "Built real-time data visualization dashboard with D3.js and WebSockets",
      "Designed RESTful API handling 50K+ daily requests with 99.9% uptime",
      "Reduced frontend bundle size by 60% through code splitting and lazy loading",
    ],
    tags: ["Next.js", "TypeScript", "Python", "MongoDB", "Redis"],
  },
  {
    company: "Digital Agency Co.",
    role: "Frontend Developer",
    period: "Jun 2021 – Feb 2022",
    location: "Jakarta, Indonesia",
    description:
      "Developed responsive web applications for enterprise clients across various industries.",
    highlights: [
      "Delivered 8+ client projects on time with high customer satisfaction",
      "Built component library used across 12 projects, reducing dev time by 30%",
      "Implemented accessibility standards achieving WCAG 2.1 AA compliance",
    ],
    tags: ["React", "Vue.js", "Tailwind CSS", "Figma", "Jest"],
  },
  {
    company: "University Research Lab",
    role: "Research Assistant & Developer",
    period: "Aug 2020 – May 2021",
    location: "Surabaya, Indonesia",
    description:
      "Developed machine learning tools for natural language processing research.",
    highlights: [
      "Built NLP pipeline processing 100K+ documents for sentiment analysis",
      "Published co-authored paper in international conference",
      "Developed web-based visualization tool for research data",
    ],
    tags: ["Python", "TensorFlow", "Flask", "React", "PostgreSQL"],
  },
];

export default function Experience() {
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
    <section id="experience" ref={sectionRef} className="relative">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-wider uppercase mb-4 block">
            Career Path
          </span>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            My professional journey building software solutions
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="timeline-line" />

          {/* Timeline items */}
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`relative pl-12 md:pl-0 mb-12 last:mb-0 ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {/* Dot */}
              <div className="timeline-dot" />

              {/* Card - alternating sides on desktop */}
              <div
                className={`md:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <div className="card group">
                  {/* Period badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="tag">{exp.period}</span>
                    <span className="text-xs text-muted">{exp.location}</span>
                  </div>

                  {/* Role & Company */}
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-light transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-accent-light font-medium text-sm mb-3">
                    {exp.company}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-muted-light"
                      >
                        <span className="text-accent mt-1 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag text-[0.7rem]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
