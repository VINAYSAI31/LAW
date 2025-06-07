import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Scale, Shield, FileText, Users, Gavel, HandCoins, Phone, Mail } from 'lucide-react';

const ServicesPage = () => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState(null);



const services = [
  {
    id: 1,
    title: t("services.1.title"),
    subtitle: t("services.1.subtitle"),
    description: t("services.1.description"),
    fullDescription: t("services.1.fullDescription"),
features: t("services.1.features") as unknown as string[],
    icon: <Scale className="h-12 w-12" />,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    color: "emerald"
  },
  {
    id: 2,
    title: t("services.2.title"),
    subtitle: t("services.2.subtitle"),
    description: t("services.2.description"),
    fullDescription: t("services.2.fullDescription"),
features: t("services.2.features") as unknown as string[],
    icon: <Shield className="h-12 w-12" />,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    color: "gold"
  },
  {
    id: 3,
    title: t("services.3.title"),
    subtitle: t("services.3.subtitle"),
    description: t("services.3.description"),
    fullDescription: t("services.3.fullDescription"),
features: t("services.3.features") as unknown as string[],
    icon: <FileText className="h-12 w-12" />,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    color: "darkBrown"
  },
  {
    id: 4,
    title: t("services.4.title"),
    subtitle: t("services.4.subtitle"),
    description: t("services.4.description"),
    fullDescription: t("services.4.fullDescription"),
features: t("services.4.features") as unknown as string[],
    icon: <Users className="h-12 w-12" />,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    color: "emerald"
  },
  {
    id: 5,
    title: t("services.5.title"),
    subtitle: t("services.5.subtitle"),
    description: t("services.5.description"),
    fullDescription: t("services.5.fullDescription"),
features: t("services.5.features") as unknown as string[],
    icon: <Gavel className="h-12 w-12" />,
    image: "https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?w=800&q=80",
    color: "gold"
  },
  {
    id: 6,
    title: t("services.6.title"),
    subtitle: t("services.6.subtitle"),
    description: t("services.6.description"),
    fullDescription: t("services.6.fullDescription"),
features: t("services.6.features") as unknown as string[],
    icon: <HandCoins className="h-12 w-12" />,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    color: "darkBrown"
  }
];


  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald via-emerald-dark to-emerald-darker"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1200&q=80')] bg-cover bg-center opacity-10"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gold/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-gold/30 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gold/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8">
              {t("services.title.one")} <span className="text-gold shine-text">{t("services.title.two")}</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 text-cream">
              {t("services.subtitle")}
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-block bg-white/10 backdrop-blur-sm border border-gold/30 rounded-full px-8 py-4"
            >
              <span className="text-gold font-medium">{t("services.areas")}</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => handleServiceClick(service)}
                className="group cursor-pointer relative"
              >
                <div className="relative h-full">
                  {/* Background Image */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-darker via-emerald-dark/80 to-emerald/40"></div>
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="relative z-10 p-8 h-full min-h-[500px] flex flex-col justify-between text-white">
                    {/* Icon and Title */}
                    <div>
                      <div className={`w-20 h-20 bg-${service.color} rounded-2xl flex items-center justify-center mb-6 
                                      shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                        {service.icon}
                      </div>
                      <h3 className="font-serif text-3xl font-bold mb-3 group-hover:text-gold transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gold text-lg font-medium mb-4">{service.subtitle}</p>
                      <p className="text-cream/90 leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gold font-medium group-hover:text-white transition-colors duration-300">
                        <span className="text-lg">Learn More</span>
                        <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                      </div>
                      
                      <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center 
                                      group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                        <ArrowRight className="h-6 w-6 text-gold group-hover:text-emerald transition-colors duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-24 bg-emerald relative overflow-hidden">
        <div className="absolute inset-0 thai-pattern opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-serif font-bold text-white mb-6">
              {t("services.cta.title")}
            </h2>
            <p className="text-xl text-cream mb-12 max-w-3xl mx-auto">
              {t("services.cta.desc")}
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <div className="flex items-center bg-white/10 backdrop-blur-sm border border-gold/30 rounded-full px-8 py-4">
                <Phone className="h-6 w-6 text-gold mr-3" />
                <span className="text-white text-lg">+66 (0) 123-456-789</span>
              </div>
              
              <div className="flex items-center bg-white/10 backdrop-blur-sm border border-gold/30 rounded-full px-8 py-4">
                <Mail className="h-6 w-6 text-gold mr-3" />
                <span className="text-white text-lg">info@lawfirm.com</span>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-gold hover:bg-gold-dark text-emerald font-bold px-12 py-6 rounded-2xl 
                         text-xl shadow-2xl transition-all duration-300 transform hover:shadow-3xl"
            >
             {t("services.cta.btn")}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                {/* Header with image */}
                <div className="relative h-64 overflow-hidden rounded-t-3xl">
                  <img 
                    src={selectedService.image} 
                    alt={selectedService.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-darker to-transparent"></div>
                  <div className="absolute bottom-6 left-8 text-white">
                    <div className={`w-16 h-16 bg-${selectedService.color} rounded-xl flex items-center justify-center mb-4`}>
                      {selectedService.icon}
                    </div>
                    <h2 className="text-4xl font-serif font-bold">{selectedService.title}</h2>
                    <p className="text-gold text-xl">{selectedService.subtitle}</p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full 
                               flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    ×
                  </button>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <p className="text-lg text-darkBrown leading-relaxed mb-8">
                    {selectedService.fullDescription}
                  </p>
                  
                  <h3 className="text-2xl font-serif font-bold text-emerald mb-6">{t("services.feature")}</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                        <span className="text-darkBrown">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <button className="bg-emerald hover:bg-emerald-dark text-white px-8 py-3 rounded-xl 
                                     font-medium transition-colors">
                      {t("services.btn1")}
                    </button>
                    <button 
                      onClick={closeModal}
                      className="border-2 border-emerald text-emerald hover:bg-emerald hover:text-white 
                               px-8 py-3 rounded-xl font-medium transition-all"
                    >
                      {t("services.btn2")}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default ServicesPage;