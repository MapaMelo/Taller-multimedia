const titulo = document.getElementById("titulo");
const textoInicial = document.getElementById("textoInicial");
let estadoInicial = true;
let posicionTexto = 0;
const texto = ["Hola", "bienvenidos", "a", "esta", "pagina", "web"];

textoInicial.innerText = texto[posicionTexto];

textoInicial.addEventListener("click", () => {
    if (posicionTexto < texto.length - 1) {
    posicionTexto = posicionTexto + 1;
    textoInicial.innerText = texto[posicionTexto];
    } else {
        posicionTexto = 0;
        textoInicial.innerText = texto[posicionTexto];
    }
})

titulo.addEventListener("click", () => {
    if(estadoInicial === true){
      titulo.innerText = "Bienvenidos";
    }else {
     titulo.innerText = "Spyderman";
    }
    estadoInicial = !estadoInicial;
})
