//Promises
// fetch(' https://api.github.com/users/cavicf').then((response) => {
//   response.json().then((body) => {
//     console.log(body);
//   })
// })

// fetch('https://api.github.com/users/cavicf').then(response => {
//   return response.json();
// }).then(body => {
//   console.log(body);
// }).catch(erro => {
//   console.log(erro);
// }).finally(() => {
//   console.log('requisição terminada');
// });

const buscaPorDados = async () => {
  try{
    let response = await fetch('https://api.github.com/users/cavicf')
    let body = await response.json();
    console.log('Login do usuário:', body.login);
  }
  catch(erro){
    console.log(erro);
  }
  finally{
    console.log('requisição terminada');
  }
}
buscaPorDados();
