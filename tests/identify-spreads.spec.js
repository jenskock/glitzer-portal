import { test } from '@playwright/test';

test('identify what each spread shows', async ({ page }) => {
  await page.setViewportSize({ width: 1180, height: 820 });
  await page.goto('http://localhost:8000/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  
  await page.evaluate(() => {
    document.querySelector('.book-cover').click();
  });
  await page.waitForTimeout(1500);
  
  const spreads = [];
  
  for (let i = 0; i < 20; i++) {
    const info = await page.evaluate(() => {
      const left = document.querySelector('#left-page');
      const right = document.querySelector('#right-page');
      
      const leftType = left.className.includes('cover') ? 'cover' : 
                      left.className.includes('story') ? 'story' :
                      left.className.includes('puzzle') ? 'puzzle' : 'unknown';
      
      const rightType = right.className.includes('cover') ? 'cover' :
                       right.className.includes('story') ? 'story' :
                       right.className.includes('puzzle') ? 'puzzle' :
                       right.style.opacity === '0' ? 'blank' : 'unknown';
      
      let leftContent = '';
      let rightContent = '';
      
      if (leftType === 'cover') {
        leftContent = left.querySelector('.cover-title')?.textContent?.substring(0, 30) || '';
      } else if (leftType === 'story') {
        leftContent = left.querySelector('.page-text')?.textContent?.substring(0, 40) || '';
      } else if (leftType === 'puzzle') {
        leftContent = left.querySelector('.puzzle-title')?.textContent || '';
      }
      
      if (rightType === 'story') {
        rightContent = right.querySelector('.page-text')?.textContent?.substring(0, 40) || '';
      } else if (rightType === 'puzzle') {
        rightContent = 'puzzle content';
      }
      
      return { leftType, rightType, leftContent, rightContent };
    });
    
    spreads.push(info);
    console.log(`Spread ${i}: L=${info.leftType}(${info.leftContent}) | R=${info.rightType}(${info.rightContent})`);
    
    await page.screenshot({ path: `spread-check-${String(i).padStart(2, '0')}.png` });
    
    // Click next
    await page.evaluate(() => {
      const btn = document.querySelector('#next-page');
      if (btn && !btn.disabled) btn.click();
    });
    await page.waitForTimeout(500);
  }
  
  console.log('\n=== Summary ===');
  spreads.forEach((s, i) => console.log(`${i}: ${s.leftType} | ${s.rightType}`));
});
