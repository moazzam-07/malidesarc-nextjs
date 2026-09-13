import asyncio
from playwright.async_api import async_playwright

async def inspect():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1440, 'height': 900})
        await page.goto('http://localhost:3005/', wait_until='networkidle')

        h = page.locator('.elementor-element-b30e1f2 .elementor-heading-title')
        info = await h.evaluate('''el => {
            let cur = el;
            let res = [];
            while (cur && cur !== document.body) {
                res.push({
                    tag: cur.tagName,
                    class: cur.className,
                    visibility: window.getComputedStyle(cur).visibility,
                    opacity: window.getComputedStyle(cur).opacity
                });
                cur = cur.parentElement;
            }
            return res;
        }''')
        print('=== Hierarchy of s4 heading ===')
        for r in info:
            print(r)

        # Check all .elementor-invisible elements
        invisibles = await page.locator('.elementor-invisible').all()
        print(f'\nTotal .elementor-invisible elements on page: {len(invisibles)}')
        for inv in invisibles:
            cls = await inv.get_attribute('class')
            txt = (await inv.text_content() or '')[:50].strip().replace('\n', ' ')
            print(f'  Invisible: [{cls[:60]}] -> "{txt}"')

        # Also check on original site http://localhost:8000/
        print('\n=== Checking original site http://localhost:8000/ ===')
        page_orig = await browser.new_page(viewport={'width': 1440, 'height': 900})
        await page_orig.goto('http://localhost:8000/', wait_until='networkidle')
        invisibles_orig = await page_orig.locator('.elementor-invisible').all()
        print(f'Total .elementor-invisible on original site before scroll: {len(invisibles_orig)}')
        # Scroll to bottom on original site
        await page_orig.evaluate('''async () => {
            for (let i = 0; i < document.body.scrollHeight; i += 500) {
                window.scrollTo(0, i);
                await new Promise(r => setTimeout(r, 100));
            }
        }''')
        await page_orig.wait_for_timeout(1000)
        invisibles_orig_after = await page_orig.locator('.elementor-invisible').all()
        print(f'Total .elementor-invisible on original site after scroll: {len(invisibles_orig_after)}')

        await browser.close()

if __name__ == '__main__':
    asyncio.run(inspect())

