import React, { useState, useEffect } from 'react'
import * as THREE from 'three'
import { useTransition, animated } from 'react-spring'

export const Loader = () => {
  const [finished, set] = useState(false)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    THREE.DefaultLoadingManager.onLoad = () => set(true)
    THREE.DefaultLoadingManager.onProgress = (url, itemsLoaded, itemsTotal) => setWidth((itemsLoaded / itemsTotal) * 200)
  }, [])

  const props = useTransition(finished, null, {
    from: { opacity: 1, width: 0 },
    leave: { opacity: 0 },
    update: { width },
  })

  return props.map(
    ({ item: finished, key, props: { opacity, width } }) =>
      !finished && (
        <animated.div className="loading" key={key} style={{ opacity }}>
          <div className="loading-bar-container">
            <animated.div className="loading-bar" style={{ width }} />
          </div>
        </animated.div>
      ),
  )
}
