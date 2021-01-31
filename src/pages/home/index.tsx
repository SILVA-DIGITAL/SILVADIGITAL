// @ts-nocheck
import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { Environment } from '@react-three/drei/Environment'
import { Loader } from '@react-three/drei'
import { useTransition, useSpring } from '@react-spring/core'
import { useLocation } from 'wouter'
import { Container, Jumbo } from './styles'
import Shapes from '~components/Shapes'
import Text from '~components/Text'
import Nav from '~components/Nav'

const jumbo = {
  '/': ['Welcome', 'I am creating', 'cool stuff'],
  '/knot': ['The moon', 'its mother.'],
  '/hello': ['The wind', 'hath carried it', 'in its belly.'],
}

const Home = () => {
  // Current route
  const [location] = useLocation()

  // Animated background color
  const props = useSpring({
    background: location === '/' ? 'white' : location === '/knot' ? '#272730' : '#ffcc6d',
    color: location === '/' ? 'black' : location === '/knot' ? 'white' : 'white',
  })

  // Animated shape props
  const transition = useTransition(location, {
    from: { position: [0, 0, -20], rotation: [0, Math.PI, 0], scale: [0, 0, 0], opacity: 0 },
    enter: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1], opacity: 1 },
    leave: { position: [0, 0, -10], rotation: [0, -Math.PI, 0], scale: [0, 0, 0], opacity: 0 },
    config: () => n => n === 'opacity' && { friction: 60 },
  })

  return (
    <>
      <Loader />
      <Nav style={{ color: props.color }} />
      <Container style={{ ...props }}>
        <Jumbo>
          {transition((style, location) => (
            <Text opacity={style.opacity} background={props.background} children={jumbo[location]} />
          ))}
        </Jumbo>
      </Container>
      <Canvas concurrent camera={{ position: [0, 0, 20], fov: 50 }} onCreated={({ gl }) => (gl.toneMappingExposure = 1.5)}>
        <spotLight position={[0, 30, 40]} />
        <spotLight position={[-50, 30, 40]} />
        <Suspense fallback={null}>
          <Shapes transition={transition} />
          <Environment files="photo_studio_01_1k.hdr" />
        </Suspense>
      </Canvas>
    </>
  )
}

export default Home
