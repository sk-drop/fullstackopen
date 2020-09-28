import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (x) => {
  return(
    <div>
      <h1>{x.course}</h1>
    </div>
  )
}

const Content = (x) => {
  return(
    <div>
      <Part part={x.part1} exercises={x.exercises1}/>
      <Part part={x.part2} exercises={x.exercises2}/>
      <Part part={x.part3} exercises={x.exercises3}/>
    </div>
  )
}

const Part = (x) => {
  return(
  <div>
      <p>
        {x.part} {x.exercises}
      </p>
  </div>
  )
}

const Total = (x) => {
  return(
    <div>
      <p>Number of exercises {x.exercises1 + x.exercises2 
      + x.exercises3}</p>
    </div>
  )
}

const Display = ({counter}) => <div>no. of secs u wasted ur time: {counter}</div>

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const App = () => {
  const [counter, setCounter] = useState(0)

  setTimeout(
    () => setCounter(counter+1),
    1000
  )

  const increaseByOne = () => setCounter(counter+1)
  const decreaseByOne = () => setCounter(counter-1)
  const setToZero = () => setCounter(0)

  const {name, parts} = {
    name: 'Half Stack application development',
    parts: [ 
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={name}/>
      <Content part1={parts[0].name} part2={parts[1].name} part3={parts[2].name}
      exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises} />
      <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises} />
      <div>
      <Display counter={counter}/>
      <Button handleClick ={increaseByOne} text='++'/>
      <Button handleClick={decreaseByOne} text='--'/>
      <Button handleClick={setToZero} text='Reset'/>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))