import time
import sys
from playwright.sync_api import sync_playwright

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        
        # Test 1: Mobile Client-Side Navigation from / to /about
        context = browser.new_context(
            viewport={'width': 390, 'height': 844},
            user_agent='Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1'
        )
        page = context.new_page()
        
        print("1. Loading home page http://localhost:3000/ ...", flush=True)
        page.goto('http://localhost:3000/', wait_until='domcontentloaded')
        time.sleep(1)
        
        print("2. Opening mobile menu drawer ...", flush=True)
        toggle_btn = page.locator('button[aria-label="Open Mobile Menu"]')
        assert toggle_btn.count() > 0, "Mobile menu toggle button not found"
        toggle_btn.first.click()
        time.sleep(0.8)
        
        print("3. Clicking About Us link client-side ...", flush=True)
        about_link = page.locator('#elementor-popup-modal-7903 a[href*="/about/"], #elementor-popup-modal-7903 a:has-text("About Us")').first
        print(f"About link count: {about_link.count()}, visible: {about_link.is_visible()}, href: {about_link.get_attribute('href')}", flush=True)
        with page.expect_navigation(timeout=5000):
            about_link.click()
        time.sleep(1)
        
        current_url = page.url
        print(f"Current URL after client navigation: {current_url}", flush=True)
        assert '/about' in current_url, f"Expected /about in URL, got {current_url}"
        
        # Check that "Our Team" is not in the rendered page
        team_headings = page.get_by_text("Our Team", exact=True)
        team_count = team_headings.count()
        print(f"Number of 'Our Team' elements found: {team_count}", flush=True)
        assert team_count == 0, f"Expected 0 'Our Team' elements, but found {team_count}"
        
        # Verify order in page: Ethos < Metrics < Design Process
        ethos_y = page.locator('.elementor-element-27724ac').bounding_box()['y']
        stats_box = page.locator('.stats-section, .elementor-element-d292406').bounding_box()
        stats_y = stats_box['y']
        process_y = page.locator('.elementor-element-127a1e4').bounding_box()['y']
        print(f"Order verification: Ethos Y={ethos_y}px < Metrics Y={stats_y}px < Process Y={process_y}px", flush=True)
        assert ethos_y < stats_y < process_y, f"Expected Ethos < Metrics < Process, got {ethos_y}, {stats_y}, {process_y}"

        # Scroll to stats section
        print("4. Scrolling to stats/metrics section ...", flush=True)
        stats = page.locator('.stats-section, .elementor-element-d292406').first
        if stats.count() > 0:
            stats.scroll_into_view_if_needed()
        time.sleep(2)  # Allow count-up animation to complete
        
        # Check counter numbers
        counter_numbers = page.locator('.stats-section .elementor-counter-number')
        if counter_numbers.count() == 0:
            counter_numbers = page.locator('.elementor-counter-number:visible')
            
        count = counter_numbers.count()
        print(f"Found {count} counter numbers.", flush=True)
        values = []
        for i in range(count):
            val = counter_numbers.nth(i).inner_text().strip()
            values.append(val)
            print(f"Counter {i}: {val}", flush=True)
            
        print(f"All captured counters: {values}", flush=True)
        
        # Take screenshot of metrics section
        page.screenshot(path='C:/Users/MOAZZAM/.gemini/antigravity/brain/1551ba94-8619-4717-a326-bafc79226548/mobile_about_metrics_navigated.png', full_page=False)
        
        # Check horizontal overflow
        body_scroll_w = page.evaluate("document.body.scrollWidth")
        window_inner_w = page.evaluate("window.innerWidth")
        print(f"body.scrollWidth: {body_scroll_w}, window.innerWidth: {window_inner_w}", flush=True)
        assert body_scroll_w <= window_inner_w + 1, f"Horizontal scroll detected: {body_scroll_w} > {window_inner_w}"
        
        # Verify specific counter values
        assert '250' in values, f"250 not found in counters: {values}"
        assert '8' in values, f"8 not found in counters: {values}"
        assert '18' in values, f"18 not found in counters: {values}"
        assert '96' in values, f"96 not found in counters: {values}"
        
        print("Client-side navigation test PASSED!", flush=True)
        
        # Test 2: Direct Page Load on /about
        print("\n5. Testing direct page load on /about ...", flush=True)
        page.goto('http://localhost:3000/about', wait_until='domcontentloaded')
        time.sleep(1)
        
        stats = page.locator('.stats-section, .elementor-element-d292406').first
        if stats.count() > 0:
            stats.scroll_into_view_if_needed()
        time.sleep(2)
        
        team_count = page.get_by_text("Our Team", exact=True).count()
        assert team_count == 0, f"Expected 0 'Our Team' elements on direct load, got {team_count}"
        
        counter_numbers = page.locator('.stats-section .elementor-counter-number')
        if counter_numbers.count() == 0:
            counter_numbers = page.locator('.elementor-counter-number:visible')
            
        direct_values = [counter_numbers.nth(i).inner_text().strip() for i in range(counter_numbers.count())]
        print(f"Direct load counters: {direct_values}", flush=True)
        assert '250' in direct_values
        assert '8' in direct_values
        assert '18' in direct_values
        assert '96' in direct_values
        
        page.screenshot(path='C:/Users/MOAZZAM/.gemini/antigravity/brain/1551ba94-8619-4717-a326-bafc79226548/mobile_about_metrics_direct.png', full_page=False)
        print("Direct page load test PASSED!", flush=True)
        
        browser.close()

if __name__ == '__main__':
    verify()
