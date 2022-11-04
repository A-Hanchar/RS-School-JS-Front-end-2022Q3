export class Clicker {
  constructor(start = 0) {
    this.counter = start
  }

  increment() {
    this.counter += 1
  }

  reset() {
    this.counter = 0
  }
}