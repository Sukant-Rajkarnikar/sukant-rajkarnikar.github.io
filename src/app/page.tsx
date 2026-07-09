"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase, FolderOpen, Home, Mail, PenSquare } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiFigma } from 'react-icons/fi';
import { SiKotlin, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { TbBrandFlutter, TbBrandNextjs } from 'react-icons/tb';

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
          {/* <Blog /> */}
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
        {/* <a href="#blog" className="text-neutral-400 hover:text-[#E04D1B] transition-colors"><PenSquare size={20} /></a> */}
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

      {/* <div className="flex gap-2 text-[#E04D1B]">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white mb-8 shadow-lg shadow-[#E04D1B]/30">
          <img className='w-7' src="/icon-flutter.png" />
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white mb-8 shadow-lg shadow-[#E04D1B]/30">
          <img className='w-7' src="/icon-kotlin.png" />
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white mb-8 shadow-lg shadow-[#E04D1B]/30">
          <img className='w-7' src="/icon-figma.png" />
        </div>
      </div> */}


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
  const skills = [
    { name: "Flutter", icon: <TbBrandFlutter size={24} />, level: 85 },
    { name: "Kotlin", icon: <SiKotlin size={20} />, level: 70 },
    { name: "UI/UX Design", icon: <FiFigma size={22} />, level: 60 },
    { name: "Next.js / React", icon: <SiNextdotjs size={20} />, level: 40 },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={22} />, level: 40 },
  ];

  return (
    <motion.section
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="group flex flex-col justify-center p-6 bg-[#1C1C1C] hover:bg-[#252525] duration-300 border border-transparent hover:border-neutral-800 rounded-3xl transition-all cursor-default"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="text-neutral-500 group-hover:text-[#E04D1B] transition-colors duration-300">
                  {skill.icon}
                </div>
                <span className="text-lg font-bold text-white block">{skill.name}</span>
              </div>
            </div>

            <div className="w-full h-2 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800/50">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 + (idx * 0.1) }}
                className="h-full bg-[#E04D1B] rounded-full relative"
              >
                <div className="absolute top-0 right-0 w-2 h-full bg-white/30 rounded-full" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

function Projects() {

  const projects = [
    { title: "Knits & Stitches", subtitle: "NextJS website", image: "/projects/KnS_website.png", url:"https://knitsandstitches.com/" },
    { title: "Splitwise", subtitle: "Flutter mobile application", image: "", url:"" },
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={smoothTransition}
      className="min-h-screen flex flex-col justify-start scroll-mt-10 pt-20"
    >
      <h2 className="text-6xl md:text-[6.5rem] font-black leading-none tracking-tighter mb-16">
        RECENT <br />
        <span className="text-neutral-600">PROJECTS</span>
      </h2>

      <div className="space-y-4">
        {projects.map((project, idx) => (
          <a 
            key={idx} 
            href={project.url}
            className="group flex items-center justify-between p-4 pr-8 bg-[#1C1C1C] hover:bg-[#252525] border border-transparent hover:border-neutral-800 rounded-2xl transition-all cursor-pointer"
          >
            <div className="flex items-center gap-6">
              <div className={`w-40 h-24 md:w-52 md:h-32 rounded-xl flex items-center justify-center bg-white/5 overflow-hidden`}>
                <img className='w-full h-full object-cover' src={project.image} alt={project.title} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1 text-white">{project.title}</h3>
                <p className="text-neutral-500">{project.subtitle}</p>
              </div>
            </div>
            <ArrowUpRight className="text-[#E04D1B] opacity-0 group-hover:opacity-100 transition-opacity" size={28} />
          </a>
        ))}
      </div>

    </motion.section>);
}

