const fetch = require("node-fetch");

// Exercise 1
// Write a function that fetches the html from https://www.nytimes.com/
// and then writes the return value (which should just be HTML) to the console. (Hint: fetch())
function getNYTimes() {}

// Exercise 2
// Write a function that fetches the HTML from five major news sources all at
// once, then concatenates the HTML from the sites into one long string. (Hint: Promise.all)
function getNewsSources() {}

// Exercise 3
// Write a function that fetches the HTML from five major news sources all at
// once and returns the HTML of the webpage that loads first. (Hint: Promise.race)
function getNewsSourcesRace() {}

// Exercise 4
// Write a function that fetches the HTML from five major news sources one after the other.
function getNewsSourcesSequential() {}

// Exercise 5
// For the previous four functions, use console.time() to benchmark the speed
// of all three promises. What do you notice?
getNYTimes();
getNewsSources();
getNewsSourcesRace();
getNewsSourcesSequential();

// Exercise 6
// Write a function that takes as arguments an arbitrary period of time (in milliseconds)
// and an arbitrary function that it executes after the specified period of time. (This is a callback.)
function executeFunc(time, func) {}
executeFunc(3000, () => console.log("Hello World"));

// Exercise 7
// Write a Promise that resolves after 4000 milliseconds.
function promise4000() {}
promise4000();

// BONUS
// Rewrite Exercise 4 using async/await
async function getNewsSourcesSequentialAwait() {}
getNewsSourcesSequentialAwait()
