const {test, expect} = require("@playwright/test"); //kind of importing playwright module

test("Verify login with invalid credentials", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    // Locate the username input and fill it
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill("TestUser1");

    // Locate the password input and fill it
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill("Test@123");

    // Expect the login button to be visible
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();

    // Click on the login button and verify invalid login credential text
    await page.locator('[data-test="login-button"]').click();
    await expect(page.getByText('Username and password do not match any user')).toBeVisible();
    // await expect(page.getByText('Username and password do not match any user',{exact:true})).toBeVisible();
});

