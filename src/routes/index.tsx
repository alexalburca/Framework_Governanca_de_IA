import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "../components/SiteLayout";
import { MarkdownView } from "../components/MarkdownView";
import readme from "../content/readme.md?raw";

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
    desc: "Documento principal com os 5 pilares de governança de IA para operações críticas.",
  },
  {
    to: "/guia" as const,
    num: "02",
    label: "Guia de Implementação",
    desc: "Passo a passo prático para implementar o framework na sua organização.",
  },
  {
    to: "/checklist" as const,
    num: "03",
    label: "Checklist",
    desc: "Lista de verificação para auditoria e conformidade.",
  },
];

function Index() {
  return (
    <SiteLayout>
      <section
        className="relative overflow-hidden border-b border-border/60"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="text-xs font-bold tracking-[0.3em] text-primary mb-6">
            FRAMEWORK · OPERAÇÕES CRÍTICAS
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.02] tracking-tight max-w-5xl">
            Governança de IA para{" "}
            <span className="text-primary">operações críticas</span>.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
            Um framework prático e adaptável para implementação segura e eficaz
            de IA em telecom, redes e datacenter — garantindo conformidade e
            minimizando riscos operacionais.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/framework"
              className="inline-flex items-center rounded-sm bg-primary px-6 py-3 text-sm font-bold tracking-widest text-primary-foreground hover:bg-primary/90 transition"
            >
              LER O FRAMEWORK
            </Link>
            <Link
              to="/guia"
              className="inline-flex items-center rounded-sm border border-border px-6 py-3 text-sm font-bold tracking-widest hover:bg-card transition"
            >
              GUIA DE IMPLEMENTAÇÃO
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
          {docs.map((d) => (
            <Link
              key={d.to}
              to={d.to}
              className="group bg-card p-8 hover:bg-card/60 transition-colors flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <div className="text-xs font-bold tracking-[0.3em] text-primary">
                  {d.num}
                </div>
                <div className="mt-3 text-2xl font-bold group-hover:text-primary transition-colors">
                  {d.label}
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {d.desc}
                </p>
              </div>
              <div className="mt-6 text-xs font-bold tracking-widest text-foreground/70 group-hover:text-primary transition-colors">
                ABRIR →
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <MarkdownView source={readme} />
      </section>
    </SiteLayout>
  );
}
