# FAB Speed Dial Menu — EaseMotion CSS React Component

A modular, accessible Floating Action Button (FAB) Speed Dial Menu built with React hooks and EaseMotion CSS animation utilities.

**Issue:** [#27398](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/27398)

---

## Preview

The FAB sits fixed in a corner of the screen. Clicking it expands a radial menu of action buttons with staggered entrance animations powered by EaseMotion CSS transitions.

---

## Files

| File | Purpose |
|---|---|
| `FABSpeedDial.jsx` | React component |
| `FABSpeedDial.css` | EaseMotion CSS styles |
| `README.md` | Documentation |

---

## Installation

1. Copy `FABSpeedDial.jsx` and `FABSpeedDial.css` into your project.
2. Import and use the component.

No external dependencies beyond React.

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `actions` | `Array<Action>` | `[]` | List of speed dial actions |
| `mainIcon` | `string` | `"+"` | Icon shown on the main FAB button |
| `closeIcon` | `string` | `"×"` | Icon shown when menu is open |
| `position` | `"bottom-right" \| "bottom-left" \| "top-right" \| "top-left"` | `"bottom-right"` | Screen position of the FAB |
| `direction` | `"up" \| "down" \| "left" \| "right"` | `"up"` | Direction the actions expand |

### Action Object

```js
{
  icon: string,      // Icon character or emoji
  label: string,     // Tooltip label for accessibility
  onClick: () => void // Click handler
}
```

---

## Usage

```jsx
import FABSpeedDial from "./FABSpeedDial";

const actions = [
  { icon: "✏️", label: "Edit",   onClick: () => console.log("Edit") },
  { icon: "📤", label: "Share",  onClick: () => console.log("Share") },
  { icon: "🗑️", label: "Delete", onClick: () => console.log("Delete") },
];

export default function App() {
  return (
    <div>
      <h1>My App</h1>
      <FABSpeedDial
        actions={actions}
        mainIcon="+"
        closeIcon="×"
        position="bottom-right"
        direction="up"
      />
    </div>
  );
}
```

---

## Animations

All animations use EaseMotion CSS transition utilities:

- **Main button**: Scale + shadow on hover (`cubic-bezier(0.34, 1.56, 0.64, 1)`)
- **Icon**: Rotates 135° on open with spring easing
- **Actions**: Staggered entrance — each action delays by `index × 40ms` using CSS custom property `--em-fab-index`
- **Reduced motion**: All transitions disabled via `@media (prefers-reduced-motion: reduce)`

---

## Accessibility

- `aria-expanded` on the main button
- `aria-haspopup="true"` signals a menu
- `aria-label` on all buttons
- `tabIndex={-1}` on hidden action buttons (keyboard unreachable when closed)
- `focus-visible` outlines on all interactive elements
- Reduced motion support

---

## Example Configurations

```jsx
{/* Bottom-left, expanding right */}
<FABSpeedDial actions={actions} position="bottom-left" direction="right" />

{/* Top-right, expanding down */}
<FABSpeedDial actions={actions} position="top-right" direction="down" />

{/* Custom icons */}
<FABSpeedDial actions={actions} mainIcon="⚡" closeIcon="✕" />
```
