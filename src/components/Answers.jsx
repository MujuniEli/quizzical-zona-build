import React, { useState } from 'react'
import { decode } from 'html-entities'
import { nanoid } from 'nanoid'



export default function Answers({ all_answers, questionId, savePickedAnswer, isGameOver, isCorrect, correct_answer }) {

    const answers = all_answers.map(answer => {
        return {
            id: nanoid(),
            answer: answer,
            isPicked: false
        }
    })

    const [answerState, setAnswerState] = useState(answers)

    function toggle(idAnswer, idQuestion, answer) {
        setAnswerState(answers => {
            return answers.map(answer => {
                return answer.id === idAnswer ? {
                    ...answer,
                    isPicked: !answer.picked
                }:
                {
                    ...answer,
                    isPicked: false
                }
            })
        })
            savePickedAnswer(idQuestion, answer)
    }

    return (
                <button>
                
                </button>
    )
}