import asyncio
import subprocess
import time
from playwright.async_api import async_playwright

async def verify():
    # Start production server on port 3006
    proc = subprocess.Popen(
        ['npm', 'run', 'start', '--', '-p', '3006'],
        shell=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )
    print('Started Next.js production server on port 3006...')
    time.sleep(4)

    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=True)
            
            # 1. Projects Grid Page Desktop
            page = await browser.new_page(viewport={'width': 1440, 'height': 1200})
            print('Navigating to http://localhost:3006/our-project...')
            await page.goto('http://localhost:3006/our-project', wait_until='domcontentloaded')
            await page.wait_for_timeout(1500)
            await page.screenshot(
                path='C:/Users/MOAZZAM/.gemini/antigravity/brain/1551ba94-8619-4717-a326-bafc79226548/new_projects_grid_all.png',
                clip={'x': 0, 'y': 0, 'width': 1440, 'height': 1100}
            )
            print('Captured new projects grid screenshot')

            # Test filter: Hospitality
            btn_hosp = page.locator('button:has-text("Hospitality")')
            await btn_hosp.click()
            await page.wait_for_timeout(600)
            await page.screenshot(
                path='C:/Users/MOAZZAM/.gemini/antigravity/brain/1551ba94-8619-4717-a326-bafc79226548/new_projects_grid_hospitality.png',
                clip={'x': 0, 'y': 0, 'width': 1440, 'height': 800}
            )
            print('Captured hospitality filter screenshot')

            # 2. Detail Page: Haldiram Hospitality
            print('Navigating to Haldiram project detail page...')
            await page.goto('http://localhost:3006/projects/haldiram-hospitality', wait_until='domcontentloaded')
            await page.wait_for_timeout(1500)
            await page.screenshot(
                path='C:/Users/MOAZZAM/.gemini/antigravity/brain/1551ba94-8619-4717-a326-bafc79226548/project_detail_haldiram.png',
                clip={'x': 0, 'y': 0, 'width': 1440, 'height': 1200}
            )
            print('Captured Haldiram project detail screenshot')

            # 3. Detail Page: Ghatkopar Penthouse (19 photos)
            print('Navigating to Ghatkopar Penthouse project detail page...')
            await page.goto('http://localhost:3006/projects/ghatkopar-penthouse', wait_until='domcontentloaded')
            await page.wait_for_timeout(1500)
            await page.screenshot(
                path='C:/Users/MOAZZAM/.gemini/antigravity/brain/1551ba94-8619-4717-a326-bafc79226548/project_detail_ghatkopar.png',
                clip={'x': 0, 'y': 0, 'width': 1440, 'height': 1200}
            )
            print('Captured Ghatkopar Penthouse project detail screenshot')

            # 4. Mobile Projects Grid
            page_m = await browser.new_page(viewport={'width': 390, 'height': 844})
            await page_m.goto('http://localhost:3006/our-project', wait_until='domcontentloaded')
            await page_m.wait_for_timeout(1500)
            await page_m.screenshot(
                path='C:/Users/MOAZZAM/.gemini/antigravity/brain/1551ba94-8619-4717-a326-bafc79226548/new_projects_grid_mobile.png',
                full_page=False
            )
            print('Captured mobile projects grid screenshot')

            # 5. Homepage Featured Projects
            page_home = await browser.new_page(viewport={'width': 1440, 'height': 900})
            await page_home.goto('http://localhost:3006/', wait_until='domcontentloaded')
            await page_home.wait_for_timeout(1500)
            
            # Scroll to featured projects
            await page_home.evaluate("window.scrollTo(0, 1800)")
            await page_home.wait_for_timeout(800)
            await page_home.screenshot(
                path='C:/Users/MOAZZAM/.gemini/antigravity/brain/1551ba94-8619-4717-a326-bafc79226548/homepage_featured_projects_new.png'
            )
            print('Captured homepage featured projects screenshot')

            await browser.close()
    finally:
        subprocess.run(['taskkill', '/F', '/T', '/PID', str(proc.pid)], shell=True)
        print('Server on port 3006 stopped.')

if __name__ == '__main__':
    asyncio.run(verify())
