# i2cjak Tools

A static tools page with:

- a browser-hosted i2cjak capacitor rig
- a KiCad image-to-footprint converter

**Live:** <https://i2cjak.github.io/>

## Capacitor

The capacitor rig is checked in as static files under `capacitor/`. It uses
Three.js, MediaPipe Face Landmarker, local GLB/textures, and local MediaPipe
WASM assets.

Useful URLs:

```text
/
/capacitor/
/capacitor/?obs=1&bg=transparent&face=1&controls=1&eyeRot=-30&eyeScale=1.8&mouthScale=1.75
```

The root page shows the capacitor tab first. Camera capture requires a secure
context, so use HTTPS or localhost.

## KiCad Footprint Converter

The second tab converts images to KiCad silkscreen footprints using dithering
algorithms.

### Features

- **8 Dithering Algorithms**
  - Threshold (Simple)
  - Random Noise
  - Bayer 2x2, 4x4, 8x8 (Ordered Dithering)
  - Floyd-Steinberg (Error Diffusion)
  - Atkinson (High Contrast)
  - Jarvis-Judice-Ninke (Smooth)

- **Image Input**
  - Drag and drop
  - File picker
  - Clipboard paste (Ctrl+V)

- **Adjustable Parameters**
  - Threshold control
  - Pixel size (mm) for manufacturing constraints
  - Output width
  - Layer selection (F.SilkS, B.SilkS, F.Cu, B.Cu)
  - Invert image
  - Gamma correction (sRGB)

- **Output**
  - Real-time dithered preview
  - Copy to clipboard
  - Download as `.kicad_mod` file
  - Progress indicator for large images

### Usage

1. Open the KiCad Footprint tab
2. Drop an image or paste from clipboard
3. Adjust dithering algorithm and parameters
4. Click "Generate Footprint"
5. Copy or download the `.kicad_mod` file
6. Import into KiCad

### Manufacturing Guidelines

| Pixel Size | Notes |
|------------|-------|
| 0.15mm | Minimum for most fabs (may be at limits) |
| 0.2-0.25mm | Recommended for good visibility |
| 0.3-0.5mm | Bold, highly visible |

## Technical Details

- Static site, no backend required
- Generates KiCad 9.0 compatible footprint files
- Each black pixel becomes a square polygon (`fp_poly`)
- Uses Web Workers for non-blocking generation
- Supports images up to 500x500 pixels

## References

- [KiCad File Format Documentation](https://dev-docs.kicad.org/en/file-formats/sexpr-footprint/)
- [Ditherpunk by Surma](https://surma.dev/things/ditherpunk/) - Dithering algorithms reference

## Author

[@i2cjak](https://x.com/i2cjak)

## License

MIT

bump
