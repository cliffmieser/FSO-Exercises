import { useState } from 'react'

//button component
const Button = ({ handleRating, text }) => (
  <button onClick={handleRating}>
    {text}
  </button>
)

//handle Statistics component
const Statistics = ( {showStat, text} ) => {
  return( 
    <p><b>{text}:</b> {showStat}</p>
  )
}


function App() {
  //save clicks of each button to it's own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState([]);

  //function definitions
  const handleGood = () => {
    //click on good increases count for good rating
    setAll(allClicks.concat('good'));
    setGood(good + 1);
    console.log(`Good total: ${good}`);
  }

  const handleNeutral = () => {
    //click on this increases count for this rating
    setAll(allClicks.concat('neutral'));
    setNeutral(neutral + 1);
    console.log(`neutral total: ${neutral}`);
  }

  const handleBad = () => {
    //click on this increases count for this rating
    setAll(allClicks.concat('bad'));
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
      <Statistics showStat={good} text='good'/>
      <Statistics showStat={neutral} text='neutral'/>
      <Statistics showStat={bad}  text='bad'/>

      
    </div>
  );
}

export default App;
