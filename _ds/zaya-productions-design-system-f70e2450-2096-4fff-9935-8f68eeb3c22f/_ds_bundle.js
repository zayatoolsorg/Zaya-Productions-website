/* @ds-bundle: {"format":4,"namespace":"ZayaProductionsDesignSystem_f70e24","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"TextLink","sourcePath":"components/actions/TextLink.jsx"},{"name":"Atmosphere","sourcePath":"components/brand/Atmosphere.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"ProjectCard","sourcePath":"components/display/ProjectCard.jsx"},{"name":"SectionLabel","sourcePath":"components/display/SectionLabel.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"c45441d6a976","components/actions/IconButton.jsx":"f68a359b60e8","components/actions/TextLink.jsx":"eefa5d3197b3","components/brand/Atmosphere.jsx":"e5289f7e6fae","components/brand/Logo.jsx":"1dd0a8ac47d7","components/display/ProjectCard.jsx":"0dae9ecf971f","components/display/SectionLabel.jsx":"a432356fafa3","components/display/Tag.jsx":"99e2ac98de06","components/feedback/Dialog.jsx":"e0569fb1ab5f","components/feedback/Toast.jsx":"91077bcf7816","components/feedback/Tooltip.jsx":"dc87c03eb7fe","components/forms/Checkbox.jsx":"a8101a70c1c4","components/forms/Input.jsx":"c81bcd92afd1","components/forms/Radio.jsx":"85fe70ecaf0e","components/forms/Select.jsx":"474587d99fbe","components/forms/Switch.jsx":"c21ecd450a18","components/navigation/NavBar.jsx":"6ab5001ccd7c","components/navigation/Tabs.jsx":"df66436f3ebc","ui_kits/website/Contact.jsx":"9abfd01688e2","ui_kits/website/Home.jsx":"ac437e96776e","ui_kits/website/Project.jsx":"75724fbcbe04","ui_kits/website/Shell.jsx":"389b810792b5","ui_kits/website/Studio.jsx":"0d17534a4323","ui_kits/website/Work.jsx":"1babbc3fca2a","ui_kits/website/data.js":"857f45cec6a0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ZayaProductionsDesignSystem_f70e24 = window.ZayaProductionsDesignSystem_f70e24 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    h: 36,
    px: 18,
    fs: 14
  },
  md: {
    h: 48,
    px: 28,
    fs: 15
  },
  lg: {
    h: 60,
    px: 36,
    fs: 16
  }
};
function Button({
  variant = "primary",
  size = "md",
  tone = "light",
  arrow = false,
  disabled = false,
  children,
  style,
  onClick,
  href,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const s = SIZES[size];
  const night = tone === "night";
  const ink = night ? "var(--zaya-paper)" : "var(--zaya-ink)";
  const paper = night ? "var(--zaya-ink)" : "var(--zaya-paper)";
  const v = {
    primary: {
      background: h ? "var(--accent)" : ink,
      color: h ? "var(--zaya-paper)" : paper,
      border: "1px solid " + (h ? "var(--accent)" : ink)
    },
    secondary: {
      background: "transparent",
      color: h ? "var(--accent)" : ink,
      border: "1px solid " + (h ? "var(--accent)" : night ? "var(--border-inverse)" : "var(--border-strong)")
    },
    accent: {
      background: h ? "var(--accent-hover)" : "var(--accent)",
      color: "var(--zaya-paper)",
      border: "1px solid transparent"
    },
    ghost: {
      background: "transparent",
      color: h ? "var(--accent)" : ink,
      border: "1px solid transparent",
      paddingLeft: 0,
      paddingRight: 0
    }
  }[variant];
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseEnter: () => setH(!disabled),
    onMouseLeave: () => setH(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 14,
      height: s.h,
      padding: `0 ${s.px}px`,
      font: `500 ${s.fs}px/1 var(--font-sans)`,
      letterSpacing: "0.02em",
      borderRadius: 0,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.38 : 1,
      textDecoration: "none",
      transition: "background var(--dur-base) var(--ease-out),color var(--dur-base) var(--ease-out),border-color var(--dur-base) var(--ease-out)",
      ...v,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: variant === "ghost" ? {
      borderBottom: "1px solid currentColor",
      paddingBottom: 3
    } : null
  }, children), arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      transform: h ? "translateX(4px)" : "none",
      transition: "transform var(--dur-base) var(--ease-out)"
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  label,
  size = 44,
  tone = "light",
  outlined = true,
  children,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const night = tone === "night";
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: size,
      height: size,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "transparent",
      borderRadius: 0,
      cursor: "pointer",
      padding: 0,
      color: h ? "var(--accent)" : night ? "var(--zaya-paper)" : "var(--zaya-ink)",
      border: outlined ? "1px solid " + (h ? "var(--accent)" : night ? "var(--border-inverse)" : "var(--border-default)") : "1px solid transparent",
      font: "300 20px/1 var(--font-sans)",
      transition: "color var(--dur-base) var(--ease-out),border-color var(--dur-base) var(--ease-out)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/actions/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextLink({
  href = "#",
  arrow = false,
  external = false,
  tone = "light",
  children,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const base = tone === "night" ? "var(--zaya-paper)" : "var(--zaya-ink)";
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "baseline",
      gap: 8,
      color: h ? "var(--accent)" : base,
      textDecoration: "none",
      font: "inherit",
      transition: "color var(--dur-base) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      paddingBottom: 2
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 1,
      background: "currentColor",
      transformOrigin: h ? "left" : "right",
      transform: h ? "scaleX(1)" : "scaleX(0.999)",
      opacity: h ? 1 : 0.35,
      transition: "opacity var(--dur-base) var(--ease-out)"
    }
  })), (arrow || external) && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      transform: h ? external ? "translate(2px,-2px)" : "translateX(4px)" : "none",
      transition: "transform var(--dur-base) var(--ease-out)"
    }
  }, external ? "↗" : "→"));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/brand/Atmosphere.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Atmosphere({
  tone = "light",
  glow = "low-right",
  grain = true,
  grid = false,
  children,
  style,
  ...rest
}) {
  const night = tone === "night";
  const pos = {
    "low-right": "72% 78%",
    "low-left": "22% 80%",
    "center": "50% 50%",
    "top": "50% 0%"
  }[glow];
  const layer = {
    position: "absolute",
    inset: 0,
    pointerEvents: "none"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      overflow: "hidden",
      background: night ? "var(--surface-inverse)" : "var(--wash-paper)",
      color: night ? "var(--text-inverse)" : "var(--text-primary)",
      ...style
    }
  }, rest), glow !== "none" && /*#__PURE__*/React.createElement("div", {
    style: {
      ...layer,
      background: `radial-gradient(45% 60% at ${pos}, ${night ? "rgba(168,51,102,0.28)" : "rgba(168,51,102,0.14)"}, transparent 70%)`
    }
  }), grid && /*#__PURE__*/React.createElement("div", {
    style: {
      ...layer,
      backgroundImage: `linear-gradient(${night ? "var(--border-inverse)" : "var(--border-hairline)"} 1px,transparent 1px),linear-gradient(90deg,${night ? "var(--border-inverse)" : "var(--border-hairline)"} 1px,transparent 1px)`,
      backgroundSize: "88px 88px",
      opacity: night ? 0.5 : 1
    }
  }), grain && /*#__PURE__*/React.createElement("div", {
    style: {
      ...layer,
      backgroundImage: "var(--grain-url)",
      opacity: night ? 0.09 : 0.06,
      mixBlendMode: night ? "screen" : "multiply"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, children));
}
Object.assign(__ds_scope, { Atmosphere });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Atmosphere.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILES = {
  logotype: "logotype",
  mark: "mark"
};
function Logo({
  variant = "logotype",
  tone = "ink",
  height = 28,
  basePath = "",
  style,
  alt = "Zaya Productions",
  ...rest
}) {
  const color = tone === "paper" ? "white" : tone === "magenta" ? "magenta" : "black";
  const markColor = variant === "lockup" && tone === "paper" ? "magenta" : color;
  const img = (k, h, c) => /*#__PURE__*/React.createElement("img", {
    src: `${basePath}assets/${FILES[k]}-${c}.png`,
    alt: k === "mark" ? "" : alt,
    style: {
      height: h,
      width: "auto",
      display: "block"
    }
  });
  if (variant === "lockup") return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: Math.round(height * 0.55),
      ...style
    }
  }, rest), img("mark", Math.round(height * 1.25), markColor), img("logotype", height, color));
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      ...style
    }
  }, rest), img(variant, height, color));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/display/ProjectCard.jsx
