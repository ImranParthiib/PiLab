import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon, Loader } from "lucide-react";
import { auth } from "../../Firebase/firebaseConfig";

import PropTypes from "prop-types";

function Header({ user }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const handleLogout = async () => {
    console.log("Logging out...");
    setIsLoggingOut(true);
    try {
      await auth.signOut();
      console.log("Logout successful");
      setIsDropdownOpen(false);
      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-gradient-to-r from-purple-800 to-indigo-900 dark:from-gray-800 dark:to-gray-900 text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center space-x-2">
            <img src="/pilab-logo.png" alt="PiLab Logo" className="w-8 h-8" />
            <h1 className="text-2xl font-extrabold tracking-wider">
              Pi
              <span className="text-purple-300 dark:text-purple-400">Lab</span>
            </h1>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-white hover:text-purple-300 dark:hover:text-purple-400 transition duration-300 ease-in-out text-sm uppercase tracking-wider font-medium ${
                        isActive
                          ? "border-b-2 border-purple-300 dark:border-purple-400"
                          : ""
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <button
              onClick={toggleTheme}
              className="text-white hover:text-purple-300 dark:hover:text-purple-400 transition duration-300 ease-in-out"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="text-white hover:text-purple-300 dark:hover:text-purple-400 transition duration-300 ease-in-out"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* User Icon */}
          {user && (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
              >
                <span className="text-sm hidden sm:block">
                  {user.displayName}
                </span>
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg">
                  <ul>
                    <li>
                      <NavLink to="/dashboard" className="block px-4 py-2">
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="block px-4 py-2 w-full text-left   items-center space-x-2 bg-red-400 hover:rounded-b"
                      >
                        {isLoggingOut ? (
                          <Loader className="animate-spin" size={16} />
                        ) : null}
                        <span>Logout</span>
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block text-white hover:text-purple-300 dark:hover:text-purple-400 transition duration-300 ease-in-out py-2 text-sm uppercase tracking-wider font-medium ${
                        isActive
                          ? "border-b-2 border-purple-300 dark:border-purple-400"
                          : ""
                      }`
                    }
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  user: PropTypes.object,
};
