import { type FunctionComponent, type ComponentClass } from 'react'
import { type IStringKey } from 'type/common'
import { ReactComponent as NotFound } from './NotFound.svg'
import { ReactComponent as Menu } from './menu.svg'
import { ReactComponent as LandingEmotionBg } from './LandingEmotionBg.svg'
import { ReactComponent as LandingEmotionLine } from './LandingEmotionLine.svg'
import { ReactComponent as LandingEmotionModal } from './LandingEmotionModal.svg'
import { ReactComponent as LandingEmotionModalMobile } from './LandingEmotionModalMobile.svg'
import { ReactComponent as LandingCatchPhraseCircle } from './LandingCatchPhraseCircle.svg'
import { ReactComponent as LandingAnswerList } from './LandingAnswerList.svg'
import { ReactComponent as LandingAnswer1 } from './LandingAnswer1.svg'
import { ReactComponent as LandingAnswer2 } from './LandingAnswer2.svg'
import { ReactComponent as LandingAnswer3 } from './LandingAnswer3.svg'
import { ReactComponent as LandingAnswer4 } from './LandingAnswer4.svg'
import { ReactComponent as LandingQuestionList } from './LandingQuestionList.svg'
import { ReactComponent as LandingQuestion1 } from './LandingQuestion1.svg'
import { ReactComponent as LandingQuestion2 } from './LandingQuestion2.svg'
import { ReactComponent as LandingQuestion3 } from './LandingQuestion3.svg'
import { ReactComponent as LandingQuestion4 } from './LandingQuestion4.svg'
import { ReactComponent as LandingQuestion5 } from './LandingQuestion5.svg'
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
import { ReactComponent as Medium } from './Medium.svg'
import { ReactComponent as Female } from './Female.svg'
import { ReactComponent as BellRinging } from './BellRinging.svg'
import { ReactComponent as CaretUp } from './CaretUp.svg'
import { ReactComponent as CaretDown } from './CaretDown.svg'
import { ReactComponent as GraduationCap } from './GraduationCap.svg'
import { ReactComponent as Handshake } from './Handshake.svg'
import { ReactComponent as Health } from './Health.svg'
import { ReactComponent as Values } from './Values.svg'
import { ReactComponent as Magnet } from './Magnet.svg'
import { ReactComponent as More } from './More.svg'
import { ReactComponent as Pen } from './Pen.svg'
import { ReactComponent as Bagpack } from './Bagpack.svg'
import { ReactComponent as Briefcase } from './Briefcase.svg'
import { ReactComponent as Cookpot } from './Cookpot.svg'
import { ReactComponent as ScrollDown } from './ScrollDown.svg'
import { ReactComponent as Smiley } from './Smiley.svg'
import { ReactComponent as Logo } from './Logo.svg'
import { ReactComponent as Close } from './Close.svg'
import { ReactComponent as Rows } from './Rows.svg'
import { ReactComponent as Columns } from './Columns.svg'
import { ReactComponent as CaretRight } from './CaretRight.svg'
import { ReactComponent as Insta } from './Insta.svg'
import { ReactComponent as Error404 } from './Error404.svg'
import { ReactComponent as Pencil } from './Pencil.svg'
import { ReactComponent as Kakao } from './Kakao.svg'
import { ReactComponent as Apple } from './Apple.svg'
import { ReactComponent as Home } from './Home.svg'
import { ReactComponent as MyAnswer } from './MyAnswer.svg'
import { ReactComponent as AllAnswer } from './AllAnswer.svg'
import { ReactComponent as Info } from './Info.svg'
import { ReactComponent as TooltipRight } from './TooltipRight.svg'
import { ReactComponent as TooltipLeft } from './TooltipLeft.svg'
import { ReactComponent as TooltipBottom } from './TooltipBottom.svg'
import { ReactComponent as TooltipTop } from './TooltipTop.svg'
import { ReactComponent as SignUpSuccessDuei } from './SignUpSuccessDuei.svg'
import { ReactComponent as SadDuei } from './SadDuei.svg'
import { ReactComponent as EmptyDuei } from './EmptyDuei.svg'
import { ReactComponent as ResearchDuei } from './ResearchDuei.svg'
import { ReactComponent as OverhaulDuei } from './OverhaulDuei.svg'

