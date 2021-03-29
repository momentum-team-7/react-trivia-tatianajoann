import { useState, useEffect } from 'react'
import axios from 'axios';
import './app.css'
import Answers from './answers'
import he from 'he'
import lodash from 'lodash'


function Questions({ selectedCategory, handleGoBack }) {
    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(() => {
    axios.get(`https://opentdb.com/api.php?amount=10&category=${selectedCategory.id}`).then((response) => {
        // getting the id from selectedCategory , filters questions based on that ID 
        setQuestions(response.data.results)
        // set current question to first item in questions 
        setCurrentQuestion([response.data.results[0]])
    })}, [])

    let updateQuestion = () => {
      // check if current question is within the amount of questions 
      // if out of questions, return to category selection 
      if (currentIndex < 10) {
        setCurrentQuestion([questions[currentIndex]])
      }
      else {
        handleGoBack()
      }
        return 
    }
    let questiontoRender
    // make sure current question has data before rendering the next component, otherwise undefined error (bc data wasn't there yet)
    if (!lodash.isEmpty(currentQuestion)) {
      questiontoRender = currentQuestion.map((question, index) => {
        return <Answers question={question} correctAnswer={question.correct_answer} possibleAnswers={lodash.shuffle(question.incorrect_answers.concat(question.correct_answer))} 
        // selected function & prop called in answers
        selected={() => {
          // set current index changing the current question index , getting next question from list of questions
          setCurrentIndex(currentIndex + 1);
          // run the function to update the question or go back 
          updateQuestion()
        }}
          />
      })
    }
  
      return (
        <div className="App">
        <h1>{selectedCategory.name}</h1>
        <button className="back-btn" onClick={handleGoBack}>
            --> Categories
            </button>
        <div>
          {/* questiontorender answers tag but as a variable bc it needed to be in an if statement checking if current question empty */}
          {questiontoRender}
          </div>
        </div>
      )
}



export default Questions