const express = require('express')
const puppeteer = require("puppeteer-core");
const app = express()
const {executablePath} = require('puppeteer-core')
app.all('/', async (req, res) => {
let options = {headless: true,
    args: [
      "--no-sandbox",
      "--disable-gpu",
      '--disable-setuid-sandbox'
    ],
    ignoreDefaultArgs: ['--disable-extensions']};
   try {
    let browser = await puppeteer.launch(options);

    let page = await browser.newPage();
    await page.goto("https://www.google.com");
    res.send(await page.title());
  } catch (err) {
    console.error(err);
    return null;
  }
})
app.listen(process.env.PORT || 3000)
