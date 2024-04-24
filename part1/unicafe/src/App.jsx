import { useState } from 'react'

const Display = ({counter, text}) => <div>{text} {counter}</div>
const Button = ({ onSmash, text }) => <button onClick={onSmash}>{text}</button>
const Statistics = (props) => {
  switch (props.option) {
    case "all":
      return(<div>{props.option} {props.good+props.neutral+props.bad}</div>)
      break;
    case "average":
      return(<div>{props.option} {((props.good*1)+(props.neutral*0)+(props.bad*-1))/(props.good+props.neutral+props.bad)}</div>)
      break;
    case "positive":
      return(<div>{props.option} {(100 * props.good) / (props.good+props.neutral+props.bad)} %</div>)
      break;
    default:
      break;
  }
}


const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onSmash={() => setGood(good + 1)} text="good" />
      <Button onSmash={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onSmash={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Display counter={good} text="good"/>
      <Display counter={neutral} text="neutral"/>
      <Display counter={bad} text="bad"/>
      <Statistics option={"all"} good={good} neutral={neutral} bad={bad}/>
      <Statistics option={"average"} good={good} neutral={neutral} bad={bad}/>
      <Statistics option={"positive"} good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App