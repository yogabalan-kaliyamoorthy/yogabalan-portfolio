import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">Contact</span>
          </h2>
          <div className="w-12 h-0.5 bg-primary mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
          {[
            { icon: Mail, label: "Email", value: "k.yogabalan@gmail.com", href: "mailto:k.yogabalan@gmail.com" },
            { icon: Phone, label: "Phone", value: "+91 7806923360", href: "tel:+917806923360" },
            { icon: MapPin, label: "Location", value: "Thanjavur, Tamil Nadu", href: "https://maps.google.com/?q=Thanjavur,+Tamil+Nadu" },
            { icon: Linkedin, label: "LinkedIn", value: "Yogabalan K", href: "https://www.linkedin.com/in/yogabalan-kaliyamoorthy" },
          ].map(({ icon: Icon, label, value, href }, i) => (
            <motion.a
              key={label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1], boxShadow: { duration: 0.08 } }}
              whileHover={{ boxShadow: "0 0 20px hsl(var(--primary) / 0.4), inset 0 0 15px hsl(var(--primary) / 0.05)" }}
              whileTap={{ scale: 0.98 }}
              href={href || "#"}
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/30 transition-colors group"
            >
              <Icon size={18} className="text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground font-display uppercase tracking-wider">{label}</p>
                <p className="text-sm group-hover:text-primary transition-colors">{value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 pt-8 border-t border-border text-center"
        >
          <p className="text-xs text-muted-foreground font-display">
            © {new Date().getFullYear()} Yogabalan K. Built with passion.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
