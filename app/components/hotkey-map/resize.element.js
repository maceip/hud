import { HotkeyMap } from './base.element'

export class ResizeHotkeys extends HotkeyMap {
  constructor() {
    super()
    this._hotkey = 'r'
    this.tool = 'resize'
  }

  createCommand({e:{code}, hotkeys}) {
    let side = '[arrow key]'
    if (code === 'ArrowUp')     side = 'decrease height'
    if (code === 'ArrowDown')   side = 'increase height'
    if (code === 'ArrowLeft')   side = 'decrease width'
    if (code === 'ArrowRight')  side = 'increase width'
    const amount = hotkeys.shift ? 10 : 1
    return { side, amount }
  }

  displayCommand({side, amount}) {
    return `
      <span tool>${this._tool}</span>
      <span side>${side}</span>
      <span light> by </span>
      <span amount>${amount}</span>
    `
  }
}

customElements.define('hotkeys-resize', ResizeHotkeys)
