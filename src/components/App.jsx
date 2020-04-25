import React, { useState } from "react";

//Challenge:

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

function App() {
  setInterval(displayTime, 1000);

  //1. Given that you can get the current time using:
  let now = new Date().toLocaleTimeString();

  //Show the latest time in the <h1> when the Get Time button
  //is pressed.
  const [time, setTime] = useState(now);

  function displayTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      {/* <button onClick={displayTime}>Get Time</button> */}
    </div>
  );
}

export default App;
