import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader, ContentSection } from "../components/SiteLayout";
import { MarkdownView } from "../components/MarkdownView";
import source from "../content/guia.md?raw";

export const Route = createFileRoute("/guia")({
  head: () => ({
    meta: [
      { title: "Guia de Implementação — Framework de Governança de IA" },
      {
        name: "description",
        content:
          "Guia prático para implementar o Framework de Governança de IA em operações críticas.",
      },
      {
        property: "og:title",
        content: "Guia de Implementação — Framework de Governança de IA",
      },
      {
        property: "og:description",
        content:
          "Passo a passo para aplicar os pilares de governança de IA na sua organização.",
      },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHeader
        eyebrow="02 · IMPLEMENTAÇÃO"
        title="Guia de Implementação."
        description="Passo a passo para colocar o framework em prática."
      />
      <ContentSection>
        <MarkdownView source={source} />
      </ContentSection>
    </SiteLayout>
  ),
});
