let board = new Tetris(15, 10);
let tetris, colors;

function play() {
  board.initGrid();
  board.drawGrid();
  board.initColors();
  tetris = board.grid;
  colors = board.colorMatrix;
}

const color = ["b", "r", "y", "g", "p"];
let currentColor, startingPoint, coordinates, currentIndex;
let currentTetromino = [];

function drawTetris() {
  let tetris_grid = document.getElementById("tetris-grid");
  tetris_grid.innerHTML = " ";
  for (let row = 0; row < tetris.length; row++) {
    for (let column = 0; column < tetris[row].length; column++) {
      let cell = document.createElement("div");
      cell.id = row + "" + column;
      if (tetris[row][column] === 0) {
        cell.className = "cell";
      } else if (tetris[row][column] === 1 || tetris[row][column] === 11) {
        cell.className = "shape";
        cell.classList.add(`${colors[row][column]}`);
      }
      tetris_grid.appendChild(cell);
    }
  }
}

function draw(piece) {
  coordinates[0] = 0;
  let canDraw = true;
  for (let i = 0; i < tetris[0].length; i++) {
    if (piece[i] === 1 && tetris[0][i] > 0) {
      canDraw = false;
      break;
    }
  }
  if (canDraw) {
    for (let i = 0; i < tetris[0].length; i++) {
      if (piece[i] === 1 && tetris[0][i] === 0) {
        tetris[0][i] = 1;
        document.getElementById(0 + "" + i).className = "shape";
        document.getElementById(0 + "" + i).classList.add(`${currentColor}`);
        colors[0][i] = currentColor;
      }
    }
  } else {
    document.body.removeEventListener("keydown", press);
    stopGame();
    setInterval(() => {
      location.replace("./gameOver.html");
    }, 1000);
  }
  return canDraw;
}

function randomGenerator() {
  return new Promise(resolve => {
    coordinates = [0, startingPoint];
    currentIndex = Math.floor(Math.random() * tetrominoes.length);
    let current = tetrominoes[currentIndex][0];
    currentColor = color[Math.floor(Math.random() * color.length)];
    let next = 0;
    let arr = [];
    for (let index = current.length - 1; index >= 0; index--) {
      if (!current[index].every(e => e === 0)) {
        arr[next] = new Array(tetris[0].length).fill(0);
        for (let i = 0; i < current[index].length; i++) {
          if (current[index][i] === 1) {
            arr[next][startingPoint + i] = 1;
          }
        }
        next++;
      }
    }
    draw(arr[0]);
    if (next === 2) {
      move();
      draw(arr[1]);
    }
    resolve([currentIndex, 0]);
  });
}

function move() {
  let canMove = true;
  for (let row = 0; row < tetris.length; row++) {
    for (let column = 0; column < tetris[row].length; column++) {
      if (tetris[row][column] === 1) {
        if (row === tetris.length - 1 || tetris[row + 1][column] > 10) {
          canMove = false;
          stop();
          break;
        }
      }
    }
  }
  if (canMove) {
    coordinates[0] += 1;
    for (let row = tetris.length - 1; row >= 0; row--) {
      for (let column = 0; column < tetris[row].length; column++) {
        if (tetris[row][column] > 0 && tetris[row][column] < 10) {
          tetris[row + 1][column] = tetris[row][column];
          tetris[row][column] = 0;
          document.getElementById(row + 1 + "" + column).className = "shape";
          document
            .getElementById(row + 1 + "" + column)
            .classList.add(`${colors[row][column]}`);
          document.getElementById(row + "" + column).className = "cell";
          colors[row + 1][column] = colors[row][column];
          colors[row][column] = "gray";
        }
      }
    }
  }
}

