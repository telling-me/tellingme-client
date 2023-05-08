import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ModalBackground = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 36px 25px;

  background: rgba(24, 24, 24, 0.28);
  backdrop-filter: blur(6px);
  z-index: 9000;
`

export const ModalComponent = styled.div<{
  _width?: string
  _maxWidth?: string
  _height?: string
  _borderRadius?: string
  _padding?: string
}>`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => props.theme.colors.side.side100};

  ${({ _width }) => _width != null && `width: ${_width}`};
  ${({ _maxWidth }) => _maxWidth != null && `max-width: ${_maxWidth}`};
  ${({ _height }) => _height != null && `height: ${_height}`};
  ${({ _borderRadius }) => _borderRadius != null && `border-radius: ${_borderRadius}`};
  ${({ _padding }) => _padding != null && `padding: ${_padding}`}
`
