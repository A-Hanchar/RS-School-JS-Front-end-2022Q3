import { DrawerHTML } from "../drawer/DrawerHTML.js";
import { COLORS_HEX, LOCAL_STORAGE_GAME_FIELDS } from "../enums/enums.js";
import { GameSounds } from "./GameSounds.js";

export class GameManageButtons extends GameSounds {
  _defaultButtonPadding = "5px";
  _activeButtonPadding = "15px";

  constructor(gameDifficulty) {
    super(gameDifficulty);

    this.startGame = this.generateButton({
      buttonText: "Shuffle And Start",
      onClick: this.handleStartGame,
    });

    this.resumeGame = this.generateButton({
      buttonText: "Resume",
      onClick: this.handleResumeGame,
      isDisable: !localStorage.getItem(LOCAL_STORAGE_GAME_FIELDS.ACTIVE_GAME),
    });

    this.stopGame = this.generateButton({
      buttonText: "Stop",
      onClick: this.handleStopGame,
    });

    this.saveGame = this.generateButton({
      buttonText: "Save",
      onClick: this.handleSaveGame,
    });

    this.statisticsGame = this.generateButton({
      buttonText: "Stats",
      onClick: this.handleOpenStatistics,
    });

    this.gameLevelButtons = this.generateGameLevelButtons();

    this.statisticDrawer = new DrawerHTML(
      this.removeDisableInButton.bind(this, this.statisticsGame)
    );
  }

  generateGameLevelButtons() {
    const buttons = [];

    for (let i = 3; i <= 8; i++) {
      const button = this.generateButton({
        buttonText: `${i}x${i}`,
        color: COLORS_HEX.SECONDARY,
      });

      if (i === this.gameDifficulty) {
        button.style.padding = this._activeButtonPadding;
      }

      button.addEventListener("click", (event) => {
        event.preventDefault();

        const prevActiveButton = this.gameLevelButtons[this.gameDifficulty - 3];
        prevActiveButton.style.padding = this._defaultButtonPadding;

        button.style.padding = this._activeButtonPadding;

        this.updateGameConfigure(i);

        this.statisticDrawer.close();
      });

      buttons.push(button);
    }

    return buttons;
  }

  handleStartGame = () => {
    this.removeActiveGameInLocalStorage();

    this.stopwatch.reset();
    this.counter.reset();
  };

  handleSaveGame = () => {
    this.updateActiveGameConfiguration();

    localStorage.setItem(
      LOCAL_STORAGE_GAME_FIELDS.ACTIVE_GAME,
      JSON.stringify(this.activeGame)
    );
  };

  checkAndUpdateResumeButton() {
    !!localStorage.getItem(LOCAL_STORAGE_GAME_FIELDS.ACTIVE_GAME) ? this.removeDisableInButton(this.resumeGame) : this.disableButton(this.resumeGame);
  }

  checkAndUpdateActiveLevelButton = (button, index) => {
    button.style.padding = this._defaultButtonPadding;

    if (index + 3 === this.gameDifficulty) {
      button.style.padding = this._activeButtonPadding;
    }
  }

  handleStopGame = () => {
    this.checkIsVictory();

    if (!this.isGameWon) {
      this.handleSaveGame();

      this.stopwatch.reset();
      this.counter.reset();
    }

    if (this.isGameWon) {
      this.removeActiveGameInLocalStorage();
    }

    this.checkAndUpdateResumeButton()

    this.gameLevelButtons.forEach(this.checkAndUpdateActiveLevelButton);
  };

  handleResumeGame = () => {
    this.updateActiveGameConfiguration(true);
  };

  removeActiveGameInLocalStorage() {
    localStorage.removeItem(LOCAL_STORAGE_GAME_FIELDS.ACTIVE_GAME);
  }

  generateDrawerContent() {
    const contentContainer = document.createElement("div");
    contentContainer.style.padding = "10px";
    contentContainer.style.display = "grid";
    contentContainer.style.gridTemplateRows = "auto 1fr";
    contentContainer.style.gap = "24px";

    const score = this.getScoreFromLocalStorage();

    const title = document.createElement("h2");
    title.style.margin = 0;
    title.style.fontSize = "32px";
    title.style.color = COLORS_HEX.WHITE;
    title.style.fontWeight = "900";

    title.innerText = `Score: (${this.gameDifficulty}x${this.gameDifficulty})`;

    contentContainer.append(title);

    if (Array.isArray(score) && score.length) {
      const scoreContainer = document.createElement("ul");
      scoreContainer.style.listStyle = "none";
      scoreContainer.style.margin = 0;
      scoreContainer.style.padding = 0;
      scoreContainer.style.display = "flex";
      scoreContainer.style.flexDirection = "column";
      scoreContainer.style.gap = "10px";

      score.forEach((stat, index) => {
        const li = document.createElement("li");
        li.innerText = `${index + 1}: Time: ${stat.time} sec | Moves: ${
          stat.countOfMoves
        }`;

        li.style.color = COLORS_HEX.WHITE;
        li.style.fontSize = "18px";
        li.style.fontWeight = "300";

        scoreContainer.append(li);
      });

      contentContainer.append(scoreContainer);

      return contentContainer;
    }

    const emptyScoreContainer = document.createElement("div");
    emptyScoreContainer.style.color = COLORS_HEX.WHITE
    emptyScoreContainer.style.fontSize = '22px';
    emptyScoreContainer.style.display = 'flex';
    emptyScoreContainer.style.alignItems = 'center';
    emptyScoreContainer.style.justifyContent = 'center';

    emptyScoreContainer.innerText = "No Score 😔";

    contentContainer.append(emptyScoreContainer);

    return contentContainer;
  }

  handleOpenStatistics = () => {
    const content = this.generateDrawerContent();
    this.disableButton(this.statisticsGame);

    this.statisticDrawer.open(content);
  };

  addCommonButtonsWrapperStyles(div) {
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    div.style.gap = "16px";
  }

  disableButton(button) {
    button.style.opacity = "0.4";
    button.style.cursor = "not-allowed";
    button.disabled = true;
  }

  removeDisableInButton(button) {
    button.style.removeProperty("opacity");
    button.style.cursor = "pointer";
    button.disabled = false;
  }

  generateButton({
    buttonText,
    onClick,
    color = COLORS_HEX.PRIMARY,
    isDisable = false,
  }) {
    const button = document.createElement("button");
    button.innerText = buttonText;

    button.style.background = color;
    button.style.border = "none";
    button.style.font = `700 15px Arial, Verdana, sans-serif `;
    button.style.color = COLORS_HEX.WHITE;
    button.style.padding = this._defaultButtonPadding;
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";

    button.type = "button";

    if (isDisable) this.disableButton(button);

    button.addEventListener("click", (event) => {
      event.preventDefault();

      onClick?.();
    });

    return button;
  }

  /**
   *
   * @param {'preparing' | 'game'} buttonWrapperType
   * @returns
   */
  renderButtons(buttonWrapperType) {
    const div = document.createElement("div");
    this.addCommonButtonsWrapperStyles(div);

    if (buttonWrapperType === "game") {
      div.append(this.stopGame, this.saveGame);
    }

    if (buttonWrapperType === "preparing") {
      div.append(this.startGame, this.resumeGame);

      this.checkAndUpdateResumeButton()
    }

    div.append(this.statisticsGame);

    return div;
  }

  renderGameLevelsButtons() {
    const div = document.createElement("div");
    this.addCommonButtonsWrapperStyles(div);

    this.gameLevelButtons.forEach((button, index) => {
      this.checkAndUpdateActiveLevelButton(button, index)

      div.append(button);
    });

    return div;
  }
}
