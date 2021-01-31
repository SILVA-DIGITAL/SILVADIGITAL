import styled from "styled-components"
import { a } from "@react-spring/web"

export const Box = styled(a.div)`
  position: absolute;
  transform: translate3d(-50%, -42%, 0);
  will-change: opacity;
`

export const Line = styled(a.div)`
  position: relative;
  width: 100%;
  will-change: transform;
  overflow: hidden;
  line-height: 1.2em;
`

export const Cover = styled(a.div)`
  position: absolute;
  will-change: background, transform;
  top: 0;
  left: 0;
  width: 120%;
  height: 120%;
`
