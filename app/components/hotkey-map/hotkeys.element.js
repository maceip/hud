import $        from 'blingblingjs'
import hotkeys  from 'hotkeys-js'

import { ResizeHotkeys } from './resize.element'
import { MoveHotkeys }   from './move.element'
import { CloneHotkeys }  from './clone.element'

export class Hotkeys extends HTMLElement {

  constructor() {
    super()

    this.tool_map = {
      resize: document.createElement('hotkeys-resize'),
      move:   document.createElement('hotkeys-move'),
      clone:  document.createElement('hotkeys-clone'),
    }

    Object.values(this.tool_map).forEach(tool =>
      this.appendChild(tool))
  }

  connectedCallback() {
    hotkeys('shift+/', e =>
      this.cur_tool
        ? this.hideTool()
        : this.showTool())

    hotkeys('esc', e => this.hideTool())
  }

  disconnectedCallback() {}

  hideTool() {
    if (!this.cur_tool) return
    this.cur_tool.hide()
    this.cur_tool = null
  }

  showTool() {
    this.cur_tool = this.tool_map[
      $('vis-bug')[0].activeTool]
    this.cur_tool.show()
  }
}

customElements.define('visbug-hotkeys', Hotkeys)
