import { useState, useEffect } from 'react'
import axios from 'axios';
import './app.css'
import Questions from './questions'


function Categories() {
    const [triviaCategories, setTriviaCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)
    useEffect(() => {
    axios.get('https://opentdb.com/api_category.php').then((response) => {
        setTriviaCategories(response.data.trivia_categories)
        console.log('triviaCategories', triviaCategories)
    })
    }, [])

    if (selectedCategory) {
        return <Questions selectedCategory={selectedCategory} />
        // if a category is selected render questions 
        //sending questions the selected category
    }

    return (
    <div className="App">
        <h1>Trivia Thing</h1>
        <ul className="category-list">
        {triviaCategories.map((triviaCategory) => (
            <li><button  onClick={(e) => setSelectedCategory(triviaCategory)}>{triviaCategory.name}</button></li>
            // when button is clicked, setState to the given trivia category (has an ID and a name)
        ))}
        </ul>
    </div>
    )
    
}
export default Categories