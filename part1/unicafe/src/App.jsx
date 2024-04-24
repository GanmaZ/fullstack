import { useState } from 'react'

const Button = ({ onSmash, text }) => <button onClick={onSmash}>{text}</button>
const Display = ({counter, text}) => <div>{text} {counter}</div>
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
const Collected = (props) => {
  if(props.good === 0 && props.neutral === 0 && props.bad === 0){
    return (
      <div>
        No feedback given
      </div>
    )
  }
  else{
    return (
      <div>
      <Display counter={props.good} text="good"/>
      <Display counter={props.neutral} text="neutral"/>
      <Display counter={props.bad} text="bad"/>
      <Statistics option={"all"} good={props.good} neutral={props.neutral} bad={props.bad}/>
      <Statistics option={"average"} good={props.good} neutral={props.neutral} bad={props.bad}/>
      <Statistics option={"positive"} good={props.good} neutral={props.neutral} bad={props.bad}/>
      </div>
    )
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
      <Collected good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App