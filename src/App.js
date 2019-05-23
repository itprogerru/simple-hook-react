import React, { useState } from 'react';


const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false)
  const incrementCount = () => {
   //setCount(count+1);
    setCount(prevCount=> prevCount+1)
  }

  const toggleLight = () => {
    setIsOn(prevIsOn=> !prevIsOn)
  }

  return (
    <>

    <button onClick={incrementCount}> i was cliced {count} times </button>
      <div onClick={toggleLight}>{isOn ? 'да' : 'нет'}</div>
      </>
      )
}


/*function App() {
  return (
    <div> test</div>
  );
}*/

export default App;
