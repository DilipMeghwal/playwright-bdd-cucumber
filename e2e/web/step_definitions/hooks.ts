import { Given, When, Then, 
    BeforeAll, AfterAll, Before, 
    After, BeforeStep, AfterStep, 
    setDefaultTimeout } from "@cucumber/cucumber";
const playwright = require('playwright');

setDefaultTimeout(process.env.PWDEBUG ? -1 : 60 * 1000);
let browser:any;

BeforeAll(async function () {
    console.log("before all")
    browser = await playwright.chromium.launch({
        headless: false,
    });
});

AfterAll(async function () {
    console.log("after all")
    await browser.close();
});

Before(async function () {
    console.log("before")
    const context = await browser.newContext();
    this.page = await context.newPage();
    await this.page.goto("https://www.google.com");
});

After(async function () {
    console.log("after")
    await this.page.close();
});

BeforeStep(async function () {
    console.log("before step")
});

AfterStep(async function ({ result }) {
    console.log("after step")
    const image = await this.page?.screenshot();
    // if (result.status === Status.FAILED) {
    //     await browser.takeScreenshot();
    // }
    image && (await this.attach(image, 'image/png'));
});