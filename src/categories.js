import { useState, useEffect } from 'react'
import axios from 'axios';


function Categories() {
    const [trivias, setTrivia] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)
    useEffect(() => {
      axios.get('https://opentdb.com/api_category.php').then((response) => {
        setTrivia(response.data.trivia_categories)
        console.log(trivias)
      })
    }, [])
  
  
    return (
      <div className="App">
        <h1>Trivia Thing</h1>
        <ul>
          {trivias.map((trivia) => (
            <li><button  onClick={(e) => setSelectedCategory(trivia.name)}>{trivia.name}</button></li>
          ))}
        </ul>
      </div>
    )
    
}
export default Categories