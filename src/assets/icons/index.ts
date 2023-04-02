import { type FunctionComponent, type ComponentClass } from 'react'
import { type IStringKey } from 'type/common'
import { ReactComponent as Menu } from './menu.svg'
import { ReactComponent as LogoS1 } from './logo_s1.svg'
import { ReactComponent as LogoS2 } from './logo_s2.svg'
import { ReactComponent as LogoS3 } from './logo_s3.svg'
import { ReactComponent as LogoS4 } from './logo_s4.svg'

interface IIconIndex extends IStringKey {
  Menu: string | FunctionComponent<any> | ComponentClass<any, any>
}

const Icon: IIconIndex = { Menu, LogoS1, LogoS2, LogoS3, LogoS4 }

export default Icon
