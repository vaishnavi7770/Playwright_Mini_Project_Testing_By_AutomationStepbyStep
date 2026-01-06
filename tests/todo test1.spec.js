import { test, expect } from '@playwright/test';

test('TodoMVC test', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/#/');

  const todoInput = page.getByPlaceholder('What needs to be done?');

  await todoInput.fill('JAVA');
  await todoInput.press('Enter');

  await todoInput.fill('JS');
  await todoInput.press('Enter');

  await todoInput.fill('PLAYWRIGHT');
  await todoInput.press('Enter');

  await todoInput.fill('SELENIUM');
  await todoInput.press('Enter');

  await expect(page.locator('.todo-list li')).toHaveCount(4);
});
