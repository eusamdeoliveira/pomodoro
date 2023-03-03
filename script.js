const tempoAtualizacao = 1000
let interval;
let abaAtual = 2 
let workTime = 25*60*1000
let breakTime = 5*60*1000
let time
let currentTime;
let estadoAtual = 1


/**
 * 1: Iniciar
 * 2: Pausar
 * 3: Continuar
 */

const estadoMapper = {
  1: `<button id="iniciar" value="iniciar" onclick="iniciar()">▶ Iniciar</button>`,
  2: `<button id="pausar" value="pausar" onclick="pausar()"> <img src="pause.png" alt="pause"> Pausar</button>`,
  3: `<button id="continuar" value="continuar" onclick="continuar()">▶ Iniciar</button>`,
}

const abaMapper = {
  1: `<button id="work" class="active" onclick="trabalho()">Trabalho</button>
     <button id="break" onclick="intervalo()">Intervalo</button>`,
  2: `<button id="work" onclick="trabalho()">Trabalho</button>
     <button id="break" class="active" onclick="intervalo()">Intervalo</button>`,
}

function mudarAba() {
  document.getElementsByClassName('painel')[0].innerHTML = abaMapper[abaAtual]
  updateDisplayTimer(buildTimer(time))
}

function trabalho() {
  abaAtual = 1
  time = workTime 
  mudarAba()
}

function intervalo() {
  abaAtual = 2
  time = breakTime
  mudarAba()
}

function iniciar() {
  atualizarTimer(time)
  setTimeout(() => {
    clearTimeout(interval)
  }, time)
  estadoAtual = 2
  mudarBotaoIniciarPausar()
}

function continuar() {
  atualizarTimer(time)
  estadoAtual = 2
  mudarBotaoIniciarPausar()
}

function pausar() {
  clearInterval(interval)
  estadoAtual = 3
  mudarBotaoIniciarPausar()
}

function mudarBotaoIniciarPausar() {
  document.getElementById('samara').innerHTML = estadoMapper[estadoAtual]
}
function pararWork() {
  clearInterval(interval)
  updateDisplayTimer(buildTimer(workTime))
  estadoAtual = 1
  mudarBotaoIniciarPausar()
}

function pararBreak() {
  clearInterval(interval)
  updateDisplayTimer(buildTimer(breakTime))
  estadoAtual = 1
  mudarBotaoIniciarPausar()
  }

function parar() {
  console.log(abaAtual)
  if (abaAtual = 1) {
    pararWork()
  } else {
    pararBreak()
  }
}

function atualizarTimer(period) {
  time = period
  interval = setInterval(() => {
    const text = buildTimer(time)
    time -= tempoAtualizacao
    updateDisplayTimer(text)
  }, tempoAtualizacao)
}

function updateDisplayTimer(text) {
  document.getElementById('clock').innerHTML = text
}

function to2DigF(number) {
  return Math.floor(number).toString().padStart(2, 0)
}

function to2DigR(number) {
  return Math.round(number).toString().padStart(2, 0)
}
  
  
function buildTimer(time) {
  const minutes = time / 60000
  const seconds = (minutes - Math.floor(minutes)) * 60

  return `${to2DigF(minutes)}:${to2DigR(seconds)}`
  // return `${Math.round(minutes).toString().padStart(2, 0)}:${Math.round(seconds).toString().padStart(2, 0)}`
}