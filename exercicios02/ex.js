

// 1. Validação de Datas
function ehDataValida(dia, mes, ano) {
  if (mes < 1 || mes > 12 || dia < 1 || dia > 31) {
    return false;
  }

  const diasNoMes = [
    0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
  ];

  if (mes === 2) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
      if (dia > 29) {
        return false;
      }
    } else {
      if (dia > 28) {
        return false;
      }
    }
  } else {
    if (dia > diasNoMes[mes]) {
      return false;
    }
  }

  return true;
}


console.log("--- Validação de Datas ---");
console.log(`01/01/2023 é válida? ${ehDataValida(1, 1, 2023)}`);
console.log(`31/04/2023 é válida? ${ehDataValida(31, 4, 2023)}`);
console.log(`29/02/2024 é válida? ${ehDataValida(29, 2, 2024)}`);
console.log("\n");

// 2. Jogo de Adivinhação
function jogoDeAdivinhacao() {
  const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  let tentativas = 0;
  let palpite = 0;

  console.log("--- Jogo de Adivinhação ---");
  console.log("Tente adivinhar um número entre 1 e 100.");

  while (palpite !== numeroAleatorio) {
    palpite = parseInt(prompt("Qual é o seu palpite?"), 10);
    tentativas++;

    if (isNaN(palpite)) {
      console.log("Por favor, digite um número válido.");
    } else if (palpite < numeroAleatorio) {
      console.log("Mais alto!");
    } else if (palpite > numeroAleatorio) {
      console.log("Mais baixo!");
    } else {
      console.log(`Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas!`);
    }
  }
}

// Para testar, descomente a linha abaixo em um ambiente de navegador.
// No Node.js, você precisaria de uma biblioteca como 'readline-sync'.
// jogoDeAdivinhacao();
console.log("\n");

// 3. Palavras Únicas
function palavrasUnicas(frase) {
  const palavras = frase.toLowerCase().split(/\s+/);
  const unicas = [];

  for (let i = 0; i < palavras.length; i++) {
    let encontrada = false;
    for (let j = 0; j < unicas.length; j++) {
      if (palavras[i] === unicas[j]) {
        encontrada = true;
        break;
      }
    }
    if (!encontrada && palavras[i] !== '') {
      unicas.push(palavras[i]);
    }
  }
  return unicas;
}

// Exemplos de uso
console.log("--- Palavras Únicas ---");
console.log(`Palavras únicas em "olá olá mundo mundo": ${palavrasUnicas("olá olá mundo mundo")}`);
console.log("\n");




// 4. Fatorial Recursivo
function fatorial(n) {
  if (n < 0) {
    throw new Error("Não é possível calcular o fatorial de um número negativo.");
  }
  if (n === 0) {
    return 1;
  }
  return n * fatorial(n - 1);
}


console.log("--- Fatorial Recursivo ---");
console.log(`Fatorial de 5: ${fatorial(5)}`);
console.log(`Fatorial de 0: ${fatorial(0)}`);
try {
  console.log(`Fatorial de -1: ${fatorial(-1)}`);
} catch (e) {
  console.log(`Erro ao calcular fatorial de -1: ${e.message}`);
}
console.log("\n");

// 5. Debounce
function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    const context = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(context, args), delay);
  };
}

console.log("--- Debounce ---");

function minhaFuncaoDeBusca(termo) {
  console.log(`Realizando busca por: ${termo}`);
}

const buscarDebounced = debounce(minhaFuncaoDeBusca, 500);

buscarDebounced("a");
buscarDebounced("ab");
buscarDebounced("abc");

setTimeout(() => {
  console.log("Debounce testado. Apenas a última chamada 'abc' deve ter sido executada.");
}, 1000);
console.log("\n");

// 6. Memoization
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("Retornando do cache para:", args);
      return cache[key];
    }
    console.log("Calculando e armazenando em cache para:", args);
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}


console.log("--- Memoization ---");

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibonacciMemoized = memoize(fibonacci);

console.log(`Fibonacci(10): ${fibonacciMemoized(10)}`);
console.log(`Fibonacci(10): ${fibonacciMemoized(10)}`);
console.log(`Fibonacci(5): ${fibonacciMemoized(5)}`);
console.log("\n");




// 7. Mapeamento e Ordenação
function mapearEOrdenarProdutos(produtos) {
  const produtosOrdenados = [...produtos].sort((a, b) => a.preco - b.preco);
  return produtosOrdenados.map(produto => produto.nome);
}


console.log("--- Mapeamento e Ordenação ---");
const produtos = [{
  nome: "TV",
  preco: 1500
}, {
  nome: "Celular",
  preco: 800
}, {
  nome: "Notebook",
  preco: 2500
}, {
  nome: "Fone de Ouvido",
  preco: 200
}, ];
console.log("Produtos originais:", produtos);
console.log("Nomes de produtos ordenados por preço:", mapearEOrdenarProdutos(produtos));
console.log("\n");


// 8. Agrupamento por Propriedade
function agruparVendasPorCliente(vendas) {
  return vendas.reduce((acumulador, venda) => {
    const {
      cliente,
      total
    } = venda;
    acumulador[cliente] = (acumulador[cliente] || 0) + total;
    return acumulador;
  }, {});
}

console.log("--- Agrupamento por Propriedade ---");
const vendas = [{
  cliente: "Ana",
  total: 100
}, {
  cliente: "João",
  total: 250
}, {
  cliente: "Ana",
  total: 50
}, {
  cliente: "Maria",
  total: 120
}, {
  cliente: "João",
  total: 80
}, ];
console.log("Vendas originais:", vendas);
console.log("Vendas agrupadas por cliente:", agruparVendasPorCliente(vendas));
console.log("\n");


// 9. Conversão Entre Formatos


function paresParaObjeto(pares) {
  return pares.reduce((obj, [chave, valor]) => {
    obj[chave] = valor;
    return obj;
  }, {});
}

// ○ objetoParaPares(obj)
function objetoParaPares(obj) {
  return Object.entries(obj);
}


console.log("--- Conversão Entre Formatos ---");

const meuObjeto = {
  nome: "Alice",
  idade: 30,
  cidade: "São Paulo"
};
const meusPares = [
  ["cor", "azul"],
  ["tamanho", "M"],
  ["material", "algodão"]
];

console.log("Objeto original:", meuObjeto);
const paresDoObjeto = objetoParaPares(meuObjeto);
console.log("Objeto convertido para pares:", paresDoObjeto);

console.log("\nPares originais:", meusPares);
const objetoDosPares = paresParaObjeto(meusPares);
console.log("Pares convertidos para objeto:", objetoDosPares);
console.log("\n");