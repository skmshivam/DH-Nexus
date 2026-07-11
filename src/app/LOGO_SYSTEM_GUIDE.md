# DH Nexus Logo System

## Overview
The DH Nexus platform uses a comprehensive, modular logo system with the vibrant gradient logo featuring dynamic orange, pink, cyan, blue, and purple colors that create the "DH" letters with "NEXUS" text below.

**Current Logo File:** `figma:asset/951d00fc723ae8912305f3fb955112353119ba55.png`

This logo has been integrated throughout the entire platform with multiple variants optimized for different use cases.

## Logo Components

### 1. **DHNexusLogo** Component
Location: `/components/DHNexusLogo.tsx`

A flexible logo component with multiple variants:

#### Variants:
- **`default`** - Standard size (h-12), good for general use
- **`hero`** - Large size (h-20 to h-24), with drop shadow and hover effects
- **`footer`** - Medium size (h-10), slightly transparent
- **`navigation`** - Navigation bar size (h-10 to h-12), with hover scale effect
- **`watermark`** - Very low opacity (0.05), for background decoration

#### Usage Examples:
```tsx
import { DHNexusLogo } from './components/DHNexusLogo';

// Default usage
<DHNexusLogo />

// With variant
<DHNexusLogo variant="hero" />

// With custom className
<DHNexusLogo variant="navigation" className="my-custom-class" />
```

### 2. **DHNexusLogoGlow** Component
Location: `/components/DHNexusLogo.tsx`

Enhanced logo with gradient glow effect, perfect for hero sections and attention-grabbing placements.

#### Features:
- Glowing cyan/purple/pink gradient background
- Blur effect for soft appearance
- Large size (h-20 to h-24)
- Drop shadow for depth

#### Usage Example:
```tsx
import { DHNexusLogoGlow } from './components/DHNexusLogo';

<DHNexusLogoGlow className="animate-float" />
```

### 3. **DHNexusWatermark** Component
Location: `/components/DHNexusLogo.tsx`

Decorative background watermark with multiple rotated logo instances.

#### Features:
- Ultra-low opacity (0.02) for subtle branding
- Positioned absolutely in container
- Multiple instances for pattern effect
- Non-interactive (pointer-events-none)

#### Usage Example:
```tsx
import { DHNexusWatermark } from './components/DHNexusLogo';

<div className="relative">
  <DHNexusWatermark />
  {/* Your content here */}
</div>
```

## Updated Components

The following components have been updated to use the new logo system:

### Core Components:
1. **Hero.tsx** - Uses `DHNexusLogoGlow` with floating animation
2. **Navigation.tsx** - Uses `DHNexusLogo` with `navigation` variant
3. **Footer.tsx** - Uses `DHNexusLogo` with `footer` variant
4. **AboutPortal.tsx** - Uses `DHNexusLogo` with `default` variant
5. **DHNexusBrand.tsx** - Uses `DHNexusLogo` with custom styling
6. **TeamProfiles.tsx** - Updated import reference

### Pages:
1. **HomePage.tsx** - Added `DHNexusWatermark` for subtle background branding

## Logo Asset
The new logo is imported using the Figma asset system:
```tsx
import dhNexusLogo from 'figma:asset/b5d7067fa9509ed3dd99a45381eaef38bb4944e8.png';
```

**Important:** Never use relative paths with `figma:asset`. It's a virtual module scheme.

## Design Specifications

### Colors in Logo:
- **Orange/Yellow gradient** - Top left of "D"
- **Pink/Magenta gradient** - Left side of letters
- **Teal/Cyan gradient** - Right side of letters, top of "H"
- **Blue/Purple gradient** - Throughout letters
- **Dark Navy** - "NEXUS" text

### Logo Characteristics:
- Modern, vibrant gradient design
- Bold, geometric letterforms
- Professional yet creative aesthetic
- Works well on both light and dark backgrounds

## Hover Effects & Animations

Different variants include different interactive effects:

- **Hero variant**: Scale on hover + enhanced drop shadow glow
- **Navigation variant**: Subtle scale increase (1.05x)
- **Footer variant**: Opacity increase (0.9 → 1.0)
- **Watermark variant**: Minimal hover effect (0.05 → 0.1 opacity)

## Accessibility

All logo components include:
- Descriptive alt text: "DH Nexus - Digital Humanities Talent Network"
- Semantic HTML structure
- Proper contrast ratios
- Responsive sizing

## Best Practices

### Do's:
✅ Use appropriate variants for context
✅ Maintain consistent sizing within sections
✅ Let the logo breathe with adequate spacing
✅ Use the glow variant for hero/promotional sections
✅ Add the watermark for subtle branding on long pages

### Don'ts:
❌ Don't scale the logo below h-8 (too small to read)
❌ Don't place on complex backgrounds without testing
❌ Don't modify the source colors
❌ Don't use multiple watermarks on short pages
❌ Don't override critical accessibility properties

## Future Enhancements

Potential improvements for future iterations:
- Animated logo variant with gradient motion
- SVG version for better scalability
- Dark mode optimized variant
- Favicon integration
- Loading state animation
- Monochrome variant for special contexts

## Technical Notes

### Performance:
- Uses native `<img>` tags for best performance
- Lazy loading handled by browser
- CSS transitions for smooth animations
- Minimal JavaScript (only for component props)

### Browser Support:
- All modern browsers (Chrome, Firefox, Safari, Edge)
- Fallback alt text for screen readers
- Graceful degradation for older browsers

### SEO Considerations:
- Descriptive alt text for image SEO
- Proper semantic HTML structure
- Logo appears in structured data (StructuredData.tsx)
- Referenced in SEO meta tags (SEO.tsx)

## Maintenance

When updating the logo:
1. Replace the Figma asset reference in `/components/DHNexusLogo.tsx`
2. Test all variants across different pages
3. Verify responsive behavior on mobile
4. Check accessibility with screen readers
5. Update this documentation

## Questions or Issues?

Contact the DH Nexus development team:
- Email: m24id1009@iitj.ac.in
- Platform: DH Nexus Team Portal