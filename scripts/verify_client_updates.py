import asyncio
from playwright.async_api import async_playwright
import os

ARTIFACT_DIR = r"C:\Users\MOAZZAM\.gemini\antigravity\brain\1551ba94-8619-4717-a326-bafc79226548"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=True,
            args=['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
        )
        context = await browser.new_context(viewport={'width': 1440, 'height': 900})
        page = await context.new_page()

        print("1. Loading homepage...")
        await page.goto("https://spacewora.vercel.app", wait_until="domcontentloaded", timeout=20000)
        await page.wait_for_timeout(2000)
        await page.screenshot(path=os.path.join(ARTIFACT_DIR, "live_home_hero_updated.png"))
        print("Captured live_home_hero_updated.png")

        # Scroll to About Section
        print("2. Capturing About section...")
        await page.evaluate("window.scrollTo(0, 750)")
        await page.wait_for_timeout(1500)
        await page.screenshot(path=os.path.join(ARTIFACT_DIR, "live_home_about_section.png"))
        print("Captured live_home_about_section.png")

        # Scroll to Featured Projects
        print("3. Capturing Featured Projects...")
        await page.evaluate("window.scrollTo(0, 1650)")
        await page.wait_for_timeout(1500)
        await page.screenshot(path=os.path.join(ARTIFACT_DIR, "live_home_featured_projects.png"))
        print("Captured live_home_featured_projects.png")

        # Mobile View & Menu Popup
        print("4. Capturing Mobile Menu Popup...")
        mobile_context = await browser.new_context(viewport={'width': 390, 'height': 844}, is_mobile=True)
        mobile_page = await mobile_context.new_page()
        await mobile_page.goto("https://spacewora.vercel.app", wait_until="domcontentloaded", timeout=20000)
        await mobile_page.wait_for_timeout(1500)
        
        # Click Hamburger
        hamburger = mobile_page.locator("a[href*='popup%3Aopen']")
        if await hamburger.count() > 0:
            await hamburger.first.click()
            await mobile_page.wait_for_timeout(1000)
            await mobile_page.screenshot(path=os.path.join(ARTIFACT_DIR, "live_mobile_menu_popup.png"))
            print("Captured live_mobile_menu_popup.png")

        # About Page
        print("5. Loading About page...")
        await page.goto("https://spacewora.vercel.app/about/", wait_until="domcontentloaded", timeout=20000)
        await page.wait_for_timeout(1500)
        await page.screenshot(path=os.path.join(ARTIFACT_DIR, "live_about_page.png"))
        print("Captured live_about_page.png")

        # Our Projects Page
        print("6. Loading Projects page...")
        await page.goto("https://spacewora.vercel.app/our-project/", wait_until="domcontentloaded", timeout=20000)
        await page.wait_for_timeout(1500)
        await page.screenshot(path=os.path.join(ARTIFACT_DIR, "live_our_project_white_gold.png"))
        print("Captured live_our_project_white_gold.png")

        await browser.close()
        print("ALL SCREENSHOTS CAPTURED SUCCESSFULLY!")

if __name__ == "__main__":
    asyncio.run(main())
