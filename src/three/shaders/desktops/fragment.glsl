uniform sampler2D uTexture;
uniform float uScrollDepth;
uniform float uMessageIntensity;
uniform float uTime;

varying vec2 vUv;
varying float vScrollIntensity;
varying float vMessageIntensity;

void main() {
    // Standard scrolling texture
    vec2 scrollUv = vec2(vUv.x, vUv.y + uScrollDepth * vScrollIntensity);
    vec4 color = texture2D(uTexture, scrollUv);

    // Message overlay
    vec2 messageUv = vec2(vUv.x, vUv.y + 0.5);
    vec4 messageColor = texture2D(uTexture, messageUv);
    color = mix(color, messageColor, vMessageIntensity * messageColor.a * uMessageIntensity);

    // Subtle Scanline Effect
    float scanline = sin(vUv.y * 1200.0) * 0.02;
    color.rgb -= scanline;

    // Vignette to make it feel like a CRT/Monitor
    float vignette = 1.0 - length(vUv - 0.5) * 0.5;
    color.rgb *= vignette;

    gl_FragColor = vec4(color.rgb, 1.0);
}