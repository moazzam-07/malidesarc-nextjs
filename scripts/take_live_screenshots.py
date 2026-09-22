import os
from playwright.sync_api import sync_playwright

ARTIFACT_DIR = r"C:\Users\MOAZZAM\.gemini\antigravity\brain\1551ba94-8619-4717-a326-bafc79226548"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    
    # 1. Projects page - Ghatkopar card
    page = browser.new_page(viewport={'width': 1280, 'height': 800})
    page.goto('https://spacewora.vercel.app/our-project/', wait_until='networkidle')
    page.wait_for_timeout(2000)
    
    # Scroll to projects
    page.screenshot(path=os.path.join(ARTIFACT_DIR, 'live_projects_ghatkopar_verified.png'))
    print('Captured projects page screenshot')
    
    # 2. About page - Metrics & text
    page.goto('https://spacewora.vercel.app/about/', wait_until='networkidle')
    page.wait_for_timeout(2500)
    
    # Scroll to metrics
    metrics = page.locator('.stats-section, .elementor-element-1edfdfc').first
    if metrics.count() > 0:
        metrics.scroll_into_view_if_needed()
        page.wait_for_timeout(1000)
    page.screenshot(path=os.path.join(ARTIFACT_DIR, 'live_about_metrics_verified.png'))
    print('Captured about page screenshot')

    # 3. Mobile View of About page
    mobile_page = browser.new_page(viewport={'width': 390, 'height': 844})
    mobile_page.goto('https://spacewora.vercel.app/about/', wait_until='networkidle')
    mobile_page.wait_for_timeout(2500)
    mobile_metrics = mobile_page.locator('.stats-section').first
    if mobile_metrics.count() > 0:
        mobile_metrics.scroll_into_view_if_needed()
        mobile_page.wait_for_timeout(1000)
    mobile_page.screenshot(path=os.path.join(ARTIFACT_DIR, 'live_about_mobile_metrics_verified.png'))
    print('Captured mobile about page screenshot')

    browser.close()

print('All screenshots taken!')

