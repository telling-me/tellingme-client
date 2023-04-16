import styled from 'styled-components'

export const SignUpHeader = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  margin-top: 20px;
  margin-bottom: 12px;
`

export const SkipButton = styled.button`
  margin: 0px 0px 0px auto;

  &:hover span {
    color: ${(props) => props.theme.colors.primary.primary200};
  }
`

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }

  ${(props) => `background-color: ${props.theme.colors.side.side200}`}

  height: max-content;

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

  width: 100%;
  max-width: 430px;

  @media all and (min-width: 1024px) {
    margin-top: 110px;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    margin: auto 0px 70px 0px;
  }

  @media all and (max-width: 767px) {
    margin: auto 0px 70px 0px;
  }
`

export const ContentWrapper = styled.div<{ type: string }>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  width: 100%;
  max-width: 430px;

  margin-bottom: 40px;

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
