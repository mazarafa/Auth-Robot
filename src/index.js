const puppeteer = require('puppeteer');
require('dotenv').config({path:'.env'});

let login = 'https://m.facebook.com';
let user = process.env.USUARIO;
let pass = process.env.SENHA;

(async ()=>{
    let browser = await puppeteer.launch({
        headless:false
    })
    let page = await browser.newPage();
    await page.goto(login);
    await page.waitFor('input[name="email"]');
    await page.type('input[name="email"]', user,{delay:100});
    await page.type('input[name="pass"]', pass,{delay:100});
    await page.keyboard.press(String.fromCharCode(13));
    await page.waitFor('a[target=_self');
    await page.click('a[target=_self');
})();