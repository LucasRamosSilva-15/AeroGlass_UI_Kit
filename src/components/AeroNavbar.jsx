import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Login", to: "/login" },
  { label: "Showcase", to: "/showcase" },
  { label: "About", to: "/about" },
  { label: "Glass", to: "/glass-test" },
];

function getNavClass(isActive) {
  return isActive
    ? "aero-btn-primary font-title-md px-4 py-1.5"
    : "aero-nav-link font-title-md px-4 py-1.5";
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
      <div className="aero-content mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-8">
        <NavLink className="aero-brand font-headline-lg text-white" to="/">
           AeroGlass UI Kit
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
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
