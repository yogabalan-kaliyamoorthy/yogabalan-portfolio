import { Heart, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    icon: <MessageSquare size={20} />,
    title: "CivicVoiceAI",
    description:
      "Collects and analyzes citizen feedback to identify trends and understand public sentiment, helping in better decision-making, policy planning, and generating clear, structured insights.",
    tags: ["Gen AI", "LLMs", "NLP", "Python"],
  },
  {
    icon: <Heart size={20} />,
    title: "Heart Disease Prediction",
    description:
      "Built a predictive model for heart disease using Logistic Regression. Used Python for data preprocessing and model implementation.",
    tags: ["Python", "Logistic Regression", "ML"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card/50 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-12 h-0.5 bg-primary mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-lg bg-card border border-border hover:glow-border transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-md bg-primary/10 text-primary">
                  {project.icon}
                </div>
                <h3 className="font-display text-xl font-semibold">
                  {project.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, j) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.2 + j * 0.05 + 0.4 }}
                    className="px-2.5 py-1 rounded text-xs font-display bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
