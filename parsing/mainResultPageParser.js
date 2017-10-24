const fs = require("fs");
const cheerio = require('cheerio');
const html = require("fs").readFileSync("sample.html").toString();
const MatchResult = require("./MatchResult")
$ = cheerio.load(html);

let results = [];
// Browsing the football match resultats
$('.bloc_result').each((index, resultBlock) => {
    // Label of the football match
    let result = new MatchResult();
    result.label = $(resultBlock).children('h4').text().trim();

    // Teams names
    $(resultBlock).find('.eqName').each((index, team) => {
        if (index === 0) {
            result.homeTeamName = $(team).find('a').text().trim(); // OK
        } else if (index === 1) {
            result.awayTeamName = $(team).find('a').text().trim(); // OK
        }
    });

    // Score images
    if ($(resultBlock).find('.score > img').length > 0) {
        // The score is set, let's go get it on "En savoir plus" page
        result.matchUrl = "https://www.fff.fr" + $('.more-infos-game').attr("href");
    }

    results.push(result);
});
fs.writeFileSync("weekEndResults.json", JSON.stringify(results));