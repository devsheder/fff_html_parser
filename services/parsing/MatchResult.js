/**
 * Reprents a football math result
 */
class MatchResult {
    /**
     * Constructor
     * @param {String} label 
     * @param {String} homeTeamName
     * @param {String} homeTeamScoreUrl
     * @param {String} awayTeamName
     * @param {String} awayTeamScoreUrl
     * @param {String} matchUrl
     */
    constructor(label, homeTeamName, homeTeamScoreUrl, awayTeamName, awayTeamScoreUrl, matchUrl) {
        this.label = label;
        this.homeTeamName = homeTeamName;
        this.homeTeamScoreUrl = homeTeamScoreUrl;
        this.awayTeamName = awayTeamName;
        this.awayTeamScoreUrl = awayTeamScoreUrl;
        this.matchUrl = matchUrl;
    }
}

module.exports = MatchResult;