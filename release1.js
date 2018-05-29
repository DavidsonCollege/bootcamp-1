function getNYT() {
    fetch('https://nytimes.com').then(function (res) {
        return res.text();
    }).then(function (html) {
        console.log(html);
    });
}

function getNews() {
    console.time('t1');
    let all = Promise.all([
        fetch('https://nytimes.com').then(function (res) {
            return res.text();
        }),
        fetch('https://www.washingtonpost.com').then(function (res) {
            return res.text();
        }),
        fetch('https://www.newyorker.com').then(function (res) {
            return res.text();
        }),
        fetch('https://www.wsj.com/').then(function (res) {
            return res.text();
        }),
        fetch('https://www.cnn.com/').then(function (res) {
            return res.text();
        })
    ]).then(function (values) {
        console.log(values.join('\n*****************************\n'));
        console.timeEnd('t1');
    })
}

function fastNews() {
    console.time('t2');
    let all = Promise.race([
        fetch('https://nytimes.com').then(function (res) {
            return res.text();
        }),
        fetch('https://www.washingtonpost.com').then(function (res) {
            return res.text();
        }),
        fetch('https://www.newyorker.com').then(function (res) {
            return res.text();
        }),
        fetch('https://www.wsj.com/').then(function (res) {
            return res.text();
        }),
        fetch('https://www.cnn.com/').then(function (res) {
            return res.text();
        })
    ]).then(function (value) {
        console.timeEnd('t2');
        console.log(value);
    })
}

function orderlyNews() {
    console.time('t3');
    fetch('https://nytimes.com').then((res) => {
        console.log(res.text());
        fetch('https://www.washingtonpost.com').then((res) => {
            console.log(res.text());
            fetch('https://www.newyorker.com').then((res) => {
                console.log(res.text());
                fetch('https://www.wsj.com/').then((res) => {
                    console.log(res.text());
                    fetch('https://www.cnn.com/').then((res) => {
                        console.timeEnd('t3');
                        console.log(res.text());
                    });
                });
            });
        });
    });
}

function executeAfterTime(f, ms) {
    setTimeout(f, ms);
}

let promise = new Promise(function (resolve, reject) {
    setTimeout(resolve, 4000);
});

