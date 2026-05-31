import { Link } from "react-router-dom";

export default function AeroButton({ children, variant = "primary", className = "", type = "button", asLink = false, ...props }) {
  const variants = {
    danger: "aero-btn-danger",
    ghost: "aero-btn-ghost",
    primary: "aero-btn-primary",
    secondary: "aero-btn-secondary",
  };
  const variantClass = variants[variant] ?? variants.primary;
  const buttonClass = `${variantClass} font-title-md flex items-center justify-center gap-2 px-4 py-2.5 ${className}`;

  if (asLink) {
    const { href, to = href, ...linkProps } = props;

    return (
      <Link className={buttonClass} to={to} {...linkProps}>
        <span className="relative z-10 inline-flex items-center justify-center gap-2">{children}</span>
      </Link>
    );
  }

  return (
    <button
      className={buttonClass}
      type={type}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center justify-center gap-2">{children}</span>
    </button>
  );
}
