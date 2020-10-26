import * as THREE from 'three'
import React, { FC, Suspense, useState, useEffect } from 'react'
import { Canvas, useLoader } from 'react-three-fiber'
import { useTransition, animated } from 'react-spring'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls, draco } from 'drei'
import { Loader } from '~components/Loader'

const Home: FC = () => {

  const Model = ({ url }: any) => {
    // @ts-ignore
    const { nodes, materials } = useLoader(GLTFLoader, url, draco())
    return (
      <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -7, 0]} scale={[7, 7, 7]}>
        <group rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}>
          <mesh castShadow receiveShadow geometry={nodes.planet001.geometry} material={materials.scene} />
          <mesh castShadow receiveShadow geometry={nodes.planet002.geometry} material={materials.scene} />
        </group>
      </group>
    )
  }
  
  return (
    <>
      <div className="bg" />
      <h1>
        LEARN
        <br />
        <span>w/JASON</span>
      </h1>
      <Canvas shadowMap camera={{ position: [0, 0, 15] }}>
        <ambientLight intensity={0.75} />
        <pointLight intensity={1} position={[-10, -25, -10]} />
        <spotLight
          castShadow
          intensity={2.25}
          angle={0.2}
          penumbra={1}
          position={[25, 25, 25]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0001}
        />
        <fog attach="fog" args={['#cc7b32', 16, 20]} />
        <Suspense fallback={null}>
          <Model url="assets/models/scene-draco.gltf" />
        </Suspense>
        <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          enableDamping
          dampingFactor={0.5}
          rotateSpeed={1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
      <div className="layer" />
      <Loader />
      <a href="https://github.com/drcmda/learnwithjason" className="top-left" children="Github" />
      <a href="https://twitter.com/0xca0a" className="top-right" children="Twitter" />
      <a href="https://github.com/drcmda/react-three-fiber" className="bottom-left" children="+ react-three-fiber" />
    </>
  )
}

export default Home
