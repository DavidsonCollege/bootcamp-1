function getNYTimes(){
    fetch("https://www.nytimes.com/").then(function(res){
        return res.text();
      }).then(function(r){
          console.log("response:", r);
      });
}

function fetchNews(name){
    return fetch(name).then(res => { return res.text();
  });
}

function fetchFive(){
    let p1 = fetchNews("https://www.nytimes.com/");
    let p2 = fetchNews("http://www.foxnews.com/");
    let p3 = fetchNews("http://www.bbc.com/");
    let p4 = fetchNews("http://www.dw.com/");
    let p5 = fetchNews("https://www.cnn.com/");
    Promise.all([p1,p2,p3,p4,p5]).then(r => { console.log(r);
    });
}

function fetchFive2(){
    let p1 = fetchNews("https://www.nytimes.com/");
    let p2 = fetchNews("http://www.foxnews.com/");
    let p3 = fetchNews("http://www.bbc.com/");
    let p4 = fetchNews("http://www.dw.com/");
    let p5 = fetchNews("https://www.cnn.com/");
    Promise.race([p1,p2,p3,p4,p5]).then(r => { console.log(r);
    });
}

function fetchFive3(){
  fetch("https://www.nytimes.com/").then(
    fetch("http://www.foxnews.com/")).then(
      fetch("http://www.bbc.com/")).then(
          fetch("http://www.dw.com/")).then(
            fetch("https://www.cnn.com/"))
            .then(res => { return res.text();
            }).then(r => { console.log(r);});
}

function timing(){
  console.time("1");
  fetchFive();
  console.timeEnd("1");
  console.time("2");
  fetchFive2();
  console.timeEnd("2");
  console.time("3");
  fetchFive3();
  console.timeEnd("3");
}
/*
var time() = function(time){

}
*/

function tm(time, func){
  setTimeout(func(), time);
}

var prom = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000);
});
