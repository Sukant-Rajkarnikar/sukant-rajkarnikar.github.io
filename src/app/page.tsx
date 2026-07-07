"use client";

import { motion } from 'framer-motion';
import { Briefcase, Flame, FolderOpen, Home, Mail, MoveDown, PenSquare } from 'lucide-react';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaFlutter, FaLinkedin } from 'react-icons/fa6';
import { FiFigma } from 'react-icons/fi';
import { LiaLinkedin } from 'react-icons/lia';
import { RiFlutterLine } from 'react-icons/ri';
import { SiKotlin } from 'react-icons/si';
import { TbBrandFlutter, TbBrandKotlin } from 'react-icons/tb';

const smoothTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

export default function HomePage() {
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
  return (
    <div className="fixed top-8 w-full z-50 flex justify-center pointer-events-none">
      <div className="bg-[#1C1C1C] border border-neutral-800 rounded-full px-6 py-4 flex gap-8 pointer-events-auto shadow-2xl">
        <a href="#home" className="text-neutral-400 hover:text-[#E04D1B] transition-colors"><Home size={20} /></a>
        <a href="#projects" className="text-neutral-400 hover:text-[#E04D1B] transition-colors"><FolderOpen size={20} /></a>
        <a href="#experience" className="text-neutral-400 hover:text-[#E04D1B] transition-colors"><Briefcase size={20} /></a>
        <a href="#blog" className="text-neutral-400 hover:text-[#E04D1B] transition-colors"><PenSquare size={20} /></a>
        <a href="#contact" className="text-neutral-400 hover:text-[#E04D1B] transition-colors"><Mail size={20} /></a>
      </div>
    </div>
  );
}

function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={smoothTransition}
      className="sticky top-32 bg-white rounded-[2rem] p-6 text-black flex flex-col items-center text-center shadow-2xl"
    >
      <div className="relative w-[calc(100%-4rem)] aspect-square rounded-2xl bg-[#E04D1B] mb-8 overflow-hidden flex items-end justify-center">
        <div className="absolute top-0 left-0 w-full h-full rounded-2xl scale-110 -translate-x-4 -translate-y-4" />
        <img
          src="/profile.png"
          alt="Sukant Rajkarnikar"
          className="relative z-10 w-full h-full object-cover"
        />
      </div>

      <h1 className="text-3xl font-extrabold mb-4">
        Sukant Rajkarnikar
      </h1>

      <div className="flex gap-2 text-[#E04D1B]">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white mb-8 shadow-lg shadow-[#E04D1B]/30">
          <img className='w-7' src="/icon-flutter.png" />
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white mb-8 shadow-lg shadow-[#E04D1B]/30">
          <img className='w-7' src="/icon-kotlin.png" />
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white mb-8 shadow-lg shadow-[#E04D1B]/30">
          <img className='w-7' src="/icon-figma.png" />
        </div>
      </div>


      <p className="text-neutral-500 font-medium text-lg line-height-0.5 leading-tight mb-8 max-w-[250px] ">
        A Flutter and Kotlin specialist engineering premium mobile experiences.
      </p>

      <div className="flex gap-4 text-[#E04D1B]">
        <a
          href="https://www.linkedin.com/in/sukant-rajkarnikar/"
          className="p-2 hover:bg-orange-50 rounded-full transition-colors"
        >
          <FaLinkedinIn size={25} />
        </a>

        <a
          href="https://github.com/Sukant-Rajkarnikar"
          className="p-2 hover:bg-orange-50 rounded-full transition-colors"
        >
          <FaGithub size={25} />
        </a>
      </div>
    </motion.div>
  );
}

function HeroContent() {
  return (<motion.section
    id="home"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ ...smoothTransition, delay: 0.2 }}
    className="min-h-screen flex flex-col justify-start scroll-mt-28 py-4"
  >
    <h2 className="text-6xl md:text-[6.5rem] font-black leading-none tracking-relaxed mb-6">
      SOFTWARE <br />
      <span className="text-neutral-600">ENGINEER</span>
    </h2>

    <p className="text-neutral-400 text-lg max-w-xl leading-snug tracking-relaxed mb-16">
      I bridge the gap between beautiful UI design and robust mobile architecture. Passionate about engineering native quality applications that don't just function flawlessly, they captivate users.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="group flex flex-col justify-between p-8 bg-[#1C1C1C] hover:bg-[#252525] duration-300 border border-transparent hover:border-neutral-800 rounded-3xl transition-all cursor-default">
        <div>
          <span className="text-xl font-bold mb-3 text-white block">Clean Architecture</span>
          <span className="text-sm text-neutral-400 leading-relaxed block">
            Building scalable, decoupled systems that are easy to maintain and test.
          </span>
        </div>
        <div className="w-12 h-1 bg-neutral-800 group-hover:bg-[#E04D1B] duration-300 transition-colors mt-8 rounded-full" />
      </div>
      <div className="group flex flex-col justify-between p-8 bg-[#1C1C1C] hover:bg-[#252525] duration-300 border border-transparent hover:border-neutral-800 rounded-3xl transition-all cursor-default">
        <div>
          <span className="text-xl font-bold mb-3 text-white block">State Management</span>
          <span className="text-sm text-neutral-400 leading-relaxed block">
            Expertise in handling complex application states using modern tooling.
          </span>
        </div>
        <div className="w-12 h-1 bg-neutral-800 group-hover:bg-[#E04D1B] duration-300 transition-colors mt-8 rounded-full" />
      </div>
      <div className="group flex flex-col justify-between p-8 bg-[#1C1C1C] hover:bg-[#252525] border border-transparent hover:border-neutral-800 rounded-3xl transition-all cursor-default">
        <div>
          <span className="text-xl font-bold mb-3 text-white block">Pixel-Perfect UI</span>
          <span className="text-sm text-neutral-400 leading-relaxed block">
            Translating complex designs into smooth, interactive frontend experiences.
          </span>
        </div>
        <div className="w-12 h-1 bg-neutral-800 group-hover:bg-[#E04D1B] transition-colors mt-8 rounded-full" />
      </div>

    </div>
  </motion.section>);
}

