
# 🧠 Exercícios de Lógica e Manipulação em JavaScript

Este projeto contém uma série de funções e exercícios práticos em **JavaScript**, com foco em manipulação de dados, lógica condicional, recursão, arrays, objetos, debounce e memoization.

---

## 📁 Conteúdo

1. [Validação de Datas](#1-validação-de-datas)  
2. [Jogo de Adivinhação](#2-jogo-de-adivinhação)  
3. [Palavras Únicas](#3-palavras-únicas)  
4. [Fatorial Recursivo](#4-fatorial-recursivo)  
5. [Debounce](#5-debounce)  
6. [Memoization](#6-memoization)  
7. [Mapeamento e Ordenação](#7-mapeamento-e-ordenação)  
8. [Agrupamento por Propriedade](#8-agrupar-vendas-por-cliente)  
9. [Conversão Entre Formatos](#9-conversão-entre-formatos)

---

## ✅ Como Executar

Você pode executar o código de duas formas:

### ✅ Navegador (HTML + Console)

1. Copie o conteúdo do arquivo `.js` para um `<script>` dentro de um arquivo HTML.
2. Abra o navegador e acesse o console (F12 > Aba Console) para ver os resultados.

### ✅ Node.js

1. Instale o [Node.js](https://nodejs.org/).
2. Salve o código como `index.js`.
3. No terminal, execute:

```bash
node index.js
```

> ⚠️ Para o **jogo de adivinhação**, o `prompt()` funciona apenas no navegador. No Node.js, você pode adaptar com o pacote `readline-sync`.

---

## 🔍 Detalhes das Funções

### 1. Validação de Datas

```js
ehDataValida(dia, mes, ano)
```

Verifica se uma data existe de verdade (considera ano bissexto para fevereiro).

### 2. Jogo de Adivinhação

```js
jogoDeAdivinhacao()
```

Gera um número entre 1 e 100 e permite que o usuário tente adivinhar, com dicas de "mais alto" ou "mais baixo".

### 3. Palavras Únicas

```js
palavrasUnicas("olá olá mundo mundo")
```

Retorna um array com palavras únicas (sem repetições), ignorando maiúsculas/minúsculas.

### 4. Fatorial Recursivo

```js
fatorial(n)
```

Calcula o fatorial de forma recursiva. Retorna erro se n < 0.

### 5. Debounce

```js
debounce(fn, delay)
```

Evita que uma função seja chamada repetidamente em sequência. Muito usado para otimizar buscas.

### 6. Memoization

```js
memoize(fn)
```

Cria uma versão com cache de resultados anteriores. Evita cálculos repetidos para os mesmos argumentos.

### 7. Mapeamento e Ordenação

```js
mapearEOrdenarProdutos(produtos)
```

Ordena produtos por preço e retorna apenas os nomes.

### 8. Agrupamento por Propriedade

```js
agruparVendasPorCliente(vendas)
```

Agrupa os totais de vendas por cliente usando `reduce`.

### 9. Conversão Entre Formatos

```js
paresParaObjeto(pares)
objetoParaPares(obj)
```

Converte entre arrays de pares e objetos, e vice-versa.

---

## 📚 Requisitos

- Básico de JavaScript (funções, objetos, arrays, condicionais)
- Node.js (opcional, para executar localmente)

---

## 📌 Observações

- O projeto é educativo, focado em lógica e manipulação de dados.
- O código é comentado e pode ser adaptado para projetos maiores.
- Ótimo para quem está aprendendo JavaScript moderno.
