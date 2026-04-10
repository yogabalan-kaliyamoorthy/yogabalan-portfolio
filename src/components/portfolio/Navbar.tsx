import { useState, useEffect, type MouseEvent } from "react";
import { Menu, X, GraduationCap, Zap, Briefcase, Code, Mail } from "lucide-react";

const links = [
  { label: "About", href: "#about", icon: GraduationCap, desc: "Education & Background" },
  { label: "Skills", href: "#skills", icon: Zap, desc: "Technical & Soft Skills" },
  { label: "Experience", href: "#experience", icon: Briefcase, desc: "Internships & Certificates" },
  { label: "Projects", href: "#projects", icon: Code, desc: "Featured Work" },
  { label: "Contact", href: "#contact", icon: Mail, desc: "Get in Touch" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("#" + entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 h-14">
        <a href="#top" onClick={(e) => scrollToSection(e, "#top")} className="font-display font-bold text-lg">
          Y<span className="text-gradient">K</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link, i) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-4 py-2 font-display text-xs tracking-wider uppercase transition-colors duration-200 ${
                  activeSection === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full animate-fade-in" />
                )}
              </a>

              {/* Hover tooltip */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 transition-all duration-200 ${
                  hoveredIndex === i
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="bg-card border border-border rounded-lg px-4 py-3 shadow-lg min-w-[180px]">
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-card border-l border-t border-border" />
                  <div className="relative flex items-center gap-3">
                    <div className="p-1.5 rounded-md bg-primary/10">
                      <link.icon size={14} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-display font-semibold text-foreground">{link.label}</p>
                      <p className="text-[11px] text-muted-foreground">{link.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-muted-foreground">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-1 animate-fade-in">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-md font-display text-sm transition-colors ${
                activeSection === link.href
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-card"
              }`}
            >
              <link.icon size={16} />
              <div>
                <span>{link.label}</span>
                <p className="text-[10px] text-muted-foreground">{link.desc}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
