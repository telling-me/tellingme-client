import styled from 'styled-components'

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
  _color?: string
}

const TextH1 = styled.h1<IText>`
  ${({ _width }) => _width != null && `width: ${_width}`};
  ${({ _margin }) => _margin != null && `margin: ${_margin}`};
  ${({ _color }) => _color != null && `color: ${_color}`};

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
  ${({ _width }) => _width != null && `width: ${_width}`};
  ${({ _margin }) => _margin != null && `margin: ${_margin}`};
  ${({ _color }) => _color != null && `color: ${_color}`};

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
  ${({ _width }) => _width != null && `width: ${_width}`};
  ${({ _margin }) => _margin != null && `margin: ${_margin}`};
  ${({ _color }) => _color != null && `color: ${_color}`};

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
  ${({ _width }) => _width != null && `width: ${_width}`};
  ${({ _margin }) => _margin != null && `margin: ${_margin}`};
  ${({ _color }) => _color != null && `color: ${_color}`};

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
  ${({ _width }) => _width != null && `width: ${_width}`};
  ${({ _margin }) => _margin != null && `margin: ${_margin}`};
  ${({ _color }) => _color != null && `color: ${_color}`};

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
  ${({ _width }) => _width != null && `width: ${_width}`};
  ${({ _margin }) => _margin != null && `margin: ${_margin}`};
  ${({ _color }) => _color != null && `color: ${_color}`};

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
  ${({ _width }) => _width != null && `width: ${_width}`};
  ${({ _margin }) => _margin != null && `margin: ${_margin}`};
  ${({ _color }) => _color != null && `color: ${_color}`};

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
  TextH1,
  TextH2,
  TextH3,
  TextH4,
  TextH5,
  TextP,
  TextSpan
}

export default settingStyle
