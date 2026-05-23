# Requisitos Não Funcionais (NFR) – Framework de Governança de IA para Operações Críticas

## 0. O que são Requisitos Não Funcionais (NFR)

Quando falamos em projetos de tecnologia, é comum olhar apenas para “o que o sistema faz” – as funções, telas e relatórios.  
Os **Requisitos Funcionais** descrevem exatamente isso.

Já os **Requisitos Não Funcionais (NFR – Non‑Functional Requirements)** respondem a outra pergunta, que é crítica para o negócio:

> “Com que qualidade isso precisa funcionar para não colocar a operação em risco?”

Em termos simples, os NFRs definem **condições de qualidade e segurança** que o sistema precisa atender, por exemplo:

- Quão **disponível** ele precisa estar (pode parar? por quanto tempo?).  
- Quão **rápido** ele precisa responder para não travar a operação.  
- Quão **seguro** ele precisa ser para evitar vazamento de dados ou ataques.  
- Quão **rastreável** ele precisa ser para que um auditor consiga entender “quem decidiu o quê, com base em quais dados”.  
- Quão **confiável e ético** ele precisa ser para evitar decisões injustas, viesadas ou ilegais.

Em um contexto de **operações críticas** (telecom, redes, datacenters), um sistema de IA que “funciona” mas não atende aos NFRs pode:

- Tomar decisões erradas sem registro ou explicação.  
- Sair do ar em horário de pico.  
- Sofrer um ataque e ser manipulado por terceiros.  
- Gerar multas regulatórias e danos de imagem relevantes.

Portanto, NFRs são, na prática, **requisitos de risco e confiabilidade**. Eles dizem *o quão seguro é depender da IA* para suportar o negócio.

---

## 0.1. Qual é o objetivo dos NFRs neste projeto?

Este projeto cria um **Framework de Governança de IA para Operações Críticas**, com:

- Um **framework de princípios e processos**.  
- Um **guia de implementação**.  
- **Checklists**.  
- Um **protótipo de dashboard** de governança de IA.

Os NFRs aqui têm três objetivos principais:

1. **Proteger a operação crítica**  
   - Definir metas mínimas de disponibilidade, desempenho, segurança e qualidade de dados para os sistemas de IA e para o dashboard de governança.  
   - Reduzir a probabilidade de **paradas, falhas graves ou decisões incorretas** que impactem clientes e contratos.

2. **Reduzir riscos legais, regulatórios e de imagem**  
   - Estabelecer critérios de rastreabilidade, explicabilidade, auditoria e gestão de incidentes de IA.  
   - Ajudar a demonstrar, para órgãos reguladores e auditorias, que a organização tem **controles e evidências concretas**.

3. **Dar previsibilidade e transparência à alta gestão**  
   - Traduzir o tema “governança de IA” em **indicadores mensuráveis** (SLIs/SLOs), com metas e responsabilidades claras.  
   - Permitir que a presidência e o conselho façam perguntas objetivas, como:  
     - “Qual é a disponibilidade atual do dashboard de governança?”  
     - “Quantos modelos de IA críticos já passaram por auditoria de viés?”  
     - “Quanto tempo levamos, em média, para reagir a um incidente de segurança de IA?”

Esses NFRs foram estruturados para serem:

- **Claros** e negociáveis (os números são exemplos a serem calibrados pela organização).  
- **Auditáveis**, com indicadores (SLIs) e metas (SLOs).  
- **Conectados aos pilares do framework** (Organização, Conformidade, Ética, Dados/AIOps, Segurança e Aprimoramento Contínuo) e ao **dashboard de governança**.

---

## 1. Acrônimos

- **NFR** – Requisitos Não Funcionais (*Non‑Functional Requirements*)  
- **SLO** – Objetivo de Nível de Serviço (*Service Level Objective*)  
- **SLI** – Indicador de Nível de Serviço (*Service Level Indicator*)

---

## 2. Inventário de NFRs e Principais SLOs

### 2.1. NFRs Específicos por História (por *Story*)

