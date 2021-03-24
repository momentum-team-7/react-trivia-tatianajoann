import { useState, useEffect } from 'react'
import axios from 'axios';

function Categories() {
    const [trivias, setTrivia] = useState([])
    useEffect(() => {
      console.log('useEffect runs', trivias)
      axios.get('https://opentdb.com/api_category.php').then((response) => {
        setTrivia(response.data.trivia_categories)
        console.log(trivias)
      })
    }, [])
  
    console.log('RENDERING:', trivias)
  
    return (
      <div className="App">
        <h1>Trivia Thing</h1>
        <ul>
          {trivias.map((trivia) => (
            <li>{trivia.name}</li>
          ))}
        </ul>
      </div>
    )

}

export default Categories