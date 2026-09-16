import asyncio
import subprocess
import time
import os
from playwright.async_api import async_playwright

async def run_hero_verification():
    proc = subprocess.Popen(
        ['npm', 'run', 'start', '--', '-p', '3008'],
        shell=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )
    print('Started Next.js production server on port 3008...')
    time.sleep(3)

    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=True)
            
            # 1. Homepage Hero Section - Desktop
            page = await browser.new_page(viewport={'width': 1440, 'height': 900})
            await page.goto('http://localhost:3008/', wait_until='networkidle')
            await page.wait_for_timeout(1000)
            
            await page.screenshot(
                path='C:/Users/MOAZZAM/.gemini/antigravity/brain/1551ba94-8619-4717-a326-bafc79226548/bright_hero_desktop.png'
            )
            print('Captured bright_hero_desktop.png')

            # 2. Homepage Scrolled (Header transitions cleanly)
            await page.evaluate('window.scrollTo(0, 400)')
            await page.wait_for_timeout(500)
            await page.screenshot(
                path='C:/Users/MOAZZAM/.gemini/antigravity/brain/1551ba94-8619-4717-a326-bafc79226548/bright_hero_scrolled.png'
            )
            print('Captured bright_hero_scrolled.png')

            # 3. Mobile Viewport
            page_m = await browser.new_page(viewport={'width': 390, 'height': 844})
            await page_m.goto('http://localhost:3008/', wait_until='networkidle')
            await page_m.wait_for_timeout(1000)
            await page_m.screenshot(
                path='C:/Users/MOAZZAM/.gemini/antigravity/brain/1551ba94-8619-4717-a326-bafc79226548/bright_hero_mobile.png'
            )
            print('Captured bright_hero_mobile.png')

            await browser.close()
    finally:
        proc.terminate()
        print('Terminated Next.js server.')

if __name__ == '__main__':
    asyncio.run(run_hero_verification())
