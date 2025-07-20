import React, { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute  inset-0">
        <img
          src="/lovable-uploads/home.jpg"
          alt={t("hero.backgroundAlt")}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 text-center px-4">
        <h1
          className={`text-white text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}style={{
            fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
            color: "#F5F5F5",
          }}
        >
          {t("hero.title")}
        </h1>

       

        <p
          className={`text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-2 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
            color: "#f5c15c",
          }}
        >
          {t("hero.description1")}
        </p>
        <p
          className={`text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
            color: "#f5c15c",
          }}
        >
          {t("hero.description2")}
        </p>

        {/* Feature List */}
       

        {/* Call to Action */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button className="border border-gold text-gold px-6 py-3 text-lg font-semibold rounded hover:bg-gold/40 hover:text-black transition"  style={{
    fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
    color: "#f5c15c",
  }} 
    onClick={() => navigate('/contact')}
  >
            {t("hero.button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
