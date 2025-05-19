
import React from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const NewsPage = () => {
  const { t } = useLanguage();

  // Sample news items - these would typically come from a backend
  const newsItems = [
    {
      id: 1,
      title: "New Property Law Changes in Thailand",
      excerpt: "Recent changes to property ownership laws affect foreign investors and Thai citizens alike.",
      date: "2023-05-15",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      id: 2,
      title: "Understanding Business Contracts in Thailand",
      excerpt: "Our guide to navigating complex business contract laws for entrepreneurs and business owners.",
      date: "2023-04-29",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&q=80"
    },
    {
      id: 3,
      title: "Thai Court System: A Comprehensive Overview",
      excerpt: "Learn about the structure and jurisdiction of various courts in the Thai legal system.",
      date: "2023-04-10",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=800&q=80"
    }
  ];

  return (
    <Layout>
      <div className="pt-16 pb-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-serif font-bold text-navy-dark mb-4">
              {t('nav.news')}
            </h1>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              {t('news.subtitle')}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1 text-gold" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-gold" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <div className="flex items-center text-gold font-medium group-hover:text-navy transition-colors">
                    <span>{t('buttons.readMore')}</span>
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <button className="bg-navy text-white px-6 py-3 rounded-md shadow hover:bg-navy-dark transition-colors">
              {t('buttons.loadMore')}
            </button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage;
