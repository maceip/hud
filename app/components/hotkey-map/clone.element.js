import { HotkeyMap } from './base.element'

export class CloneHotkeys extends HotkeyMap {
  constructor() {
    super()
    this._hotkey = 'c'
    this.tool = 'clone'
  }

  createCommand() {
    return { side: 'duplicate selection', amount: '' }
  }

  displayCommand({side}) {
    return `
      <span tool>${this._tool}</span>
      <span side>${side}</span>
    `
  }
}

customElements.define('hotkeys-clone', CloneHotkeys)
