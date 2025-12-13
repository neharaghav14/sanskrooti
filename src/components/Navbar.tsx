import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="w-full border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Sanskrooti Logo"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-6 text-sm font-medium">
          {["/", "/about", "/dashboard"].map((path, i) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600"
                  : "hover:text-orange-600"
              }
            >
              {["Home", "About", "Dashboard"][i]}
            </NavLink>
          ))}

          <NavLink
            to="/login"
            className="px-4 py-1.5 rounded-full border border-orange-500 text-orange-600 text-xs hover:bg-orange-500 hover:text-white transition"
          >
            Login
          </NavLink>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
