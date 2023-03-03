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

    function addAnswerStyle(item) {
        switch(item) {
           case  (isGameOver && item.isPicked && isCorrect):
           return {
                    background: "var(--answer-correct)",
                    border: "2px solid var(--answer-correct)"
           }
           break;
           case (isGameOver && item.isPicked && !isCorrect):
            return {
                background: "var(--answer-wrong)",
                border: "2px solid var(--answer-wrong)"
            }
            break;
            case (item.isPicked && !isGameOver):
            return {
                background: "var(--answer-picked)",
                border: "2px solid var(--answer-picked)"
            }  
            break;
            case (isGameOver && item.answer === correct_answer):
            return {
                background: "var(--answer-picked)",
                border: "2px solid var(--answer-picked)"
            }   
            break; 
            default: (!item.isPicked && !isGameOver)
            return {
                background: "",
                border: ""
            } 
            break; 
        }
    }

    const answerHtml = answerState.map(item => {
        return (
                    <button
                        id={item.id}
                        key={item.id}
                        className="answer-btn"
                        onClick={() => toggle(item.id, questionId, item.answer)}
                        disabled ={isGameOver ? true : false}
                    >
                        {decode(item.answer)}
                    </button>
        )
    })

    return (
                <>
                {answerHtml}
                </>
    )
}