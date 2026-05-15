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

    // Matrix Rain Effect (Targeting the scrolling screen)
    if (vScrollIntensity > 0.5) {
        float grid = 40.0;
        vec2 gUv = floor(vUv * grid);
        float h = hash(vec2(gUv.x, 0.0));
        
        float speed = 0.5 + h * 1.5;
        float y = fract(vUv.y + uTime * speed * 0.2 + h);
        
        float trail = smoothstep(0.0, 0.1, y) * smoothstep(1.0, 0.8, y);
        float glow = exp(-y * 10.0);
        
        vec3 matrixColor = vec3(0.0, 1.0, 0.3) * (trail + glow * 2.0);
        
        // Only apply if the texture underneath is dark (the code background)
        float brightness = dot(color.rgb, vec3(0.299, 0.587, 0.114));
        if (brightness < 0.3) {
            color.rgb = mix(color.rgb, matrixColor, 0.4 * trail);
        }
    }

    // Add a slight scanline effect
    float scanline = sin(vUv.y * 800.0) * 0.04;
    color.rgb -= scanline;

    gl_FragColor = vec4(color.rgb, 1.0);
}