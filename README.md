# 🛠️ Ionic Toolbox (App de Utilidades)

Um aplicativo mobile híbrido desenvolvido como Prova de Conceito (PoC) para explorar as capacidades do Ionic 8 com Angular e Capacitor. O app reúne diversas ferramentas úteis do dia a dia em uma interface nativa fluida.

## 📱 Ferramentas Implementadas

### 1. Calculadora (Estilo Windows 11)
* **Descrição:** Clone fiel do layout da calculadora padrão do Windows no modo escuro.
* **Features:** Máquina de estados para gerenciar operações matemáticas, tratamento de erros de ponto flutuante (floating point precision) e histórico de contas na tela.

### 2. Buscador de CEP (ViaCEP)
* **Descrição:** Consumo de API REST para busca de endereços brasileiros.
* **Features:** * Integração Assíncrona com a API pública do ViaCEP.
  * Gerenciamento de Estado de UI (Alternância entre tela de busca e resultado).
  * Máscara dinâmica de input (formatação em tempo real).
  * Tratamento avançado de Shadow DOM do Ionic para estilização customizada de foco e validação.
  * Feedback visual (Loading Spinner) para requisições de rede.

## 🚀 Tecnologias Utilizadas
* **Framework UI:** Ionic 8 (Standalone Components)
* **Lógica:** Angular 18+ / TypeScript
* **Mobile Runtime:** Capacitor (Android / iOS)
* **Estilização:** SCSS Customizado

## 💻 Como rodar o projeto
1. Clone este repositório.
2. Rode `npm install` para instalar as dependências.
3. Rode `ionic serve` para rodar no navegador.
4. Rode `ionic build` e `npx cap open android` para rodar no Android Studio.
