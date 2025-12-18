import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

type AuthUser = {
  name: string;
  email: string;
};

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        setUser(null);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setMenuOpen(false);
    navigate("/login");
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Stories", path: "/stories" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Sanskrooti Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600"
                  : "hover:text-orange-600"
              }
            >
              {item.name}
            </NavLink>
          ))}

          {user ? (
            <>
              <span className="text-xs text-slate-600">
                Hi, <span className="font-semibold">{user.name}</span>
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-1.5 rounded-full border text-xs hover:bg-slate-100"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="px-4 py-1.5 rounded-full border border-orange-500 text-orange-600 text-xs hover:bg-orange-500 hover:text-white transition"
            >
              Login
            </NavLink>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4">
          <div className="flex flex-col gap-3 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-600"
                    : "hover:text-orange-600"
                }
              >
                {item.name}
              </NavLink>
            ))}

            <div className="pt-3 border-t">
              {user ? (
                <>
                  <p className="text-xs text-slate-600 mb-2">
                    Hi, <span className="font-semibold">{user.name}</span>
                  </p>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 rounded border text-xs hover:bg-slate-100"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <NavLink
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center px-4 py-2 rounded border border-orange-500 text-orange-600 text-xs hover:bg-orange-500 hover:text-white transition"
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;