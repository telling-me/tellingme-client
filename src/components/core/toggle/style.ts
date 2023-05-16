import styled from 'styled-components'

export const ToggleComponent = styled.div<{ _margin?: string }>`
  ${({ theme }) => theme.common.flexStart}
  gap: 10px;
  cursor: pointer;

  ${({ _margin }) => _margin != null && `margin: ${_margin};`}
`
export const ToggleWrapper = styled.div<{ checked: boolean }>`
  width: 40px;
  height: 24px;
  border-radius: 70px;
  padding: 2px;

  transition: 0.3s;

  ${({ checked, theme }) =>
    checked ? `background-color: ${theme.colors.logo}` : `background-color: ${theme.colors.side.side400}`};

  ${({ checked, theme }) => (checked ? `${theme.common.flexEnd}` : ` ${theme.common.flexStart}`)};
`

export const ToggleCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #ffffff;
`
