var gameState = {
  PLAYER_ONE: 'X',
  PLAYER_TWO: 'O',
  currentPlayer: 'X',
  board: [
    "","","","","","","","",""
  ],
  gameNum: 1,
  gamesWonX: 0,
  gamesWonO: 0,
}

//Brute force check for tie, because I have given up
function checkForTie(){
        let chk1 = false;
        let chk2 = false;
        let chk3 = false;
        let tie = false;
        if(gameState.board[0] != ""  && gameState.board[1] != "" &&gameState.board[2] != "")
        {
            chk1 = true;
        }
        if(gameState.board[3] != ""  && gameState.board[4] != "" &&gameState.board[5] != "")
        {
            chk2 = true;
        }
        if(gameState.board[6] != ""  && gameState.board[7] != "" &&gameState.board[8] != "")
        {
            chk3 = true;
        }

    if(chk1 == true && chk2==true && chk3==true) {
        tie = true;
        return tie;
    }
    return false;
}

function checkForWinner(){
  var winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  var winner = false
  winningCombos.find(function(combo){
    if(gameState.board[combo[0]] == gameState.board[combo[1]] && gameState.board[combo[1]] == gameState.board[combo[2]]){
      winner = gameState.board[combo[0]]
      return winner
    }
  })
  return winner
}

function handleClick(index){
  if(gameState.board[index] == ''){
    gameState.board[index] = gameState.currentPlayer
    gameState.currentPlayer = gameState.currentPlayer == gameState.PLAYER_ONE ? gameState.PLAYER_TWO : gameState.PLAYER_ONE

    render(gameState)

    let winner = checkForWinner()
    let tie = checkForTie();

    if(winner){
      render(gameState)
      if (winner == 'O') {
        gameState.gamesWonO += 1
      }
      else {
        gameState.gamesWonX += 1
      }
        alert(`${winner} is the winner!\nGame #${gameState.gameNum}\nX has won ${gameState.gamesWonX} games.\nO has won ${gameState.gamesWonO} games.`)
        tie = false;
    }
    render(gameState)

    if(tie) {
            alert(`No one wins!\nGame #${gameState.gameNum}\nX has won ${gameState.gamesWonX} games.\nO has won ${gameState.gamesWonO} games.`);
            gameState.gameNum += 1;
            gameState.board = [
              "","","","","","","","",""
            ]
    }


    if(winner){
      gameState.gameNum += 1;
      gameState.board = [
        "","","","","","","","",""
      ]
    }
  }
}

function render(state){
  var renderedHtml = "<div class='board'>" +
    "<div class='square' onclick='handleClick(0)'>" +state.board[0]+ "</div>" +
    "<div class='square' onclick='handleClick(1)'>" +state.board[1]+ "</div>" +
    "<div class='square' onclick='handleClick(2)'>" +state.board[2]+ "</div>" +
    "<div class='square' onclick='handleClick(3)'>" +state.board[3]+ "</div>" +
    "<div class='square' onclick='handleClick(4)'>" +state.board[4]+ "</div>" +
    "<div class='square' onclick='handleClick(5)'>" +state.board[5]+ "</div>" +
    "<div class='square' onclick='handleClick(6)'>" +state.board[6]+ "</div>" +
    "<div class='square' onclick='handleClick(7)'>" +state.board[7]+ "</div>" +
    "<div class='square' onclick='handleClick(8)'>" +state.board[8]+ "</div>" +
  "</div>"

  document.querySelector(".render-target").innerHTML = renderedHtml
}

render(gameState)
