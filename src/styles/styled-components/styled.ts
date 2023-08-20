import { motion } from 'framer-motion'
import styled from 'styled-components'

// type
import { type ColorType, type TextSizeType } from 'type/common'

// hooks
import useChangeColor from 'hooks/useChangeColor'

export interface IGrid {
  flex?: 'start' | 'end' | 'between' | 'center'
  flexOption?: string
  direction?: 'column' | 'row' | 'column-reverse' | 'row-reverse'
  _alignItems?: 'start' | 'end' | 'center' | 'stretch'
  wrap?: 'wrap' | 'nowrap'
  _width?: string
  _margin?: string
  _padding?: string
  _height?: string
  align?: 'left' | 'center' | 'right'
  _gap?: string
  _overflow?: 'hidden' | 'visible' | 'auto' | 'overlay'
}

export interface IText {
  typo?: TextSizeType
  textColor?: ColorType
  textAlign?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent'
  _margin?: string
  _width?: string
  ellipsis?: boolean
  wordBreak?: 'break-all' | 'break-word' | 'keep-all' | 'normal'
}

const Grid = styled(motion.div)<IGrid>`
  // transition: 0.2s;
  ${({ _width }) => (_width != null ? `width: ${_width}` : 'width: 100%')};
  ${({ _height }) => _height != null && `height: ${_height}`};
  ${({ _margin }) => _margin != null && `margin: ${_margin}`};
  ${({ _padding }) => _padding != null && `padding: ${_padding}`};
  ${({ theme, flex }) =>
    flex === 'start'
      ? theme.common.flexStart
      : flex === 'end'
      ? theme.common.flexEnd
      : flex === 'between'
      ? theme.common.flexBetween
      : flex === 'center' && theme.common.flexCenter};
  ${({ _alignItems }) =>
    _alignItems === 'start'
      ? 'align-items: flex-start'
      : _alignItems === 'end'
      ? 'align-items: flex-end'
      : _alignItems === 'stretch'
      ? 'align-items: stretch'
      : _alignItems === 'center' && 'align-items: center'};
  ${({ direction }) => direction != null && `flex-direction: ${direction}`};
  ${({ wrap }) => wrap === 'wrap' && 'flex-wrap: wrap'};
  ${({ flexOption }) => flexOption != null && `flex: ${flexOption}`};
  ${({ align }) =>
    align === 'left'
      ? 'text-align: left'
      : align === 'right'
      ? 'text-align: right'
      : align === 'center' && 'text-align: center'};

  ${({ _gap }) => _gap != null && `gap: ${_gap}`};
  ${({ _overflow }) => _overflow != null && `overflow: ${_overflow}`};
`

// text
const TextH1 = styled.h1<IText>`
  white-space: normal;
  transition: 0.2s;

  ${({ _width }) => _width != null && `width: ${_width}`};
  ${({ _margin }) => _margin != null && `margin: ${_margin}`};
  ${({ textAlign }) => textAlign != null && `text-align: ${textAlign}`};
  ${({ wordBreak }) => wordBreak != null && `word-break: ${wordBreak}`};
  ${({ theme, typo }) =>
    typo === 'h1_b' ||
    typo === 'h1' ||
    typo === 'h2_b' ||
    typo === 'h2' ||
    typo === 'h3_b' ||
    typo === 'h3' ||
    typo === 'h4_b' ||
    typo === 'h4' ||
    typo === 'h5_b' ||
    typo === 'h5' ||
    typo === 'h6_b' ||
    typo === 'h6'
      ? theme.typo.title[typo]
      : typo === 'b1_b' || typo === 'b1' || typo === 'b2_b' || typo === 'b2'
      ? theme.typo.body[typo]
      : (typo === 'c_b' || typo === 'c') && theme.typo.caption[typo]};
  ${({ textColor }) => `color: ${useChangeColor(textColor as ColorType) as string}`};
  ${({ ellipsis }) => (ellipsis ?? false) && 'text-overflow: ellipsis; overflow: hidden; white-space: nowrap;'}
`

