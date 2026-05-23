import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader, ContentSection } from "../components/SiteLayout";
import { MarkdownView } from "../components/MarkdownView";
import content from "../content/cronograma.md?raw";

export const Route = createFileRoute("/cronograma")({
  head: () => ({
    meta: [
      { title: "Cronograma - Framework de Governança de IA" },
      {
        name: "description",
        content: "Detalhamento das sprints para o desenvolvimento e refinamento do Framework de Governança de IA.",
      },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHeader
        eyebrow="05 · CRONOGRAMA"
        title="Cronograma de Desenvolvimento."
        description="Detalhamento das etapas de construção e evolução do framework."
      />
      <ContentSection>
        <MarkdownView source={content} />
      </ContentSection>
    </SiteLayout>
  ),
});
