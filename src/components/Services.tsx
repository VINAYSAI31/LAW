
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Briefcase, Gavel, FileText, Scale, FileClock, HandCoins } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.civil'),
      description: t('services.civil.description'),
      icon: <Gavel className="h-6 w-6 text-white" />
    },
    {
      title: t('services.enforcement'),
      description: t('services.enforcement.description'),
      icon: <Scale className="h-6 w-6 text-white" />
    },
    {
      title: t('services.contracts'),
      description: t('services.contracts.description'),
      icon: <FileText className="h-6 w-6 text-white" />
    },
    {
      title: t('services.consultation'),
      description: t('services.consultation.description'),
      icon: <Briefcase className="h-6 w-6 text-white" />
    },
    {
      title: t('services.appeals'),
      description: t('services.appeals.description'),
      icon: <FileClock className="h-6 w-6 text-white" />
    },
    {
      title: t('services.negotiation'),
      description: t('services.negotiation.description'),
      icon: <HandCoins className="h-6 w-6 text-white" />
    }
  ];

  return (
    <div className=" py-24 relative">
      {/* Background pattern overlay */}
      {/* <div className="absolute inset-0 thai-pattern opacity-10"></div> */}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-white mb-4">
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300">
            {t('services.subtitle')}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ translateY: -10 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 group-hover:bg-white/10 group-hover:border-gold/20">
                <div className="mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 text-center flex-grow">
                  {service.description}
                </p>
                <div className="flex items-center justify-center text-gold font-medium cursor-pointer hover:text-white transition-colors duration-300 mt-auto">
                  <span>{t('buttons.learnMore')}</span>
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
