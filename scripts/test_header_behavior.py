import asyncio
import subprocess
import time
import os
from playwright.async_api import async_playwright

async def main():
    proc = subprocess.Popen(
        ['npm', 'run', 'start', '--', '-p', '3020'],
        shell=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )
    print("Started local Next.js server on port 3020...")
    time.sleep(3)

    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=True, args=['--no-sandbox'])
            page = await browser.new_page(viewport={'width': 1440, 'height': 900})
            await page.goto("http://localhost:3020/", wait_until="networkidle")
            await page.wait_for_timeout(1000)

            # Check at top
            top_info = await page.evaluate('''() => {
                const d = document.querySelector('.dynamic-header');
                const logo = document.querySelector('.elementor-element-5caf2c5 img');
                const btn = document.querySelector('.elementor-element-fb5d8d8 a');
                return {
                    dynamicHeight: d.offsetHeight,
                    dynamicPadding: window.getComputedStyle(d).padding,
                    logoLeft: logo.getBoundingClientRect().left,
                    logoWidth: logo.getBoundingClientRect().width,
                    logoHeight: logo.getBoundingClientRect().height,
                    btnRight: window.innerWidth - btn.getBoundingClientRect().right,
                    headerTransform: window.getComputedStyle(d).transform,
                    classes: d.className
                };
            }''')
            print("Top Info:", top_info)

            # Screenshot at top
            await page.screenshot(path=r'C:\Users\MOAZZAM\.gemini\antigravity\brain\1551ba94-8619-4717-a326-bafc79226548\header_sleek_top.png')

            # Scroll DOWN 500px -> header should slide UP and disappear
            await page.evaluate('window.scrollTo(0, 500)')
            await page.wait_for_timeout(600)
            down_info = await page.evaluate('''() => {
                const d = document.querySelector('.dynamic-header');
                return {
                    scrollY: window.scrollY,
                    classes: d.className,
                    transform: window.getComputedStyle(d).transform
                };
            }''')
            print("Scroll Down Info (Should be hidden):", down_info)
            await page.screenshot(path=r'C:\Users\MOAZZAM\.gemini\antigravity\brain\1551ba94-8619-4717-a326-bafc79226548\header_hidden_scrolled_down.png')

            # Scroll UP 150px -> header should slide DOWN and appear
            await page.evaluate('window.scrollTo(0, 350)')
            await page.wait_for_timeout(600)
            up_info = await page.evaluate('''() => {
                const d = document.querySelector('.dynamic-header');
                return {
                    scrollY: window.scrollY,
                    classes: d.className,
                    transform: window.getComputedStyle(d).transform
                };
            }''')
            print("Scroll Up Info (Should be visible):", up_info)
            await page.screenshot(path=r'C:\Users\MOAZZAM\.gemini\antigravity\brain\1551ba94-8619-4717-a326-bafc79226548\header_revealed_scrolled_up.png')

            await browser.close()
    finally:
        proc.terminate()
        print("Test server stopped.")

if __name__ == '__main__':
    asyncio.run(main())

