import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

// components
import { CardViewCard, IconButton } from 'components'

// types
import type { IData, IMyAnswer } from './type'

// hooks
import useWindowSize from 'hooks/useWindowSize'

// assets
import Icons from 'assets/icons'

const CardView = ({ data }: IMyAnswer) => {
  const [pd, setPd] = useState<number>(() => {
    if (window.innerWidth >= 1200) {
      return (window.innerWidth - 1200) / 2 + (600 - 170)
    } else if (window.innerWidth >= 768) {
      return (window.innerWidth - 422) / 2
    } else {
      return (window.innerWidth - 352) / 2 + 20
    }
  })
  const [isMove, setIsMove] = useState<boolean>(false)
  const [touchStart, setTouchStart] = useState<number>(0)
  const [dragStart, setDragStart] = useState<number>(0)

  const scrollRef = useRef<HTMLDivElement>(null)
  const windowWidth = useWindowSize().width

  const moveCard = (isLeft: boolean | null, e?: React.WheelEvent<HTMLDivElement>) => {
    if (!isMove && scrollRef.current != null) {
      setIsMove(true)

      if ((e != null && e.deltaY > 0) || (isLeft != null && !isLeft)) {
        scrollRef.current.scrollTo({ left: scrollRef.current.scrollLeft + 322, behavior: 'smooth' })
      } else if ((e != null && e.deltaY < 0) || (isLeft != null && isLeft)) {
        scrollRef.current.scrollTo({ left: scrollRef.current.scrollLeft - 322, behavior: 'smooth' })
      }

      setTimeout(() => {
        setIsMove(false)
      }, 500)
    }
  }

  const preventEvent = (e: { preventDefault: () => void }) => {
    e.preventDefault()
  }

  scrollRef.current?.addEventListener('touchmove', preventEvent, { passive: false })

  useEffect(() => {
    if (windowWidth >= 1200) {
      setPd((windowWidth - 1200) / 2 + (600 - 170))
    } else if (windowWidth >= 768) {
      setPd((windowWidth - 422) / 2)
    } else {
      setPd((windowWidth - 352) / 2 + 20)
    }
  }, [windowWidth])

  return (
    <CardViewWrapper>
      <CardViewScrollWrapper
        ref={scrollRef}
        _padding={pd}
        onWheel={(e: React.WheelEvent<HTMLDivElement>) => {
          moveCard(null, e)
        }}
        draggable={windowWidth < 1200}
        onDragStart={(e) => {
          setDragStart(e.clientX)
          console.log(e)
        }}
        onDragEnd={(e) => {
          moveCard(dragStart < e.clientX)
        }}
        onTouchStart={(e) => {
          setTouchStart(e.changedTouches[0].clientX)
        }}
        onTouchEnd={(e) => {
          const touchX = e.changedTouches[0].clientX
          const deltaX = touchX - touchStart

          if (Math.abs(deltaX) > 20) {
            moveCard(deltaX > 0)
          }
        }}
      >
        {data.map((data: IData, i: number) => {
          return <CardViewCard key={i} data={data} _onClick={() => {}} />
        })}
      </CardViewScrollWrapper>

      {windowWidth > 1200 && (
        <CardViewArrows>
          <IconButton
            buttonType="noFilled"
            _onClick={() => {
              moveCard(true)
            }}
            _width="36px"
            _height="36px"
          >
            <Icons.SliderLeft />
          </IconButton>
          <IconButton
            buttonType="noFilled"
            _onClick={() => {
              moveCard(false)
            }}
            _width="36px"
            _height="36px"
          >
            <Icons.SliderRight />
          </IconButton>
        </CardViewArrows>
      )}
    </CardViewWrapper>
  )
}

const CardViewWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;

  position: fixed;
  top: 126px;

  width: 100%;

  @media all and (min-width: 1200px) {
    padding: 0 20px;
    height: calc(calc(var(--vh, 1vh) * 100) - 126px);
  }

  @media all and (min-width: 767px) and (max-width: 1199px) {
    padding: 0 60px;
  }

  @media all and (min-width: 1023px) and (max-width: 1200px) {
    height: calc(calc(var(--vh, 1vh) * 100) - 126px);
  }

  @media all and (min-width: 767px) and (max-width: 1023px) {
    height: calc(calc(var(--vh, 1vh) * 100) - 239px);
  }

  @media all and (max-width: 767px) {
    padding: 0 5px;
    height: calc(calc(var(--vh, 1vh) * 100) - 203px);
  }
`

const CardViewScrollWrapper = styled.div<{ _padding?: number }>`
  ${({ theme }) => theme.common.flexStart}
  gap: 20px;

  width: 100%;

  overflow-x: scroll;
  white-space: nowrap;

  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
    width: 0;
  }

  ${({ _padding }) => _padding != null && `padding: 20px ${_padding}px 20px ${_padding}px;`}
`

const CardViewArrows = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  gap: 159px;
`

export default CardView
