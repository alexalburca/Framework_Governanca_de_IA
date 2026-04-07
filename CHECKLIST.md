# Checklist de Implementação do Framework de Governança de IA

Este checklist foi elaborado com base no `Guia de Implementação.md` e visa auxiliar as organizações na adoção e conformidade com o Framework de Governança de IA para Operações Críticas. Ele cobre os principais pontos de ação e controle em cada pilar, garantindo uma abordagem estruturada e abrangente.

## Pilar I: Estruturação Organizacional e Gestão da Shadow AI

### Fase de Descoberta e Inventário de Shadow AI

- [ ] Identificar todos os sistemas de IA utilizados na organização (formais e informais, incluindo generativas, copilots, agentes, APIs externas).
- [ ] Registrar para cada sistema de IA: nome, finalidade, *owner*, área usuária, dados de entrada/saída, nível preliminar de risco, status de homologação, dependência de fornecedor externo e data da última revisão.
- [ ] Homologar ferramentas de baixo risco, criar política de uso e integrar ao inventário de ativos de IA.
- [ ] Permitir uso de risco moderado com restrições, implementar DLP e monitoramento, e planejar migração para solução interna em 90 dias.
- [ ] Bloquear imediatamente o uso de IA de alto risco envolvendo dados sensíveis, PII ou informações de infraestrutura crítica.
- [ ] Notificar o CISO e investigar possíveis vazamentos de dados relacionados a usos proibidos.

### Fase de Estruturação da Governança

- [ ] Definir claramente os papéis e responsabilidades para a governança de IA (ex: CAIO, AI Ethics Officer, AI Risk Stewards, Comitê de Ética e Risco em IA, Shadow AI Task Force).
- [ ] Explicitar quem aprova, opera, monitora, audita e quem pode vetar ou suspender um sistema de IA.
- [ ] Garantir que CISO, DPO e o Comitê tenham alçadas objetivas para escalonamento e contenção em cenários de risco iminente.

### Fase de Política de Uso Aceitável de IA

- [ ] Formalizar uma política de uso aceitável de IA, estabelecendo limites, permissões e proibições.
- [ ] Definir o escopo da política, abrangendo todos os sistemas, ferramentas e usos de IA.
- [ ] Estabelecer critérios para categorização de sistemas de IA por nível de risco (Baixo, Médio, Alto, Inaceitável), alinhados com AI Act e PL 2338/2023.
- [ ] Criar diretrizes sobre os tipos de dados permitidos em cada categoria de sistema de IA, com proibição explícita de PII e dados de infraestrutura crítica em ferramentas não homologadas.
- [ ] Definir os limites de autonomia para cada nível de risco, especificando quando a supervisão humana é obrigatória.
- [ ] Detalhar procedimentos para o reporte de falhas, vieses detectados ou uso não autorizado de IA.
- [ ] Descrever claramente as consequências para violações da política, proporcionais à gravidade do risco e impacto.
- [ ] Incluir um processo formal de gestão de exceções, com prazo máximo, executivo responsável, controles compensatórios e revisão obrigatória.

## Pilar II: Conformidade Legal e Gerenciamento de Riscos

### Fase de Mapeamento Regulatório Cruzado

- [ ] Garantir que todos os sistemas de IA estejam em conformidade com LGPD, PL 2338/2023, AI Act, NIST AI RMF e ISO/IEC 42001.

### Fase de Classificação de Risco dos Sistemas de IA

- [ ] Classificar cada sistema de IA por nível de risco (Inaceitável, Alto, Médio, Baixo) com base no impacto operacional, regulatório, reputacional e humano.
- [ ] Aplicar os controles obrigatórios para cada nível de risco (ex: AIA, Human-in-the-loop, auditoria trimestral para Alto Risco).
- [ ] Revisar a classificação de risco sempre que houver: aumento de autonomia, mudança de finalidade, integração com sistemas críticos, inclusão de dados mais sensíveis, aumento de impacto regulatório ou ocorrência de incidente relevante.

### Fase de Elaboração dos Relatórios de Impacto