| Story                                                                 | Foco                              | Principais SLOs (metas – exemplos parametrizáveis)                                                                                         |
|-----------------------------------------------------------------------|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| Aprovação de novos modelos de IA para produção                        | Agilidade e Conformidade          | Tempo máximo para aprovação: **[Exemplo: ≤ 2 dias úteis]**. Taxa de aprovação em primeira análise: **[Exemplo: ≥ 90%]**.                  |
| Monitoramento de *drift* (desvio) de modelos em produção              | Confiabilidade e Desempenho       | Frequência de monitoramento: **[Exemplo: a cada 24 horas]**. Tempo de detecção de *drift* relevante: **[Exemplo: ≤ 4 horas]**.           |
| Registro de decisões automatizadas por sistemas de IA                 | Rastreabilidade e Transparência   | Taxa de registro completo de decisões: **[Exemplo: ≥ 99%]**. Tempo para acessar o registro: **[Exemplo: ≤ 1 segundo]**.                  |
| Geração de relatórios de impacto (AIA/RIPD)                           | Conformidade e Ética              | Tempo para geração do relatório: **[Exemplo: ≤ 5 dias úteis]**. Cobertura dos requisitos legais/éticos: **[Exemplo: ≥ 95%]**.           |
| Painel de riscos de IA no dashboard de governança                     | Gerenciamento de Riscos           | Disponibilidade do painel: **[Exemplo: ≥ 99,9%]**. Atualização dos dados: **[Exemplo: a cada 1 hora]**.                                 |

> Observação: todos os valores entre colchetes são **exemplos**, a serem calibrados pela organização conforme criticidade, capacidade e baseline.

---

### 2.2. NFRs Transversais por Área/Pilar

| Área                                      | Principais SLOs (metas – exemplos parametrizáveis)                                                                                     |
|-------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| Organização da IA                         | Número de políticas de IA implementadas: **[Exemplo: ≥ 5 políticas]**. Treinamento anual em ética/governança: **[Exemplo: ≥ 80%]**.    |
| Conformidade Legal e Risco                | % de sistemas de IA classificados quanto ao risco: **[Exemplo: 100%]**. Auditorias de conformidade ao ano: **[Exemplo: ≥ 2]**.        |
| Ética, Transparência e Interpretabilidade | % de modelos críticos com mecanismos de explicabilidade: **[Exemplo: ≥ 75%]**. Mitigação de vieses: **[Exemplo: ≥ 90% dos casos]**.   |
| Dados, AIOps e Infraestrutura             | Qualidade dos dados (integridade/acurácia): **[Exemplo: ≥ 99%]**. MTTR de incidentes resolvidos via AIOps: **[Exemplo: ≤ 4h]**.        |
| Segurança da IA                           | Tempo de detecção de ataques adversariais: **[Exemplo: ≤ 1h]**. Simulações de ataques de IA ao ano: **[Exemplo: ≥ 4]**.               |
| Aprimoramento Contínuo                    | Frequência de revisão do framework: **[Exemplo: a cada 6 meses]**. Feedbacks implementados por revisão: **[Exemplo: ≥ 5]**.           |
| Dashboard de Governança de IA             | Disponibilidade: **[Exemplo: ≥ 99,9%]**. Tempo de carregamento das páginas: **[Exemplo: ≤ 3s (p95)]**. Rastreabilidade: **[Exemplo: 100%]**. |

> Parte desta estrutura de inventário segue boas práticas de gestão de serviços e risco presentes na base de conhecimento do PMI (PMI’s knowledge base).

---

## 3. NFR Cards

### 3.1. Template de NFR Card (para referência)

> Este bloco é um **modelo** para novos NFR Cards.  
> Os cards concretos do framework começam mais abaixo (Pilar I, II, III, IV, V, Aprimoramento, Dashboard).

#### User Story

Como um \[papel], eu quero \[atributo de qualidade + capacidade], para que \[valor/resultado].