const TextH2 = styled.h2<IText>`
  white-space: normal;
  transition: 0.2s;

  ${({ _width }) => _width != null && `width: ${_width}`};
  ${({ _margin }) => _margin != null && `margin: ${_margin}`};
  ${({ textAlign }) => textAlign != null && `text-align: ${textAlign}`};
  ${({ wordBreak }) => wordBreak != null && `word-break: ${wordBreak}`};
  ${({ theme, typo }) =>
    typo === 'h1_b' ||
    typo === 'h1' ||
    typo === 'h2_b' ||
    typo === 'h2' ||
    typo === 'h3_b' ||
    typo === 'h3' ||
    typo === 'h4_b' ||
    typo === 'h4' ||
    typo === 'h5_b' ||
    typo === 'h5' ||
    typo === 'h6_b' ||
    typo === 'h6'
      ? theme.typo.title[typo]
      : typo === 'b1_b' || typo === 'b1' || typo === 'b2_b' || typo === 'b2'
      ? theme.typo.body[typo]
      : (typo === 'c_b' || typo === 'c') && theme.typo.caption[typo]};
  ${({ textColor }) => `color: ${useChangeColor(textColor as ColorType) as string}`};
  ${({ ellipsis }) => (ellipsis ?? false) && 'text-overflow: ellipsis; overflow: hidden; white-space: nowrap;'}
`

const TextH3 = styled.h3<IText>`
  white-space: normal;
  transition: 0.2s;

  ${({ _width }) => _width != null && `width: ${_width}`};
  ${({ _margin }) => _margin != null && `margin: ${_margin}`};
  ${({ textAlign }) => textAlign != null && `text-align: ${textAlign}`};
  ${({ wordBreak }) => wordBreak != null && `word-break: ${wordBreak}`};
  ${({ theme, typo }) =>
    typo === 'h1_b' ||
    typo === 'h1' ||
    typo === 'h2_b' ||
    typo === 'h2' ||
    typo === 'h3_b' ||
    typo === 'h3' ||
    typo === 'h4_b' ||
    typo === 'h4' ||
    typo === 'h5_b' ||
    typo === 'h5' ||
    typo === 'h6_b' ||
    typo === 'h6'
      ? theme.typo.title[typo]
      : typo === 'b1_b' || typo === 'b1' || typo === 'b2_b' || typo === 'b2'
      ? theme.typo.body[typo]
      : (typo === 'c_b' || typo === 'c') && theme.typo.caption[typo]};
  ${({ textColor }) => `color: ${useChangeColor(textColor as ColorType) as string}`};
  ${({ ellipsis }) => (ellipsis ?? false) && 'text-overflow: ellipsis; overflow: hidden; white-space: nowrap;'}
`

const TextH4 = styled.h4<IText>`
  white-space: normal;
  transition: 0.2s;

  ${({ _width }) => _width != null && `width: ${_width}`};
  ${({ _margin }) => _margin != null && `margin: ${_margin}`};
  ${({ textAlign }) => textAlign != null && `text-align: ${textAlign}`};
  ${({ wordBreak }) => wordBreak != null && `word-break: ${wordBreak}`};
  ${({ theme, typo }) =>
    typo === 'h1_b' ||
    typo === 'h1' ||
    typo === 'h2_b' ||
    typo === 'h2' ||
    typo === 'h3_b' ||
    typo === 'h3' ||
    typo === 'h4_b' ||
    typo === 'h4' ||
    typo === 'h5_b' ||
    typo === 'h5' ||
    typo === 'h6_b' ||
    typo === 'h6'
      ? theme.typo.title[typo]
      : typo === 'b1_b' || typo === 'b1' || typo === 'b2_b' || typo === 'b2'
      ? theme.typo.body[typo]
      : (typo === 'c_b' || typo === 'c') && theme.typo.caption[typo]};
  ${({ textColor }) => `color: ${useChangeColor(textColor as ColorType) as string}`};
  ${({ ellipsis }) => (ellipsis ?? false) && 'text-overflow: ellipsis; overflow: hidden; white-space: nowrap;'}
`

