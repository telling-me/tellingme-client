import { type FunctionComponent, type ComponentClass } from 'react'
import { type IStringKey } from 'type/common'
import { ReactComponent as Menu } from './menu.svg'
import { ReactComponent as LandingEmotionBg } from './LandingEmotionBg.svg'
import { ReactComponent as LandingEmotionLine } from './LandingEmotionLine.svg'
import { ReactComponent as LandingEmotionModal } from './LandingEmotionModal.svg'
import { ReactComponent as LandingEmotionModalMobile } from './LandingEmotionModalMobile.svg'
import { ReactComponent as LandingCatchPhraseCircle } from './LandingCatchPhraseCircle.svg'
import { ReactComponent as LandingAnswer1 } from './LandingAnswer1.svg'
import { ReactComponent as LandingAnswer2 } from './LandingAnswer2.svg'
import { ReactComponent as LandingQuestionList } from './LandingQuestionList.svg'
import { ReactComponent as LandingPhone } from './LandingPhone.svg'
import { ReactComponent as LandingCircle } from './LandingCircle.svg'
import { ReactComponent as LogoSmallBubble1 } from './LogoSmallBubble1.svg'
import { ReactComponent as LogoSmallBubble2 } from './LogoSmallBubble2.svg'
import { ReactComponent as LogoSmallBubble3 } from './LogoSmallBubble3.svg'
import { ReactComponent as LogoSmallBubble4 } from './LogoSmallBubble4.svg'
import { ReactComponent as Bubble } from './bubble.svg'
import { ReactComponent as Setting } from './Setting.svg'
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
import { ReactComponent as ScrollDown } from './ScrollDown.svg'
import { ReactComponent as Smiley } from './Smiley.svg'
import { ReactComponent as Logo } from './Logo.svg'
import { ReactComponent as Close } from './Close.svg'
import { ReactComponent as ToolTipTriangle } from './ToolTipTriangle.svg'
import { ReactComponent as ToolTipTriangle2 } from './ToolTipTriangle2.svg'
import { ReactComponent as Rows } from './Rows.svg'
import { ReactComponent as Columns } from './Columns.svg'
import { ReactComponent as CaretRight } from './CaretRight.svg'
import { ReactComponent as Insta } from './Insta.svg'

interface IIconIndex extends IStringKey {
  Menu: string | FunctionComponent<any> | ComponentClass<any, any>
  Warning: string | FunctionComponent<any> | ComponentClass<any, any>
  XCircle: string | FunctionComponent<any> | ComponentClass<any, any>
  Bubble: string | FunctionComponent<any> | ComponentClass<any, any>
  Setting: string | FunctionComponent<any> | ComponentClass<any, any>
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
  ScrollDown: string | FunctionComponent<any> | ComponentClass<any, any>
  Smiley: string | FunctionComponent<any> | ComponentClass<any, any>
  LandingEmotionBg: string | FunctionComponent<any> | ComponentClass<any, any>
  LandingPhone: string | FunctionComponent<any> | ComponentClass<any, any>
  LandingEmotionLine: string | FunctionComponent<any> | ComponentClass<any, any>
  LandingEmotionModal: string | FunctionComponent<any> | ComponentClass<any, any>
  LandingEmotionModalMobile: string | FunctionComponent<any> | ComponentClass<any, any>
  LandingCatchPhraseCircle: string | FunctionComponent<any> | ComponentClass<any, any>
  LandingQuestionList: string | FunctionComponent<any> | ComponentClass<any, any>
  LandingAnswer1: string | FunctionComponent<any> | ComponentClass<any, any>
  LandingAnswer2: string | FunctionComponent<any> | ComponentClass<any, any>
  LandingCircle: string | FunctionComponent<any> | ComponentClass<any, any>
  Logo: string | FunctionComponent<any> | ComponentClass<any, any>
  LogoSmallBubble1: string | FunctionComponent<any> | ComponentClass<any, any>
  LogoSmallBubble2: string | FunctionComponent<any> | ComponentClass<any, any>
  LogoSmallBubble3: string | FunctionComponent<any> | ComponentClass<any, any>
  LogoSmallBubble4: string | FunctionComponent<any> | ComponentClass<any, any>
  Close: string | FunctionComponent<any> | ComponentClass<any, any>
  ToolTipTriangle: string | FunctionComponent<any> | ComponentClass<any, any>
  ToolTipTriangle2: string | FunctionComponent<any> | ComponentClass<any, any>
  Rows: string | FunctionComponent<any> | ComponentClass<any, any>
  Columns: string | FunctionComponent<any> | ComponentClass<any, any>
  CaretRight: string | FunctionComponent<any> | ComponentClass<any, any>
  Insta: string | FunctionComponent<any> | ComponentClass<any, any>
}

const Icon: IIconIndex = {
  Menu,
  LandingEmotionBg,
  LandingEmotionLine,
  LandingEmotionModal,
  LandingEmotionModalMobile,
  LandingCatchPhraseCircle,
  LandingQuestionList,
  LandingAnswer1,
  LandingAnswer2,
  LandingPhone,
  LandingCircle,
  LogoSmallBubble1,
  LogoSmallBubble2,
  LogoSmallBubble3,
  LogoSmallBubble4,
  Bubble,
  Setting,
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
  ScrollDown,
  Smiley,
  Logo,
  Close,
  ToolTipTriangle,
  ToolTipTriangle2,
  Rows,
  Columns,
  CaretRight,
  Insta
}

export default Icon
