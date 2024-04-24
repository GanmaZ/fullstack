import { useState } from 'react'

const Display = ({counter, text}) => <div>{text} {counter}</div>
const Button = ({ onSmash, text }) => <button onClick={onSmash}>{text}</button>

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
  }
  const increaseNeutral = () => {
    setNeutral(neutral + 1)
  }
  const increaseBad = () => {
    setBad(bad + 1)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button onSmash={increaseGood} text="good" />
      <Button onSmash={increaseNeutral} text="neutral" />
      <Button onSmash={increaseBad} text="bad" />
      <h1>statistics</h1>
      <Display counter={good} text="good"/>
      <Display counter={neutral} text="neutral"/>
      <Display counter={bad} text="bad"/>
    </div>
  )
}

export default App