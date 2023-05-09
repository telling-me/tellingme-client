import styled from 'styled-components'

export const SignUpHeader = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  margin-top: 20px;
  margin-bottom: 12px;
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
  padding: 0px 8px;

  @media all and (min-width: 1024px) {
    max-width: 1216px;
    margin: 0 auto;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    margin: 0px 44px;
  }

  @media all and (max-width: 767px) {
    margin: 0px 9px;
  }
`

export const WebMoveButtonWrapper = styled.div<{ _margin: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  ${({ _margin }) => `margin: ${_margin}`};
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
      type === 'purpose' ? `36px; 58px;` : type === 'job' ? `32px 16px;` : type === 'gender' && `0px 50px`};
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    gap: ${({ type }) =>
      type === 'purpose' ? `36px; 58px;` : type === 'job' ? `24px 15px;` : type === 'gender' && `0px 50px`};
  }

  @media all and (max-width: 767px) {
    gap: ${({ type }) =>
      type === 'purpose' ? `24px 49px;` : type === 'job' ? `12px 15px;` : type === 'gender' && `0px 50px`};
  }
`

export const BirthDateWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  max-width: 430px;

  @media all and (min-width: 768px) {
    gap: 23px;
  }

  @media all and (max-width: 767px) {
    gap: 18px;
  }
`

export const AlarmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
`

export const SpanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`
