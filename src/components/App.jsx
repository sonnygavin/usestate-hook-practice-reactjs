import React from "react";

function App() {
  let time = new Date().toLocaleTimeString();

  const [newTime, refreshTime] = React.useState(0);

  function getTime() {
    refreshTime(time);
  }
  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{newTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
