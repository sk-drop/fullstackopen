import React from 'react'

const Courses = ({courses}) => {
    const allcourses = courses.length;
    const jsxcourses = []
    var i;
  
    for (i=0;i<allcourses;i++){
      jsxcourses.push(<div key={i/9}> 
                          <Header course={courses[i]} key={(i/9)+1}/>
                          <Content course={courses[i]} key={(i/9)+2}/>
                          <Total parts={courses[i].parts} key={(i/9)+3}/>
                      </div>)
    }
    return(
      <div>{jsxcourses}</div>
    )
}

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

export default Courses