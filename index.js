const pupetter = require('puppeteer');

(async () => {
    const browser =  await pupetter.launch({
        headless:false,
        devtools:false,
        ignoreHTTPSErrors:true,
        slowMo:0
    });
    const page = await browser.newPage();
    await page.goto('https://www.novicompu.com');
    await page.waitForXPath('//button[@class="novicompu-novicompu-store-3-x-btn-close"]');
    const [_close] = await page.$x('//button[@class="novicompu-novicompu-store-3-x-btn-close"]');
    _close.click(this);

    /* TAG NAME */
    const input = await page.$('input');
    await input.focus();
    await input.type('primera consulta')

    /* ID SELECTOR */
    const input_1 = await page.$('#downshift-1-input');
    await input_1.focus();
    await input_1.type("refrigerador");

    /* ATRIBUTE SELECTOR (TYPE, ID, CLASS, VALUE)*/
    const input_2 = await page.$('input[id="downshift-1-input"]');
    await input_2.focus();
    await input_2.type("otra cosa");

    const input_3 = await page.$('input[type="text"]');
    await input_3.focus();
    await input_3.type('alguna otra cosa');
    
    /* XPATH */
    /* RELATIVE */
    const input_4 = (await page.$x('//input[@id="downshift-1-input"]'))[0];
    await input_4.focus();
    await input_4.type('relativepath');

    /* CONTAINS */
    const input_5 = (await page.$x("//input[contains(@id, 'downshift')]"))[0];
    await input_5.focus();
    await input_5.type('xpath');


})();
