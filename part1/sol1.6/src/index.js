import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  // save clicks of each button to own state

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick = {() => setGood(good+1)}> good </button>
      <button onClick = {() => setNeutral(neutral+1)}> neutral </button>
      <button onClick = {() => setBad(bad+1)}> bad </button>
      <h2>statistics</h2>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {good+neutral+bad}</p>
      <p>average: {(good+neutral+bad)/2}</p>
      <p>positive: {(good/(neutral+bad+good))*100}%</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
