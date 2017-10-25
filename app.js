const fs = require("fs");

const FFFPageService = require('./services/https/FFFPage.service');
const FFFParsingService = require('./services/parsing/FFFParsing.service');

const lastWeekEndResultsFileName = "lastWeekEndResults.json";

if (fs.existsSync(lastWeekEndResultsFileName)) {
  console.log("The resultats of last weekend have already been fetched");
  // Let's check and get missing scores
  // Building array of promises
  let lastWeekEndResults = JSON.parse(fs.readFileSync(lastWeekEndResultsFileName));
} else {
  console.log("Getting the results page");
  FFFPageService.getHtmlPage('/la-vie-des-clubs/169290/resultats').then((html) => {
    let results = FFFParsingService.parseResultsOfLastWeekEnd(html);
    if (results && results.length > 0) {
      console.log("Persisting the results");
      fs.writeFileSync(lastWeekEndResultsFileName, JSON.stringify(results));
    } else {
      console.log("Nothing to persist now");
    }
  }).catch((error) => {
    console.log(error);
  });
}