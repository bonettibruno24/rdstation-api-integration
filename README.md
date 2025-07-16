# RD Station API Integration (OAuth2)

Este repositório contém uma implementação em Node.js para integração com a API do **RD Station Marketing** utilizando autenticação via **OAuth2**. A integração está dividida em três etapas principais:

---

## 📁 Estrutura dos arquivos

### 1. **Obter access_token e refresh_token**
Arquivo responsável por gerar o `access_token` a partir do `authorization_code` recebido via OAuth.

> 🔗 Documentação oficial:  
[Obter tokens de acesso](https://developers.rdstation.com/reference/obter-tokens-acesso)

### 2. **Criar contato na base de dados**
Cria um novo **contato** na base do RD Station. O contatqqerence/post_platform-contacts)

### 3. **Converter um contato em Lead**
Envia um evento de conversão padrão para transformar um contato em **lead ativo**, associando-o a um identificador de conversão e ativando fluxos de automação.

> 🔗 Documentação oficial:  
[Evento de conversão padrão](https://developers.rdstation.com/reference/evento-de-conversao-padrao)

---

## ✅ Requisitos

- Node.js v18+ (ou instale o pacote `node-fetch` caso esteja usando Node 16 ou inferior)
- Conta no RD Station com acesso ao painel de integrações
- Uma aplicação registrada para autenticação via OAuth2

---

## 🛠️ Como usar

1. **Autentique sua aplicação** e obtenha o `authorization_code`
2. Use o script de geração de `access_token` para obter os tokens de acesso
3. Use o `access_token` para criar contatos ou enviar conversões

---

## ⏳ Expiração e renovação de token

- O `access_token` obtido inicialmente possui validade padrão de **1 hora** (3600 segundos).
- Ao utilizar o `refresh_token`, o novo `access_token` gerado passa a ter validade de **24 horas** (86400 segundos).
- Recomenda-se armazenar o `refresh_token` com segurança para automatizar a renovação do token.

---

## 📌 Observações

- Um contato só se torna um **lead** após uma conversão registrada via API.
- A conversão deve conter um `conversion_identifier` previamente registrado no RD Station.
- O envio de conversão ativa fluxos de automação e torna o contato visível no painel de Leads.

---

## 📄 Licença

MIT