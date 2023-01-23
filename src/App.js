import "./App.css";

import React, { useState } from "react";
import { getbyauthor, randomQuote } from "randomquote-api";

import AuthorDisplay from "./Author/AuthorDisplay";
import QuotesDisplay from "./Quotes/QuotesDisplay";
import RandomBtn from "./Button/RandomBtn";

function App() {
  const [currentQuote, setCurrenteQuote] = useState(randomQuote());
  const [authorQuotes, setAuthorQuotes] = useState([]);
  const handleRandomQuote = () => {
    setCurrenteQuote(randomQuote());
  };
  const handleAuthorQuotes = (name) => {
    setAuthorQuotes(getbyauthor(name, 6));
  };
  console.log(currentQuote.author);
  return (
    <div className="App">
      <RandomBtn
        handleRandomQuote={handleRandomQuote}
        setAuthorQuotes={setAuthorQuotes}
      />
      <QuotesDisplay currentQuote={currentQuote} authorQuotes={authorQuotes} />
      <AuthorDisplay
        handleAuthorQuotes={handleAuthorQuotes}
        currentQuote={currentQuote}
      />
    </div>
  );
}

export default App;
