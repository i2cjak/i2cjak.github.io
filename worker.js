// Web Worker for heavy processing tasks

// Bayer matrices
const BAYER_2 = [
    [0, 2],
    [3, 1]
];

const BAYER_4 = [
    [0, 8, 2, 10],
    [12, 4, 14, 6],
    [3, 11, 1, 9],
    [15, 7, 13, 5]
];

const BAYER_8 = [
    [0, 32, 8, 40, 2, 34, 10, 42],
    [48, 16, 56, 24, 50, 18, 58, 26],
    [12, 44, 4, 36, 14, 46, 6, 38],
    [60, 28, 52, 20, 62, 30, 54, 22],
    [3, 35, 11, 43, 1, 33, 9, 41],
    [51, 19, 59, 27, 49, 17, 57, 25],
    [15, 47, 7, 39, 13, 45, 5, 37],
    [63, 31, 55, 23, 61, 29, 53, 21]
];

// Error diffusion kernels
const FLOYD_STEINBERG = [
    [1, 0, 7/16],
    [-1, 1, 3/16],
    [0, 1, 5/16],
    [1, 1, 1/16]
];

const ATKINSON = [
    [1, 0, 1/8],
    [2, 0, 1/8],
    [-1, 1, 1/8],
    [0, 1, 1/8],
    [1, 1, 1/8],
    [0, 2, 1/8]
];

const JARVIS = [
    [1, 0, 7/48],
    [2, 0, 5/48],
    [-2, 1, 3/48],
    [-1, 1, 5/48],
    [0, 1, 7/48],
    [1, 1, 5/48],
    [2, 1, 3/48],
    [-2, 2, 1/48],
    [-1, 2, 3/48],
    [0, 2, 5/48],
    [1, 2, 3/48],
    [2, 2, 1/48]
];

// sRGB to linear conversion
function srgbToLinear(value) {
    if (value <= 0.04045) {
        return value / 12.92;
    }
    return Math.pow((value + 0.055) / 1.055, 2.4);
}

// Convert image data to grayscale
function imageToGrayscale(imageData, width, height, gammaCorrect) {
    const gray = new Float32Array(width * height);
    for (let i = 0; i < width * height; i++) {
        const r = imageData[i * 4] / 255;
        const g = imageData[i * 4 + 1] / 255;
        const b = imageData[i * 4 + 2] / 255;

        let luminance;
        if (gammaCorrect) {
            luminance = 0.2126 * srgbToLinear(r) + 0.7152 * srgbToLinear(g) + 0.0722 * srgbToLinear(b);
        } else {
            luminance = 0.299 * r + 0.587 * g + 0.114 * b;
        }
        gray[i] = luminance;
    }
    return gray;
}

// Dithering algorithms
function thresholdDither(gray, width, height, threshold) {
    const result = new Uint8Array(width * height);
    for (let i = 0; i < gray.length; i++) {
        result[i] = gray[i] > threshold ? 255 : 0;
    }
    return result;
}

function randomDither(gray, width, height, threshold) {
    const result = new Uint8Array(width * height);
    for (let i = 0; i < gray.length; i++) {
        const noise = (Math.random() - 0.5) * 0.5;
        result[i] = (gray[i] + noise) > threshold ? 255 : 0;
    }
    return result;
}

function bayerDither(gray, width, height, matrix, threshold) {
    const result = new Uint8Array(width * height);
    const size = matrix.length;
    const maxVal = size * size;

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const i = y * width + x;
            const bayerValue = matrix[y % size][x % size] / maxVal - 0.5;
            const adjusted = gray[i] + bayerValue * (1 - threshold);
            result[i] = adjusted > threshold ? 255 : 0;
        }
    }
    return result;
}

function errorDiffusionDither(gray, width, height, kernel, threshold) {
    const buffer = Float32Array.from(gray);
    const result = new Uint8Array(width * height);

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const i = y * width + x;
            const oldPixel = buffer[i];
            const newPixel = oldPixel > threshold ? 1 : 0;
            result[i] = newPixel * 255;
            const error = oldPixel - newPixel;

            for (const [dx, dy, weight] of kernel) {
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                    buffer[ny * width + nx] += error * weight;
                }
            }
        }
    }
    return result;
}

function applyDithering(gray, width, height, algorithm, threshold) {
    switch (algorithm) {
        case 'threshold':
            return thresholdDither(gray, width, height, threshold);
        case 'random':
            return randomDither(gray, width, height, threshold);
        case 'bayer2':
            return bayerDither(gray, width, height, BAYER_2, threshold);
        case 'bayer4':
            return bayerDither(gray, width, height, BAYER_4, threshold);
        case 'bayer8':
            return bayerDither(gray, width, height, BAYER_8, threshold);
        case 'floydSteinberg':
            return errorDiffusionDither(gray, width, height, FLOYD_STEINBERG, threshold);
        case 'atkinson':
            return errorDiffusionDither(gray, width, height, ATKINSON, threshold);
        case 'jarvis':
            return errorDiffusionDither(gray, width, height, JARVIS, threshold);
        default:
            return thresholdDither(gray, width, height, threshold);
    }
}

