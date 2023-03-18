import React, { useState } from 'react'
import shuffleArray from 'shuffle-array'
import { decode } from 'html-entities'
import Answers from './Answers'


export default function Questions({ game, questions, endGame, countPoints, clearState }) {

    const data = questions.map((question) => {
        return {
            number: questions.indexOf(question) + 1,
            id: question.id,
            question: question.question,
            correct_answer: question.correct_answer,
            answers: shuffleArray(question.answers),
            playerAnswer: "",
            isCorrect: "no-data"
        }
    })

    const [questionState, setQuestionState] = useState(data)

    const questionMarkUp = questionState.map((item) => {
        return (
                    <div key={item.number} className='quiz-container'>
                    <div id={item.id} className="question-container">
                        <h2 className='question-title'>{decode(item.question)}</h2>
                        <Answers 
                            isGameOver={game.isOver}
                            questionId={item.id}
                            all_answers={item.answers}
                            correct_answer={item.correct_answer}
                            savePickedAnswer={savePickedAnswers}
                            isCorrect={item.isCorrect}
                        />
                    </div>
                    </div>
        )
    })

    function savePickedAnswers(idQuestion, answer) {
            setQuestionState(questions => {
                return questions.map(question => {
                    return question.id === idQuestion ? {
                        ...question,
                        playerAnswer: answer,
                    } : question 
                })
            })
    }

    function checkAnswers() {
        endGame()
        questionState.map(question => {
            if(question.correct_answer === question.playerAnswer) {
                countPoints()
                question.isCorrect = true
            }else {
                question.isCorrect = false
            }
        })
    }

    return (
        <div className="quiz-container">
            {questionMarkUp}
            <div className="player-stats">
            {game.isOver ? <p className='points'>You Scored {game.points}/5 correct answers</p> : ""}
            <button className='check-btn' onClick={game.isOver ? clearState : checkAnswers}>{game.isOver ? "Play again" : "Check answers"}</button>
            </div>
        </div>
    )
}