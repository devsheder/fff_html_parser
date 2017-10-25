const fs = require("fs");
const ParsingService = require("../FFFParsing.service");

const resultsHtml = fs.readFileSync("sample.html").toString();
results = ParsingService.parseResultsOfLastWeekEnd(resultsHtml);
console.log(results);

const scoreHtml = fs.readFileSync("sampleScore.html").toString();
score = ParsingService.parseMatchScore(scoreHtml);
console.log(score);