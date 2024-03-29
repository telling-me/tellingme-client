import React, { useState } from 'react'

// components
import { Button, Modal, RowButton } from 'components'

// styles
import style from 'styles/styled-components/styled'
import styled from 'styled-components'
import Icon from 'assets/icons'
import { getCookie } from 'utils/cookies'
import useWindowSize from 'hooks/useWindowSize'
import useCheckAgent from 'hooks/useCheckAgent'

interface IOnlyMobileModal {
  handleClose: () => void
}

const OnlyMobileModal = ({ handleClose }: IOnlyMobileModal) => {
  const [webModalOpen, setWebModalOpen] = useState<boolean>(false)

  const contents = [
    {
      icon: Icon.MyLibraryColor,
      text: '나의 서재'
    },
    {
      icon: Icon.Premium,
      text: '프리미엄 모드'
    }
  ]

  const windowWidth = useWindowSize().width
  const userAgent = useCheckAgent()

  const openWebModal = () => {
    setWebModalOpen(true)
  }

  const closeWebModal = () => {
    setWebModalOpen(false)
  }

  //  React Native로 접속한 경우 준비중 모달
  if (getCookie('device') === 'android')
    return (
      <Modal _width="100%" _maxWidth="425px" _padding="30px 20px 20px" _borderRadius="20px">
        <Grid flex="center" direction="column" _padding="30px 0px">
          <Icon.OverhaulDuei width={windowWidth < 768 ? '120' : '190'} height={windowWidth < 768 ? '120' : '190'} />
          <TextP typo="b1_b" textColor="gray5">
            아직 준비중이에요!
          </TextP>
        </Grid>
        <Button
          buttonType="secondary"
          text="닫기"
          textSize="h6"
          textColor="logo"
          _width="100%"
          _padding="18px 0"
          _onClick={() => {
            handleClose()
          }}
        />
      </Modal>
    )

  return (
    <Modal _width="100%" _maxWidth="425px" _padding="30px 20px 20px" _borderRadius="20px">
      <TextP typo="b1_b" textColor="black">
        모바일 앱에서만 이용 가능한 서비스예요!
      </TextP>

      <ContentWrapper>
        <TextP typo="b2" textColor="black">
          텔링미 앱을 다운받으면
        </TextP>

        <TextWrapper>
          <TextP typo="b2" textColor="black">
            이용할 수 있는
          </TextP>
          <TextP typo="b2" textColor="logo">
            특별한 기능들
          </TextP>
        </TextWrapper>

        <ServicesWrapper>
          {contents.map((v, i) => {
            return (
              <ServiceWrapper key={i}>
                <IconWrapper>
                  <v.icon width="22" height="22" />
                </IconWrapper>

                <TextP typo="b2" textColor="black">
                  {v.text}
                </TextP>
              </ServiceWrapper>
            )
          })}
        </ServicesWrapper>
      </ContentWrapper>

      <Button
        buttonType="secondary"
        text="모바일 앱 설치할래요"
        textSize="h6"
        textColor="logo"
        _width="100%"
        _padding="18px 0"
        _onClick={() => {
          if (userAgent === 'Android') {
            window.open('https://play.google.com/store/apps/details?id=com.tellingme_rn&hl=ko-KR')
          } else if (userAgent === 'iOS') {
            window.open('https://apps.apple.com/kr/app/텔링미-나를-깨닫는-시간/id6448701604')
          } else if (userAgent === 'Web') {
            openWebModal()
          }
        }}
      />
      <Button
        buttonType="noFilled"
        text="웹으로 계속 볼게요"
        textSize="b1"
        textColor="gray6"
        _width="100%"
        _margin="23.5px 0 7.5px"
        _onClick={() => {
          handleClose()
        }}
      />

      {webModalOpen && (
        <Modal _width="100%" _maxWidth="425px" _padding="30px 20px 20px" _borderRadius="20px">
          <RowButton
            text="바로 가기"
            _active={false}
            _justifyContent="center"
            _gap="8px"
            _width="100%"
            _height="58px"
            _onClick={() => {
              window.open('https://apps.apple.com/kr/app/텔링미-나를-깨닫는-시간/id6448701604')
            }}
          >
            <Icon.AppStore />
          </RowButton>

          <RowButton
            text="바로 가기"
            _active={false}
            _justifyContent="center"
            _gap="8px"
            _width="100%"
            _height="58px"
            _margin="10px 0 20px"
            _onClick={() => {
              window.open('https://play.google.com/store/apps/details?id=com.tellingme_rn&hl=ko-KR')
            }}
          >
            <Icon.PlayStore />
          </RowButton>

          <Button
            buttonType="secondary"
            text="닫기"
            textSize="h6"
            textColor="logo"
            _width="100%"
            _height="55px"
            _onClick={() => {
              closeWebModal()
            }}
          />
        </Modal>
      )}
    </Modal>
  )
}

const { TextP, Grid } = style

const ContentWrapper = styled.div`
  width: 100%;
  margin: 20px 0 16px;
  padding: 28px;

  border-radius: 20px;

  background-color: ${({ theme }) => theme.colors.side.side200};
`

const TextWrapper = styled.div`
  display: flex;
  gap: 4px;

  margin: 8px 0 20px;
`

const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const ServiceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 21px;

  width: 100%;
  padding: 8px 10px;

  border-radius: 20px;

  background-color: ${({ theme }) => theme.colors.side.side100};
`

const IconWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}

  width: 42px;
  height: 42px;

  border-radius: 100%;

  background-color: ${({ theme }) => theme.colors.side.side200};
`

export default OnlyMobileModal
