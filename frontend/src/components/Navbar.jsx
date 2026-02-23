import { NavLink, Link } from "react-router-dom";
import { Search, Moon, User } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    { name: "Business", path: "/business" },
    { name: "Sports", path: "/sports" },
    { name: "Technology", path: "/technology" },
    { name: "Health", path: "/health" },
    { name: "Entertainment", path: "/entertainment" },
    { name: "Trending", path: "/trending" },
  ];

  return (
    <header className="bg-white shadow-sm border-b">
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

          <Link
            to="/login"
            className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-black transition"
          >
            <User size={16} />
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
