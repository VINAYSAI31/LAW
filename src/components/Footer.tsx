
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-navy-dark text-white text-xl" style={{ backgroundColor: "#030915" }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-gold" style={{
    fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
    color: "#F5F5F5",
  }}  >
              {t('hero.title')}
            </h3>
            
            <div className="space-y-3 text-xl" >
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-gold mt-1" />
                <span className="text-xl text-cream"
                  style={{
                    fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                    color: "#f5c15c",
                  }}
                >{t('footer.address')}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-gold" />
                <span className="text-white"
                  style={{
                    fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                    color: "#f5c15c",
                  }}
                >{t('footer.phone')}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-gold" />
                <span className="text-white"
                  style={{
                    fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                    color: "#f5c15c",
                  }}
                >{t('footer.email')}</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-3 text-gold" />
                <span className="text-white"
                  style={{
                    fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                    color: "#f5c15c",
                  }}
                >LINE: {t('footer.line')}</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-gold">
              Menu
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gold transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
           
              
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Form Teaser */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-gold">
              {t('nav.contact')}
            </h3>
            <p className="mb-4 text-gray-300">
              <span className="text-cream"
                style={{
                  fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                  color: "#F5F5F5",
                }}
              >{t('cta.description')}</span>
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-gold hover:bg-gold-dark text-navy font-medium px-5 py-2.5 rounded transition-colors"
            >
              {t('cta.button')}
            </Link>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between">
          <div className="text-sm text-gray-400">
            {t('footer.copyright')}
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-gold transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-gold transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
