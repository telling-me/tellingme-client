import styled from 'styled-components'

export const ProgressBarComponent = styled.div`
  position: relative;
  z-index: 0;

  width: 100%;
  height: 5px;
  border-radius: 10px;

  background-color: ${(props) => props.theme.colors.gray.gray1};
`

export const Progress = styled.div<{ percent: string }>`
  position: absolute;
  z-index: 1;

  width: ${({ percent }) => `${percent}`}%;
  height: 5px;

  background: ${(props) => props.theme.gradient.default_gradient(51.82)};
`
