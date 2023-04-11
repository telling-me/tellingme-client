import styled from 'styled-components'

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  overflow: auto;

  ${(props) => `background-color: ${props.theme.colors.side.side200}`}

  height: 100%;

  @media all and (min-width: 1024px) {
    max-width: 1200px;
    margin: 0 auto;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    margin: 0px 60px;
  }

  @media all and (max-width: 767px) {
    margin: 0px 25px;
  }
`

export const MoveButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 110px;

  width: 100%;
  max-width: 430px;
`

export const ContentWrapper = styled.div<{ type: string }>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  width: 100%;
  max-width: 430px;

  @media all and (min-width: 1024px) {
    gap: ${({ type }) =>
      type === 'purpose' ? `36px; 58px;` : type === 'job' ? `32px 16px;` : type === 'gender' ? `0px 50px` : `0px 23px`};
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    gap: ${({ type }) =>
      type === 'purpose' ? `36px; 58px;` : type === 'job' ? `24px 15px;` : type === 'gender' ? `0px 50px` : `0px 23px`};
  }

  @media all and (max-width: 767px) {
    gap: ${({ type }) =>
      type === 'purpose' ? `24px 49px;` : type === 'job' ? `12px 15px;` : type === 'gender' ? `0px 50px` : `0px 23px`};
  }
`
