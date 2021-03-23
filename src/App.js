import { useState, useEffect } from 'react'
import axios from 'axios'
// import lodash from 'lodash'

function App() {
  const [trivias, setTrivia] = useState([])
  useEffect(() => {
    // console.log('useEffect runs', trivia)
    axios.get('https://opentdb.com/api.php?amount=10').then((response) => {
      // const sortedCats = lodash.sortBy(response.data, ['trivia_categories'])
      console.log('resp', response)
      setTrivia(response.data.results)
      // console.log(trivia)
    })
  }, [])

  console.log('RENDERING:', trivias)



  return (
    <div className="App">
      <h1>Trivia Thing</h1>
      <ul>
        {trivias.map((trivia) => (
          <li>{trivia.category}</li>
        ))}
      </ul>
      
    </div>
  )
}

export default App