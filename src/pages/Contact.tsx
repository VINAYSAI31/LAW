import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { MessageCircle, Send, Mail, Phone, MapPin, Clock, User, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    lineId: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Layout>
      <div className="min-h-screen " style={{ backgroundColor: "#030915" }}>
        {/* Header Section */}
        <div className="bg-emerald-darker/50 backdrop-blur-sm border-b border-gold/20 py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl font-serif font-bold text-white mb-10 mt-20" style={{
                  fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                  color: "#F5F5F5",
                }}>
                {t('contact.title')}
              </h1>
              <p className="text-cream max-w-2xl mx-auto text-2xl"style={{
                  fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                  color: "#f5c15c",
                }}>
                {t('contact.description')}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className=" backdrop-blur-sm rounded-2xl shadow-2xl border border-border p-8"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-serif font-bold text-white mb-4" style={{
                  fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                  color: "#F5F5F5",
                }}>
                  {t('contact.info.heading')}
                </h2>
                <div className="w-16 h-1 bg-gold"></div>
              </div>

              <form  className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xl font-medium text-cream mb-2"
                      style={{
                        fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                        color: "#f5c15c",
                      }}
                    >
                      <User className="inline h-4 w-4 mr-1" />
                      {t('contact.form.nameLabel')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.namePlaceholder')}
                      className="w-full px-4 py-3  border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald focus:border-transparent text-white placeholder-muted-foreground "style={{ backgroundColor: "#030915" }}
                    />
                  </div>
                  <div>
                    <label className="block text-xl font-medium text-cream mb-2"
                      style={{
                        fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                        color: "#f5c15c",
                      }}
                    >
                      <Mail className="inline h-4 w-4 mr-1" />
                      {t('contact.form.emailLabel')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.emailPlaceholder')}
                      className="w-full px-4 py-3   border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald focus:border-transparent text-white placeholder-muted-foreground"style={{ backgroundColor: "#030915" }}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xl font-medium text-cream mb-2"
                      style={{
                        fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                        color: "#f5c15c",
                      }}
                    >
                      <Phone className="inline h-4 w-4 mr-1" />
                      {t('contact.form.phoneLabel')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.phonePlaceholder')}
                      className="w-full px-4 py-3   border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald focus:border-transparent text-white placeholder-muted-foreground"style={{ backgroundColor: "#030915" }}
                    />
                  </div>
                  <div>
                    <label className="block text-xl font-medium text-cream mb-2"
                      style={{
                        fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                        color: "#f5c15c",
                      }}
                    >
                      <MessageCircle className="inline h-4 w-4 mr-1" />
                      {t('contact.form.lineLabel')}
                    </label>
                    <input
                      type="text"
                      name="lineId"
                      value={formData.lineId}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.linePlaceholder')}
                      className="w-full px-4 py-3   border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald focus:border-transparent text-white placeholder-muted-foreground"style={{ backgroundColor: "#030915" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xl font-medium text-cream mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                      color: "#f5c15c",
                    }}
                  >
                    {t('contact.form.subjectLabel')}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.subjectPlaceholder')}
                    className="w-full px-4 py-3   border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald focus:border-transparent text-white placeholder-muted-foreground"style={{ backgroundColor: "#030915" }}
                  />
                </div>

                <div>
                  <label className="block text-xl font-medium text-cream mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                      color: "#f5c15c",
                    }}
                  >
                    {t('contact.form.messageLabel')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder={t('contact.form.messagePlaceholder')}
                    className="w-full px-4 py-3   border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald focus:border-transparent text-white placeholder-muted-foreground resize-none"style={{ backgroundColor: "#030915" }}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald hover:bg-emerald-dark text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      {t('contact.button.sending')}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="h-5 w-5 mr-2" />
                      {t('contact.button.send')}
                    </div>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg/50 backdrop-blur-sm rounded-2xl text-xl shadow-2xl border border-border p-8">
                <h3 className="text-2xl font-serif font-bold text-white mb-6"
                  style={{
                    fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                    color: "#F5F5F5",
                  }}
                >
                  {t('contact.info.heading')}
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white"
                        style={{
                          fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                          color: "#F5F5F5",
                        }}
                      >{t('contact.info.addressLabel')}</h4>
                      <p className="text-cream leading-relaxed"
                        style={{
                          fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                          color: "#f5c15c",
                        }}
                      >
                        {t('contact.info.addressValue')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white"
                        style={{
                          fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                          color: "#F5F5F5",
                        }}
                      >{t('contact.info.phoneLabel')}</h4>
                      <p className="text-cream"
                        style={{
                          fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                          color: "#f5c15c",
                        }}
                      >
                        {t('contact.info.phoneValue')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white"
                        style={{
                          fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                          color: "#F5F5F5",
                        }}
                      >{t('contact.info.emailLabel')}</h4>
                      <p className="text-cream"
                        style={{
                          fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                          color: "#f5c15c",
                        }}
                      >
                        {t('contact.info.emailValue')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white"
                        style={{
                          fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                          color: "#F5F5F5",
                        }}
                      >{t('contact.info.hoursLabel')}</h4>
                      <p className="text-cream"
                        style={{
                          fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                          color: "#f5c15c",
                        }}
                      >
                        {t('contact.info.hoursValue')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white"
                        style={{
                          fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                          color: "#F5F5F5",
                        }}
                      >{t('contact.info.lineLabel')}</h4>
                      <p className="text-cream"
                        style={{
                          fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                          color: "#f5c15c",
                        }}
                      >{t('contact.info.lineValue')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald/20 backdrop-blur-sm rounded-2xl border border-emerald/30 p-8">
                <h4 className="text-xl font-bold text-white mb-4"
                  style={{
                    fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                    color: "#F5F5F5",
                  }}
                >{t('contact.info.consultationHeading')}</h4>
                <p className="text-cream leading-relaxed mb-4"
                  style={{
                    fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                    color: "#f5c15c",
                  }}
                >
                  {t('contact.info.consultationText')}
                </p>
                <div className="text-gold font-semibold"
                  style={{
                    fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                    color: "#f5c15c",
                  }}
                >
                  {t('contact.info.consultationNote')}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;