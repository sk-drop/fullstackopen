import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  return(
    <div>
      <h2>statistics</h2>
      <p>good: {props.good}</p>
      <p>neutral: {props.neutral}</p>
      <p>bad: {props.bad}</p>
      <p>all: {props.all}</p>
      <p>average: {props.average}</p>
      <p>positive: {props.positive}%</p>
    </div>
  )
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const reset = () => {
    return(
      setGood(0),
      setNeutral(0),
      setBad(0)
    )
  }

  const feedback = ((good+bad+neutral) > 0)

  const show = () => {
    if (feedback) {return(<Statistics good = {good} neutral = {neutral} bad ={bad} all = {good+bad+neutral}
      average = {(good-bad)/(good+bad)} positive = {(good/(good+neutral+bad))*100}/>)}
    else {return(<p>no feedback given</p>)}
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick = {() => setGood(good+1)}> good </button>
      <button onClick = {() => setNeutral(neutral+1)}> neutral </button>
      <button onClick = {() => setBad(bad+1)}> bad </button>
      <button onClick = {() => reset()}> reset </button>
      <p>{show()}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