*Exemplo:*  
Como um gestor de operações, eu quero que o painel de governança esteja sempre disponível, para que eu possa monitorar o status da IA em tempo real.

#### Acceptance Criteria (Gherkin)

- Dado \[ambiente, condições]  
- Quando \[ação ou evento]  
- Então \[resultado mensurável esperado com limites]

*Exemplo:*

- Dado o ambiente de produção sob carga normal de acesso,  
- Quando um usuário acessar o painel de governança,  
- Então a página principal deve carregar em ≤ 3 segundos, e todas as informações devem estar atualizadas em no máximo 1 hora.

#### Category

\[Performance / Confiabilidade / Privacidade / Segurança / Disponibilidade / Usabilidade …]

#### Scope & Interfaces

\[Liste serviços, componentes, ambientes (produção/homologação) e dependências impactados]

#### SLIs / SLOs

| SLI                                      | SLO target (Exemplo)                                        | Janela     | Source                                 |
|------------------------------------------|-------------------------------------------------------------|-----------|----------------------------------------|
| Taxa de disponibilidade do dashboard     | \[Exemplo: ≥ 99,9%; a ser calibrado pela organização]       | Mensal    | Plataforma de monitoramento            |
| Tempo médio de carregamento da página    | \[Exemplo: ≤ 3s (p95); a ser calibrado]                     | Diário    | Logs do servidor web                   |

#### Test Strategy

\[Testes de carga, testes de caos, regressão, auditorias, testes de usabilidade, etc.]

#### Operational Criteria

\[Regras de alerta, dashboards operacionais, runbooks]

#### Traceability

\[Links para épicos, riscos, políticas internas, controles de conformidade, gates de release]

#### Assumptions & Constraints

\[Limites de capacidade, stack tecnológica, restrições regulatórias]

#### Versioning

- Owner: \[Nome/Equipe]  
- Last Updated: \[Data]

---

### 3.2. NFRs – Pilar I: Organização da IA

#### NFRs-PilarI-01 – Organização da IA / Política de Uso Aceitável

**User Story**  
Como um membro da equipe de IA, eu quero ter uma política de uso aceitável clara e acessível, para que eu possa entender as diretrizes e responsabilidades ao desenvolver e usar modelos de IA.

**Acceptance Criteria (Gherkin)**

- Dado que um novo membro da equipe de IA é integrado,  
- Quando ele(a) receber o treinamento inicial,  
- Então ele(a) deverá ter acesso à versão mais recente da política de uso aceitável da IA e confirmar a leitura e o entendimento em até 2 dias úteis.

**Category**  
Organização da IA / Conformidade

**Scope & Interfaces**  

- Escopo: toda equipe de IA (dev, MLOps, cientistas de dados).  
- Ambientes: desenvolvimento, homologação, produção (em termos de acesso à política).  
- Interfaces: sistema de gestão de treinamento, repositório de documentos corporativos.

**SLIs / SLOs**

| SLI                                                                 | SLO target (Exemplo)                                                      | Janela   | Source                         |
|---------------------------------------------------------------------|---------------------------------------------------------------------------|----------|--------------------------------|
| % de novos membros que acessaram e confirmaram a leitura da política | \[Exemplo: ≥ 100%; meta aspiracional, parametrizável]                     | Mensal   | Sistema de gestão de treinamento |
| Disponibilidade da política de uso aceitável                        | \[Exemplo: ≥ 99,9%; a ser calibrado]                                     | Mensal   | Sistema de gestão de documentos |

**Test Strategy**  

- Auditorias mensais dos registros de treinamento e logs de acesso à política.  
- Verificação amostral de compreensão em entrevistas ou quizzes.

**Operational Criteria**  

- Alertas automáticos quando um novo membro não confirmar leitura em até 2 dias úteis.  
- Relatório mensal para o Comitê de Ética e Risco.

**Traceability**  

- Políticas de Governança de IA (Pilar I).  
- Programa de treinamento em IA.  
- Risco de “shadow AI” e uso indevido de ferramentas de IA.

**Assumptions & Constraints**  

