import os
import re
import json

def audit_codebase():
    results = {}

    # All files in components and app
    target_dirs = ['app', 'components', 'lib']
    all_files = []
    for td in target_dirs:
        for root, dirs, files in os.walk(td):
            for f in files:
                if f.endswith(('.jsx', '.js', '.json')):
                    all_files.append(os.path.join(root, f).replace('\\', '/'))

    # Check for specific patterns
    report = []

    for fpath in all_files:
        with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()

        file_report = {
            'file': fpath,
            'wp_images': [],
            'copied_names_or_brands': [],
            'headings': [],
            'has_testimonials': False,
            'has_client_logos': False,
            'has_founders_or_team': False,
        }

        # 1. Images pointing to wp-content/uploads/2026/08/ or 2026/07/ (MaliDesarc scraped images)
        wp_matches = re.findall(r'(/wp-content/uploads/[^\'"\s>]+)', content)
        file_report['wp_images'] = list(set(wp_matches))

        # 2. Copied brand names, client names, staff names, MaliDesarc specific references
        suspicious_terms = [
            'MaliDesarc', 'Mali Desarc', 'malidesarc', 'Rachana', 'Namita', 'Pradeep', 'Moin', 'Ramesh',
            'Manoj and Vinita', 'Mintz Group', '20 Microns', 'Auris Serenity', 'Vidhi Jain',
            'Romell', 'Ruparel', 'SD Group', 'Shapoorji', 'Technova', 'Welset', 'Kanakia', 'Lodha', 'Kohinoor', 'Ahuja', 'Barnet', 'Jettec', 'Miscot', 'MRF', 'Newarch',
            'DGS Gurudarshan', 'Project Rudra', 'Baluwala', 'Stratum', 'Vensco', 'Vora Skyline', 'Emerald Isle', 'Eurogrip', 'Karl Residency', 'Taj Boutique', 'Hosteller', 'DTDC', 'Bellisma'
        ]

        for term in suspicious_terms:
            if re.search(r'\b' + re.escape(term) + r'\b', content, re.IGNORECASE):
                # Don't flag if it's in a comment or generic, but let's note it
                file_report['copied_names_or_brands'].append(term)

        # 3. Headings
        raw_headings = re.findall(r'<h[1-4][^>]*>(.*?)</h[1-4]>', content, re.DOTALL)
        for h in raw_headings:
            clean = re.sub(r'<[^>]+>', '', h).strip()
            clean = re.sub(r'\s+', ' ', clean)
            if clean and len(clean) < 120:
                file_report['headings'].append(clean)

        if 'testimonial' in content.lower() or 'what our clients say' in content.lower() or 'reviews' in content.lower():
            file_report['has_testimonials'] = True

        if 'client-logo' in content.lower() or 'trusted by' in content.lower() or 'partners' in content.lower():
            file_report['has_client_logos'] = True

        if 'founder' in content.lower() or 'meet the team' in content.lower() or 'our team' in content.lower():
            file_report['has_founders_or_team'] = True

        # Keep only files that have issues
        if file_report['wp_images'] or file_report['copied_names_or_brands'] or file_report['has_testimonials'] or file_report['has_client_logos']:
            report.append(file_report)

    return report

if __name__ == '__main__':
    audit = audit_codebase()
    print(f"Total flagged files: {len(audit)}")
    with open('scripts/audit_output.json', 'w', encoding='utf-8') as f:
        json.dump(audit, f, indent=2)
    print("Saved audit report to scripts/audit_output.json")
