import React, { FC } from 'react'
import { Link } from 'wouter'
import { NavRight } from './styles'
interface IProps {
  location: string
}

const Nav: FC<IProps> = ({ location }) => (
  <>
    <NavRight className={location !== '/' ? 'alt' : ''}>
      <Link to="/">Torus</Link>
      <Link to="/knot">Knot</Link>
      <Link to="/bomb">Bomb</Link>
    </NavRight>
  </>
)

export default Nav
