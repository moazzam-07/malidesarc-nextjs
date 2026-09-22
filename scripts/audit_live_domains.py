import urllib.request
import re

domains = [
    'https://spacewora.vercel.app',
    'https://www.spacwora.com',
    'https://spacwora.com'
]

routes = ['/about/', '/our-project/']

for d in domains:
    for r in routes:
        url = d + r
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
            res = urllib.request.urlopen(req, timeout=10)
            html = res.read().decode('utf-8')
            
            has_80 = 'data-to-value="80"' in html
            has_250 = 'data-to-value="250"' in html
            has_penthouse = 'Ghatkopar Premium Penthouse' in html
            has_residence = 'Ghatkopar Premium Residence' in html
            spacewora_count = len(re.findall(r'\bSPACEWORA\b', html))
            spacwora_count = len(re.findall(r'\bSPACWORA\b', html))
            
            print(f"[{url}] HTTP {res.status}")
            print(f"   data-to-value 80: {has_80}, data-to-value 250: {has_250}")
            print(f"   Ghatkopar Penthouse: {has_penthouse}, Ghatkopar Residence: {has_residence}")
            print(f"   SPACEWORA: {spacewora_count}, SPACWORA: {spacwora_count}")
        except Exception as e:
            print(f"[{url}] Error: {e}")

