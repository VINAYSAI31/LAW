
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-navy-dark text-white" style={{ backgroundColor: "#030915" }}>
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          
          {/* Thai Legal Services */}
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{
              fontFamily: "'Playfair Display', serif",
              color: "#f5c15c",
            }}>
              {t("footer.contactCase")}
            </h3>
            <div className="flex items-center text-white mb-4">
              <CheckCircle className="h-5 w-5 mr-2" style={{ color: "#f5c15c" }} />
              <span>{t("footer.freeConsultation")}</span>
            </div>
            
            <div className="space-y-6">
              {/* Assistant Lawyer */}
              <div>
                <div className="flex items-center mb-3">
                  <Phone className="h-5 w-5 mr-3" style={{ color: "#f5c15c" }} />
                  <a href="tel:0822184079" className="text-xl font-semibold hover:underline" style={{ color: "#f5c15c" }}>
                    082-218-4079
                  </a>
                </div>
                <h4 className="text-lg font-medium text-white mb-2">{t("footer.assistantName")}</h4>
                <p className="text-white text-sm mb-4">{t("footer.assistantTitle")}</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-3" style={{ color: "#f5c15c" }} />
                    <span className="text-white">LINE: kantera22phuket</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-3" style={{ color: "#f5c15c" }} />
                    <a href="mailto:sugar.kantera@gmail.com" className="text-white hover:underline">
                      sugar.kantera@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Main Lawyer */}
              <div className="pt-6 border-t border-gray-700">
                <div className="flex items-center mb-3">
                  <Phone className="h-5 w-5 mr-3" style={{ color: "#f5c15c" }} />
                  <a href="tel:0948069123" className="text-xl font-semibold hover:underline" style={{ color: "#f5c15c" }}>
                    094-806-9123
                  </a>
                </div>
                <h4 className="text-lg font-medium text-white mb-4">{t("footer.lawyerName")}</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-3" style={{ color: "#f5c15c" }} />
                    <span className="text-white">LINE: @bamroonglaw</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-3" style={{ color: "#f5c15c" }} />
                    <a href="mailto:bamroonglaw@gmail.com" className="text-white hover:underline">
                      bamroonglaw@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* International Services */}
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{
              fontFamily: "'Playfair Display', serif",
              color: "#f5c15c",
            }}>
              For Foreigners
            </h3>
            
            <div className="mb-6">
              <p className="text-lg text-white mb-3">Need legal assistance in English?</p>
              <div className="flex items-center text-white font-medium mb-2">
                <CheckCircle className="h-5 w-5 mr-2" style={{ color: "#f5c15c" }} />
                Chat with us now - we're here to help
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3" style={{ color: "#f5c15c" }} />
                <div>
                  <a href="tel:+66822184079" className="text-lg font-semibold hover:underline" style={{ color: "#f5c15c" }}>
                    +66 82 218 4079
                  </a>
                  <p className="text-sm text-white">Call Kantera</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-3" style={{ color: "#f5c15c" }} />
                <span className="text-white">LINE: kantera22phuket</span>
              </div>
              
              <div className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-3" style={{ color: "#f5c15c" }} />
                <span className="text-white">WhatsApp: +66 82 218 4079</span>
              </div>
              
              <div className="border-t border-gray-700 pt-4 mt-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3" style={{ color: "#f5c15c" }} />
                  <div>
                    <p className="text-white font-medium">Office Hours</p>
                    <p className="text-white">8:00 AM - 5:00 PM (GMT+7)</p>
                    {/* <p className="text-sm text-white">Monday - Friday</p> */}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 border border-slate-700 rounded-lg p-4">
              <div className="flex items-center font-medium mb-2" style={{ color: "#f5c15c" }}>
                <CheckCircle className="h-5 w-5 mr-2" />
                Free Initial Consultation
              </div>
              <p className="text-sm text-white">
                Get expert legal advice before making any decisions
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="text-center">
            <p className="text-slate-400 mb-4">Professional Legal Services | Licensed Legal Practice in Thailand</p>
            <div className="text-sm text-slate-500">
              © 2025 Bamrung Rungruang Law Office. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;