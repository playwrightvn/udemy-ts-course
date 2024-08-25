import { test } from "@playwright/test";

//Trang xu ly mouse: https://material.playwrightvn.com/018-mouse.html

test("Multiple tabs", async ({ page }) => {
    const xpathClickArea = "//div[@id='clickArea']";

    await page.goto("https://material.playwrightvn.com/018-mouse.html");
    await page.click(xpathClickArea);

    const page2 = await page.context().newPage();
    page2.goto("https://material.playwrightvn.com/018-mouse.html");
    await page2.dblclick(xpathClickArea);
});