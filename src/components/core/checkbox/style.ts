import styled, { css } from 'styled-components'

export const CheckBoxComponent = styled.div<{ _disabled?: boolean; _margin?: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  gap: 10px;

  width: 100%;
  max-width: 425px;
  border-radius: 18px;

  ${(props) =>
    !(props._disabled ?? false)
      ? css`
          background-color: ${props.theme.colors.primary.primary25};

          &:hover {
            box-shadow: ${props.theme.shadow.shadow1};
          }
        `
      : css`
          background-color: ${props.theme.colors.gray.gray2};
        `};

  ${({ _margin }) => _margin !== undefined && `margin: ${_margin}`}
`

export const CheckBoxFrame = styled.div<{ mainLabelGap: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({ mainLabelGap }) => `gap: ${mainLabelGap};`}

  width: 100%;
`

export const CheckBoxMain = styled.input<{ disabled?: boolean; mainSize: string }>`
  appearance: none;
  background-color: #fffdfa;
  border: 1px solid #57a775;
  ${({ mainSize }) =>
    mainSize === 'small'
      ? `
    width: 24px;
    height: 24px;
    border-radius: 8px;
  `
      : `
    width: 32px;
    height:32px;
    border-radius: 10px;
  `}

  &:disabled {
    background-color: #eef1f1;
    border: 1px solid #b3b9b5;
  }

  &:checked {
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }

  ${(props) =>
    !(props.disabled ?? false)
      ? css`
          &:checked {
            background-image: url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 6.75049L9.75 17.25L4.5 12.0005" stroke="rgb(87, 167, 117)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
          }
        `
      : css`
          &:checked {
            background-image: url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 6.75049L9.75 17.25L4.5 12.0005" stroke="rgb(179, 185, 181)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
          }
        `}
`

export const CheckBoxButton = styled.button``
