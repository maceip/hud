import * as Icons from './vis-bug.icons'

export const VisBugModel = {
  r: {
    tool: 'resize',
    icon: Icons.resize,
    label: '<span><u>R</u>esize</span>',
    description: 'Adjust element dimensions',
    instruction: ''
  },
  m: {
    tool: 'move',
    icon: Icons.move,
    label: '<span><u>M</u>ove</span>',
    description: 'Reorder elements',
    instruction: ''
  },
  c: {
    tool: 'clone',
    icon: Icons.clone,
    label: '<span><u>C</u>lone</span>',
    description: 'Duplicate selected element',
    instruction: ''
  }
}
