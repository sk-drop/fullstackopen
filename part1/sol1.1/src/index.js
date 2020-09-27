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

const App = () => {
  const course = {
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
      <Header course={course.name}/>
      <Content part1={course.parts[0][0]} part2={course.parts[1][0]} part3={course.parts[2][0]}
      exercises1={course.parts[0][1]} exercises2={course.parts[1][1]} exercises3={course.parts[2][1]} />
      <Total exercises1={course.parts[0][1]} exercises2={course.parts[1][1]} exercises3={course.parts[2][1]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))