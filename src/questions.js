import { useState, useEffect } from 'react'
import axios from 'axios';
import './app.css'
import Answers from './answers'
import he from 'he'
import lodash from 'lodash'


function Questions({ selectedCategory }) {
    const [questions, setQuestions] = useState([])
    useEffect(() => {
    axios.get(`https://opentdb.com/api.php?amount=10&category=${selectedCategory.id}`).then((response) => {
        // getting the id from selectedCategory , filters questions based on that ID 
        setQuestions(response.data.results)
        console.log(response.data.results)
        // console.log(selectedCategory)
            
    })
    }, [])
   
    return (
        <div className="App">
        <h1>{selectedCategory.name}</h1>
        <div>
            {questions.map((question, index) => (
            <div className="questions">{he.decode(question.question)}
            <Answers questions={questions} correctAnswer={question.correct_answer} possibleAnswers={lodash.shuffle(question.incorrect_answers.concat(question.correct_answer))}/>
           
            </div>
            ))}
          </div>
        </div>
      )
}



export default Questions