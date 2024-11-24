import React, { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Vitorio");
  return (
    <div>
      <h1>Olá mundo</h1>
      
      <p>{message}</p>
      <button style={{backgroundColor: "red", color: "white", padding: 10}} onClick={() => setMessage("Correa")}>mudar msg</button>
    </div>
  );
}

export default App;
