import asyncio
import os
from playwright.async_api import async_playwright

async def verify():
    artifacts_dir = r"C:\Users\MOAZZAM\.gemini\antigravity\brain\1551ba94-8619-4717-a326-bafc79226548"
    os.makedirs(artifacts_dir, exist_ok=True)

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={'width': 1440, 'height': 900})
        page = await context.new_page()

        console_errors = []
        page.on('console', lambda msg: console_errors.append(msg.text) if msg.type == 'error' else None)

        print('=== 1. Testing Homepage ===')
        await page.goto('http://localhost:3005/', wait_until='networkidle')
        title = await page.title()
        print(f'Page title: {title}')

        # Screenshot Hero
        hero_shot = os.path.join(artifacts_dir, 'nextjs_home_hero.png')
        await page.screenshot(path=hero_shot)
        print(f'Captured: {hero_shot}')

        # Verify Header Dynamic Scroll
        header = page.locator('.dynamic-header')
        has_scrolled_before = 'scrolled' in (await header.get_attribute('class') or '')
        print(f'Header scrolled class before scroll: {has_scrolled_before}')

        # Scroll down 500px
        await page.evaluate('window.scrollTo(0, 500)')
        await page.wait_for_timeout(800)
        has_scrolled_after = 'scrolled' in (await header.get_attribute('class') or '')
        print(f'Header scrolled class after 500px scroll: {has_scrolled_after}')
        scrolled_bg = await header.evaluate('el => window.getComputedStyle(el).backgroundColor')
        print(f'Header background color when scrolled: {scrolled_bg}')

        scrolled_shot = os.path.join(artifacts_dir, 'nextjs_home_scrolled.png')
        await page.screenshot(path=scrolled_shot)

        # Test Marquee Ticker
        marquee = page.locator('.malidesarc-marquee-track')
        marquee_visible = await marquee.is_visible()
        print(f'Marquee track visible: {marquee_visible}')

        # Test Stats Section Counters
        counters = page.locator('.elementor-counter-number')
        count = await counters.count()
        print(f'Counter elements found: {count}')
        if count > 0:
            first_val = await counters.first.text_content()
            print(f'First counter initial text: {first_val}')
            # Scroll to stats
            await counters.first.scroll_into_view_if_needed()
            await page.wait_for_timeout(2500)
            counted_val = await counters.first.text_content()
            print(f'First counter after animated count-up: {counted_val}')

        # Test Mobile Menu Popup
        print('=== 2. Testing Mobile Menu Popup ===')
        # Switch to mobile viewport
        await page.set_viewport_size({'width': 390, 'height': 844})
        await page.goto('http://localhost:3005/', wait_until='networkidle')
        hamburger = page.locator('.elementor-element-6fcbaf5 button, .elementor-element-6fcbaf5 a').first
        print(f'Hamburger button visible on mobile: {await hamburger.is_visible()}')
        await hamburger.click()
        await page.wait_for_timeout(600)

        popup_modal = page.locator('#elementor-popup-modal-7903')
        modal_visible = await popup_modal.is_visible()
        print(f'Mobile popup modal visible after click: {modal_visible}')

        popup_shot = os.path.join(artifacts_dir, 'nextjs_mobile_menu_open.png')
        await page.screenshot(path=popup_shot)

        # Close popup
        close_btn = popup_modal.locator('button[aria-label="Close menu"]')
        await close_btn.click()
        await page.wait_for_timeout(400)
        modal_closed = not (await popup_modal.is_visible())
        print(f'Mobile popup modal closed after close click: {modal_closed}')

        # Test Our Projects Page with Filtering
        print('=== 3. Testing Our Projects Page & Filter ===')
        await page.set_viewport_size({'width': 1440, 'height': 900})
        await page.goto('http://localhost:3005/our-project/', wait_until='networkidle')
        
        project_cards = page.locator('.project-card')
        total_cards = await project_cards.count()
        print(f'Total project cards on /our-project/: {total_cards}')

        projects_all_shot = os.path.join(artifacts_dir, 'nextjs_projects_all.png')
        await page.screenshot(path=projects_all_shot)

        # Click "Commercial" Filter
        comm_btn = page.locator('.e-filter-item[data-filter="commercial"]')
        await comm_btn.click()
        await page.wait_for_timeout(500)
        comm_cards = await page.locator('.project-card').count()
        print(f'Cards visible when "Commercial" filter clicked: {comm_cards}')

        comm_shot = os.path.join(artifacts_dir, 'nextjs_projects_commercial.png')
        await page.screenshot(path=comm_shot)

        # Click "Sales Office" Filter
        sales_btn = page.locator('.e-filter-item[data-filter="sales-office"]')
        await sales_btn.click()
        await page.wait_for_timeout(500)
        sales_cards = await page.locator('.project-card').count()
        print(f'Cards visible when "Sales Office" filter clicked: {sales_cards}')

        sales_shot = os.path.join(artifacts_dir, 'nextjs_projects_sales_office.png')
        await page.screenshot(path=sales_shot)

        # Click "All" Filter
        all_btn = page.locator('.e-filter-item[data-filter="__all"]')
        await all_btn.click()
        await page.wait_for_timeout(500)
        all_cards_again = await page.locator('.project-card').count()
        print(f'Cards visible when "All" filter clicked: {all_cards_again}')

        # Test Subpages
        print('=== 4. Testing Core Subpages ===')
        for route in ['/our-services/', '/about/', '/contact/', '/timeline/', '/teams/', '/stratum/']:
            res = await page.goto(f'http://localhost:3005{route}', wait_until='networkidle')
            print(f'Route {route} status: {res.status}')

        print('=== Console Errors Summary ===')
        print(f'Total console errors encountered: {len(console_errors)}')
        for err in console_errors[:10]:
            print('  Err:', err)

        await browser.close()

if __name__ == '__main__':
    asyncio.run(verify())

