import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: false });

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 1000);
    }, 3500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50"
          style={{ backgroundColor: "#071424" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-4xl mx-auto">
              {/* Main Heading */}
              <motion.div
                className="text-center mb-6 sm:mb-8 md:mb-12"
                data-aos="fade-up"
              >
                <h1
                  className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-wide"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#F5F5F5",
                  }}
                >
                  BUMRUNG RUNGREUNG 
                </h1>
              </motion.div>

              {/* Subheading */}
              <motion.div
                className="text-center mb-8"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <p
                  className="text-xl sm:text-2xl md:text-3xl font-normal"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#f5c15c",
                  }}
                >
                  Justice. Integrity. Dedication.
                </p>
              </motion.div>

              {/* Tagline / Animated Call */}
              <motion.div
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="inline-flex items-center gap-2 px-5 py-3 sm:px-7 sm:py-4 rounded-full relative group hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-gold/10 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
                  <div className="relative flex items-center gap-2 text-lg sm:text-xl md:text-2xl text-white">
                    <TypewriterEffect text="Your Justice, Our Mission..." />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
