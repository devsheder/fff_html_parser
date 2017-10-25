const fs = require("fs");
const ParsingService = require("../FFFParsing.service");

const html = fs.readFileSync("sample.html").toString();
results = ParsingService.parseResultsOfLastWeekEnd(html);

fs.writeFileSync("weekEndResults.json", JSON.stringify(results));