import { Sound } from "./Sound.js";

export class OneClickSound extends Sound {
  constructor(fileSrc = '/sound/slide.mp3', isAutoPlay = false, isLoop = false) {
    super(fileSrc, isAutoPlay, isLoop);
  }
}