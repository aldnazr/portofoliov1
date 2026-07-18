"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Noise overlay for texture */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
