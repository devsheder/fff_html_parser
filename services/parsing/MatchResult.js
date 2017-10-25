/**
 * Reprents a football math result
 */
class MatchResult {
    /**
     * Constructor
     * @param {String} label 
     * @param {String} homeTeamName
     * @param {String} awayTeamName
     * @param {String} matchUrl
     * @param {Score} score
     */
    constructor(label, homeTeamName, awayTeamName, matchUrl, score) {
        this.label = label;
        this.homeTeamName = homeTeamName;
        this.awayTeamName = awayTeamName;
        this.matchUrl = matchUrl;
        this.score = score;
    }
}

module.exports = MatchResult;