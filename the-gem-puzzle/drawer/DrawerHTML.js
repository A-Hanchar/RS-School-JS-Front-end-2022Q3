import { COLORS_HEX } from "../enums/enums.js";
import { converHexToRgba } from "../helpers/converHexToRgba.js";
import { Drawer } from "./Drawer.js";

export class DrawerHTML extends Drawer {
  constructor(closeCallback = () => {}) {
    super(closeCallback)

    this.body = document.body
    this.drawerContainer = this.generateDrawerContainer()
    this.closeButton = this.generateCloseButton()
  }

  generateDrawerContainer() {
    const div = document.createElement('div')
    div.style.maxWidth = '300px'
    div.style.minWidth = '300px'
    div.style.minHeight = '100vh'
    div.style.display = 'grid'
    div.style.gridTemplateRows = '1fr auto'
    div.style.gap = '20px'
    div.style.position = 'absolute'
    div.style.left = 0
    div.style.top = 0
    div.style.background = `
      linear-gradient(
        149deg, 
        ${converHexToRgba(COLORS_HEX.PRIMARY)} 0%,  
        ${converHexToRgba(COLORS_HEX.GREEN)} 45%, 
        ${converHexToRgba(COLORS_HEX.SECONDARY)} 100%
      )
    `

    return div
  }

  generateCloseButton() {
    const button = document.createElement('button')
    button.style.width = '100%'
    button.style.height = '45px'
    button.style.border = 'none'
    button.style.background = 'red'
    button.style.cursor = 'pointer'
    button.style.font = `700 15px Arial, Verdana, sans-serif `;
    button.style.color = COLORS_HEX.WHITE
    button.style.letterSpacing = '2px';
    button.style.textTransform = 'uppercase';

    button.innerText = 'Close'
    button.addEventListener('click', () => this.close())

    return button
  }

  open(content) {
    this.content = content

    this.content.style.overflow = 'auto'

    this.drawerContainer.style.left = '0'
    this.drawerContainer.append(this.content, this.closeButton)

    this.body.append(this.drawerContainer)

    this.isOpen = true
  }

  close() {
    this.drawerContainer.style.left = '-400px'

    this.drawerContainer.innerHTML = ''
    this.drawerContainer.remove()

    this.callbackAfterClose?.()
    this.isOpen = false
  }
}