function shiftLeft() {
  let canMove = true;
  for (let row = 0; row < tetris.length; row++) {
    for (let column = 0; column < tetris[row].length; column++) {
      if (tetris[row][column] === 1) {
        if (column === 0 || tetris[row][column - 1] > 10) {
          canMove = false;
          break;
        }
      }
    }
  }
  if (canMove) {
    coordinates[1] -= 1;
    for (let row = tetris.length - 1; row >= 0; row--) {
      for (let column = 1; column < tetris[row].length; column++) {
        if (
          tetris[row][column] > 0 &&
          tetris[row][column] < 10 &&
          tetris[row][column - 1] === 0
        ) {
          tetris[row][column - 1] = tetris[row][column];
          tetris[row][column] = 0;
          let ind = column - 1;
          document.getElementById(row + "" + ind).className = "shape";
          document
            .getElementById(row + "" + ind)
            .classList.add(`${colors[row][column]}`);
          document.getElementById(row + "" + column).className = "cell";
          colors[row][ind] = colors[row][column];
          colors[row][column] = "gray";
        }
      }
    }
  }
}

function shiftRight() {
  let canMove = true;
  for (let row = 0; row < tetris.length; row++) {
    for (let column = 0; column < tetris[row].length; column++) {
      if (tetris[row][column] === 1) {
        if (column === tetris[0].length - 1 || tetris[row][column + 1] > 10) {
          canMove = false;
        }
      }
    }
  }
  if (canMove) {
    coordinates[1] += 1;
    for (let row = tetris.length - 1; row >= 0; row--) {
      for (let column = tetris[row].length - 1; column >= 0; column--) {
        if (
          tetris[row][column] > 0 &&
          tetris[row][column] < 10 &&
          tetris[row][column + 1] === 0
        ) {
          tetris[row][column + 1] = tetris[row][column];
          tetris[row][column] = 0;
          let ind = column + 1;
          document.getElementById(row + "" + ind).className = "shape";
          document
            .getElementById(row + "" + ind)
            .classList.add(`${colors[row][column]}`);
          document.getElementById(row + "" + column).className = "cell";
          colors[row][ind] = colors[row][column];
          colors[row][column] = "gray";
        }
      }
    }
  }
}

async function stop() {
  for (let row = 0; row < tetris.length; row++) {
    for (let column = 0; column < tetris.length; column++) {
      if (tetris[row][column] > 0 && tetris[row][column] < 10) {
        tetris[row][column] = tetris[row][column] + 10;
        coordinates = [0, startingPoint];
      }
    }
  }
  eliminateRow();
  currentTetromino = await randomGenerator();
}

function eliminateRow() {
  for (let row = 0; row < tetris.length; row++) {
    if (tetris[row].every(elem => elem >= 10)) {
      tetris.splice(row, 1);
      tetris.splice(0, 0, new Array(10).fill(0));
      colors.splice(row, 1);
      colors.splice(0, 0, new Array(10).fill("gray"));
      row--;
      drawTetris();
    }
  }
}

