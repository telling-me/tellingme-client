export type ToolTipType = 'right' | 'left' | 'topLeft' | 'bottomLeft' | 'topRight' | 'bottomRight' | 'bottom'

export interface IToolTip {
  tooltipType?: ToolTipType
  tooltipText: string
  children: React.ReactNode
  childrenWidth?: number
  isError?: boolean
  _margin?: string
}
