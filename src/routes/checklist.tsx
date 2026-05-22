import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader, ContentSection } from "../components/SiteLayout";
import { MarkdownView } from "../components/MarkdownView";
import source from "../content/checklist.md?raw";

export const Route = createFileRoute("/checklist")({
  head: () => ({
    meta: [
      { title: "Checklist de Implementação — Framework de Governança de IA" },
      {
        name: "description",
        content:
          "Checklist completo para auditoria e conformidade com o Framework de Governança de IA.",
      },
      {
        property: "og:title",
        content: "Checklist de Implementação — Framework de Governança de IA",
      },
      {
        property: "og:description",
        content:
          "Lista de verificação dos cinco pilares do framework.",
      },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHeader
        eyebrow="03 · CHECKLIST"
        title="Checklist de Implementação."
        description="Lista de verificação para auditoria e conformidade com os cinco pilares."
      />
      <ContentSection>
        <MarkdownView source={source} />
      </ContentSection>
    </SiteLayout>
  ),
});
