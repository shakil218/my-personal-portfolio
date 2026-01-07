import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Scroll to section
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  // Scroll spy + navbar background
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          setActive(link.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white/10 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1
          onClick={() => handleScroll("home")}
          className="text-2xl font-bold text-cyan-400 cursor-pointer"
        >
          Shakil
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className={`relative cursor-pointer font-medium transition
                ${
                  active === link.id
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-white"
                }
              `}
            >
              {link.name}

              {active === link.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-cyan-400 rounded"
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/70 backdrop-blur-xl border-t border-white/10"
          >
            <ul className="flex flex-col items-center py-6 space-y-6">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  onClick={() => handleScroll(link.id)}
                  className={`text-lg font-medium transition
                    ${
                      active === link.id
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-white"
                    }
                  `}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
