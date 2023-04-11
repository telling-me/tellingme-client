import styled from 'styled-components'

export const DropdownComponent = styled.div<{ _width?: string; _margin?: string; _flexGrow?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;

  position: relative;

  max-width: 425px;

  ${({ _width }) => _width !== undefined && `width: ${_width}`}
  ${({ _margin }) => _margin !== undefined && `margin: ${_margin}`}
  ${({ _flexGrow }) => _flexGrow !== undefined && `flex-grow: ${_flexGrow}`}
`

export const DropdownButton = styled.button<{ _padding?: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  text-align: left;

  width: 100%;
  border-radius: 18px;

  ${(props) => `
    background-color: ${props.theme.colors.side.side200};
  `}

  ${({ _padding }) => _padding !== undefined && `padding: ${_padding}`}
`

export const DropdownList = styled.div<{ label?: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: absolute;
  top: ${({ label }) => (label === undefined ? '83px' : '100px')};

  width: 100%;
  max-height: 208px;
  border-radius: 18px;

  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }

  ${(props) => `
    background-color: ${props.theme.colors.side.side200};
  `}
`

export const DropdownItem = styled.button<{ _padding?: string }>`
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 17.5px 30px;

  width: 100%;
  border-radius: 18px;

  ${(props) => `
    background-color: ${props.theme.colors.side.side200};

    &:active {
      background-color: ${props.theme.colors.side.side300};
    }
  `}

  ${({ _padding }) => _padding !== undefined && `padding: ${_padding}`}
`