- A política será revisada pelo menos anualmente ou a cada mudança regulatória relevante (inspiração em boas práticas PMI/NIST/ISO).  
- A organização dispõe de um sistema mínimo de gestão de treinamento e documentos.

**Versioning**

- Owner: Comitê de Ética e Risco  
- Last Updated: \[Data]

---

### 3.3. NFRs – Pilar II: Conformidade Legal e Gerenciamento de Riscos

#### NFRs-PilarII-01 – Conformidade / Classificação de Risco de IA

**User Story**  
Como um gestor de riscos, eu quero que todos os sistemas de IA sejam classificados quanto ao seu nível de risco, para que possamos priorizar os controles de segurança e conformidade adequados.

**Acceptance Criteria (Gherkin)**

- Dado que um novo sistema de IA é proposto,  
- Quando ele for registrado no inventário de sistemas de IA,  
- Então ele deverá passar por uma avaliação de risco preliminar em até 1 semana, seguindo a metodologia definida.

**Category**  
Conformidade Legal e Risco

**Scope & Interfaces**  

- Escopo: todos os sistemas de IA em desenvolvimento e produção.  
- Ambientes: catálogo de sistemas, ambientes de teste e produção.  
- Interfaces: inventário de sistemas de IA, ferramenta de avaliação de riscos.

**SLIs / SLOs**

| SLI                                                               | SLO target (Exemplo)                                              | Janela     | Source                   |
|-------------------------------------------------------------------|-------------------------------------------------------------------|------------|--------------------------|
| % de sistemas de IA com avaliação de risco preliminar concluída   | \[Exemplo: 100%; meta aspiracional, calibrável]                   | Trimestral | Inventário de sistemas   |
| Tempo médio para conclusão da avaliação de risco                  | \[Exemplo: ≤ 1 semana; parametrizável]                            | Trimestral | Ferramenta de riscos     |

**Test Strategy**  

- Auditoria trimestral do inventário e da ferramenta de avaliação de riscos.  
- Revisão amostral de sistemas classificados como alto risco.

**Operational Criteria**  

- Alertas automáticos para sistemas de IA sem avaliação concluída no prazo.  
- Relatórios para áreas de Compliance e Risco, apresentando pendências.

**Traceability**  

- Políticas de gestão de risco de IA (Pilar II).  
- Requisitos regulatórios (LGPD, PL 2338/AI Act, etc.).  
- Documentos AIA/RIPD.

**Assumptions & Constraints**  

- A metodologia de avaliação de riscos será revisada ao menos anualmente, com base em referências internacionais (PMI/NIST/ISO) e regulações em vigor.  

**Versioning**

- Owner: Equipe de Compliance e Risco  
- Last Updated: \[Data]

---
### 3.4. NFRs-PilarIV-01 Dados / Qualidade dos Dados

#### User Story

Como um engenheiro de dados, eu quero que os dados usados para treinar e operar modelos de IA tenham alta qualidade, para que possamos garantir a precisão e a confiabilidade das decisões tomadas pelos sistemas de IA.

#### Acceptance Criteria (Gherkin)

- Dado que um novo conjunto de dados é proposto para uso em um modelo de IA  
- Quando ele for ingerido no sistema  
- Então ele deverá passar por uma validação de qualidade automatizada, que inclui testes de integridade, completude e acurácia, e atender aos critérios definidos

#### Category

Dados, AIOps e Infraestrutura

#### Scope & Interfaces

Afeta todos os conjuntos de dados usados para treinar e operar modelos de IA.  
Interface com o sistema de ingestão de dados e ferramenta de validação de qualidade.

#### SLIs / SLOs

> Observação: valores abaixo são **exemplos** e devem ser parametrizados pela organização.

| SLI                                                         | SLO target (Exemplo)           | Janela | Source                          |
| ----------------------------------------------------------- | ------------------------------ | ------ | -------------------------------- |
| Percentual de conjuntos de dados que passam na validação de qualidade | \>= 99% (parametrizável)       | Diário | Ferramenta de validação de qualidade |
| Tempo médio para correção de problemas de qualidade de dados | \<= 8 horas (parametrizável)   | Diário | Sistema de gestão de dados       |

