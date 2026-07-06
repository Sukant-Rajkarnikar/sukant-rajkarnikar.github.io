"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flame, MoveDown } from 'lucide-react';

const smoothTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

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
    <div className="min-h-screen bg-[#121212] text-neutral-50 font-sans pb-24 scroll-smooth">
      <TopNav />
      <main className="max-w-7xl mx-auto px-6 pt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
        <div className="lg:col-span-4 relative">
          <ProfileCard />
        </div>
        <div className="lg:col-span-8">
          <HeroContent />
          <Projects />
          <Experience />
          <Blog />
          <Contact />
        </div>
      </main>
    </div>
  );
}

function TopNav() {
  return (<div className='fixed top-8 w-full z-50 flex justify-center'>Top Nav Bar</div>);
}

function ProfileCard() {
  return (<div>Profile Card</div>);
}

function HeroContent() {
  return (<div>Hero Section</div>);
}

function Projects() {
  return (<div>Projects Section</div>);
}

function Experience() {
  return (<div>Experience Section</div>);
}

function Blog() {
  return (<div>Blogs Section</div>);
}

function Contact() {
  return (<div>Contact</div>);
}