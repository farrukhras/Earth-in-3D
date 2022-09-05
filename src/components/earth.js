import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';
import EarthDayMap from "../assests/textures/8k_earth_daymap.jpeg";
import EarthCloudsMap from "../assests/textures/8k_earth_clouds.jpeg";

function Earth(props) {
  const [colorMap, cloudsMap] = useLoader(TextureLoader, [EarthDayMap, EarthCloudsMap]);
  
  const eRef = useRef();
  const cRef = useRef();

  useFrame(({ clock }) => {
    const elapTime = clock.getElapsedTime();

    eRef.current.rotation.y = elapTime / 8;
    cRef.current.rotation.y = elapTime / 8;
  })

  return (
    <>
      <ambientLight intensity={0.5}/>
      {/* <pointLight 
        color="#f6f3ea" 
        position={[2, 0, 5]} 
        intensity={1.2}
      /> */}

      {/* starry background */}
      <Stars 
        radius={300}
        depth={80}
        count={30000}
        factor={6}
        fade={true}
      />

      {/* clouds */}
      <mesh ref={cRef} position={[0, 0,  2]}>
        <sphereBufferGeometry args={[1.001, 32, 32]} />
        <meshPhongMaterial 
          map={cloudsMap}
          opacity={0.3}
          transparent={true}
        />
      </mesh>

      {/* earth */}
      <mesh ref={eRef} position={[0, 0,  2]}>
        <sphereBufferGeometry args={[1, 32, 32]} />
        <meshPhongMaterial /> 
        <meshStandardMaterial map={colorMap}/>

        <OrbitControls 
          enableZoom={true} 
          enablePan={true} 
          enableRotate={true} 
          zoomSpeed={0.5}
          panSpeed={0.5}
          rotateSpeed={0.5}
        />
      </mesh>
    </>
  );
}

export default Earth;