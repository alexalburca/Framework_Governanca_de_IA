import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader, ContentSection } from "../components/SiteLayout";
import { MarkdownView } from "../components/MarkdownView";
import source from "../content/framework.md?raw";

export const Route = createFileRoute("/framework")({
  head: () => ({
    meta: [
      { title: "Framework — Governança de IA para Operações Críticas" },
      {
        name: "description",
        content:
          "Documento principal: os 5 pilares do Framework de Governança de IA para Operações Críticas.",
      },
      {
        property: "og:title",
        content: "Framework — Governança de IA para Operações Críticas",
      },
      {
        property: "og:description",
        content:
          "Organização, Conformidade, Ética, Dados/AIOps e Segurança da IA.",
      },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHeader
        eyebrow="01 · DOCUMENTO PRINCIPAL"
        title="Framework de Governança de IA."
        description="Metodologia estruturada em cinco pilares para operações críticas — telecom, redes e datacenter."
      />
      <ContentSection>
        <MarkdownView source={source} />
      </ContentSection>
    </SiteLayout>
  ),
});
