
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { MapPin, Phone, Globe, Mail, MessageCircle } from 'lucide-react';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const languageNames = {
    en: 'English',
    th: 'ไทย',
    zh: '中文'
  };

  return (
    <div className="bg-navy-dark text-white">
      <div className="container mx-auto">
        {/* Top bar with contact info and language selector */}
        <div className="flex flex-col md:flex-row justify-between items-center py-2 px-4">
          <div className="flex flex-wrap items-center text-sm mb-2 md:mb-0 gap-4">
            <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
              <MapPin className="h-3.5 w-3.5 mr-1.5" />
              <span className="text-xs md:text-sm">{t('header.address')}</span>
            </div>
            
            <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
              <Phone className="h-3.5 w-3.5 mr-1.5" />
              <span className="text-xs md:text-sm">{t('header.phone')}</span>
            </div>
            
            <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
              <Mail className="h-3.5 w-3.5 mr-1.5" />
              <span className="text-xs md:text-sm">{t('header.email')}</span>
            </div>
            
            <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
              <MessageCircle className="h-3.5 w-3.5 mr-1.5" />
              <span className="text-xs md:text-sm">LINE: {t('header.line')}</span>
            </div>
          </div>
          
          {/* Language selector dropdown - now positioned on the right */}
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50 rounded-md px-2 py-1 bg-navy/70 hover:bg-navy">
              <Globe className="h-4 w-4 mr-2" />
              <span>{languageNames[language]}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-navy border border-gold/30">
              <DropdownMenuItem 
                onClick={() => setLanguage('en')}
                className={`${language === 'en' ? 'bg-gold text-navy font-medium' : 'text-white hover:bg-navy-light'}`}
              >
                English
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setLanguage('th')}
                className={`${language === 'th' ? 'bg-gold text-navy font-medium' : 'text-white hover:bg-navy-light'}`}
              >
                ไทย
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setLanguage('zh')}
                className={`${language === 'zh' ? 'bg-gold text-navy font-medium' : 'text-white hover:bg-navy-light'}`}
              >
                中文
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Header;
