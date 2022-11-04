import { ClickerHTML } from "../clicker/ClickerHTML.js";
import { LOCAL_STORAGE_GAME_FIELDS } from "../enums/enums.js";
import { StopwatchHTML } from "../stopwatch/StopwatchHTML.js";
import { Game } from "./Game.js";

export class GameStatistic extends Game {
  constructor(gameDifficulty) {
    super(gameDifficulty);

    this.stopwatch = new StopwatchHTML();
    this.counter = new ClickerHTML();

    this.activeGame = {
      gameGridValues: null,
      countOfMoves: null,
      timeInSec: null,
      gameDifficulty: null,
      nullX: null,
      nullY: null,
    };
  }

  updateActiveGameConfiguration(fromLocalStorage = false) {
    if (fromLocalStorage) {
      const {
        gameGridValues,
        countOfMoves,
        timeInSec,
        gameDifficulty,
        nullX,
        nullY,
      } = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_GAME_FIELDS.ACTIVE_GAME)
      );

      this.activeGame = {
        gameGridValues,
        countOfMoves,
        timeInSec,
        gameDifficulty,
        nullX,
        nullY,
      };

      this.updateGameConfigure(gameDifficulty, gameGridValues);
      this.updateCoordinatesOfNull(nullX, nullY);

      this.stopwatch.time = +timeInSec;
      this.counter.counter = +countOfMoves;

      return;
    }

    this.activeGame = {
      gameGridValues: this.gameGridValues,
      countOfMoves: this.counter.counter,
      timeInSec: this.stopwatch.time,
      gameDifficulty: this.gameDifficulty,
      nullX: this.nullX,
      nullY: this.nullY,
    };
  }

  setScoreInLocalStorage() {
    const newResult = {
      time: this.stopwatch.time,
      countOfMoves: this.counter.counter,
    };

    const results = this.getScoreFromLocalStorage() ?? [];
    results.sort((a, b) => a.time - b.time);

    if (results.length >= 10) {
      results[9] = newResult;
    } else {
      results.push(newResult);
    }

    results.sort((a, b) => a.time - b.time);

    localStorage.setItem(
      LOCAL_STORAGE_GAME_FIELDS[
        `SCORE_${this.gameDifficulty}x${this.gameDifficulty}`
      ],
      JSON.stringify(results)
    );
  }

  getScoreFromLocalStorage(gameDifficulty = this.gameDifficulty) {
    const gameScoreLevel = JSON.parse(
      localStorage.getItem(
        LOCAL_STORAGE_GAME_FIELDS[`SCORE_${gameDifficulty}x${gameDifficulty}`]
      )
    );

    return gameScoreLevel;
  }

  /**
   *
   * @param {'stopwatch' | 'counter'} disciplineType
   * @returns
   */
  generateGameDisciplineContainer(disciplineType) {
    const p = document.createElement("p");
    p.style.margin = 0;
    p.style.display = "flex";
    p.style.alignItems = "center";
    p.style.justifyContent = "center";
    p.style.gap = "6px";
    p.style.font = "700 18px Arial, Verdana, sans-serif";

    if (disciplineType === "stopwatch") {
      p.innerText = "Time:";
      p.append(this.stopwatch.render());
    }

    if (disciplineType === "counter") {
      p.innerText = "Moves:";
      p.append(this.counter.render());
    }

    return p;
  }

  incrementAndRenderCounter() {
    this.counter.increment();
    this.counter.render();
  }

  renderGameStatistic() {
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "space-around";

    const counterContainer = this.generateGameDisciplineContainer("counter");
    const stopwatchContainer =
      this.generateGameDisciplineContainer("stopwatch");

    this.stopwatch.stopwatchStartHTML();
    this.counter.render();

    div.append(counterContainer, stopwatchContainer);

    return div;
  }
}
