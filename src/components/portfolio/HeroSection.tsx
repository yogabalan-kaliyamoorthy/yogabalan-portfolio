import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import { type MouseEvent } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollTo = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="top" className="min-h-screen flex flex-col justify-center section-padding relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      <div className="relative z-10 max-w-4xl">
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6"
        >
           <span className="text-foreground">YOGA</span>
           <span className="text-gradient">BALAN</span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted-foreground text-3xl md:text-4xl lg:text-5xl font-light font-body inline-block"
          >
            KALIYAMOORTHY
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 font-body font-light leading-relaxed"
        >
          Welcome to my portfolio. This space showcases the work I’ve done and the skills I’ve built by working on real projects. I focus on learning by doing, taking responsibility, and improving step by step. I am currently looking for opportunities where I can grow while contributing to meaningful work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex items-center gap-6 mb-16"
        >
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "#contact")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display text-sm font-semibold rounded-md hover:opacity-90 transition-opacity"
          >
            <Mail size={16} />
            Get in Touch
          </a>
          <motion.a
            whileHover={{ scale: 1.1, borderColor: "hsl(var(--primary))" }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/yogabalan-kaliyamoorthy" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-md border border-border transition-colors"
          >
            <Linkedin size={18} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, borderColor: "hsl(var(--primary))" }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/yogabalan-kaliyamoorthy" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-md border border-border transition-colors"
          >
            <Github size={18} />
          </motion.a>
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          href="#about"
          onClick={(e) => scrollTo(e, "#about")}
          className="inline-flex items-center gap-2 text-muted-foreground text-sm font-display hover:text-primary transition-colors"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex"
          >
            <ArrowDown size={16} />
          </motion.span>
          Scroll down
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
