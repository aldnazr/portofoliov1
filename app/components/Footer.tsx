"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border-color">
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="text-sm font-bold tracking-tight">
            <span className="text-foreground">&lt;</span>
            <span className="gradient-text">Dev</span>
            <span className="text-foreground"> /&gt;</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted text-center">
            © {currentYear} John Doe. Built with{" "}
            <span className="text-accent-light">Next.js</span> &{" "}
            <span className="text-accent-light">Tailwind CSS</span>.
          </p>

          {/* Back to top */}
          <a
            href="#home"
            className="flex items-center gap-2 text-sm text-muted hover:text-accent-light transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Back to top
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
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
