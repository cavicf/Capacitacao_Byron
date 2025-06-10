//VETORES

//map
let a = [2, 3, 5, 7, 8];
let b = a.map((element, index) => {
  return element * index;
});
console.log(a);
console.log(b);
document.body.innerText = b;

//For each
a.forEach((element) => {
  console.log(element);
});
let i = 0;
a.forEach((element) => {
  i++;
});

//Filter
let c = a.filter((element) => {
  return element > 6;
});
console.log(c);

//Every e Some
let teste = a.every((element) => {
  return element < 10;
});
console.log(teste); //true ou false
let teste2 = a.some((element) => {
  return element % 2 === 0;
});
console.log(teste);
console.log(teste2);

//Find e FindIndex
let resultado = a.find((element) => {
  return element > 5;
});
let resultado2 = a.findIndex((element) => {
  return element % 2 !== 0;
});
console.log(resultado);
console.log(resultado2);

//Reduce
let d = a.reduce((anterior, atual) => {
  return anterior + atual;
}, 0); //o 0 é como se fosse a posição -1 do vetor, o anterior do primeiro elemento, é por onde a consição irá começar
console.log(d);