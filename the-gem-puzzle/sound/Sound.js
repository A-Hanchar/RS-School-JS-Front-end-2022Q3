export class Sound {
  constructor(fileOfSound, isAutoPlay = true, isLoop = true) {
    this.isHasVolume = true

    this.soundFile = fileOfSound
    this.audio = this.generateAudio(isAutoPlay, isLoop)
  }

  generateAudio(isAutoPlay, isLoop) {
    const audio = new Audio(this.soundFile);

    audio.autoplay = isAutoPlay;
    audio.loop = isLoop;

    return audio
  }

  setVolume(newValue) {
    this.volume = newValue
  }

  turnOff() {
    this.isHasVolume = false
  }

  turnOn() {
    this.isHasVolume = true
  }

  play() {
    if(this.isHasVolume) this.audio.play()
  }

  pause() {
    this.audio.pause() 
  }

  stop() {
    this.pause()
    
    this.audio.currentTime = 0 
  }
}