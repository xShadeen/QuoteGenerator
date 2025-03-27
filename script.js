const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotesFromApi = [];
let errorCounter = 0;

function showLoader() {
  quoteContainer.hidden = true;
  loader.hidden = false;
}

function hideLoader() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// Show New Quote
function showNewQuote() {
  // Pick a random quote from apiQuotes array or localQuotes array if API fails
  let quote;
  if (apiQuotesFromApi.length > 0) {
    quote =
      apiQuotesFromApi[Math.floor(Math.random() * apiQuotesFromApi.length)];
  } else {
    quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  }

  // Check if Author field is blank and replace it with 'Unknown'
  authorText.textContent = quote.author || "Unknown";

  // Check Quote length to determine styling
  quoteText.textContent = quote.text;
  quoteText.classList.toggle("long-quote", quote.text.length > 100);

  hideLoader();
}

async function getQuotesFromAPI() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    showLoader();
    if (!response.ok) {
      throw new Error("Failed to fetch quotes from API");
    }
    apiQuotesFromApi = await response.json();
    showNewQuote();
  } catch (error) {
    errorCounter++;
    console.error("API failed, using local quotes: ", error);
    if (errorCounter <= 3) {
      return getQuotesFromAPI();
    }
  } finally {
    showNewQuote();
  }
}

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Event Listeners
newQuoteBtn.addEventListener("click", showNewQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
getQuotesFromAPI();
