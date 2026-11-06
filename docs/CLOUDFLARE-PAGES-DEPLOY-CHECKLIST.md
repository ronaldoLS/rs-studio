# RS Studio — Checklist de publicação no Cloudflare Pages

## Configuração preparada

- Repositório GitHub: `ronaldoLS/rs-studio`
- Branch de produção: `main`
- Diretório raiz: `/` (raiz do repositório)
- Comando de build: `npm run build`
- Diretório de saída: `dist`
- Variáveis de ambiente: nenhuma necessária para o build atual
- Destino: subdomínio gratuito `*.pages.dev`; domínio próprio adiado
- Projeto Pages: `rs-studio-pt`
- URL publicada: <https://rs-studio-pt.pages.dev/>

O projeto é um site estático com Vite. Se o painel não apresentar um preset genérico para Vite, selecionar “None”/“Other” e preencher o comando e o diretório de saída acima.

O build de produção foi executado localmente em 06/11/2026 e passou. O Cloudflare Pages Build Image v3 usa Node.js 22 por predefinição; a versão atual do Vite exige Node.js 20.19+ ou 22.12+. Não é necessária uma variável `NODE_VERSION` enquanto a configuração do Pages usar a Build Image v3.

## Ligação GitHub concluída

- [x] Confirmar que a branch `main` contém as alterações aprovadas e que a árvore de trabalho está limpa antes da ligação.
- [x] Enviar os quatro commits locais para `origin/main`; o utilizador confirmou o push. O commit publicado foi `9f5e966`.
- [x] Tentar o nome `rs-studio`; Cloudflare não o disponibilizou e sugeriu um hostname com sufixo.
- [x] O utilizador escolheu `rs-studio-pt.pages.dev`; o hostname ficou fixo na criação do projeto.
- [x] Autorizar Cloudflare Workers & Pages apenas para o repositório `ronaldoLS/rs-studio`.
- [x] Confirmar deploy automático de commits em `main`.

## Configuração aplicada no Cloudflare Pages

- [x] Criar um projeto Pages por integração Git para `ronaldoLS/rs-studio`.
- [x] Definir `main` como production branch.
- [x] Definir o comando de build `npm run build` e o build output directory `dist`.
- [x] Manter as variáveis de ambiente vazias.
- [x] Confirmar o hostname `rs-studio-pt.pages.dev` antes do deploy.
- [x] Iniciar o primeiro deploy após confirmação do utilizador; estado: sucesso.

## Validação após o primeiro deploy (S6-11) — concluída

- [x] A página abre em <https://rs-studio-pt.pages.dev/> com HTTPS.
- [x] Logótipo, fundo do Hero, nove imagens da galeria, CSS, JavaScript e perfil externo Zaask carregaram.
- [x] Navegação interna, filtro de projetos e diálogo abrem/fecham; os destinos de email e Instagram foram conferidos.
- [x] Vista mobile no URL publicado sem overflow horizontal; verificações tablet/iPad Pro 13 foram feitas em S6-07.
- [x] URL final e resultado registados no documento oficial do projeto.

## Decisões e limites atuais

- Cloudflare Pages foi escolhido para a hospedagem inicial; domínio próprio continua adiado.
- A integração Cloudflare Workers & Pages foi autorizada para apenas `ronaldoLS/rs-studio`.
- O primeiro deploy está ativo em `rs-studio-pt.pages.dev`; o hostname `rs-studio.pages.dev` não estava disponível.
- A integração publica automaticamente commits novos em `main`, conforme autorização do utilizador.
- O domínio próprio continua adiado.
