let playerScore = 0
let cpuScore = 0
let roundsToWin = 3
let gameActive = false

function startGame(){

playerScore = 0
cpuScore = 0

roundsToWin = parseInt(document.getElementById("rounds").value)
gameActive = true

updateScore()
document.getElementById("result").innerHTML = "Partida iniciada"
}

function updateScore(){
document.getElementById("score").innerHTML =
`Jugador ${playerScore} - ${cpuScore} CPU`
}

async function play(choice){

if(!gameActive){
alert("Empieza una partida primero")
return
}

const response = await fetch(`/play/${choice}`)
const data = await response.json()

let text = `Tú: ${data.player} | CPU: ${data.computer}<br>`

if(data.result === "win"){
playerScore++
text += "Ganaste la ronda"
}

else if(data.result === "lose"){
cpuScore++
text += "Perdiste la ronda"
flashLose()
}

else{
text += "Empate"
}

updateScore()

if(playerScore >= roundsToWin){
text += "<br><br>🎉 GANASTE LA PARTIDA"
gameActive = false
}

else if(cpuScore >= roundsToWin){
text += "<br><br>💀 PERDISTE LA PARTIDA"
gameActive = false
}

document.getElementById("result").innerHTML = text

}

function flashLose(){

const body = document.body

body.classList.remove("flash-lose")

// reinicia animación
void body.offsetWidth

body.classList.add("flash-lose")

}