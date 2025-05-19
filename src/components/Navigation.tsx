import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Check if link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="flex items-center">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1,
                }}
                className="h-10 w-10 rounded-full overflow-hidden"
              >
                <img
                  src="/lovable-uploads/logo.png" // Replace this with the actual path to your logo
                  alt="Logo"
                  className="h-full w-full object-cover"
                />
              </motion.div>
              <div className="ml-3">
                <h1 className="text-navy font-serif text-xl font-bold group-hover:text-gold transition-colors">
                  {t("hero.title")}
                </h1>
                <p className="text-xs text-gray-500 tracking-widest">
                  {t("hero.subtitle")}
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-navy-dark hover:text-gold font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold after:transform after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform ${
                isActive("/") ? "text-gold after:scale-x-100" : ""
              }`}
            >
              {t("nav.home")}
            </Link>
            <Link
              to="/about"
              className={`text-navy-dark hover:text-gold font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold after:transform after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform ${
                isActive("/about") ? "text-gold after:scale-x-100" : ""
              }`}
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/services"
              className={`text-navy-dark hover:text-gold font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold after:transform after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform ${
                isActive("/services") ? "text-gold after:scale-x-100" : ""
              }`}
            >
              {t("nav.services")}
            </Link>
            <Link
              to="/team"
              className={`text-navy-dark hover:text-gold font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold after:transform after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform ${
                isActive("/team") ? "text-gold after:scale-x-100" : ""
              }`}
            >
              {t("nav.team")}
            </Link>
            <Link
              to="/news"
              className={`text-navy-dark hover:text-gold font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold after:transform after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform ${
                isActive("/news") ? "text-gold after:scale-x-100" : ""
              }`}
            >
              {t("nav.news")}
            </Link>
            <Link
              to="/fees"
              className={`text-navy-dark hover:text-gold font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold after:transform after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform ${
                isActive("/fees") ? "text-gold after:scale-x-100" : ""
              }`}
            >
              {t("nav.fees")}
            </Link>
            <Link
              to="/contact"
              className={`text-navy-dark hover:text-gold font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold after:transform after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform ${
                isActive("/contact") ? "text-gold after:scale-x-100" : ""
              }`}
            >
              {t("nav.contact")}
            </Link>
          </div>

          {/* Contact Info & Button */}
          <div className="hidden md:flex items-center">
            <div className="mr-4">
              <div className="text-navy-dark font-bold">
                {t("header.phone")}
              </div>
              <div className="text-xs text-gold">{t("header.available")}</div>
            </div>
            <Button className="bg-gold hover:bg-gold-dark text-navy-dark transition-all duration-300 hover:shadow-lg">
              {t("header.consultation")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-navy-dark focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white overflow-hidden"
            >
              <div className="flex flex-col space-y-4 py-4 px-2">
                <Link
                  to="/"
                  className={`text-navy-dark hover:text-gold font-medium px-3 py-2 ${
                    isActive("/") ? "text-gold bg-navy-light/10 rounded" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.home")}
                </Link>
                <Link
                  to="/about"
                  className={`text-navy-dark hover:text-gold font-medium px-3 py-2 ${
                    isActive("/about")
                      ? "text-gold bg-navy-light/10 rounded"
                      : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.about")}
                </Link>
                <Link
                  to="/services"
                  className={`text-navy-dark hover:text-gold font-medium px-3 py-2 ${
                    isActive("/services")
                      ? "text-gold bg-navy-light/10 rounded"
                      : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.services")}
                </Link>
                <Link
                  to="/team"
                  className={`text-navy-dark hover:text-gold font-medium px-3 py-2 ${
                    isActive("/team")
                      ? "text-gold bg-navy-light/10 rounded"
                      : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.team")}
                </Link>
                <Link
                  to="/news"
                  className={`text-navy-dark hover:text-gold font-medium px-3 py-2 ${
                    isActive("/news")
                      ? "text-gold bg-navy-light/10 rounded"
                      : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.news")}
                </Link>
                <Link
                  to="/fees"
                  className={`text-navy-dark hover:text-gold font-medium px-3 py-2 ${
                    isActive("/fees")
                      ? "text-gold bg-navy-light/10 rounded"
                      : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.fees")}
                </Link>
                <Link
                  to="/contact"
                  className={`text-navy-dark hover:text-gold font-medium px-3 py-2 ${
                    isActive("/contact")
                      ? "text-gold bg-navy-light/10 rounded"
                      : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.contact")}
                </Link>
                <div className="border-t border-gray-200 pt-4 mt-2">
                  <div className="text-navy-dark font-bold flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    {t("header.phone")}
                  </div>
                  <Button className="bg-gold hover:bg-gold-dark text-navy-dark w-full mt-3">
                    {t("header.consultation")}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
