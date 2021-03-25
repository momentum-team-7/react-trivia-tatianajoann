import { useState, useEffect } from 'react'
import axios from 'axios';

import selectedCategory from './categories';

function Answers(props) {
    const {questions, correctAnswer, incorrectAnswers} = props
    const [selectedAnswer, setSelectedAnswer] = useState(null)

    return (
        
          <ul>
            <li><button>{correctAnswer}</button></li>
            {incorrectAnswers.map((incorrectAnswer, index) => (
              <li><button>{incorrectAnswer}</button></li>
            ))}
            </ul> 
    )




}

export default Answers 