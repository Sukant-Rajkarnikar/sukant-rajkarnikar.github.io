"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRightIcon, LucideDownloadCloud } from 'lucide-react';

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

        <div className="relative w-full z-10 flex flex-grow flex-row items-center justify-evenly">
          {/* Image div */}
          <div className="relative w-96 h-96 mb-6 group">
            <div className="absolute inset-0 bg-cyan-400/40 rounded-full blur-xl group-hover:bg-cyan-400/60 transition-all duration-500" />
            <div className="relative w-full h-full rounded-full border border-neutral-700 bg-[#050505]/20 backdrop-blur-md overflow-hidden flex items-center justify-center backdrop-blur-md">
              <img
                src="/profile.png"
                alt="Sukant Rajkarnikar"
                className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-right mt-12">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600">
              Sukant<br />Rajkarnikar
            </h1>
            <p className="text-neutral-400 max-w-2xl text-lg md:text-xl mb-10 font-light">
              I am a Mobile Developer based in Berlin, Germany. Providing you the best development services for your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-20">
              <Link
                href="#about"
                className="flex flex-row gap-2 px-8 py-4 font-bold text-neutral-950 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
              >
                About Me
                <ArrowRightIcon />
              </Link>
              <Link
                href="/cv.pdf"
                className=" flex flex-row gap-2 px-8 py-4 font-bold text-neutral-50 border border-neutral-700 rounded-full hover:border-cyan-400 bg-neutral-900/50 backdrop-blur-md transition-all">
                Download CV

                <LucideDownloadCloud />

              </Link>

            </div>

          </div>

        </div>



        <div className="absolute bottom-5 w-full border-y border-neutral-800 bg-neutral-900 backdrop-blur-md py-4 z-10">

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

        <div className="absolute bottom-5 w-full h-14 border-y border-neutral-800 bg-cyan-400/20 backdrop-blur-md py-4 z-9 rotate-1" />

        <div className="absolute bottom-5 w-full h-14 border-y border-neutral-800 bg-neutral-400/20 backdrop-blur-md py-4 z-9 -rotate-1" />

      </section>



      <section id="about" className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 py-24 border-t border-neutral-800/50 z-10">
        
        <div className="w-full max-w-6xl mb-16 flex items-center gap-6">
          <h2 className="text-3xl md:text-5xl font-black text-neutral-50 tracking-tighter">
            01. <span className="text-cyan-400">About Me</span>
          </h2>
          <div className="flex-grow h-[1px] bg-neutral-800"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">
          
          <div className="flex flex-col gap-6 text-neutral-400 font-light leading-relaxed text-lg">
            <p>
              I am a Mobile Engineer currently based in Berlin, Germany. My primary focus is building robust, highly scalable applications that bridge the gap between complex business logic and seamless user experiences.
            </p>
            <p>
              While my expertise lies heavily in the <span className="text-cyan-400 font-medium">Flutter and Dart</span> ecosystem, I approach development from a system-agnostic perspective. I specialize in implementing Clean Architecture, managing complex state with tools like Riverpod, and optimizing local databases using SQLite.
            </p>
            <p>
              When I'm not architecting mobile solutions, I'm exploring the latest advancements in web technologies and continuing to refine my full-stack capabilities. 
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-max">
            
            <div className="p-6 bg-[#0a0a0a] border border-neutral-800 rounded-2xl flex flex-col gap-2 hover:border-cyan-500/30 transition-colors group">
              <span className="text-3xl font-black text-white group-hover:text-cyan-400 transition-colors">5+</span>
              <span className="text-sm font-medium tracking-widest uppercase text-neutral-500">Years Experience</span>
            </div>

            <div className="p-6 bg-[#0a0a0a] border border-neutral-800 rounded-2xl flex flex-col gap-2 hover:border-cyan-500/30 transition-colors group">
              <span className="text-3xl font-black text-white group-hover:text-cyan-400 transition-colors">Clean</span>
              <span className="text-sm font-medium tracking-widest uppercase text-neutral-500">Architecture</span>
            </div>

            <div className="p-6 bg-[#0a0a0a] border border-neutral-800 rounded-2xl flex flex-col gap-2 hover:border-cyan-500/30 transition-colors group">
              <span className="text-3xl font-black text-white group-hover:text-cyan-400 transition-colors">Berlin</span>
              <span className="text-sm font-medium tracking-widest uppercase text-neutral-500">Current Base</span>
            </div>

            <div className="p-6 bg-[#0a0a0a] border border-neutral-800 rounded-2xl flex flex-col gap-2 hover:border-cyan-500/30 transition-colors group">
              <span className="text-3xl font-black text-white group-hover:text-cyan-400 transition-colors">Mobile</span>
              <span className="text-sm font-medium tracking-widest uppercase text-neutral-500">System Design</span>
            </div>

          </div>
        </div>
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