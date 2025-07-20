import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Mission = () => {
  const { t } = useLanguage();
  return (
    <section className="p-0 m-0 border-none md-10 relative overflow-hidden" style={{ backgroundColor: "#030915" }}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-5xl lg:text-6xl font-serif py-6 font-bold text-white mb-6" style={{
                fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                color: "#daac24",
              }}>
              {t('mission.missionHeading')}
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <h3 className="text-3xl md:text-4xl font-bold  mb-8"   style={{
              fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
              color: "#f5c15c",
            }}>
              {t('mission.missionText')}
            </h3>
            <p className="text-2xl md:text-3xl text-emerald-800 font-medium mb-6"   style={{
              fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
              color: "#f5c15c",
            }}>
              {t('mission.missionSubText')}
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm p-8 md:p-12 shadow-2xl border border-emerald-100 mb-12"
          >
            <p className="text-xl md:text-3xl text-gray-700  leading-relaxed "   style={{
              fontFamily: "'Lato', serif", // or "'Cormorant Garamond', serif"
              color: "#f5c15c",
            }}>
              {t('mission.visionText')}
            </p>
          </motion.div>

          {/* Explore Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              to="/mission"
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
              {t('mission.button')}
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-5 w-5" style={{ color: "#f5c15c" }} />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;