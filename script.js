const tempoAtualizacao = 1000
let interval;
let abaAtual = 0 
let time = 25*60*1000

let currentTime;

let estadoAtual = 1

/**
 * 1: Iniciar
 * 2: Pausar
 * 3: Continuar
 */

const estadoMapper = {
  1: `<button id="iniciar" value="iniciar" onclick="iniciar()">▶ Iniciar</button>`,
  2: `<button id="pausar" value="pausar" onclick="pausar()">⏸ Pausar</button>`,
  3: `<button id="continuar" value="continuar" onclick="continuar()">▶ Iniciar</button>`,
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
  document.getElementById('actions').innerHTML = estadoMapper[estadoAtual]
}

function parar() {
  clearTimeout(interval)
  updateDisplayTimer('Samara')
}

function mudarAba(aba) {
  abaAtual = aba 
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

  console.log(minutes, seconds)

  return `${to2DigF(minutes)}:${to2DigR(seconds)}`
  // return `${Math.round(minutes).toString().padStart(2, 0)}:${Math.round(seconds).toString().padStart(2, 0)}`
}