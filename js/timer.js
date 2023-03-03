/**
 * O index é de acordo com a abaAtual
 * 1: workTime
 * 2: breakTime
 */
const timeMapper = {
  1: 25*60*1000,
  2: 5*60*1000
}

function atualizarTimer(period) {
  time = period
  interval = setInterval(() => {
    const text = buildTimer(time)
    time -= updateTime
    updateDisplayTimer(text)
  }, updateTime)
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