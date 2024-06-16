const {test, expect} = require("@playwright/test");

test(" Verify different type of screenshots", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    // Locate the username input and fill it
    // below mentioned data-test is an attribute of an html element
    await page.screenshot({ path: 'screenshots/page_screenshot.png' }); 
    await page.screenshot({ path: 'screenshots/fullpage_screenshot.png', fullPage: true });
    await page.locator('[data-test="password"]').screenshot({ path: 'screenshots/element_screenshot.png' });

});