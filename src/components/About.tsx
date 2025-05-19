
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-navy-dark mb-4">
              {t('about.title')}
            </h2>
            <div className="w-20 h-1 bg-gold mb-6"></div>
            <p className="text-gray-700 mb-6">
              {t('about.description')}
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <div className="h-2 w-2 bg-gold rounded-full mr-3"></div>
                <span>20+ Years of Experience</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 bg-gold rounded-full mr-3"></div>
                <span>Multilingual Legal Team</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 bg-gold rounded-full mr-3"></div>
                <span>Specializing in Thai & International Law</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 bg-gold rounded-full mr-3"></div>
                <span>Member of International Legal Associations</span>
              </li>
            </ul>
            <Button className="bg-navy hover:bg-navy-light text-white">
              {t('about.button')}
            </Button>
          </div>
          
          <div className="bg-navy-light rounded-lg p-6 text-white relative">
            {/* Thai pattern background overlay */}
            <div className="absolute inset-0 thai-pattern rounded-lg"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-serif font-bold">Why Choose Us?</h3>
                <div className="w-16 h-1 bg-gold mx-auto mt-3"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">20+</div>
                  <div className="text-sm">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">50+</div>
                  <div className="text-sm">Legal Professionals</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">1000+</div>
                  <div className="text-sm">Successful Cases</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">10+</div>
                  <div className="text-sm">Practice Areas</div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-navy rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xl font-bold">Need Legal Advice?</div>
                    <div className="text-sm text-gray-300">Schedule a free consultation today</div>
                  </div>
                  <Button className="bg-gold hover:bg-gold-dark text-navy-dark">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
