# KiCad Image to Footprint Converter

A web-based tool for converting images to KiCad silkscreen footprints using various dithering algorithms.

**[Live Demo](https://i2cjak.github.io/KiCadDithering/)**

## Features

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

## Usage

1. Open `index.html` in a browser or visit the [live demo](https://i2cjak.github.io/KiCadDithering/)
2. Drop an image or paste from clipboard
3. Adjust dithering algorithm and parameters
4. Click "Generate Footprint"
5. Copy or download the `.kicad_mod` file
6. Import into KiCad

## Manufacturing Guidelines

| Pixel Size | Notes |
|------------|-------|
| 0.15mm | Minimum for most fabs (may be at limits) |
| 0.2-0.25mm | Recommended for good visibility |
| 0.3-0.5mm | Bold, highly visible |

## Technical Details

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
