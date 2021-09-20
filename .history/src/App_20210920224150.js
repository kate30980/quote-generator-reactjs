import React, { useState, useEffect } from "react";
import Quotes from "./components/Quotes";

function App() {
  return (
    <div className="App">
      <Quotes />
      <button>Generate Quotes</button>
    </div>
  );
}

export default App;
