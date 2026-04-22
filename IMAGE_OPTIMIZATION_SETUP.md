# Image Optimization Setup Guide

## Problem Fixed

The `next-image-export-optimizer` was generating optimized images but they weren't being utilized in the live website because:

1. **Unoptimized flag was enabled**: The `next.config.ts` had `unoptimized: true` which disabled Next.js image optimization
2. **Images weren't copied to output**: Generated optimized images in `public/nextImageExportOptimizer/` weren't being copied to the `out/` folder used for deployment
3. **Image paths not properly mapped**: Components weren't using the optimized image paths

## Changes Made

### 1. **next.config.ts** 
- Changed `unoptimized: true` → `unoptimized: false` to enable image optimization
- Removed custom loader that was interfering with optimization
- Kept proper environment variables for the optimizer

### 2. **package.json Build Script**
```json
"build": "next build && next-image-export-optimizer && npm run copy-images"
```
Added `copy-images` script to ensure optimized images are copied to the deployment folder.

### 3. **scripts/copy-images.js**
New script that:
- Copies `public/nextImageExportOptimizer/` to `out/nextImageExportOptimizer/`
- Copies image hashes metadata to output folder
- Ensures all optimized images are available for deployment

### 4. **lib/imageOptimizer.ts**
Helper utility with:
- `getImagePath()` - Ensures image paths start with `/` for consistency
- Image size constants for responsive serving
- Future support for blur placeholders

### 5. **Components Updated**
All components using `ExportedImage` now:
- Import and use `getImagePath()` helper
- Use proper width/height dimensions instead of `fill` prop where possible
- Properly reference image paths

Updated components:
- `ServicesSection.tsx` - Medical services cards
- `HeroSection.tsx` - Doctor profile image
- `TestimonialsSection.tsx` - Patient testimonial avatars
- `Navbar.tsx` - Logo
- `ImageWithFallback.tsx` - Generic image wrapper

## How the Image Optimization Works

### Build Process
```
1. next build → Creates static export in `out/`
2. next-image-export-optimizer → Generates optimized versions in `public/nextImageExportOptimizer/`
3. copy-images.js → Copies optimized images to `out/nextImageExportOptimizer/`
4. Deployment → Serves everything from `out/` folder
```

### Image Generation
For each image like `/gastritis.jpg`, the optimizer generates:
- `/nextImageExportOptimizer/gastritis-opt-128.WEBP` (thumbnail)
- `/nextImageExportOptimizer/gastritis-opt-384.WEBP` (small)
- `/nextImageExportOptimizer/gastritis-opt-640.WEBP` (medium)
- `/nextImageExportOptimizer/gastritis-opt-1080.WEBP` (large)
- ... and more sizes for responsive loading

The `ExportedImage` component automatically serves the correct size based on device and viewport.

## Building and Deploying

### Local Build
```bash
npm run build
```
This will:
1. Build Next.js app to `out/`
2. Generate optimized images
3. Copy images to `out/nextImageExportOptimizer/`

### Verify Images
After building, check that:
```bash
# Should exist and contain optimized images
ls out/nextImageExportOptimizer/

# Should contain metadata
cat out/next-image-export-optimizer-hashes.json
```

### Deployment
Deploy the `out/` folder. It contains:
- All static pages
- Optimized images in `nextImageExportOptimizer/` subfolder
- All assets and metadata

### Firebase Hosting (if used)
```bash
npm run build
firebase deploy
```

## Image Formats
- **Format**: WebP (modern) with JPEG fallback
- **Quality**: 75 (configurable in next.config.ts)
- **Blur Images**: Enabled (small base64 blur effect while loading)

## Troubleshooting

### Images not showing in production
1. ✓ Verify `out/nextImageExportOptimizer/` folder exists
2. ✓ Check that image paths start with `/`
3. ✓ Ensure build script runs the `copy-images` step
4. ✓ Verify deployment includes entire `out/` folder

### Build fails
- Check `scripts/copy-images.js` for errors
- Ensure Node.js filesystem permissions are correct
- Verify `public/` folder exists with original images

### Images load slowly
- Check device capabilities - may need to serve non-WebP format
- Verify image sizes match component dimensions
- Check network throttling in browser DevTools

## Environment Variables (next.config.ts)

```
nextImageExportOptimizer_imageFolderPath: "public" // Source images
nextImageExportOptimizer_exportFolderPath: "out" // Output folder
nextImageExportOptimizer_quality: "75" // Compression quality
nextImageExportOptimizer_storePicturesInWEBP: "true" // Use WebP format
nextImageExportOptimizer_generateAndUseBlurImages: "true" // Blur placeholders
nextImageExportOptimizer_remoteImageCacheTTL: "0" // Cache time
```

## Performance Impact

- **File Size**: ~60-70% reduction through WebP compression
- **Load Time**: Faster loading with responsive image sizing
- **Blur Effect**: Provides visual feedback while loading

## Future Improvements

1. Add dynamic blur placeholder images
2. Implement image caching headers
3. Add AVIF format support for newer browsers
4. Create image gallery optimization
5. Add image lazy-loading for non-priority images

## Reference

- [next-image-export-optimizer](https://www.npmjs.com/package/next-image-export-optimizer)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
