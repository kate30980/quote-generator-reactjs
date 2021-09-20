import React, { useState, useEffect } from "react";
import Quotes from "./components/Quotes";

function App() {
  const [quote, setQuote] = useState({
    anime: null,
    character: null,
    quote: null,
  });

  const fetchQuote = async () => {
    return await fetch("https://animechan.vercel.app/api/random").then(
      (response) => response.json()
    );
  };
  return (
    <div className="App">
      <Quotes />
      <button>Generate Quotes</button>
    </div>
  );
}

export default App;
