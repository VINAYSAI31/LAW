import React from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Heart, Shield, Users, Scale, Target, Compass } from 'lucide-react';

const VisionMission = () => {
  const strengths = [
    {
      title: "Genuine understanding",
      icon: Heart,
      description: "We listen with heart, not just to find legal solutions, but to truly understand.",
      color: "emerald"
    },
    {
      title: "Honesty and integrity", 
      icon: Shield,
      description: "We believe everyone deserves protection—whether they have a voice in society or not.",
      color: "gold"
    },
    {
      title: "Affordable and fair pricing",
      icon: Users,
      description: "We keep our services affordable, because hardship does not discriminate.",
      color: "darkBrown"
    }
  ];

  const values = [
    {
      icon: Scale,
      title: "Equal Protection",
      description: "We believe everyone deserves protection—whether they have a voice in society or not."
    },
    {
      icon: Heart,
      title: "Empathetic Service",
      description: "We listen with heart, not just to find legal solutions, but to truly understand."
    },
    {
      icon: Users,
      title: "Accessible Pricing",
      description: "We keep our services affordable, because hardship does not discriminate."
    },
    {
      icon: Target,
      title: "Free Consultations",
      description: "We offer free initial consultations—to help you see your options before committing."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald via-emerald-dark to-emerald-darker"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1200&q=80')] bg-cover bg-center opacity-10"></div>
        
        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gold/15 rounded-full blur-lg animate-pulse delay-500"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center mb-8">
              <Compass className="h-16 w-16 text-gold mr-4" />
              <Scale className="h-20 w-20 text-gold" />
              <Target className="h-16 w-16 text-gold ml-4" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8">
              Vision & <span className="text-gold shine-text">Mission</span>
            </h1>
            
            <div className="max-w-5xl mx-auto space-y-8 mb-12">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl md:text-4xl font-light leading-relaxed"
              >
                Justice should not be a privilege for a few.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-gold"
              >
                We make the law truly accessible.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-2xl md:text-3xl font-light italic text-cream"
              >
                We do this not for fame—but to stand by those without a voice.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Our Strengths Section */}
      <div className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-emerald mb-6">
              Our Strengths
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative h-full">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${strength.color} to-${strength.color}-dark rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300`}></div>
                  
                  {/* Content card */}
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl transform group-hover:-translate-y-2 transition-all duration-300 h-full">
                    <div className="text-center">
                      <div className={`w-20 h-20 bg-${strength.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <strength.icon className="h-10 w-10 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-serif font-bold text-emerald mb-4 group-hover:text-gold transition-colors duration-300">
                        {strength.title}
                      </h3>
                      
                      <p className="text-darkBrown leading-relaxed text-lg">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className="py-24 bg-emerald relative overflow-hidden">
        <div className="absolute inset-0 thai-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm border border-gold/30 rounded-3xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="bg-gradient-to-r from-gold to-gold-dark p-8 text-center">
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-emerald mb-4">
                  Our Foundation
                </h3>
                <div className="w-16 h-1 bg-emerald mx-auto"></div>
              </div>
              
              {/* Content */}
              <div className="p-8 md:p-12 text-white">
                <div className="text-center mb-12">
                  <p className="text-2xl md:text-3xl font-serif leading-relaxed mb-8 text-cream">
                    The Law Office of Bamroong Rungruang was founded with a sincere mission:
                  </p>
                  
                  <div className="bg-white/10 backdrop-blur-sm border border-gold/30 rounded-2xl p-8 mb-12">
                    <p className="text-3xl md:text-4xl font-serif font-bold text-gold leading-relaxed">
                      To make the law an accessible support, not a barrier, especially for ordinary people.
                    </p>
                  </div>
                </div>

                {/* Values Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4 bg-white/5 rounded-xl p-6 border border-white/10"
                    >
                      <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center flex-shrink-0">
                        <value.icon className="h-6 w-6 text-emerald" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gold mb-2">{value.title}</h4>
                        <p className="text-cream leading-relaxed">{value.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Final Statement */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center pt-8 border-t border-gold/30"
                >
                  <p className="text-2xl md:text-3xl text-gold font-serif italic leading-relaxed">
                    Every case we take, we handle as if it were our own, because true justice starts from understanding others' pain.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-24 bg-gradient-to-r from-gold to-gold-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-serif font-bold text-emerald mb-6">
              Ready to Experience True Justice?
            </h2>
            <p className="text-xl text-emerald-dark mb-8 max-w-3xl mx-auto">
              Let us stand by your side and make the law work for you. Schedule your free consultation today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald hover:bg-emerald-dark text-white font-bold px-12 py-6 rounded-2xl 
                         text-xl shadow-2xl transition-all duration-300 transform hover:shadow-3xl"
            >
              Get Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default VisionMission;
