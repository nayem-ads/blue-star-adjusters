import os

path = 'src/components/Header.astro'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

old_nav = """const nav = [
  // w = Figma text box width (42:87-42:90); keeps the nav exactly 431px wide as in Figma.
  { label: 'What We Do', href: ROUTES.whatWeDo, w: 98 },
  { label: 'Our Founder', href: ROUTES.founder, w: 98 },
  { label: 'How It Works', href: '/how-it-works/', w: 103 },
  { label: 'Fees', href: '/fees/', w: 36 },
];"""

new_nav = """const nav = [
  // w = Figma text box width (42:87-42:90); keeps the nav exactly 431px wide as in Figma.
  { label: 'What We Do', href: ROUTES.whatWeDo, w: 98,
    sub: [
      { label: 'Residential', href: ROUTES.whatWeDo },
      { label: 'Commercial', href: '/commercial-claims/' },
      { label: 'Fire & Smoke', href: '/claims/fire-smoke-damage/' },
      { label: 'Water & Plumbing', href: '/claims/water-damage/' },
      { label: 'Denied or Underpaid', href: '/claims/denied-or-underpaid/' }
    ]
  },
  { label: 'Who We Are', href: ROUTES.whoWeAre, w: 98,
    sub: [
      { label: 'Our Founder', href: ROUTES.founder },
      { label: 'Why Blue Star', href: ROUTES.whyBlueStar },
      { label: 'Results', href: '/results/' }
    ]
  },
  { label: 'How It Works', href: '/how-it-works/', w: 103 },
  { label: 'Fees', href: '/fees/', w: 36 },
];"""

content = content.replace(old_nav, new_nav)

old_desktop_nav = """    <nav class="bs-header__nav" aria-label="Main">
      <ul>
        {nav.map((l) => <li><a href={l.href} class="bs-navlink" style={`min-width:${l.w}px`} aria-current={isCurrent(l.href) ? 'page' : undefined}>{l.label}</a></li>)}
      </ul>
    </nav>"""

new_desktop_nav = """    <nav class="bs-header__nav" aria-label="Main">
      <ul class="flex items-center gap-[32px] list-none m-0 p-0">
        {nav.map((l) => (
          <li class="relative group h-[88px] flex items-center" style={`min-width:${l.w}px`}>
            <a href={l.href} class="bs-navlink flex items-center gap-[4px] w-full" aria-current={isCurrent(l.href) ? 'page' : undefined}>
              {l.label}
              {l.sub && <Icon name="chevron-down" size={16} class="transition-transform group-hover:rotate-180" />}
            </a>
            {l.sub && (
              <ul class="hidden group-hover:flex absolute top-full left-0 min-w-[240px] bg-white border border-line shadow-lg rounded-[4px] py-[12px] flex-col z-50 bs-dropdown-menu">
                {l.sub.map((s) => (
                  <li><a href={s.href} class="block px-[16px] py-[8px] text-[15px] font-medium text-ink hover:text-royal bs-dropdown-link" aria-current={isCurrent(s.href) ? 'page' : undefined}>{s.label}</a></li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>"""

content = content.replace(old_desktop_nav, new_desktop_nav)

old_mobile_nav = """    <nav class="bs-menu__nav" aria-label="Mobile">
      <ul>
        {menu.map((l) => <li><a href={l.href} class="bs-menu__item" aria-current={isCurrent(l.href) ? 'page' : undefined}><span>{l.label}</span><Icon name="arrow-right" size={24} /></a></li>)}
      </ul>
    </nav>"""

new_mobile_nav = """    <nav class="bs-menu__nav" aria-label="Mobile">
      <ul class="m-0 p-0 list-none">
        {menu.map((l) => (
          <li class="border-b border-white last:border-b-0">
            <a href={l.href} class="bs-menu__item flex items-center justify-between py-[16px]" aria-current={isCurrent(l.href) ? 'page' : undefined} style="border-bottom:none">
              <span>{l.label}</span>
              {!l.sub && <Icon name="arrow-right" size={24} />}
            </a>
            {l.sub && (
              <ul class="m-0 pl-[16px] pb-[16px] list-none flex flex-col">
                {l.sub.map((s: any) => (
                  <li><a href={s.href} class="block py-[12px] text-[16px] font-medium text-white/80 hover:text-white hover:underline underline-offset-4" aria-current={isCurrent(s.href) ? 'page' : undefined}>{s.label}</a></li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>"""

content = content.replace(old_mobile_nav, new_mobile_nav)

old_css_comment = "/* Mobile menu (42:164 / 63:780): full-screen navy overlay */"
new_css = """  .bs-header--dark .bs-dropdown-menu { background: var(--color-navy); border-color: rgba(255,255,255,0.1); }
  .bs-header--dark .bs-dropdown-link { color: rgba(255,255,255,0.8); }
  .bs-header--dark .bs-dropdown-link:hover, .bs-header--dark .bs-dropdown-link[aria-current="page"] { color: #fff; }
  
  /* Mobile menu (42:164 / 63:780): full-screen navy overlay */"""

content = content.replace(old_css_comment, new_css)
content = content.replace(".bs-header__nav ul { display: flex; gap: 32px; align-items: center; list-style: none; margin: 0; padding: 0; }", "")
content = content.replace(".bs-header__nav ul { gap: 20px !important; }", ".bs-header__nav > ul { gap: 20px !important; }")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
