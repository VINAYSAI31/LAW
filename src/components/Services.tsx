import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Scale,
  Shield,
  FileText,
  Users,
  Gavel,
  HandCoins,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const colorMap: Record<string, string> = {
    emerald: 'bg-emerald-600',
    gold: 'bg-yellow-600',
    darkBrown: 'bg-[#4D301B]',
  };

  const services = [
    {
      id: 1,
      title: t('services.1.title'),
      subtitle: t('services.1.subtitle'),
      description: t('services.1.description'),
      fullDescription: t('services.1.fullDescription'),
      features: t('services.1.features') as unknown as string[],
      icon: <Scale className="h-12 w-12" />,
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
      color: 'emerald',
    },
    {
      id: 2,
      title: t('services.2.title'),
      subtitle: t('services.2.subtitle'),
      description: t('services.2.description'),
      fullDescription: t('services.2.fullDescription'),
      features: t('services.2.features') as unknown as string[],
      icon: <Shield className="h-12 w-12" />,
      image: 'https://t3.ftcdn.net/jpg/06/23/78/88/360_F_623788874_AkPJl27fwKD8DGW4Eg6R2JSZ5eFIUYl6.jpg',
      color: 'gold',
    },
    {
      id: 3,
      title: t('services.3.title'),
      subtitle: t('services.3.subtitle'),
      description: t('services.3.description'),
      fullDescription: t('services.3.fullDescription'),
      features: t('services.3.features') as unknown as string[],
      icon: <FileText className="h-12 w-12" />,
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
      color: 'darkBrown',
    },
    {
      id: 4,
      title: t('services.4.title'),
      subtitle: t('services.4.subtitle'),
      description: t('services.4.description'),
      fullDescription: t('services.4.fullDescription'),
      features: t('services.4.features') as unknown as string[],
      icon: <Users className="h-12 w-12" />,
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
      color: 'emerald',
    },
    {
      id: 5,
      title: t('services.5.title'),
      subtitle: t('services.5.subtitle'),
      description: t('services.5.description'),
      fullDescription: t('services.5.fullDescription'),
      features: t('services.5.features') as unknown as string[],
      icon: <Gavel className="h-12 w-12" />,
      image: 'https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?w=800&q=80',
      color: 'gold',
    },
    {
      id: 6,
      title: t('services.6.title'),
      subtitle: t('services.6.subtitle'),
      description: t('services.6.description'),
      fullDescription: t('services.6.fullDescription'),
      features: t('services.6.features') as unknown as string[],
      icon: <HandCoins className="h-12 w-12" />,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
      color: 'darkBrown',
    },
  ];

  return (
    <div className="py-24 px-6" style={{ backgroundColor: "#0B1F3A" }}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-6" style={{
                fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                color: "#F5F5F5",
              }}>
            OUR SERVICES
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-white/80 text-2xl" style={{
                fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                color: "#BFA75C",
              }}>
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="flex flex-col bg-[#fdf7ee] shadow-xl border border-black/10 transition-all duration-300"
              style={{ borderRadius: 0 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6 flex flex-col flex-grow">
                <div className={`w-12 h-12 mb-4 ${colorMap[service.color]} text-white flex items-center justify-center`}>
                  {service.icon}
                </div>

                <h3 className="text-xl font-serif font-bold mb-2">{service.title}</h3>
                <h4 className="text-md font-semibold mb-2 text-[#4D301B]">{service.subtitle}</h4>
                <p className="text-gray-800 flex-grow">{service.description}</p>

                <button
                  onClick={() => navigate(`/services`)}
                  className="mt-6 flex items-center gap-2 font-semibold text-gold hover:text-[#140d07] transition-colors duration-300 relative group"
                >
                  <span className="relative">
                    Explore
                    <span className="absolute left-0 -bottom-1 h-0.5 bg-gold w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
