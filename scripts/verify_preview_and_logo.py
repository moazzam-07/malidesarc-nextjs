import asyncio
import subprocess
import time
import os
from playwright.async_api import async_playwright

async def run_verification():
    proc = subprocess.Popen(
        ['npm', 'run', 'start', '--', '-p', '3005'],
        shell=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )
    print('Started Next.js production server on port 3005...')
    time.sleep(3)

    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=True)
            
            # 1. Preview Page on Desktop
            page_preview = await browser.new_page(viewport={'width': 1440, 'height': 1080})
            await page_preview.goto('http://localhost:3005/preview', wait_until='domcontentloaded')
            await page_preview.wait_for_timeout(1500)
            await page_preview.screenshot(
                path='C:/Users/MOAZZAM/.gemini/antigravity/brain/1551ba94-8619-4717-a326-bafc79226548/preview_page_desktop.png',
                full_page=True
            )
            print('Captured preview page desktop')

            # 2. Preview Page on Mobile
            page_preview_m = await browser.new_page(viewport={'width': 390, 'height': 844})
            await page_preview_m.goto('http://localhost:3005/preview', wait_until='domcontentloaded')
            await page_preview_m.wait_for_timeout(1500)
            await page_preview_m.screenshot(
                path='C:/Users/MOAZZAM/.gemini/antigravity/brain/1551ba94-8619-4717-a326-bafc79226548/preview_page_mobile.png',
                full_page=True
            )
            print('Captured preview page mobile')

            # 3. Verify Favicon responses
            res_svg = await page_preview.request.get('http://localhost:3005/favicon.svg')
            res_ico = await page_preview.request.get('http://localhost:3005/favicon.ico')
            res_apple = await page_preview.request.get('http://localhost:3005/apple-touch-icon.png')
            res_png32 = await page_preview.request.get('http://localhost:3005/favicon-32x32.png')
            print(f'Favicon SVG Status: {res_svg.status}, Size: {len(await res_svg.body())} bytes')
            print(f'Favicon ICO Status: {res_ico.status}, Size: {len(await res_ico.body())} bytes')
            print(f'Apple Touch Icon Status: {res_apple.status}, Size: {len(await res_apple.body())} bytes')
            print(f'Favicon 32x32 Status: {res_png32.status}, Size: {len(await res_png32.body())} bytes')

            # 4. Check OpenGraph metadata on root page
            page_home = await browser.new_page()
            await page_home.goto('http://localhost:3005/', wait_until='domcontentloaded')
            og_image = await page_home.locator('meta[property="og:image"]').get_attribute('content')
            twitter_image = await page_home.locator('meta[name="twitter:image"]').get_attribute('content')
            favicon_link = await page_home.locator('link[rel="icon"]').first.get_attribute('href')
            print(f'og:image meta: {og_image}')
            print(f'twitter:image meta: {twitter_image}')
            print(f'favicon link href: {favicon_link}')

            await browser.close()
    finally:
        subprocess.run(['taskkill', '/F', '/T', '/PID', str(proc.pid)], shell=True)
        print('Server stopped.')

if __name__ == '__main__':
    asyncio.run(run_verification())