function Projects() {
  return (<motion.section
    id="projects"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={smoothTransition}
    className="min-h-screen flex flex-col justify-start scroll-mt-28 py-4"
  >
    <h2 className="text-6xl md:text-[6.5rem] font-black leading-none tracking-tighter mb-16">
      RECENT <br />
      <span className="text-neutral-600">PROJECTS</span>
    </h2>

  </motion.section>);
}

function Experience() {
  return (<motion.section
    id="experience"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={smoothTransition}
    className="min-h-screen flex flex-col justify-start scroll-mt-28 py-4"
  >
    <h2 className="text-6xl md:text-[6.5rem] font-black leading-none tracking-tighter mb-16">
      EXPERIENCES <br />
    </h2>

  </motion.section>);
}

function Blog() {
  return (<motion.section
    id="blog"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={smoothTransition}
    className="min-h-screen flex flex-col justify-start scroll-mt-28 py-4"
  >
    <h2 className="text-6xl md:text-[6.5rem] font-black leading-none tracking-tighter mb-16">
      THOUGHTS <br />
    </h2>

  </motion.section>);
}

function Contact() {
  return (<motion.section
    id="contact"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={smoothTransition}
    className="min-h-screen flex flex-col justify-start scroll-mt-28 py-4"
  >
    <h2 className="text-6xl md:text-[6.5rem] font-black leading-none tracking-tighter mb-8">
      LET'S WORK <br />
      <span className="text-neutral-600">TOGETHER</span>
    </h2>

    <form className="space-y-6 max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-neutral-500">Name</label>
            <input type="text" placeholder="Your Name" className="w-full bg-[#1C1C1C] text-white p-4 rounded-xl outline-none focus:ring-2 focus:ring-[#E04D1B] transition-all" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-neutral-500">Email</label>
            <input type="email" placeholder="Your@email.com" className="w-full bg-[#1C1C1C] text-white p-4 rounded-xl outline-none focus:ring-2 focus:ring-[#E04D1B] transition-all" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-neutral-500">Message</label>
          <textarea placeholder="Message" rows={4} className="w-full bg-[#1C1C1C] text-white p-4 rounded-xl outline-none focus:ring-2 focus:ring-[#E04D1B] transition-all resize-none" />
        </div>

        <button type="button" className="w-full bg-[#E04D1B] hover:bg-[#c23f11] text-white font-bold py-4 rounded-xl transition-colors mt-4">
          Submit
        </button>
      </form>
  </motion.section>);
}