- [ ] Elaborar Relatórios de Impacto Algorítmico (AIA) para sistemas de médio e alto risco, consolidando riscos, controles, riscos residuais, dependências externas e medidas de mitigação.
- [ ] Manter o AIA como um documento vivo, atualizando-o quando houver alterações significativas de arquitetura, dados, autonomia, fornecedor, ambiente regulatório ou incidente relevante.

### Governança de Terceiros e Cadeia de Fornecedores de IA

- [ ] Aplicar *due diligence* específica para APIs externas, *foundation models*, *copilots*, agentes terceirizados ou fornecedores com suboperadores.
- [ ] Contemplar na *due diligence*: postura de segurança, retenção de dados, soberania/localização de processamento, *logging*, possibilidade de auditoria, transparência mínima, gestão de incidentes, responsabilidade contratual e direito de desligamento.
- [ ] Incluir cláusulas contratuais mínimas recomendadas (notificação de incidentes, direito de auditoria, regras sobre suboperadores, retenção/exclusão/localização de dados, *logging*, *kill switch* contratual, obrigações sobre segurança/viés/não conformidade).

## Pilar III: Ética, Transparência e Interpretabilidade

### Fase de Matriz de Autonomia vs. Risco

- [ ] Definir explicitamente os limites entre recomendação, automação e autonomia para sistemas de IA em operações críticas.
- [ ] Estabelecer uma matriz de Autonomia vs. Risco, especificando o grau de supervisão humana para cada nível de risco (ex: revisão periódica para baixo risco, *Human-on-the-loop* com dupla aprovação para risco crítico).

### Fase de Dashboard de Explicabilidade (XAI)

- [ ] Implementar um *dashboard* de explicabilidade (XAI) com camadas para diferentes públicos (executiva, operacional, técnica).
- [ ] Definir KPIs de conformidade para a camada executiva (ex: % de sistemas classificados, % de AIAs atualizados, número de incidentes de Shadow AI).
- [ ] Incluir alertas de *drift* em tempo real, status de *Human-in-the-loop*, log de decisões autônomas e indicadores de viés por modelo para a camada operacional.
- [ ] Fornecer métricas de performance do modelo, análise de *feature importance*, visualização de *embeddings* e detecção de *data poisoning* para a camada técnica.
- [ ] Medir a efetividade da governança por indicadores como tempo para classificar um caso, % de sistemas inventariados, % de AIAs atualizados, % de decisões com trilha auditável, tempo médio de resposta a incidentes e % de fornecedores críticos avaliados.

### Auditoria de Viés e Equidade

- [ ] Realizar auditorias contínuas de dados pré-treinamento, modelo em produção e impacto.
- [ ] Conectar auditorias a *thresholds* de revisão para acionar respostas de governança em caso de desvios persistentes, aumento de erro ou surgimento de discriminação.

### Governança de IA Agêntica

- [ ] Definir explicitamente para sistemas agênticos: escopo permitido de ação, tipos de ação autorizados por criticidade, limites de tempo/recursos/execuções, regras de memória e retenção de contexto, restrições de uso de ferramentas externas, segregação de funções e mecanismo de *kill switch* com teste periódico.

## Pilares IV e V: Infraestrutura, Dados, AIOps e Segurança da IA

### Fase de Implementação do ML Pipeline (Padrão Y.3172)

- [ ] Implementar o ML Pipeline seguindo o padrão Y.3172, com controles de governança em cada nó:
    - [ ] **SRC (Source)**: Registro de linhagem e catalogação de fontes de dados com metadados.
    - [ ] **C (Collector)**: Filtros de PII e dados sensíveis; aprovação do DPO para dados classificados como "Vermelho".
    - [ ] **PP (Preprocessor)**: Auditoria de viés pré-treinamento e verificação de representatividade dos dados.
    - [ ] **M (Model)**: Versionamento obrigatório, registro de *hash*, data de treinamento e métricas de performance.
    - [ ] **P (Policy)**: Implementação de *guardrails* de segurança, filtros de conteúdo tóxico, limites de autonomia e regras de *Human-in-the-loop*.
    - [ ] **D (Distributor)**: Autenticação e autorização para distribuição da saída do modelo, com criptografia em trânsito.
    - [ ] **SINK**: Mecanismo de *rollback* com capacidade de reverter a última ação da IA em menos de 30 segundos.

