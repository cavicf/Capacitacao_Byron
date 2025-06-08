//Operadores

let a = 6; //= é operador de atribuição
let b = 2;
let c = '6';
let d = 7;
let e = true;

//Aritméticos
console.log(a + b); //operador de soma
console.log(a - b); //operador de subtração
console.log(a / b); //operador de divisão
console.log(a * b); //operador de multiplicação
console.log(a % b); //operador de resto da divisão inteira

//Relacionais
console.log(a === b); //compara estritamente se são iguais, inclusive o tipo da variável
console.log(a == c); //compara se os valores são iguais, sem considerar o tipo
console.log(a !== b); //compara se os valores são diferentes
console.log(a < b); //compara se o valor da esquerda é menor que o da direita
console.log(a > b); //compara se o valor da esquerda é maior que o da direita
console.log(a >= b); //compara se o valor da esquerda é maior ou igual ao da direita

//Lógicos
console.log(a == c && b === d); //ambas as afirmações tem q ser verdadeiras pra retornar true
console.log(a == c || b === d); //basta uma das condições ser verdadeira pra que retorne true
console.log(!e); //Nega a afirmação, ou seja, se era true ele transforma em false e vice-versa
