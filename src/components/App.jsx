import React, { useState } from "react";

//Challenge:

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);

function App() {
  //1. Given that you can get the current time using:
  let now = new Date().toLocaleTimeString();
  console.log(now);

  //Show the latest time in the <h1> when the Get Time button
  //is pressed.
  const [time, updateTime] = useState("TIME");

  function getNewTime() {
    updateTime(now);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getNewTime}>Get Time</button>
    </div>
  );
}

export default App;