#### Test Strategy

- Monitoramento contínuo da ferramenta de validação de qualidade  
- Monitoramento do sistema de gestão de dados  
- Auditorias periódicas de amostras de conjuntos de dados

#### Operational Criteria

- Geração de alertas caso um conjunto de dados não passe na validação de qualidade  
- Geração de alertas caso o tempo médio de correção ultrapasse o SLO estabelecido  
- Dashboards com indicadores de qualidade de dados para equipe de dados e MLOps

#### Traceability

- Política de governança de dados  
- Processo de ingestão de dados  
- Procedimentos de validação de qualidade  
- Riscos de “dados de baixa qualidade impactando decisões críticas”

#### Assumptions & Constraints

- A ferramenta de validação de qualidade está corretamente configurada para os critérios relevantes de cada domínio de dados  
- A organização dispõe de equipe de dados suficiente para tratar problemas identificados dentro do SLO acordado  
- Recomendações de definição de métricas e ciclos de controle são inspiradas em boas práticas da base de conhecimento do PMI (PMI’s knowledge base)

#### Versioning

- Owner: Equipe de Engenharia de Dados  
- Last Updated: \[Data\]

---

### 3.5. NFRs-PilarV-01 Segurança / Gestão de Incidentes de IA

#### User Story

Como um analista de segurança, eu quero ter um plano de resposta a incidentes de segurança de IA, para que possamos mitigar rapidamente os impactos de ataques adversariais ou outras ameaças à segurança dos sistemas de IA.

#### Acceptance Criteria (Gherkin)

- Dado que um incidente de segurança de IA é detectado  
- Quando o plano de resposta a incidentes for ativado  
- Então as ações de contenção, investigação e remediação deverão ser executadas seguindo os playbooks definidos, e a equipe de segurança deverá ser notificada em até 15 minutos

#### Category

Segurança da IA

#### Scope & Interfaces

Afeta todos os sistemas de IA em produção.  
Interface com SOC/SIEM, sistema de gestão de incidentes, playbooks de resposta a incidentes e equipes de MLOps e Operações.

#### SLIs / SLOs

> Observação: valores abaixo são **exemplos** e devem ser parametrizados pela organização.

| SLI                                              | SLO target (Exemplo)         | Janela | Source                     |
| ------------------------------------------------ | ----------------------------- | ------ | -------------------------- |
| Tempo médio para detecção de incidentes de segurança de IA | \<= 1 hora (parametrizável)  | Mensal | SOC/SIEM                   |
| Tempo médio para notificação da equipe de segurança      | \<= 15 minutos (parametrizável) | Mensal | Sistema de gestão de incidentes |

#### Test Strategy

- Simulações periódicas de incidentes de segurança de IA (exercícios de mesa e testes técnicos)  
- Testes dos playbooks de resposta a incidentes pelo SOC e equipes de Operações  
- Revisão pós-incidente (*post-mortem*) com identificação de lições aprendidas

#### Operational Criteria

- Alertas automáticos quando um incidente de IA for detectado  
- Notificações automáticas para a equipe de segurança dentro do SLO definido  
- Indicadores em dashboards de segurança sobre incidentes de IA (número, severidade, tempo de resposta)

#### Traceability

- Política de segurança da informação e de segurança de IA  
- Plano de resposta a incidentes  
- Registro de incidentes no sistema de gestão de incidentes  
- Riscos de “indisponibilidade/comprometimento de serviços críticos por ataques à IA”

#### Assumptions & Constraints

- SOC/SIEM está integrado aos componentes de IA e monitora logs relevantes  
- Há equipe de segurança de plantão dentro das janelas de operação dos sistemas críticos  
- Boas práticas de resposta a incidentes seguem linhas gerais de frameworks amplamente utilizados e da base de conhecimento do PMI (PMI’s knowledge base)

