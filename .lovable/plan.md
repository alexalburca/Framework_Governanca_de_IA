# Plano: Site "Framework Governança de IA" no padrão HTTrack

Recriar o visual da página HTTrack anexada (cabeçalho preto, container roxo `#77b`, painel `#ccd` com borda preta, tabelas com bordas `#99c` e fundo `fade.gif`, GIF `backblue.gif` no canto, tipografia Trebuchet MS) dentro do template TanStack atual, servindo como landing/índice do repositório `alexalburca/Framework_Governanca_de_IA`.

## Estrutura de rotas

```
src/routes/
  __root.tsx        (mantém shell, ajusta <title>/meta para PT-BR)
  index.tsx         /            -> Índice de seções (estilo "List of available projects")
  introducao.tsx    /introducao  -> O que é o Framework
  pilares.tsx      /pilares     -> Pilares de Governança de IA
  riscos.tsx        /riscos      -> Gestão de riscos
  controles.tsx     /controles   -> Controles e políticas
  referencias.tsx   /referencias -> Normas (ISO 42001, NIST AI RMF, EU AI Act, LGPD)
  sobre.tsx         /sobre       -> Sobre / link para o repositório no GitHub
```

Cada rota define seu próprio `head()` com title/description/og em PT-BR.
A página inicial reproduz o bloco `Index of locally available projects` com cada seção como linha da tabela (`· NOME`), apontando para a rota correspondente.

## Visual (fiel ao anexo)

- Assets copiados para `public/`: `backblue.gif` e `fade.gif` (originais do anexo).
- Tokens em `src/styles.css` (oklch) refletindo as cores do CSS original:
  - `--background` ≈ `#77b` (roxo de fundo do body)
  - `--card` ≈ `#ccd` (painel de conteúdo)
  - `--border` ≈ `#000`
  - `--accent` ≈ `#99c` (bordas/headers das tabelas)
  - `--primary` ≈ `#00f` (links) / hover `#c00`
  - Fonte: Trebuchet MS, Verdana, Arial, Helvetica, sans-serif
- Componente compartilhado `HttrackLayout` (em `src/components/HttrackLayout.tsx`) reproduzindo a estrutura aninhada de `<table>`s do original:
  - Barra preta `#subTitle` no topo: "Framework de Governança de IA"
  - Painel `#pageContent` com `background-image: url(/backblue.gif)` no canto superior direito, borda inferior preta de 6px
  - Rodapé `<small>` no padrão original
- Tabelas usam `border-collapse`, células com `background-image: url(/fade.gif)` e borda `2px solid #99c`, exatamente como o CSS anexado.
- Estilos específicos do layout vivem em `src/components/httrack.css` (importado pelo layout) para preservar fielmente seletores como `#pageContent`, `.tblRegular`, `#subTitle`, evitando reescrever tudo como utilitários Tailwind.

## Conteúdo das páginas

- `index.tsx`: H1 "Índice do Framework de Governança de IA", tabela listando as seções (uma linha por rota acima) com links `<Link>` do TanStack Router, e nota final tipo "Página gerada no padrão HTTrack — © Framework de Governança de IA".
- Demais rotas: placeholder estruturado (H1 + parágrafos curtos em PT-BR descrevendo o tema da seção) dentro do mesmo `HttrackLayout`, prontos para você preencher depois.
- `sobre.tsx`: descrição + link destacado para `https://github.com/alexalburca/Framework_Governanca_de_IA`.

## Publicação no GitHub Pages

Notas (não bloqueantes para esta entrega):
- O template é TanStack Start (SSR/edge), não export estático puro. Para hospedar no GitHub Pages é necessário gerar uma versão estática. Após aprovar o plano, posso (a) entregar apenas o site no template atual e publicar via Lovable, ou (b) também adicionar um build estático/SPA exportável para `gh-pages`. Recomendo (a) primeiro; (b) entra como passo seguinte se você confirmar que o destino final é GitHub Pages.

## Detalhes técnicos

- Assets via `public/` (referência por URL `/backblue.gif`, `/fade.gif`) para preservar o `background-image` do CSS original.
- Sem dependências novas.
- Sem mudanças em backend; somente frontend/apresentação.
- `__root.tsx`: troca de `Lovable App` para `Framework de Governança de IA`, mantém `<Outlet/>` e providers existentes.

Confirme se a lista de seções acima está adequada (ou me passe a estrutura real do repositório) que eu sigo para a implementação.
