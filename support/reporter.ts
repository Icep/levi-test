let reporter = require("cucumberjs-allure-reporter");
let fs = require("fs");
let mkdirp = require("mkdirp");
let xmlReports = process.cwd() + "/reports/xml";

let createXmlDir = (function() {
  if (!fs.existsSync(xmlReports)) {
    mkdirp.sync(xmlReports);
  }
})();

reporter.config({
  targetDir: xmlReports
});
module.exports = reporter;