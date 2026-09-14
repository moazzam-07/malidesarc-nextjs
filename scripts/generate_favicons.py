import asyncio
import os
import xml.etree.ElementTree as ET
from PIL import Image
from playwright.async_api import async_playwright

def prepare_and_render():
    tree = ET.parse('C:/Users/MOAZZAM/Downloads/image (2).svg')
    root = tree.getroot()
    
    # Remove metadata element (contains text manifest)
    for elem in list(root):
        tag = elem.tag.split('}')[-1]
        if tag == 'metadata':
            root.remove(elem)
            print('Removed metadata element')
            
    # Perfectly centered square viewBox around emblem (minX 228.3, maxX 609.1, minY 53.0, maxY 629.4)
    # Emblem center: (418.7, 341.2), Size: 380.8 x 576.3
    # 702x702 box provides ~63px top/bottom padding and ~160px left/right padding
    root.attrib['viewBox'] = '68 -10 702 702'
    root.attrib['width'] = '702'
    root.attrib['height'] = '702'
    
    # Register namespaces
    ET.register_namespace('', 'http://www.w3.org/2000/svg')
    
    # Save standalone SVG
    tree.write('public/favicon.svg')
    tree.write('app/icon.svg')
    print('Favicon SVGs saved with viewBox 68 -10 702 702')
    
    with open('public/favicon.svg', 'r', encoding='utf-8') as f:
        svg_content = f.read()
    
    return svg_content

async def render_pngs(svg_content):
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        
        # 1. 512x512 PNG with transparency
        page_512 = await browser.new_page(viewport={'width': 512, 'height': 512})
        html_512 = f"""<!DOCTYPE html>
        <html>
        <head><style>
            html, body {{ margin:0; padding:0; width:512px; height:512px; background:transparent; overflow:hidden; }}
            svg {{ width:512px; height:512px; display:block; }}
        </style></head>
        <body>
            {svg_content}
        </body>
        </html>"""
        await page_512.set_content(html_512)
        await page_512.screenshot(path='public/favicon-512.png', omit_background=True)
        print('Created public/favicon-512.png')

        # 2. 180x180 Apple Touch Icon (luxury deep black #0A0A0A background for iOS)
        page_180 = await browser.new_page(viewport={'width': 180, 'height': 180})
        html_180 = f"""<!DOCTYPE html>
        <html>
        <head><style>
            html, body {{ margin:0; padding:0; width:180px; height:180px; background:#0A0A0A; overflow:hidden; display:flex; align-items:center; justify-content:center; }}
            svg {{ width:144px; height:144px; display:block; }}
        </style></head>
        <body>
            {svg_content}
        </body>
        </html>"""
        await page_180.set_content(html_180)
        await page_180.screenshot(path='public/apple-touch-icon.png')
        print('Created public/apple-touch-icon.png')

        # 3. 64x64 PNG for 32x32 crisp favicon
        page_32 = await browser.new_page(viewport={'width': 64, 'height': 64})
        html_32 = f"""<!DOCTYPE html>
        <html>
        <head><style>
            html, body {{ margin:0; padding:0; width:64px; height:64px; background:transparent; overflow:hidden; }}
            svg {{ width:64px; height:64px; display:block; }}
        </style></head>
        <body>
            {svg_content}
        </body>
        </html>"""
        await page_32.set_content(html_32)
        await page_32.screenshot(path='public/favicon-32x32.png', omit_background=True)
        print('Created public/favicon-32x32.png')

        await browser.close()

    # Convert 64x64/32x32 to multi-size favicon.ico
    img = Image.open('public/favicon-32x32.png')
    img.save('public/favicon.ico', format='ICO', sizes=[(16, 16), (32, 32), (48, 48)])
    print('Created multi-size public/favicon.ico')

if __name__ == '__main__':
    svg_str = prepare_and_render()
    asyncio.run(render_pngs(svg_str))

