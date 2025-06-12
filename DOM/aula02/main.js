//----------------HTML--------------------------
//ALTERAR CONTEÚDO DO ELEMENTO
var titulo = document.querySelector('#titulo');
console.log(titulo.innerText);
console.log(titulo.textContent);
console.log(titulo.innerHTML);
//alterando texto
titulo.innerText = "Novo titulo innerText";
titulo.innerHTML = "Novo titulo innerHTML";
titulo.textContent = "Novo titulo textContent";
//adicionando texto
titulo.innerText += " adicionado";

//CRIAR ELEMENTO
var novoelemento = document.createElement("p");
console.log(novoelemento);
novoelemento.innerText = "sou o novo elemento criado";

//INSERIR ELEMENTOS
var body = document.querySelector('body');
body.appendChild(novoelemento);
var secao = document.querySelector("#secaoPrincipal");
var paragrafo1 = document.querySelector("#secaoPrincipal p");
secao.insertBefore(novoelemento, paragrafo1);
body.insertBefore(novoelemento, secao);

//TROCAR ELEMENTOS
var novospan = document.createElement("span");
novospan.innerText = "novo span criado";
var spanoculto = document.querySelector("#titulo span");
var elementoPaiSpanoculto = spanoculto.parentNode;
elementoPaiSpanoculto.replaceChild(novospan, spanoculto);

//REMOVER ELEMENTOS
var elementoPaiSpannovo = novospan.parentNode;
elementoPaiSpannovo.removeChild(novospan);
novospan.remove();

//ACESSAR E ADICIONAR ATRIBUTOS
titulo.getAttribute("id");
var img = document.querySelector('img');
img.setAttribute("alt" , "imagem teste pro metodo setatribute");

//----------------CSS--------------------------
//PROPRIEDADES
titulo.style.fontSize = "4em";
titulo.style.color = "red";
titulo.style.cssText = "font-size: 4em; color: green";
console.log(window.getComputedStyle(titulo).color);

//CLASSLIST
titulo.classList.add("textoDestacado");
titulo.classList.remove("textoDestacado"); 
let i = 9;
titulo.classList.toggle("textoDestacado", i < 10);

//----------------EVENTO--------------------------
//ADDEVENTLISTENER()
const changecolor = () => {
    titulo.style.color = 'blue';
}
titulo.addEventListener("click", changecolor);