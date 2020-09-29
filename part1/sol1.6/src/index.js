import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {return(<tr><td>{props.text}:</td><td>{props.value}</td></tr>)}

const Statistics = (props) => {
  return(
    <div>
      <h2>statistics</h2>
      <table>
      <tbody>
      <Statistic text="good" value={props.g}/>
      <Statistic text="neutral" value={props.n}/>
      <Statistic text="bad" value={props.b}/>
      <Statistic text="all" value={props.all}/>
      <Statistic text="average" value={props.ave}/>
      <Statistic text="positive" value={props.pos+"%"}/>
      </tbody>
      </table>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick = {props.handler}>
      {props.text}
    </button>
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
    if (feedback) {
      return(
      <Statistics g = {good} n = {neutral} b ={bad} all = {good+bad+neutral}
      ave = {(good-bad)/(good+bad)} pos = {(good/(good+bad))*100}/>
      )
    } else {return(<p>no feedback given</p>)}
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handler={()=> setGood(good+1)} text="good"/>
      <Button handler={() => setNeutral(neutral+1)} text="neutral"/>
      <Button handler={() => setBad(bad+1)} text="bad"/>
      <Button handler={() => reset()} text="reset"/>
      <div>{show()}</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
