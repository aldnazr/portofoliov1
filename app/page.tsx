"use client";

import { useState } from "react";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  experience,
  navigation,
  process,
  profile,
  projects,
} from "@/app/data/portfolio";
import { ReactNode } from "react";
import { Button, Link, Pagination } from "@heroui/react";
import router from "next/router";

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="external-link">
      {children}
      <ArrowUpRightIcon className="size-3.5" />
    </a>
  );
}

export default function Home() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const indexOfLastProject = page * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );

  return (
    <div className="portfolio-shell">
      <header className="site-header lg:px-8">
        <div className="site-header__inner">
          <a
            href="#main"
            className="site-mark"
            aria-label="Kembali ke bagian utama"
          >
            <span>{profile.initials}</span>
            <span className="hidden sm:inline">{profile.name}</span>
          </a>

          <nav aria-label="Navigasi utama" className="hidden lg:block">
            {navigation.map((item) => (
              <Button
                variant="ghost"
                key={item.href}
                className="opacity-50 hover:opacity-100"
                onPress={() => {
                  window.location.href = item.href;
                }}
              >
                {item.label}
              </Button>
            ))}
          </nav>

          <div className="site-header__actions">
            <ThemeToggle />
            <Link href={`mailto:${profile.email}`} className="header-contact">
              Mari bicara
            </Link>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero section-shell lg:px-8">
          <div className="hero__copy motion-enter">
            {/* <p className="hero__greeting">hello, world</p> */}
            {/* <p className="availability">
              <span aria-hidden="true" />
              {profile.availability}
            </p> */}
            <h1>
              Halo, saya Azhar.
              <br />
              Saya membangun solusi digital yang <em>bermanfaat.</em>
            </h1>
            <p className="hero__summary">{profile.hero}</p>
            <div className="hero__actions">
              <a href="#project" className="button-primary">
                Lihat project <ArrowDownIcon className="size-4" />
              </a>
              <a href="#about" className="inline-arrow-link">
                Tentang saya <ArrowRightIcon className="size-4" />
              </a>
            </div>
          </div>

          <aside className="hero__aside motion-enter motion-delay-2">
            <p className="eyebrow">Based in</p>
            <p className="hero__location">{profile.location}</p>
            <div className="hero__socials">
              {profile.socialLinks.slice(0, 2).map((link) => (
                <ExternalLink key={link.label} href={link.href}>
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          </aside>
        </section>

        {/* <section className="focus-strip section-shell" aria-label="Fokus kerja">
          <p className="eyebrow">I help teams with</p>
          <div className="focus-strip__items">
            <span>Product UI</span>
            <span>Frontend systems</span>
            <span>Design implementation</span>
          </div>
        </section> */}

        <section
          id="about"
          className="section-shell section-space about-section lg:px-8 items-center"
        >
          <div className="motion-enter">
            <SectionHeading
              number="01"
              eyebrow="About"
              title="Membangun solusi digital yang sederhana, cepat, dan mudah digunakan."
            />
          </div>
          <div className="about-section__content motion-enter motion-delay-1">
            <p>{profile.about}</p>
            <ul aria-label="Keahlian inti">
              {profile.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="project" className="section-shell section-space lg:px-8">
          <div className="section-intro motion-enter">
            <SectionHeading
              number="02"
              eyebrow="Selected work"
              title="Proyek dengan tujuan, bukan sekadar hasil."
              description="Setiap proyek menghadirkan tantangan yang berbeda, mulai dari perancangan, pengembangan, hingga implementasi untuk menghasilkan solusi yang sesuai dengan kebutuhan."
            />
            <p className="section-intro__note">
              Detail dan metrik disederhanakan untuk menjaga kerahasiaan
              kolaborasi.
            </p>
          </div>
          <section id="listProject" className="project-grid">
            {currentProjects.map((project, index) => (
              <ProjectCard
                key={project.number}
                project={project}
                priority={index === 0}
              />
            ))}
          </section>
          {totalPages > 1 && (
            <div className="flex justify-center mt-10">
              <Pagination className="justify-center w-fit">
                <Pagination.Content>
                  <Pagination.Item>
                    <Pagination.Previous
                      isDisabled={page === 1}
                      onPress={() => {
                        setPage((p) => p - 1);
                        window.location.href = "#listProject";
                      }}
                    >
                      <Pagination.PreviousIcon />
                      <span>Previous</span>
                    </Pagination.Previous>
                  </Pagination.Item>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (p) => (
                      <Pagination.Item key={p}>
                        <Pagination.Link
                          isActive={p === page}
                          onPress={() => {
                            setPage(p);
                            window.location.href = "#listProject";
                          }}
                        >
                          {p}
                        </Pagination.Link>
                      </Pagination.Item>
                    ),
                  )}
                  <Pagination.Item>
                    <Pagination.Next
                      isDisabled={page === totalPages}
                      onPress={() => {
                        setPage((p) => p + 1);
                        window.location.href = "#listProject";
                      }}
                    >
                      <span>Next</span>
                      <Pagination.NextIcon />
                    </Pagination.Next>
                  </Pagination.Item>
                </Pagination.Content>
              </Pagination>
            </div>
          )}
        </section>

        <section
          id="experience"
          className="section-shell section-space experience-section lg:px-8"
        >
          <div className="motion-enter">
            <SectionHeading
              number="03"
              eyebrow="Journey"
              title="Dibangun dari pengalaman pribadi maupun profesional."
            />
          </div>
          <ol className="experience-list motion-enter motion-delay-1">
            {experience.map((item) => (
              <li key={item.period}>
                <p className="eyebrow">{item.period}</p>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.company}</p>
                </div>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="section-shell process-section lg:px-8">
          <p className="eyebrow">My approach</p>
          <ol>
            {process.map((item) => (
              <li key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="contact-section">
          <div className="section-shell contact-section__inner">
            <p className="eyebrow">04 / Let&apos;s work together</p>
            <h2>Punya tantangan yang menarik untuk diselesaikan?</h2>
            <p>
              Ceritakan kebutuhan anda. Saya terbuka untuk proyek produk,
              kolaborasi, dan percakapan yang baik.
            </p>
            <a href={`mailto:${profile.email}`} className="button-primary">
              {profile.email}
              <ArrowUpRightIcon className="size-4" />
            </a>
          </div>
        </section>
      </main>

      <footer className="section-shell site-footer lg:px-8">
        <div>
          <p className="site-footer__name">{profile.name}</p>
          <p>Frontend developer for considered digital products.</p>
        </div>
        <div className="site-footer__links">
          {profile.socialLinks.map((link) => (
            <ExternalLink key={link.label} href={link.href}>
              {link.label}
            </ExternalLink>
          ))}
        </div>
        <p>© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
