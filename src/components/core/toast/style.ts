import styled from 'styled-components'

export const ToastComponent = styled.div<{ _backgroundColor: string }>`
  display: flex;
  align-items: center;
  gap: 16px;
  position: absolute;
  bottom: 116px;
  padding: 12px 24px;
  background-color: ${({ _backgroundColor }) => _backgroundColor};
  border-radius: 12px;
  z-index: 10000;

  animation: fadeout 4s;

  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @media screen and (min-width: 1200px) {
    left: calc((100% - 1200px) / 2);
    width: 1200px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    left: 60px;
    width: calc(100% - 120px);
  }

  @media screen and (max-width: 767px) {
    left: 25px;
    width: calc(100% - 50px);
  }
`
