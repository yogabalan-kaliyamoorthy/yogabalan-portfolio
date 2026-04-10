import { motion } from "framer-motion";

const technicalSkills = [
  { name: "C", level: 75 },
  { name: "C++", level: 70 },
  { name: "Python", level: 80 },
  { name: "SQL / MySQL", level: 70 },
  { name: "Git & GitHub", level: 65 },
];

const softSkills = [
  "Adaptability & Willingness to Learn",
  "Problem-Solving Skills",
  "Teamwork & Collaboration",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/50 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-12 h-0.5 bg-primary mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="font-display text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6"
            >
              Technical
            </motion.h3>
            <div className="space-y-5">
              {technicalSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="flex justify-between mb-1.5">
                    <span className="font-display text-sm font-medium">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 1, delay: i * 0.1 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{ background: 'var(--gradient-accent)' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="font-display text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6"
            >
              Soft Skills
            </motion.h3>
            <div className="space-y-3">
              {softSkills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.12 + 0.2, boxShadow: { duration: 0.08 } }}
                  whileHover={{ boxShadow: "0 0 15px hsl(var(--primary) / 0.3)" }}
                  className="flex items-center gap-3 p-3 rounded-md border border-border"
                >
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    className="w-2 h-2 rounded-full bg-primary shrink-0"
                  />
                  <span className="text-sm">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
