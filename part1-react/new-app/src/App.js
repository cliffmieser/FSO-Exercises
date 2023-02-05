const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
  
}

const Content = ({parts}) =>{
  //recieved the array 'parts' via destructuring
  console.log(parts); //1st log
  return(
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises}/>
      <Part name={parts[1].name} exercises={parts[1].exercises}/>
      <Part name={parts[2].name} exercises={parts[2].exercises}/>
    </div>
  )
}


const Part = (prop) =>{
  console.log(prop); //2nd log (prop object with properties 'name' and 'exercises')
  return(
    <p>{prop.name} {prop.exercises}</p>
  ) 

}


const Total = (props) =>{
  return (
    <p>Total number of exercises: {props.total}</p>
  )
}



const App = () => {
  //const definations
  const course = "Half Stack app development";
  const parts = [
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

 
  
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises;

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total total={total}/>
     

    </div>
  )
}


export default App;