import { useState } from 'react'


const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text}) => <button onClick={onClick}>{text}</button>

function App(){
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);


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

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={setZero}>zero</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}

export default App 