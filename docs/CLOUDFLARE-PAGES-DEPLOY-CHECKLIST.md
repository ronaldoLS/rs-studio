# RS Studio — Checklist de publicação no Cloudflare Pages

## Configuração preparada

- Repositório GitHub: `ronaldoLS/rs-studio`
- Branch de produção: `main`
- Diretório raiz: `/` (raiz do repositório)
- Comando de build: `npm run build`
- Diretório de saída: `dist`
- Variáveis de ambiente: nenhuma necessária para o build atual
- Destino: subdomínio gratuito `*.pages.dev`; domínio próprio adiado
- Nome sugerido para o projeto Pages: `rs-studio`, sujeito à disponibilidade

O projeto é um site estático com Vite. Se o painel não apresentar um preset genérico para Vite, selecionar “None”/“Other” e preencher o comando e o diretório de saída acima.

O build de produção foi executado localmente em 06/11/2026 e passou. O Cloudflare Pages Build Image v3 usa Node.js 22 por predefinição; a versão atual do Vite exige Node.js 20.19+ ou 22.12+. Não é necessária uma variável `NODE_VERSION` enquanto a configuração do Pages usar a Build Image v3.

## Antes de ligar o GitHub

- [ ] Confirmar que a branch `main` contém as alterações aprovadas e que a árvore de trabalho está limpa.
- [ ] Enviar os quatro commits locais atuais para `origin/main` após decidir que estão prontos para partilhar. Depois de versionar este checklist, o checkout ficará quatro commits à frente de `origin/main`.
- [ ] Confirmar o nome do projeto `rs-studio` no painel; os subdomínios `pages.dev` são atribuídos por disponibilidade.
- [ ] Confirmar a autorização da integração Cloudflare com GitHub e os repositórios a que poderá aceder.
- [ ] Confirmar que a publicação automática de commits em `main` é pretendida. A integração Git do Pages pode publicar cada atualização da branch de produção.

## Configuração no Cloudflare Pages

- [ ] Abrir **Workers & Pages** → **Create application** → **Pages**.
- [ ] Escolher a integração Git e ligar o repositório `ronaldoLS/rs-studio`.
- [ ] Definir `main` como production branch.
- [ ] Definir o comando de build `npm run build` e o build output directory `dist`.
- [ ] Não criar variáveis de ambiente para a configuração atual.
- [ ] Confirmar o nome do projeto/subdomínio `pages.dev` antes do primeiro deploy.
- [ ] Iniciar o deploy apenas após confirmação do utilizador.

## Validação após o primeiro deploy (S6-11)

- [ ] A página abre no endereço `pages.dev` atribuído, com HTTPS.
- [ ] Logótipo, fundo do Hero, imagens da galeria, CSS e JavaScript carregam.
- [ ] Navegação, filtros de projetos, diálogo de projeto e ligações de contacto funcionam.
- [ ] Rever os layouts desktop e mobile no URL publicado.
- [ ] Registar o URL final e o resultado da validação neste documento de contexto.

## Decisões e limites atuais

- Cloudflare Pages foi escolhido para a hospedagem inicial; domínio próprio continua adiado.
- A conta Cloudflare ainda não foi ligada ao GitHub.
- Nenhum deploy ou autorização de conta foi realizado como parte da preparação S6-09.
- O deploy e a ligação da integração permanecem sujeitos a confirmação explícita do utilizador.
