import { DrawerHTML } from "../drawer/DrawerHTML.js";
import { COLORS_HEX } from "../enums/enums.js";
import { GameManageButtons } from "./GameManageButtons.js";

export class GameHTML extends GameManageButtons {
  _gameContainerSize = 300;
  _cellSize = this._gameContainerSize / this.gameDifficulty;

  #wasFirstRender = false;

  constructor(gameDifficulty) {
    super(gameDifficulty);

    this.body = this.generateBody();

    this.gameContainer = this.generateGameContainer();

    this.canvas = document.createElement("canvas");
    this.canvas.style.margin = "auto";
    this.context = this.canvas.getContext("2d");

    this.victoryGameDrawer = new DrawerHTML(this.render.bind(this));
  }

  generateBody() {
    const defaultBodyPadding = 15;

    const body = document.body;
    body.style.minWidth = "100vw";
    body.style.minHeight = `calc(100vh - 2 * ${defaultBodyPadding}px)`;
    body.style.display = "flex";
    body.style.alignItems = "center";
    body.style.justifyContent = "center";
    body.style.margin = 0;
    body.style.paddingTop = `${defaultBodyPadding}px`;
    body.style.paddingBottom = `${defaultBodyPadding}px`;

    return body;
  }

  updateCellSize() {
    this._cellSize = this._gameContainerSize / this.gameDifficulty;
  }

  generateGameContainer() {
    const div = document.createElement("div");
    div.style.display = "grid";
    div.style.gap = "16px";

    return div;
  }

  clearGameContainerHTML() {
    this.gameContainer.innerHTML = "";
  }

  getCellHTML(value, x, y) {
    this.context.fillStyle = COLORS_HEX.GREEN;
    this.context.fillRect(x, y, this._cellSize - 1, this._cellSize - 1);

    this.context.font = `700 ${
      this._cellSize / 2
    }px Arial, Verdana, sans-serif `;
    this.context.textAlign = "center";
    this.context.textBaseline = "middle";

    this.context.fillStyle = COLORS_HEX.WHITE;
    this.context.fillText(
      value,
      x + this._cellSize / 2,
      y + this._cellSize / 2
    );
  }

  renderGridGame(gameGridValues = this.gameGridValues) {
    for (let i = 0; i < this.gameRowsCount; i++) {
      const y = i * this._cellSize;

      for (let j = 0; j < this.gameRowsCount; j++) {
        const value = Number(gameGridValues[i][j]);
        const x = j * this._cellSize;

        if (value) {
          this.getCellHTML(value, x, y);
        }
      }
    }
  }

