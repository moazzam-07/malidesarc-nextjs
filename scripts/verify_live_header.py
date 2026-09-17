import asyncio
from playwright.async_api import async_playwright
import os

ARTIFACT_DIR = r"C:\Users\MOAZZAM\.gemini\antigravity\brain\1551ba94-8619-4717-a326-bafc79226548"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True, args=['--no-sandbox'])
        page = await browser.new_page(viewport={'width': 1440, 'height': 900})

        print("1. Loading live site...")
        await page.goto("https://spacewora.vercel.app", wait_until="domcontentloaded", timeout=25000)
        await page.wait_for_timeout(2000)

        # 1. Top of page screenshot
        top_info = await page.evaluate('''() => {
            const d = document.querySelector('.dynamic-header');
            const logo = document.querySelector('.elementor-element-5caf2c5 img');
            const btn = document.querySelector('.elementor-element-fb5d8d8 a');
            return {
                height: d.offsetHeight,
                padding: window.getComputedStyle(d).padding,
                logoLeft: logo.getBoundingClientRect().left,
                logoWidth: logo.getBoundingClientRect().width,
                logoHeight: logo.getBoundingClientRect().height,
                btnRight: window.innerWidth - btn.getBoundingClientRect().right,
                classes: d.className
            };
        }''')
        print("Live Top Info:", top_info)
        await page.screenshot(path=os.path.join(ARTIFACT_DIR, "live_header_sleek_top.png"))

        # 2. Scroll down 450px -> Should slide UP and disappear
        await page.evaluate('window.scrollTo(0, 450)')
        await page.wait_for_timeout(600)
        down_info = await page.evaluate('''() => {
            const d = document.querySelector('.dynamic-header');
            return {
                scrollY: window.scrollY,
                classes: d.className,
                transform: window.getComputedStyle(d).transform
            };
        }''')
        print("Live Scroll Down Info:", down_info)
        await page.screenshot(path=os.path.join(ARTIFACT_DIR, "live_header_hidden_scrolled_down.png"))

        # 3. Scroll back up 150px -> Should slide DOWN into view
        await page.evaluate('window.scrollTo(0, 300)')
        await page.wait_for_timeout(600)
        up_info = await page.evaluate('''() => {
            const d = document.querySelector('.dynamic-header');
            return {
                scrollY: window.scrollY,
                classes: d.className,
                transform: window.getComputedStyle(d).transform
            };
        }''')
        print("Live Scroll Up Info:", up_info)
        await page.screenshot(path=os.path.join(ARTIFACT_DIR, "live_header_revealed_scrolled_up.png"))

        await browser.close()
        print("All live screenshots verified!")

if __name__ == '__main__':
    asyncio.run(main())

