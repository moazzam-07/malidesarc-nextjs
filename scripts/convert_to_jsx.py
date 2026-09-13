import os
import re
from bs4 import BeautifulSoup, Comment, NavigableString, Tag

ATTR_MAP = {
    'class': 'className',
    'for': 'htmlFor',
    'tabindex': 'tabIndex',
    'srcset': 'srcSet',
    'autocomplete': 'autoComplete',
    'autofocus': 'autoFocus',
    'enctype': 'encType',
    'novalidate': 'noValidate',
    'viewbox': 'viewBox',
    'preserveaspectratio': 'preserveAspectRatio',
    'fill-rule': 'fillRule',
    'clip-rule': 'clipRule',
    'stroke-width': 'strokeWidth',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'stroke-miterlimit': 'strokeMiterlimit',
    'clip-path': 'clipPath',
    'stop-color': 'stopColor',
    'stop-opacity': 'stopOpacity',
    'font-size': 'fontSize',
    'font-family': 'fontFamily',
    'text-anchor': 'textAnchor',
    'xmlns:xlink': 'xmlnsXlink',
    'xlink:href': 'xlinkHref',
    'crossorigin': 'crossOrigin',
    'readonly': 'readOnly',
    'maxlength': 'maxLength',
    'minlength': 'minLength',
}

SELF_CLOSING = {'img', 'input', 'br', 'hr', 'source', 'path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'stop', 'link', 'meta'}

def css_to_jsx_style(style_str):
    style_dict = {}
    declarations = [d.strip() for d in style_str.split(';') if d.strip()]
    for d in declarations:
        if ':' in d:
            k, v = d.split(':', 1)
            k = k.strip()
            v = v.strip()
            if k.startswith('--'):
                camel_k = k
            else:
                parts = k.split('-')
                camel_k = parts[0] + ''.join(p.capitalize() for p in parts[1:])
            style_dict[camel_k] = v
    parts = []
    for k, v in style_dict.items():
        val_clean = v.replace('"', '\\"')
        if '-' in k:
            parts.append(f'"{k}": "{val_clean}"')
        else:
            parts.append(f'{k}: "{val_clean}"')
    return '{{ ' + ', '.join(parts) + ' }}'

def normalize_link_href(href):
    if not href:
        return href
    # Normalize internal links:
    # index.html -> /
    # our-project/index.html -> /our-project/
    # ../something -> /something
    if href.startswith('http://') or href.startswith('https://') or href.startswith('mailto:') or href.startswith('tel:') or href.startswith('whatsapp:'):
        return href
    if href.startswith('#'):
        return href
    h = href.replace('\\', '/')
    while h.startswith('../'):
        h = h[3:]
    h = h.lstrip('/')
    if h == 'index.html' or h == '':
        return '/'
    if h.endswith('/index.html'):
        h = h[:-11] + '/'
    elif h.endswith('.html'):
        h = h[:-5]
    if not h.startswith('/'):
        h = '/' + h
    return h

def normalize_src(src):
    if not src:
        return src
    if src.startswith('http://') or src.startswith('https://') or src.startswith('data:'):
        return src
    s = src.replace('\\', '/')
    while s.startswith('../'):
        s = s[3:]
    s = s.lstrip('/')
    return '/' + s

def normalize_srcset(srcset_val):
    if not srcset_val:
        return srcset_val
    entries = srcset_val.split(',')
    norm_entries = []
    for entry in entries:
        entry = entry.strip()
        if not entry:
            continue
        parts = entry.split()
        if parts:
            url = parts[0]
            norm_url = normalize_src(url)
            descriptor = (' ' + ' '.join(parts[1:])) if len(parts) > 1 else ''
            norm_entries.append(norm_url + descriptor)
    return ', '.join(norm_entries)

def node_to_jsx(node, indent=0):
    ind = '  ' * indent
    if isinstance(node, Comment):
        c = str(node).replace('*/', '* /').strip()
        return f'{ind}{{/* {c} */}}\n'
    if isinstance(node, NavigableString):
        text = str(node)
        if not text.strip():
            return ''
        text_escaped = text.replace('{', '&#123;').replace('}', '&#125;').replace('<', '&lt;').replace('>', '&gt;')
        return f'{ind}{text_escaped}\n'
    if not isinstance(node, Tag):
        return ''

    tag_name = node.name
    if tag_name.lower() in ('script', 'style', 'noscript'):
        return ''
    attrs = []
    for k, v in node.attrs.items():
        k_lower = k.lower()
        jsx_k = ATTR_MAP.get(k_lower, k)
        if jsx_k == 'className' and isinstance(v, list):
            attrs.append(f'className="{" ".join(v)}"')
        elif jsx_k == 'style':
            attrs.append(f'style={css_to_jsx_style(v)}')
        elif k_lower in ('href', 'action'):
            norm_h = normalize_link_href(v)
            attrs.append(f'{jsx_k}="{norm_h}"')
        elif k_lower in ('src', 'srcset'):
            if k_lower == 'src':
                norm_s = normalize_src(v)
                attrs.append(f'src="{norm_s}"')
            else:
                norm_ss = normalize_srcset(v)
                attrs.append(f'srcSet="{norm_ss}"')
        elif isinstance(v, bool):
            if v:
                attrs.append(f'{jsx_k}')
        elif isinstance(v, list):
            attrs.append(f'{jsx_k}="{" ".join(v)}"')
        else:
            v_str = str(v).replace('"', '&quot;')
            attrs.append(f'{jsx_k}="{v_str}"')

    attr_str = (' ' + ' '.join(attrs)) if attrs else ''
    
    if tag_name.lower() in SELF_CLOSING:
        self_tag = f'{ind}<{tag_name}{attr_str} />\n'
        if list(node.children):
            sibling_jsx = ''.join(node_to_jsx(child, indent) for child in node.children)
            return self_tag + sibling_jsx
        return self_tag
    
    inner_jsx = ''.join(node_to_jsx(child, indent + 1) for child in node.children)
    if not inner_jsx.strip():
        return f'{ind}<{tag_name}{attr_str}></{tag_name}>\n'
    return f'{ind}<{tag_name}{attr_str}>\n{inner_jsx}{ind}</{tag_name}>\n'

if __name__ == '__main__':
    soup = BeautifulSoup('<div class="box"><img src="wp-content/test.jpg"><a href="our-project/index.html">Projects</a></div>', 'html.parser')
    print(node_to_jsx(soup.find('div')))
