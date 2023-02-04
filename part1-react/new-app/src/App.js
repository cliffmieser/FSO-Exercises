const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
  
}

const Content = (props) =>{
  return(
    <div>
      <p>{props.parts[0].part1} {props.parts[0].exercises1}</p>
      <p>{props.parts[1].part2} {props.parts[1].exercises2}</p>
      <p>{props.parts[2].part3} {props.parts[2].exercises3}</p>
      
    </div>
  )
  
const Part = (props) =>{
  
}


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
  console.log(total);

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total total={total}/>
     

    </div>
  )
}


export default App;