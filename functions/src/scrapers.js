const puppeteer = require('puppeteer');

async function morningstarScraper(ticker){
    const url = `https://financials.morningstar.com/ratios/r.html?t=${ticker}`
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector("div#financials");
    
    const data = await page.evaluate(() => {
        const financials = document.getElementById("financials");
        const rows = financials.querySelectorAll('tr:not(.hr)');

        let data = {}; // Next refactor write directly to db
        let years_nodes = rows[0].querySelectorAll('th');
        let years = [].slice.call(years_nodes).map(e => e.innerText);
        for (let i = 0; i< rows.length; i++){
            if (i !==0) {
                let cells = rows[i].querySelectorAll('td');
                let header = rows[i].querySelector('th').innerText;
                data[header] = {};
                for (let j = 0; j < cells.length; j++){
                    data[header][years[j+1]] = cells[j].innerText; 
                }
            }
        }
        return data;
    });
    
    await browser.close();
    return data;
}

exports.morningstarScraper = morningstarScraper;
