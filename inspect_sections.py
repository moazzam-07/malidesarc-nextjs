import os
from bs4 import BeautifulSoup

source_file = r'C:\Users\MOAZZAM\coding\incinc_projects\new_interior\index.html'
with open(source_file, 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

# 1. Header (elementor-6886)
header = soup.select_one('header.elementor-6886')
print("Header length:", len(str(header)) if header else 0)

# 2. Footer (elementor-9770)
footer = soup.select_one('footer.elementor-9770')
print("Footer length:", len(str(footer)) if footer else 0)

# 3. Popup (elementor-7903)
popup = soup.select_one('div.elementor-7903')
print("Popup length:", len(str(popup)) if popup else 0)

# 4. WhatsApp floating buttons (elementor-11543)
whatsapp = soup.select_one('div.elementor-11543')
print("WhatsApp length:", len(str(whatsapp)) if whatsapp else 0)

# 5. Main content of index.html
main = soup.select_one('main#content')
print("Main content length:", len(str(main)) if main else 0)
if main:
    sections = main.select('.elementor > .e-con, .elementor > .elementor-section')
    print(f"Main sections count: {len(sections)}")
    for i, s in enumerate(sections):
        classes = s.get('class', [])
        data_id = s.get('data-id', '')
        print(f"  Section {i+1} [data-id={data_id}]: {classes[:4]}")

