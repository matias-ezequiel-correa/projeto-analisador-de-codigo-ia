<div align="center">
  <img alt="Logo" src="./public/favicon.png" width="100" />
</div>
<h1 align="center">
  Matías Ezequiel Correa - Analisador de Código com IA 🤖
</h1>
<p align="center">
  Neste projeto <b>Analisador de Código com IA</b>, o usuário cola um trecho de código e recebe uma análise com o principal problema e uma solução rápida. Feito com <b>React</b> + <b>Vite</b> e integrado à <b>API do Google Gemini</b>.
</p>

## Design:
[<p align="center"><img height="400em" src="./src/design/design-desktop.png" alt="Analisador de Código com IA - Versão Desktop">]("")<p>

* Mobile:
[<p align="center"><img width=250 src="./src/design/design-mobile.png" alt="Analisador de Código com IA - Versão Mobile">]("")<p>

### 🔗 Link do Projeto: <a href="LINK-DO-PROJETO" target="_blank">LINK-DO-PROJETO</a>

## Como funciona:

1. O usuário cola o código na caixa de texto.
2. Ao clicar em **Analisar código**, o React envia o código para a **API do Gemini** através do arquivo `src/services/gemini.js`.
3. A IA responde seguindo um formato definido no prompt: **❌ Principal problema** e **✅ Solução rápida**.
4. A resposta é separada e mostrada em dois blocos coloridos, um vermelho para o problema e um verde para a solução.

## Funcionalidades:

* Análise de código com IA (JavaScript, HTML, CSS e outras linguagens)
* Resposta objetiva, dividida em problema e solução
* Indicador de carregamento enquanto a IA responde
* Botão para limpar o código e o resultado
* Tratamento de erros da API
* Layout responsivo (desktop e mobile)

## Instruções para executar o projeto:
1. Abrir o terminal
2. Instalar as dependências:
```
   npm install
```
3. Criar um arquivo `.env` na raiz do projeto com a sua chave da API do Gemini (gerada no [Google AI Studio](https://aistudio.google.com/)):
```
   VITE_GEMINI_API_KEY=sua_chave_aqui
```
4. Iniciar o projeto:
```
   npm run dev
```
5. Abrir o link que aparece no console

> ⚠️ O arquivo `.env` não deve ser enviado ao GitHub. Confirme que ele está no `.gitignore`.

## Tecnologias utilizadas:

 * HTML
 * CSS
 * JAVASCRIPT
 * REACT
 * VITE
 * API DO GOOGLE GEMINI (`@google/generative-ai`)

 ### Pra entrar em contato, veja as redes abaixo!
 
<div> 
  <a href="https://instagram.com/maticorrea10" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
  <a href = "https://matiasecorrea19@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/matías-ezequiel-correa" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</div>