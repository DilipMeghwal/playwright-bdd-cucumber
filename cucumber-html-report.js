const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "output/json-report/",  // ** Path of .json file **//
    reportPath: "output/html-reports/cucumber-html-report.html",
    metadata: {
        browser: {
            name: "chrome",
            version: "81",
        },
        device: "Local test machine",
        platform: {
            name: "mac",
            version: "Catalina",
        },
    },
});