  clearCanvasGame() {
    this.canvas.width = this._gameContainerSize;
    this.canvas.height = this._gameContainerSize;

    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  handleCanvasGameClick = (event) => {
    const cellY = Math.floor(
      (event.pageY - this.canvas.offsetTop) / this._cellSize
    );

    const cellX = Math.floor(
      (event.pageX - this.canvas.offsetLeft) / this._cellSize
    );

    if (this.isCanMoveCell(cellX, cellY)) {
      this.animationClickSound.play()

      // Animation
      const isAnimateDown = cellX === this.nullX && cellY + 1 === this.nullY;
      const isAnimateUp = cellX === this.nullX && cellY - 1 === this.nullY;
      const isAnimateLeft = cellX === this.nullX + 1 && cellY === this.nullY;
      const isAnimateRight = cellX === this.nullX - 1 && cellY === this.nullY;

      const value = Number(this.gameGridValues[cellY][cellX]);

      let posX = cellX * this._cellSize;
      let posY = cellY * this._cellSize;

      const posNullX = this.nullX * this._cellSize;
      const posNullY = this.nullY * this._cellSize;

      const changedPositionValue = 15;

      const animateId = setInterval(() => {
        this.getCellHTML(value, posX, posY);

        if (isAnimateDown) posY += changedPositionValue;
        if (isAnimateUp) posY -= changedPositionValue;
        if (isAnimateLeft) posX -= changedPositionValue;
        if (isAnimateRight) posX += changedPositionValue;

        // finish animation and game if game was won
        if (
          (isAnimateDown && posY >= posNullY) ||
          (isAnimateUp && posY <= posNullY) ||
          (isAnimateLeft && posX <= posNullX) ||
          (isAnimateRight && posX >= posNullX)
        ) {
          this.moveCell(cellX, cellY);

          this.clearCanvasGame();
          this.renderGridGame();

          this.incrementAndRenderCounter();

          this.checkIsVictory();
          if (this.isGameWon) {
            this.canvas.removeEventListener(
              "click",
              this.handleCanvasGameClick
            );

            this.statisticDrawer.close();

            this.setScoreInLocalStorage();
            this.removeActiveGameInLocalStorage();

            this.victoryGameDrawer.open(this.getVictoryDrawerContent());

            this.counter.reset();
            this.stopwatch.reset();
            this.clearGameContainerHTML();
          }

          clearInterval(animateId);
        }
      }, 25);
    }
  };

  getVictoryDrawerContent() {
    const div = document.createElement("div");
    div.style.padding = "25px";
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    div.style.padding = "15px";

    const p = document.createElement("p");
    p.style.fontSize = "32px";
    p.style.color = COLORS_HEX.WHITE;
    p.style.lineHeight = "48px";

    p.innerHTML = `Hooray! You solved the puzzle in <strong>${this.stopwatch.getConvertTime()}</strong> and <strong>${
      this.counter.counter
    }</strong> moves!`;

    div.append(p);

    return div;
  }

  game() {
    this.clearGameContainerHTML();

    // Top Buttons
    const gameButtonsWtrapper = this.renderButtons("game");

    this.stopGame.addEventListener("click", () => {
      gameButtonsWtrapper.remove();
      gameStatisticsWrapper.remove();

      this.canvas.removeEventListener("click", this.handleCanvasGameClick);

      this.render();
    });

    // Statistics
    const gameStatisticsWrapper = this.renderGameStatistic();

    // Game
    this.updateCellSize();
    this.clearCanvasGame();
    this.renderGridGame();

    this.canvas.addEventListener("click", this.handleCanvasGameClick);

    this.gameContainer.append(
      gameButtonsWtrapper,
      gameStatisticsWrapper,
      this.canvas,
      this.switcherSoundWrapper
    );

    this.body.append(this.gameContainer);
  }

  render() {
    this.clearGameContainerHTML();

    // Top Buttons
    const startGameButtonsWrapper = this.renderButtons("preparing");

    // Game
    const clearCanvasAndRenderGrid = () => {
      this.clearCanvasGame();
      this.renderGridGame(this.gameGridGloryValues);
    };

    clearCanvasAndRenderGrid();

    // Bottom Buttons
    const gameLevelButtonsWrapper = this.renderGameLevelsButtons();

    if (!this.#wasFirstRender) {
      this.#wasFirstRender = true;

      const startResumeGameHandlers = (event, isForStartGame = false) => {
        startGameButtonsWrapper.remove();
        gameLevelButtonsWrapper.remove();

        if (isForStartGame) {
          this.stopwatch.reset();
          this.mix();
        }

        this.game();
      };

      this.startGame.addEventListener("click", (event) =>
        startResumeGameHandlers(event, true)
      );
      this.resumeGame.addEventListener("click", startResumeGameHandlers);

      this.gameLevelButtons.forEach((levelButton) => {
        levelButton.addEventListener("click", () => {
          this.updateCellSize();

          clearCanvasAndRenderGrid();
        });
      });
    }

    this.gameContainer.append(
      startGameButtonsWrapper,
      this.canvas,
      gameLevelButtonsWrapper
    );

    this.body.append(this.gameContainer);
  }
}
