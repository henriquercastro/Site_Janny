# Janny Castro — site pessoal

Primeira versão do site em Astro, preparada para hospedagem estática na Cloudflare Pages e edição de conteúdo via Pages CMS.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

A saída estática fica em `dist/`.

## Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Node: 20+ ou 22

## Edição de conteúdo

O arquivo `.pages.yml` configura as coleções do Pages CMS. A usuária poderá editar Publicações, Eventos e Podcasts por uma interface visual conectada ao repositório GitHub.

## Pendências antes do lançamento

- Confirmar domínio final.
- Substituir/validar endereço de e-mail público.
- Revisar títulos/datas do acervo que ainda estavam incompletos no PPT.
- Substituir screenshots por arquivos originais em maior resolução quando existirem.
- Revisar direitos/autorização das imagens e logos externos.

## Edição das páginas pelo Pages CMS

Esta versão permite editar também os textos e imagens das páginas existentes, sem mexer em código.

No Pages CMS, abra **Páginas do site** e escolha:
- **Página inicial** — textos e fotos da Home.
- **Página Sobre** — biografia e seções de trajetória.
- **Página Publicações** — título e texto de abertura da página.
- **Página Eventos** — título e texto de abertura da página.
- **Página Podcasts** — título e texto de abertura da página.
- **Contato e identidade** — nome, tagline, e-mail, LinkedIn e rodapé.

Publicações, eventos e podcasts continuam em suas coleções próprias. A Home agora puxa automaticamente os itens marcados como destaque e as publicações recentes.

> O Pages CMS edita o conteúdo. Alterações de layout, cores, componentes e estrutura visual continuam sendo feitas no código do site.
