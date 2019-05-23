import React, { useState, useEffect } from 'react';


const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false)
  const [mousePosition, setMousePosition] = useState({x: null, y: null})

  useEffect(()=>{
    document.title = `you a cliked ${count}`
    window.addEventListener('mousemove', handleMouseMove)

    return ()=> {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  },[count])

  const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    })
  }


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

      <h2>Mouse postion</h2>
      {JSON.stringify(mousePosition, null, 2)}
      </>
      )
}


/*function App() {
  return (
    <div> test</div>
  );
}*/

export default App;
