
function getNytimes(){
  fetch("http://www.nytimes.com/").then(function(res){
    return res.text();
  }).then(function(text){
    console.log(text);
  })
}

function getFiveNews(){
  console.time("function1");

  let urls = ["http://www.nytimes.com/","https://www.cnn.com/",
  "http://www.latimes.com/","https://www.wsj.com/","https://www.washingtonpost.com/"];

  let promises = [fetch(urls[0]), fetch(urls[1]), fetch(urls[2]), fetch(urls[3]),
                  fetch(urls[4])];

  Promise.all(promises).then(function(values){
    return(Promise.all([values[0].text(), values[1].text(), values[2].text(),
    values[3].text(), values[4].text()]));})
      .then(function(texts){
    console.log(texts[0] + texts[1] + texts[2] + texts[3] + texts[4]);
    console.timeEnd("function1");
  });

}


function getFastest(){
  console.time("function2");

  let urls = ["http://www.nytimes.com/","https://www.cnn.com/",
  "http://www.latimes.com/","https://www.wsj.com/","https://www.washingtonpost.com/"];

  let promises = [fetch(urls[0]), fetch(urls[1]), fetch(urls[2]), fetch(urls[3]),
                  fetch(urls[4])];
  Promise.race(promises).then(function(value){
    return value.text();})
    .then(function(text){
      console.log(text);
      console.timeEnd("function2");
    });
}

function getOneAtATime(){
  console.time("function3");

  fetch("http://www.nytimes.com/").then(res => {
    fetch("https://www.cnn.com/").then(res => {
      fetch("http://www.latimes.com/").then(res => {
        fetch("https://www.wsj.com/").then(res => {
          fetch("https://www.washingtonpost.com/").then(function(res){
            return res.text();
          }).then(function(text){
            console.log(text);
            console.timeEnd("function3");
          });
        });
      });
    });
  });
}

getFiveNews();
getFastest();
getOneAtATime();

//I noticed that the second function executed faster than the other two.


function waitToExecute(time, func){
  setTimeout(func, time);
}

var promise = new Promise(function(resolve, reject){
  setTimeout(resolve, 4000);
});
