import styled from 'styled-components'

export const NewsLetterComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }

  padding: 36px 25px;
`

export const NewsLetterHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 425px;
`

export const NewsLetterForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 425px;
`

export const NewsLetterFunnel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
`

export const NewsLetterFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 425px;
`

export const PersonalAgreeContent = styled.div`
  background: ${(props) => props.theme.colors.side.side200};

  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding: 20px 10px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }

  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  white-space: pre-wrap;
`

export const ApplyButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 55px;
  padding: 18px 32px;

  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.primary.primary100};

  cursor: pointer;

  &:hover {
    box-shadow: ${(props) => props.theme.shadow.shadow1};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.primary.primary300};
  }
`
