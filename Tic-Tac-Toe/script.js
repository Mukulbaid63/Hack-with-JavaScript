const X_class = 'x'
const CIRCLE_class = 'circle'
const win_combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('grid')
const winMessageElement = document.getElementById('win_Message')
const restartButton = document.getElementById('restart')
const winMessageTextElement = document.querySelector('[data-winning-message-text]')
let circleTurn

startGame()

restartButton.addEventListener('click', startGame)

function startGame() {
  circleTurn = false
  cellElements.forEach(cell => {
    cell.classList.remove(X_class)
    cell.classList.remove(CIRCLE_class)
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, { once: true })
  })
  setBoardHoverClass()
  winMessageElement.classList.remove('show')
}

function handleClick(e) {
  const cell = e.target
  const currentClass = circleTurn ? CIRCLE_class : X_class
  placeMark(cell, currentClass)
  if (checkWin(currentClass)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else {
    swapTurns()
    setBoardHoverClass()
  }
}

function endGame(draw) {
  if (draw) {
    winMessageTextElement.innerText = 'Draw!'
  } else {
    winMessageTextElement.innerText = `${circleTurn ? "O" : "X"} Wins!`
  }
  winMessageElement.classList.add('show')
}

function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(X_class) || cell.classList.contains(CIRCLE_class)
  })
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
}

function swapTurns() {
  circleTurn = !circleTurn
}

function setBoardHoverClass() {
  board.classList.remove(X_class)
  board.classList.remove(CIRCLE_class)
  if (circleTurn) {
    board.classList.add(CIRCLE_class)
  } else {
    board.classList.add(X_class)
  }
}

function checkWin(currentClass) {
  return win_combinations.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}