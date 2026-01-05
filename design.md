# PROJECT SPECIFICATION: "Focus & Flow" Therapeutic Boxing Website

**Role:** Expert Frontend Developer / UX Designer
**Objective:** Build a responsive website for a therapeutic boxing gym.
**Vibe:** Professional, Calming, Safe, Modern, Strong.

---

## 1. DESIGN TOKENS & VARIABLES

### A. Color Palette (CSS Variables)
Please implement these exact hex codes. I have included "Hover" and "Surface" variations for depth.

* **--color-primary-navy:** `#1B263B` (Deep Ocean Navy - Used for Navbar, Footer, Main Headings)
* **--color-primary-navy-dark:** `#0D131E` (Darker shade for active states)
* **--color-secondary-sage:** `#778DA9` (Sage Blue/Grey - Used for subheadings, icons, secondary borders)
* **--color-secondary-sage-light:** `#E0E1DD` (Very light sage - Used for subtle section backgrounds)
* **--color-accent-teal:** `#4CC9F0` (Electric Teal - Used strictly for Primary Buttons and CTAs)
* **--color-accent-teal-hover:** `#3AB0D6` (Darker teal for button hover states)
* **--color-bg-body:** `#F8F9FA` (Off-White/Cloud - Main page background)
* **--color-bg-surface:** `#FFFFFF` (Pure White - Card backgrounds, Form fields)
* **--color-text-main:** `#212529` (Charcoal - Main body text)
* **--color-text-muted:** `#495057` (Grey - Meta text, footer text)
* **--color-success:** `#2A9D8F` (For success messages)
* **--color-error:** `#E63946` (For error states - kept warm, not alarming)

### B. Typography
Use Google Fonts.
* **Headings:** `Montserrat` (Weights: 600, 700). Clean, geometric, strong but not aggressive.
* **Body:** `Inter` or `Lato` (Weights: 400, 500). High legibility, neutral feel.

**Type Scale:**
* **H1:** 3.5rem (Desktop) / 2.5rem (Mobile) - Tight line-height (1.1)
* **H2:** 2.5rem (Desktop) / 2.0rem (Mobile)
* **H3:** 1.75rem
* **Body:** 1rem (16px) - Relaxed line-height (1.6) for readability.

### C. UI Elements & Styling Rules

**1. Buttons:**
* **Primary Button:** Background `--color-accent-teal`, Text `--color-primary-navy` (for contrast).
    * *Shape:* `border-radius: 8px` (Soft square, friendly but stable).
    * *Weight:* Semi-bold (600).
    * *Hover:* Transform translateY(-2px) + Slight shadow.
* **Secondary Button:** Transparent background, Border `2px solid --color-primary-navy`, Text `--color-primary-navy`.

**2. Cards (Services/Trainers):**
* Background: `--color-bg-surface` (#FFFFFF)
* Border: `1px solid #E9ECEF` (Very subtle)
* Shadow: `0 4px 6px -1px rgba(27, 38, 59, 0.1)` (Soft Navy shadow, not black)
* Radius: `12px`

**3. Imagery Styling:**
* Images should have a slight "cool" filter or be bright and airy.
* Corner Radius on images: `12px`.

**4. Spacing (Whitespace):**
* Use generous padding. This is a *therapeutic* space; the design should not feel cramped.
* Section Padding: `80px 20px` (Desktop).

---

## 2. KEY SECTIONS TO BUILD

0.  **Header/Navigation (IMPLEMENTED):**
    * **Position:** Fixed at top, always visible (z-index: 1000)
    * **Background:** `--color-primary-navy` with enhanced shadow `0 4px 12px rgba(27, 38, 59, 0.25)`
    * **Layout:** 
        - Left: Logo "Mind Movement" in Montserrat 700, 1.75rem, white color with text shadow
        - Right: Navigation links with 3rem spacing
    * **Navigation Links:**
        - Font: Inter 600, 1.125rem, white color
        - Hover: `--color-accent-teal` with lift effect (translateY -2px)
        - Active: Teal color with animated underline (3px)
        - All links capitalized
    * **Responsive:**
        - Desktop padding: 1.5rem 4rem (full width, no max-width)
        - Mobile: Reduces padding and font sizes progressively
    * **Design Choices:**
        - Enhanced visual prominence with larger, bolder text
        - Backdrop blur effect for modern glass-morphism
        - Animated hover states (slide left for logo, lift for links)
        - Animated underline scales in on hover/active
        - More generous edge padding (4rem) for premium feel

1.  **Hero/Welcome Section (IMPLEMENTED):**
    * **Layout:** Full viewport height (100vh, min 700px)
    * **Background:** Animated video of boxing/workout with overlay
        - Video: looping, autoplay, muted, covers full section
        - Overlay: `--color-primary-navy` at 70% opacity
        - Z-index layering: video (1) → overlay (2) → content (3)
    * **Central Element:** Circular logo design
        - Size: 400px diameter (responsive down to 280px)
        - Border: 4px gradient ring (teal to sage, 135deg)
        - Interior: Navy background with subtle teal glow
        - Logo: "Mind" in teal (4rem), "Movement" in white (4rem)
        - Text shadow for depth
        - Pulsing glow animation (3s infinite)
    * **Subtitle:** "Therapeutisches Boxen und Physiologie und Beratung"
        - Font: Inter 400, 1.5rem
        - Color: White with 95% opacity
        - Max-width: 700px, centered
        - Text shadow for readability over video
    * **Animations:**
        - Fade in up on load (1.2s ease-out)
        - Continuous pulse glow on circle
    * **Design Choices:**
        - Video provides dynamic, engaging background
        - Circle creates focal point and "cutting" effect
        - Gradient border adds sophistication without being flashy
        - One gradient exception justified for hero impact
        - Teal glow reinforces brand color
        - Generous spacing and clear hierarchy

2.  **About/Methodology:**
    * Background: `--color-bg-body`.
    * Split layout: Text on one side, Image on the other.
    * Focus on "Mental Clarity" + "Physical Strength."

3.  **Classes/Services:**
    * Grid layout using the **Card** style defined above.
    * Icons: Use feather-icons or lucide-react (clean, thin lines).

4.  **Footer:**
    * Background: `--color-primary-navy`.
    * Text: White/Grey.

---

## 3. TECHNICAL INSTRUCTIONS

* **Framework:** [Insert your preferred framework here, e.g., React/Next.js/HTML5]
* **Styling:** [Insert preference, e.g., Tailwind CSS / CSS Modules / Styled Components]
* **Responsiveness:** Mobile-first approach.
* **Accessibility:** Ensure all text on Teal buttons has high enough contrast (Navy text is better than White text on Teal).