import { type FunctionComponent, type ComponentClass } from 'react'
import { type IStringKey } from 'type/common'
import { ReactComponent as Menu } from './menu.svg'
import { ReactComponent as LogoS1 } from './logo_s1.svg'
import { ReactComponent as LogoS2 } from './logo_s2.svg'
import { ReactComponent as LogoS3 } from './logo_s3.svg'
import { ReactComponent as LogoS4 } from './logo_s4.svg'
import { ReactComponent as Warning } from './Warning.svg'
import { ReactComponent as XCircle } from './XCircle.svg'
import { ReactComponent as Heart } from './Heart.svg'
import { ReactComponent as Check } from './Check.svg'
import { ReactComponent as ArrowLeft } from './ArrowLeft.svg'
import { ReactComponent as ArrowRight } from './ArrowRight.svg'
import { ReactComponent as Male } from './Male.svg'
import { ReactComponent as Female } from './Female.svg'
import { ReactComponent as BellRinging } from './BellRinging.svg'
import { ReactComponent as CaretUp } from './CaretUp.svg'
import { ReactComponent as CaretDown } from './CaretDown.svg'
import { ReactComponent as GraduationCap } from './GraduationCap.svg'
import { ReactComponent as Handshake } from './Handshake.svg'
import { ReactComponent as Health } from './Health.svg'
import { ReactComponent as Values } from './Values.svg'
import { ReactComponent as Magnet } from './Magnet.svg'
import { ReactComponent as Pen } from './Pen.svg'
import { ReactComponent as Bagpack } from './Bagpack.svg'
import { ReactComponent as Briefcase } from './Briefcase.svg'
import { ReactComponent as Cookpot } from './Cookpot.svg'
import { ReactComponent as Smiley } from './Smiley.svg'
import { ReactComponent as Logo } from './Logo.svg'

interface IIconIndex extends IStringKey {
  Menu: string | FunctionComponent<any> | ComponentClass<any, any>
  Warning: string | FunctionComponent<any> | ComponentClass<any, any>
  XCircle: string | FunctionComponent<any> | ComponentClass<any, any>
  Heart: string | FunctionComponent<any> | ComponentClass<any, any>
  Check: string | FunctionComponent<any> | ComponentClass<any, any>
  ArrowLeft: string | FunctionComponent<any> | ComponentClass<any, any>
  ArrowRight: string | FunctionComponent<any> | ComponentClass<any, any>
  Male: string | FunctionComponent<any> | ComponentClass<any, any>
  Female: string | FunctionComponent<any> | ComponentClass<any, any>
  BellRinging: string | FunctionComponent<any> | ComponentClass<any, any>
  CaretUp: string | FunctionComponent<any> | ComponentClass<any, any>
  CaretDown: string | FunctionComponent<any> | ComponentClass<any, any>
  GraduationCap: string | FunctionComponent<any> | ComponentClass<any, any>
  Handshake: string | FunctionComponent<any> | ComponentClass<any, any>
  Health: string | FunctionComponent<any> | ComponentClass<any, any>
  Values: string | FunctionComponent<any> | ComponentClass<any, any>
  Magnet: string | FunctionComponent<any> | ComponentClass<any, any>
  Pen: string | FunctionComponent<any> | ComponentClass<any, any>
  Bagpack: string | FunctionComponent<any> | ComponentClass<any, any>
  Briefcase: string | FunctionComponent<any> | ComponentClass<any, any>
  Cookpot: string | FunctionComponent<any> | ComponentClass<any, any>
  Smiley: string | FunctionComponent<any> | ComponentClass<any, any>
  Logo: string | FunctionComponent<any> | ComponentClass<any, any>
}

const Icon: IIconIndex = {
  Menu,
  LogoS1,
  LogoS2,
  LogoS3,
  LogoS4,
  Warning,
  XCircle,
  Heart,
  Check,
  ArrowLeft,
  ArrowRight,
  Male,
  Female,
  BellRinging,
  CaretUp,
  CaretDown,
  GraduationCap,
  Handshake,
  Health,
  Values,
  Magnet,
  Pen,
  Bagpack,
  Briefcase,
  Cookpot,
  Smiley,
  Logo
}

export default Icon
