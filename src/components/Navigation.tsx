import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-sm shadow" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-8 py-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/lovable-uploads/logo.png"
            alt="Harwell Logo"
            className="h-10 w-auto"
          />
          <div
            className="text-white font-bold text-xl font-serif tracking-wide"
            style={{
              fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
              color: "#F5F5F5",
            }}
          >
            {t("nav.title")}
          </div>
        </Link>

        {/* Desktop Nav */}
        <div
          className="hidden md:flex items-center space-x-10 text-xl"
          style={{
            fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
            color: "#F5F5F5",
          }}
        >
          {[
            { label: t("nav.home"), path: "/" },
            { label: t("nav.about"), path: "/about" },
            { label: t("nav.services"), path: "/services" },
            { label: t("nav.mission"), path: "/mission" },
            { label: t("nav.contact"), path: "/contact" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative group text-white hover:text-gold transition-colors font-medium uppercase ${
                isActive(item.path) ? "text-gold" : ""
              }`}
            >
              <span className="after:content-[''] after:block after:h-[2px] after:bg-gold after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* GET IN TOUCH Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="group inline-flex items-center font-serif uppercase text-gold hover:text-gold-dark transition-colors text-lg border-none bg-transparent p-0 shadow-none"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#BFA75C",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontSize: "1.1rem",
            }}
          >
            {t("nav.getInTouch")}
            <span className="ml-2 transition-transform group-hover:translate-x-1">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="#BFA75C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white md:hidden"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 text-white"
          >
            <div className="flex flex-col space-y-4 p-4 text-center">
              {[
                { label: t("nav.home"), path: "/" },
                { label: t("nav.about"), path: "/about" },
                { label: t("nav.services"), path: "/services" },
                { label: t("nav.mission"), path: "/mission" },
                { label: t("nav.contact"), path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-lg font-medium uppercase ${
                    isActive(item.path) ? "text-gold" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="border border-gold text-gold px-4 py-2 rounded hover:bg-gold hover:text-black font-medium uppercase transition"
              >
                {t("nav.getInTouch")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
