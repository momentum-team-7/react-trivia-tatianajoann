import { useState, useEffect } from 'react'
import axios from 'axios';
import './categories';
import './App';

function Questions() {
    const [questions, setQuestions] = useState([])
    useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10').then((response) => {
        console.log(response)
        setQuestions(response.data.results)
        console.log(questions)
    })
    }, [])

    return (
        <div className="App">
          <h1></h1>
          <ul>
            {questions.map((question) => (
              <li>{question.question}</li>
            ))}
          </ul>
        </div>
      )
}



export default Questions