````mermaid
---
config:
  layout: dagre
---
flowchart TB
    Top["<b>PROJETO:</b> Framework de Governança de IA para Operações Críticas"]:::header
    n2["<b>MENTORADO:</b> Alex Albuquerque<br><b>MENTOR:</b> Ricardo M. Lovatel"]:::header
    n1["<b>DESCRIÇÃO:</b> Desenvolvimento de um framework prático e adaptável para governança de soluções de IA em ambientes de operações críticas (telecom, redes, datacenter)."]:::header

    Top ~~~ n2 ~~~ n1 ~~~ PM_Canvas
    subgraph PM_Canvas[" "]
        direction LR
        
        subgraph C1["1. POR QUÊ?"]
            direction TB
            J@{ label: "<b style=\"color:\">JUSTIFICATIVA (Passado)</b><br>A crescente adoção de IA em ambientes de operações críticas (telecom, datacenters) introduz novos riscos de segurança, conformidade e operacionais. A ausência de um framework de governança claro provoca falhas catastróficas, perdas financeiras e danos à reputação. Este projeto garantirá preencher essa lacuna, garantindo o uso responsável e seguro da IA, alinhado às melhores práticas de gestão de projetos e governança de TI", shape: rect }
            B@{ label: "<b style=\"color:\">BENEFÍCIOS (Futuro)</b><br><span style=\"padding-left:\">Ferramenta prática para gestão de riscos de IA em operações críticas, promovendo inovação responsável, redução de riscos técnicos, éticos e regulatórios</span><br><span style=\"padding-left:\">• Maior controle e rastreabilidade sobre modelos e dados</span><br><span style=\"padding-left:\">• Mais confiabilidade nas decisões apoiadas por IA</span><br><span style=\"padding-left:\">• Conformidade com normas e leis, como LGPD</span><br><span style=\"padding-left:\">• Resposta mais rápida a incidentes e falhas</span><br><span style=\"padding-left:\">• Melhor alinhamento entre IA e objetivos do negócio</span>", shape: rect }
            n3@{ label: "<b style=\"color:\">OBJETIVO SMART</b><br><span style=\"padding-left:\">• Desenvolver, até 22/06/2026, um framework de governança de IA para operações críticas, acompanhado de um guia de implementação, checklist e um protótipo de dashboard com metricas relevantes.</span>", shape: rect }
        end
        
        subgraph C2["2. O QUÊ?"]
            direction TB
            P@{ label: "<b style=\"color:\">PRODUTO (Solução)</b><br><i><span style=\"padding-left:\">• Um Framework de Governança de IA para Operações Críticas</span><br><span style=\"padding-left:\">• Guia detalhado com princípios, domínios e processos.</span><br><span style=\"padding-left:\">• Templates e Checklists (ex: Avaliação de Risco de IA, RACI).</span><br><span style=\"padding-left:\">• Protótipo de Dashboard de Monitoramento de Governança (low-code)</span></i>", shape: rect }
            R@{ label: "<b style=\"color:\">REQUISITOS</b><br><i>Procedimentos de como a IA será planejada, desenvolvida, validada, monitorada e auditada para garantir uso seguro, ético e alinhado aos objetivos do negócio.<br><br>Prever papéis e responsabilidades, gestão de riscos, qualidade e segurança dos dados, transparência das decisões, monitoramento contínuo, resposta a incidentes e conformidade regulatória. Em operações críticas, também deve exigir rastreabilidade, controle de mudanças e mecanismos para reduzir falhas, vieses e impactos indevidos</i>", shape: rect }
        end
        
        subgraph C3["3. QUEM?"]
            direction TB
            S@{ label: "<b style=\"color:\">STAKEHOLDERS</b><br><i><span style=\"padding-left:\">• Mentor do PMI-DF (Ricardo M. Lovatel)</span><br>Patrocinadores/Decisores: Líderes de TI e Operações.<br>
Usuários principais: Gerentes de Projeto e equipes de Operações.<br>
Influenciadores críticos: CISOs e equipes de Segurança da Informação.<br>
Validadores de conformidade: Profissionais de Compliance e Auditoria.<br>
Especialistas técnicos: Equipes de Desenvolvimento e Operação de IA.</span></i>", shape: rect }
            E["<b>EQUIPE</b><br>Alex Sousa Albuquerque<br>Ricardo M. Lovatel"]
        end
        
        subgraph C4["4. COMO?"]
            direction TB
            PR@{ label: "<b style=\"color:\">PREMISSAS</b><br><i><span style=\"padding-left:\">• Acesso a informações sobre frameworks de governança de IA (NIST, ISO).</span><br><span style=\"padding-left:\">• Disponibilidade de ferramentas low-code/no-code para prototipagem do dashboard.</span></i>", shape: rect }
            EN["<b>ENTREGAS</b><br>• Documento Orientador<br>• Relatórios de Acompanhamento (1º e 2º)<br>• Playbook/Guia do Framework<br>• Templates e Checklists<br>• Protótipo de Dashboard<br>• Apresentação Final (Pitch)"]
            RE@{ label: "<b style=\"color:\">RESTRIÇÕES</b><br><i><span style=\"padding-left:\">• Prazo de 13 semanas para a mentoria.</span><br><span style=\"padding-left:\">• Foco em framework conceitual e protótipo, não em implementação de IA.</span><br><span style=\"padding-left:\">• Disponibilidade limitada do mentor e do mentorado.</span><br><span style=\"padding-left:\">• O projeto não contempla implantação completa do framework em um ambiente corporativo específico, apenas sua definição e prototipação..</span></i>", shape: rect }
        end
        
        subgraph C5["5. QUANDO? QUANTO?"]
            direction TB
            RI@{ label: "<b style=\"color:\">RISCOS</b><br><i><b>Mudanças regulatórias externas:</b> Novas exigências legais ou normativas podem impactar a conformidade do framework.<br><br><b>Mudanças no ambiente corporativo:</b> Alterações em processos, sistemas ou contexto de uso podem reduzir a efetividade do framework.</i>", shape: rect }
            LT["<b>LINHA DO TEMPO</b><br>• 27/03: Canvas<br>• 06/04: Plano de Projeto"]
            CU["<b>CUSTOS</b><br>Tempo do mentorado (aprox. 2h/semana, total estimado de 26 horas, com custo de oportunidade em relação a outras atividades profissionais
Tempo do mentor (horas de orientação e revisão
Possíveis assinaturas ou licenças de ferramentas low-code/no-code se necessárias.
Acesso a recursos de pesquisa online (majoritariamente gratuitos).”)<br><br>"]
        end
    end
    J ~~~ B ~~~ n3
    P ~~~ R
    S ~~~ E
    PR ~~~ EN ~~~ RE
    RI ~~~ LT ~~~ CU
    C1 ~~~ C2 ~~~ C3 ~~~ C4 ~~~ C5
    classDef header fill:#2c3e50,stroke:#2c3e50,stroke-width:2px,color:#ffffff,text-align:center,border-radius:8px
    classDef default fill:#ffffff,stroke:#bdc3c7,stroke-width:1px,color:#34495e,text-align:left,border-radius:5px
    classDef colTitles fill:#f8f9fa,stroke:#3498db,stroke-width:2px,color:#2980b9,font-weight:bold
    
    class C1,C2,C3,C4,C5 colTitles
    
    style Top color:#D50000,font-size:18px
    style PM_Canvas fill:none,stroke:none
````
---
*Este canvas é um documento vivo e deve ser adaptado e atualizado conforme a evolução do projeto.*
