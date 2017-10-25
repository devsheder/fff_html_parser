/**
 * Reprents the score of football math
 */
class Score {
    /**
     * Constructor
     * @param {String} homeTeamScoreUrl
     * @param {String} awayTeamScoreUrl
     */
    constructor(homeTeamScore, awayTeamScore) {
        this.homeTeamScore = homeTeamScore;
        this.awayTeamScore = awayTeamScore;
    }
}

module.exports = Score;