import { useState, useEffect } from 'react'
import axios from 'axios';
import selectedCategory from './categories';


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
            {questions.map((question) => (
            <div>{question.question}
            <ul>
            <li>{question.correct_answer}</li>
            <li>{question.incorrect_answers[0]}</li>
            <li>{question.incorrect_answers[1]}</li> 
            <li>{question.incorrect_answers[2]}</li> 
            </ul>
            </div>
            ))}
          </div>
        </div>
      )
}



export default Questions