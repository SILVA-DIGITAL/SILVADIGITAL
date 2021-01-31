import { SpringValue } from '@react-spring/web'
import React, { FC } from 'react'
import { Box, Line, Cover } from './styles'

interface IProps {
  children: any
  opacity: any
  background: SpringValue
  open?: boolean
  t?: any
}

const Text: FC<IProps> = ({ children, opacity, background }) => {
  return (
    <Box style={{ opacity }}>
      {React.Children.toArray(children).map((text: any, index: number) => (
        <Line
          key={index}
          style={{ transform: opacity.to((t: number) => `translate3d(0,${index * -50 + (1 - t) * ((1 + index) * 40)}px,0)`) }}
        >
          <div>{text}</div>
          <Cover style={{ background, transform: opacity.to((t: number) => `translate3d(0,${t * 100}%,0) rotateZ(-10deg)`) }} />
        </Line>
      ))}
    </Box>
  )
}

export default Text
