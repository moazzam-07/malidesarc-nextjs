import os
import json
import re
from PIL import Image, ImageOps

SRC_DIR = r"C:\Users\MOAZZAM\Downloads\Amar Designer-20260913T150453Z-1-001\Amar Designer"
DEST_DIR = r"public\images\projects"
HOMEPAGE_DEST = r"public\images\homepage"

PROJECT_SPECS = {
    "Bhayndar": {
        "slug": "bhayander-residence",
        "title": "Bhayandar Luxury Residence",
        "category": "residential",
        "categoryLabel": "Residential",
        "location": "Bhayandar West, Mumbai",
        "area": "3 BHK • 1,350 sq. ft.",
        "year": "2024",
        "tagline": "Modern Minimalist Living with Warm Wooden Accents",
        "description": "A refined residential sanctuary featuring bespoke fluted wall paneling, integrated warm LED profile lighting, minimalist false ceiling geometries, and custom modular storage tailored for modern family living.",
        "highlights": ["Fluted Wall Paneling", "Profile LED Lighting", "Bespoke TV Unit", "Master Bedroom Suite"]
    },
    "Borivali": {
        "slug": "borivali-residence",
        "title": "Borivali Modern Apartment",
        "category": "residential",
        "categoryLabel": "Residential",
        "location": "Borivali West, Mumbai",
        "area": "2 BHK • 980 sq. ft.",
        "year": "2023",
        "tagline": "Contemporary Urban Living with Smart Spatial Planning",
        "description": "Designed with clean contemporary lines, an open-concept living and dining layout, custom media consoles, and a modern master suite that maximizes natural light and usable floor area.",
        "highlights": ["Open Concept Living", "Custom Modular Wardrobes", "Compact Kitchen Architecture", "Contemporary Ambient Lighting"]
    },
    "Chembur": {
        "slug": "chembur-residence",
        "title": "Chembur Contemporary Home",
        "category": "residential",
        "categoryLabel": "Residential",
        "location": "Chembur, Mumbai",
        "area": "3 BHK • 1,520 sq. ft.",
        "year": "2023",
        "tagline": "Sophisticated Textures & Neutral Elegance",
        "description": "A timeless home interior characterized by premium neutral palettes, custom upholstered furnishings, elegant marble finishes, and functional modular kitchen architecture.",
        "highlights": ["Neutral Color Palette", "Custom Upholstered Headboards", "Modular Kitchen Architecture", "Seamless Storage Solutions"]
    },
    "Ghatkopar": {
        "slug": "ghatkopar-penthouse",
        "title": "Ghatkopar Premium Penthouse",
        "category": "residential",
        "categoryLabel": "Residential",
        "location": "Ghatkopar East, Mumbai",
        "area": "4 BHK • 2,400 sq. ft.",
        "year": "2024",
        "tagline": "Opulent Living with Grand Volume & Bespoke Millwork",
        "description": "A sprawling luxury penthouse featuring double-height ceiling accents, Italian marble flooring, intricate brass inlay detailing, bespoke designer bedrooms, and ambient cove lighting throughout.",
        "highlights": ["Italian Marble Flooring", "Double-Height Ceiling Details", "Brass Inlay Woodwork", "Bespoke Dressing Lounge"]
    },
    "Ghatkopar 2": {
        "slug": "ghatkopar-architectural-residence",
        "title": "Ghatkopar Architectural Residence",
        "category": "show-flats",
        "categoryLabel": "Show Flats & 3D Concepts",
        "location": "Ghatkopar, Mumbai",
        "area": "3 BHK • 1,650 sq. ft.",
        "year": "2024",
        "tagline": "Photorealistic 3D Concept to Turnkey Realization",
        "description": "Showcasing the complete design lifecycle from high-end photorealistic 3D architectural renders to turnkey site execution, featuring curated mood lighting, Scandinavian wood textures, and luxury bathroom design.",
        "highlights": ["Photorealistic 3D Renders", "Turnkey Site Execution", "Scandinavian Wood Elements", "Luxury Master Bath"]
    },
    "Haldiram (Hospitality)": {
        "slug": "haldiram-hospitality",
        "title": "Haldiram Fine Dining & Hospitality",
        "category": "hospitality",
        "categoryLabel": "Hospitality",
        "location": "Mumbai Metropolitan Region",
        "area": "Commercial • 3,800 sq. ft.",
        "year": "2023",
        "tagline": "High-Traffic Hospitality Architecture & Premium Ambience",
        "description": "A flagship hospitality and fine-dining venue combining durable high-traffic materials with a warm, inviting dining atmosphere, acoustic ceiling treatments, and custom illuminated service counters.",
        "highlights": ["Acoustic Ceiling Architecture", "Illuminated Service Counters", "Custom Dining Furniture", "Warm Ambient Luminescence"]
    },
    "JKT Kopar Khairane (COMMERCIAL)_": {
        "slug": "jkt-corporate-office",
        "title": "JKT Corporate Office, Kopar Khairane",
        "category": "commercial",
        "categoryLabel": "Commercial",
        "location": "Kopar Khairane, Navi Mumbai",
        "area": "Commercial • 4,500 sq. ft.",
        "year": "2023",
        "tagline": "Ergonomic Workspaces & Prestigious Executive Suites",
        "description": "A state-of-the-art corporate interior designed for seamless collaboration, featuring sound-insulated executive cabins, ergonomic open workstations, glass partitions, and a grand reception lobby.",
        "highlights": ["Executive Conference Suites", "Acoustic Glass Partitions", "Ergonomic Workstations", "Branded Reception Lobby"]
    },
    "Kalyan": {
        "slug": "kalyan-residence",
        "title": "Kalyan Elegant Residence",
        "category": "residential",
        "categoryLabel": "Residential",
        "location": "Kalyan, Maharashtra",
        "area": "3 BHK • 1,400 sq. ft.",
        "year": "2023",
        "tagline": "Warm Domestic Comfort with Handcrafted Details",
        "description": "Thoughtfully curated residential spaces blending comfortable domestic warmth with bespoke storage solutions, textured accent walls, and custom-designed headboards and study units.",
        "highlights": ["Textured Accent Feature Walls", "Handcrafted Wooden Details", "Integrated Study Nook", "Comfortable Master Bedroom"]
    },
    "Matunga": {
        "slug": "matunga-residence",
        "title": "Matunga Bespoke Residence",
        "category": "residential",
        "categoryLabel": "Residential",
        "location": "Matunga, Mumbai",
        "area": "3 BHK • 1,300 sq. ft.",
        "year": "2023",
        "tagline": "Art Deco Influences & Modern Architectural Polish",
        "description": "Nestled in the cultural heart of Matunga, this residence features subtle heritage-inspired geometry, premium veneer paneling, bespoke wardrobe systems, and sophisticated concealed ambient illumination.",
        "highlights": ["Premium Veneer Paneling", "Concealed LED Coves", "Geometric Design Accents", "Bespoke Wardrobe Suites"]
    },
    "Mulund": {
        "slug": "mulund-residence",
        "title": "Mulund Contemporary Residence",
        "category": "residential",
        "categoryLabel": "Residential",
        "location": "Mulund West, Mumbai",
        "area": "2.5 BHK • 1,150 sq. ft.",
        "year": "2023",
        "tagline": "Clean Minimalism, Reflective Surfaces & Calming Tones",
        "description": "An airy, modern apartment focused on space optimization, utilizing tinted mirrors, fluted glass partitions, seamless modular wardrobes, and a sleek dining nook.",
        "highlights": ["Tinted Mirror Accents", "Fluted Glass Partitions", "Seamless Modular Storage", "Open Living & Dining Flow"]
    },
    "Powai_": {
        "slug": "powai-residence",
        "title": "Powai Luxury Residence",
        "category": "residential",
        "categoryLabel": "Residential",
        "location": "Powai, Mumbai",
        "area": "3 BHK • 1,800 sq. ft.",
        "year": "2023",
        "tagline": "Lakeside Elegance with Neo-Classical Flourishes",
        "description": "A high-floor luxury residence overlooking Powai lake, designed with neo-classical molding profiles, plush contemporary seating, designer chandelier lighting, and a state-of-the-art chef's kitchen.",
        "highlights": ["Neo-Classical Wall Moldings", "Designer Chandelier Lighting", "Luxury Marble Finishes", "Custom Entertainment Console"]
    }
}

