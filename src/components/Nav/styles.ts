import styled from "styled-components"
import { a } from "@react-spring/web"

export const NavRight = styled(a.div)`
  position: absolute;
  right: 50px;
  top: 50px;

  &.alt {
    a {
      color: white;
    }
  }
`
