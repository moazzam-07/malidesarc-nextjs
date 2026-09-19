import time
from playwright.sync_api import sync_playwright

def verify_live():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        
        # Test Live Mobile Client-Side Navigation
        context = browser.new_context(
            viewport={'width': 390, 'height': 844},
            user_agent='Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1'
        )
        page = context.new_page()
        
        print("1. Loading LIVE home page https://spacewora.vercel.app/ ...", flush=True)
        page.goto('https://spacewora.vercel.app/', wait_until='domcontentloaded')
        time.sleep(1.5)
        
        print("2. Opening mobile menu drawer on live site ...", flush=True)
        toggle_btn = page.locator('button[aria-label="Open Mobile Menu"]')
        assert toggle_btn.count() > 0, "Mobile menu toggle button not found on live site"
        toggle_btn.first.click()
        time.sleep(0.8)
        
        print("3. Clicking About Us link client-side on live site ...", flush=True)
        about_link = page.locator('#elementor-popup-modal-7903 a[href*="/about/"], #elementor-popup-modal-7903 a:has-text("About Us")').first
        with page.expect_navigation(timeout=8000):
            about_link.click()
        time.sleep(1.5)
        
        current_url = page.url
        print(f"Current live URL after client navigation: {current_url}", flush=True)
        assert '/about' in current_url, f"Expected /about in live URL, got {current_url}"
        
        # Verify Our Team is NOT in rendered DOM
        team_headings = page.get_by_text("Our Team", exact=True)
        team_count = team_headings.count()
        print(f"Number of 'Our Team' elements on live page: {team_count}", flush=True)
        assert team_count == 0, f"Expected 0 'Our Team' elements on live page, found {team_count}"
        
        # Verify order on live page: Ethos < Metrics < Design Process
        ethos_y = page.locator('.elementor-element-27724ac').bounding_box()['y']
        stats_box = page.locator('.stats-section, .elementor-element-d292406').bounding_box()
        stats_y = stats_box['y']
        process_y = page.locator('.elementor-element-127a1e4').bounding_box()['y']
        print(f"Live order verification: Ethos Y={ethos_y}px < Metrics Y={stats_y}px < Process Y={process_y}px", flush=True)
        assert ethos_y < stats_y < process_y, f"Expected Ethos < Metrics < Process on live site, got {ethos_y}, {stats_y}, {process_y}"

        # Scroll to metrics section
        print("4. Scrolling to stats/metrics section on live site ...", flush=True)
        stats = page.locator('.stats-section, .elementor-element-d292406').first
        if stats.count() > 0:
            stats.scroll_into_view_if_needed()
        time.sleep(2.5)  # Allow count-up animation to complete
        
        counter_numbers = page.locator('.stats-section .elementor-counter-number')
        if counter_numbers.count() == 0:
            counter_numbers = page.locator('.elementor-counter-number:visible')
            
        values = [counter_numbers.nth(i).inner_text().strip() for i in range(counter_numbers.count())]
        print(f"Live captured counters after navigation: {values}", flush=True)
        
        page.screenshot(path='C:/Users/MOAZZAM/.gemini/antigravity/brain/1551ba94-8619-4717-a326-bafc79226548/live_about_metrics_navigated.png', full_page=False)
        
        assert '250' in values, f"250 not found in live counters: {values}"
        assert '8' in values, f"8 not found in live counters: {values}"
        assert '18' in values, f"18 not found in live counters: {values}"
        assert '96' in values, f"96 not found in live counters: {values}"
        print("Live client-side navigation test PASSED!", flush=True)
        
        # Test Live Direct Page Load
        print("\n5. Testing live direct page load on https://spacewora.vercel.app/about/ ...", flush=True)
        page.goto('https://spacewora.vercel.app/about/', wait_until='domcontentloaded')
        time.sleep(1.5)
        
        stats = page.locator('.stats-section, .elementor-element-d292406').first
        if stats.count() > 0:
            stats.scroll_into_view_if_needed()
        time.sleep(2.5)
        
        direct_team_count = page.get_by_text("Our Team", exact=True).count()
        assert direct_team_count == 0, f"Expected 0 'Our Team' on direct load, got {direct_team_count}"
        
        direct_values = [counter_numbers.nth(i).inner_text().strip() for i in range(counter_numbers.count())]
        print(f"Live direct load counters: {direct_values}", flush=True)
        assert '250' in direct_values
        assert '8' in direct_values
        assert '18' in direct_values
        assert '96' in direct_values
        
        page.screenshot(path='C:/Users/MOAZZAM/.gemini/antigravity/brain/1551ba94-8619-4717-a326-bafc79226548/live_about_metrics_direct.png', full_page=False)
        print("Live direct page load test PASSED!", flush=True)
        
        browser.close()

if __name__ == '__main__':
    verify_live()

