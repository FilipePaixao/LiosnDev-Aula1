// ===== DESAFIO: PROCESSAMENTO SIMPLES DE DOIS NÚMEROS =====

// 1) Somar dois valores inteiros
// 2) Dividir o resultado da soma por 2 (calculando a média)
// 3) Exibir a média no console
// 4) Criar uma mensagem concatenando texto e valor da média
// 5) Multiplicar essa média por 3 (por exemplo, aplicando um “peso extra”)
// 6) Verificar se o valor ponderado é igual a 10
// 7) Exibir no console se essa comparação é verdadeira (true) ou falsa (false)

// TIPOS DE VARIÁVEIS:
// - const: valor fixo, não pode ser reatribuído
// - let: valor mutável, escopo de bloco
// - var: escopo de função/global (uso desencorajado em código moderno) (valor mutável tbm)

// OPERADORES ARITMÉTICOS:
// +   adição
// -   subtração
// *   multiplicação
// /   divisão
// %   resto da divisão

// OPERADORES DE COMPARAÇÃO:
// ==  igualdade de valor (pode converter tipos)
// === igualdade estrita (valor e tipo — mais seguro)
// !=  diferença de valor
// !== diferença estrita (valor ou tipo)


// 1) Recebendo duas “notas” (ou valores)
let valor1 = 10;
let valor2 = 20;

// 2) Somando as notas
let soma = valor1 + valor2; 
//    10 + 20 = 30

// 3) Calculando a média (dividindo por 2)
let media = soma / 2;        
//    30 / 2 = 15

// 4) Exibindo a média no console
console.log(`Média calculada: ` + media); 
// Saída: "Média calculada: 15"

// 5) Criando uma “pontuação extra” (multiplicando a média por 3)
let pontuacaoExtra = media * 3; 
//    15 * 3 = 45

// 6) Definindo um critério de aprovação (>= 10)
let passouNoCorte = pontuacaoExtra === 10; 
//    45 === 10 → false

// 7) Imprimindo se passou (true) ou não (false)
console.log(passouNoCorte); 
