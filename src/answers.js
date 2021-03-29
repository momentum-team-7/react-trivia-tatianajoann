import { useState, useEffect } from 'react'
import he from 'he'
import lodash from 'lodash'

function Answers(props) {
    const {question, correctAnswer, possibleAnswers} = props
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [score, setScore] = useState(0)
 

  // const handleAnswer = (answer) => {
  //     if (answer === correctAnswer) {
  //       setSelectedAnswer(true);
  //       setScore(score + 1);
  //     } else {
  //       setSelectedAnswer(false)
  //     }
  //   }

    return (
        <div>
             {/* <p>Current Score: {score} / {questions.length} </p> */}
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