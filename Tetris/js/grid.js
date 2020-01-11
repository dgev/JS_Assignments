class Tetris {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.grid = this.initGrid();
    this.colorMatrix = this.initColors();
  }
  initGrid() {
    let tetris = [];
    for (let index = 0; index < this.height; index++) {
      tetris.push(new Array(this.width).fill(0));
    }
    return tetris;
  }
  initColors() {
    let colors = [];
    for (let index = 0; index < this.height; index++) {
      colors.push(new Array(this.width).fill("gray"));
    }
    return colors;
  }
  drawGrid() {
    let tetris_grid = document.getElementById("tetris-grid");
    tetris_grid.innerHTML = " ";
    for (let row = 0; row < this.height; row++) {
      for (let column = 0; column < this.width; column++) {
        let cell = document.createElement("div");
        cell.id = row + "" + column;
        cell.className = "cell";
        tetris_grid.appendChild(cell);
      }
    }
  }
}
