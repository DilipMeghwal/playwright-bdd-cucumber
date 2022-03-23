import { Given, When, Then } from "@cucumber/cucumber";
const playwright = require('playwright');


Given("Bob opens Manabie website", { timeout: 60 * 1000 }, async function () {
    //await this.openUrl('http://manabie.com/');
    // const browser = await playwright.chromium.launch({
    //     headless: false,
    // });
    // const context = await browser.newContext();
    // this.page = await context.newPage();
    // await this.page.goto("https://www.google.com");
});

When("Bob goes to Careers section", async function () {
    await this.page.click('text=Careers');
});

Then("Bob sees all job openings at Manabie", async function () {
    await this.page.click('text=View Openings');
    await this.page.waitForSelector('text=Our Openings');
});