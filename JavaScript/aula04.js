let a = 5;
let b = 5;
let c = 3;

if(a === b){
    console.log('são iguais');
} 
else{
    console.log('são diferentes')
}

if(a > c){
    console.log('é maior');
}
else{
    console.log('é menor');
}

let ternario = (a === b) ? 'são iguais' : 'são diferentes';
console.log(ternario);
console.log(a === c ? 'são iguais' : 'são diferentes');