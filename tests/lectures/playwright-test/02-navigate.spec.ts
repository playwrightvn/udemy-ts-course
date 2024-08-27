import { test } from '@playwright/test';

test('Basic action', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/018-mouse.html");

    // Single click
    await page.locator("//div[@id='clickArea']").click();

    // Double click
    await page.locator("//div[@id='clickArea']").dblclick();

    // Right click
    // await page.locator("//div[@id='clickArea']").click({
    //     button: 'right'
    // });

    // Phim khac
    await page.locator("//div[@id='clickArea']").click({
        modifiers: ["Shift", "Meta"]
    });
})

test('basic input', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");

    await page.locator("//input[@id='username']").pressSequentially("udemy@gmail.com", {
        delay: 100,
    });

    // Check radio female
    await page.locator("//input[@id='female']").check();

    // Check checkbox
    await page.locator("//input[@id='reading']").check();
    // await page.locator("//input[@id='traveling']").check();

    // Uncheck
    //await page.locator("//input[@id='traveling']").uncheck();

    // Get check status
    const isCheck = await page.locator("//input[@id='traveling']").isChecked();

    console.log(isCheck);
});

test('select', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");

    await page.locator("//select[@id='country']").selectOption("Australia");

    await page.locator("//select[@id='interests']").selectOption(["Music", "Art"]);
})

test('date', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");

    await page.locator("//input[@id='username']").fill("udemy");

    await page.locator("//input[@id='email']").fill("udemy@gmail.com");

    await page.locator("//input[@id='dob']").fill("2024-01-30");


    await page.locator("//button[@type='submit']").click();
})
