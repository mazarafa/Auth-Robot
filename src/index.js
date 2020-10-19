const puppeteer = require ('puppeteer');
const fs = require('fs');
const config = require('./config.json');
const cookies = require('./cookies.json');

(async() => {

    let browser = await puppeteer.launch({headless:false});
    let page = await browser.newPage();
   
    if(Object.keys(cookies).length){

        await page.setCookie(...cookies);

        await page.goto('https://www.facebook.com/',{waitUntil:'networkidle2'});
    }else{
        await page.goto('https://www.facebook.com/login/',{waitUntil:'networkidle0'});

        await page.type('#email', config.username,{delay:30});
        await page.type('#pass', config.password,{delay:30});


        await page.click("#loginbutton");

        await page.waitForNavigation({waitUntil:'networkidle0'});
        await page.waitFor(15000);

        try{
            await page.waitFor('[data-click="profile_icon"]');
        }catch(error){
            console.log('falhei Mr Robot');
            process.exit(0);

        }

        const currentCookies = await page.cookies();

        fs.writeFileSync('./cookies.json', JSON.stringify(currentCookies));
        
        
    }
    debugger;

})();