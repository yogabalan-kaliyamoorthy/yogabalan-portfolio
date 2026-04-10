import { Briefcase, Award } from "lucide-react";
import { motion } from "framer-motion";

const certificates = [
  "C Programming Language – Infosystems",
  "C & C++ Programming – Isysway Technologies",
  "Cloud Computing (Elite Distinction) – SWAYAM (NPTEL)",
  "IoT Obstacle Avoidance Robot (Internship) – Livewire Software",
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-12 h-0.5 bg-primary mb-12" />
        </motion.div>

        {/* Internships */}
        <div className="grid gap-6 mb-12">
          {[
            {
              title: "Gen AI / LLMs Prototyping Intern",
              company: "Gateway Solutions · Coimbatore · Mar 2026 – May 2026",
              points: [
                "Hands-on experience in Generative AI and LLM-based development",
                "Contributed to innovative AI-driven projects and prototyping",
              ],
            },
            {
              title: "IoT Intern – Obstacle Avoidance Robot",
              company: "Livewire Technologies · Thanjavur · Jul 2025",
              points: [
                "Developed an IoT-based obstacle avoidance robot with autonomous navigation",
                "Integrated real-time obstacle detection using sensors and control systems",
              ],
            },
          ].map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1], boxShadow: { duration: 0.08 } }}
              whileHover={{ boxShadow: "0 0 20px hsl(var(--primary) / 0.4), inset 0 0 20px hsl(var(--primary) / 0.05)" }}
              className="p-6 rounded-lg bg-card border border-border hover:glow-border transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <Briefcase size={20} className="text-primary" />
                <h3 className="font-display text-lg font-semibold">{job.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground font-display mb-3">{job.company}</p>
              <ul className="space-y-2 text-muted-foreground text-sm ml-1">
                {job.points.map((point, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.15 + j * 0.1 + 0.3 }}
                    className="flex gap-2"
                  >
                    <span className="text-primary mt-1">▸</span>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Certificates */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-display text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6 flex items-center gap-2"
        >
          <Award size={16} className="text-primary" />
          Certifications
        </motion.h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1], boxShadow: { duration: 0.08 } }}
              whileHover={{ boxShadow: "0 0 15px hsl(var(--primary) / 0.3)" }}
              className="p-4 rounded-md bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <p className="text-sm">{cert}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
