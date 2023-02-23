import React, { useState } from 'react'
import blobBlu from './assets/blob blue.svg'
import blobYello from './assets/blob yellow.svg'
import Intro from './components/intro'




export default function App() {
  

  return (
    <div className="App">
      <img src={blobYello} alt="yellow blob" className='blob-yellow' />
      <Intro />
      <img src={blobBlu} alt="blue blob" className='blob-blue' />
    </div>
  )
}