#### Versioning

- Owner: CISO / Equipe de Segurança da Informação  
- Last Updated: \[Data\]

---

### 3.6. NFRs-Aprimoramento-01 Aprimoramento Contínuo / Revisões do Framework

#### User Story

Como um membro do comitê de governança de IA, eu quero que o framework de governança de IA seja revisado periodicamente, para que ele permaneça relevante e eficaz à medida que as tecnologias e regulamentações evoluem.

#### Acceptance Criteria (Gherkin)

- Dado que o framework de governança de IA está em uso há 6 meses  
- Quando a revisão periódica for iniciada  
- Então o comitê de governança deverá analisar os feedbacks recebidos, avaliar novas tecnologias e regulamentações, e propor atualizações ao framework em até 4 semanas

#### Category

Aprimoramento Contínuo

#### Scope & Interfaces

Afeta todo o framework de governança de IA, seus documentos relacionados (guia, checklist, glossário) e o dashboard de governança.  
Interface com: sistema de coleta de feedback, repositório de documentos, reuniões do comitê de governança, PMO.

#### SLIs / SLOs

> Observação: valores abaixo são **exemplos** e devem ser parametrizados pela organização.

| SLI                                   | SLO target (Exemplo)           | Janela    | Source                     |
| ------------------------------------- | ------------------------------ | --------- | -------------------------- |
| Frequência de revisões do framework   | A cada 6 meses (parametrizável) | Semestral | Calendário de revisões     |
| Tempo médio para conclusão da revisão | \<= 4 semanas (parametrizável) | Semestral | Sistema de gestão de projetos |

#### Test Strategy

- Acompanhamento do cronograma de revisões pelo PMO  
- Auditoria do processo de revisão (verificar se feedbacks, mudanças regulatórias e tecnológicas foram considerados)  
- Validação com stakeholders-chave após cada revisão (workshops, reuniões de validação)

#### Operational Criteria

- Alertas se uma revisão planejada não for iniciada ou concluída no prazo  
- Registro formal das decisões do comitê e das alterações aprovadas  
- Atualização dos documentos oficiais (framework, guia, checklist, dashboard) após cada revisão

#### Traceability

- Framework de Governança de IA (versões anteriores)  
- Sistema de feedback de usuários  
- Atas das reuniões do comitê de governança  
- Riscos ligados a “obsolescência de controles e políticas de IA”

#### Assumptions & Constraints

- Comitê de governança tem representantes de áreas críticas (TI, Operações, Segurança, Compliance, Negócio)  
- Há capacidade organizacional para implementar as mudanças aprovadas em tempo hábil  
- A prática de revisões periódicas e gestão de mudanças é inspirada em boas práticas de gestão de projetos e governança documentadas na base de conhecimento do PMI (PMI’s knowledge base)

#### Versioning

- Owner: Comitê de Governança de IA  
- Last Updated: \[Data\]

---

### 3.7. NFRs-Dashboard-01 Dashboard / Disponibilidade

#### User Story

Como um gestor de operações, eu quero que o painel de governança de IA esteja sempre disponível, para que eu possa monitorar o status da IA em tempo real e tomar decisões informadas.

#### Acceptance Criteria (Gherkin)

- Dado que um usuário autorizado acessa o painel de governança de IA em ambiente de produção  
- Quando ele tentar acessar qualquer página do painel  
- Então a página deverá carregar em até 3 segundos e exibir informações atualizadas em no máximo 1 hora, mantendo disponibilidade mensal de pelo menos o SLO definido

#### Category

Disponibilidade / Desempenho

#### Scope & Interfaces

Afeta todos os usuários do painel de governança de IA em ambiente de produção (gestores de operações, segurança, compliance, TI).  
Interface com: infraestrutura de aplicação, banco de dados, fontes de dados de risco e conformidade, solução de monitoração de desempenho.

#### SLIs / SLOs

> Observação: valores abaixo são **exemplos** e devem ser parametrizados pela organização.

