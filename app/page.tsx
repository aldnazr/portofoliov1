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
import { Link } from "@heroui/react";

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
  return (
    <div className="portfolio-shell">
      <header className="site-header lg:px-8">
        <div className="site-header__inner">
          <a
            href="#utama"
            className="site-mark"
            aria-label="Kembali ke bagian utama"
          >
            <span>{profile.initials}</span>
            <span className="hidden sm:inline">{profile.name}</span>
          </a>

          <nav aria-label="Navigasi utama" className="site-nav">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="site-header__actions">
            <ThemeToggle />
            <a href={`mailto:${profile.email}`} className="header-contact">
              Mari bicara
            </a>
          </div>
        </div>
      </header>

      <main id="utama">
        <section className="hero section-shell lg:px-8">
          <div className="hero__copy motion-enter">
            <p className="hero__greeting">hello, world</p>
            <p className="availability">
              <span aria-hidden="true" />
              {profile.availability}
            </p>
            <h1>
              Hai, saya Azhar.
              <br />
              Saya membuat produk web yang <em>jelas.</em>
            </h1>
            <p className="hero__summary">{profile.hero}</p>
            <div className="hero__actions">
              <a href="#proyek" className="button-primary">
                Lihat proyek <ArrowDownIcon className="size-4" />
              </a>
              <a href="#tentang" className="inline-arrow-link">
                Tentang saya <ArrowRightIcon className="size-4" />
              </a>
            </div>
          </div>

          {/* <aside className="hero__aside motion-enter motion-delay-2">
            <p className="eyebrow">Based in</p>
            <p className="hero__location">{profile.location}</p>
            <div className="hero__socials">
              {profile.socialLinks.slice(0, 2).map((link) => <ExternalLink key={link.label} href={link.href}>{link.label}</ExternalLink>)}
            </div>
          </aside> */}
        </section>

        {/* <section className="focus-strip section-shell" aria-label="Fokus kerja">
          <p className="eyebrow">I help teams with</p>
          <div className="focus-strip__items">
            <span>Product UI</span><span>Frontend systems</span><span>Design implementation</span>
          </div>
        </section> */}

        <section
          id="tentang"
          className="section-shell section-space about-section lg:px-8 items-center"
        >
          <div className="motion-enter">
            <SectionHeading
              number="01"
              eyebrow="About"
              title="Mengubah kompleksitas menjadi antarmuka yang terasa natural."
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

        <section id="proyek" className="section-shell section-space lg:px-8">
          <div className="section-intro motion-enter">
            <SectionHeading
              number="02"
              eyebrow="Selected work"
              title="Proyek dengan konteks, bukan sekadar tampilan."
              description="Sebagian studi kasus memakai visual untuk memberi rasa produk; sebagian lain dibiarkan berbasis tipografi agar ceritanya tetap menjadi fokus."
            />
            <p className="section-intro__note">
              Detail dan metrik disederhanakan untuk menjaga kerahasiaan
              kolaborasi.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.number}
                project={project}
                priority={index === 0}
              />
            ))}
          </div>
        </section>

        <section
          id="pengalaman"
          className="section-shell section-space experience-section lg:px-8"
        >
          <div className="motion-enter">
            <SectionHeading
              number="03"
              eyebrow="Journey"
              title="Dibentuk oleh produk, studio, dan banyak iterasi."
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

        <section id="kontak" className="contact-section">
          <div className="section-shell contact-section__inner">
            <p className="eyebrow">04 / Let&apos;s work together</p>
            <h2>Punya tantangan yang menarik untuk diselesaikan?</h2>
            <p>
              Ceritakan konteks dan ambisinya. Saya terbuka untuk proyek produk,
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