try { (() => {
function ProjectCard({
  index,
  title,
  client,
  discipline,
  year,
  image,
  aspect = "4 / 5",
  tone = "light",
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  const night = tone === "night";
  const meta = {
    font: "500 11px/1.2 var(--font-sans)",
    letterSpacing: "var(--tracking-label)",
    textTransform: "uppercase",
    color: night ? "var(--text-inverse-muted)" : "var(--text-muted)"
  };
  return /*#__PURE__*/React.createElement("article", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      cursor: onClick ? "pointer" : "default",
      display: "flex",
      flexDirection: "column",
      gap: 18,
      color: night ? "var(--text-inverse)" : "var(--text-primary)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: aspect,
      overflow: "hidden",
      background: night ? "var(--zaya-night-2)" : "var(--zaya-paper-3)"
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transform: h ? "scale(1.035)" : "scale(1)",
      transition: "transform var(--dur-cinematic) var(--ease-out)"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(60% 50% at 70% 75%,rgba(168,51,102,0.22),transparent 70%),linear-gradient(160deg,#2a2624,#0b0a0a)",
      transform: h ? "scale(1.035)" : "scale(1)",
      transition: "transform var(--dur-cinematic) var(--ease-out)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--grain-url)",
      opacity: 0.08,
      mixBlendMode: "overlay",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...meta,
      position: "absolute",
      left: 16,
      bottom: 14,
      color: "var(--zaya-paper)",
      opacity: h ? 1 : 0,
      transform: h ? "none" : "translateY(6px)",
      transition: "opacity var(--dur-slow) var(--ease-out),transform var(--dur-slow) var(--ease-out)"
    }
  }, "View project \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      gap: 16,
      alignItems: "baseline"
    }
  }, index != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      ...meta,
      color: h ? "var(--accent)" : meta.color,
      transition: "color var(--dur-base) var(--ease-out)"
    }
  }, "(", String(index).padStart(2, "0"), ")") : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: `${h ? "italic " : ""}300 clamp(24px,2.2vw,32px)/1.05 var(--font-serif)`,
      letterSpacing: "-0.015em"
    }
  }, title), (client || discipline) && /*#__PURE__*/React.createElement("span", {
    style: meta
  }, [client, discipline].filter(Boolean).join(" · "))), year && /*#__PURE__*/React.createElement("span", {
    style: meta
  }, year)));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/display/SectionLabel.jsx
