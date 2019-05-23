import React, { useState, useEffect } from 'react';

const initialLocationsState = {
  latitude: null,
  longitude: null,
  speed: null

}

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false)
  const [mousePosition, setMousePosition] = useState({x: null, y: null})
  const [status, setStatus] = useState(navigator.onLine)
  const [{latitude, longitude, speed}, setLocation] = useState(initialLocationsState);
  let mounted = true;

  useEffect(()=>{
    document.title = `you a cliked ${count}`
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    navigator.geolocation.getCurrentPosition(handleGeoLocation);
    const watchid = navigator.geolocation.watchPosition(handleGeoLocation)

    return ()=> {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      navigator.geolocation.clearWatch(watchid);
      mounted = false;
    }
  },[count])

  const handleGeoLocation = event => {
    if (mounted) {
      setLocation({
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed
      })
    }
  }

  const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    })
  }

  const handleOnline = () => {
    setStatus(true)
  }
  const handleOffline = () => {
    setStatus(false)
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

      <h2>Network Status </h2>
      <p> you are <strong> {status ? "online": "offline"}</strong></p>

      <h2>Geolocation</h2>
      <p>latitude is {latitude} </p>
      <p>longitude is {longitude} </p>
      <p>speed is {speed ? speed : "0" } </p>

      </>
      )
}


/*function App() {
  return (
    <div> test</div>
  );
}*/

export default App;
