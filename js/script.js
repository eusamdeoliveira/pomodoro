/**
 * 1: Trabalho
 * 2: Intervalo
 */
let abaAtual = 1 

/**
 * 1: Iniciar
 * 2: Pausar
 * 3: Continuar
*/
let estadoAtual = 1

const updateTime = 1000

let interval
let time = timeMapper[abaAtual]

// Dark mode
let modeAtual = 1

function dark(){
    modeAtual = 2
    updateMode()
}

function light(){
    modeAtual = 1
    updateMode()
}

function updateMode() {
    document.getElementsByClassName('darkmode')[0].innerHTML = modeMapper[modeAtual]
}

const modeMapper = {
    1: `<button id="dark" onclick="dark()" >🌙</button>
    <link rel="stylesheet" href="style.css"></link>`,
    2: `<button id="light" onclick="light()">☀️</button>
    <link rel="stylesheet" href="dark.css"></link>`
}
