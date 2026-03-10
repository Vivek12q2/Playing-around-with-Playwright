import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Testing out CH', async ({page}) =>{
    await page.goto('https://find-and-update.company-information.service.gov.uk/')
    await page.getByRole('button', { name: 'Accept analytics cookies'}).click()
    await page.getByRole('button', {name: 'Hide this message'}).click()
    await page.getByRole('link', { name: 'Sign in / Register' }).click()
    await page.getByRole('textbox', { name: 'Email address' }).fill('JoshuaHilton@gmail.com')
})
