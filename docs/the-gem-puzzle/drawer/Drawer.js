export class Drawer {
  constructor(closeCallback) {
    this.callbackAfterClose = closeCallback
    this.isOpen = false
  }
}