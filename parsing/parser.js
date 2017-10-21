const cheerio = require('cheerio');
const html = require("fs").readFileSync("page.html").toString();
$ = cheerio.load(html);

/**
 * Reprents a football math restult
 */
class MatchResult {
    /**
     * Constructor
     * @param {String} label 
     * @param {String} homeTeamName
     * @param {String} homeTeamScoreUrl
     * @param {String} awayTeamName
     * @param {String} awayTeamScoreUrl
     */
    constructor(label, homeTeamName, homeTeamScoreUrl, awayTeamName, awayTeamScoreUrl) {
        this.label = label;
        this.homeTeamName = homeTeamName;
        this.homeTeamScoreUrl = homeTeamScoreUrl;
        this.awayTeamName = awayTeamName;
        this.awayTeamScoreUrl = awayTeamScoreUrl;
    }
}

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
    $(resultBlock).find('.score').each((index, score) => {
        let imgsScore = $(score).find('img');
        if (imgsScore[0]) {
            result.homeTeamScoreUrl = $(imgsScore[0]).attr('src');
            if (result.homeTeamScoreUrl.indexOf("http:") < 0) {
                result.homeTeamScoreUrl = "http:" + result.homeTeamScoreUrl;
            }
        }
        if (imgsScore[1]) {
            result.awayTeamScoreUrl = $(imgsScore[1]).attr('src');
            if (result.awayTeamScoreUrl.indexOf("http:") < 0) {
                result.awayTeamScoreUrl = "http:" + result.awayTeamScoreUrl;
            }
        }
    });
    results.push(result);
});