function Experience() {
  const experiences = [
    {
      company: "Evolve Asia Pvt. Ltd.",
      role: "Software Engineer",
      date: "Jul 2024 - Mar 2026",
      desc: "Architected and developed scalable mobile applications using Flutter and Kotlin. Led core feature implementation, optimized app performance, and maintained clean architecture standards across the codebase."
    },
    {
      company: "Evolve Asia Pvt. Ltd.",
      role: "Junior Software Engineer",
      date: "Jul 2023 - Jul 2024",
      desc: "Developed and maintained cross-platform mobile apps with flutter and native android applications with Kotlin. Handled complex state management, integrated REST APIs, and collaborated closely with the design team to ensure pixel-perfect UIs."
    },
    {
      company: "Evolve Asia Pvt. Ltd.",
      role: "Flutter Intern",
      date: "Oct 2022 - Jul 2023",
      desc: "Assisted in building Flutter application modules. Gained hands-on experience in modern mobile development workflows, state management, and version control."
    },
    {
      company: "Creatu Developers",
      role: "UI/ UX Designer",
      date: "Apr 2022 - Aug 2022",
      desc: "Designed intuitive user interfaces and crafted interactive prototypes. Created wireframes and user flows to seamlessly bridge the gap between initial concepts and final development."
    }
  ];

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={smoothTransition}
      className="min-h-screen flex flex-col justify-center scroll-mt-18 py-10"
    >
      <h2 className="text-6xl md:text-[6.5rem] font-black leading-none tracking-tighter mb-16">
        EXPERIENCES
      </h2>
      <div className="relative border-l border-neutral-800 ml-3 md:ml-4 space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-8 md:pl-12 group cursor-default">
            <div className="absolute w-4 h-4 rounded-full bg-[#121212] border-2 border-neutral-700 group-hover:border-[#E04D1B] group-hover:scale-125 transition-all duration-300 -left-[9px] top-1.5" />
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
              <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
              <span className="text-sm font-semibold text-[#E04D1B] mt-2 md:mt-0 tracking-wider">
                {exp.date}
              </span>
            </div>
            <span className="text-lg text-neutral-300 font-medium block mb-4">
              {exp.company}
            </span>
            <p className="text-neutral-400 leading-relaxed max-w-2xl">
              {exp.desc}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

function Blog() {
  return (<motion.section
    id="blog"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={smoothTransition}
    className="min-h-screen flex flex-col justify-start scroll-mt-13 py-15"
  >
    <h2 className="text-6xl md:text-[6.5rem] font-black leading-none tracking-tighter mb-16">
      THOUGHTS <br />
    </h2>

  </motion.section>);
}

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={smoothTransition}
      className="min-h-screen flex flex-col justify-start scroll-mt-10 pt-20"
    >
      <h2 className="text-6xl md:text-[6.5rem] font-black leading-none tracking-tighter mb-8">
        LET'S WORK <br />
        <span className="text-neutral-600">TOGETHER</span>
      </h2>

      <form 
        action="https://formspree.io/f/meebyjkq" 
        method="POST" 
        className="space-y-6 max-w-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-neutral-500">Name</label>
            <input 
              type="text" 
              name="name" 
              required 
              placeholder="Your Name" 
              className="w-full bg-[#1C1C1C] text-white p-4 rounded-xl outline-none focus:ring-2 focus:ring-[#E04D1B] transition-all" 
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-neutral-500">Email</label>
            <input 
              type="email" 
              name="email" 
              required 
              placeholder="Your@email.com" 
              className="w-full bg-[#1C1C1C] text-white p-4 rounded-xl outline-none focus:ring-2 focus:ring-[#E04D1B] transition-all" 
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-neutral-500">Message</label>
          <textarea 
            name="message" 
            required 
            placeholder="Message" 
            rows={4} 
            className="w-full bg-[#1C1C1C] text-white p-4 rounded-xl outline-none focus:ring-2 focus:ring-[#E04D1B] transition-all resize-none" 
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-[#E04D1B] hover:bg-[#c23f11] text-white font-bold py-4 rounded-xl transition-colors mt-4"
        >
          Submit
        </button>
      </form>
    </motion.section>
  );
}