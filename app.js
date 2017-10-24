const FFFPageService = require('./services/https/FFFPage.service');

FFFPageService.getHtmlPage('/la-vie-des-clubs/169290/resultats').then((html) => {
  console.log(html);
}).catch((error) => {
  console.log(error);
});
