import { useState } from 'react'
import Find from './components/Find'


function App() {

  const [newFinder,setNewFinder] = useState(null)
  
  const handleFinderChange = (event) => {
    setNewFinder(event.target.value)
  }


  return (
    <>
       <p>find countries <Find finderChangeHandler={handleFinderChange}/></p>
    </>
  )
}

export default App
