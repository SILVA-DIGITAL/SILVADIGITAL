// @ts-nocheck
import React, { useLayoutEffect } from 'react'
import * as THREE from 'three'
import { a } from '@react-spring/three'
import { Switch, Route } from 'wouter'
import { useTexture, useGLTF } from '@react-three/drei'
import Material from '~components/Material'
import Shape from '~components/Shape'

const Shapes = ({ transition }) => {
  const { nodes } = useGLTF('/bomb-gp.glb')
  const torus = new THREE.TorusBufferGeometry(4, 1.2, 128, 128)
  const torusknot = new THREE.TorusKnotBufferGeometry(3, 0.8, 256, 16)
  const material1 = new Material()
  const material2 = new Material()
  const material3 = new Material()
  const textures = useTexture(['/ao.jpg', '/normal.jpg', '/height.png', '/roughness.jpg'])

  useLayoutEffect(() => {
    textures.forEach(texture => ((texture.wrapT = texture.wrapS = THREE.RepeatWrapping), texture.repeat.set(4, 4)))
  }, [textures])

  return transition(({ opacity, ...props }, location) => (
    <a.group {...props}>
      <Switch location={location}>
        <Route path="/">
          <Shape geometry={torus} material={material1} textures={textures} color="white" opacity={opacity} />
        </Route>
        <Route path="/knot">
          <Shape geometry={torusknot} material={material2} textures={textures} color="#272730" opacity={opacity} />
        </Route>
        <Route path="/bomb">
          <Shape
            geometry={nodes.Little_Boy_Little_Boy_Material_0.geometry}
            material={material3}
            textures={textures}
            scale={[0.7, 0.7, 0.7]}
            rotation={[0, 0.5, 0]}
            shadowScale={[17, 2.5, 1]}
            color="black"
            opacity={opacity}
          />
        </Route>
      </Switch>
    </a.group>
  ))
}

export default Shapes
