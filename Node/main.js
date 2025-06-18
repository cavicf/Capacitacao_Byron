//Node - Ambiente que permite a execução de códigos JavaScript sem o uso do navegador, ou seja, é um interpretador de JS
//Npm - é o node package manager, ou seja, um gerenciador de pacotes do node. Permite que voçê baixe, instale e gerencie os programas, bibliotecas e frameworks que você precise no seu projeto
//Npx - Utilizado quando queremos executar algum pacote uma unica vez sem a necessidade de guardá-lo no projeto

import chalk from "chalk"; //importanto a biblioteca chalk que instalamos para usá-la no codigo
console.log(chalk.bgGreen.red("hello world"));
// npx cowsay "Olá byronianos" (com esse comando estamos acessando e utilizando a biblioteca cowsay sem instalar ela no nosso projeto)