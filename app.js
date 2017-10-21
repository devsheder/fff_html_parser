const https = require('https');
const parse5 = require('parse5');

var options = {
    host: 'www.fff.fr',
    method: 'GET',
    path:'/la-vie-des-clubs/169290/resultats',
    headers: {
        "User-Agent" : "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:16.0) Gecko/20100101 Firefox/16.0 FirePHP/0.6"
    }
};

let htmlData = "";
https.get(options, (res) => {

  res.on('data', (d) => {
    htmlData += d;
  });

  res.on('end', () => {
    let parseResult = parse5.parse(htmlData);
  });

}).on('error', (e) => {
  console.error(e);
});