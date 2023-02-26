import React, { useState } from 'react'


export default function Questions({ game, questions }) {

    const data = questions.map((question) => {
        return {
            number: questions.indexOf(question) + 1,
            id: question.id,
            question: question.question,
            correct_answer: question.correct_answer,

        }
    })

    const [questionState, setQuestionState] = useState(data)

    const questionMarkUp = questionState.map((item) => {
        return (
                    <div key={item.id} id={item.id} className="container-question">
                        <h2 className='question-title'>{item.number}.{item.question}</h2>
                    </div>
        )
    })

    return (
        <div className="quiz-container">
            {questionMarkUp}
        </div>
    )
}