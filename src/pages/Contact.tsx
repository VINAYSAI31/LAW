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
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900">
        {/* Header Section */}
        <div className="bg-emerald-darker/50 backdrop-blur-sm border-b border-gold/20 py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              {/* <div className="inline-flex items-center justify-center w-20 h-20 bg-gold rounded-full mb-6">
                <MessageSquare className="h-10 w-10 text-emerald-darker" />
              </div> */}
              <h1 className="text-5xl font-serif font-bold text-white mb-10 mt-20" style={{
                  fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                  color: "#F5F5F5",
                }}>
                Contact Our Legal Team
              </h1>
              <p className="text-cream max-w-2xl mx-auto text-2xl"style={{
                  fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                  color: "#BFA75C",
                }}>
                Get professional legal assistance. Send us your inquiry and our experienced attorneys will respond promptly.
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
                  Send Us a Message
                </h2>
                <div className="w-16 h-1 bg-gold"></div>
              </div>

              <form  className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xl font-medium text-cream mb-2"
                      style={{
                        fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                        color: "#BFA75C",
                      }}
                    >
                      <User className="inline h-4 w-4 mr-1" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 bg-gradient-to-br from-gray-1000 via-gray-1000 to-gray-1000 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald focus:border-transparent text-white placeholder-muted-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-xl font-medium text-cream mb-2"
                      style={{
                        fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                        color: "#BFA75C",
                      }}
                    >
                      <Mail className="inline h-4 w-4 mr-1" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-gradient-to-br from-gray-1000 via-gray-1000 to-gray-1000 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald focus:border-transparent text-white placeholder-muted-foreground"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xl font-medium text-cream mb-2"
                      style={{
                        fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                        color: "#BFA75C",
                      }}
                    >
                      <Phone className="inline h-4 w-4 mr-1" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+66 XX XXX XXXX"
                      className="w-full px-4 py-3 bg-gradient-to-br from-gray-1000 via-gray-1000 to-gray-1000 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald focus:border-transparent text-white placeholder-muted-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-xl font-medium text-cream mb-2"
                      style={{
                        fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                        color: "#BFA75C",
                      }}
                    >
                      <MessageCircle className="inline h-4 w-4 mr-1" />
                      LINE ID
                    </label>
                    <input
                      type="text"
                      name="lineId"
                      value={formData.lineId}
                      onChange={handleInputChange}
                      placeholder="Your LINE ID"
                      className="w-full px-4 py-3 bg-gradient-to-br from-gray-1000 via-gray-1000 to-gray-1000 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald focus:border-transparent text-white placeholder-muted-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xl font-medium text-cream mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                      color: "#BFA75C",
                    }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Brief description of your legal matter"
                    className="w-full px-4 py-3 bg-gradient-to-br from-gray-1000 via-gray-1000 to-gray-1000 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald focus:border-transparent text-white placeholder-muted-foreground"
                  />
                </div>

                <div>
                  <label className="block text-xl font-medium text-cream mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                      color: "#BFA75C",
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Please describe your legal issue or question in detail..."
                    className="w-full px-4 py-3 bg-gradient-to-br from-gray-1000 via-gray-1000 to-gray-1000 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald focus:border-transparent text-white placeholder-muted-foreground resize-none"
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
                      Sending Message...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
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
                  Get in Touch
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
                      >Office Address</h4>
                      <p className="text-cream leading-relaxed"
                        style={{
                          fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                          color: "#BFA75C",
                        }}
                      >
                        123 Legal District, Bangkok<br />
                        Thailand 10110
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
                      >Phone</h4>
                      <p className="text-cream"
                        style={{
                          fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                          color: "#BFA75C",
                        }}
                      >+66 2 XXX XXXX</p>
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
                      >Email</h4>
                      <p className="text-cream"
                        style={{
                          fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                          color: "#BFA75C",
                        }}
                      >info@bamroonglaw.com</p>
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
                      >Office Hours</h4>
                      <p className="text-cream"
                        style={{
                          fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                          color: "#BFA75C",
                        }}
                      >
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
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
                >Free Consultation</h4>
                <p className="text-cream leading-relaxed mb-4"
                  style={{
                    fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                    color: "#BFA75C",
                  }}
                >
                  We offer free initial consultations to help you understand your legal options before making any commitments.
                </p>
                <div className="text-gold font-semibold"
                  style={{
                    fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                    color: "#BFA75C",
                  }}
                >
                  No obligation • Confidential • Professional advice
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