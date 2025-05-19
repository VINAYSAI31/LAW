
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const YouTubeSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-navy-dark mb-4">
            {t('youtube.title')}
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div> 

        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          {/* Channel Info */}
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-navy-dark flex items-center justify-center overflow-hidden border-2 border-gold">
                  <img 
                    src="/lovable-uploads/7fd66dfc-ebe7-4699-bdaa-aef78b046740.png"
                    alt="Phuket lawyer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-navy-dark">Phuket lawyer</h3>
                  <div className="flex space-x-3 text-sm text-gray-500 mt-1">
                    <span>2 {t('youtube.subscribers')}</span>
                    <span>•</span>
                    <span>2 {t('youtube.videos')}</span>
                    <span>•</span>
                    <span>21 {t('youtube.views')}</span>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mt-auto">
                <button className="bg-navy hover:bg-navy-dark text-white rounded py-2 px-4 w-full transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          {/* Videos */}
          <div className="md:w-2/3">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
                whileHover={{ y: -4 }}
              >
                <div className="relative pb-[56.25%] bg-black">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <div className="w-16 h-16 rounded-full bg-black/40 flex items-center justify-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <svg className="w-4 h-4 text-navy fill-current ml-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    <span className="text-sm opacity-90">Video thumbnail</span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-navy-dark">Suicide</h4>
                  <p className="text-sm text-gray-500 mt-1">08:51</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
                whileHover={{ y: -4 }}
              >
                <div className="relative pb-[56.25%] bg-black">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <div className="w-16 h-16 rounded-full bg-black/40 flex items-center justify-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <svg className="w-4 h-4 text-navy fill-current ml-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    <span className="text-sm opacity-90">Video thumbnail</span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-navy-dark">Fraudulent Brothel</h4>
                  <p className="text-sm text-gray-500 mt-1">00:33</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
