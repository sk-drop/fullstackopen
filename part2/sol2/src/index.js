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
  const allparts = course.parts.length;
  const jsxparts = [];
  var j;
  
  for (j=0; j < allparts; j++) {
      jsxparts.push(<Part part={course.parts[j]} key={j}/>)
    }

  return <div>{jsxparts}</div>
}

const Courses = ({courses}) => {
  const allcourses = courses.length;
  const jsxcourses = []
  var i;

  for (i=0;i<allcourses;i++){
    jsxcourses.push(<div> 
                        <Header course={courses[i]} key={i/9}/>
                        <Content course={courses[i]} key={(i/9)+1}/>
                        <Total parts={courses[i].parts} key={(i/9)+2}/>
                    </div>)
  }
  return(
    <div>{jsxcourses}</div>
  )
}


const App = () => {

  const courses = [
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
    <Courses courses={courses}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