try { (() => {
function SectionLabel({
  index,
  children,
  aside,
  rule = true,
  tone = "light",
  accent = false,
  style
}) {
  const night = tone === "night";
  const t = {
    font: "500 12px/1.2 var(--font-sans)",
    letterSpacing: "var(--tracking-label)",
    textTransform: "uppercase"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 16,
      paddingBottom: 14,
      borderBottom: rule ? "1px solid " + (night ? "var(--border-inverse)" : "var(--zaya-ink)") : "none",
      color: night ? "var(--text-inverse)" : "var(--text-primary)",
      ...style
    }
  }, index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      ...t,
      color: accent ? "var(--accent)" : "inherit"
    }
  }, "(", String(index).padStart(2, "0"), ")"), /*#__PURE__*/React.createElement("span", {
    style: t
  }, children), aside && /*#__PURE__*/React.createElement("span", {
    style: {
      ...t,
      marginLeft: "auto",
      color: night ? "var(--text-inverse-muted)" : "var(--text-muted)"
    }
  }, aside));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function Tag({
  children,
  tone = "light",
  active = false,
  style
}) {
  const night = tone === "night";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      height: 24,
      padding: "0 10px",
      border: "1px solid " + (active ? "var(--accent)" : night ? "var(--border-inverse)" : "var(--border-default)"),
      color: active ? "var(--accent)" : night ? "var(--text-inverse)" : "var(--text-secondary)",
      font: "500 11px/1 var(--font-sans)",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      ...style
    }
  }, active && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: "50%",
      background: "var(--accent)"
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  eyebrow,
  children,
  footer,
  width = 560,
  inline = false
}) {
  if (!open) return null;
  const panel = /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      position: "relative",
      width: "100%",
      maxWidth: width,
      background: "var(--surface-page)",
      color: "var(--text-primary)",
      padding: "44px 48px 40px",
      boxShadow: "var(--shadow-overlay)",
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Close",
    onClick: onClose,
    style: {
      position: "absolute",
      top: 14,
      right: 14,
      width: 40,
      height: 40,
      background: "none",
      border: 0,
      cursor: "pointer",
      font: "300 26px/1 var(--font-sans)",
      color: "var(--text-primary)"
    }
  }, "\xD7"), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 11px/1.2 var(--font-sans)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--accent)"
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "200 44px/1 var(--font-serif)",
      letterSpacing: "-0.02em"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 17px/1.5 var(--font-sans)",
      color: "var(--text-secondary)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      marginTop: 12,
      paddingTop: 24,
      borderTop: "1px solid var(--border-default)"
    }
  }, footer));
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: inline ? "absolute" : "fixed",
      inset: 0,
      zIndex: 100,
      background: "rgba(11,10,10,0.64)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24
    }
  }, panel);
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  children,
  action,
  onAction,
  tone = "night",
  style
}) {
  const night = tone === "night";
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 20,
      minHeight: 52,
      padding: "0 20px",
      background: night ? "var(--surface-inverse)" : "var(--surface-raised)",
      color: night ? "var(--text-inverse)" : "var(--text-primary)",
      border: night ? "none" : "1px solid var(--border-default)",
      font: "400 15px/1.3 var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--accent)",
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("span", null, children), action && /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      marginLeft: 12,
      background: "none",
      border: 0,
      padding: 0,
      cursor: "pointer",
      color: "inherit",
      font: "500 11px/1 var(--font-sans)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      borderBottom: "1px solid currentColor",
      paddingBottom: 3
    }
  }, action));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  children,
  placement = "top",
  open
}) {
  const [h, setH] = React.useState(false);
  const show = open ?? h;
  const pos = placement === "bottom" ? {
    top: "calc(100% + 10px)"
  } : {
    bottom: "calc(100% + 10px)"
  };
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: "relative",
      display: "inline-flex"
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      left: "50%",
      ...pos,
      transform: `translateX(-50%) translateY(${show ? 0 : placement === "bottom" ? -4 : 4}px)`,
      opacity: show ? 1 : 0,
      pointerEvents: "none",
      whiteSpace: "nowrap",
      background: "var(--zaya-ink)",
      color: "var(--zaya-paper)",
      padding: "7px 10px",
      font: "500 11px/1 var(--font-sans)",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      transition: "opacity var(--dur-base) var(--ease-out),transform var(--dur-base) var(--ease-out)",
      zIndex: 10
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  defaultChecked = false,
  onChange,
  label,
  disabled = false,
  style
}) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked ?? inner;
  const toggle = () => {
    if (disabled) return;
    setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      font: "400 16px/1.2 var(--font-sans)",
      color: "var(--text-primary)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 16,
      height: 16,
      flex: "none",
      border: "1px solid " + (on ? "var(--zaya-ink)" : "var(--border-strong)"),
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "border-color var(--dur-fast) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      background: "var(--accent)",
      transform: on ? "scale(1)" : "scale(0)",
      transition: "transform var(--dur-base) var(--ease-out)"
    }
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const labelStyle = {
  font: "500 11px/1.2 var(--font-sans)",
  letterSpacing: "var(--tracking-label)",
  textTransform: "uppercase",
  color: "var(--text-muted)"
};
function Input({
  label,
  hint,
  error,
  multiline = false,
  rows = 4,
  size = "md",
  id,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const fid = id || React.useId();
  const Tag = multiline ? "textarea" : "input";
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement(Tag, _extends({
    id: fid,
    rows: multiline ? rows : undefined,
    onFocus: () => setF(true),
    onBlur: () => setF(false)
  }, rest, {
    style: {
      appearance: "none",
      background: "transparent",
      border: 0,
      borderBottom: "1px solid " + (error ? "var(--state-error)" : f ? "var(--accent)" : "var(--border-strong)"),
      borderRadius: 0,
      padding: "8px 0 12px",
      outline: "none",
      resize: "vertical",
      font: `300 ${size === "lg" ? "clamp(28px,3vw,40px)" : "20px"}/1.3 ${size === "lg" ? "var(--font-serif)" : "var(--font-sans)"}`,
      color: "var(--text-primary)",
      transition: "border-color var(--dur-base) var(--ease-out)"
    }
  })), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 13px/1.4 var(--font-sans)",
      color: error ? "var(--state-error)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  direction = "column",
  style
}) {
  const [inner, setInner] = React.useState(defaultValue);
  const cur = value ?? inner;
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: "flex",
      flexDirection: direction,
      gap: direction === "row" ? 28 : 14,
      ...style
    }
  }, options.map(o => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    const on = cur === v;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        cursor: "pointer",
        font: "400 16px/1.2 var(--font-sans)",
        color: "var(--text-primary)"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      value: v,
      checked: on,
      onChange: () => {
        setInner(v);
        onChange && onChange(v);
      },
      style: {
        position: "absolute",
        opacity: 0,
        width: 0,
        height: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: 16,
        height: 16,
        borderRadius: "50%",
        border: "1px solid " + (on ? "var(--zaya-ink)" : "var(--border-strong)"),
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: "var(--accent)",
        transform: on ? "scale(1)" : "scale(0)",
        transition: "transform var(--dur-base) var(--ease-out)"
      }
    })), l);
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const labelStyle = {
  font: "500 11px/1.2 var(--font-sans)",
  letterSpacing: "var(--tracking-label)",
  textTransform: "uppercase",
  color: "var(--text-muted)"
};
function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setF(true),
    onBlur: () => setF(false)
  }, rest, {
    style: {
      appearance: "none",
      width: "100%",
      background: "transparent",
      border: 0,
      borderBottom: "1px solid " + (f ? "var(--accent)" : "var(--border-strong)"),
      borderRadius: 0,
      padding: "8px 28px 12px 0",
      font: "300 20px/1.3 var(--font-sans)",
      color: "var(--text-primary)",
      outline: "none",
      cursor: "pointer"
    }
  }), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 2,
      top: 8,
      pointerEvents: "none",
      font: "300 18px/1.3 var(--font-sans)",
      color: "var(--text-muted)"
    }
  }, "\u2193")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  defaultChecked = false,
  onChange,
  label,
  tone = "light",
  style
}) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked ?? inner;
  const night = tone === "night";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      cursor: "pointer",
      font: "500 11px/1 var(--font-sans)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: night ? "var(--text-inverse)" : "var(--text-primary)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: on,
    onChange: () => {
      setInner(!on);
      onChange && onChange(!on);
    },
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "relative",
      width: 34,
      height: 16,
      border: "1px solid " + (night ? "var(--border-inverse)" : "var(--border-strong)")
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: 2,
      width: 10,
      height: 10,
      background: on ? "var(--accent)" : night ? "var(--zaya-paper)" : "var(--zaya-ink)",
      transform: on ? "translateX(18px)" : "none",
      transition: "transform var(--dur-base) var(--ease-out),background var(--dur-base) var(--ease-out)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  items = ["Work", "Studio", "Journal", "Contact"],
  active,
  onNavigate,
  tone = "light",
  basePath = "",
  meta,
  cta,
  style
}) {
  const night = tone === "night";
  const [hv, setHv] = React.useState(null);
  const c = night ? "var(--text-inverse)" : "var(--text-primary)";
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      alignItems: "center",
      height: "var(--nav-height)",
      padding: "0 var(--gutter)",
      borderBottom: "1px solid " + (night ? "var(--border-inverse)" : "var(--border-default)"),
      color: c,
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(items[0] && "Home");
    },
    style: {
      justifySelf: "start",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "lockup",
    tone: night ? "paper" : "ink",
    height: 20,
    basePath: basePath
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 40
    }
  }, items.map(it => {
    const on = it === active;
    return /*#__PURE__*/React.createElement("a", {
      key: it,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(it);
      },
      onMouseEnter: () => setHv(it),
      onMouseLeave: () => setHv(null),
      style: {
        position: "relative",
        font: "400 16px/1 var(--font-sans)",
        letterSpacing: "var(--tracking-nav)",
        color: on || hv === it ? "var(--accent)" : c,
        textDecoration: "none",
        paddingBottom: 4,
        transition: "color var(--dur-base) var(--ease-out)"
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: -12,
        top: "50%",
        width: 4,
        height: 4,
        marginTop: -4,
        borderRadius: "50%",
        background: "var(--accent)"
      }
    }), it);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      justifySelf: "end",
      display: "flex",
      alignItems: "center",
      gap: 24,
      font: "500 11px/1 var(--font-sans)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: night ? "var(--text-inverse-muted)" : "var(--text-muted)"
    }
  }, meta, cta));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  tone = "light",
  style
}) {
  const [inner, setInner] = React.useState(defaultValue ?? (items[0] && (items[0].value || items[0])));
  const cur = value ?? inner;
  const night = tone === "night";
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: 32,
      flexWrap: "wrap",
      ...style
    }
  }, items.map(it => {
    const v = it.value || it;
    const l = it.label || it;
    const on = v === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => {
        setInner(v);
        onChange && onChange(v);
      },
      style: {
        background: "none",
        border: 0,
        padding: "0 0 8px",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "flex-start",
        gap: 4,
        font: "400 16px/1 var(--font-sans)",
        letterSpacing: "var(--tracking-nav)",
        color: on ? night ? "var(--text-inverse)" : "var(--text-primary)" : night ? "var(--text-inverse-muted)" : "var(--text-muted)",
        borderBottom: "1px solid " + (on ? "var(--accent)" : "transparent"),
        transition: "color var(--dur-base) var(--ease-out),border-color var(--dur-base) var(--ease-out)"
      }
    }, l, it.count != null && /*#__PURE__*/React.createElement("sup", {
      style: {
        font: "500 10px/1 var(--font-sans)",
        color: on ? "var(--accent)" : "inherit"
      }
    }, it.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
const {
  Input,
  Select,
  Checkbox,
  Radio,
  Button: CBtn,
  Dialog,
  Toast
} = window.ZayaProductionsDesignSystem_f70e24;
function Contact({
  go
}) {
  const [sent, setSent] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    setSent(true);
  };
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: "var(--space-9) var(--gutter) var(--section-y)",
      display: "grid",
      gridTemplateColumns: "repeat(12,minmax(0,1fr))",
      gap: "var(--grid-gap)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / span 5",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "200 var(--type-display-m)/0.95 var(--font-serif)",
      letterSpacing: "var(--tracking-display)",
      margin: 0
    }
  }, "Let\u2019s make something ", /*#__PURE__*/React.createElement("i", null, "felt"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      margin: 0,
      maxWidth: "24em"
    }
  }, "Tell us a little about the project. We read every note and reply within two working days."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      marginTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: zLabel
  }, "Directly"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setToast(true);
      setTimeout(() => setToast(false), 2400);
    },
    style: {
      font: "300 24px var(--font-serif)"
    }
  }, "studio@zaya.productions"))), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      gridColumn: "7 / span 6",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "The project",
    size: "lg",
    multiline: true,
    rows: 3,
    placeholder: "What should it feel like?"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@studio.com",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Budget",
    placeholder: "Select a range",
    options: ["€25–50k", "€50–100k", "€100–250k", "€250k+"]
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Company",
    hint: "Optional",
    placeholder: "Brand or studio"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: zLabel
  }, "Disciplines"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28,
      flexWrap: "wrap"
    }
  }, ["Film", "Motion", "Visual storytelling", "Brand experience"].map(d => /*#__PURE__*/React.createElement(Checkbox, {
    key: d,
    label: d,
    defaultChecked: d === "Film"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: zLabel
  }, "Timeline"), /*#__PURE__*/React.createElement(Radio, {
    name: "tl",
    direction: "row",
    defaultValue: "season",
    options: [{
      value: "soon",
      label: "Within a month"
    }, {
      value: "season",
      label: "This season"
    }, {
      value: "later",
      label: "Later this year"
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "var(--space-5)",
      borderTop: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement(CBtn, {
    type: "submit",
    arrow: true,
    size: "lg"
  }, "Send enquiry"))), /*#__PURE__*/React.createElement(Dialog, {
    open: sent,
    onClose: () => setSent(false),
    eyebrow: "Enquiry received",
    title: "Thank you.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CBtn, {
      size: "sm",
      onClick: () => {
        setSent(false);
        go("Work");
      },
      arrow: true
    }, "Browse the work"), /*#__PURE__*/React.createElement(CBtn, {
      size: "sm",
      variant: "secondary",
      onClick: () => setSent(false)
    }, "Close"))
  }, "We\u2019ll be in touch within two working days. In the meantime, the reel is a good place to start."), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      left: "var(--gutter)",
      bottom: 24,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement(Toast, null, "Email address copied")));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Atmosphere,
  Button: HBtn,
  IconButton,
  SectionLabel,
  ProjectCard,
  TextLink: HLink
} = window.ZayaProductionsDesignSystem_f70e24;
function Disciplines() {
  const [h, setH] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", null, window.ZAYA_DISCIPLINES.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: d.name,
    onMouseEnter: () => setH(i),
    onMouseLeave: () => setH(null),
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(12,minmax(0,1fr))",
      gap: "var(--grid-gap)",
      alignItems: "baseline",
      padding: "28px 0",
      borderBottom: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...zLabel,
      gridColumn: "1 / span 1",
      color: h === i ? "var(--accent)" : zLabel.color,
      transition: "color var(--dur-base) var(--ease-out)"
    }
  }, "(", String(i + 1).padStart(2, "0"), ")"), /*#__PURE__*/React.createElement("span", {
    style: {
      gridColumn: "2 / span 6",
      font: `${h === i ? "italic " : ""}200 clamp(36px,4.4vw,64px)/1 var(--font-serif)`,
      letterSpacing: "-0.02em",
      transform: h === i ? "translateX(12px)" : "none",
      transition: "transform var(--dur-slow) var(--ease-out)"
    }
  }, d.name), /*#__PURE__*/React.createElement("span", {
    style: {
      gridColumn: "9 / span 4",
      color: "var(--text-secondary)"
    }
  }, d.line))));
}
function Home({
  go,
  openProject
}) {
  const P = window.ZAYA_PROJECTS;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Atmosphere, {
    glow: "low-right",
    style: {
      marginTop: "calc(-1 * var(--nav-height))",
      paddingTop: "var(--nav-height)"
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      padding: "var(--space-10) var(--gutter) var(--space-8)",
      minHeight: "72vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Crosshair, {
    style: {
      top: "22%",
      right: "18%"
    }
  }), /*#__PURE__*/React.createElement(Crosshair, {
    style: {
      top: "48%",
      left: "8%"
    }
  }), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "200 var(--type-display-xl)/0.9 var(--font-serif)",
      letterSpacing: "var(--tracking-display)",
      margin: 0
    }
  }, "A house for", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    style: {
      color: "var(--accent)"
    }
  }, "moving"), " pictures.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(12,minmax(0,1fr))",
      gap: "var(--grid-gap)",
      marginTop: "var(--space-8)",
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...zLabel,
      gridColumn: "1 / span 4"
    }
  }, "Est. 2019 \u2014 Motion, film & visual storytelling"), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200,
    style: {
      gridColumn: "8 / span 5"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "300 var(--type-lead)/var(--leading-lead) var(--font-sans)",
      margin: "0 0 24px"
    }
  }, "Zaya is a multidisciplinary creative house. We make films, motion and brand worlds for people who care how things feel."), /*#__PURE__*/React.createElement(HBtn, {
    variant: "ghost",
    arrow: true,
    onClick: () => go("Work")
  }, "See the work"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "16 / 8",
      background: "radial-gradient(40% 60% at 70% 70%,rgba(168,51,102,.25),transparent 70%),linear-gradient(170deg,#2a2624,#0b0a0a 70%)",
      overflow: "hidden",
      color: "var(--zaya-paper)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--grain-url)",
      opacity: .1,
      mixBlendMode: "overlay"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32,
      bottom: 28,
      right: 32,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...zLabel,
      color: "var(--text-inverse-muted)",
      marginBottom: 12
    }
  }, "Showreel \u2014 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "italic 200 48px/1 var(--font-serif)"
    }
  }, "Reel")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...zLabel,
      color: "var(--text-inverse-muted)"
    }
  }, "02:14"), /*#__PURE__*/React.createElement(IconButton, {
    label: "Play reel",
    tone: "night",
    size: 56
  }, "\u25B6"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--section-y) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: 1,
    aside: "The studio"
  }, "Point of view"), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "200 clamp(34px,4.2vw,64px)/1.08 var(--font-serif)",
      letterSpacing: "-0.02em",
      margin: "var(--space-8) 0 0",
      maxWidth: "20em",
      textWrap: "pretty"
    }
  }, "We believe the best work is ", /*#__PURE__*/React.createElement("i", null, "felt"), " before it is understood \u2014 so we start with atmosphere, and let the story find its ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "light"), ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-7)",
      marginLeft: "calc(58.33% + 12px)"
    }
  }, /*#__PURE__*/React.createElement(HLink, {
    arrow: true,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("Studio");
    }
  }, "About the studio"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 var(--gutter) var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: 2,
    aside: "2023 \u2014 2026"
  }, "Selected work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(12,minmax(0,1fr))",
      gap: "var(--space-8) var(--grid-gap)",
      marginTop: "var(--space-8)"
    }
  }, [[0, "1 / span 7", 0], [1, "9 / span 4", 160], [2, "2 / span 4", 0], [3, "7 / span 6", 96]].map(([i, col, mt]) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    style: {
      gridColumn: col,
      marginTop: mt
    }
  }, /*#__PURE__*/React.createElement(ProjectCard, _extends({}, P[i], {
    onClick: () => openProject(P[i].id)
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(HBtn, {
    variant: "secondary",
    arrow: true,
    onClick: () => go("Work")
  }, "All work"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 var(--gutter) var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: 3,
    aside: "What we make"
  }, "Disciplines"), /*#__PURE__*/React.createElement(Disciplines, null)), /*#__PURE__*/React.createElement(Atmosphere, {
    tone: "night",
    grid: true,
    glow: "low-left"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--section-y) var(--gutter)",
      display: "grid",
      gridTemplateColumns: "repeat(12,minmax(0,1fr))",
      gap: "var(--grid-gap)",
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      gridColumn: "1 / span 8",
      font: "200 var(--type-display-l)/0.92 var(--font-serif)",
      letterSpacing: "var(--tracking-display)",
      margin: 0
    }
  }, "Have something that should be ", /*#__PURE__*/React.createElement("i", null, "felt?")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "10 / span 3",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-inverse-muted)",
      margin: 0
    }
  }, "We take on a small number of projects each season."), /*#__PURE__*/React.createElement(HBtn, {
    tone: "night",
    arrow: true,
    onClick: () => go("Contact")
  }, "Start a conversation")))));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Project.jsx
