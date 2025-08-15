import hotkeys from 'hotkeys-js'
import { getStyle } from '../utilities/'

const key_events = 'up,down,left,right,shift+up,shift+down,shift+left,shift+right'

export function Resize(visbug) {
  hotkeys(key_events, (e, handler) => {
    if (e.cancelBubble) return
    e.preventDefault()
    resizeElements(visbug.selection(), handler.key)
  })

  return () => {
    hotkeys.unbind(key_events)
    hotkeys.unbind('up,down,left,right') // workaround for library bug
  }
}

export function resizeElements(els, direction) {
  const combo = direction.split('+')
  const amount = combo.includes('shift') ? 10 : 1
  const dir = combo[combo.length - 1]

  els.forEach(el => {
    const width = parseInt(getStyle(el, 'width'), 10)
    const height = parseInt(getStyle(el, 'height'), 10)
    if (dir === 'left' || dir === 'right') {
      const delta = dir === 'left' ? -amount : amount
      const newWidth = width + delta
      el.style.width = `${newWidth < 0 ? 0 : newWidth}px`
    } else {
      const delta = dir === 'up' ? -amount : amount
      const newHeight = height + delta
      el.style.height = `${newHeight < 0 ? 0 : newHeight}px`
    }
  })
}
