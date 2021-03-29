import { useState, useEffect } from 'react'
import he from 'he'
import lodash from 'lodash'

function Answers(props) {
    const {question, correctAnswer, possibleAnswers, selected} = props
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [score, setScore] = useState(0)
 


    return (
        <div>
             {/* <p>Current Score: {score} / {questions.length} </p> */}
             <div className="questions">{he.decode(question.question)}</div>
          <ul>

            {possibleAnswers.map((possibleAnswer, index) => (
              <li>
              <button 
              onClick={()=> {
                correctAnswer === possibleAnswer ? setSelectedAnswer(true) : setSelectedAnswer(false);
                let newScore = score
                correctAnswer === possibleAnswer ? setScore(newScore + 1) : setScore(newScore);
                }}>
                {he.decode(possibleAnswer)}
                </button>
            </li>))}
            <button onClick={()=> {
              // run selected function from questions component
              selected();
            }}>Next Question</button>
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