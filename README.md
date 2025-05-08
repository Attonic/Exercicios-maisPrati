# Exercícios MaisPrati

Este repositório contém soluções para os exercícios do curso MaisPrati. Cada pasta numerada, como `exercicios01`, agrupa um conjunto de exercícios em JavaScript.

## Estrutura do repositório

* `exercicios01/`: Primeira etapa de exercícios em JavaScript

## Pré-requisitos

* [Node.js](https://nodejs.org/) (versão 14 ou superior)
* Git (opcional, para clonar o repositório)

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/Attonic/Exercicios-maisPrati.git
   ```

2. Navegue até a pasta de exercícios:

   ```bash
   cd Exercicios-maisPrati/exercicios01
   ```

3. (Opcional) Se houver dependências, instale-as:

   ```bash
   npm install
   ```

## Como executar os exercícios

Cada exercício é um arquivo JavaScript. Para rodar um exercício individual, basta usar o comando `node` seguido do nome do arquivo:

```bash
node <nome-do-arquivo>.js
```

**Exemplo:**

```bash
node exercicio1.js
```

### Rodando todos os exercícios de uma vez

Se você quiser executar todos os exercícios em sequência sem digitar vários comandos, adicione um script no `package.json` dentro da pasta `exercicios01`:

```json
{
  "name": "exercicios01",
  "version": "1.0.0",
  "scripts": {
    "start": "node exercicio1.js && node exercicio2.js && node exercicio3.js"
  }
}
```

Depois, execute:

```bash
npm start
```


