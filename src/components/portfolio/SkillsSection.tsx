import { motion } from "framer-motion";

const skills = {
  PROGRAMS: ["C", "C++", "Python"],
  AGENTS: ["LLM", "Black Box", "Cursor", "Claud"],
  "FRONT END": ["HTML"],
  "BACK END": ["Python", "SQL", "Git"],
  TOOLS: ["VS Code", "Git", "Github"],
};

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
            >
              <h3 className="font-display text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
                {category}
              </h3>
              <div className="space-y-2">
                {skillList.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05, ease: [0.16, 1, 0.3, 1], boxShadow: { duration: 0.08 } }}
                    whileHover={{ 
                      boxShadow: "0 0 20px hsl(var(--primary) / 0.5)"
                    }}
                    className="flex items-center gap-3 p-2 rounded-md border border-border cursor-pointer hover:glow-border transition-all duration-300"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: skillIndex * 0.5 }}
                      className="w-2 h-2 rounded-full bg-primary shrink-0"
                    />
                    <span className="text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
