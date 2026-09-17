import asyncio
from playwright.async_api import async_playwright
import os

ARTIFACT_DIR = r"C:\Users\MOAZZAM\.gemini\antigravity\brain\1551ba94-8619-4717-a326-bafc79226548"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1440, "height": 900})
        page = await context.new_page()

        print("Navigating to https://spacewora.vercel.app/our-services/ ...")
        await page.goto("https://spacewora.vercel.app/our-services/", wait_until="networkidle", timeout=60000)
        await page.wait_for_timeout(2000)

        # Verify services page
        services_shot = os.path.join(ARTIFACT_DIR, "live_services_verified_6_categories.png")
        await page.screenshot(path=services_shot, full_page=False)
        print(f"Captured {services_shot}")

        # Scroll down to see the service cards
        await page.evaluate("window.scrollBy(0, 700)")
        await page.wait_for_timeout(1000)
        services_cards_shot = os.path.join(ARTIFACT_DIR, "live_services_cards_luxury.png")
        await page.screenshot(path=services_cards_shot, full_page=False)
        print(f"Captured {services_cards_shot}")

        # Check for electricals / fire fighting text or IDs
        has_electricals = await page.locator("#electricals").count()
        has_fire_fighting = await page.locator("#fire-fighting-system").count()
        print(f"Electricals present: {has_electricals}, Fire fighting present: {has_fire_fighting}")

        # Verify the 6 categories are present
        for cat in ["residential", "commercial", "hospitality", "penthouse", "turnkey-project", "exhibition"]:
            count = await page.locator(f"#{cat}").count()
            print(f"Category #{cat} count: {count}")

        # Check About page for Mali founders removal
        print("Navigating to https://spacewora.vercel.app/about/ ...")
        await page.goto("https://spacewora.vercel.app/about/", wait_until="networkidle", timeout=60000)
        await page.wait_for_timeout(2000)
        about_shot = os.path.join(ARTIFACT_DIR, "live_about_founders_purged.png")
        await page.screenshot(path=about_shot, full_page=False)
        print(f"Captured {about_shot}")

        has_aniket = await page.get_by_text("Aniket Mali").count()
        has_rachna = await page.get_by_text("Rachna Mali").count()
        print(f"Aniket Mali found: {has_aniket}, Rachna Mali found: {has_rachna}")

        await browser.close()
        print("Verification completed successfully!")

if __name__ == "__main__":
    asyncio.run(main())

