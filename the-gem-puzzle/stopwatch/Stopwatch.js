export class Stopwatch {
  constructor() {
    this.stopwatchIntervalId = null;
    this.time = 0; // in sec
  }

  start(callback) {
    this.stopwatchIntervalId = setInterval(() => {
      this.time++;
      callback?.();
    }, 1000);
  }

  stop() {
    clearInterval(this.stopwatchIntervalId);
  }

  reset() {
    this.stop();

    this.stopwatchIntervalId = null;
    this.time = 0;
  }

  getTime() {
    const seconds = Math.floor((this.time % 3600) % 60);
    const minutes = Math.floor((this.time % 3600) / 60);
    const hours = Math.floor(this.time / 3600);

    return {
      seconds,
      minutes,
      hours,
    };
  }
}