interface IIconIndex extends IStringKey {
  NotFound: string | FunctionComponent<any> | ComponentClass<any, any>
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
  Medium: string | FunctionComponent<any> | ComponentClass<any, any>
  Female: string | FunctionComponent<any> | ComponentClass<any, any>
  BellRinging: string | FunctionComponent<any> | ComponentClass<any, any>
  CaretUp: string | FunctionComponent<any> | ComponentClass<any, any>
  CaretDown: string | FunctionComponent<any> | ComponentClass<any, any>
  GraduationCap: string | FunctionComponent<any> | ComponentClass<any, any>
  Handshake: string | FunctionComponent<any> | ComponentClass<any, any>
  Health: string | FunctionComponent<any> | ComponentClass<any, any>
  Values: string | FunctionComponent<any> | ComponentClass<any, any>
  Magnet: string | FunctionComponent<any> | ComponentClass<any, any>
  More: string | FunctionComponent<any> | ComponentClass<any, any>
  Pen: string | FunctionComponent<any> | ComponentClass<any, any>
  Bagpack: string | FunctionComponent<any> | ComponentClass<any, any>
  Briefcase: string | FunctionComponent<any> | ComponentClass<any, any>
  Cookpot: string | FunctionComponent<any> | ComponentClass<any, any>
  ScrollDown: string | FunctionComponent<any> | ComponentClass<any, any>
  Smiley: string | FunctionComponent<any> | ComponentClass<any, any>
  LandingEmotionBg: string | FunctionComponent<any> | ComponentClass<any, any>
  LandingEmotionLine: string | FunctionComponent<any> | ComponentClass<any, any>
  LandingEmotionModal: string | FunctionComponent<any> | ComponentClass<any, any>
  LandingEmotionModalMobile: string | FunctionComponent<any> | ComponentClass<any, any>
  LandingCatchPhraseCircle: string | FunctionComponent<any> | ComponentClass<any, any>
  LandingQuestionList: string | FunctionComponent<any> | ComponentClass<any, any>
  LandingQuestion1: string | FunctionComponent<any> | ComponentClass<any, any>
  LandingQuestion2: string | FunctionComponent<any> | ComponentClass<any, any>
  LandingQuestion3: string | FunctionComponent<any> | ComponentClass<any, any>
  LandingQuestion4: string | FunctionComponent<any> | ComponentClass<any, any>
  LandingQuestion5: string | FunctionComponent<any> | ComponentClass<any, any>
  LandingAnswerList: string | FunctionComponent<any> | ComponentClass<any, any>
  LandingAnswer1: string | FunctionComponent<any> | ComponentClass<any, any>
  LandingAnswer2: string | FunctionComponent<any> | ComponentClass<any, any>
  LandingAnswer3: string | FunctionComponent<any> | ComponentClass<any, any>
  LandingAnswer4: string | FunctionComponent<any> | ComponentClass<any, any>
  LandingCircle: string | FunctionComponent<any> | ComponentClass<any, any>
  Logo: string | FunctionComponent<any> | ComponentClass<any, any>
  LogoSmallBubble1: string | FunctionComponent<any> | ComponentClass<any, any>
  LogoSmallBubble2: string | FunctionComponent<any> | ComponentClass<any, any>
  LogoSmallBubble3: string | FunctionComponent<any> | ComponentClass<any, any>
  LogoSmallBubble4: string | FunctionComponent<any> | ComponentClass<any, any>
  Close: string | FunctionComponent<any> | ComponentClass<any, any>
  Rows: string | FunctionComponent<any> | ComponentClass<any, any>
  Columns: string | FunctionComponent<any> | ComponentClass<any, any>
  CaretRight: string | FunctionComponent<any> | ComponentClass<any, any>
  Insta: string | FunctionComponent<any> | ComponentClass<any, any>
  Error404: string | FunctionComponent<any> | ComponentClass<any, any>
  Pencil: string | FunctionComponent<any> | ComponentClass<any, any>
  Kakao: string | FunctionComponent<any> | ComponentClass<any, any>
  Apple: string | FunctionComponent<any> | ComponentClass<any, any>
  Home: string | FunctionComponent<any> | ComponentClass<any, any>
  MyAnswer: string | FunctionComponent<any> | ComponentClass<any, any>
  AllAnswer: string | FunctionComponent<any> | ComponentClass<any, any>
  Info: string | FunctionComponent<any> | ComponentClass<any, any>
  TooltipRight: string | FunctionComponent<any> | ComponentClass<any, any>
  TooltipLeft: string | FunctionComponent<any> | ComponentClass<any, any>
  TooltipBottom: string | FunctionComponent<any> | ComponentClass<any, any>
  TooltipTop: string | FunctionComponent<any> | ComponentClass<any, any>
  SignUpSuccessDuei: string | FunctionComponent<any> | ComponentClass<any, any>
  SadDuei: string | FunctionComponent<any> | ComponentClass<any, any>
  EmptyDuei: string | FunctionComponent<any> | ComponentClass<any, any>
  ResearchDuei: string | FunctionComponent<any> | ComponentClass<any, any>
  OverhaulDuei: string | FunctionComponent<any> | ComponentClass<any, any>
}

const Icon: IIconIndex = {
  NotFound,
  Menu,
  LandingEmotionBg,
  LandingEmotionLine,
  LandingEmotionModal,
  LandingEmotionModalMobile,
  LandingCatchPhraseCircle,
  LandingQuestionList,
  LandingQuestion1,
  LandingQuestion2,
  LandingQuestion3,
  LandingQuestion4,
  LandingQuestion5,
  LandingAnswerList,
  LandingAnswer1,
  LandingAnswer2,
  LandingAnswer3,
  LandingAnswer4,
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
  Medium,
  More,
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
  Rows,
  Columns,
  CaretRight,
  Insta,
  Error404,
  Pencil,
  Kakao,
  Apple,
  Home,
  MyAnswer,
  AllAnswer,
  Info,
  TooltipRight,
  TooltipLeft,
  TooltipBottom,
  TooltipTop,
  SignUpSuccessDuei,
  SadDuei,
  EmptyDuei,
  ResearchDuei,
  OverhaulDuei
}

export default Icon
