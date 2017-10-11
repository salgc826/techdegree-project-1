// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

 // array of quote objects
var quotes = [
{
  quote: "The only source of knowledge is experience.",
  source: "Albert Einstein",
  citation: "German Theoretical-Physicist",
  year: 1879
},
{
  quote: "Create the future of education so I can change as many lives as possible.",
  source: "Ryan Carson",
  citation: "twitter.com",
  year: 2017
},
{
  quote: "If you don't find a way to make money while you sleep, you will work until you die.",
  source: "Warren Buffett",
  citation: "azquotes.com",
},
{
  quote: "I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.",
  source: "Bill Gates",
  citation: "geckoandfly.com",
},
{
  quote: "Maybe they hate me because I'm too good.",
  source: "Cristiano Ronaldo",
  citation: "successsStory.com",
},
{
  quote: "I'm not talented, I'm obsessed.",
  source: "Conor McGregor",
  citation: "twitter.com",
}
];

quotes.length
quotes[0]
quotes[quotes.length - 1]

var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

 Math.floor()

 function getRandomQuote() {
   if(quotes.length === 0) {

    return quotes[Math.floor(Math.random () * quotes.length)]
};

function printQuote() {
  var randomQuote = getRandomQuote();
  var display = "";

  display += '<p class="quote">' + randomQuote.quote </p>;
  display += '<p class="source">' + randomQuote.source
                   <span class="citation"> + randomQuote.citation </span>
                   <span class="year"> + randomQuote.year </span>
              </p>

document.getElementById('quote-box').innerHTML = display;

printQuote();















































];
