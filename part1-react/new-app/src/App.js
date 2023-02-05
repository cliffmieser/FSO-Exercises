const Header = ({course}) => {
  return(
    <h1>{course}</h1>
  )
  
}

const Content = ( {parts} ) =>{
  //recieved the array 'parts' via destructuring
  return(
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises}/>
      <Part name={parts[1].name} exercises={parts[1].exercises}/>
      <Part name={parts[2].name} exercises={parts[2].exercises}/>
    </div>
  )
}


const Part = ({ name, exercises }) =>{
  return(
    <p>{name} {exercises}</p>
  ) 

}


const Total = (props) =>{
  return (
    <p>Total number of exercises: {props.total}</p>
  )
}



const App = () => {
  //const definations
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
   
  const total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises;
  console.log(`total is ${total} and the type is ${typeof(total)}`);

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total total={total}/>
     

    </div>
  )
}


export default App;