// UUID generator using crypto
function generateUUID() {
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const hex = Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
    return `${hex.slice(0,8)}-${hex.slice(8,12)}-${hex.slice(12,16)}-${hex.slice(16,20)}-${hex.slice(20)}`;
}

// Optimized footprint generation with chunked processing
function generateFootprint(ditheredData, width, height, options) {
    const { pixelSize, footprintName, libraryName, layer } = options;
    const centerX = (width * pixelSize) / 2;
    const centerY = (height * pixelSize) / 2;

    // Pre-calculate black pixel positions
    const blackPixels = [];
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (ditheredData[y * width + x] === 0) {
                blackPixels.push({ x, y });
            }
        }
    }

    const totalPixels = blackPixels.length;

    // Build header
    const headerUUID = generateUUID();
    const parts = [];

    parts.push(`(footprint "${libraryName}:${footprintName}"
    (version 20241229)
    (generator "KiCadDithering")
    (generator_version "1.0")
    (layer "F.Cu")
    (uuid "${headerUUID}")
    (at 0 0)
    (property "Reference" "G***"
        (at 0 ${(-centerY - 2).toFixed(2)} 0)
        (layer "${layer}")
        (uuid "${generateUUID()}")
        (effects
            (font (size 1.5 1.5) (thickness 0.3))
        )
    )
    (property "Value" "${footprintName}"
        (at 0 ${(centerY + 2).toFixed(2)} 0)
        (layer "${layer}")
        (hide yes)
        (uuid "${generateUUID()}")
        (effects
            (font (size 1.5 1.5) (thickness 0.3))
        )
    )
    (property "Datasheet" ""
        (at 0 0 0)
        (layer "F.Fab")
        (hide yes)
        (uuid "${generateUUID()}")
        (effects
            (font (size 1.27 1.27) (thickness 0.15))
        )
    )
    (property "Description" "Image converted to footprint"
        (at 0 0 0)
        (layer "F.Fab")
        (hide yes)
        (uuid "${generateUUID()}")
        (effects
            (font (size 1.27 1.27) (thickness 0.15))
        )
    )
    (attr board_only exclude_from_pos_files exclude_from_bom)`);

    // Generate polygons in chunks for progress updates
    const chunkSize = 1000;
    let processedCount = 0;

    for (let i = 0; i < blackPixels.length; i++) {
        const { x, y } = blackPixels[i];
        const left = (x * pixelSize - centerX).toFixed(6);
        const right = ((x + 1) * pixelSize - centerX).toFixed(6);
        const top = (y * pixelSize - centerY).toFixed(6);
        const bottom = ((y + 1) * pixelSize - centerY).toFixed(6);

        parts.push(`
    (fp_poly
        (pts
            (xy ${left} ${top}) (xy ${right} ${top}) (xy ${right} ${bottom}) (xy ${left} ${bottom})
        )
        (stroke (width 0) (type solid))
        (fill yes)
        (layer "${layer}")
        (uuid "${generateUUID()}")
    )`);

        processedCount++;

        // Send progress update every chunk
        if (processedCount % chunkSize === 0) {
            self.postMessage({
                type: 'progress',
                stage: 'generating',
                current: processedCount,
                total: totalPixels,
                percent: Math.round((processedCount / totalPixels) * 100)
            });
        }
    }

    parts.push(`
    (embedded_fonts no)
)`);

    return parts.join('');
}

// Message handler
self.onmessage = function(e) {
    const { type, data } = e.data;

    if (type === 'dither') {
        self.postMessage({ type: 'status', stage: 'dithering', message: 'Applying dithering...' });

        const { imageData, width, height, algorithm, threshold, gammaCorrect, invert } = data;

        let gray = imageToGrayscale(imageData, width, height, gammaCorrect);

        if (invert) {
            for (let i = 0; i < gray.length; i++) {
                gray[i] = 1 - gray[i];
            }
        }

        const ditheredData = applyDithering(gray, width, height, algorithm, threshold);

        // Count black pixels
        let blackCount = 0;
        for (let i = 0; i < ditheredData.length; i++) {
            if (ditheredData[i] === 0) blackCount++;
        }

        self.postMessage({
            type: 'dithered',
            ditheredData: ditheredData,
            blackCount: blackCount,
            width: width,
            height: height
        });
    }

    if (type === 'generate') {
        self.postMessage({ type: 'status', stage: 'generating', message: 'Generating footprint...' });

        const { ditheredData, width, height, options } = data;

        const footprint = generateFootprint(ditheredData, width, height, options);

        self.postMessage({
            type: 'generated',
            footprint: footprint
        });
    }
};
