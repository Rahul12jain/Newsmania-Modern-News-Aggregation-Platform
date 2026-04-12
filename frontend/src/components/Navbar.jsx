import { NavLink, Link } from "react-router-dom";
import { LogOut, Moon, Search, User } from "lucide-react";
import { useAuth } from "../context/useAuth";
 
const Navbar = () => {
  const { isAuthenticated, signOut, user } = useAuth();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Business", path: "/business" },
    { name: "Sports", path: "/sports" },
    { name: "Technology", path: "/technology" },
    { name: "Health", path: "/health" },
    { name: "Entertainment", path: "/entertainment" },
    { name: "Trending", path: "/trending" },
  ];

  

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-green-500 text-white p-2 rounded-lg">📰</div>
          <h1 className="text-xl font-semibold text-gray-800">Newsmania</h1>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-600 hover:text-black transition ${
                  isActive ? "font-semibold text-black" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center gap-5">
          <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black" />
          <Moon className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black" />

          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <span className="hidden text-sm font-medium text-gray-700 sm:inline">
                {user?.name}
              </span>
              <button
                className="flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-white transition hover:bg-black"
                onClick={signOut}
                type="button"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-black transition"
            >
              <User size={16} />
              Login/signup
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
