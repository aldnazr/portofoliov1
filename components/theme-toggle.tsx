"use client";

import { ReactNode, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

const themes: { value: Theme; label: string; icon: ReactNode }[] = [
  {
    value: "light",
    label: "Tema terang",
    icon: <SunIcon />,
  },
  {
    value: "dark",
    label: "Tema gelap",
    icon: <MoonIcon />,
  },
  {
    value: "system",
    label: "Ikuti tema sistem",
    icon: <SystemIcon />,
  },
];

function setDocumentTheme(theme: Theme) {
  const root = document.documentElement;

  if (theme === "system") {
    delete root.dataset.theme;
    return;
  }

  root.dataset.theme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    const initialTheme: Theme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : "system";

    setDocumentTheme(initialTheme);
    queueMicrotask(() => setTheme(initialTheme));
  }, []);

  function changeTheme(nextTheme: Theme) {
    setTheme(nextTheme);
    setDocumentTheme(nextTheme);

    if (nextTheme === "system") {
      window.localStorage.removeItem("portfolio-theme");
      return;
    }

    window.localStorage.setItem("portfolio-theme", nextTheme);
  }

  return (
    <div className="theme-toggle" role="group" aria-label="Pilih tema tampilan">
      {themes.map((item) => (
        <button
          key={item.value}
          type="button"
          className={theme === item.value ? "is-active" : ""}
          aria-label={item.label}
          aria-pressed={theme === item.value}
          title={item.label}
          onClick={() => changeTheme(item.value)}
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.35" />
      <path d="M8 1.5v1.4M8 13.1v1.4M1.5 8h1.4M13.1 8h1.4M3.4 3.4l1 1M11.6 11.6l1 1M12.6 3.4l-1 1M4.4 11.6l-1 1" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M13.9 9.7A5.9 5.9 0 0 1 6.3 2.1a5.9 5.9 0 1 0 7.6 7.6Z" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SystemIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2" y="2.5" width="12" height="8.5" rx="1" stroke="currentColor" strokeWidth="1.35" />
      <path d="M6 13.5h4M8 11v2.5" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}
