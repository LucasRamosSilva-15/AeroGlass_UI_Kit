import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Login", to: "/login" },
  { label: "Showcase", to: "/showcase" },
  { label: "About", to: "/about" },
  { label: "Glass", to: "/glass-test" },
];

function getNavClass(isActive) {
  return `aero-nav-link font-title-md px-4 py-1.5${isActive ? " is-active" : ""}`;
}

export default function AeroNavbar() {
  const location = useLocation();
  const currentPath = `${location.pathname}${location.hash}`;

  function isItemActive(item) {
    if (item.to === "/") {
      return location.pathname === "/";
    }

    if (item.to.includes("#")) {
      return currentPath === item.to;
    }

    return location.pathname === item.to && location.hash === "";
  }

  return (
    <header className="aero-navbar sticky top-0 z-50 w-full">
      <div className="aero-content aero-navbar-inner mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-8">
        <NavLink className="aero-brand font-headline-lg text-white" to="/" aria-label="AeroGlass UI Kit, início">
          <span className="aero-brand-mark" aria-hidden="true"><i /><i /><i /><i /></span>
          <span>AeroGlass<span className="aero-brand-suffix">.studio</span></span>
        </NavLink>

        <nav aria-label="Navegação principal" className="aero-nav-items">
          {navItems.map((item) => (
            <NavLink className={() => getNavClass(isItemActive(item))} end={item.to === "/"} key={item.label} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
