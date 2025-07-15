import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  ArrowRight,
  Briefcase,
  Gavel,
  FileText,
  Scale,
  FileClock,
  HandCoins,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const services = [
    {
      title: t('services.civil'),
      description: t('services.civil.description'),
      icon: <Gavel className="h-6 w-6 text-white" />,
    },
    {
      title: t('services.enforcement'),
      description: t('services.enforcement.description'),
      icon: <Scale className="h-6 w-6 text-white" />,
    },
    {
      title: t('services.contracts'),
      description: t('services.contracts.description'),
      icon: <FileText className="h-6 w-6 text-white" />,
    },
    {
      title: t('services.consultation'),
      description: t('services.consultation.description'),
      icon: <Briefcase className="h-6 w-6 text-white" />,
    },
    {
      title: t('services.appeals'),
      description: t('services.appeals.description'),
      icon: <FileClock className="h-6 w-6 text-white" />,
    },
    {
      title: t('services.negotiation'),
      description: t('services.negotiation.description'),
      icon: <HandCoins className="h-6 w-6 text-white" />,
    },
  ];

  return (
    <div className="py-24 bg-[#04506f]">
      <div className="container mx-auto px-4">
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
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-100">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-[#003f5c] text-white shadow-xl border border-white/10 p-8 flex flex-col h-full transition-all duration-300"
            >
              <div className="mb-6 flex items-center justify-center">
                <div className="w-16 h-16 bg-gold flex items-center justify-center">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-xl font-serif font-bold mb-4 text-center">
                {service.title}
              </h3>

              <p className="text-gray-300 text-center flex-grow">
                {service.description}
              </p>

              {/* Custom Button */}
              <button
                onClick={() => navigate('/services')}
                className="mt-6 self-center flex items-center gap-2 font-semibold text-gold hover:text-white transition-colors duration-300 relative group"
              >
                <span className="relative">
                  {t('buttons.learnMore')}
                  <span className="absolute left-0 -bottom-1 h-0.5 bg-gold w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
