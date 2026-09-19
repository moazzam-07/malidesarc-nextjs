import asyncio
from playwright.async_api import async_playwright
import os

ARTIFACT_DIR = r"C:\Users\MOAZZAM\.gemini\antigravity\brain\1551ba94-8619-4717-a326-bafc79226548"

async def check():
    async with async_playwright() as p:
        b = await p.chromium.launch(headless=True)
        page = await b.new_page(viewport={"width": 375, "height": 812})
        print("Navigating to https://spacewora.vercel.app/ ...")
        await page.goto("https://spacewora.vercel.app/", wait_until="networkidle")
        sw = await page.evaluate("document.documentElement.scrollWidth")
        cw = await page.evaluate("document.documentElement.clientWidth")
        print(f"LIVE VIEWPORT: {cw}, SCROLL: {sw}, OVERFLOW: {sw > cw}")
        
        # Capture live hero
        shot_live_hero = os.path.join(ARTIFACT_DIR, "live_production_mobile_hero.png")
        await page.screenshot(path=shot_live_hero)
        print(f"Saved: {shot_live_hero}")

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

