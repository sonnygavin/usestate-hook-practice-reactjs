import React from "react";

function App() {
  const time = new Date().toLocaleTimeString();
  const [newTime, refreshTime] = React.useState(time);

  setInterval(getTime, 1000);

  function getTime() {
    const time = new Date().toLocaleTimeString();
    refreshTime(time);
  }

  return (
    <div className="container">
      <h1>{newTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
