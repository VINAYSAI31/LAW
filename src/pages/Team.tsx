
import React from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const TeamPage = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="pt-16 pb-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-navy-dark mb-4">
              {t('nav.team')}
            </h1>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg mb-8">
              Page content coming soon.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeamPage;
