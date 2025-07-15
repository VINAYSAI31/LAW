import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languageNames = {
    en: 'English',
    th: 'ไทย',
    zh: '中文',
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger className="inline-flex items-center text-base font-bold px-5 py-3 bg-[#1a1a2e] text-white shadow-lg border-2 border-gold uppercase hover:bg-[#222248] transition duration-300">
          <Globe className="h-6 w-6 mr-3" />
          <span>{languageNames[language]}</span>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="bg-[#1a1a2e] border-2 border-gold text-white mt-2 shadow-xl"
        >
          {Object.entries(languageNames).map(([code, name]) => (
            <DropdownMenuItem
              key={code}
              onClick={() => setLanguage(code)}
              className={`px-5 py-3 text-base font-medium tracking-wide uppercase ${
                language === code
                  ? 'bg-gold text-black font-bold'
                  : 'hover:bg-[#2d2d44] hover:text-gold'
              }`}
            >
              {name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSwitcher;
