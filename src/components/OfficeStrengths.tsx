
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Scale, Gavel, Award, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const OfficeStrengths = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-gray-100 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full thai-pattern z-0"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl font-serif font-bold text-navy-dark mb-4"
          >
            {t('strengths.title')}
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gold mx-auto mb-8"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-gray-600"
          >
            {t('strengths.description')}
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-b-4 border-gold">
            <div className="p-6">
              <div className="bg-navy/5 w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Shield className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-navy-dark text-center mb-3">
                {t('services.consultation')}
              </h3>
              <p className="text-gray-600 text-center">
                {t('services.consultation.description')}
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-b-4 border-gold">
            <div className="p-6">
              <div className="bg-navy/5 w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Scale className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-navy-dark text-center mb-3">
                {t('services.civil')}
              </h3>
              <p className="text-gray-600 text-center">
                {t('services.civil.description')}
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-b-4 border-gold">
            <div className="p-6">
              <div className="bg-navy/5 w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Gavel className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-navy-dark text-center mb-3">
                {t('services.appeals')}
              </h3>
              <p className="text-gray-600 text-center">
                {t('services.appeals.description')}
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-b-4 border-gold">
            <div className="p-6">
              <div className="bg-navy/5 w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Award className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-navy-dark text-center mb-3">
                {t('services.enforcement')}
              </h3>
              <p className="text-gray-600 text-center">
                {t('services.enforcement.description')}
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-b-4 border-gold">
            <div className="p-6">
              <div className="bg-navy/5 w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Briefcase className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-navy-dark text-center mb-3">
                {t('services.contracts')}
              </h3>
              <p className="text-gray-600 text-center">
                {t('services.contracts.description')}
              </p>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-navy-dark text-white px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
            {t('buttons.learnMore')} →
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfficeStrengths;
