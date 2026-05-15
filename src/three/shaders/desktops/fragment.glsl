uniform sampler2D uTexture;
uniform float uScrollDepth;
uniform float uMessageIntensity;
uniform float uTime;

varying vec2 vUv;
varying float vScrollIntensity;
varying float vMessageIntensity;

float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
}

void main() {
    // Standard scrolling texture
    vec2 scrollUv = vec2(vUv.x, vUv.y + uScrollDepth * vScrollIntensity);
    vec4 color = texture2D(uTexture, scrollUv);

    // Message overlay
    vec2 messageUv = vec2(vUv.x, vUv.y + 0.5);
    vec4 messageColor = texture2D(uTexture, messageUv);
    color = mix(color, messageColor, vMessageIntensity * messageColor.a * uMessageIntensity);

    // Refined Matrix Rain Effect (Targeting the scrolling screen)
    if (vScrollIntensity > 0.5) {
        float grid = 60.0; // Finer grid for smaller "characters"
        vec2 gUv = floor(vUv * vec2(grid, grid * 0.5)); // Non-square grid
        float h = hash(vec2(gUv.x, 0.0));
        
        float speed = 0.8 + h * 1.2;
        float y = fract(vUv.y * 1.5 + uTime * speed * 0.15 + h);
        
        // Sharper, thinner rain drops
        float trail = smoothstep(0.0, 0.05, y) * smoothstep(1.0, 0.95, y);
        float glow = exp(-y * 15.0);
        
        // Digital Matrix Green
        vec3 matrixColor = vec3(0.1, 1.0, 0.35) * (trail * 0.5 + glow * 2.0);
        
        // Additive blending for a "light on screen" look
        color.rgb += matrixColor * 0.4;
    }

    // Subtle Scanline Effect
    float scanline = sin(vUv.y * 1200.0) * 0.02;
    color.rgb -= scanline;

    // Vignette to make it feel like a CRT/Monitor
    float vignette = 1.0 - length(vUv - 0.5) * 0.5;
    color.rgb *= vignette;

    gl_FragColor = vec4(color.rgb, 1.0);
}