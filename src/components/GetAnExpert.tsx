import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Award, Users, Scale, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const stats = [
  { icon: <Award className="h-8 w-8" />, number: "10", label: "Years of Business" },
  { icon: <Users className="h-8 w-8" />, number: "10000", label: "Completed Works" },
  { icon: <Scale className="h-8 w-8" />, number: "1000", label: "Valuable Customers" },
  { icon: <Globe className="h-8 w-8" />, number: "20", label: "Team Members" },
];

const GetAnExpert = () => {
  const { t } = useLanguage();

  return (
    <div className="relative  overflow-visible pb-0" style={{ backgroundColor: "#030915" }}> {/* even further reduced bottom padding for compactness */}
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "url('https://harwell-legal.com/wp-content/themes/harwell-legal/assets/images/pattern-cta-section.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "bottom",
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-emerald-darker/80"></div>

      {/* STATS SECTION (now at the top) */}
      <div className="relative z-10 pt-8"> {/* lower z-index so image can overlap */}
        <div className="bg-white/3 shadow-xl w-full py-3">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-gold mb-4 flex justify-center" style={{
    fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
    color: "#f5c15c ",
  }}>{stat.icon}</div>
                <div className="text-5xl font-bold text-emerald mb-2"style={{
    fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
    color: "#f5c15c ",
  }}>
                  {stat.number}
                  <span className="text-gold" style={{
    fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
    color: "#f5c15c ",
  }}>+</span>
                </div>
                <div className="text-sm uppercase tracking-wide text-gray-600 font-medium"style={{
    fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
    color: "#f5c15c ",
  }} >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content and expert image */}
      <div className="container mx-auto px-4 relative z-30 mt-[-120px]"> {/* more negative margin for more overlap, higher z-index */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <div className="w-16 h-1 bg-gold mb-6 mt-64"></div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8"   style={{
    fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
    color: "#F5F5F5",
  }}>
              Get a Legal Expert
            </h2>
            <p className="text-lg text-cream mb-8 leading-relaxed"   style={{
    fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
    color: "#CCCCCC",
  }}>
              You are planning to establish your business in a foreign country
              and struggle with local laws, trying to bypass pitfalls and
              potential risks? We know the situation all too well.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center font-serif uppercase text-gold hover:text-gold-dark transition-colors text-lg border-none bg-transparent p-0 shadow-none"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#e2b21f",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontSize: "1.1rem",
                }}
              >
                Contact Now
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-5 w-5" style={{ color: "#e2b21f" }} />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Right side - Floating Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-40 flex justify-end" // higher z-index for image
            style={{ marginTop: '-120px' }} // more negative margin for more overlap
          >
            <div className="relative w-full flex justify-end overflow-visible">
              <img
                src="/lovable-uploads/expert.png"
                alt="Legal Expert"
                className="w-full max-w-xl object-contain relative z-40 drop-shadow-2xl"
                style={{ marginBottom: '-75px' }} // no negative margin for maximum compactness
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GetAnExpert;
