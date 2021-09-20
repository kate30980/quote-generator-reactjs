import React, { useState, useEffect } from "react";
import Quotes from "./components/Quotes";

function App() {
  const [quote, setQuote] = useState({
    anime: null,
    character: null,
    quote: null,
  });
  return (
    <div className="App">
      <Quotes />
      <button>Generate Quotes</button>
    </div>
  );
}

export default App;
