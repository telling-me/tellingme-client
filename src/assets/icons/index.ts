import { type FunctionComponent, type ComponentClass } from 'react'
import { type IStringKey } from 'type/common'
import { ReactComponent as Menu } from './menu.svg'

interface IIconIndex extends IStringKey {
  Menu: string | FunctionComponent<any> | ComponentClass<any, any>
}

const Icon: IIconIndex = { Menu }

export default Icon
