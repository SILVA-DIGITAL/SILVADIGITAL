import React, { FC, useLayoutEffect, useState } from 'react'
import * as THREE from 'three'
import { a } from '@react-spring/three'
import { Switch, Route } from 'wouter'
import { useTexture, useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import Material from '~components/Material'
import Shape from '~components/Shape'

type GLTFResult = GLTF & {
  nodes: {
    Little_Boy_Little_Boy_Material_0: THREE.Mesh
  }
  materials: {
    ['default']: THREE.MeshStandardMaterial
  }
}

const Shapes: FC = ({ transition }: any) => {
  const [torus] = useState(() => new THREE.TorusBufferGeometry(4, 1.2, 128, 128))
  const [torusknot] = useState(() => new THREE.TorusKnotBufferGeometry(3, 0.8, 256, 16))
  const { nodes } = useGLTF('/assets/models/bomb-gp.glb') as GLTFResult
  const [nodesstate] = useState(() => nodes)
  const [materials] = useState<Array<Material>>([new Material(), new Material(), new Material()])

  const textures = useTexture([
    '/assets/images/ao.jpg',
    '/assets/images/normal.jpg',
    '/assets/images/height.png',
    '/assets/images/roughness.jpg',
  ] as any[string])

  useLayoutEffect(() => {
    // @ts-ignore
    textures.forEach(texture => ((texture.wrapT = texture.wrapS = THREE.RepeatWrapping), texture.repeat.set(4, 4)))
  }, [textures])

  return transition(({ opacity, ...props }: any, location: string) => (
    <a.group {...props}>
      <Switch location={location}>
        <Route path="/">
          <Shape geometry={torus} material={materials[0]} textures={textures} color="white" opacity={opacity} />
        </Route>
        <Route path="/knot">
          <Shape geometry={torusknot} material={materials[1]} textures={textures} color="#272730" opacity={opacity} />
        </Route>
        <Route path="/bomb">
          <Shape
            geometry={nodesstate.Little_Boy_Little_Boy_Material_0.geometry}
            material={materials[2]}
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
