// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

 // array of quote objects
var quotes = [
{
  quote: "The only source of knowledge is experience.",
  source: "Albert Einstein",
  citation: "German Theoretical-Physicist",
  year: "1879"
},
{
  quote: "Create the future of education so I can change as many lives as possible.",
  source: "Ryan Carson",
  citation: "twitter.com",
  year: "2017"
},
{
  quote: "If you don't find a way to make money while you sleep, you will work until you die.",
  source: "Warren Buffett",
  citation: "azquotes.com",
  year: ""
},
{
  quote: "I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.",
  source: "Bill Gates",
  citation: "geckoandfly.com",
  year: ""
},
{
  quote: "Maybe they hate me because I'm too good.",
  source: "Cristiano Ronaldo",
  citation: "successsStory.com",
  year: ""
},
{
  quote: "I'm not talented, I'm obsessed.",
  source: "Conor McGregor",
  citation: "twitter.com"
  year: ""
}
];

function getRandomQuote(){
 var randomQuote = Math.floor(Math.random() * (quotes.length));
 return quotes[randomQuote];
}

function printQuote(){
 var display='';
 var randomQuote = getRandomQuote();

 display = '<p class="quote">' + randomQuote.quote + '</p>';
 display += '<p class="source">' + randomQuote.source;
 display += '<span class="citation">' + randomQuote.citation + '</span>';
 display += '<span class="year">' + randomQuote.year + '</span>'
 display += '</p>';

document.getElementById('quote-box').innerHTML = display;
};
