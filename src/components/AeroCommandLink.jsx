export default function AeroCommandLink({ heading, description, className = "", as = "button", children, ...props }) {
  const Component = as;

  return (
    <Component className={`aero-command-link flex items-start gap-3 p-3.5 text-left w-full ${className}`} {...props}>
      <span className="aero-command-link-arrow shrink-0 mt-0.5" aria-hidden="true" />
      <div className="flex flex-col">
        <span className="aero-command-link-heading font-semibold text-sm">{heading || children}</span>
        {description ? <span className="aero-command-link-desc text-xs text-white/80">{description}</span> : null}
      </div>
    </Component>
  );
}

