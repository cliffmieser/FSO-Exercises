const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
  
}

const Content = (props) =>{
  //props now equals the parts array
  return(
    <div>
      <Part name={props.parts[0].part1} exercise={props.parts[0].exercises1}/>
      <Part name={props.parts[1].part2} exercise={props.parts[1].exercises2}/>
      <Part name={props.parts[2].part3} exercise={props.parts[2].exercises3}/>

    </div>
  )
}

const Part = (prop) =>{
  return(
    <p>{prop.name} {prop.exercise}</p>
  )

}


const Total = (props) =>{
  return (
    <p>Total number of exercises: {props.total}</p>
  )
}



const App = () =>{
  //const definations
  const course = "Half Stack app development";
  const parts = [
    {part1: 'Fundamentals of React', exercises1: 10},
    {part2: 'Useing props to pass data', exercises2: 7},
    {part3: 'State of a component', exercises3: 14},
  ]
  
  const total = parts[0].exercises1 + parts[1].exercises2 + parts[2].exercises3;

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total total={total}/>
     

    </div>
  )
}


export default App;