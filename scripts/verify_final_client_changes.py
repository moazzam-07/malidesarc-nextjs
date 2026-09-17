import asyncio
from playwright.async_api import async_playwright
import os

ARTIFACT_DIR = r"C:\Users\MOAZZAM\.gemini\antigravity\brain\1551ba94-8619-4717-a326-bafc79226548"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1440, "height": 900})
        page = await context.new_page()

        # 1. Check services page
        print("Checking Services page...")
        await page.goto("https://spacewora.vercel.app/our-services/", wait_until="networkidle", timeout=60000)
        await page.wait_for_timeout(2000)
        services_shot = os.path.join(ARTIFACT_DIR, "live_services_clean_white_banner.png")
        await page.screenshot(path=services_shot, full_page=False)
        print(f"Captured {services_shot}")

        # 2. Check Footer
        print("Checking Footer on Home...")
        await page.goto("https://spacewora.vercel.app/", wait_until="networkidle", timeout=60000)
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        await page.wait_for_timeout(2000)
        footer_shot = os.path.join(ARTIFACT_DIR, "live_footer_instagram_verified.png")
        await page.screenshot(path=footer_shot, full_page=False)
        print(f"Captured {footer_shot}")

        # 3. Check Contact page
        print("Checking Contact page...")
        await page.goto("https://spacewora.vercel.app/contact/", wait_until="networkidle", timeout=60000)
        await page.wait_for_timeout(2000)
        await page.evaluate("window.scrollBy(0, 300)")
        await page.wait_for_timeout(1000)
        contact_shot = os.path.join(ARTIFACT_DIR, "live_contact_instagram_card.png")
        await page.screenshot(path=contact_shot, full_page=False)
        print(f"Captured {contact_shot}")

        # 4. Check About page (verify founders hidden)
        print("Checking About page...")
        await page.goto("https://spacewora.vercel.app/about/", wait_until="networkidle", timeout=60000)
        await page.wait_for_timeout(2000)
        aniket_count = await page.get_by_text("Aniket Mali").count()
        rachna_count = await page.get_by_text("Rachna Mali").count()
        founders_count = await page.get_by_text("Meet our founders").count()
        print(f"Aniket count: {aniket_count}, Rachna count: {rachna_count}, Founders heading count: {founders_count}")

        await browser.close()
        print("All checks completed!")

if __name__ == "__main__":
    asyncio.run(main())

