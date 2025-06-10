//Objetos
let user = {
  nome: 'José',
  idade: 20,
  telefone: '9999999',
  irmaos: [
    {
      nome: 'João',
      idade: 16
    },
    {
      nome:'Pedro',
      idade: 12
    }
  ]
}


document.body.innerText = JSON.stringify(user, );
document.body.innerText = (user.nome);
document.body.innerText = (user.irmaos[0].nome);