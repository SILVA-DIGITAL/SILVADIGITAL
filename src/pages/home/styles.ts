import "styled-components/macro"
import styled from "styled-components"
import { a } from "@react-spring/web"

export const Container = styled(a.div)`
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const Jumbo = styled.div`
  white-space: pre;
  margin-bottom: 2.5rem;
  font-size: 12em;
  font-weight: 800;
  letter-spacing: -6px;
`

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
