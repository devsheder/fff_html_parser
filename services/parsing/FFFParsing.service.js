const fs = require("fs");
const cheerio = require('cheerio');
const MatchResult = require("./MatchResult");
const Score = require("./Score");
const scoreSeparator = '-';

module.exports = {
    /**
     * Parse the html to get results array of the last weekend
     * @param {String} html the html to parse
     * @returns {Array} Array of MatchResult objects or empty array
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
    },

    /**
     * Parse the html to get the score of a match
     * @param {String} html the html to parse
     * @returns {Score} score of the match or null
     */
    parseMatchScore: function(html) {
        $ = cheerio.load(html);

        let scoreText = $('.score-match-details').text();
        let score = null;

        if (scoreText && scoreText.indexOf(scoreSeparator) >= 0) {
            let splitScore = scoreText.trim().split(scoreSeparator);
            score = new Score(splitScore[0], splitScore[1]);
        }
        
        return score;
    }
}