try { (() => {
const {
  Atmosphere: PAtm,
  IconButton: PIcon,
  SectionLabel: PSec,
  Tag: PTag,
  TextLink: PLink
} = window.ZayaProductionsDesignSystem_f70e24;
function Still({
  aspect,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: aspect,
      background: "radial-gradient(50% 60% at 30% 70%,rgba(168,51,102,.2),transparent 70%),linear-gradient(160deg,#2c2826,#0b0a0a)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--grain-url)",
      opacity: .1,
      mixBlendMode: "overlay"
    }
  }));
}
function Project({
  id,
  openProject
}) {
  const P = window.ZAYA_PROJECTS;
  const i = P.findIndex(p => p.id === id);
  const p = P[i];
  const next = P[(i + 1) % P.length];
  const meta = [["Client", p.client], ["Discipline", p.discipline], ["Role", p.role], ["Year", p.year]];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PAtm, {
    tone: "night",
    glow: "low-right"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-10) var(--gutter) var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginBottom: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(PTag, {
    tone: "night"
  }, p.discipline), /*#__PURE__*/React.createElement(PTag, {
    tone: "night",
    active: true
  }, p.runtime)), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "200 var(--type-display-xl)/0.9 var(--font-serif)",
      letterSpacing: "var(--tracking-display)",
      margin: 0
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,minmax(0,1fr))",
      gap: "var(--grid-gap)",
      marginTop: "var(--space-9)",
      paddingTop: 20,
      borderTop: "1px solid var(--border-inverse)"
    }
  }, meta.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...zLabel,
      color: "var(--text-inverse-muted)",
      marginBottom: 10
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17
    }
  }, v))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 var(--gutter) var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Still, {
    aspect: "16 / 9"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    label: "Play film",
    tone: "night",
    size: 72
  }, "\u25B6"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--section-y) var(--gutter)",
      display: "grid",
      gridTemplateColumns: "repeat(12,minmax(0,1fr))",
      gap: "var(--grid-gap)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / span 3"
    }
  }, /*#__PURE__*/React.createElement(PSec, {
    index: 1,
    rule: false
  }, "The brief")), /*#__PURE__*/React.createElement("p", {
    style: {
      gridColumn: "4 / span 8",
      font: "200 clamp(30px,3.4vw,48px)/1.12 var(--font-serif)",
      letterSpacing: "-0.015em",
      margin: 0
    }
  }, p.logline, " ", /*#__PURE__*/React.createElement("i", null, "Less said, more seen.")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "4 / span 4",
      marginTop: "var(--space-7)",
      color: "var(--text-secondary)"
    }
  }, "We began with light rather than a script \u2014 scouting at the hours the piece would live in, and building the edit around the silence between moments."), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "9 / span 4",
      marginTop: "var(--space-7)",
      color: "var(--text-secondary)"
    }
  }, "The grade holds skin warm and shadows deep, with a single magenta practical carried through every scene.")), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 var(--gutter) var(--section-y)",
      display: "grid",
      gridTemplateColumns: "repeat(12,minmax(0,1fr))",
      gap: "var(--grid-gap)"
    }
  }, /*#__PURE__*/React.createElement(Still, {
    aspect: "4 / 5",
    style: {
      gridColumn: "1 / span 5"
    }
  }), /*#__PURE__*/React.createElement(Still, {
    aspect: "4 / 3",
    style: {
      gridColumn: "7 / span 6",
      marginTop: 160
    }
  })), /*#__PURE__*/React.createElement("section", {
    onClick: () => openProject(next.id),
    style: {
      cursor: "pointer",
      padding: "var(--space-8) var(--gutter)",
      borderTop: "1px solid var(--zaya-ink)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: zLabel
  }, "Next project"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "italic 200 clamp(40px,5vw,80px)/1 var(--font-serif)"
    }
  }, next.title, " \u2192")));
}
window.Project = Project;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Project.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shell.jsx
try { (() => {
const {
  NavBar,
  Logo,
  TextLink,
  Button
} = window.ZayaProductionsDesignSystem_f70e24;
const zLabel = {
  font: "500 11px/1.2 var(--font-sans)",
  letterSpacing: "var(--tracking-label)",
  textTransform: "uppercase",
  color: "var(--text-muted)"
};
function Crosshair({
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      width: 15,
      height: 15,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 0,
      width: 1,
      height: 15,
      background: "var(--accent)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 7,
      left: 0,
      height: 1,
      width: 15,
      background: "var(--accent)"
    }
  }));
}
function Reveal({
  children,
  delay = 0,
  style
}) {
  const r = React.useRef(null);
  const [v, setV] = React.useState(false);
  React.useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setV(true);
        io.disconnect();
      }
    }, {
      threshold: 0.15
    });
    r.current && io.observe(r.current);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: r,
    style: {
      opacity: v ? 1 : 0,
      transform: v ? "none" : "translateY(var(--reveal-distance))",
      transition: `opacity var(--dur-cinematic) var(--ease-out) ${delay}ms,transform var(--dur-cinematic) var(--ease-out) ${delay}ms`,
      ...style
    }
  }, children);
}
function SiteHeader({
  page,
  go,
  tone
}) {
  const [t, setT] = React.useState("");
  React.useEffect(() => {
    const f = () => setT(new Date().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Lisbon"
    }));
    f();
    const i = setInterval(f, 30000);
    return () => clearInterval(i);
  }, []);
  return /*#__PURE__*/React.createElement(NavBar, {
    active: page,
    tone: tone,
    basePath: "../../",
    items: ["Work", "Studio", "Contact"],
    onNavigate: p => go(p === "Home" ? "Home" : p),
    meta: /*#__PURE__*/React.createElement("span", null, "Lisbon \u2014 ", t),
    style: {
      position: "relative",
      zIndex: 2,
      background: tone === "night" ? "var(--zaya-night)" : "transparent"
    }
  });
}
function SiteFooter({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--zaya-night)",
      color: "var(--text-inverse)",
      padding: "var(--space-9) var(--gutter) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(12,minmax(0,1fr))",
      gap: "var(--grid-gap)",
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / span 7"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...zLabel,
      color: "var(--text-inverse-muted)",
      marginBottom: 20
    }
  }, "New work, by invitation"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:studio@zaya.productions",
    style: {
      font: "200 clamp(40px,5vw,76px)/1 var(--font-serif)",
      letterSpacing: "-0.02em",
      color: "var(--zaya-paper)",
      textDecoration: "none"
    }
  }, "studio@", /*#__PURE__*/React.createElement("i", null, "zaya"), ".productions")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "9 / span 2",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      fontSize: 16
    }
  }, ["Work", "Studio", "Contact"].map(p => /*#__PURE__*/React.createElement("a", {
    key: p,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(p);
    },
    style: {
      color: "var(--zaya-paper)",
      textDecoration: "none"
    }
  }, p))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "11 / span 2",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      fontSize: 16
    }
  }, /*#__PURE__*/React.createElement(TextLink, {
    tone: "night",
    external: true,
    href: "#"
  }, "Vimeo"), /*#__PURE__*/React.createElement(TextLink, {
    tone: "night",
    external: true,
    href: "#"
  }, "Instagram"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "var(--space-9)",
      paddingTop: 24,
      borderTop: "1px solid var(--border-inverse)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup",
    tone: "paper",
    height: 18,
    basePath: "../../"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...zLabel,
      color: "var(--text-inverse-muted)"
    }
  }, "\xA9 2026 Zaya Productions \u2014 Lisbon / London")));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  Crosshair,
  Reveal,
  zLabel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Studio.jsx
