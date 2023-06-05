// components
import styled from 'styled-components'

export const ContentWrapper = styled.div<{ type: string }>`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

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

  svg {
    filter: drop-shadow(${({ theme }) => theme.shadow.shadow2});
    margin: 110px 0px 90px 0px;
  }
`

export const SpanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`
