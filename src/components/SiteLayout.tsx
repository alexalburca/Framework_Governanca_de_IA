import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Início" },
  { to: "/framework", label: "Framework" },
  { to: "/guia", label: "Guia de Implementação" },
  { to: "/checklist", label: "Checklist" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="grid h-8 w-8 place-items-center rounded-sm bg-primary text-primary-foreground font-black">
              G
            </span>
            <span className="font-black tracking-[0.2em] text-sm">
              GOVERNANÇA<span className="text-primary"> IA</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-muted-foreground hover:text-foreground transition-colors [&.active]:text-foreground"
                activeProps={{ className: "active" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <a
            href="https://github.com/alexalburca/Framework_Governanca_de_IA"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center rounded-sm bg-primary px-4 py-2 text-xs font-bold tracking-widest text-primary-foreground hover:bg-primary/90 transition"
          >
            GITHUB
          </a>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/60 bg-card/40 mt-24">
        <div className="mx-auto max-w-7xl px-6 py-12 grid gap-10 md:grid-cols-4 text-sm">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="grid h-8 w-8 place-items-center rounded-sm bg-primary text-primary-foreground font-black">
                G
              </span>
              <span className="font-black tracking-[0.2em]">
                GOVERNANÇA<span className="text-primary"> IA</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Framework aberto para Governança de Inteligência Artificial em
              ambientes de Operações Críticas — telecom, redes e datacenter.
            </p>
          </div>
          <div>
            <div className="text-xs font-bold tracking-widest mb-3 text-muted-foreground">
              DOCUMENTOS
            </div>
            <ul className="space-y-2">
              {nav.slice(1).map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-bold tracking-widest mb-3 text-muted-foreground">
              PROJETO
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/alexalburca/Framework_Governanca_de_IA"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground/80 hover:text-primary"
                >
                  Repositório GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/alexalburca/Framework_Governanca_de_IA/issues"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground/80 hover:text-primary"
                >
                  Issues
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Framework de Governança de IA — Alex Alburca.
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
  return (
    <section
      className="border-b border-border/60"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="text-xs font-bold tracking-[0.3em] text-primary mb-4">
          {eyebrow}
        </div>
        <h1 className="text-4xl md:text-6xl font-black leading-[1.05] max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

export function ContentSection({ children }: { children: ReactNode }) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">{children}</section>
  );
}
