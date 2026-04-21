import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Главная" },
    { to: "/donate", label: "Донат" },
    { to: "/rules", label: "Правила" },
    { to: "/profile", label: "Профиль" },
    { to: "/support", label: "Поддержка" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-purple-900/40 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center">
              <Icon name="Gamepad2" size={16} className="text-white" />
            </div>
            <span className="font-bold text-white text-lg tracking-wider" style={{ fontFamily: "Oswald, sans-serif" }}>
              DARK<span className="text-purple-400">RP</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link text-sm font-medium uppercase tracking-wider transition-colors ${
                  location.pathname === link.to
                    ? "text-purple-400 active"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              to="/profile"
              className="btn-purple px-4 py-2 rounded text-sm font-semibold uppercase tracking-wider"
            >
              Войти
            </Link>
          </div>

          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-purple-900/40 px-4 py-4 flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium uppercase tracking-wider py-2 ${
                location.pathname === link.to ? "text-purple-400" : "text-gray-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/profile"
            onClick={() => setMenuOpen(false)}
            className="btn-purple px-4 py-2 rounded text-sm font-semibold uppercase tracking-wider text-center mt-2"
          >
            Войти
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
