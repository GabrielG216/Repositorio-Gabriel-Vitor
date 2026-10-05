# Portfólio — Gabriel Vitor Gomes Fonseca

Site estático em português do Brasil. HTML, CSS e JavaScript puros, sem instalação de dependências e sem etapa de compilação.

## Abrir no VS Code e visualizar

1. Abra esta pasta no VS Code: `C:\Users\Computador\Documents\ChatGPT\Code\portfolio-gabriel`.
2. Abra `index.html` no navegador com um duplo clique pelo Explorador de Arquivos.
3. Opcionalmente, use a extensão Live Server do VS Code para atualizar automaticamente ao salvar.
4. Se tiver Python, outra opção é executar `python -m http.server 5500` nesta pasta e abrir `http://localhost:5500`.

O site funciona sem servidor. A fonte Poppins vem do Google Fonts e precisa de internet; sem ela, o navegador usa sans-serif.

## Arquivos e responsabilidades

| Caminho | Conteúdo |
| --- | --- |
| `index.html` | Todos os textos, dados pessoais, links e seções; procure os comentários em maiúsculas |
| `css/base.css` | Cores dos dois temas, fonte, estilos básicos e acessibilidade |
| `css/layout.css` | Organização, grades e espaçamento das seções |
| `css/componentes.css` | Botões, cartões, capas dos projetos e arte do topo |
| `css/responsivo.css` | Ajustes para celular e tablet |
| `js/tema.js` | Alternância de tema e preferência salva no navegador |
| `js/menu.js` | Menu móvel, Escape e fechamento ao navegar |
| `js/animacoes.js` | Animações de entrada e ano do rodapé |
| `assets/icons/favicon.svg` | Ícone da aba |
| `assets/images/` | Coloque suas imagens nesta pasta |
| `assets/curriculo/` | Coloque seu currículo PDF nesta pasta |

## Conteúdo que precisa de revisão

- O LinkedIn não pôde ser consultado automaticamente. O conteúdo usa somente os dados fornecidos na conversa; nenhuma data, empresa, certificação ou experiência adicional foi presumida.
- A profissão foi apresentada como **Desenvolvedor web**. Ajuste em `index.html`, inclusive no título e nas metatags, se preferir outra denominação.
- `[EDITAR]` Nome e período do curso técnico no Senac MG.
- `[EDITAR]` Nomes dos cursos e certificações da Udemy.
- `[EDITAR]` Imagens dos quatro projetos.
- `[EDITAR]` Link do MindSpace: o endereço enviado foi o mesmo do MedicCerto. Por isso não há link clicável nesse cartão até a confirmação.
- Não foi fornecido currículo PDF. A pasta está preparada, sem botão que leve a arquivo inexistente.

## Trocar as capas por imagens reais

No cartão correspondente em `index.html`, substitua a `div` inteira de classe `project-visual` por:

```html
<img class="project-visual" src="assets/images/zyora.webp"
     alt="Página inicial do Zyora, site de cursos online"
     width="1200" height="650" loading="lazy" style="width:100%;object-fit:cover;padding:0">
```

Adapte o nome do arquivo e o texto alternativo ao conteúdo real de cada imagem. As capas atuais são composições tipográficas, não capturas dos projetos.

Para colocar o link correto do MindSpace, substitua o `span` de classe `pending-link` por um `a` seguindo os outros cartões e remova o aviso `[EDITAR]` desse cartão.

## Contato

Os botões abrem o aplicativo de e-mail e o WhatsApp com o número informado. Não existe formulário ou backend simulando envio. O site não armazena dados de visitantes; apenas a preferência de tema é salva localmente. Os links externos abrem em outra aba.

## Publicar

Revise os pontos `[EDITAR]` antes da divulgação. Todos os caminhos são relativos, permitindo publicação em hospedagem estática, inclusive subpastas.

### Vercel

1. Envie a pasta do site para um repositório no seu GitHub.
2. Importe o repositório na Vercel.
3. Se o repositório contiver a pasta `portfolio-gabriel`, selecione-a como diretório raiz. Se contiver diretamente `index.html`, use a raiz do repositório.
4. Configure como site estático, sem comando de build. O diretório publicado deve conter `index.html`, `css`, `js` e `assets`.
5. Publique e teste o endereço gerado no computador e no celular.

### Hospedagem tradicional

Envie `index.html` e as pastas `css`, `js` e `assets` para a pasta pública da hospedagem, mantendo a estrutura. Não é necessário enviar os arquivos README.

Depois de definir o domínio definitivo, você pode adicionar no `<head>` uma tag canonical e `og:url` com a URL real. Elas foram omitidas para não publicar endereços fictícios. Nenhuma publicação externa foi realizada nesta entrega local.

## Verificação manual

- Abra todas as seções pelo menu e teste o menu móvel, inclusive Escape.
- Alterne o tema e recarregue para verificar a preferência.
- Use Tab para percorrer os links e botões; o foco deve estar visível.
- Teste o site em larguras de 375, 768 e 1440 pixels e com zoom de 200%.
- Confira os contatos e os links dos projetos antes de divulgar.
- Com preferência de movimento reduzido, a rolagem e as entradas não são animadas.
