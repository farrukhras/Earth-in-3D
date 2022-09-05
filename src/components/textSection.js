import React from 'react';

function TextSection() {
  return (
    <div className='container'>
      <h1 className='title'>
        Farrukh Rasool
      </h1>
      <p className='description'>
        Sample homepage section for displaying website info along with an interactive 3D object.
      </p>
      <p className='details'>
        Three.js is a JavaScript library that uses WebGL to render and display animated 2D and 3D 
        objects in the browser. It provides the functionality to add textures and materials to our objects. 
        <br/>
        <br/>
        React Three Fiber is a renderer for Three.js that renders 3D models and animations for React applications. 
        It allows us to build Three.js components using React states, hooks, and props.
      </p>
    </div>
    // <div className='container'>
    // </div>
  );
}

export default TextSection;