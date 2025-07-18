import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Mission = () => {
  return (
    <section className="py-2  md-10 relative overflow-hidden" style={{ backgroundColor: "#0B1F3A" }}>
      {/* Background Pattern */}
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-emerald-200 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-gold rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-emerald-300 rotate-45"></div>
      </div>

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
            <h2 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-6" style={{
                fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                color: "#F5F5F5",
              }}>
            OUR MISSON
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>

            <h3 className="text-3xl md:text-4xl font-bold  mb-8"   style={{
    fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
    color: "#F5F5F5",
  }}>
              Because justice should not belong to{' '}
              only a few
            </h3>
            
            
            <p className="text-2xl md:text-3xl text-emerald-800 font-medium mb-6"   style={{
    fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
    color: "#BFA75C",
  }}>
              We make the law truly reliable.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-8 md:p-12 shadow-2xl border border-emerald-100 mb-12"
          >
            <p className="text-xl md:text-3xl text-gray-700  leading-relaxed "   style={{
    fontFamily: "'Lato', serif", // or "'Cormorant Garamond', serif"
    color: "#CCCCCC",
  }}>
              We do this job because we want to stand by those who have no voice.
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
              to="/vision-mission"
              className="group inline-flex items-center bg-white/10 hover:bg-emerald-900 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Vision
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;