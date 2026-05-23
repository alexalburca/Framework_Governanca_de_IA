import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "../components/SiteLayout";
import { MarkdownView } from "../components/MarkdownView";
import readme from "../content/readme.md?raw";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  ShieldCheck, 
  BookOpen, 
  ClipboardCheck, 
  ArrowRight,
  ShieldAlert,
  Zap,
  Lock,
  Search,
  Activity,
  Server,
  Network,
  Globe
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Framework de Governança de IA para Operações Críticas" },
      {
        name: "description",
        content:
          "Framework prático e adaptável para governança de IA em operações críticas — telecom, redes e datacenter. Conformidade com LGPD, AI Act, NIST AI RMF e ISO/IEC 42001.",
      },
      {
        property: "og:title",
        content: "Framework de Governança de IA para Operações Críticas",
      },
      {
        property: "og:description",
        content:
          "Cinco pilares para integrar IA de forma responsável, segura e auditável em ambientes críticos.",
      },
    ],
  }),
  component: Index,
});

const docs = [
  {
    to: "/framework" as const,
    num: "01",
    label: "Framework",
    icon: ShieldCheck,
    desc: "Documento principal com os 5 pilares de governança de IA para operações críticas.",
    color: "#00D4FF"
  },
  {
    to: "/guia" as const,
    num: "02",
    label: "Guia de Implementação",
    icon: BookOpen,
    desc: "Passo a passo prático para implementar o framework na sua organização.",
    color: "#1A7FFF"
  },
  {
    to: "/checklist" as const,
    num: "03",
    label: "Checklist",
    icon: ClipboardCheck,
    desc: "Lista de verificação para auditoria e conformidade.",
    color: "#00FF9C"
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

function Index() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <SiteLayout>
      <section
        ref={containerRef}
        className="relative overflow-hidden border-b min-h-[85vh] sm:min-h-[90vh] flex items-center"
        style={{ background: "var(--gradient-hero)", borderColor: "var(--color-border)" }}
      >
        {/* Parallax Background Layers with Discrete Loops */}
        <motion.div 
          style={{ y: y1, rotate }}
          animate={{ 
            x: [0, 15, 0],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-10 sm:top-20 right-5 sm:right-10 opacity-5 pointer-events-none"
        >
          <Network size={250} className="sm:w-[400px] sm:h-[400px]" />
        </motion.div>

        <motion.div 
          style={{ y: y2 }}
          animate={{ 
            x: [0, -20, 0],
            opacity: [0.08, 0.12, 0.08]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-10 left-10 sm:left-20 opacity-10 pointer-events-none"
        >
          <Server size={200} className="sm:w-[300px] sm:h-[300px]" />
        </motion.div>

        <motion.div 
          style={{ y: y3 }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.07, 0.03]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 left-1/4 sm:left-1/3 opacity-5 pointer-events-none"
        >
          <Activity size={150} className="sm:w-[200px] sm:h-[200px]" />
        </motion.div>

        <div className="absolute inset-0 animate-scanning opacity-30 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-32 relative z-10 w-full">
          <motion.div
            style={{ opacity }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="font-mono text-[10px] sm:text-[11px] font-medium tracking-[0.2em] sm:tracking-[0.3em] text-primary mb-4 sm:mb-6 uppercase flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00FF9C] animate-pulse" style={{ boxShadow: "0 0 8px #00FF9C" }} aria-hidden="true" />
                FRAMEWORK · v1.0
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-7xl font-bold leading-[1.1] sm:leading-[1.05] tracking-tight max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Governança de IA para{" "}
              <span
                className="text-primary relative inline-block"
                style={{ textShadow: "0 0 30px rgba(0,212,255,0.4)" }}
              >
                operações críticas
                <motion.span 
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-primary/30"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </span>
              <span className="text-primary">.</span>
            </motion.h1>

            <motion.p 
              className="mt-6 sm:mt-8 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Um framework prático e adaptável para implementação segura e eficaz
              de IA em ambientes de alta disponibilidade e missão crítica.
            </motion.p>

            <motion.div 
              className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                to="/framework"
                className="group inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 sm:px-8 py-4 font-mono text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-primary-foreground hover:bg-primary/90 transition-all uppercase"
                style={{ boxShadow: "var(--shadow-glow)" }}
              >
                INICIAR EXPLORAÇÃO 
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/guia"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-primary/40 px-6 sm:px-8 py-4 font-mono text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-primary hover:bg-primary/10 transition-all uppercase"
              >
                <Zap className="h-4 w-4" />
                GUIA TÉCNICO
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {docs.map((d) => (
            <motion.div key={d.to} variants={item}>
              <Link
                to={d.to}
                className="group relative bg-card/50 backdrop-blur-sm p-6 sm:p-8 border border-border hover:border-primary/60 transition-all flex flex-col justify-between min-h-[220px] sm:min-h-[260px] rounded-sm overflow-hidden"
              >
                <div 
                  className="absolute inset-x-0 top-0 h-1 transition-all opacity-40 group-hover:opacity-100" 
                  style={{ background: `linear-gradient(90deg, transparent, ${d.color}, transparent)` }}
                />
                <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-all group-hover:scale-110 duration-500">
                  <d.icon size={100} className="sm:w-[120px] sm:h-[120px]" />
                </div>
                
                <div>
                  <div className="font-mono text-[9px] sm:text-[10px] font-semibold tracking-[0.3em] text-primary uppercase flex items-center gap-2">
                    <span className="opacity-40">//</span> {d.num}
                  </div>
                  <div className="mt-3 sm:mt-4 flex items-center gap-3">
                    <div className="p-2 rounded-sm bg-primary/5 text-primary border border-primary/10 group-hover:scale-110 transition-transform">
                      <d.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div className="text-xl sm:text-2xl font-semibold group-hover:text-primary transition-colors">
                      {d.label}
                    </div>
                  </div>
                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {d.desc}
                  </p>
                </div>
                
                <div className="mt-6 sm:mt-8 font-mono text-[9px] sm:text-[10px] font-semibold tracking-[0.25em] text-muted-foreground group-hover:text-primary transition-all flex items-center gap-2 uppercase">
                  ABRIR DOCUMENTO
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <motion.section 
        className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative p-0.5 sm:p-1 bg-gradient-to-b from-primary/20 to-transparent rounded-sm mb-12">
          <div className="bg-void p-4 sm:p-8 border border-primary/10">
            <MarkdownView source={readme} />
          </div>
        </div>
      </motion.section>
    </SiteLayout>
  );
}
