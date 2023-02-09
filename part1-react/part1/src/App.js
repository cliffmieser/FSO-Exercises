import { useState } from 'react'


// const Display = ({ counter }) => <div>{counter}</div>
// const Button = ({ onClick, text}) => <button onClick={onClick}>{text}</button>

const History = ({allClicks}) =>{
  if (allClicks.length === 0){
    return(
      <div>
        This app is used by pressing the buttons
      </div>
    )
  }

  return(
    <div>
      button press history: {allClicks.join(' ')}
    </div>
  )
}

//Button component
const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)



function App(){
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const [value, setValue] = useState(10);


  const setZero = () =>{
    //sets left and right properties to 0
    //set array to []
    setLeft(0);
    setRight(0);
    setAll([]);
  }

  const handleLeftClick = () => {
    //if allClicks length greater than or equal to 20
    //set the array to []
    if(allClicks.length >= 20){
      setAll([]);
    } else{ 
      setAll(allClicks.concat('L'));
      setLeft(left + 1);
    }
    
  }

  const handleRightClick = () => {
    if(allClicks.length >= 20){
      //if allClicks length greater than or equal to 20
      //set the array to []
      setAll([]);
    } else{
      setAll(allClicks.concat('R'));
      setRight(right + 1);
    }
    
  }

  //a fucntion that returns a function
  const hello = () => {
    const handler = () => console.log('hello world');
    return handler;
  }

  const handleClick = () =>{
    setValue(0);
    console.log('button clicked');
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left'/>
      <Button handleClick={setZero} text='zero'/>
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks}/>
      {value}
      <button onClick={hello()}>button</button>
    </div>
  )
}

export default App 