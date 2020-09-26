import React from 'react'
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
      <p>
        {x.part1} {x.exercises1}
      </p>
      <p>
        {x.part2} {x.exercises2}
      </p>
      <p>
        {x.part3} {x.exercises3}
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

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1}
      exercises2={exercises2} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))