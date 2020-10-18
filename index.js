const puppeteer = require ('puppeteer');
const fs = require('fs');
const config = require('./config.json');
const cookies = require('./cookies.json');

(async() => {

    let browser = await puppeteer.launch({headless:false});
    let page = await browser.newPage();
   
    if(Object.keys(cookies).length){

        await page.setCookie(...cookies);
    }else{
        
    }

})();