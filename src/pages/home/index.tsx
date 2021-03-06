// @ts-nocheck
import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { Loader, Environment } from '@react-three/drei'
import { useTransition, useSpring } from '@react-spring/core'
import { useLocation } from 'wouter'
import { Container, Jumbo } from './styles'
import Shapes from '~components/Shapes'
import Text from '~components/Text'
import Nav from '~components/Nav'

const jumbo = {
  '/': ['Welcome', 'I am creating', 'cool stuff'],
  '/knot': ['The moon', 'its mother.'],
  '/bomb': ['The wind', 'hath carried it'],
}

const Home = () => {
  // Current route
  const [location] = useLocation()

  // Animated background color
  const springProps = useSpring({
    background: location === '/' ? 'white' : location === '/knot' ? '#272730' : '#ffcc6d',
    color: location === '/' ? 'black' : 'white',
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
      <Container style={{ ...springProps }}>
        <Jumbo>
          {transition((style, location) => (
            <Text opacity={style.opacity} background={springProps.background} children={jumbo[location]} />
          ))}
        </Jumbo>
      </Container>
      <Canvas concurrent camera={{ position: [0, 0, 20], fov: 50 }} onCreated={({ gl }) => (gl.toneMappingExposure = 1.5)}>
        <spotLight position={[0, 30, 40]} />
        <spotLight position={[-50, 30, 40]} />
        <Suspense fallback={null}>
          <Shapes transition={transition} />
          <Environment files="./assets/images/photo_studio_01_1k.hdr" />
        </Suspense>
      </Canvas>
      <Nav location={location} />
    </>
  )
}

export default Home
