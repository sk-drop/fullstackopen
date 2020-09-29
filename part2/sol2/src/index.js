import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({parts}) => {

  const total = parts.reduce((sum, parts) => sum + parts.exercises, 0)

  return(
    <p><b>Number of exercises: {total}</b></p>
  ) 
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
  )
}

const Content = ({course}) => {
  const allcourses = course.length;
  let allparts = 0;
  const jsxparts = [];
  var i;

  for(i=0;i<allcourses; i++){
    allparts += course[i].parts.length;
  }  
  
  for (i=0; i < allparts; i++) {
    jsxparts.push(<Part part={course.parts[i]} key={i}/>)
  }

  return <div>{jsxparts}</div>
}

const Course = ({course}) => {
  return(
    <div>
    <Header course={course}/>
    <Content course={course}/>
    <Total parts={course.parts}/>
    </div>
  )

}

const App = () => {

  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
    <Course course={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

