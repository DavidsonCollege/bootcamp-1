                                                                      var urls = ["https://www.nytimes.com/" , "https://www.cnn.com/ ",
  "https://www.huffingtonpost.com/" ,"https://www.nbc.com/" ,"https://news.google.com/"]
var promises = urls.map(url => fetch(url))


  var text = []

function getNYT() {
  fetch("https://www.nytimes.com/").then(function(res) {return res}).then(function(res){console.log(res.text())})}

getNYT() ;




// Promise.all(
//
function PromiseAll(){
console.time('all')
Promise.all(urls.map(url => fetch(url).then(resp => resp.text()).then( function(res){return(res) console.timeEnd('all')})))}


function PromiseRace(){
console.time('race')
Promise.race(promises).then(function(res) {return res}).then(function(res){console.log(res.text()) console.timeEnd('race')})}


function oneAfter() {
  console.time('after')

  fetch("https://www.nytimes.com/").then(() => {
  fetch("https://www.cnn.com/ ")}).then(() => {
    fetch(  "https://www.huffingtonpost.com/")}).then(()=>
    {fetch("https://www.nbc.com/")}).then(() => {
    fetch("https://news.google.com/")}).then(function(res) {return res}).then(function(res){ console.log(res.text()) console.timeEnd ('after') });}
oneAfter()


function delay(callback(), time) {
  timeoutID = window.setTimeout (callback, time){
}

function promiseDelay() {
  return function() {
    return new Promise(resolve => setTimeout(() => resolve(),4000 )
    });
  }
