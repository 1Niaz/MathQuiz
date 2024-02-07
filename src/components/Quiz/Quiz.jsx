import { useState } from 'react'
import './Quiz.css'

const questions = [
    {
        title: '5 + 6',
        variants: ['11', '9', '7'],
        correct: 0,
    },
    {
        title: '20 - 4',
        variants: ['5', '24', '16'],
        correct: 2,
    },
    {
        title: '10 + 6',
        variants: ['4', '16', '60'],
        correct: 1,
    },
    {
        title: '5 - 2',
        variants: ['7', '3', '10'],
        correct: 1,
    },
    {
        title: '14 - 7',
        variants: ['7', '10', '21'],
        correct: 0,
    },
    {
        title: '13 + 6',
        variants: ['20', '7', '19'],
        correct: 2,
    },
    {
        title: '20 - 8',
        variants: ['14', '12', '28'],
        correct: 1,
    },
    {
        title: 'Да?',
        variants: ['Да', 'Ладно', 'Нет'],
        correct: 0,
    },
    {
        title: '7 + 8',
        variants: ['18', '15', '17'],
        correct: 1,
    },
    {
        title: '25 - 7',
        variants: ['18', '32', '17'],
        correct: 0,
    },
    {
        title: 'Нет?',
        variants: ['18', '15', '17'],
        correct: 0,
    },
    {
        title: 'Хорошо',
        variants: ['Ладно', 'Да', 'Нет'],
        correct: 0,
    },
]

const Quiz = () => {


    // const questions = [
    //     {
    //         title: '5 + 6',
    //         variants: ['11', '9', '7'],
    //         correct: 0,
    //     },
    //     {
    //         title: '20 - 4',
    //         variants: ['5', '24', '16'],
    //         correct: 2,
    //     },
    //     {
    //         title: '10 + 6',
    //         variants: ['4', '16', '60'],
    //         correct: 1,
    //     },
    //     {
    //         title: '5 - 2',
    //         variants: ['7', '3', '10'],
    //         correct: 1,
    //     },
    //     {
    //         title: '14 - 7',
    //         variants: ['7', '10', '21'],
    //         correct: 0,
    //     },
    // ]

    function Game({ step, question, onClickVariant }) {
        return (
            <div className="game">
                <h2>Вопрос {step + 1}</h2>
                <h1>{question.title}</h1>
                <ul>
                    {
                        question.variants.map((text, index) => <li onClick={() => { onClickVariant(index) }} key={text}>{text}</li>)
                    }
                </ul>
            </div>
        )
    }

    function Result({correct}) {
        return (
            <div className='result'>
                {/* <h1>Молодец</h1> */}
                <h1>{correct >= 4 ? "Молодец!" : "Еблан?"}</h1>
                <h2>Ты ответил правильно на {correct} из {questions.length} вопросов</h2>
                <button onClick={() => Restart()}>Начать заново</button>
            </div>
        )
    }
    

    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)
    const question = questions[step]

    const onClickVariant = (index) => {
        console.log(step, index)
        setStep(step + 1)

        if (index === question.correct) {
            setCorrect(correct + 1)
        }
    }

    const Restart = () => {
        setCorrect(0)
        setStep(0)
    }

    return (
        <>
            <div className="container">
                {/* <Game
                    step={step}
                    question={question}
                    onClickVariant={onClickVariant}
                /> */}
                {/* <Result/> */}

                {
                    step !== questions.length ?
                        (
                            <Game
                                step={step}
                                question={question}
                                onClickVariant={onClickVariant}
                            />
                        ) :
                        (
                            <Result
                                correct={correct}
                            />
                        )
                }
            </div>
        </>
    );
}

export default Quiz;
