import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Award, Users, Scale, Clock, Globe, Shield, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  const { t } = useLanguage();

  const achievements = [
    {
      icon: <Award className="h-8 w-8" />,
      number: "20+",
      label: t("about.achievement1"),
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "1000+",
      label: t("about.achievement2"),
    },
    {
      icon: <Scale className="h-8 w-8" />,
      number: "50+",
      label: t("about.achievement3"),
    },
    {
      icon: <Globe className="h-8 w-8" />,
      number: "3",
      label: t("about.achievement4"),
    },
  ];

  const values = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: t("about.value1.title"),
      description: t("about.value1.description"),
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: t("about.value2.title"),
      description: t("about.value2.description"),
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: t("about.value3.title"),
      description: t("about.value3.description"),
    },
  ];

  return (
    <div className="relative py-10 overflow-visible text-xl" style={{ backgroundColor: "#030915" }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* ⬅️ Left side - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative hover:-translate-y-2">
              
              
                <img
                  src="/lovable-uploads/statue.jpg"
                  alt="Legal team"
                  className="w-100px h-100px object-cover rounded-xl mb-6"
                />

             
             
            </div>
          </motion.div>

          {/* ➡️ Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Decorative line */}
              <div className="absolute -left-8 top-0 w-1 h-32 bg-gradient-to-b from-gold to-loyalBlue"></div>

              <h2 className="text-4xl font-serif font-bold text-white mb-6" style={{
                fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                color: "#f5c15c ",
              }}>
                {t("about.title")}
              </h2>

              <div className="w-24 h-1 bg-gold mb-8"></div>

              <p className="text-lg text-white mb-8 leading-relaxed"style={{
                fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                color: "#f5c15c ",
              }}>
                {t("about.description")}
              </p>

              {/* Values List */}
              <div className="space-y-6 mb-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-loyalBlue rounded-lg flex items-center justify-center text-gold">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2" style={{
                fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                color: "#F5F5F5",
              }}>
                        {value.title}
                      </h4>
                      <p className="text-white/90" style={{
                fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                color: "#f5c15c ",
              }}>{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Explore Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Link
                  to="/about"
                  className="group inline-flex items-center font-serif uppercase text-gold hover:text-gold-dark transition-colors text-lg border-none bg-transparent p-0 shadow-none"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#f5c15c ",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontSize: "1.1rem",
                  }}
                >
                  Explore More
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    <ArrowRight className="h-5 w-5" style={{ color: "#f5c15c " }} />
                  </span>
                </Link>
              </motion.div>
             
            </div>
          </motion.div>

        </div>
      </div>
{/* Custom Horizontal Line */}
<div className="w-full mt-20 flex justify-center" style={{ backgroundColor: "#030915" }}>
        <hr style={{ border: 0, height: "3px", width: "1390px", backgroundColor: "#f5c15c ", borderRadius: "2px", margin: "0 auto" }} />
      </div>
    </div>
    
  );
};

export default About;
