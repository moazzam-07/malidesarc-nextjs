import asyncio
import base64
import os
from playwright.async_api import async_playwright

async def generate_thumbnail():
    # Read Bandra image as base64
    with open('public/wp-content/uploads/2026/08/Bandra-House.webp', 'rb') as f:
        bg_b64 = base64.b64encode(f.read()).decode('utf-8')
    bg_data_uri = f"data:image/webp;base64,{bg_b64}"

    # Read logo SVG as base64
    with open('public/spacewora-logo-white-text.svg', 'rb') as f:
        logo_b64 = base64.b64encode(f.read()).decode('utf-8')
    logo_data_uri = f"data:image/svg+xml;base64,{logo_b64}"
    
    html = f"""<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@600;700&family=Quicksand:wght@500;600;700&display=swap">
        <style>
            * {{
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }}
            body {{
                width: 1200px;
                height: 630px;
                overflow: hidden;
                position: relative;
                font-family: 'Quicksand', sans-serif;
                background-color: #0A0A0A;
                color: #FFFFFF;
            }}
            .bg-image {{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: url('{bg_data_uri}');
                background-size: cover;
                background-position: center 35%;
                filter: brightness(0.65);
                transform: scale(1.02);
            }}
            .overlay {{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(180deg, rgba(10, 10, 10, 0.88) 0%, rgba(10, 10, 10, 0.6) 45%, rgba(10, 10, 10, 0.94) 100%);
            }}
            .gold-border {{
                position: absolute;
                top: 24px;
                left: 24px;
                right: 24px;
                bottom: 24px;
                border: 1px solid rgba(244, 198, 0, 0.3);
                border-radius: 16px;
                pointer-events: none;
                z-index: 10;
            }}
            .content-wrapper {{
                position: relative;
                z-index: 5;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 44px 56px;
            }}
            .top-bar {{
                display: flex;
                justify-content: space-between;
                align-items: center;
            }}
            .logo-img {{
                height: 56px;
                width: auto;
                object-fit: contain;
                filter: drop-shadow(0 4px 12px rgba(0,0,0,0.9));
            }}
            .top-badge {{
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 18px;
                border-radius: 30px;
                background: rgba(244, 198, 0, 0.12);
                border: 1px solid rgba(244, 198, 0, 0.4);
                color: #F4C600;
                font-size: 13px;
                font-weight: 700;
                letter-spacing: 2px;
                text-transform: uppercase;
                backdrop-filter: blur(10px);
            }}
            .hero-body {{
                text-align: center;
                max-width: 960px;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                align-items: center;
            }}
            .kicker {{
                color: #F4C600;
                text-transform: uppercase;
                letter-spacing: 3px;
                font-size: 13px;
                font-weight: 700;
                margin-bottom: 14px;
                padding: 6px 20px;
                border-radius: 20px;
                background: rgba(0, 0, 0, 0.55);
                border: 1px solid rgba(244, 198, 0, 0.35);
                backdrop-filter: blur(8px);
            }}
            .main-heading {{
                font-family: 'Bai Jamjuree', sans-serif;
                font-size: 42px;
                font-weight: 700;
                line-height: 1.2;
                color: #FFFFFF;
                margin-bottom: 16px;
                text-shadow: 0 4px 24px rgba(0, 0, 0, 0.95);
            }}
            .main-heading span {{
                color: #F4C600;
            }}
            .subtitle {{
                font-size: 17px;
                line-height: 1.6;
                color: #E6E6E6;
                max-width: 820px;
                margin-bottom: 26px;
                text-shadow: 0 2px 12px rgba(0, 0, 0, 0.95);
            }}
            .cta-group {{
                display: flex;
                gap: 16px;
                justify-content: center;
            }}
            .btn-primary {{
                padding: 13px 30px;
                background: #FFFFFF;
                color: #0A0A0A;
                font-size: 13px;
                font-weight: 700;
                letter-spacing: 1px;
                text-transform: uppercase;
                border-radius: 30px;
                border: 2px solid #FFFFFF;
                box-shadow: 0 4px 18px rgba(0, 0, 0, 0.5);
            }}
            .btn-secondary {{
                padding: 13px 30px;
                background: rgba(0, 0, 0, 0.5);
                color: #FFFFFF;
                font-size: 13px;
                font-weight: 700;
                letter-spacing: 1px;
                text-transform: uppercase;
                border-radius: 30px;
                border: 2px solid rgba(255, 255, 255, 0.7);
                backdrop-filter: blur(8px);
            }}
            .bottom-bar {{
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 13px;
                color: rgba(255, 255, 255, 0.75);
                letter-spacing: 1px;
            }}
            .domain-tag {{
                color: #F4C600;
                font-weight: 700;
                display: flex;
                align-items: center;
                gap: 6px;
            }}
        </style>
    </head>
    <body>
        <div class="bg-image"></div>
        <div class="overlay"></div>
        <div class="gold-border"></div>
        
        <div class="content-wrapper">
            <div class="top-bar">
                <img class="logo-img" src="{logo_data_uri}" alt="SPACEWORA Logo" />
                <div class="top-badge">Studio Portfolio & Architecture</div>
            </div>

            <div class="hero-body">
                <div class="kicker">Luxury Interior Architecture & Design Studio</div>
                <h1 class="main-heading">Designing Timeless Spaces That Feel As <span>Extraordinary</span> As They Look.</h1>
                <p class="subtitle">At SPACEWORA Design Studio, we create luxury interiors and architectural experiences that reflect your personality, celebrate your lifestyle, and elevate the way you live.</p>
                <div class="cta-group">
                    <div class="btn-primary">Book Free Consultation</div>
                    <div class="btn-secondary">Explore Our Projects</div>
                </div>
            </div>

            <div class="bottom-bar">
                <div>Commercial &bull; Residential &bull; Hospitality &bull; Turnkey Execution</div>
                <div class="domain-tag">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F4C600" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                    spacewora.vercel.app
                </div>
            </div>
        </div>
    </body>
    </html>"""

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={'width': 1200, 'height': 630})
        await page.set_content(html)
        await page.wait_for_timeout(1000)
        await page.screenshot(path='public/og-hero-thumbnail.jpg', type='jpeg', quality=95)
        await page.screenshot(path='public/hero-preview-thumbnail.png')
        print('Successfully created public/og-hero-thumbnail.jpg and public/hero-preview-thumbnail.png with base64 embedded assets')
        await browser.close()

if __name__ == '__main__':
    asyncio.run(generate_thumbnail())

