//Variáveis

//O tipo var é inseguro porque permite a redeclaração das variáveis a qualquer momento, o que pode induzir a erros
var nome = 'Camily';
var faculdade = 'Unifei';
console.log(nome, faculdade);

//Já o let, uma vez declarada uma váriavel, ela não pode ser redeclarada e sim apenas ter seu valor modificado
let nomeDois = 'Augusto'; //string
let idade = 20; //number
console.log(nomeDois, idade);
let temUmCarro = true; //boolean
console.log(temUmCarro);

//const são variáveis imutáveis, ou seja, uma vez declaradas seu valor não pode mudar
const cor = 'azul';
console.log(cor);

let filhosDeJose = ['Camily', 'Cintia']; //array
console.log(filhosDeJose);
console.log(filhosDeJose[1]);

let filho = {
    nome: filhosDeJose[0],
    idade: 20,
    faculdade: 'Unifei'
};
console.log(filho);
console.log(filho.nome);

console.log(a);
var a = 10;
console.log(a);

console.log(b);
let b = 20;
console.log(b);