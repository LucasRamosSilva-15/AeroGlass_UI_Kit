export default function AeroInput({ icon, id, label, className = "", ...props }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="aero-text-shadow font-label-md px-1 text-white" htmlFor={id}>
        {label}
      </label>
      <span className="relative">
        {icon ? <InputIcon name={icon} /> : null}
        <input
          id={id}
          className={`aero-input font-body-sm w-full rounded py-2 pr-4 text-[#081d2c] placeholder:text-[#c2c6d3] ${icon ? "pl-10" : "pl-4"} ${className}`}
          {...props}
        />
      </span>
    </div>
  );
}

function InputIcon({ name }) {
  const paths = {
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-[#727783]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      {paths[name]}
    </svg>
  );
}
