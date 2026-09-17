import asyncio
from playwright.async_api import async_playwright
import os

ARTIFACT_DIR = r"C:\Users\MOAZZAM\.gemini\antigravity\brain\1551ba94-8619-4717-a326-bafc79226548"

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            viewport={"width": 375, "height": 812},
            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1"
        )
        page = await context.new_page()

        print("Navigating to http://localhost:3000/ ...")
        await page.goto("http://localhost:3000/", wait_until="networkidle")
        await page.wait_for_timeout(1500)

        # Check 1: Horizontal scroll / sideways shift check
        scroll_width = await page.evaluate("document.documentElement.scrollWidth")
        client_width = await page.evaluate("document.documentElement.clientWidth")
        print(f"Viewport width: {client_width}, Scroll width: {scroll_width}")
        has_horizontal_overflow = scroll_width > client_width
        print(f"Has horizontal overflow: {has_horizontal_overflow}")

        # Check 2: Header alignment
        logo_box = await page.locator(".dynamic-header img[alt*='SPACEWORA']").bounding_box()
        burger_box = await page.locator(".dynamic-header button[aria-label*='Mobile Menu']").bounding_box()
        print(f"Logo bounding box: {logo_box}")
        print(f"Burger bounding box: {burger_box}")

        if logo_box and burger_box:
            # Check if they are on roughly the same Y row
            y_diff = abs(logo_box["y"] - burger_box["y"])
            print(f"Vertical Y difference between logo and hamburger: {y_diff:.1f}px")

        # Capture mobile homepage top (header + hero + CTA buttons)
        shot1 = os.path.join(ARTIFACT_DIR, "mobile_header_hero_optimized.png")
        await page.screenshot(path=shot1)
        print(f"Saved: {shot1}")

        # Check 3: Click hamburger to open mobile menu drawer
        print("Clicking hamburger menu...")
        await page.locator(".dynamic-header button[aria-label*='Mobile Menu']").click()
        await page.wait_for_timeout(1000)

        # Verify popup is visible
        modal = page.locator("#elementor-popup-modal-7903")
        is_modal_visible = await modal.is_visible()
        print(f"Modal visible: {is_modal_visible}")

        # Capture open mobile menu drawer
        shot2 = os.path.join(ARTIFACT_DIR, "mobile_drawer_obsidian_optimized.png")
        await page.screenshot(path=shot2)
        print(f"Saved: {shot2}")

        # Close the modal
        close_btn = page.locator("button[aria-label='Close menu']")
        await close_btn.click()
        await page.wait_for_timeout(800)

        # Check 4: Test Header scroll hide / reveal
        print("Testing scroll hide / reveal...")
        # Scroll down 400px
        await page.evaluate("window.scrollTo(0, 400)")
        await page.wait_for_timeout(600)
        shot3 = os.path.join(ARTIFACT_DIR, "mobile_header_scrolled_hidden.png")
        await page.screenshot(path=shot3)
        print(f"Saved: {shot3}")

        # Scroll up 150px
        await page.evaluate("window.scrollTo(0, 250)")
        await page.wait_for_timeout(600)
        shot4 = os.path.join(ARTIFACT_DIR, "mobile_header_scrolled_revealed.png")
        await page.screenshot(path=shot4)
        print(f"Saved: {shot4}")

        await browser.close()
        print("Verification complete!")

if __name__ == "__main__":
    asyncio.run(run())

