import React from "react";

function Quotes({ quote }) {
  return (
    <div className="quote">
      <div className="anime" title={quote.anime}>
        {quote.anime}
        Naruto
      </div>

      <blockquote>
        Wake up to the reality! Nothing ever goes as planned in this world. The
        longer you live, the more you realize that in this reality only pain,
        suffering and futility exist.
      </blockquote>

      <div className="character" title="Madara">
        Madara
      </div>
    </div>
  );
}

export default Quotes;
