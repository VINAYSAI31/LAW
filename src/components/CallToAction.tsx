
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-navy-dark text-white py-16">
      {/* Thai pattern background overlay */}
      <div className="absolute inset-0 thai-pattern"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gold hover:bg-gold-dark text-navy-dark">
              {t('cta.button')}
            </Button>
            <Button className="bg-transparent border-2 border-white hover:bg-white/10">
              {t('header.consultation')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
