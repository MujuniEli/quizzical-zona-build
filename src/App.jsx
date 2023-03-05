import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import blobBlu from './assets/blob blue.svg'
import blobYello from './assets/blob yellow.svg'
import Intro from './components/Intro'
import Questions from './components/Questions'




export default function App() {
  
  const [question, setQuestion] = useState([])

  const [game, setGame] = useState({pageView: 'index', isOver: false, points: 0})

  const API_URL = 'https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple';

  useEffect(() => {
    fetch(API_URL)
    .then(response => response.json())
    .then(data => setQuestion(data.results.map(item => {
      const { question, correct_answer, incorrect_answer } = item
      return {
        id: nanoid(),
        question: question,
        correct_answer: correct_answer,
        answers: Array.isArray(incorrect_answer) ? [...incorrect_answer, correct_answer] : [incorrect_answer, correct_answer]
      }
    })))
  }, [])

  function displayQuestions() {
    setGame(prevState => {
      return {
        ...prevState,
        pageView: 'questions'
      }
    })
  }

  function endGame() {
      setGame(prevState => {
        return {
            ...prevState,
            isOver: true
        }
      })
  }

  function countPoints() {
      setGame(prevState => {
        return {
            ...prevState,
            points: prevState.points + 1
        }
      })
  }

  function clearState() {
    setGame(prevState => prevState = {
      pageView: 'index',
      isOver: false,
      points: 0
    })
    setQuestion([])
  }

  return (
    <div>
      <img src={blobYello} alt="yellow blob" className='blob-yellow' />
      {game.pageView === 'index' && <Intro displayQuestions={displayQuestions}/>}
      {game.pageView === 'questions' && 
      <Questions 
        game={game} 
        questions={question} 
        countPoints={countPoints} 
        endGame={endGame} 
        clearState={clearState}
      />}
      <img src={blobBlu} alt="blue blob" className='blob-blue' />
    </div>
  )
}


