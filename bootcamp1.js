//#0
function getNY() {

  final = fetch("https://www.nytimes.com").then(function(res){
      return res.text();
  }).then(function(d){
    console.log(d);
  })

  //return final;
}
//getNY();

//#1
htmlString = "";

//Promises
promise1 = fetch("https://www.nytimes.com").then(function(res){
    return res.text();
}).then(function(d){
  htmlString += d;
})

promise2 = fetch("https://abcnews.go.com/").then(function(res){
    return res.text();
}).then(function(d){
    htmlString += d;
})

promise3 = fetch("https://www.nbcnews.com/").then(function(res){
    return res.text();
}).then(function(d){
    htmlString += d;
})

promise4 = fetch("http://www.bbc.com/news").then(function(res){
    return res.text();
}).then(function(d){
    htmlString += d;
})

promise5 = fetch("http://www.foxnews.com/").then(function(res){
    return res.text();
}).then(function(d){
    htmlString += d;
})

function getString(){
  Promise.all([promise1, promise2, promise3,promise4,promise5]).then(function(values) {
    console.log(htmlString);
  });

}

//getString();

//#2
raceString = "";

promise1 = fetch("https://www.nytimes.com").then(function(res){
    return res.text();
}).then(function(d){
  raceString += d;
})

promise2 = fetch("https://abcnews.go.com/").then(function(res){
    return res.text();
}).then(function(d){
    raceString += d;
})

promise3 = fetch("https://www.nbcnews.com/").then(function(res){
    return res.text();
}).then(function(d){
    raceString += d;
})

promise4 = fetch("http://www.bbc.com/news").then(function(res){
    return res.text();
}).then(function(d){
    raceString += d;
})

promise5 = fetch("http://www.foxnews.com/").then(function(res){
    return res.text();
}).then(function(d){
    raceString += d;
})

function raceProm(){
  Promise.race([promise1, promise2, promise3,promise4,promise5]).then(function(values) {
    console.log(raceString);
  });

}

//raceProm();

//#3
function seqFetch() {

  fetch("https://www.nytimes.com").then(function(res){
      return res.text();
  }).then(function(d){
    console.log(d);
  }).then(fetch("https://abcnews.go.com/").then(function(res){
      return res.text();
  }).then(function(d){
    console.log(d);
  }).then(fetch("https://www.nbcnews.com/").then(function(res){
      return res.text();
  }).then(function(d){
    console.log(d);
  }).then(fetch("https://www.bbc.com/news").then(function(res){
      return res.text();
  }).then(function(d){
    console.log(d);
  }).then(fetch("https://www.foxnews.com").then(function(res){
      return res.text();
  }).then(function(d){
    console.log(d);
  })))))

  //return final;
}
//seqFetch();

//Part 2
//#1
console.time("number1");
getString();
console.timeEnd("number1");

console.time("number2");
raceProm();
console.timeEnd("number2");

console.time("number3");
seqFetch();
console.timeEnd("number3");

//#2
boom = () => {console.log("Explosion")};
function waitBack(n){
  setTimeout(function(){ boom(); }, n);

}

waitBack(5000);

//#3

var res4000 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 4000, 'Lolz');
});
