import { Clicker } from "./Cliker.js";

export class ClickerHTML extends Clicker {
  constructor(start = 0) {
    super(start)

    this.counterContainer = document.createElement('span')
  }

  render() {
    this.counterContainer.innerText = this.counter

    return this.counterContainer
  }
}