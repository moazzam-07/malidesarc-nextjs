import asyncio
from playwright.async_api import async_playwright
import os

ARTIFACT_DIR = r"C:\Users\MOAZZAM\.gemini\antigravity\brain\1551ba94-8619-4717-a326-bafc79226548"

PAGES_TO_TEST = [
    {"name": "home", "url": "http://localhost:3000/"},
    {"name": "about", "url": "http://localhost:3000/about"},
    {"name": "services", "url": "http://localhost:3000/our-services"},
    {"name": "projects", "url": "http://localhost:3000/our-project"},
    {"name": "contact", "url": "http://localhost:3000/contact"},
    {"name": "hospitality", "url": "http://localhost:3000/hospitality-interior-design"},
    {"name": "commercial", "url": "http://localhost:3000/commercial-interior-design"}
]

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)

        # 1. MOBILE TESTS (iPhone 375x812)
        print("=== RUNNING MOBILE AUDIT (375x812) ===")
        m_context = await browser.new_context(
            viewport={"width": 375, "height": 812},
            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1"
        )
        m_page = await m_context.new_page()

        for page_info in PAGES_TO_TEST:
            url = page_info["url"]
            name = page_info["name"]
            print(f"\nTesting Mobile: {name} ({url})")
            await m_page.goto(url, wait_until="networkidle")
            await m_page.wait_for_timeout(1000)

            # Check horizontal overflow
            scroll_width = await m_page.evaluate("document.documentElement.scrollWidth")
            client_width = await m_page.evaluate("document.documentElement.clientWidth")
            has_overflow = scroll_width > client_width
            print(f"  Viewport: {client_width}px, Scroll: {scroll_width}px -> Overflow: {has_overflow}")
            assert not has_overflow, f"Horizontal overflow detected on {name}!"

            # Check for legacy names
            body_text = await m_page.inner_text("body")
            for legacy in ["Aniket", "Rachna", "Rachana Mali"]:
                assert legacy.lower() not in body_text.lower(), f"Found legacy reference '{legacy}' on {name}!"
            print(f"  Legacy names check: PASSED (Zero occurrences on {name})")

        # Specific mobile homepage checks:
        print("\nChecking Mobile Homepage Specifics...")
        await m_page.goto("http://localhost:3000/", wait_until="networkidle")
        await m_page.wait_for_timeout(1000)

        # Header alignment
        logo_box = await m_page.locator(".dynamic-header img[alt*='SPACEWORA']").bounding_box()
        burger_box = await m_page.locator(".dynamic-header button[aria-label*='Mobile Menu']").bounding_box()
        if logo_box and burger_box:
            y_diff = abs(logo_box["y"] - burger_box["y"])
            print(f"  Header Logo & Hamburger vertical alignment diff: {y_diff:.1f}px")
            assert y_diff < 15, "Logo and hamburger should be on the same horizontal bar!"

        # Screenshot mobile header + hero
        shot_hero = os.path.join(ARTIFACT_DIR, "verified_mobile_home_hero.png")
        await m_page.screenshot(path=shot_hero)
        print(f"  Saved screenshot: {shot_hero}")

        # Open Drawer
        await m_page.locator(".dynamic-header button[aria-label*='Mobile Menu']").click()
        await m_page.wait_for_timeout(800)
        modal = m_page.locator("#elementor-popup-modal-7903")
        assert await modal.is_visible(), "Drawer modal must be visible on hamburger click!"

        # Verify Instagram link in drawer
        insta_link = await m_page.locator("#elementor-popup-modal-7903 a[href*='instagram.com/spacwora']").count()
        print(f"  Drawer Instagram link count: {insta_link}")
        assert insta_link > 0, "Drawer must link to https://www.instagram.com/spacwora"

        shot_drawer = os.path.join(ARTIFACT_DIR, "verified_mobile_drawer_obsidian.png")
        await m_page.screenshot(path=shot_drawer)
        print(f"  Saved screenshot: {shot_drawer}")

        # Close Drawer
        await m_page.locator("button[aria-label='Close menu']").click()
        await m_page.wait_for_timeout(600)

        # Header scroll hide / reveal
        await m_page.evaluate("window.scrollTo(0, 450)")
        await m_page.wait_for_timeout(600)
        shot_hidden = os.path.join(ARTIFACT_DIR, "verified_mobile_header_hidden.png")
        await m_page.screenshot(path=shot_hidden)

        await m_page.evaluate("window.scrollTo(0, 200)")
        await m_page.wait_for_timeout(600)
        shot_revealed = os.path.join(ARTIFACT_DIR, "verified_mobile_header_revealed.png")
        await m_page.screenshot(path=shot_revealed)

        # 2. DESKTOP TESTS (1440x900)
        print("\n=== RUNNING DESKTOP AUDIT (1440x900) ===")
        d_context = await browser.new_context(
            viewport={"width": 1440, "height": 900}
        )
        d_page = await d_context.new_page()

        for page_info in PAGES_TO_TEST[:5]:
            url = page_info["url"]
            name = page_info["name"]
            print(f"\nTesting Desktop: {name} ({url})")
            await d_page.goto(url, wait_until="networkidle")
            await d_page.wait_for_timeout(1000)

            scroll_width = await d_page.evaluate("document.documentElement.scrollWidth")
            client_width = await d_page.evaluate("document.documentElement.clientWidth")
            has_overflow = scroll_width > client_width
            print(f"  Viewport: {client_width}px, Scroll: {scroll_width}px -> Overflow: {has_overflow}")
            assert not has_overflow, f"Desktop horizontal overflow on {name}!"

        # Capture Desktop Home top
        await d_page.goto("http://localhost:3000/", wait_until="networkidle")
        shot_desktop = os.path.join(ARTIFACT_DIR, "verified_desktop_home.png")
        await d_page.screenshot(path=shot_desktop)
        print(f"  Saved desktop screenshot: {shot_desktop}")

        # Verify footer instagram link
        footer_insta = await d_page.locator("footer a[href*='instagram.com/spacwora']").count()
        print(f"  Footer Instagram link count: {footer_insta}")
        assert footer_insta >= 1, "Footer must have Instagram @spacwora link"

        await browser.close()
        print("\nALL VERIFICATIONS PASSED WITH 100% SUCCESS!")

if __name__ == "__main__":
    asyncio.run(run())

