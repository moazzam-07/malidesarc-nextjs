import asyncio
from playwright.async_api import async_playwright
import os
import urllib.request
import re

ARTIFACT_DIR = r"C:\Users\MOAZZAM\.gemini\antigravity\brain\1551ba94-8619-4717-a326-bafc79226548"
urls = [
    'https://spacewora.vercel.app/our-project/',
    'https://spacewora.vercel.app/about/',
    'https://spacewora.vercel.app/'
]

async def check():
    async with async_playwright() as p:
        b = await p.chromium.launch(headless=True)
        page = await b.new_page(viewport={"width": 375, "height": 812})
        print("Navigating to https://spacewora.vercel.app/ ...")
        await page.goto("https://spacewora.vercel.app/", wait_until="networkidle")
        sw = await page.evaluate("document.documentElement.scrollWidth")
        cw = await page.evaluate("document.documentElement.clientWidth")
        print(f"LIVE VIEWPORT: {cw}, SCROLL: {sw}, OVERFLOW: {sw > cw}")
for url in urls:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    print(f'=== {url} ===')
    
    # Check Ghatkopar
    if 'ghatkopar' in html.lower():
        ghat_matches = set(re.findall(r'Ghatkopar[^<"\']+', html))
        print('Ghatkopar occurrences:', ghat_matches)
        
        # Capture live hero
        shot_live_hero = os.path.join(ARTIFACT_DIR, "live_production_mobile_hero.png")
        await page.screenshot(path=shot_live_hero)
        print(f"Saved: {shot_live_hero}")
    # Check for SPACEWORA (with E)
    spacewora_e = re.findall(r'\bSPACEWORA\b', html)
    print('SPACEWORA (with E) count:', len(spacewora_e))
    
    # Check for SPACWORA (correct)
    spacwora_no_e = re.findall(r'\bSPACWORA\b', html)
    print('SPACWORA (correct) count:', len(spacwora_no_e))

        # Open mobile drawer
        await page.locator(".dynamic-header button[aria-label*='Mobile Menu']").click()
        await page.wait_for_timeout(800)
        insta = await page.locator("#elementor-popup-modal-7903 a[href*='instagram.com/spacwora']").count()
        print(f"LIVE DRAWER INSTAGRAM LINK COUNT: {insta}")

        # Capture live drawer
        shot_live_drawer = os.path.join(ARTIFACT_DIR, "live_production_mobile_drawer.png")
        await page.screenshot(path=shot_live_drawer)
        print(f"Saved: {shot_live_drawer}")

        await b.close()
        print("LIVE VERIFICATION COMPLETE!")

if __name__ == "__main__":
    asyncio.run(check())

    # Check metrics numbers in about page
    if '/about/' in url:
        has_80 = 'data-to-value="80"' in html
        has_7 = 'data-to-value="7"' in html
        has_250 = 'data-to-value="250"' in html
        has_18 = 'data-to-value="18"' in html
        print(f'About page metrics check: data-to-value 80? {has_80}, 7? {has_7}, 250? {has_250}, 18? {has_18}')
