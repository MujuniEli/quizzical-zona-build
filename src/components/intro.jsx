import React from 'react'


export default function Intro({displayQuestions}) {
    return (
        <div className="intro-container">
            <h1>Quizzical</h1>
             <h4 className="description">Welcome to quizzical the App that lets you test your knowledge, press start to get started!! </h4>
             <button type='button' className='start-btn' onClick={() => displayQuestions()}>Start quiz</button>
        </div>
    )
}


