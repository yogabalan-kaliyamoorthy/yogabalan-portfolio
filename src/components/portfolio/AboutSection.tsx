import { GraduationCap, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  {
    institution: "Periyar Maniammai University",
    location: "Thanjavur",
    degree: "MCA – Master Of Computer Applications",
    period: "2024 – 2026",
  },
  {
    institution: "AVVM Sri Pushpam College",
    location: "Thanjavur",
    degree: "B.COM (CA) – Bachelor Of Commerce (Computer Applications)",
    period: "2021 – 2024",
  },
  {
    institution: "CS Matric Hr. Sec. School",
    location: "Thanjavur",
    degree: "HSC",
    period: "2019 – 2021",
  },
  {
    institution: "CS Matric Hr. Sec. School",
    location: "Thanjavur",
    degree: "SSLC",
    period: "2018 – 2019",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-12 h-0.5 bg-primary mb-12" />
        </motion.div>

        <div className="grid gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1], boxShadow: { duration: 0.08 } }}
              whileHover={{ boxShadow: "0 0 20px hsl(var(--primary) / 0.4), inset 0 0 20px hsl(var(--primary) / 0.05)" }}
              className="p-6 rounded-lg bg-card border border-border hover:glow-border transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                <div className="flex items-center gap-3">
                  <GraduationCap size={20} className="text-primary shrink-0" />
                  <h3 className="font-display text-lg font-semibold">{edu.institution}</h3>
                </div>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground font-display">
                  <Calendar size={14} />
                  {edu.period}
                </span>
              </div>
              <p className="text-muted-foreground ml-8">{edu.degree}</p>
              <p className="text-sm text-muted-foreground/70 ml-8">{edu.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
