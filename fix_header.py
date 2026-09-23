import re
with open('src/components/Header.astro', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Update video tags for maximum mobile compatibility
code = code.replace(
    '<video autoplay loop muted playsinline poster="/hero-poster.jpg"',
    '<video autoplay="autoplay" loop="loop" muted="muted" playsinline="playsinline" poster="/hero-poster.jpg"'
)

# 2. Make header sticky and blue on desktop
# Find the CSS block
css_find = """  .bs-header { position: relative; z-index: 40; width: 100%; box-sizing: border-box; height: 64px; }
  @media (min-width: 64rem) { .bs-header { height: 88px; } }
  .bs-header--overlay { position: absolute; top: 0; left: 0; right: 0; }
  .bs-header--open { z-index: 100; } /* the menu lives in the header's stacking context: lift it over the call bar and page */
  .bs-header--light { background: #fff; border-bottom: 1px solid var(--color-line); } /* Figma lays content out in 87px (y 23.5) above the 1px stroke */
  .bs-header--dark { background: transparent; color: #fff; }"""

css_replace = """  .bs-header { position: relative; z-index: 40; width: 100%; box-sizing: border-box; height: 64px; }
  .bs-header--overlay { position: absolute; top: 0; left: 0; right: 0; }
  .bs-header--open { z-index: 100; }
  .bs-header--light { background: #fff; border-bottom: 1px solid var(--color-line); }
  .bs-header--dark { background: transparent; color: #fff; }

  @media (min-width: 64rem) { 
    .bs-header { height: 88px; position: sticky; top: 0; background: var(--color-navy) !important; color: #fff !important; } 
    /* Remove absolute positioning when sticky */
    .bs-header--overlay { position: sticky; }
    /* Force links and phone to be white on desktop */
    .bs-navlink, .bs-header__phone { color: #fff !important; }
    /* Force white logo on desktop */
    .bs-header__logo .hidden.lg\:block { display: none !important; }
    .bs-header__logo-white-override { display: block !important; }
  }"""

code = code.replace(css_find, css_replace)

# 3. Add the white logo override to the desktop logo area
logo_find = """    <a href={ROUTES.home} class="bs-header__logo" aria-label="Blue Star Adjusters home" aria-current={here === '/' ? 'page' : undefined}>
      {dark
        ? <>
            <Logo variant="horizontal-white" bare width={213} height={72} class="hidden lg:block -m-[16px]" label="Blue Star Adjusters" />
            <Logo variant="horizontal-white" bare width={159.75} height={54} class="lg:hidden -m-[12px]" label="Blue Star Adjusters" />
          </>
        : <>
            <Logo variant="horizontal-color" width={181} height={40} class="hidden lg:block" label="Blue Star Adjusters" />
            <Logo variant="horizontal-color" width={135.75} height={30} class="lg:hidden" label="Blue Star Adjusters" />
          </>}
    </a>"""

logo_replace = """    <a href={ROUTES.home} class="bs-header__logo" aria-label="Blue Star Adjusters home" aria-current={here === '/' ? 'page' : undefined}>
      <Logo variant="horizontal-white" bare width={213} height={72} class="hidden bs-header__logo-white-override -m-[16px]" label="Blue Star Adjusters" />
      {dark
        ? <>
            <Logo variant="horizontal-white" bare width={213} height={72} class="hidden lg:block -m-[16px]" label="Blue Star Adjusters" />
            <Logo variant="horizontal-white" bare width={159.75} height={54} class="lg:hidden -m-[12px]" label="Blue Star Adjusters" />
          </>
        : <>
            <Logo variant="horizontal-color" width={181} height={40} class="hidden lg:block" label="Blue Star Adjusters" />
            <Logo variant="horizontal-color" width={135.75} height={30} class="lg:hidden" label="Blue Star Adjusters" />
          </>}
    </a>"""

code = code.replace(logo_find, logo_replace)

with open('src/components/Header.astro', 'w', encoding='utf-8') as f:
    f.write(code)

with open('src/sections/home-a/Hero.astro', 'r', encoding='utf-8') as f:
    hero = f.read()

hero = hero.replace('<video autoplay loop muted playsinline', '<video autoplay="autoplay" loop="loop" muted="muted" playsinline="playsinline"')

with open('src/sections/home-a/Hero.astro', 'w', encoding='utf-8') as f:
    f.write(hero)
