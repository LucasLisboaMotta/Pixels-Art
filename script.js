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
  const classe = document.getElementsByClassName("selected")[0].classList;
  if (alvo.target.classList[0] === 'pixel') {
    alvo.target.className = "pixel " + classe[classe.length - 2];
  }
}

const botaoDeLimpar = document.getElementById('clear-board');
botaoDeLimpar.addEventListener("click", limpar);

function limpar() {
  const lista = document.getElementsByClassName('pixel');
  for (let i = 0; i < lista.length; i += 1) {
    lista[i].className = "pixel white"
  }
}