### Fase de ML Sandbox Contínuo

- [ ] Implementar um ambiente de ML *Sandbox* contínuo com espelhamento de dados, validação pré-*deployment* e teste adversarial contínuo.
- [ ] Garantir que o *sandbox* reproduza condições operacionais reais para evitar falsa sensação de segurança.

### Monitoramento de Drift e Governança de IA Agêntica

- [ ] Implementar monitoramento contínuo de *Data Drift*, *Concept Drift* e *Feature Drift*.
- [ ] Definir indicadores de alerta e ações recomendadas para cada tipo de *drift* (ex: re-treinamento, investigação de causa raiz, auditoria de viés).
- [ ] Acompanhar sinais precursores de ponto de inflexão (aumento de *override* humano, crescimento de exceções, degradação de acurácia, etc.).

### Checklist de Prontidão para Produção

- [ ] Antes da entrada em produção de qualquer modelo ou agente, validar:
    - [ ] *Owner* definido.
    - [ ] Classificação de risco aprovada.
    - [ ] AIA concluído, quando aplicável.
    - [ ] HITL e limites de autonomia testados.
    - [ ] *Logging* e trilha decisória habilitados.
    - [ ] Monitoramento de *drift* ativo.
    - [ ] Plano de incidente específico.
    - [ ] *Rollback* testado.
    - [ ] Dependências externas avaliadas.
    - [ ] *Guardrails* e controles de segurança verificados.

### Fase de Segurança por Design (Security by Design)

- [ ] Implementar medidas de mitigação para ameaças como ataques adversariais (evasão), envenenamento de dados (*data poisoning*), exfiltração de modelo (*model stealing*) e *prompt injection*.
- [ ] Adotar treinamento adversarial, validação de entrada com múltiplos modelos, monitoramento de anomalias, verificação de integridade dos dados de treinamento, *rate limiting* de consultas, *watermarking* do modelo, sanitização de *prompts* e *sandboxing* de execução de agentes.
- [ ] Realizar auditoria contínua de *Shadow AI* e bloqueio de APIs não autorizadas para mitigar riscos de *Shadow AI* como vetor de ataque.

### Fase de Gestão de Incidentes de IA

- [ ] Estabelecer protocolos claros para identificação, classificação, contenção, análise técnica e regulatória de incidentes de IA.
- [ ] Definir procedimentos para *rollback* ou suspensão controlada, comunicação a partes relevantes, registro, lições aprendidas e revisão de controles.
- [ ] Realizar exercícios periódicos de *tabletop*, testes de *prompt injection*, simulações de *data poisoning* e ensaios de *rollback*.

## Mecanismo de Aprimoramento Contínuo e Visão Estratégica

### Roteiro de Ação para o Ciclo de Melhoria Contínua

- [ ] Realizar revisão periódica de inventário e classificação de sistemas de IA.
- [ ] Atualizar AIAs regularmente.
- [ ] Conduzir auditorias de viés e efetividade.
- [ ] Revisar fornecedores críticos.
- [ ] Reciclar políticas de uso de IA.
- [ ] Aplicar lições aprendidas de incidentes e auditorias.
- [ ] Fornecer treinamento contínuo para equipes.
- [ ] Revisar métricas executivas e operacionais.
- [ ] Adotar uma versão mínima viável de governança nos primeiros 90 dias, focando em inventário, política de uso aceitável, classificação inicial de alto risco, definição de *owners* e mecanismo básico de registro de incidentes.

### Thresholds Operacionais e Gatilhos de Escalonamento

- [ ] Definir KRIs e *thresholds* explícitos para cada sistema de médio e alto risco para acionar: *rollback*, reclassificação de risco, suspensão de autonomia, revisão extraordinária do AIA ou escalonamento ao Comitê.
- [ ] Estabelecer exemplos de gatilho, como queda relevante de acurácia, múltiplos *overrides* humanos, aumento abrupto de falsos positivos/negativos, detecção de incidente de segurança, mudança regulatória ou expansão do sistema para decisão mais crítica sem aprovação formal.

---
*Este checklist é um documento vivo e deve ser adaptado e atualizado conforme a evolução do framework e das necessidades da organização.*
