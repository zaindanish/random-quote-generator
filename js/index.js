
var quotes = [
    {
	"quotedesc": "Whatever the mind of man can conceive and believe, it can achieve.",
	"quoteby": "Napoleon Hill"
},
{
	"quotedesc": "Strive not to be a success, but rather to be of value.",
	"quoteby": "Albert Einstein"
},
{
	"quotedesc": "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
	"quoteby": "Robert Frost"
},
{
	"quotedesc": "I attribute my success to this: I never gave or took any excuse.",
	"quoteby":  "Florence Nightingale"
},
{
	"quotedesc": "You miss 100% of the shots you don’t take.",
	"quoteby": "Wayne Gretzky"
},
{
	"quotedesc": "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed. ",
	"quoteby": "Michael Jordan"
},
{
	"quotedesc": "The most difficult thing is the decision to act, the rest is merely tenacity.",
	"quoteby": "Amelia Earhart"
},
{
	"quotedesc": "Every strike brings me closer to the next home run.",
	"quoteby": "Babe Ruth"
},
{
	"quotedesc": "Definiteness of purpose is the starting point of all achievement.",
	"quoteby": "W. Clement Stone"
},
{
	"quotedesc": "Life isn't about getting and having, it's about giving and being. ",
	"quoteby": "Kevin Kruse"
},
{
	"quotedesc": "Life is what happens to you while you’re busy making other plans",
	"quoteby": "John Lennon"
},
{
	"quotedesc": "We become what we think about. ",
	"quoteby": "Earl Nightingale"
},
{
	"quotedesc": "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
	"quoteby": "Mark Twain"
},
{
	"quotedesc": "Life is 10% what happens to me and 90% of how I react to it. ",
	"quoteby": "Charles Swindoll"
},
{
	"quotedesc": "The most common way people give up their power is by thinking they don’t have any.",
	"quoteby": "Alice Walker"
},
{
	"quotedesc": "The mind is everything. What you think you become.  ",
	"quoteby": "Buddha"
},
{
	"quotedesc": "The best time to plant a tree was 20 years ago. The second best time is now.",
	"quoteby": "Chinese Proverb"
},
{
	"quotedesc": "An unexamined life is not worth living.",
	"quoteby": "Socrates"
},
{
	"quotedesc": "Eighty percent of success is showing up.",
	"quoteby": "Woody Allen"
},
{
	"quotedesc": "Your time is limited, so don’t waste it living someone else’s life. ",
	"quoteby": "Steve Jobs"
}
];

function randomRange(myMin, myMax) {
  return Math.floor(Math.random()*(myMax - myMin + 1)) + myMin; // Change this line
}


document.getElementById("myBtn").addEventListener("click", function(){
    var myRandom = randomRange(0, 19);
    var by="- "+quotes[myRandom].quoteby;
    
    document.getElementById("quote").innerHTML = quotes[myRandom].quotedesc;
    document.getElementById("by").innerHTML = by;
});