import React, { useState, useEffect } from 'react'
import blobBlu from './assets/blob blue.svg'
import blobYello from './assets/blob yellow.svg'
import Intro from './components/intro'
import Questions from './components/Questions'




export default function App() {
  
  const [question, setQuestion] = useState([])

  const API_URL = 'https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple';

  return (
    <div className="App">
      <img src={blobYello} alt="yellow blob" className='blob-yellow' />
      <Intro />
      <Questions />
      <img src={blobBlu} alt="blue blob" className='blob-blue' />
    </div>
  )
}


