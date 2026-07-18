"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleClick("#home");
          }}
          className="text-lg font-bold tracking-tight group"
        >
          <span className="text-foreground group-hover:text-accent-light transition-colors">&lt;</span>
          <span className="gradient-text">Dev</span>
          <span className="text-foreground group-hover:text-accent-light transition-colors"> /&gt;</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link.href);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeSection === link.href.replace("#", "")
                  ? "text-accent-light bg-accent/10"
                  : "text-muted-light hover:text-foreground hover:bg-surface-light"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[4px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass-strong px-6 py-4 flex flex-col gap-1 border-t border-border-color">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link.href);
              }}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                activeSection === link.href.replace("#", "")
                  ? "text-accent-light bg-accent/10"
                  : "text-muted-light hover:text-foreground hover:bg-surface-light"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