def clean_filename(name):
    base, _ = os.path.splitext(name)
    base = re.sub(r'[^a-zA-Z0-9_\-]', '_', base)
    return base.lower()

def optimize_image(src_path, dest_path, max_dim=1920, quality=84):
    try:
        with Image.open(src_path) as im:
            # Handle EXIF orientation
            im = ImageOps.exif_transpose(im)
            im = im.convert('RGB')
            
            w, h = im.size
            if max(w, h) > max_dim:
                if w > h:
                    new_w = max_dim
                    new_h = int(h * (max_dim / w))
                else:
                    new_h = max_dim
                    new_w = int(w * (max_dim / h))
                im = im.resize((new_w, new_h), Image.Resampling.LANCZOS)
            
            os.makedirs(os.path.dirname(dest_path), exist_ok=True)
            im.save(dest_path, 'WEBP', quality=quality, method=6)
            return im.size
    except Exception as e:
        print(f"Error optimizing {src_path}: {e}")
        return None

def process_all():
    os.makedirs(DEST_DIR, exist_ok=True)
    os.makedirs(HOMEPAGE_DEST, exist_ok=True)
    
    projects_data = []
    
    # Process 11 Project Folders
    for folder_name, spec in PROJECT_SPECS.items():
        src_folder = os.path.join(SRC_DIR, folder_name)
        slug = spec["slug"]
        project_out_dir = os.path.join(DEST_DIR, slug)
        os.makedirs(project_out_dir, exist_ok=True)
        
        print(f"\nProcessing {folder_name} -> {slug}...")
        
        files = sorted(os.listdir(src_folder))
        img_files = [f for f in files if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp'))]
        
        gallery = []
        cover_image = None
        
        for idx, img_name in enumerate(img_files):
            src_img_path = os.path.join(src_folder, img_name)
            clean_name = f"{idx+1:02d}_{clean_filename(img_name)}.webp"
            out_img_path = os.path.join(project_out_dir, clean_name)
            rel_web_path = f"/images/projects/{slug}/{clean_name}"
            
            dims = optimize_image(src_img_path, out_img_path, max_dim=1920, quality=84)
            if dims:
                w, h = dims
                item = {
                    "src": rel_web_path,
                    "width": w,
                    "height": h,
                    "alt": f"{spec['title']} - Photo {idx+1}"
                }
                gallery.append(item)
                if cover_image is None:
                    cover_image = rel_web_path
                    print(f"  [Cover] {clean_name} ({w}x{h})")
                else:
                    print(f"  [Gallery] {clean_name} ({w}x{h})")
                    
        # Also create a dedicated 800x600 thumbnail for fast grid rendering
        if gallery:
            thumb_src = os.path.join(src_folder, img_files[0])
            thumb_dest = os.path.join(project_out_dir, "thumb.webp")
            thumb_dims = optimize_image(thumb_src, thumb_dest, max_dim=900, quality=82)
            thumbnail_path = f"/images/projects/{slug}/thumb.webp" if thumb_dims else cover_image
        else:
            thumbnail_path = cover_image
            
        project_entry = {
            **spec,
            "id": slug,
            "coverImage": cover_image,
            "thumbnail": thumbnail_path,
            "imageCount": len(gallery),
            "gallery": gallery
        }
        projects_data.append(project_entry)
        
    # Process Home Page folder
    homepage_src = os.path.join(SRC_DIR, "Home Page")
    homepage_images = []
    if os.path.exists(homepage_src):
        print("\nProcessing Home Page curated images...")
        hp_files = sorted(os.listdir(homepage_src))
        hp_imgs = [f for f in hp_files if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp'))]
        for idx, img_name in enumerate(hp_imgs):
            src_img_path = os.path.join(homepage_src, img_name)
            clean_name = f"hero_{idx+1:02d}_{clean_filename(img_name)}.webp"
            out_img_path = os.path.join(HOMEPAGE_DEST, clean_name)
            rel_web_path = f"/images/homepage/{clean_name}"
            dims = optimize_image(src_img_path, out_img_path, max_dim=1920, quality=84)
            if dims:
                w, h = dims
                homepage_images.append({
                    "src": rel_web_path,
                    "width": w,
                    "height": h,
                    "alt": f"SPACEWORA Featured Showcase {idx+1}"
                })
                print(f"  [Home] {clean_name} ({w}x{h})")

    # Save JSON metadata for Next.js
    data_out = {
        "projects": projects_data,
        "homepage": homepage_images
    }
    
    with open("lib/projectsData.json", "w", encoding="utf-8") as f:
        json.dump(data_out, f, indent=2)
    print("\nSaved lib/projectsData.json successfully!")
    
    # Generate JavaScript module
    js_code = f"""// Generated by scripts/import_and_optimize_projects.py
import projectsJson from './projectsData.json';

export const ALL_PROJECTS = projectsJson.projects;
export const HOMEPAGE_HIGHLIGHTS = projectsJson.homepage;

export const CATEGORIES = [
  {{ id: 'all', label: 'All Projects' }},
  {{ id: 'residential', label: 'Residential' }},
  {{ id: 'commercial', label: 'Commercial' }},
  {{ id: 'hospitality', label: 'Hospitality' }},
  {{ id: 'show-flats', label: 'Show Flats & 3D' }},
];

export function getAllProjects() {{
  return ALL_PROJECTS;
}}

export function getProjectBySlug(slug) {{
  return ALL_PROJECTS.find((p) => p.slug === slug) || null;
}}

export function getFeaturedProjects() {{
  // Selected high-impact showcase projects for homepage
  const featuredSlugs = [
    'haldiram-hospitality',
    'ghatkopar-penthouse',
    'powai-residence',
    'jkt-corporate-office',
    'bhayander-residence',
    'matunga-residence'
  ];
  return ALL_PROJECTS.filter((p) => featuredSlugs.includes(p.slug));
}}
"""
    with open("lib/projectsData.js", "w", encoding="utf-8") as f:
        f.write(js_code)
    print("Saved lib/projectsData.js module successfully!")

if __name__ == "__main__":
    process_all()

