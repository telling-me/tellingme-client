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

export const NewsLetterHr = styled.div`
  width: 100%;
  max-width: 425px;
  height: 0px;

  margin: 36px 0px;
  border: 1px solid #e6e4e2;
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
