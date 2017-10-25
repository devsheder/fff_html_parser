const fs = require("fs");
const cheerio = require('cheerio');
const MatchResult = require("./MatchResult")

module.exports = {
    /**
     * Parse the html to get results array of the last weekend
     * @param {String} html the html to parse
     * @returns {Array} Array of MatchResult objects
     */
    parseResultsOfLastWeekEnd: function(html) {
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

            // Score
            if ($(resultBlock).find('.score > img').length > 0) {
                // The score is set, let's go get it on "En savoir plus" page
                result.matchUrl = $('.more-infos-game').attr("href");
            }

            results.push(result);
        });
        
        return results;
    }
}