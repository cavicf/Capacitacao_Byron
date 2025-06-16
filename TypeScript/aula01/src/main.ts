let nome:string = 'josé';
let idade: number = 25;

document.body.innerText = nome;

interface pessoaInterface{
  nome: string,
  idade: number,
  profissao: string,
  escolaridade ?: string, //opcional
  irmaos ?: pessoaInterface[]
}

let jose = {
  nome: 'josé',
  idade: 25,
  profissao: 'medico',
  irmaos: [
    {
      nome: 'joao',
      idade: 20,
      profissao: 'estudante',
      escolaridade: 'ensino medio'
    }
  ]
}

function somaIdade(pessoa: pessoaInterface ){
  pessoa.idade += 1;
  return pessoa;
}
somaIdade(jose);

document.body.innerText = JSON.stringify(jose, null, 2);


function soma(a: number, b: number) {
  return a + b;
}

soma(idade, 5);

export{}
