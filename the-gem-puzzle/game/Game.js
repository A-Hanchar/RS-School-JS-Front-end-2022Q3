export class Game {
  _emptyCellValue = null;

  _getGameCells(gameSize) {
    const cellsMatrix = new Array(gameSize);

    let cellValue = 1;

    for (let i = 0; i < gameSize; i++) {
      const cellsRow = new Array(gameSize);

      for (let j = 0; j < gameSize; j++) {
        cellsRow[j] = cellValue++;
      }

      cellsMatrix[i] = cellsRow;
    }

    cellsMatrix[gameSize - 1][gameSize - 1] = this._emptyCellValue;

    return cellsMatrix;
  }

  constructor(gameDifficulty = 4) {
    this.gameDifficulty = gameDifficulty;

    this.gameGridValues = this._getGameCells(this.gameDifficulty);
    this.gameGridGloryValues = this._getGameCells(this.gameDifficulty);
    this.gameRowsCount = this.gameDifficulty;

    this.nullX = this.gameDifficulty - 1;
    this.nullY = this.gameDifficulty - 1;

    this.isGameWon = false;
  }

  updateCoordinatesOfNull(newNullX, newNullY) {
    this.nullX = newNullX;
    this.nullY = newNullY;
  }

  updateGameConfigure(newGameLevel, gameGridValues) {
    this.gameDifficulty = newGameLevel;

    this.gameGridValues = gameGridValues
      ? gameGridValues
      : this._getGameCells(this.gameDifficulty);
    this.gameGridGloryValues = this._getGameCells(this.gameDifficulty);
    this.gameRowsCount = this.gameDifficulty;

    this.updateCoordinatesOfNull(
      this.gameDifficulty - 1,
      this.gameDifficulty - 1
    );
  }

  isCanMoveCell(cellX, cellY) {
    const isCanMoveVertical =
      (cellX - 1 === this.nullX || cellX + 1 === this.nullX) &&
      cellY === this.nullY &&
      cellX >= 0 &&
      cellX < this.gameRowsCount;

    const isCanMoveHorizontal =
      (cellY - 1 === this.nullY || cellY + 1 === this.nullY) &&
      cellX === this.nullX &&
      cellY >= 0 &&
      cellY < this.gameRowsCount;

    return isCanMoveHorizontal || isCanMoveVertical;
  }

  moveCell(cellX, cellY) {
    this.gameGridValues[this.nullY][this.nullX] =
      this.gameGridValues[cellY][cellX];
    this.gameGridValues[cellY][cellX] = this._emptyCellValue;

    this.nullX = cellX;
    this.nullY = cellY;
  }

  mix() {
    const DIRECTIONS = {
      UP: "UP",
      DOWM: "DOWN",
      LEFT: "LEFT",
      RIGHT: "RIGHT",
    };

    function getRandomDirection() {
      const min = 0;
      const max = 3;

      let rand = Math.floor(min + Math.random() * (max + 1 - min));

      switch (rand) {
        case 0:
          return DIRECTIONS.UP;
        case 1:
          return DIRECTIONS.DOWM;
        case 2:
          return DIRECTIONS.LEFT;
        default:
          return DIRECTIONS.RIGHT;
      }
    }

    for (let i = 0; i < this.gameRowsCount * 500; i++) {
      const direction = getRandomDirection();

      let cellX = this.nullX;
      let cellY = this.nullY;

      if (direction === DIRECTIONS.UP) {
        cellY--;
      }

      if (direction === DIRECTIONS.DOWM) {
        cellY++;
      }

      if (direction === DIRECTIONS.LEFT) {
        cellX--;
      }

      if (direction === DIRECTIONS.RIGHT) {
        cellX++;
      }

      if (this.isCanMoveCell(cellX, cellY)) {
        this.moveCell(cellX, cellY);
      }
    }
  }

  checkIsVictory() {
    for (let i = 0; i < this.gameRowsCount; i++) {
      for (let j = 0; j < this.gameRowsCount; j++) {
        if (this.gameGridValues[i][j] !== this.gameGridGloryValues[i][j]) {
          this.isGameWon = false;

          return;
        }
      }
    }

    this.isGameWon = true;
  }
}
