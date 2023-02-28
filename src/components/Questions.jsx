import React, { useState } from 'react'
import shuffleArray from 'shuffle-array'
import { decode } from 'html-entities'


export default function Questions({ game, questions }) {

    const data = questions.map((question) => {
        return {
            number: questions.indexOf(question) + 1,
            id: question.id,
            question: question.question,
            correct_answer: question.correct_answer,
            // answers: shuffleArray(question.answers),
            playerAnswer: "",
            isCorrect: "no-data"
        }
    })

    const [questionState, setQuestionState] = useState(data)

    const questionMarkUp = questionState.map((item) => {
        return (
                    <div className='quiz-container'>
                    <div key={item.id} id={item.id} className="question-container">
                        <h2 className='question-title'>{decode(item.question)}</h2>
                    </div>
                    </div>
        )
    })

    return (
        <div className="quiz-container">
            {questionMarkUp}
        </div>
    )
}