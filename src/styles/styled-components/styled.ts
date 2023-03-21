import { motion } from 'framer-motion'
import styled from 'styled-components'

export interface IGrid {
  flex?: 'start' | 'end' | 'between' | 'center'
  flexOption?: string
  direction?: 'column' | 'row'
  alignItems?: 'start' | 'end' | 'center' | 'stretch'
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
  typo?:
    | 'display_b'
    | 'display'
    | 'h1_b'
    | 'h1'
    | 'h2_b'
    | 'h2'
    | 'h3_b'
    | 'h3'
    | 'h4_b'
    | 'h4'
    | 'b1_b'
    | 'b1'
    | 'b2_b'
    | 'b2'
    | 'c_b'
    | 'c'
  _margin?: string
  _width?: string
}

const Grid = styled(motion.div)<IGrid>`
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
  ${({ alignItems }) =>
    alignItems === 'start'
      ? 'align-items: flex-start'
      : alignItems === 'end'
      ? 'align-items: flex-end'
      : alignItems === 'stretch'
      ? 'align-items: stretch'
      : alignItems === 'center' && 'align-items: center'};
  ${({ direction }) => direction === 'column' && 'flex-direction: column'};
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
const TextH1 = styled.h1<IText>`
  white-space: nowrap;
  ${({ _width }) => _width != null && `width: ${_width}`};
  ${({ _margin }) => _margin != null && `margin: ${_margin}`};

  ${({ theme, typo }) =>
    typo === 'display_b' ||
    typo === 'display' ||
    typo === 'h1_b' ||
    typo === 'h1' ||
    typo === 'h2_b' ||
    typo === 'h2'
      ? theme.typo.title[typo]
      : typo === 'b1_b' || typo === 'b1' || typo === 'b2_b' || typo === 'b2'
      ? theme.typo.body[typo]
      : (typo === 'c_b' || typo === 'c') && theme.typo.caption[typo]};
`

const TextH2 = styled.h2<IText>`
  white-space: nowrap;
  ${({ _width }) => _width != null && `width: ${_width}`};
  ${({ _margin }) => _margin != null && `margin: ${_margin}`};

  ${({ theme, typo }) =>
    typo === 'display_b' ||
    typo === 'display' ||
    typo === 'h1_b' ||
    typo === 'h1' ||
    typo === 'h2_b' ||
    typo === 'h2'
      ? theme.typo.title[typo]
      : typo === 'b1_b' || typo === 'b1' || typo === 'b2_b' || typo === 'b2'
      ? theme.typo.body[typo]
      : (typo === 'c_b' || typo === 'c') && theme.typo.caption[typo]};
`

const TextH3 = styled.h3<IText>`
  white-space: nowrap;
  ${({ _width }) => _width != null && `width: ${_width}`};
  ${({ _margin }) => _margin != null && `margin: ${_margin}`};

  ${({ theme, typo }) =>
    typo === 'display_b' ||
    typo === 'display' ||
    typo === 'h1_b' ||
    typo === 'h1' ||
    typo === 'h2_b' ||
    typo === 'h2'
      ? theme.typo.title[typo]
      : typo === 'b1_b' || typo === 'b1' || typo === 'b2_b' || typo === 'b2'
      ? theme.typo.body[typo]
      : (typo === 'c_b' || typo === 'c') && theme.typo.caption[typo]};
`

const TextH4 = styled.h4<IText>`
  white-space: nowrap;
  ${({ _width }) => _width != null && `width: ${_width}`};
  ${({ _margin }) => _margin != null && `margin: ${_margin}`};

  ${({ theme, typo }) =>
    typo === 'display_b' ||
    typo === 'display' ||
    typo === 'h1_b' ||
    typo === 'h1' ||
    typo === 'h2_b' ||
    typo === 'h2'
      ? theme.typo.title[typo]
      : typo === 'b1_b' || typo === 'b1' || typo === 'b2_b' || typo === 'b2'
      ? theme.typo.body[typo]
      : (typo === 'c_b' || typo === 'c') && theme.typo.caption[typo]};
`

const TextH5 = styled.h5<IText>`
  white-space: nowrap;
  ${({ _width }) => _width != null && `width: ${_width}`};
  ${({ _margin }) => _margin != null && `margin: ${_margin}`};

  ${({ theme, typo }) =>
    typo === 'display_b' ||
    typo === 'display' ||
    typo === 'h1_b' ||
    typo === 'h1' ||
    typo === 'h2_b' ||
    typo === 'h2'
      ? theme.typo.title[typo]
      : typo === 'b1_b' || typo === 'b1' || typo === 'b2_b' || typo === 'b2'
      ? theme.typo.body[typo]
      : (typo === 'c_b' || typo === 'c') && theme.typo.caption[typo]};
`

const TextP = styled.p<IText>`
  white-space: nowrap;
  ${({ _width }) => _width != null && `width: ${_width}`};
  ${({ _margin }) => _margin != null && `margin: ${_margin}`};

  ${({ theme, typo }) =>
    typo === 'display_b' ||
    typo === 'display' ||
    typo === 'h1_b' ||
    typo === 'h1' ||
    typo === 'h2_b' ||
    typo === 'h2'
      ? theme.typo.title[typo]
      : typo === 'b1_b' || typo === 'b1' || typo === 'b2_b' || typo === 'b2'
      ? theme.typo.body[typo]
      : (typo === 'c_b' || typo === 'c') && theme.typo.caption[typo]};
`

const TextSpan = styled.span<IText>`
  white-space: nowrap;
  ${({ _width }) => _width != null && `width: ${_width}`};
  ${({ _margin }) => _margin != null && `margin: ${_margin}`};

  ${({ theme, typo }) =>
    typo === 'display_b' ||
    typo === 'display' ||
    typo === 'h1_b' ||
    typo === 'h1' ||
    typo === 'h2_b' ||
    typo === 'h2'
      ? theme.typo.title[typo]
      : typo === 'b1_b' || typo === 'b1' || typo === 'b2_b' || typo === 'b2'
      ? theme.typo.body[typo]
      : (typo === 'c_b' || typo === 'c') && theme.typo.caption[typo]};
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
