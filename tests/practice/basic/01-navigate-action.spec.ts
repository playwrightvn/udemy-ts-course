import { test } from '@playwright/test'

// https://material.playwrightvn.com

test('Navigation', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com");

    await page.goto("https://material.playwrightvn.com/");
})

test('Action', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com");

    // Input: fill
    // Radio: check
    // Checkbox: check, uncheck
    // Button: click: dblick, click with option: clickCount = 3; modifier: Click + Shift
})