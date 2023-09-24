import React from 'react'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'

// components
import Icon from 'assets/icons'
import { Button } from 'components/core'

// ani
import { modalAni } from 'styles/ani'

// store
import useLibraryStore from 'stores/useLibraryStore'

// hooks
import useChangeColor from 'hooks/useChangeColor'

interface IEmotionHelpData {
  emotion: string
  icon: JSX.Element
  color: string
}

const helpData: IEmotionHelpData[] = [
  {
    emotion: '행복해요',
    icon: <Icon.EmotionHappy width="36px" height="36px" />,
    color: 'emotion100'
  },
  {
    emotion: '뿌듯해요',
    icon: <Icon.EmotionProud width="36px" height="36px" />,
    color: 'emotion200'
  },
  {
    emotion: '그저 그래요',
    icon: <Icon.EmotionMeh width="36px" height="36px" />,
    color: 'emotion300'
  },
  {
    emotion: '피곤해요',
    icon: <Icon.EmotionTired width="36px" height="36px" />,
    color: 'emotion400'
  },
  {
    emotion: '슬퍼요',
    icon: <Icon.EmotionSad width="36px" height="36px" />,
    color: 'emotion500'
  },
  {
    emotion: '화나요',
    icon: <Icon.EmotionAngry width="36px" height="36px" />,
    color: 'emotion600'
  }
]

const MyLibraryHelpModal = () => {
  const { setHelpModalOn } = useLibraryStore()
  return (
    <ModalWrapper flex="center" variants={modalAni} initial="init" animate="ani" exit="exit">
      <ModalInnerWrapper flex="between" direction="column" _gap="32px">
        <Grid flex="start" direction="column" _gap="8px">
          <TextP typo="b1">책의 색은 감정의 색을 나타내요</TextP>
          <TextP typo="b2" textColor="gray5">
            한 달 동안 감정의 흐름을 알 수 있어요
          </TextP>
        </Grid>
        <BookHelpWrapper>
          {helpData.map((data: IEmotionHelpData, idx: number) => {
            return (
              <BookHelper key={idx} flex="start" _gap="8px">
                <Grid flex="between" _width="95px">
                  <Grid flex="start" direction="column">
                    {data.icon}
                    <EmotionTextWrapper flex="center" _padding="4px">
                      <TextP typo="b2" textColor="gray6">
                        {data.emotion}
                      </TextP>
                    </EmotionTextWrapper>
                  </Grid>
                  <TextP typo="h4" textColor="gray5">
                    =
                  </TextP>
                </Grid>
                <Grid flex="start" direction="column" _width="max-content">
                  <Book _width="18px" _height="44px" _backgroundcolor={useChangeColor(`${data.color}`)} />
                  <BookStand _width="48px" _height="8px" />
                </Grid>
              </BookHelper>
            )
          })}
        </BookHelpWrapper>
        <Button
          buttonType="secondary"
          _width="100%"
          _height="55px"
          textSize="h6"
          text="확인"
          textColor={'logo'}
          _onClick={() => {
            setHelpModalOn(false)
          }}
        />
      </ModalInnerWrapper>
    </ModalWrapper>
  )
}

const { Grid, TextP } = style

const ModalWrapper = styled(Grid)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  z-index: 9500;
  background-color: rgba(24, 24, 24, 0.28);
  backdrop-filter: blur(6px);

  @media all and (max-width: 767px) {
    align-items: end;
  }
`

const ModalInnerWrapper = styled(Grid)`
  width: 425px;
  background-color: ${({ theme }) => theme.colors.side.side100};
  border-radius: 20px;
  padding: 42px 20px;
  transition: 0.2s;

  @media all and (max-width: 767px) {
    width: 100%;
    padding: 42px 20px 32px 20px;
    border-radius: 20px 20px 0 0;
  }
`

const BookHelpWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  row-gap: 32px;
`
const BookHelper = styled(Grid)`
  min-width: 160px;
`

const EmotionTextWrapper = styled(Grid)`
  background-color: ${({ theme }) => theme.colors.side.side200};
  border-radius: 4px;
`

const Book = styled(Grid)<{ _backgroundcolor: string }>`
  background-color: ${({ _backgroundcolor }) => _backgroundcolor};
  border-radius: 4px;
`

const BookStand = styled(Grid)`
  background-color: ${({ theme }) => theme.colors.sub.sub100};
  border-radius: 8px;
`

export default MyLibraryHelpModal
