"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function NotFound() {
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
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#050505] text-neutral-50 overflow-hidden px-4 selection:bg-cyan-500/30">
      
      <div 
        className="fixed inset-0 pointer-events-none transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 211, 238, 0.08), transparent 80%)`
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col items-center text-center">
        
        <div className="relative group cursor-default mb-8 mt-10">
          <h1 className="text-[10rem] md:text-[16rem] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-800 drop-shadow-2xl relative z-10">
            404
          </h1>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-[1px] border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite] group-hover:border-cyan-400/50 transition-colors duration-700" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[90%] border-[1px] border-neutral-700/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
        </div>
        
        <h2 className="text-2xl md:text-3xl font-light mb-6 tracking-widest uppercase text-cyan-400">
          System <span className="font-bold">Failure</span>
        </h2>
        
        <p className="text-neutral-400 mb-12 max-w-lg mx-auto text-lg md:text-xl font-light">
          The structural node you are attempting to access has been decentralized or permanently removed from the network.
        </p>
        
        <Link 
          href="/" 
          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-neutral-50 border border-neutral-700 rounded-full overflow-hidden transition-all hover:border-cyan-400 bg-neutral-900/50 backdrop-blur-md"
        >
          <div className="absolute bottom-0 left-0 w-full h-full bg-cyan-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          
          <span className="relative z-10 flex items-center gap-3 tracking-wide text-sm md:text-base">
            REBOOT SYSTEM
            <svg 
              className="w-5 h-5 transition-transform group-hover:rotate-180 duration-500 text-cyan-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}