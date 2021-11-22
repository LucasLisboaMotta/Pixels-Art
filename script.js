const paletaDeCores0 = document.getElementsByClassName("color")[0];
const paletaDeCores1 = document.getElementsByClassName("color")[1];
const paletaDeCores2 = document.getElementsByClassName("color")[2];
const paletaDeCores3 = document.getElementsByClassName("color")[3];

paletaDeCores0.addEventListener("click", selecionar);
paletaDeCores1.addEventListener("click", selecionar);
paletaDeCores2.addEventListener("click", selecionar);
paletaDeCores3.addEventListener("click", selecionar);

function selecionar(paletaAlvo) {
  const paletaSelecionada = document.getElementsByClassName("selected")[0];
  paletaSelecionada.classList.remove("selected");
  paletaAlvo.target.classList.add("selected");
}



const tabelaDePixels = document.getElementById('pixel-board');
tabelaDePixels.addEventListener("click", mudaCor);

function mudaCor(alvo) {
    let classe = document.getElementsByClassName("selected")[0].classList;
    let classePixel = "pixel";
    if (alvo.target.classList[0] === classePixel) {
        alvo.target.className = "pixel " + classe[classe.length - 2];
    }
}

// console.log('pixel ' + document.getElementsByClassName("selected")[0].classList[document.getElementsByClassName("selected")[0].classList.length - 2])