import os
import sys
import asyncio
from playwright.async_api import async_playwright

sys.stdout.reconfigure(encoding='utf-8')

async def compare():
    async with async_playwright() as p:
        browser = await p.chromium.launch()

        # 1. Original Site
        page_orig = await browser.new_page(viewport={'width': 1440, 'height': 900})
        await page_orig.goto('http://localhost:8000/', wait_until='networkidle')
        # Scroll smoothly to load animations
        await page_orig.evaluate('''async () => {
            for (let i = 0; i < document.body.scrollHeight; i += 300) {
                window.scrollTo(0, i);
                await new Promise(r => setTimeout(r, 60));
            }
        }''')
        await page_orig.wait_for_timeout(1000)

        print('=== ORIGINAL SITE (http://localhost:8000/) ===')
        containers_orig = await page_orig.locator('.elementor-13403 > .e-con').all()
        print('Total top containers in original site:', len(containers_orig))
        for i, c in enumerate(containers_orig):
            cid = await c.get_attribute('data-id')
            box = await c.bounding_box()
            vis = await c.evaluate('el => window.getComputedStyle(el).visibility')
            disp = await c.evaluate('el => window.getComputedStyle(el).display')
            op = await c.evaluate('el => window.getComputedStyle(el).opacity')
            txt = (await c.text_content() or '').strip().replace('\n', ' ')[:45]
            txt_clean = txt.encode('ascii', 'replace').decode('ascii')
            h = box['height'] if box else 0
            y = box['y'] if box else 0
            print(f'{i:2d} | id={cid} | disp={disp:5s} | vis={vis:7s} | op={op:3s} | y={y:5.0f} | h={h:5.0f} | txt="{txt_clean}"')

        # 2. Next.js Site
        print('\n=== NEXTJS SITE (http://localhost:3005/) ===')
        page_next = await browser.new_page(viewport={'width': 1440, 'height': 900})
        await page_next.goto('http://localhost:3005/', wait_until='networkidle')
        await page_next.evaluate('''async () => {
            for (let i = 0; i < document.body.scrollHeight; i += 300) {
                window.scrollTo(0, i);
                await new Promise(r => setTimeout(r, 60));
            }
        }''')
        await page_next.wait_for_timeout(1000)

        containers_next = await page_next.locator('.elementor-13403 .e-parent').all()
        print('Total parent containers in Next.js site:', len(containers_next))
        for i, c in enumerate(containers_next):
            cid = await c.get_attribute('data-id')
            box = await c.bounding_box()
            vis = await c.evaluate('el => window.getComputedStyle(el).visibility')
            disp = await c.evaluate('el => window.getComputedStyle(el).display')
            op = await c.evaluate('el => window.getComputedStyle(el).opacity')
            txt = (await c.text_content() or '').strip().replace('\n', ' ')[:45]
            txt_clean = txt.encode('ascii', 'replace').decode('ascii')
            h = box['height'] if box else 0
            y = box['y'] if box else 0
            print(f'{i:2d} | id={cid} | disp={disp:5s} | vis={vis:7s} | op={op:3s} | y={y:5.0f} | h={h:5.0f} | txt="{txt_clean}"')

        await browser.close()

if __name__ == '__main__':
    asyncio.run(compare())