const TextH5 = styled.h5<IText>`
  white-space: normal;
  transition: 0.2s;

  ${({ _width }) => _width != null && `width: ${_width}`};
  ${({ _margin }) => _margin != null && `margin: ${_margin}`};
  ${({ textAlign }) => textAlign != null && `text-align: ${textAlign}`};
  ${({ wordBreak }) => wordBreak != null && `word-break: ${wordBreak}`};
  ${({ theme, typo }) =>
    typo === 'h1_b' ||
    typo === 'h1' ||
    typo === 'h2_b' ||
    typo === 'h2' ||
    typo === 'h3_b' ||
    typo === 'h3' ||
    typo === 'h4_b' ||
    typo === 'h4' ||
    typo === 'h5_b' ||
    typo === 'h5' ||
    typo === 'h6_b' ||
    typo === 'h6'
      ? theme.typo.title[typo]
      : typo === 'b1_b' || typo === 'b1' || typo === 'b2_b' || typo === 'b2'
      ? theme.typo.body[typo]
      : (typo === 'c_b' || typo === 'c') && theme.typo.caption[typo]};
  ${({ textColor }) => `color: ${useChangeColor(textColor as ColorType) as string}`};
  ${({ ellipsis }) => (ellipsis ?? false) && 'text-overflow: ellipsis; overflow: hidden; white-space: nowrap;'}
`

const TextP = styled.p<IText>`
  white-space: normal;
  transition: 0.2s;

  ${({ _width }) => _width != null && `width: ${_width}`};
  ${({ _margin }) => _margin != null && `margin: ${_margin}`};
  ${({ textAlign }) => textAlign != null && `text-align: ${textAlign}`};
  ${({ wordBreak }) => wordBreak != null && `word-break: ${wordBreak}`};
  ${({ theme, typo }) =>
    typo === 'h1_b' ||
    typo === 'h1' ||
    typo === 'h2_b' ||
    typo === 'h2' ||
    typo === 'h3_b' ||
    typo === 'h3' ||
    typo === 'h4_b' ||
    typo === 'h4' ||
    typo === 'h5_b' ||
    typo === 'h5' ||
    typo === 'h6_b' ||
    typo === 'h6'
      ? theme.typo.title[typo]
      : typo === 'b1_b' || typo === 'b1' || typo === 'b2_b' || typo === 'b2'
      ? theme.typo.body[typo]
      : (typo === 'c_b' || typo === 'c') && theme.typo.caption[typo]};
  ${({ textColor }) => `color: ${useChangeColor(textColor as ColorType) as string}`};
  ${({ ellipsis }) => (ellipsis ?? false) && 'text-overflow: ellipsis; overflow: hidden; white-space: nowrap;'}
`

const TextSpan = styled.span<IText>`
  white-space: normal;
  transition: 0.2s;

  ${({ _width }) => _width != null && `width: ${_width}`}
  ${({ _margin }) => _margin != null && `margin: ${_margin}`};
  ${({ textAlign }) => textAlign != null && `text-align: ${textAlign}`};
  ${({ wordBreak }) => wordBreak != null && `word-break: ${wordBreak}`};
  ${({ theme, typo }) =>
    typo === 'h1_b' ||
    typo === 'h1' ||
    typo === 'h2_b' ||
    typo === 'h2' ||
    typo === 'h3_b' ||
    typo === 'h3' ||
    typo === 'h4_b' ||
    typo === 'h4' ||
    typo === 'h5_b' ||
    typo === 'h5' ||
    typo === 'h6_b' ||
    typo === 'h6'
      ? theme.typo.title[typo]
      : typo === 'b1_b' || typo === 'b1' || typo === 'b2_b' || typo === 'b2'
      ? theme.typo.body[typo]
      : (typo === 'c_b' || typo === 'c') && theme.typo.caption[typo]};
  ${({ textColor }) => `color: ${useChangeColor(textColor as ColorType) as string}`};
  ${({ ellipsis }) => (ellipsis ?? false) && 'text-overflow: ellipsis; overflow: hidden; white-space: nowrap;'}
`

const settingStyle = {
  Grid,
  TextH1,
  TextH2,
  TextH3,
  TextH4,
  TextH5,
  TextP,
  TextSpan
}

export default settingStyle
