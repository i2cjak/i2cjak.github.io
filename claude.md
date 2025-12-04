# KiCad Image to Footprint Converter - Specifications

## KiCad Footprint File Format (.kicad_mod)

### Basic Structure
```
(footprint "library:name"
  (version YYYYMMDD)
  (generator "tool_name")
  (generator_version "version")
  (layer "F.Cu")
  (uuid "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx")
  (at X Y)
  ... properties and graphical elements ...
)
```

### Key Elements

#### Coordinates & Units
- All values in millimeters
- PCB files support 6 decimal places (0.000001 mm precision)
- Coordinate system: X increases right, Y increases down

#### Layers
- `F.SilkS` - Front silkscreen (white on most PCBs)
- `B.SilkS` - Back silkscreen
- `F.Cu` / `B.Cu` - Copper layers
- `F.Fab` / `B.Fab` - Fabrication layers

#### Polygon Definition (fp_poly)
```
(fp_poly
  (pts
    (xy X1 Y1) (xy X2 Y2) (xy X3 Y3) ...
  )
  (stroke (width 0) (type solid))
  (fill yes)
  (layer "F.SilkS")
  (uuid "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx")
)
```

#### Required Properties
```
(property "Reference" "G***" ...)
(property "Value" "LOGO" ...)
(property "Datasheet" "" ...)
(property "Description" "" ...)
```

#### Attributes
```
(attr board_only exclude_from_pos_files exclude_from_bom)
```

### UUID Format
- Version 4 (random) UUID
- Format: `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`
- y is one of: 8, 9, a, b

---

## Dithering Algorithms

### 1. Threshold (Simple)
Convert each pixel to black/white based on brightness threshold (typically 0.5).

### 2. Random/White Noise
Add random noise before thresholding to break up banding.

### 3. Ordered Dithering (Bayer)
Uses recursive threshold matrices:

**2x2 Bayer Matrix:**
```
0 2
3 1
```
Normalized by dividing by 4.

**4x4 Bayer Matrix:**
```
 0  8  2 10
12  4 14  6
 3 11  1  9
15  7 13  5
```
Normalized by dividing by 16.

**8x8 Bayer Matrix:** Generated recursively, normalized by 64.

### 4. Floyd-Steinberg Error Diffusion
Distributes quantization error to neighbors:
```
      * 7/16
3/16 5/16 1/16
```
Where * is current pixel, numbers show error distribution.

### 5. Atkinson Dithering
Apple's algorithm, distributes only 6/8 of error for higher contrast:
```
    * 1/8 1/8
1/8 1/8 1/8
    1/8
```

### 6. Jarvis-Judice-Ninke
Larger diffusion kernel for smoother results:
```
        * 7/48 5/48
3/48 5/48 7/48 5/48 3/48
1/48 3/48 5/48 3/48 1/48
```

### 7. Blue Noise Dithering
Uses pre-computed blue noise texture as threshold map.
Produces organic, non-patterned results.

---

## Manufacturing Constraints

### Silkscreen Minimums (Typical)
- Minimum line width: 0.15mm (6 mil)
- Minimum text height: 0.8mm
- Recommended pixel size: 0.2mm - 0.3mm for visibility
- Some fabs allow 0.1mm minimum feature size

### Pixel Size Recommendations
- Fine detail: 0.15mm (may be at manufacturing limits)
- Standard: 0.2mm - 0.25mm
- Bold/visible: 0.3mm - 0.5mm

---

## Implementation Notes

### Pixel to Polygon Conversion
Each black pixel becomes a diamond-shaped polygon (rotated square):
```
(fp_poly
  (pts
    (xy cx-r cy)      ; left
    (xy cx cy-r)      ; top
    (xy cx+r cy)      ; right
    (xy cx cy+r)      ; bottom
  )
  ...
)
```
Where `r = pixelSize / 2` and `(cx, cy)` is pixel center.

### Image Processing Pipeline
1. Load image
2. Convert to grayscale
3. Apply gamma correction (sRGB to linear)
4. Apply selected dithering algorithm
5. Convert black pixels to polygons
6. Generate KiCad footprint file
