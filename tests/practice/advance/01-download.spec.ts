import { test } from '@playwright/test';

test('Download simple', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/021-import-export.html");
    const downloadPromise = page.waitForEvent("download");
    await page.getByText("Export CSV").click();

    const download = await downloadPromise;
    await download.saveAs("tests/practice/advance/" + download.suggestedFilename());
});

test('Download with random', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/021-import-export.html");
    page.on("download", download => {
        download.saveAs("tests/practice/advance/file_random.csv")
    });

    await page.getByText("Random Export").click();

    await page.waitForTimeout(10_000);
})