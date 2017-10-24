const https = require('https');
const parse5 = require('parse5');

module.exports = {
    /**
     * Get the HTML content of a page on https://www.fff.fr/[path]
     * @param {String} path URL path on https://www.fff.fr
     * @returns {Promise}
     */
    getHtmlPage: function(path) {
        let options = {
            host : 'www.fff.fr',
            method : 'GET',
            path : path,
            headers : {
                "User-Agent" : "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:16.0) Gecko/20100101 Firefox/16.0 FirePHP/0.6"
            }
        };
        return new Promise((resolve, reject) => {
            let htmlData = "";
            
            https.get(options, (res) => {
            
              res.on('data', (d) => {
                htmlData += d;
              });
            
              res.on('end', () => {
                resolve(parse5.serialize(parse5.parse(htmlData)));
              });
            
            }).on('error', (e) => {
                reject(e);
            });
        });
    }
}