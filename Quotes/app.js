"use strict";

const getQuote = async function () {
  let response = await fetch("https://type.fit/api/quotes", { method: "GET" });
  let quotes = await response.json();
  console.log(quotes);
  let indexQuote = Math.floor(Math.random() * quotes.length);
  let quote = quotes[indexQuote];
  console.log(quote);
  return {
    text: quote.text,
    author: quote.author,
  };
};
const quote1 = getQuote()
  .then((quote) => {
    console.log(quote);
  })
  .catch((error) => {
    console.log(error);
  });
