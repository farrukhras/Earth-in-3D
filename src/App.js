import './App.css';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Earth from './components/earth.js';
import TextSection from './components/textSection';

function App() {
  return (
    <div className='mainContainer'>
      <TextSection />
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App;
