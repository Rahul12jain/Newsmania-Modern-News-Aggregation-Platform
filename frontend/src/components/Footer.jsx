import { Link } from "react-router-dom";
import { Twitter, Linkedin, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B1C36] text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-500 text-white p-2 rounded-lg">📰</div>
            <h2 className="text-xl font-semibold text-white">Newsmania</h2>
          </div>

          <p className="text-gray-400 leading-relaxed mb-6">
            Your trusted source for breaking news, in-depth analysis, and
            compelling stories from around the world. Stay informed, stay ahead.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[Twitter, Linkedin, Instagram, Youtube].map((Icon, index) => (
              <div
                key={index}
                className="bg-[#142B4D] p-3 rounded-full hover:bg-green-500 transition cursor-pointer"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold mb-4">Categories</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/business" className="hover:text-green-400">
                Business
              </Link>
            </li>
            <li>
              <Link to="/sports" className="hover:text-green-400">
                Sports
              </Link>
            </li>
            <li>
              <Link to="/technology" className="hover:text-green-400">
                Technology
              </Link>
            </li>
            <li>
              <Link to="/health" className="hover:text-green-400">
                Health
              </Link>
            </li>
            <li>
              <Link to="/entertainment" className="hover:text-green-400">
                Entertainment
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link to="#" className="hover:text-green-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-400">
                Contact
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-400">
                Careers
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-400">
                Advertise
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-400">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for the latest news and updates.
          </p>

          <div className="relative mb-4">
            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#142B4D] text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <Link to="/login">
            <button className="w-full bg-green-500 hover:bg-green-600 transition text-white py-3 rounded-lg font-semibold">
              Login
            </button>
          </Link>

          <p className="text-sm text-gray-500 mt-3">
            By subscribing, you agree to our Privacy Policy.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#142B4D] mt-12 pt-6 text-center text-gray-500 text-sm">
        2026 Newsmania. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
