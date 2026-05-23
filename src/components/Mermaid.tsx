import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

let initialized = false;
function ensureInit() {
  if (initialized) return;
  mermaid.initialize({
    startOnLoad: false,
    theme: "dark",
    securityLevel: "loose",
    fontFamily: "inherit",
    themeVariables: {
      darkMode: true,
      background: "transparent",
      primaryColor: "#00D4FF",
      primaryTextColor: "#E8F4FF",
      primaryBorderColor: "#1A7FFF",
      lineColor: "#00D4FF",
      secondaryColor: "#0D2444",
      tertiaryColor: "#040F1F",
      fontFamily: "JetBrains Mono, monospace",
      fontSize: "13px",
    },
  });
  initialized = true;
}

let counter = 0;

export function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    ensureInit();
    let cancelled = false;
    const id = `mermaid-${++counter}`;
    mermaid
      .render(id, chart)
      .then(({ svg }) => {
        if (!cancelled) setSvg(svg);
      })
      .catch((e) => {
        if (!cancelled) setError(String(e?.message || e));
      });
    return () => {
      cancelled = true;
    };
  }, [chart]);

  if (error) {
    return (
      <pre className="bg-card border border-destructive/40 text-destructive text-xs p-4 rounded-lg overflow-auto">
        Erro ao renderizar diagrama: {error}
      </pre>
    );
  }

  return (
    <div
      ref={ref}
      className="my-8 overflow-x-auto rounded-lg border border-border/60 bg-card/40 p-4 [&_svg]:mx-auto [&_svg]:h-auto [&_svg]:max-w-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
