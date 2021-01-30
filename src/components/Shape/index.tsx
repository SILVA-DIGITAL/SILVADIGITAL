import React, { FC, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { BufferGeometry, Geometry, Material, Texture, TorusBufferGeometry, Vector3 } from 'three'
import { useThree, useFrame } from 'react-three-fiber'
import { a } from '@react-spring/three'
import { Shadow } from '@react-three/drei'

interface IProps {
  geometry: Geometry | BufferGeometry | TorusBufferGeometry
  material: Material
  args?: any
  textures: Texture | any
  scale?: [number, number, number]
  rotation?: [number, number, number]
  opacity: number
  color: string
  shadowScale?: Vector3 | [x: number, y: number, z: number]
}

const Shape: FC<IProps> = ({ geometry, material, args, textures, scale, opacity, color, shadowScale = [9, 1.5, 1], ...props }) => {
  const ref = useRef(null)
  const { mouse, clock } = useThree()
  const [ao, normal, height, roughness] = textures
  const [rEuler, rQuaternion] = useMemo(() => [new THREE.Euler(), new THREE.Quaternion()], [])

  useFrame(() => {
    if (ref.current !== null) {
      rEuler.set((-mouse.y * Math.PI) / 10, (mouse.x * Math.PI) / 6, 0)
      const currentMax = ref.current
      currentMax.quaternion.slerp(rQuaternion.setFromEuler(rEuler), 0.1)
      currentMax.material.time = clock.getElapsedTime() * 3
    }
  })

  return (
    <group {...props}>
      <a.mesh
        ref={ref}
        args={args}
        geometry={geometry}
        material={material}
        material-color={color}
        material-aoMap={ao}
        material-normalMap={normal}
        material-displacementMap={height}
        material-roughnessMap={roughness}
        material-opacity={opacity}
      >
        <Shadow opacity={0.2} scale={shadowScale} position={[0, -8.5, 0]} />
      </a.mesh>
    </group>
  )
}

export default Shape
