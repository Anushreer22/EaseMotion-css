# ease-hover-bg-darken-gradient – Dark Gradient Overlay on Hover

A dark gradient overlay that fades in over an image (or any element) on hover, useful for image darkening, card overlays, or caption reveals. The overlay opacity can be controlled with the --ease-overlay-opacity CSS custom property.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-mx-auto, ease-py-16
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-8
- **Components:** ease-overflow-hidden, ease-rounded-xl, ease-shadow-md
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- The card has a ::after pseudo‑element that creates a vertical gradient from dark (top) to lighter (bottom).
- The overlay is invisible (opacity: 0) and transitions to full opacity on hover.
- The opacity can be adjusted via the --ease-overlay-opacity variable (default 1).
- The animation respects prefers-reduced-motion.

## How to use
1. Add the class darken-card to any container with an image or content.
2. Optionally set --ease-overlay-opacity to a value between 0 and 1 to control darkness.
3. Copy style.css into your project and ensure the path to easemotion.css is correct.
