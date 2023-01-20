// grabbing button element
let nextQuoteBtn = document.getElementById("nextQuote");
// button event
nextQuoteBtn.addEventListener("click", displayQuotes);
nextQuoteBtn.addEventListener("click", displayNextQuote);

function displayQuotes() {
  // grabbing paragraph element by id where quote will be displayed
  let quotesDisplayArea = document.getElementById("displayApiDataHere");
  let quote = quotes[0];
  let quoteDiv = document.createElement("div");
  quoteDiv.innerHTML = `<div style="font-size: 30px;">${quote.quote}</div> <br><br> <div style="font-style: italic;">${quote.name}</div>`;
  quotesDisplayArea.appendChild(quoteDiv);
}

// get a reference to the element where you want to display the quotes
let quotesDisplayArea = document.getElementById("displayApiDataHere");
// keep track of the current index
let currentIndex = 0;

function displayNextQuote() {
  // clear the quotes display area
  quotesDisplayArea.innerHTML = "";
  // get the quote at the current index
  let quote = quotes[currentIndex];
  // create a new div element for the quote
  let quoteDiv = document.createElement("div");
  // set the innerHTML of the div to the quote and the name of the person who said it
  quoteDiv.innerHTML += `<div style="font-size: 30px;">${quote.quote}</div> <br><br> <div style="font-style: italic;">${quote.name}</div>`;
  // append the quote element to the quotesDisplayArea element
  quotesDisplayArea.appendChild(quoteDiv);
  // increase the index by 1
  currentIndex++;
  // if the current index is equal to the length of the quotes array, reset it to 0
  if (currentIndex === quotes.length) {
    currentIndex = 0;
  }
}
