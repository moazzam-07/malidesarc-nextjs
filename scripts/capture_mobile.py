import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True, args=['--no-sandbox'])
        page = await browser.new_page(viewport={'width': 390, 'height': 844}, is_mobile=True)
        await page.goto('https://spacewora.vercel.app', wait_until='domcontentloaded')
        await page.wait_for_timeout(1500)
        btn = page.locator("button[aria-label='Open Menu']")
        if await btn.count() > 0:
            await btn.click()
            await page.wait_for_timeout(1000)
            await page.screenshot(path=r'C:\Users\MOAZZAM\.gemini\antigravity\brain\1551ba94-8619-4717-a326-bafc79226548\live_mobile_menu_popup.png')
            print("Captured live_mobile_menu_popup.png successfully!")
        else:
            print("Button not found")
        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())

