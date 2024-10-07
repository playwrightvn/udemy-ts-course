import { test } from '@playwright/test';

test.describe('Suite 1', async () => {
    test('test1 without tag', async ({ page }) => {
        console.log('Run test 01');
    })
    
    test('test2 with tag @login', async ({ page }) => {
        console.log('Run test 02');
    })
    
    test('test3 with tag', {
        tag: '@authentication'
    }, async ({ page }) => {
        console.log('Run test 03');
    })
    
    test('test4 with special keyword', async ({ page }) => {
        console.log('Run test 04');
    })
});