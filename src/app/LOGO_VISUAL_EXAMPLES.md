# DH Nexus Logo - Visual Examples & Usage Guide

## Quick Reference Guide

### 1. Navigation Bar Usage
```tsx
<nav>
  <DHNexusLogo variant="navigation" />
</nav>
```
**Result**: Clean, professional logo that scales smoothly on hover

---

### 2. Hero Section Usage
```tsx
<section className="hero">
  <DHNexusLogoGlow className="animate-float" />
  <h1>Your Amazing Headline</h1>
</section>
```
**Result**: Eye-catching logo with gradient glow and gentle floating animation

---

### 3. Footer Usage
```tsx
<footer>
  <DHNexusLogo variant="footer" />
  <p>Copyright information...</p>
</footer>
```
**Result**: Subtle, elegant logo that doesn't overpower footer content

---

### 4. Background Watermark
```tsx
<div className="relative">
  <DHNexusWatermark />
  <YourContent />
</div>
```
**Result**: Subtle branded background that adds polish without distraction

---

### 5. Loading Screen
```tsx
{isLoading && (
  <LoadingScreen message="Loading DH Nexus..." />
)}
```
**Result**: Professional full-screen loader with animated logo

---

### 6. Inline Loading Spinner
```tsx
<button>
  {loading ? <LogoSpinner size="sm" /> : "Submit"}
</button>
```
**Result**: Compact spinner for inline loading states

---

## Visual Hierarchy Examples

### Large Impact (Hero/CTA)
```tsx
<DHNexusLogoGlow />          // h-20 to h-24, with glow
<DHNexusLogo variant="hero" /> // h-20 to h-24, drop shadow
```

### Standard Display (General Use)
```tsx
<DHNexusLogo />              // h-12, default
<DHNexusLogo variant="default" />
```

### Navigation/Header
```tsx
<DHNexusLogo variant="navigation" /> // h-10 to h-12, hover effect
```

### Footer/Subtle
```tsx
<DHNexusLogo variant="footer" /> // h-10, subtle opacity
```

### Background Decoration
```tsx
<DHNexusWatermark />         // opacity: 0.02, decorative
<DHNexusLogo variant="watermark" /> // opacity: 0.05
```

---

## Color Combinations That Work Well

### Light Backgrounds
✅ White/Off-white backgrounds
✅ Light gray (#f8f9fa, #f1f5f9)
✅ Pastel colors (light blue, light purple)

### Dark Backgrounds
✅ Dark slate (#0f172a, #1e293b)
✅ Navy blue (#1e3a8a)
✅ Deep purple (#581c87)
✅ Gradient dark backgrounds

### Avoid
❌ Highly saturated color backgrounds
❌ Busy patterns without opacity adjustment
❌ Colors similar to logo gradients

---

## Animation Timing Reference

```css
/* Float Animation - Gentle bounce */
animation: float 6s ease-in-out infinite;

/* Float Delayed - Offset timing */
animation: float-delayed 7s ease-in-out infinite;

/* Float Slow - Subtle movement */
animation: float-slow 8s ease-in-out infinite;

/* Loading Bar - Progress indicator */
animation: loading-bar 1.5s ease-in-out infinite;
```

---

## Responsive Breakpoints

### Mobile (< 768px)
- Logo height: h-8 to h-10
- Simplified animations
- Optimized spacing

### Tablet (768px - 1024px)
- Logo height: h-10 to h-12
- Standard animations
- Balanced spacing

### Desktop (> 1024px)
- Logo height: h-12 to h-24 (context-dependent)
- Full animations
- Generous spacing

---

## Common Patterns

### Pattern 1: Card Header with Logo
```tsx
<div className="card">
  <div className="card-header">
    <DHNexusLogo variant="default" />
    <h3>Card Title</h3>
  </div>
  <div className="card-body">
    Content here...
  </div>
</div>
```

### Pattern 2: Loading State
```tsx
function MyComponent() {
  const [loading, setLoading] = useState(true);
  
  if (loading) {
    return <LoadingScreen message="Fetching data..." />;
  }
  
  return <YourContent />;
}
```

### Pattern 3: Branded Section
```tsx
<section className="relative overflow-hidden">
  <DHNexusWatermark />
  <div className="relative z-10">
    <h2>Section Title</h2>
    <p>Section content...</p>
  </div>
</section>
```

---

## Troubleshooting

### Logo Not Displaying?
1. Check import: `import { DHNexusLogo } from './components/DHNexusLogo';`
2. Verify Figma asset is accessible
3. Check for TypeScript errors
4. Ensure component is in component tree

### Logo Too Small/Large?
1. Use appropriate variant for context
2. Add custom className with size override
3. Check parent container constraints
4. Verify responsive breakpoint styles

### Animations Not Working?
1. Confirm CSS animations are in globals.css
2. Check for conflicting CSS
3. Verify animation class names
4. Test in different browsers

### Performance Issues?
1. Avoid excessive watermarks
2. Use appropriate image sizes
3. Consider lazy loading for below-fold logos
4. Minimize simultaneous animations

---

## Accessibility Checklist

✅ Alt text present and descriptive
✅ Logo has sufficient contrast with background
✅ Interactive logos are keyboard accessible
✅ Logo doesn't interfere with screen reader flow
✅ Animations respect prefers-reduced-motion
✅ Focus indicators are visible

---

## SEO Considerations

✅ Logo has descriptive alt text
✅ Logo appears in structured data
✅ Logo URL is referenced in meta tags
✅ Logo is optimized for page load speed
✅ Logo dimensions are specified

---

## Advanced Customization

### Custom Glow Colors
```tsx
<div className="relative inline-block">
  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 blur-2xl rounded-full"></div>
  <DHNexusLogo variant="default" />
</div>
```

### Animated Gradient Background
```tsx
<div className="relative">
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-gradient"></div>
  <DHNexusLogo variant="hero" className="relative" />
</div>
```

### Parallax Effect
```tsx
<div 
  className="logo-container" 
  style={{ transform: `translateY(${scrollY * 0.5}px)` }}
>
  <DHNexusLogo />
</div>
```

---

## Performance Tips

1. **Preload Logo**: Add to `<head>` for critical logos
2. **Use Variants**: Don't create custom versions unnecessarily
3. **Limit Animations**: Too many animated logos = sluggish UI
4. **Optimize Placement**: Hero logos should load fast
5. **Cache Strategy**: Logo should be cached by browser

---

## Brand Guidelines

### Do's:
✅ Maintain logo proportions
✅ Ensure adequate white space
✅ Use approved variants
✅ Test on multiple backgrounds
✅ Consider accessibility

### Don'ts:
❌ Don't stretch or skew
❌ Don't change gradient colors
❌ Don't add effects that obscure logo
❌ Don't use pixelated versions
❌ Don't create unofficial variants

---

## Version History

**v1.0** - Initial logo component system
- 5 variants created
- Glow effect component
- Watermark component
- Loading screens
- Documentation complete

---

## Support & Contact

Questions about logo usage?
- Email: m24id1009@iitj.ac.in
- Documentation: `/LOGO_SYSTEM_GUIDE.md`
- Summary: `/LOGO_UPDATE_SUMMARY.md`

---

**Remember**: The logo is the face of DH Nexus. Use it thoughtfully, consistently, and with purpose. 🎨✨
