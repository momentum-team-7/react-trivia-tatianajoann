import { useState, useEffect } from 'react'
import he from 'he'
import lodash from 'lodash'

function Answers(props) {
    const {questions, correctAnswer, possibleAnswers} = props
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    console.log('pos', possibleAnswers)
    console.log('cor', correctAnswer)
    // console.log(selectedAnswer)
    // console.log(correctAnswer)

    return (
        <div>
          <ul>

            {possibleAnswers.map((possibleAnswer, index) => (
              <li>
              <button onClick={() => correctAnswer === possibleAnswer ? setSelectedAnswer(true) : setSelectedAnswer(false)}>{he.decode(possibleAnswer)}</button>
            </li>))}
            {/* <li><button onClick={(e) => setSelectedAnswer(true)}>{he.decode(correctAnswer)}</button></li>
            {incorrectAnswers.map((incorrectAnswer, index) => (
              <li><button onClick={(e) => setSelectedAnswer(false)}>{he.decode(incorrectAnswer)}</button></li>
            ))} */}
            </ul> 
          <div className="right" style={selectedAnswer ? {} : { display: 'none' }}>
              Correct!!
          </div>
          
          <div className="wrong" style={selectedAnswer === false ? {} : { display: 'none' }}>
              Incorrect!!!
          </div>
          </div>
          
    )
}


export default Answers 