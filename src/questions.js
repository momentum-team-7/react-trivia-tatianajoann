import { useState, useEffect } from 'react'
import axios from 'axios';
import './app.css'
import Answers from './answers'
import he from 'he'
import lodash from 'lodash'


function Questions({ selectedCategory, handleGoBack }) {
    const [questions, setQuestions] = useState([])
    useEffect(() => {
    axios.get(`https://opentdb.com/api.php?amount=10&category=${selectedCategory.id}`).then((response) => {
        // getting the id from selectedCategory , filters questions based on that ID 
        setQuestions(response.data.results) 
    })
    }, [])
    
    let showQuestion = (i) => {return questions[i]}

    return (
        <div className="App">
        <h1>{selectedCategory.name}</h1>
        <button className="back-btn" onClick={handleGoBack}>
            --> Categories
            </button>
        <div>
          <Answers question={showQuestion(0)} />
            {/* {questions.map((question, index) => (
              <div className="questions">{he.decode(question.question)}
              <Answers questions={questions} correctAnswer={question.correct_answer} possibleAnswers={lodash.shuffle(question.incorrect_answers.concat(question.correct_answer))}/>
              </div>
            ))} */}
          </div>
        </div>
      )
}



export default Questions