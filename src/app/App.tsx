import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  MessageCircle,
  Code2,
  Palette,
  Sparkles,
  Rocket,
} from "lucide-react";
import { motion } from "motion/react";
import img from "../public/me2.png";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const fullText = "Frontend Developer";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-96 h-96 bg-slate-800 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-1/2 w-96 h-96 bg-gray-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Glass Morphism Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                <Code2 className="text-white" size={20} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hidden sm:inline">
                DavidPeter
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {[
                "About",
                "Projects",
                "Skills",
                "Education",
                "Testimonials",
                "Contact",
              ].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative text-white/80 hover:text-white transition-colors group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg backdrop-blur-md bg-white/10 border border-white/20"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden backdrop-blur-md bg-white/10 border-t border-white/20"
          >
            <div className="px-4 py-4 space-y-3">
              {["About", "Projects", "Skills","Education", "Testimonials", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder - Shows first on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Glowing ring effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-2xl opacity-30 animate-pulse" />

                {/* Glass morphism container */}
                <div className="relative mt-12 backdrop-blur-md bg-white/10 border-2 border-white/20 rounded-full overflow-hidden shadow-2xl">
                  <div className="aspect-square w-full bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <img
                        src={img}
                        alt="Profile Picture of David Peter"
                        className="w-190 h-178 rounded-full max-md:w-95 max-md:h-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 rounded-full backdrop-blur-md bg-cyan-500/20 border border-cyan-400/30"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full backdrop-blur-md bg-purple-500/20 border border-purple-400/30"
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute top-1/2 -right-8 w-12 h-12 rounded-full backdrop-blur-md bg-pink-500/20 border border-pink-400/30"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                />
              </div>
            </motion.div>

            {/* Text Content - Shows second on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-medium">
                  <Sparkles size={16} />
                  Available for Freelance Projects
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text ml-4 text-transparent">
                  {displayText}
                  <span className="animate-pulse"></span>
                </span>
              </motion.h1>

              <motion.p
                className="text-xl sm:text-2xl md:text-3xl text-white/80 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Crafting pixel-perfect, responsive web experiences
              </motion.p>

              <motion.p
                className="text-base sm:text-lg text-white/60 mb-8 max-w-xl max-sm:text-center max-md:pl-10 align-center max-md:ml-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Specializing in React, TypeScript, and modern UI frameworks.
                Transforming designs into interactive, high-performance
                applications.
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/50">
                  View My Work
                </button>
                <button className="px-8 py-4 rounded-full backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  Get In Touch
                </button>
              </motion.div>

              <motion.div
                className="flex items-center justify-center lg:justify-start gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {[
                  { icon: Github, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Mail, href: "#" },
                  { icon: MessageCircle, href: "https://wa.me/1234567890" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-white/60" />
        </motion.div>

        {/* Decorative Code Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <motion.div
            className="absolute top-20 left-10 text-cyan-400 font-mono text-xs"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {"<div>"}
          </motion.div>
          <motion.div
            className="absolute top-40 right-20 text-purple-400 font-mono text-xs"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          >
            {"{ }"}
          </motion.div>
          <motion.div
            className="absolute bottom-40 left-1/4 text-pink-400 font-mono text-xs"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
          >
            {"</>"}
          </motion.div>
          <motion.div
            className="absolute bottom-1/3 right-1/4 text-cyan-400 font-mono text-xs"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          >
            {"=> { }"}
          </motion.div>

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10"
            >
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                <Code2 className="text-cyan-400" size={28} />
                My Journey
              </h3>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                As an intermediate frontend developer with 3+ years of
                experience, I've honed my skills in building responsive,
                accessible, and performant web applications that users love.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                My passion lies in bridging the gap between design and
                functionality, turning Figma mockups into living, breathing
                interfaces with clean, maintainable code.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10"
            >
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                <Palette className="text-purple-400" size={28} />
                What I Do Best
              </h3>
              <ul className="space-y-3">
                {[
                  "Build responsive UIs with React & TypeScript",
                  "Create smooth animations with Framer Motion",
                  "Implement pixel-perfect designs from Figma",
                  "Optimize web performance & accessibility",
                  "Collaborate with designers & backend teams",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "25+", label: "Projects Completed", icon: "🚀" },
              { number: "3+", label: "Years Experience", icon: "⏱️" },
              { number: "15+", label: "Happy Clients", icon: "😊" },
              { number: "100%", label: "Satisfaction Rate", icon: "⭐" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "E-Commerce Platform",
                description:
                  "A fully responsive online store with cart functionality, payment integration, and admin dashboard.",
                emoji: "🛍️",
                gradient: "from-cyan-500/20 to-blue-500/20",
                tech: ["React", "TypeScript", "Stripe", "Tailwind"],
                link: "#",
              },
              {
                title: "Task Management App",
                description:
                  "Collaborative project management tool with real-time updates, drag-and-drop, and team features.",
                emoji: "✅",
                gradient: "from-purple-500/20 to-pink-500/20",
                tech: ["Next.js", "React DnD", "Firebase", "Zustand"],
                link: "#",
              },
              {
                title: "Weather Dashboard",
                description:
                  "Interactive weather application with beautiful data visualizations and location-based forecasts.",
                emoji: "🌤️",
                gradient: "from-pink-500/20 to-orange-500/20",
                tech: ["React", "Chart.js", "API Integration", "CSS3"],
                link: "#",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>

                <div
                  className={`relative w-full h-48 bg-gradient-to-br ${project.gradient} rounded-xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                >
                  <span className="text-7xl">{project.emoji}</span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors relative">
                  {project.title}
                </h3>

                <p className="text-white/60 mb-4 leading-relaxed relative">
                  {project.description}
                </p>

                <div className="flex gap-2 flex-wrap mb-4 relative">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium relative"
                >
                  View Project
                  <Rocket
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            Skills & Technologies
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-6 text-white">
                Core Technologies
              </h3>
              <div className="space-y-6">
                {[
                  { name: "React & TypeScript", level: 85, color: "cyan" },
                  { name: "HTML5 & CSS3", level: 90, color: "purple" },
                  { name: "JavaScript (ES6+)", level: 88, color: "pink" },
                  { name: "Responsive Design", level: 92, color: "cyan" },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white/80">{skill.name}</span>
                      <span className="text-white/60">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full backdrop-blur-md bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-400`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-6 text-white">
                Tools & Frameworks
              </h3>
              <div className="space-y-6">
                {[
                  { name: "Tailwind CSS", level: 87, color: "cyan" },
                  { name: "Next.js & Vite", level: 80, color: "purple" },
                  { name: "Git & GitHub", level: 85, color: "pink" },
                  { name: "Figma to Code", level: 88, color: "cyan" },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white/80">{skill.name}</span>
                      <span className="text-white/60">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full backdrop-blur-md bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-400`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Next JS",
              "Figma",
              "React Router",
              "Framer Motion",
              "Vercel",
              "REST API",
              "Node.JS",
              "Three JS",
              "Netlify",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-100 group"
              >
                <p className="font-semibold text-sm group-hover:text-cyan-400 transition-colors">
                  {skill}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            Education
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                degree: "Bachelor of Technology in Computer Engineering",
                institution: "Rivers State University, Port Harcourt",
                year: "2023 - Present",
                description:
                  "Focused on frontend technologies, UX design principles, and modern JavaScript frameworks. Completed capstone project: Building a social media platform.",
                icon: "🎓",
              },
              {
                degree: "Full-Stack Web development",
                institution: "Loctech IT Training Institute",
                year: "Nov, 2023 - June, 2024",
                description:
                  "Intensive 8-month program covering React, TypeScript, state management, and modern build tools. Built 10+ real-world projects.",
                icon: "💻",
              },
              {
                degree: "Professional Certifications",
                institution: "Online Learning Platforms",
                year: "2023 - Present",
                description:
                  "Meta Frontend Developer Professional, Advanced React Patterns (Epic React), Responsive Web Design (freeCodeCamp), TypeScript Fundamentals.",
                icon: "🏆",
              },
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full backdrop-blur-md bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/20 flex items-center justify-center text-3xl">
                      {edu.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-1 text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-cyan-400 font-medium">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="mt-2 md:mt-0 px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-sm whitespace-nowrap w-fit">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-white/70 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="relative py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            Testimonials
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Their ability to turn Figma designs into pixel-perfect, responsive interfaces is remarkable. The attention to detail and code quality exceeded our expectations.",
                name: "Sarah Chen",
                position: "UI/UX Designer at DesignHub",
                avatar: "👩‍🎨",
              },
              {
                quote:
                  "Best frontend developer I've worked with. Fast turnaround, clean code, and excellent communication throughout the project. Highly recommend!",
                name: "Marcus Rivera",
                position: "Product Owner at TechFlow",
                avatar: "👨‍💼",
              },
              {
                quote:
                  "Brought our e-commerce platform to life with smooth animations and flawless mobile responsiveness. A true professional who delivers beyond expectations.",
                name: "Emily Park",
                position: "Founder of ShopLocal",
                avatar: "👩‍💻",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 flex flex-col"
              >
                <div className="mb-4">
                  <svg
                    className="w-8 h-8 text-cyan-400 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>

                <p className="text-white/80 mb-6 flex-grow leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full backdrop-blur-md bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/20 flex items-center justify-center text-2xl flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-white/60">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Have a project in mind? Let's create something amazing together.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/50">
                Start a Conversation
              </button>
              <a
                href="https://wa.me/07056132170"
                className="px-8 py-4 rounded-full backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp Me
              </a>
            </div>
            <div className="flex items-center justify-center gap-6">
              {[
                { icon: Github, href: "https://github.com/Developer-Lounge", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/davidpeter", label: "LinkedIn" },
                {
                  icon: Mail,
                  href: "mailto:thedavidpeter0511@gmail.com",
                  label: "Email",
                },
                {
                  icon: MessageCircle,
                  href: "https://wa.me/07056132170",
                  label: "WhatsApp",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  title={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                  <Code2 className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  DavidPeter
                </span>
              </div>
              <p className="text-white/60 text-sm">
                Crafting beautiful, responsive web experiences that users love.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  "About",
                  "Projects",
                  "Skills",
                  "Education",
                  "Testimonials",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-white/60 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Connect</h4>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com/Developer-Lounge" },
                  { icon: Linkedin, href: "https://linkedin.com/in/davidpeter" },
                  { icon: Mail, href: "mailto:thedavidpeter0511@gmail.com" },
                  { icon: MessageCircle, href: "https://wa.me/07056132170" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 rounded-lg backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} DavidPeter. Designed & Built with{" "}
              <span className="text-pink-400">Vite JS</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
