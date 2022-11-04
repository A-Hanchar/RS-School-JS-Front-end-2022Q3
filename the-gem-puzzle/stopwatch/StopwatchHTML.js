import { Stopwatch } from './Stopwatch.js'

export class StopwatchHTML extends Stopwatch {
  constructor() {
    super()
    
    this.timeContainer = this.generateTimeContainer()
  }

  generateTimeContainer() {
    const timeContainer = document.createElement('span')

    return timeContainer
  }

  getConvertTime = () => {
    const { hours, minutes, seconds } = this.getTime()

    const convertHours = hours < 10 ? `0${hours}` : hours
    const convertMinutes = `0${minutes}`.slice(-2)
    const convertSeconds = `0${seconds}`.slice(-2)

    return `${convertHours}:${convertMinutes}:${convertSeconds}`
  }

  renderStopwatchValue = () => {
    this.timeContainer.innerText = this.getConvertTime()
  }

  stopwatchStartHTML = () => {
    this.start(this.renderStopwatchValue)
  }

  render() {
    this.renderStopwatchValue()

    return this.timeContainer
  }
}