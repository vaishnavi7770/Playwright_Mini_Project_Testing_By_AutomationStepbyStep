import{test,expect} from '@playwright/test';

test('todo activity',async({page})=>{
 await page.goto('https://todomvc.com/examples/react/dist/#/');
 await page.getByRole('combobox',{name:'What needs to be done?',exact:true}).fill("JAVA");
 await page.getByRole('combobox',{name:'What needs to be done?',exact:true}).fill("JS");
 await page.getByRole('combobox',{name:'What needs to be done?',exact:true}).fill("SELENIUM");
 await page.getByRole('combobox',{name:'What needs to be done?',exact:true}).fill("PLAYWRIGHT");
});