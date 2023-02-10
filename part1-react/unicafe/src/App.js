import { useState } from 'react'

//button component
const Button = ({ handleRating, text }) => (
  <button onClick={handleRating}>
    {text}
  </button>
)

//handle button coomponent


function App() {
  //save clicks of each button to it's own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //function definitions
  const handleGood = () => {
    //click on good increases count for good rating
    setGood(good + 1);
    console.log(`Good total: ${good}`);
  }

  const handleNeutral = () => {
    //click on good increases count for good rating
    setNeutral(neutral + 1);
    console.log(`neutral total: ${neutral}`);
  }

  const handleBad = () => {
    //click on good increases count for good rating
    setBad(bad + 1);
    console.log(`bad total: ${bad}`);
  }
  
  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleRating={handleGood} text='good' />
      <Button handleRating={handleNeutral} text='neutral' />
      <Button handleRating={handleBad} text='bad' />
      <h3>Statistics</h3>

      
    </div>
  );
}

export default App;
