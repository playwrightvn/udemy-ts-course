/*
- Material page: https://material.playwrightvn.com/
- Register page: https://material.playwrightvn.com/01-xpath-register-page.html
- Xử lý mouse event: https://material.playwrightvn.com/018-mouse.html
*/

import { test } from "@playwright/test";

test("Regist user flow", async ({ page }) => {
    // navigate to Regist page
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");

    // fill username, email
    await page.locator('//input[@id="username"]').fill("playwrightvn");
    await page.locator('//input[@id="email"]').fill("playwrightvn@gmail.com");

    // check gender, hobbies
    await page.locator('//input[@id="male"]').check();
    await page.locator('//input[@id="traveling"]').check();
    await page.locator('//input[@id="traveling"]').uncheck();

    // select country
    await page.selectOption('//select[@id="country"]', "canada");

    // fill date
    await page.locator('//input[@id="dob"]').fill("2024-08-16");

    // select file
    await page.locator('//input[@id="profile"]').setInputFiles('test-data/example-actions.png');

    // fill bio
    await page.locator('//textarea[@id= "bio"]').fill("Toi la Playwright VN team");

    // click btn Register
    await page.locator('//input[@id= "newsletter"]').click();
});

test("Click", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/018-mouse.html");
    // // click 1 lan
    // await page.locator("//div[@id='clickArea']").click();

    // // dbl click
    // await page.locator("//div[@id='clickArea']").dblclick();

    // shift + click
    await page.locator("//div[@id='clickArea']").click({
        modifiers: ['Shift']
    })
})