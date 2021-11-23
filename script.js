const paletaDeCores0 = document.getElementsByClassName('color')[0];
const paletaDeCores1 = document.getElementsByClassName('color')[1];
const paletaDeCores2 = document.getElementsByClassName('color')[2];
const paletaDeCores3 = document.getElementsByClassName('color')[3];
const titulo = document.getElementById('title');

function selecionar(paletaAlvo) {
  const paletaSelecionada = document.getElementsByClassName('selected')[0];
  paletaSelecionada.classList.remove('selected');
  paletaAlvo.target.classList.add('selected');
  titulo.className = paletaAlvo.target.classList[paletaAlvo.target.classList.length - 2];
}

paletaDeCores0.addEventListener('click', selecionar);
paletaDeCores1.addEventListener('click', selecionar);
paletaDeCores2.addEventListener('click', selecionar);
paletaDeCores3.addEventListener('click', selecionar);

function mudaCor(alvo) {
  const classe = document.getElementsByClassName('selected')[0].classList;
  if (alvo.target.classList[0] === 'pixel') {
    alvo.target.className = 'pixel ' + classe[classe.length - 2];
  }
}

const tabelaDePixels = document.getElementById('pixel-board');
tabelaDePixels.addEventListener('click', mudaCor);

function limpar() {
  const lista = document.getElementsByClassName('pixel');
  for (let i = 0; i < lista.length; i += 1) {
    lista[i].className = 'pixel white';
  }
}

const botaoDeLimpar = document.getElementById('clear-board');
botaoDeLimpar.addEventListener('click', limpar);

function deletaPixel(list) {
  const numeroDivs = list.children.length;
  for (let i = 0; i < numeroDivs; i += 1) {
    const div = list.children[0];
    list.removeChild(div);
  }
}

function criaPixel(numeroPixel, lista) {
  for (let i = 0; i < numeroPixel; i += 1) {
    const divsPais = document.createElement('div');
    lista.appendChild(divsPais);
    const divsPaisInserida = document.getElementById('pixel-board').children[i];
    for (let i2 = 0; i2 < numeroPixel; i2 += 1) {
      const divsFilhos = document.createElement('div');
      divsFilhos.className = 'pixel white';
      divsPaisInserida.appendChild(divsFilhos);
    }
  }
}

function verificaPixel(numeroPixel, lista) {
  if (numeroPixel < 5) {
    numeroPixel = 5;
  } else if (numeroPixel > 50) {
    numeroPixel = 50;
  } criaPixel(numeroPixel, lista);
}
criaPixel(5, tabelaDePixels);

function inputPixel() {
  const numeroPixel = document.getElementById('board-size').value;
  if (numeroPixel === '') {
    alert('Board inválido!');
  } else {
    const lista = document.getElementById('pixel-board');
    deletaPixel(lista);
    verificaPixel(numeroPixel, lista);
  }
}
function corInicial() {
  let coresBase = ['green', 'blue', 'red', 'orange', 'yellow', 'pink', 'brown', 'purple', 'grey'];
  for (let i = 1; i <= 3; i += 1) {
    const aleatorio = Math.floor(Math.random() * coresBase.length);
    document.getElementsByClassName('color')[i].classList.add(coresBase[aleatorio]);
    coresBase.splice(aleatorio, 1);
  }
}
corInicial();
const botaoVQV = document.getElementById('generate-board');
botaoVQV.addEventListener('click', inputPixel);
