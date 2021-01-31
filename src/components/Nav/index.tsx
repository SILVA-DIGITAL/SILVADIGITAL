import React, { FC } from 'react'
import { Badge } from '@pmndrs/branding'
import { Link } from 'wouter'
import { NavRight } from './styles'

interface IProps {
  position?: string
  bottom?: string | number
  left?: string | number
  transform?: string
  style?: any
}

const Nav: FC<IProps> = props => (
  <>
    <NavRight {...props}>
      <Link to="/">Torus</Link>
      <Link to="/knot">Knot</Link>
      <Link to="/bomb">Bomb</Link>
    </NavRight>
    <Badge style={{ position: 'absolute', bottom: 25, left: '50%', transform: 'translate3d(-50%,0,0)' }} />
  </>
)

export default Nav
