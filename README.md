# QuoteGenerator

![QuoteGenerator Screenshot](./screenshot.png)

A web application that fetches inspirational quotes from an API and displays random quotes with their authors. Includes functionality to tweet the current quote.

## Features ✨

- Fetches quotes from [Quotes API](https://jacintodesign.github.io/quotes-api/data/quotes.json)
- Displays random quotes with author attribution
- Automatically falls back to local quotes if API fails
- Responsive design that works on all devices
- Tweet button that:
  - Pre-populates a tweet with the current quote and author
  - Opens Twitter (X) in a new tab
  - Uses proper Twitter Web Intent syntax
- Loading spinner during API fetch
- Smart quote length detection (applies different styling for long quotes)

## Technologies Used 🛠️

- ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black)
- ![Fetch API](https://img.shields.io/badge/-Fetch_API-FF6B6B?logo=mdnwebdocs&logoColor=white)
- ![Twitter API](https://img.shields.io/badge/-Twitter_Web_Intent-1DA1F2?logo=twitter&logoColor=white)

## Installation 💻

1. Clone the repository:
```bash
git clone https://github.com/xShadeen/QuoteGenerator.git
cd QuoteGenerator
```
2. Open index.html in your browser
   
## Usage 🖱️

- Click "New Quote" button to get random quotes
- Click Twitter icon to share the current quote

## API Documentation ℹ️

The application uses the free public API from:
https://jacintodesign.github.io/quotes-api/data/quotes.json

Sample quote object:
```json
{
  "text": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "author": "Nelson Mandela"
}

