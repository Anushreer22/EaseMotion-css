import { useState } from "react";
import "./FABSpeedDial.css";

/**
 * FABSpeedDial — Floating Action Button Speed Dial Menu
 *
 * Props:
 *  - actions: Array<{ icon: string, label: string, onClick: () => void }>
 *  - mainIcon: string  (default "+")
 *  - closeIcon: string (default "×")
 *  - position: "bottom-right" | "bottom-left" | "top-right" | "top-left" (default "bottom-right")
 *  - direction: "up" | "down" | "left" | "right" (default "up")
 */
export default function FABSpeedDial({
  actions = [],
  mainIcon = "+",
  closeIcon = "\u00D7",
  position = "bottom-right",
  direction = "up",
}) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <div
      className={[
        "em-fab-container",
        `em-fab--${position}`,
        `em-fab--${direction}`,
        open ? "em-fab--open" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label="Speed dial menu"
    >
      {/* Action buttons */}
      <ul className="em-fab-actions" role="menu">
        {actions.map((action, index) => (
          <li
            key={index}
            className="em-fab-action-item"
            style={{ "--em-fab-index": index }}
            role="menuitem"
          >
            <span className="em-fab-action-label">{action.label}</span>
            <button
              className="em-fab-action-btn"
              onClick={() => {
                action.onClick?.();
                setOpen(false);
              }}
              aria-label={action.label}
              tabIndex={open ? 0 : -1}
            >
              {action.icon}
            </button>
          </li>
        ))}
      </ul>

      {/* Main FAB button */}
      <button
        className="em-fab-main"
        onClick={toggle}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <span
          className={`em-fab-icon ${open ? "em-fab-icon--close" : "em-fab-icon--open"}`}
        >
          {open ? closeIcon : mainIcon}
        </span>
      </button>
    </div>
  );
}
