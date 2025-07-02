// ==== FUNDAMENTOS BÁSICOS DO JAVASCRIPT ====

// 1) TIPOS DE DADOS (os “personagens” da sua história)
// — String: textos entre aspas
let saudacao = "Olá, dev!";          // imagine um emoji falando com você
// — Number: números inteiros ou decimais
let precoPizza = 29;             // preço de uma pizza grande
// — Boolean: true ou false (verdadeiro ou falso)
let entregouNoPrazo = false;        // o entregador atrasou?
// — Undefined: variável sem valor (ainda “misteriosa”)
let sobremesa;                      // ainda não sei se vem sobremesa
// — Null: valor propositalmente vazio
let cupomDesconto = null;           // sem cupom, por enquanto

// 2) DECLARAÇÃO DE VARIÁVEIS (quem segura o que)
// — let: valor pode mudar, escopo de bloco
let saldoCarteira = 50;
// — const: valor fixo (não dá pra reatribuir)
const CEP_CASA = "01001-000";
// — var: escopo mais antigo (evite em projetos novos)
{
  var antigo = "ainda funciona, mas cuidado!";
}
console.log(antigo); // sai aqui fora também!

// 3) OPERADORES MATEMÁTICOS (o “calculador”)
// +  soma
// -  subtração
// *  multiplicação
// /  divisão
// %  resto (módulo)
let a = 10, b = 3;
console.log(a + b); // 13
console.log(a % b); // 1  (porque 10 = 3*3 + 1)

// **Caso de uso “pizza em fatias”**:
// Você tem 8 fatias e 3 amigos:
// cada um come 2 fatias → 8 - (3*2) = 2 fatias sobrando

let fatias = 8;
let amigos = 3;
let comendo = 2;
let sobrou = fatias - amigos * comendo;
console.log(`Fatias sobrando: ${sobrou}`); // 2

// 4) CONCATENAÇÃO (juntar texto e valores)
// use template strings para ficar mais legível:
let nome = "Ana";
let idade = 25;
console.log(`A ${nome} tem ${idade} anos.`);

// 5) OPERADORES RELACIONAIS (comparações)
// ==   só compara valor (evite!)
// ===  compara valor e tipo (recomendado)
// !=, !==  diferentes
console.log(10 == "10");   // true  (valor igual)
console.log(10 === "10");  // false (tipo diferente)

// 6) OPERADORES LÓGICOS (o “guardião” das condições)
// &&  “E”: tudo tem que ser true
// ||  “OU”: basta um ser true
// !   “NÃO”: inverte o valor
let temConvite = true;
let listaVIP = false;
let entra = temConvite && listaVIP;       // precisa convite E ser VIP
let entraAlternativo = temConvite || listaVIP; // basta um dos dois
console.log("Entra (E)?", entra);           // false
console.log("Entra (OU)?", entraAlternativo); // true

// **Caso “festa do café com código”**:
// Só entra quem tem convite e tomou café
let tomouCafe = true;
let temIngressos = true;
let podeParticipar = tomouCafe && temIngressos;
console.log("Pode participar da maratona?", podeParticipar);

// 7) RESUMO RÁPIDO
// — Strings: textos  
// — Numbers: cálculos  
// — Booleans: decisões  
// — let/const: quem guarda valores  
// — +, -, *, /, %: conta tudo  
// — ===, !==: compara CERTINHO  
// — &&, ||, !: junta e separa verdades  


//TODO
// Agora você já pode montar pequenas “histórias” de código:
// ex.: abrir um app só se for de noite OU fim de semana:
// let hora = 22;
// let diaSemana = "sábado";
// let possoAbrir = hora >= 18 || diaSemana === "sábado";
// console.log("Abriu o app?", possoAbrir);
