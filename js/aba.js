const abaMapper = {
  1: `<button id="work" class="active" onclick="trabalho()">Trabalho</button>
     <button id="break" onclick="intervalo()">Intervalo</button>`,
  2: `<button id="work" onclick="trabalho()">Trabalho</button>
     <button id="break" class="active" onclick="intervalo()">Intervalo</button>`,
}

function mudarAba() {
  time = timeMapper[abaAtual]
  document.getElementsByClassName('painel')[0].innerHTML = abaMapper[abaAtual]
  updateDisplayTimer(buildTimer(time))
}

function trabalho() {
  abaAtual = 1
  mudarAba()
}

function intervalo() {
  abaAtual = 2
  mudarAba()
}