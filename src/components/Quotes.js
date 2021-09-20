import React from "react";

function Quotes({ quote }) {
  return (
    <div className="quote">
      <div className="anime" title={quote.anime}>
        {quote.anime}
        Naruto
      </div>

      <blockquote>{quote.quote}</blockquote>

      <div className="character" title={quote.character}>
        {quote.character}
      </div>
    </div>
  );
}

export default Quotes;