try { (() => {
const {
  SectionLabel: SSec,
  Atmosphere: SAtm
} = window.ZayaProductionsDesignSystem_f70e24;
function Studio() {
  const principles = [["Atmosphere first", "Before story, before script: what should it feel like when the lights go down?"], ["Fewer, deeper", "A handful of projects each season, each given our full attention."], ["Made by hand", "Direction, motion, sound and grade under one roof — so nothing is lost in translation."]];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(SAtm, {
    glow: "top",
    style: {
      marginTop: "calc(-1 * var(--nav-height))",
      paddingTop: "var(--nav-height)"
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-10) var(--gutter) var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...zLabel,
      marginBottom: "var(--space-6)"
    }
  }, "The studio"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "200 var(--type-display-l)/0.95 var(--font-serif)",
      letterSpacing: "var(--tracking-display)",
      margin: 0,
      maxWidth: "14em"
    }
  }, "A creative house, not an agency. We make ", /*#__PURE__*/React.createElement("i", null, "fewer"), " things, and make them ", /*#__PURE__*/React.createElement("i", {
    style: {
      color: "var(--accent)"
    }
  }, "matter"), "."))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 var(--gutter) var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement(SSec, {
    index: 1,
    aside: "How we work"
  }, "Principles"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,minmax(0,1fr))",
      gap: "var(--space-7)",
      marginTop: "var(--space-8)"
    }
  }, principles.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      paddingTop: i === 1 ? 80 : i === 2 ? 160 : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...zLabel,
      color: "var(--accent)"
    }
  }, "(", String(i + 1).padStart(2, "0"), ")"), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "300 var(--type-heading-l)/1.05 var(--font-serif)",
      margin: 0
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      margin: 0
    }
  }, d))))));
}
window.Studio = Studio;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Studio.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Work.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Tabs,
  ProjectCard: WorkCard
} = window.ZayaProductionsDesignSystem_f70e24;
function Work({
  openProject
}) {
  const [f, setF] = React.useState("all");
  const P = window.ZAYA_PROJECTS;
  const cats = ["Film", "Motion", "Brand world", "Title sequence"];
  const list = P.filter(p => f === "all" || p.discipline === f);
  const cols = ["1 / span 7", "9 / span 4", "2 / span 5", "8 / span 5", "1 / span 6", "8 / span 5"];
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: "var(--space-9) var(--gutter) var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 40,
      flexWrap: "wrap",
      paddingBottom: "var(--space-6)",
      borderBottom: "1px solid var(--zaya-ink)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "200 var(--type-display-l)/0.9 var(--font-serif)",
      letterSpacing: "var(--tracking-display)",
      margin: 0
    }
  }, "Work", /*#__PURE__*/React.createElement("sup", {
    style: {
      font: "500 14px var(--font-sans)",
      color: "var(--accent)",
      marginLeft: 8,
      verticalAlign: "top"
    }
  }, list.length)), /*#__PURE__*/React.createElement(Tabs, {
    value: f,
    onChange: setF,
    items: [{
      value: "all",
      label: "All",
      count: P.length
    }, ...cats.map(c => ({
      value: c,
      label: c,
      count: P.filter(p => p.discipline === c).length
    }))]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(12,minmax(0,1fr))",
      gap: "var(--space-8) var(--grid-gap)",
      marginTop: "var(--space-8)"
    }
  }, list.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      gridColumn: cols[i % cols.length],
      marginTop: i % 2 ? 120 : 0
    }
  }, /*#__PURE__*/React.createElement(WorkCard, _extends({}, p, {
    onClick: () => openProject(p.id)
  }))))));
}
window.Work = Work;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Work.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.ZAYA_PROJECTS = [{
  id: "quiet",
  index: 1,
  title: "The Quiet Between",
  client: "Maison Ardent",
  discipline: "Film",
  year: "2026",
  aspect: "4 / 3",
  logline: "A short film shot on 35mm across three nights in Lisbon.",
  role: "Direction, cinematography, grade",
  runtime: "04:12"
}, {
  id: "soft",
  index: 2,
  title: "Soft Machines",
  client: "Oru",
  discipline: "Motion",
  year: "2025",
  aspect: "4 / 5",
  logline: "A motion language for a company that builds quiet hardware.",
  role: "Motion system, 3D, sound",
  runtime: "01:30"
}, {
  id: "nocturne",
  index: 3,
  title: "Nocturne",
  client: "Nocturne Records",
  discipline: "Brand world",
  year: "2025",
  aspect: "4 / 5",
  logline: "Identity, sleeves and a living title card for an ambient label.",
  role: "Identity, motion, art direction",
  runtime: "00:45"
}, {
  id: "salt",
  index: 4,
  title: "Salt & Signal",
  client: "Atelier Mer",
  discipline: "Film",
  year: "2024",
  aspect: "16 / 10",
  logline: "Campaign film following a single boat from dusk to first light.",
  role: "Direction, edit, grade",
  runtime: "02:48"
}, {
  id: "chambers",
  index: 5,
  title: "Chambers",
  client: "Kōen Hotels",
  discipline: "Motion",
  year: "2024",
  aspect: "4 / 3",
  logline: "Ambient loops for twelve rooms that never play the same twice.",
  role: "Generative motion, installation",
  runtime: "Loop"
}, {
  id: "lowlight",
  index: 6,
  title: "Low Light",
  client: "Vessel",
  discipline: "Title sequence",
  year: "2023",
  aspect: "4 / 5",
  logline: "Main titles for a six-part documentary series.",
  role: "Titles, typography, motion",
  runtime: "01:05"
}];
window.ZAYA_DISCIPLINES = [{
  name: "Film",
  line: "Direction, cinematography, edit and grade — from treatment to final frame."
}, {
  name: "Motion",
  line: "Motion systems, title sequences and 3D for brands that move."
}, {
  name: "Visual storytelling",
  line: "Narrative, art direction and the world a story lives inside."
}, {
  name: "Brand experience",
  line: "Identity, installation and the moments people remember."
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.Atmosphere = __ds_scope.Atmosphere;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
