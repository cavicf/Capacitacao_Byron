//Os getElements retornam um HTMLCollection que seria um array que contem todos os elementos daquela tag o classe

//get element by id = seleciona o elemento pelo id 
var titulo = document.getElementById('titulo');
console.log(titulo)
var secao = document.getElementById('secaoPrincipal');
console.log(secao);


//get element by class = seleciona o elemento pela class
var itensSecao = document.getElementsByClassName('itemSecaoPrincipal');
console.log(itensSecao);
console.log(itensSecao[0]);
console.log(itensSecao[1]);

////get element by tagname = seleciona o elemento pela tag
var lis = document.getElementsByTagName('li');
console.log(lis);
for(let li of lis) console.log(li);

//------------------------------------------------------------------
//Os querySelectors retornam o primeiro elemento que é encontrado com aquele id, classe ou tag

//QuerySelector pelo id
var titulo = document.querySelector("#titulo");
console.log(titulo);

//QuerySelector pela classe
var itensSecao = document.querySelector('.itemSecaoPrincipal');
console.log(itensSecao);

//QuerySelector pela tag
var li = document.querySelector('li');
console.log(li);

//------------------------------------------------------------------
//Já o querySelectorAll retorna um NodeList que é parecido com o htmlCollection, ou seja, um array com todos os elementos presentes

//queryselectorALL 
var itensSecao = document.querySelectorAll('.itemSecaoPrincipal');
console.log(itensSecao);
console.log(itensSecao[0]);
console.log(itensSecao[1]);

var lis = document.querySelectorAll('li');
console.log(lis);
for(let li of lis) console.log(li);