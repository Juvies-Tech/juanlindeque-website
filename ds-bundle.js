/* @ds-bundle: {"format":4,"namespace":"SpringpointFinanceDesignSystem_1cabf5","components":[{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"AdvisorCard","sourcePath":"ui_kits/website/AdvisorCard.jsx"},{"name":"ContactSection","sourcePath":"ui_kits/website/ContactSection.jsx"},{"name":"Footer","sourcePath":"ui_kits/website/Footer.jsx"},{"name":"Hero","sourcePath":"ui_kits/website/Hero.jsx"},{"name":"Nav","sourcePath":"ui_kits/website/Nav.jsx"},{"name":"ServicesSection","sourcePath":"ui_kits/website/ServicesSection.jsx"}],"sourceHashes":{"components/feedback/Alert.jsx":"ba7c95c94775","components/feedback/Badge.jsx":"b53e593c82d6","components/feedback/Tag.jsx":"07382b83f3b1","components/forms/Button.jsx":"51deb7d28ea1","components/forms/Checkbox.jsx":"f578b8a08f1c","components/forms/Input.jsx":"5cb4870eb371","components/forms/Radio.jsx":"154aa0ca082f","components/forms/Select.jsx":"1499217bb1e7","components/layout/Card.jsx":"9c5219056c33","components/navigation/Tabs.jsx":"b499075630a1","ui_kits/website/AdvisorCard.jsx":"069629ae61c6","ui_kits/website/ContactSection.jsx":"baa3dd0eb20a","ui_kits/website/Footer.jsx":"f13e44e0adac","ui_kits/website/Hero.jsx":"d56208d2e21a","ui_kits/website/Nav.jsx":"027eaf14e66b","ui_kits/website/ServicesSection.jsx":"34a2676edeea"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SpringpointFinanceDesignSystem_1cabf5 = window.SpringpointFinanceDesignSystem_1cabf5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/feedback/Alert.jsx
try { (() => {
const TONES = {
  info: {
    bg: 'var(--navy-50)',
    border: 'var(--navy-700)',
    fg: 'var(--navy-900)'
  },
  success: {
    bg: '#eef6ef',
    border: 'var(--status-success)',
    fg: 'var(--status-success)'
  },
  warning: {
    bg: '#fbf3e6',
    border: 'var(--status-warning)',
    fg: 'var(--status-warning)'
  },
  danger: {
    bg: 'var(--red-50)',
    border: 'var(--red-600)',
    fg: 'var(--red-700)'
  }
};
function Alert({
  tone = 'info',
  title,
  children
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      padding: '14px 16px',
      borderRadius: 'var(--radius-md)',
      background: t.bg,
      borderLeft: `3px solid ${t.border}`,
      fontFamily: 'var(--font-sans)'
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-heading-sm)',
      color: t.fg
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, children));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
const COLORS = {
  navy: {
    bg: 'var(--navy-900)',
    fg: 'var(--white)'
  },
  red: {
    bg: 'var(--red-50)',
    fg: 'var(--red-600)'
  },
  neutral: {
    bg: 'var(--gray-100)',
    fg: 'var(--gray-700)'
  }
};
function Badge({
  children,
  tone = 'navy'
}) {
  const c = COLORS[tone] || COLORS.navy;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 12px',
      borderRadius: 'var(--radius-pill)',
      background: c.bg,
      color: c.fg,
      font: 'var(--text-label)',
      fontFamily: 'var(--font-sans)'
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--white)',
      border: '1px solid var(--border-default)',
      font: 'var(--text-body-sm)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-sans)'
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("svg", {
    onClick: onRemove,
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    style: {
      cursor: 'pointer',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18M6 6l12 12"
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
const BASE = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 700,
  border: 'none',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  borderRadius: 'var(--radius-pill)',
  transition: 'background-color 120ms ease, color 120ms ease, opacity 120ms ease'
};
const SIZES = {
  sm: {
    padding: '8px 16px',
    fontSize: '13px'
  },
  md: {
    padding: '12px 22px',
    fontSize: '14px'
  },
  lg: {
    padding: '15px 28px',
    fontSize: '15px'
  }
};
function variantStyle(variant, disabled) {
  if (disabled) {
    return {
      background: 'var(--gray-200)',
      color: 'var(--gray-500)',
      cursor: 'not-allowed'
    };
  }
  switch (variant) {
    case 'secondary':
      return {
        background: 'var(--white)',
        color: 'var(--navy-900)',
        border: '1px solid var(--border-strong)'
      };
    case 'ghost':
      return {
        background: 'transparent',
        color: 'var(--navy-900)'
      };
    case 'on-dark':
      return {
        background: 'transparent',
        color: 'var(--white)',
        border: '1px solid rgba(255,255,255,0.5)'
      };
    case 'primary':
    default:
      return {
        background: 'var(--red-600)',
        color: 'var(--white)'
      };
  }
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  disabled = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const v = variantStyle(variant, disabled);
  const hoverBg = !disabled && variant === 'primary' ? {
    background: 'var(--brand-accent-hover)'
  } : {};
  const hoverGhost = !disabled && variant === 'ghost' ? {
    background: 'var(--gray-100)'
  } : {};
  const hoverSecondary = !disabled && variant === 'secondary' ? {
    background: 'var(--navy-50)'
  } : {};
  return /*#__PURE__*/React.createElement("button", {
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...BASE,
      ...SIZES[size],
      ...v,
      ...(hover ? hoverBg : {}),
      ...(hover ? hoverGhost : {}),
      ...(hover ? hoverSecondary : {}),
      ...style
    }
  }, children, icon === 'arrow' && /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 18l6-6-6-6"
  })));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  defaultChecked = false,
  disabled = false
}) {
  const [checked, setChecked] = React.useState(defaultChecked);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-sans)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && setChecked(c => !c),
    style: {
      width: '20px',
      height: '20px',
      borderRadius: 'var(--radius-sm)',
      border: `1.5px solid ${checked ? 'var(--navy-900)' : 'var(--border-default)'}`,
      background: checked ? 'var(--navy-900)' : 'var(--white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "white",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  error,
  disabled = false,
  defaultValue
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-sans)',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    disabled: disabled,
    defaultValue: defaultValue,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      font: 'var(--text-body-md)',
      padding: '11px 14px',
      borderRadius: 'var(--radius-md)',
      border: `1.5px solid ${error ? 'var(--red-600)' : focused ? 'var(--navy-700)' : 'var(--border-default)'}`,
      background: disabled ? 'var(--gray-100)' : 'var(--white)',
      color: 'var(--text-primary)',
      outline: 'none',
      transition: 'border-color 120ms ease'
    }
  }), error && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--red-600)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  name,
  defaultChecked = false
}) {
  const [checked, setChecked] = React.useState(defaultChecked);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-sans)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setChecked(true),
    style: {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      border: `1.5px solid ${checked ? 'var(--red-600)' : 'var(--border-default)'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      background: 'var(--red-600)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  defaultValue,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-sans)',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    disabled: disabled,
    defaultValue: defaultValue,
    style: {
      font: 'var(--text-body-md)',
      padding: '11px 14px',
      borderRadius: 'var(--radius-md)',
      border: '1.5px solid var(--border-default)',
      background: disabled ? 'var(--gray-100)' : 'var(--white)',
      color: 'var(--text-primary)',
      outline: 'none'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function Card({
  eyebrow,
  title,
  children,
  icon,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      border: '1px solid var(--border-default)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '40px',
      height: '40px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--navy-50)',
      color: 'var(--navy-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '4px'
    }
  }, icon), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--red-600)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-heading-md)',
      color: 'var(--navy-900)'
    }
  }, title), children && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--text-secondary)'
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  defaultIndex = 0
}) {
  const [active, setActive] = React.useState(defaultIndex);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '24px',
      borderBottom: '1px solid var(--border-default)'
    }
  }, tabs.map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t.label,
    onClick: () => setActive(i),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '10px 2px',
      font: i === active ? '700 14px var(--font-sans)' : '600 14px var(--font-sans)',
      color: i === active ? 'var(--navy-900)' : 'var(--text-muted)',
      borderBottom: i === active ? '2px solid var(--red-600)' : '2px solid transparent',
      marginBottom: '-1px'
    }
  }, t.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 0',
      font: 'var(--text-body-md)',
      color: 'var(--text-secondary)'
    }
  }, tabs[active] && tabs[active].content));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AdvisorCard.jsx
try { (() => {
function AdvisorCard({
  Badge,
  Button
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--navy-50)',
      padding: '72px 40px',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '260px 1fr',
      gap: '40px',
      alignItems: 'center',
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)',
      padding: '32px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/springpoint-logo.jpeg",
    alt: "Advisor",
    style: {
      width: '220px',
      height: '220px',
      borderRadius: '50%',
      border: '4px solid var(--red-500)',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-heading-lg)',
      color: 'var(--navy-900)',
      margin: '0 0 4px'
    }
  }, "Juan Lindeque"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--text-muted)',
      marginBottom: '14px'
    }
  }, "Wealth Planner \xB7 BCom Investment Management"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      marginBottom: '18px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "navy"
  }, "FSP 43870"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Somerset West")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--text-secondary)',
      maxWidth: '520px',
      marginBottom: '20px'
    }
  }, "Independent advice across life insurance, investments, retirement and estate planning \u2014 backed by Springpoint Finance's panel of leading South African product providers."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "arrow"
  }, "Find an Advisor"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/verifi-logo.jpeg",
    alt: "Verifi",
    style: {
      height: '26px'
    }
  })))));
}
Object.assign(__ds_scope, { AdvisorCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AdvisorCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactSection.jsx
try { (() => {
function ContactSection({
  Input,
  Select,
  Checkbox,
  Button
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--navy-900)',
      color: '#fff',
      padding: '72px 40px',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 420px',
      gap: '48px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--red-400)',
      marginBottom: '12px'
    }
  }, "\u203A Contact Us"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-display-md)',
      margin: '0 0 16px',
      maxWidth: '480px'
    }
  }, "Let's plan your absolute peace of mind"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-md)',
      color: 'rgba(255,255,255,0.75)',
      maxWidth: '440px'
    }
  }, "An authorised Financial Services Provider (FSP 43870). Complete the form and one of our Wealth Planners will be in touch.")), /*#__PURE__*/React.createElement("form", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      padding: '28px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Jane Dlamini"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "jane@email.com"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "I'm interested in",
    options: ['Life Insurance', 'Investments', 'Retirement Planning', 'Wills & Estate', 'Medical Aid']
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I consent to be contacted about my financial plan"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "arrow",
    style: {
      justifyContent: 'center'
    }
  }, "Send Enquiry"))));
}
Object.assign(__ds_scope, { ContactSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-950)',
      color: 'rgba(255,255,255,0.6)',
      padding: '28px 40px',
      fontFamily: 'var(--font-sans)',
      font: 'var(--text-body-sm)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " Springpoint Finance (Pty) Ltd. Authorised FSP 43870."), /*#__PURE__*/React.createElement("span", null, "Somerset West, South Africa"));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Hero({
  Button
}) {
  const tiles = [{
    title: 'Bespoke Wealth Management',
    body: 'Tailored investment strategies from Certified Financial Advisors to grow and protect your legacy.'
  }, {
    title: 'Wholistic Retirement Planning',
    body: 'Secure your future with professional Retirement Investment solutions designed for long-term peace of mind.'
  }, {
    title: 'Independent Brokerage Services',
    body: "Unbiased access to South Africa's leading providers for Medical Aid, Insurance, and investment growth."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--navy-900)',
      color: '#fff',
      overflow: 'hidden',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      width: '46%',
      background: 'linear-gradient(180deg, var(--red-600), var(--red-700))',
      clipPath: 'ellipse(75% 100% at 100% 50%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 40px 40px',
      display: 'grid',
      gridTemplateColumns: '1fr 380px',
      gap: '40px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--red-400)',
      marginBottom: '14px'
    }
  }, "\u203A Hello & Welcome"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--text-display-xl)',
      margin: '0 0 20px',
      maxWidth: '620px'
    }
  }, "Planning Your Future for Absolute Peace of Mind"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-lg)',
      color: 'rgba(255,255,255,0.85)',
      maxWidth: '560px',
      marginBottom: '28px'
    }
  }, "We provide the clarity and independence you need to secure your financial future through bespoke Wealth Management and expert advice. Our Advisors combine years of leadership experience with the convenience of modern technology to protect your legacy, no matter where you are."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      marginBottom: '48px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "arrow"
  }, "Financial Services"), /*#__PURE__*/React.createElement(Button, {
    variant: "on-dark",
    icon: "arrow"
  }, "About Us")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '28px',
      maxWidth: '760px'
    }
  }, tiles.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-heading-sm)',
      marginBottom: '6px'
    }
  }, t.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'rgba(255,255,255,0.75)'
    }
  }, t.body))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      height: '440px',
      background: 'var(--navy-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(255,255,255,0.4)',
      font: 'var(--text-body-sm)'
    }
  }, "client portrait photo")));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
function Nav() {
  const items = ['Welcome', 'Our Services', 'Find an Advisor', 'Media Centre', 'Our Stable', 'Blog', 'About Us', 'Contact Us'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--red-500)',
      color: '#fff',
      textAlign: 'center',
      fontSize: '13px',
      fontWeight: 600,
      padding: '9px'
    }
  }, "Springpoint Finance is a leading brokerage for all major brands."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 40px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/springpoint-logo.jpeg",
    alt: "Springpoint Finance",
    style: {
      height: '46px',
      borderRadius: '6px'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '28px'
    }
  }, items.map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      color: '#fff',
      fontSize: '14px',
      fontWeight: 600,
      opacity: i === 'Welcome' ? 1 : 0.82,
      borderBottom: i === 'Welcome' ? '2px solid #fff' : '2px solid transparent',
      paddingBottom: '4px',
      cursor: 'pointer'
    }
  }, i)))));
}
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesSection.jsx
try { (() => {
function ServicesSection({
  Card
}) {
  const services = [{
    title: 'Life Insurance',
    body: 'Protect your income and your family with cover tailored to your life stage.'
  }, {
    title: 'Investments',
    body: 'Grow your wealth with diversified investment strategies matched to your goals.'
  }, {
    title: 'Wills & Estate Planning',
    body: 'Make sure your legacy is protected and passed on the way you intend.'
  }, {
    title: 'Short Term Insurance',
    body: 'Independent access to the best cover for your home, car and business.'
  }, {
    title: 'Medical Aid',
    body: 'Unbiased comparison across South Africa\u2019s leading medical schemes.'
  }, {
    title: 'Retirement Planning',
    body: 'Structured retirement annuities and living annuities for long-term security.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: '72px 40px',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--red-600)',
      marginBottom: '10px'
    }
  }, "\u203A Our Services"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-display-md)',
      color: 'var(--navy-900)',
      margin: '0 0 40px',
      maxWidth: '640px'
    }
  }, "Full financial planning, under one roof"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px'
    }
  }, services.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.title,
    title: s.title
  }, s.body)))));
}
Object.assign(__ds_scope, { ServicesSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesSection.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.AdvisorCard = __ds_scope.AdvisorCard;

__ds_ns.ContactSection = __ds_scope.ContactSection;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.Nav = __ds_scope.Nav;

__ds_ns.ServicesSection = __ds_scope.ServicesSection;

})();
