import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader, ContentSection } from "../components/SiteLayout";
import { MarkdownView } from "../components/MarkdownView";
import content from "../content/glossario.md?raw";

export const Route = createFileRoute("/glossario")({
  head: () => ({
    meta: [
      { title: "Glossário - Framework de Governança de IA" },
      {
        name: "description",
        content: "Definições claras para os termos técnicos e siglas utilizados no Framework de Governança de IA.",
      },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHeader
        eyebrow="04 · GLOSSÁRIO"
        title="Glossário de Termos."
        description="Definições e siglas essenciais para a compreensão do framework."
      />
      <ContentSection>
        <MarkdownView source={content} />
      </ContentSection>
    </SiteLayout>
  ),
});
