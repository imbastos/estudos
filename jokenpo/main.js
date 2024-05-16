import './style.css'

const users = [0, 0]

document.querySelector('#app').innerHTML = `
<div class="app p4 center column sbtwn">
<header class="column center">
  <h1 id="gameState" class="h1">Placar</h1>
  <h2 class="h2 gray500">${users[0]}x${users[1]}</h2>
</header>

<div class="row center g1">
  <div class="column center g1">
    <img src="rock.png" class="w8 p1 round bg800" />
    <span class="gray500">Você jogou: <span class="gray200">Pedra</span></span>
  </div>
  <h1 class="h1 brand">X</h1>
  <div class="column center g1">
    <img src="scissors.png" class="w8 p1 round bg800" />
    <span class="gray500">Você jogou: <span class="gray200">Tesoura</span></span>
  </div>
</div>

<div class="row g1 bottomv centerh">
  <button onClick="${handleShot(0)}" class="btn bgpurple round p1 w8">Pedra</button>
  <button onClick="${handleShot(1)}" class="btn bgpurple round p1 w8">Papel</button>
  <button onClick="${handleShot(2)}" class="btn bgpurple round p1 w8">Tesoura</button>
</div>
</div>
`

function randomShot() {
  return Math.floor(Math.random() * (2 - 0 + 1) + 0);
}

function handleShot(id) {
  const gameState = document.getElementById("gameState")
  var strong = [2, 0, 1]
  if (strong[id] == randomShot()) {
    gameState.innerHTML = "Empate";
  }
}