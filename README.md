# Testes Automatizados

Este repositório contém scripts de testes automatizados para o módulo de cadastro de empresas e Login do sistema ERP. Os testes são escritos em JavaScript usando o framework Cypress.

## Instruções de Execução

### Pré-requisitos

- **Node.js:** [Download Node.js](https://nodejs.org/)
- **Git:** [Download Git](https://git-scm.com/)

### Clonar o Repositório

```bash
git clone https://github.com/camilalnmouraa/cypressComBDD.git
cd cypressComBDD bash
```

### Instalar as Dependências

```bash
npm install
```

### Configurar Variáveis de Ambiente

- Renomeie o arquivo .env.example para .env e preencha as variáveis necessárias.

### Execução dos Testes

```bash
npm run cypress:ci  //terminal
npm run cypress:open  //browser
```

### Estrutura do Projeto

- cypress/e2e: Contém os scripts de teste escritos em Cucumber e Js.
- cypress/pageobjects: Armazena os Page Objects utilizados nos testes.
- cypress/support: Contém configurações de suporte, como comandos personalizados e configurações do Cypress.

