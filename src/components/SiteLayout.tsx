import { useState, type ReactNode, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Github, 
  BookOpen, 
  ClipboardCheck, 
  ShieldCheck, 
  HelpCircle, 
  Calendar, 
  Home,
  ChevronRight,
  Menu,
  X,
  Cpu,
  Network,
  Server,
  Activity,
  Globe
} from "lucide-react";

const nav = [
  { to: "/", label: "Início", code: "00", icon: Home },
  { to: "/framework", label: "Framework", code: "01", icon: ShieldCheck },
  { to: "/guia", label: "Guia", code: "02", icon: BookOpen },
  { to: "/checklist", label: "Checklist", code: "03", icon: ClipboardCheck },
  { to: "/glossario", label: "Glossário", code: "04", icon: HelpCircle },
  { to: "/cronograma", label: "Cronograma", code: "05", icon: Calendar },
] as const;

function LogoMark() {
  return (
    <motion.span
      className="grid h-9 w-9 place-items-center rounded-sm border border-primary text-primary relative overflow-hidden shrink-0"
      style={{ boxShadow: "var(--shadow-glow)" }}
      aria-hidden="true"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.div
        animate={{ 
          opacity: [0.5, 1, 0.7, 1, 0.8],
          filter: ["brightness(1)", "brightness(1.5)", "brightness(1)", "brightness(1.8)", "brightness(1)"] 
        }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.4, 0.6, 1] }}
      >
        <Cpu className="h-5 w-5" />
      </motion.div>
      <motion.div 
        className="absolute inset-0 bg-primary/10"
        animate={{ translateY: ["-100%", "100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </motion.span>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { location } = useRouterState();

  // Fechar menu ao mudar de rota
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen text-foreground flex flex-col selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <header
        className="sticky top-0 z-50 border-b backdrop-blur"
        style={{
          borderColor: "var(--color-border)",
          background: "rgba(4,15,31,0.85)",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <LogoMark />
            <div className="flex flex-col leading-tight overflow-hidden">
              <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.12em] sm:tracking-[0.18em] text-primary uppercase truncate">
                Governança_IA
              </span>
              <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.12em] text-muted-foreground truncate">
                v1.0 · OPERAÇÕES CRÍTICAS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 text-sm">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="group relative px-3 py-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-primary transition-colors [&.active]:text-primary"
                activeProps={{ className: "active" }}
              >
                <span className="opacity-50 mr-1">{n.code}</span>
                {n.label}
                <span className="absolute left-3 right-3 -bottom-px h-px bg-primary scale-x-0 group-[.active]:scale-x-100 transition-transform" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="https://github.com/alexalburca/Framework_Governanca_de_IA"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-sm border border-primary/40 px-3 py-2 font-mono text-[10px] font-medium tracking-[0.18em] text-primary hover:bg-primary/10 transition"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              <Github className="h-3 w-3" />
              GITHUB
            </a>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-primary focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-b bg-void/95 backdrop-blur-xl overflow-hidden"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div className="px-6 py-8 flex flex-col gap-4">
                {nav.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    className="flex items-center justify-between p-4 rounded-sm border border-primary/10 bg-primary/5 hover:bg-primary/10 transition-colors group [&.active]:border-primary/40"
                    activeProps={{ className: "active" }}
                  >
                    <div className="flex items-center gap-4">
                      <n.icon size={18} className="text-primary/60 group-hover:text-primary transition-colors" />
                      <div className="flex flex-col">
                        <span className="font-mono text-[9px] tracking-widest text-primary/40 uppercase">Code_{n.code}</span>
                        <span className="font-semibold tracking-tight">{n.label}</span>
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-primary/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
                <a
                  href="https://github.com/alexalburca/Framework_Governanca_de_IA"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 flex items-center justify-center gap-3 rounded-sm bg-primary p-4 font-mono text-xs font-bold tracking-widest text-primary-foreground uppercase shadow-lg shadow-primary/20"
                >
                  <Github size={16} />
                  ACESSAR REPOSITÓRIO
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t mt-12 sm:mt-24 relative overflow-hidden" style={{ borderColor: "var(--color-border)", background: "rgba(4,15,31,0.6)" }}>
        <div className="absolute inset-0 opacity-20 pointer-events-none animate-scanning" />
        <div className="mx-auto max-w-7xl px-6 py-12 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-sm relative z-10">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <LogoMark />
              <span className="font-mono text-[11px] tracking-[0.18em] text-primary uppercase">
                Governança_IA
              </span>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed text-xs sm:text-sm">
              Framework aberto para Governança de Inteligência Artificial em
              ambientes de Operações Críticas — telecom, redes e datacenter.
            </p>
          </div>
          <div>
            <div className="font-mono text-[10px] tracking-[0.18em] mb-4 text-primary/70 uppercase">
              // Documentos
            </div>
            <ul className="space-y-3 sm:space-y-2">
              {nav.slice(1).map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-foreground/80 hover:text-primary transition-colors flex items-center gap-2 group/link py-1 sm:py-0">
                    <n.icon className="h-3.5 w-3.5 opacity-40 group-hover/link:opacity-100 transition-opacity" />
                    <span className="text-xs sm:text-sm">{n.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-mono text-[10px] tracking-[0.18em] mb-4 text-primary/70 uppercase">
              // Projeto
            </div>
            <ul className="space-y-3 sm:space-y-2">
              <li>
                <a
                  href="https://github.com/alexalburca/Framework_Governanca_de_IA"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground/80 hover:text-primary text-xs sm:text-sm flex items-center gap-2 py-1 sm:py-0"
                >
                  <Github className="h-3.5 w-3.5 opacity-40" />
                  Repositório GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/alexalburca/Framework_Governanca_de_IA/issues"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground/80 hover:text-primary text-xs sm:text-sm py-1 sm:py-0"
                >
                  Issues
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="border-t py-6 text-center font-mono text-[9px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.18em] text-muted-foreground uppercase px-4"
          style={{ borderColor: "var(--color-border)" }}
        >
          © {new Date().getFullYear()} · Framework de Governança de IA · Alex Alburca
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 25]);

  return (
    <section
      ref={containerRef}
      className="border-b relative overflow-hidden"
      style={{ background: "var(--gradient-hero)", borderColor: "var(--color-border)" }}
    >
      {/* Background Parallax Elements */}
      <motion.div 
        style={{ y: y1, rotate }}
        animate={{ 
          x: [0, 10, 0],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-5 sm:top-10 right-5 sm:right-10 opacity-5 pointer-events-none"
      >
        <Network size={200} className="sm:w-[300px] sm:h-[300px]" />
      </motion.div>

      <motion.div 
        style={{ y: y2 }}
        animate={{ 
          x: [0, -15, 0],
          opacity: [0.03, 0.06, 0.03]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-5 left-5 sm:left-10 opacity-5 pointer-events-none"
      >
        <Globe size={150} className="sm:w-[200px] sm:h-[200px]" />
      </motion.div>

      <div className="absolute inset-0 animate-scanning opacity-20 pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-28 relative z-10">
        <div className="font-mono text-[10px] sm:text-[11px] font-medium tracking-[0.2em] sm:tracking-[0.25em] text-primary mb-4 uppercase">
          <span className="opacity-50">// </span>
          {eyebrow}
        </div>
        <h1 className="text-3xl sm:text-6xl font-bold leading-[1.1] sm:leading-[1.05] tracking-tight max-w-3xl text-foreground">
          {title}
        </h1>
        {description && (
          <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

export function ContentSection({ children }: { children: ReactNode }) {
  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">{children}</section>
  );
}
