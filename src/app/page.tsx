"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="flex-grow flex flex-col items-center w-full min-h-screen relative">

      {/* Pointer effect thingy */}
      <div
        className="fixed inset-0 pointer-events-none transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 211, 238, 0.08), transparent 80%)`
        }}
      />

      {/* Nav Bar */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 relative">
            <Link href="#hero" className="text-xl font-black tracking-tighter text-neutral-50 hover:text-cyan-400 transition-colors">
              SR.
            </Link>
            <div className="hidden md:flex space-x-8 absolute center left-1/2 -translate-x-1/2">
              <Link href="#hero" className="text-sm font-medium tracking-widest uppercase text-neutral-400 hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-sm font-medium tracking-widest uppercase text-neutral-400 hover:text-cyan-400 transition-colors">
                About
              </Link>
              <Link href="#services" className="text-sm font-medium tracking-widest uppercase text-neutral-400 hover:text-cyan-400 transition-colors">
                Services
              </Link>
              <Link href="#works" className="text-sm font-medium tracking-widest uppercase text-neutral-400 hover:text-cyan-400 transition-colors">
                Works
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative w-full min-h-screen flex flex-col items-center px-4 overflow-hidden pt-20 pb-10">

        <div className="relative z-10 flex flex-grow flex-row items-center justify-space-evenly gap-50">
          {/* Image div */}
          <div className="relative w-100 h-100 mb-6 group">
            <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl group-hover:bg-cyan-400/40 transition-all duration-500" />
            <div className="relative w-full h-full rounded-full border border-neutral-700 bg-[#050505]/20 backdrop-blur-md overflow-hidden flex items-center justify-center backdrop-blur-md">
              <img
                src="/profile.png"
                alt="Sukant Rajkarnikar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-right mt-12">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/50 border border-neutral-800 text-cyan-400 text-xs tracking-widest uppercase mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Available for New Opportunities
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600">
              Senior Flutter<br />Engineer.
            </h1>

            <p className="text-neutral-400 max-w-2xl text-lg md:text-xl mb-10 font-light">
              Architecting high-performance, scalable mobile systems and interactive web experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-20">
              <Link
                href="#works"
                className="px-8 py-4 font-bold text-neutral-950 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
              >
                View Projects
              </Link>
              <Link
                href="/cv.pdf"
                className="px-8 py-4 font-bold text-neutral-50 border border-neutral-700 rounded-full hover:border-cyan-400 bg-neutral-900/50 backdrop-blur-md transition-all"
              >
                Download CV
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 w-full border-y border-neutral-800 bg-neutral-900/30 backdrop-blur-md py-4 z-10">
          <div className="flex justify-center gap-4 md:gap-12 text-cyan-500/70 font-mono tracking-widest text-xs md:text-sm uppercase flex-wrap px-4">
            <span>Flutter</span>
            <span>•</span>
            <span>Dart</span>
            <span>•</span>
            <span>Riverpod</span>
            <span>•</span>
            <span>Clean Architecture</span>
            <span>•</span>
            <span>SQLite / Isar</span>
          </div>
        </div>

      </section>

      <section id="about" className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 border-t border-neutral-800/50 z-10">
        <h2 className="text-4xl font-bold text-neutral-600">About Section</h2>
      </section>

      <section id="services" className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 border-t border-neutral-800/50 z-10">
        <h2 className="text-4xl font-bold text-neutral-600">Services Section</h2>
      </section>

      <section id="works" className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 border-t border-neutral-800/50 z-10">
        <h2 className="text-4xl font-bold text-neutral-600">Works Section</h2>
      </section>

    </main>
  );
}