| SLI                                   | SLO target (Exemplo)             | Janela | Source                            |
| ------------------------------------- | -------------------------------- | ------ | --------------------------------- |
| Taxa de disponibilidade do painel     | \>= 99,9% (parametrizável)       | Mensal | Plataforma de monitoramento       |
| Tempo de carregamento da página (p95) | \<= 3 s (parametrizável)         | Diário | Logs do servidor / APM            |
| Idade máxima dos dados exibidos       | \<= 1 hora (parametrizável)      | Diário | Monitor de pipelines de dados     |

#### Test Strategy

- Monitoramento contínuo da disponibilidade e latência do painel  
- Testes de carga e estresse periódicos  
- Testes de failover/recuperação (onde aplicável)

#### Operational Criteria

- Alertas automáticos quando disponibilidade mensal projetada cair abaixo do SLO  
- Alertas quando latência p95 exceder o limite definido  
- Alertas quando dados ficarem desatualizados além do limite definido

#### Traceability

- Requisitos do dashboard de governança  
- Arquitetura de infraestrutura (aplicação e dados)  
- Riscos relacionados a “falta de visibilidade de riscos de IA em tempo hábil”

#### Assumptions & Constraints

- Infraestrutura é dimensionada para a carga de acessos prevista em operações críticas  
- A organização define janelas de manutenção planejada que podem ser excluídas do cálculo de SLO, se desejado  
- Abordagem de SLI/SLO e monitoração contínua segue boas práticas de gestão de serviços e confiabilidade inspiradas na base de conhecimento do PMI (PMI’s knowledge base)

#### Versioning

- Owner: Equipe de TI / Operações  
- Last Updated: \[Data\]

---

### 3.8. NFRs-Dashboard-02 Dashboard / Rastreabilidade (Auditabilidade)

#### User Story

Como um auditor de conformidade, eu quero que todas as informações exibidas no painel de governança de IA sejam totalmente rastreáveis até a fonte, para que eu possa verificar a precisão e a integridade dos dados.

#### Acceptance Criteria (Gherkin)

- Dado que um auditor acessa o painel de governança de IA  
- Quando ele selecionar qualquer métrica ou indicador exibido  
- Então ele deverá ser capaz de navegar até a fonte dos dados, visualizar o histórico de alterações e identificar o responsável pela atualização

#### Category

Rastreabilidade / Auditabilidade

#### Scope & Interfaces

Afeta todas as métricas e indicadores exibidos no painel.  
Interface com: sistemas de origem de dados, camadas de transformação (ETL/ELT), sistema de auditoria e trilhas de logs.

#### SLIs / SLOs

> Observação: valores abaixo são **exemplos** e devem ser parametrizados pela organização.

| SLI                                         | SLO target (Exemplo)             | Janela   | Source               |
| ------------------------------------------- | -------------------------------- | -------- | -------------------- |
| Percentual de métricas totalmente rastreáveis | 100% (meta aspiracional)        | Contínuo | Sistema de auditoria |
| Tempo máximo para rastrear a origem de uma métrica | \<= 5 minutos (parametrizável) | Sob demanda | Sistema de auditoria |

#### Test Strategy

- Auditorias periódicas de métricas selecionadas (amostragem)  
- Testes de “follow the data” (verificar do painel até a fonte)  
- Verificação cruzada entre fontes e valores consolidados no painel

#### Operational Criteria

- Alertas quando uma métrica não puder ser rastreada até a fonte  
- Relatórios periódicos sobre aderência à rastreabilidade (quantidade de falhas, causas)

#### Traceability

- Requisitos de auditoria e conformidade (LGPD, regulamentações de IA, políticas internas)  
- Arquitetura de dados (linhagem)  
- Riscos de “decisões baseadas em dados não auditáveis”

#### Assumptions & Constraints
-Todos os sistemas de origem dos dados devem ter mecanismos de rastreabilidade implementados.

#### Versioning
-	Owner: Equipe de Compliance / Auditoria
-	Last Updated: [Data]

---

