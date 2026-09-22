import os
import re

# 1. Update app/about/page.jsx
about_file = 'app/about/page.jsx'
with open(about_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix desktop counters
content = re.sub(
    r'(<span className="elementor-counter-number"[^>]*data-to-value=")250("[^>]*>)\s*(?:5\s*)?250\s*(</span>)',
    r'\g<1>80\g<2>\n                    80\n                  \g<3>',
    content
)
content = re.sub(
    r'(<span className="elementor-counter-number"[^>]*data-to-value=")18("[^>]*>)\s*(?:4\s*)?18\s*(</span>)',
    r'\g<1>7\g<2>\n                    7\n                  \g<3>',
    content
)

# Fix mobile counters
content = re.sub(
    r'(data-from-value="\d+"\s+data-to-value=")250(">\s*)\d*\s*250(\s*</span>)',
    r'\g<1>80\g<2>80\g<3>',
    content
)
content = re.sub(
    r'(data-from-value="\d+"\s+data-to-value=")18(">\s*)\d*\s*18(\s*</span>)',
    r'\g<1>7\g<2>7\g<3>',
    content
)

# Also ensure data-from-value="0" for smooth count up
content = re.sub(r'data-from-value="\d+"\s+data-to-value="80"', 'data-from-value="0" data-to-value="80"', content)
content = re.sub(r'data-from-value="\d+"\s+data-to-value="7"', 'data-from-value="0" data-to-value="7"', content)

with open(about_file, 'w', encoding='utf-8') as f:
    f.write(content)
print('Updated app/about/page.jsx counters')


# 2. Update components/home/StatsSection.jsx
stats_file = 'components/home/StatsSection.jsx'
with open(stats_file, 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r'data-to-value="250"\s*>\s*250', 'data-to-value="80">\n                    80', content)
content = re.sub(r'data-to-value="18"\s*>\s*18', 'data-to-value="7">\n                    7', content)
content = re.sub(r'data-from-value="\d+"\s*data-to-value="80"', 'data-from-value="0"\n                    data-to-value="80"', content)
content = re.sub(r'data-from-value="\d+"\s*data-to-value="7"', 'data-from-value="0"\n                    data-to-value="7"', content)

with open(stats_file, 'w', encoding='utf-8') as f:
    f.write(content)
print('Updated components/home/StatsSection.jsx counters')


# 3. Update app/commercial-interior-design/page.jsx
comm_file = 'app/commercial-interior-design/page.jsx'
with open(comm_file, 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r'data-to-value="18"\s*>\s*\d+\s*</span>', 'data-to-value="7">\n                  7\n                </span>', content)
content = re.sub(r'data-from-value="\d+"\s+data-to-value="7"', 'data-from-value="0" data-to-value="7"', content)

with open(comm_file, 'w', encoding='utf-8') as f:
    f.write(content)
print('Updated app/commercial-interior-design/page.jsx counters')


# 4. Update app/hospitality-interior-design/page.jsx
hosp_file = 'app/hospitality-interior-design/page.jsx'
with open(hosp_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Ghatkopar fix in hospitality
content = content.replace('Ghatkopar Penthouse', 'Ghatkopar Premium Residence')
content = content.replace('Penthouse Suite', 'Luxury Residence')

# Turnkey Projects 650 -> 80
content = re.sub(r'data-to-value="650"\s*>\s*\d+\s*</span>', 'data-to-value="80">\n                  80\n                </span>', content)
# Years 18 -> 7
content = re.sub(r'data-to-value="18"\s*>\s*\d+\s*</span>', 'data-to-value="7">\n                  7\n                </span>', content)

with open(hosp_file, 'w', encoding='utf-8') as f:
    f.write(content)
print('Updated app/hospitality-interior-design/page.jsx Ghatkopar and counters')


# 5. Update app/residential-landing-page/page.jsx
res_file = 'app/residential-landing-page/page.jsx'
with open(res_file, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('alt="Ghatkopar Penthouse Residence"', 'alt="Ghatkopar Premium Residence"')
content = content.replace('Ghatkopar Penthouse Residence', 'Ghatkopar Premium Residence')
content = re.sub(r'data-to-value="650"\s*>\s*\d+\s*</span>', 'data-to-value="80">\n                  80\n                </span>', content)
content = re.sub(r'data-to-value="18"\s*>\s*\d+\s*</span>', 'data-to-value="7">\n                  7\n                </span>', content)

with open(res_file, 'w', encoding='utf-8') as f:
    f.write(content)
print('Updated app/residential-landing-page/page.jsx Ghatkopar and counters')


# 6. Site-wide Brand Name Replacement: SPACEWORA -> SPACWORA
# We want to replace SPACEWORA with SPACWORA, Space Wora with Spacwora, etc.,
# while preserving urls (spacewora.vercel.app) and file paths (/spacewora-logo-white-text.svg).

TARGET_DIRS = ['app', 'components']

def replace_brand_in_file(fpath):
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        text = f.read()

    orig_text = text

    # Protect spacewora.vercel.app and /spacewora-
    PLACEHOLDER_VERCEL = '___VERCEL_URL_PLACEHOLDER___'
    PLACEHOLDER_LOGO = '___LOGO_PATH_PLACEHOLDER___'
    
    text = text.replace('spacewora.vercel.app', PLACEHOLDER_VERCEL)
    text = text.replace('/spacewora-logo-white-text.svg', PLACEHOLDER_LOGO)
    text = text.replace('spacewora-logo-white-text.svg', PLACEHOLDER_LOGO)
    
    # Replace uppercase
    text = text.replace('SPACEWORA', 'SPACWORA')
    
    # Replace Spacewora in text headings or titles if present (except component import/export names if not needed)
    # Notice: 'Why Spacewora' -> 'Why Spacwora', 'ABOUT SPACEWORA' -> 'ABOUT SPACWORA'
    text = text.replace('Why Spacewora', 'Why Spacwora')
    text = text.replace('About Spacewora', 'About Spacwora')
    
    # Restore protected placeholders
    text = text.replace(PLACEHOLDER_VERCEL, 'spacewora.vercel.app')
    text = text.replace(PLACEHOLDER_LOGO, '/spacewora-logo-white-text.svg')

    if text != orig_text:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f'Replaced brand text in: {fpath}')

for td in TARGET_DIRS:
    for root, _, files in os.walk(td):
        for f in files:
            if f.endswith(('.jsx', '.js', '.json', '.html')):
                replace_brand_in_file(os.path.join(root, f))

print('All replacements completed successfully!')

