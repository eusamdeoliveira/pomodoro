const estadoMapper = {
  1: `<button id="iniciar" value="iniciar" onclick="iniciar()">▶ Iniciar</button>`,
  2: `<button id="pausar" value="pausar" onclick="pausar()"> <img src="pause.png" alt="pause"> Pausar</button>`,
  3: `<button id="continuar" value="continuar" onclick="continuar()">▶ Iniciar</button>`,
}

function iniciar() {
  atualizarTimer(time - updateTime)
  finalizarTimer()
  estadoAtual = 2
  mudarBotaoIniciarPausar()
}

function finalizarTimer() {
  setTimeout(() => {
    clearTimeout(interval)
    updateDisplayTimer("00:00")
    if (abaAtual == 1) {
      intervalo()
    } else {
      trabalho()
    }
  }, time + 1000)
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
  document.getElementById('stateButtonContainer').innerHTML = estadoMapper[estadoAtual]
}

function parar() {
  clearInterval(interval)
  estadoAtual = 1
  mudarBotaoIniciarPausar()
  time = timeMapper[abaAtual]
  updateDisplayTimer(buildTimer(time))
}