function rotate() {
  let canRotate = true;
  let color;
  let count = 0;
  let tetromino = tetrominoes[currentIndex][currentTetromino[1]];
  let next = tetrominoes[currentIndex][(currentTetromino[1] + 1) % 4];
  if (currentIndex === 5) {
    switch (currentTetromino[1] % 4) {
      case 0:
        if (coordinates[0] > 0 && coordinates[0] < tetris.length - 2) {
          color = colors[coordinates[0]][coordinates[1]];
          for (let i = 0; i < 4; i++) {
            if (
              i !== 1 &&
              tetris[coordinates[0] - 1 + i][coordinates[1] + 2] > 0
            ) {
              canRotate = false;
              break;
            }
          }
          changeEven(canRotate, -1, 2, color);
        }
        break;
      case 1:
        if (coordinates[1] > 1 && coordinates[1] < tetris[0].length - 2) {
          color = colors[coordinates[0]][coordinates[1]];
          for (let i = 0; i < 4; i++) {
            if (
              i !== 2 &&
              tetris[coordinates[0] + 2][coordinates[1] - 2 + i] > 0
            ) {
              canRotate = false;
              break;
            }
          }
          changeOdd(canRotate, 2, -2, color);
        }
        break;
      case 2:
        if (coordinates[0] < tetris.length - 1) {
          color = colors[coordinates[0]][coordinates[1]];
          for (let i = 0; i < 4; i++) {
            if (
              i !== 2 &&
              tetris[coordinates[0] - 2 + i][coordinates[1] + 1] > 0
            ) {
              canRotate = false;
              break;
            }
          }
          changeEven(canRotate, -2, 1, color);
        }
        break;
      case 3:
        if (coordinates[1] > 0 && coordinates[1] < tetris[0].length - 2) {
          color = colors[coordinates[0]][coordinates[1]];
          for (let i = 0; i < 4; i++) {
            if (
              i !== 1 &&
              tetris[coordinates[0] + 1][coordinates[1] - 1 + i] > 0
            ) {
              canRotate = false;
              break;
            }
          }
          changeOdd(canRotate, 1, -1, color);
        }
        break;
      default:
        break;
    }
  } else if (currentIndex < 5) {
    for (let i = 0; i < tetromino.length; i++) {
      for (let j = 0; j < tetromino[0].length; j++) {
        if (tetromino[i].some(e => e !== 0)) {
          if (count === 0 && tetromino[i][j] === 1) {
            count++;
            color = colors[coordinates[0] + i][coordinates[1] + j];
          }
          if (tetromino[i][j] !== next[i][j] && next[i][j] === 1) {
            if (tetris[coordinates[0] + i][coordinates[1] + j] !== 0) {
              canRotate = false;
              break;
            }
          }
        }
      }
    }
    if (canRotate) {
      currentTetromino[1] = (currentTetromino[1] + 1) % 4;
      for (let i = 0; i < tetromino.length; i++) {
        for (let j = 0; j < tetromino[0].length; j++) {
          if (tetromino[i][j] !== next[i][j]) {
            if (tetromino[i][j] === 1) {
              tetris[coordinates[0] + i][coordinates[1] + j] = 0;
              colors[coordinates[0] + i][coordinates[1] + j] = "gray";
            } else if (next[i][j] === 1) {
              tetris[coordinates[0] + i][coordinates[1] + j] = 1;
              colors[coordinates[0] + i][coordinates[1] + j] = color;
            }
          }
        }
      }
    }
  }
}

function changeEven(canRotate, x, y, color) {
  if (canRotate) {
    currentTetromino[1] = (currentTetromino[1] + 1) % 4;
    for (let i = 0; i < 4; i++) {
      tetris[coordinates[0]][coordinates[1] + i] = 0;
      colors[coordinates[0]][coordinates[1] + i] = "gray";
    }
    coordinates[0] += x;
    coordinates[1] += y;
    for (let i = 0; i < 4; i++) {
      tetris[coordinates[0] + i][coordinates[1]] = 1;
      colors[coordinates[0] + i][coordinates[1]] = color;
    }
  }
}

function changeOdd(canRotate, x, y, color) {
  if (canRotate) {
    currentTetromino[1] = (currentTetromino[1] + 1) % 4;
    for (let i = 0; i < 4; i++) {
      tetris[coordinates[0] + i][coordinates[1]] = 0;
      colors[coordinates[0] + i][coordinates[1]] = "gray";
    }
    coordinates[0] += x;
    coordinates[1] += y;
    for (let i = 0; i < 4; i++) {
      tetris[coordinates[0]][coordinates[1] + i] = 1;
      colors[coordinates[0]][coordinates[1] + i] = color;
    }
  }
}

async function start() {
  let elem = document.getElementById("btn");
  elem.parentNode.removeChild(elem);
  document.getElementById("head").className = "";
  play();
  startingPoint = Math.floor(tetris[0].length / 2 - 1);
  currentTetromino = await randomGenerator();
  playing();
}

var continuousCall;
function playing() {
  move();
  continuousCall = setTimeout(playing, 1000);
}

function stopGame() {
  clearTimeout(continuousCall);
}

function press(event) {
  if (event.keyCode === 37) {
    shiftLeft();
  } else if (event.keyCode === 39) {
    shiftRight();
  } else if (event.keyCode === 40) {
    move();
  } else if (event.keyCode === 38) {
    rotate();
    drawTetris();
  }
}
document.body.addEventListener("keydown", press);

function restart() {
  location.replace("./index.html");
}
