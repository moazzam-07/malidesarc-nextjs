import asyncio
import os
import sys
from playwright.async_api import async_playwright

sys.stdout.reconfigure(encoding='utf-8')

async def snap():
    artifacts_dir = r"C:\Users\MOAZZAM\.gemini\antigravity\brain\1551ba94-8619-4717-a326-bafc79226548"
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1440, 'height': 900})
        await page.goto('http://localhost:8000/', wait_until='networkidle')

        # Scroll to s4
        el = page.locator('.elementor-element-b30e1f2')
        await el.scroll_into_view_if_needed()
        await page.wait_for_timeout(1000)
        shot_path = os.path.join(artifacts_dir, 'orig_services_snap.png')
        await page.screenshot(path=shot_path)
        print(f'Captured original services screenshot: {shot_path}')

        # Inspect services slider
        slider = page.locator('.services-carousel')
        cls = await slider.get_attribute('class')
        print(f'Original services slider classes: {cls}')
        slides = await slider.locator('.swiper-slide').all()
        print(f'Original services slides count: {len(slides)}')
        for i, s in enumerate(slides):
            s_cls = await s.get_attribute('class')
            vis = await s.evaluate('el => window.getComputedStyle(el).visibility')
            disp = await s.evaluate('el => window.getComputedStyle(el).display')
            txt = (await s.inner_text()).strip().replace('\n', ' ')[:40]
            print(f'Slide {i:2d}: disp={disp:5s} vis={vis:7s} cls={s_cls} txt="{txt}"')

        await browser.close()

if __name__ == '__main__':
    asyncio.run(snap())

