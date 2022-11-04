import { COLORS_HEX } from "../enums/enums.js";
import { OneClickSound } from "../sound/OneClickSound.js";
import { GameStatistic } from "./GameStatistic.js";

export class GameSounds extends GameStatistic {
  constructor(gameDifficulty) {
    super(gameDifficulty);

    this.animationClickSound = new OneClickSound();
    this.switcherSoundWrapper = this.generateSwitcherSound();
  }

  generateSwitcherSound() {
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.gap = "15px";
    div.style.alignItems = "center";
    div.style.font = '700 18px Arial, Verdana, sans-serif'

    const button = document.createElement("button");
    button.style.position = "relative";
    button.style.width = "60px";
    button.style.height = "34px";
    button.style.borderRadius = "34px";
    button.style.border = "none";
    button.style.cursor = "pointer";

    const circle = document.createElement("span");
    circle.style.position = "absolute";

    circle.style.height = "26px";
    circle.style.width = "26px";
    circle.style.left = "4px";
    circle.style.bottom = "4px";
    circle.style.borderRadius = "50%";

    button.append(circle);

    button.addEventListener("click", this.handleSwitchSound);

    div.append(button, "Sound Of Slide");

    this.animationClickSound.isHasVolume
      ? this.addActiveButtonStyles(div)
      : this.addNoActiveButtonStyles(div);

    return div;
  }

  addNoActiveButtonStyles(wrapper = this.switcherSoundWrapper) {
    const button = wrapper.querySelector("button");
    button.style.backgroundColor = COLORS_HEX.GRAY;

    const circle = wrapper.querySelector("span");
    circle.style.backgroundColor = COLORS_HEX.WHITE;
    circle.style.removeProperty("transform");
  }

  addActiveButtonStyles(wrapper = this.switcherSoundWrapper) {
    const button = wrapper.querySelector("button");
    button.style.backgroundColor = COLORS_HEX.PRIMARY;

    const circle = wrapper.querySelector("span");
    circle.style.backgroundColor = COLORS_HEX.SECONDARY;
    circle.style.transform = "translateX(26px)";
  }

  handleSwitchSound = () => {
    this.animationClickSound.isHasVolume
      ? this.animationClickSound.turnOff()
      : this.animationClickSound.turnOn();

    if (this.animationClickSound.isHasVolume) {
      this.addActiveButtonStyles();

      return;
    }

    this.addNoActiveButtonStyles();
  };
}
