import React, { useState } from "react";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Scale,
  Shield,
  FileText,
  Users,
  Gavel,
  HandCoins,
  Phone,
  Mail,
} from "lucide-react";
import GetAnExpert from "@/components/GetAnExpert";
import { useNavigate, Link } from "react-router-dom";

const ServicesPage = () => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: t("services.1.title"),
      subtitle: t("services.1.subtitle"),
      description: t("services.1.description"),
      fullDescription: t("services.1.fullDescription"),
      features: t("services.1.features") as unknown as string[],
      icon: <Scale className="h-12 w-12" />,
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
      color: "emerald",
    },
    {
      id: 2,
      title: t("services.2.title"),
      subtitle: t("services.2.subtitle"),
      description: t("services.2.description"),
      fullDescription: t("services.2.fullDescription"),
      features: t("services.2.features") as unknown as string[],
      icon: <Shield className="h-12 w-12" />,
      image:
        "https://t3.ftcdn.net/jpg/06/23/78/88/360_F_623788874_AkPJl27fwKD8DGW4Eg6R2JSZ5eFIUYl6.jpg",
      color: "gold",
    },
    {
      id: 3,
      title: t("services.3.title"),
      subtitle: t("services.3.subtitle"),
      description: t("services.3.description"),
      fullDescription: t("services.3.fullDescription"),
      features: t("services.3.features") as unknown as string[],
      icon: <FileText className="h-12 w-12" />,
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      color: "darkBrown",
    },
    {
      id: 4,
      title: t("services.4.title"),
      subtitle: t("services.4.subtitle"),
      description: t("services.4.description"),
      fullDescription: t("services.4.fullDescription"),
      features: t("services.4.features") as unknown as string[],
      icon: <Users className="h-12 w-12" />,
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
      color: "emerald",
    },
    {
      id: 5,
      title: t("services.5.title"),
      subtitle: t("services.5.subtitle"),
      description: t("services.5.description"),
      fullDescription: t("services.5.fullDescription"),
      features: t("services.5.features") as unknown as string[],
      icon: <Gavel className="h-12 w-12" />,
      image:
        "https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?w=800&q=80",
      color: "gold",
    },
    {
      id: 6,
      title: t("services.6.title"),
      subtitle: t("services.6.subtitle"),
      description: t("services.6.description"),
      fullDescription: t("services.6.fullDescription"),
      features: t("services.6.features") as unknown as string[],
      icon: <HandCoins className="h-12 w-12" />,
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
      color: "darkBrown",
    },
    {
      id: 7,
      title: t("services.7.title"),
      subtitle: t("services.7.subtitle"),
      description: t("services.7.description"),
      fullDescription: t("services.7.fullDescription"),
      features: t("services.7.features") as unknown as string[],
      icon: <Scale className="h-12 w-12" />,
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
      color: "emerald",
    },
    {
      id: 8,
      title: t("services.8.title"),
      subtitle: t("services.8.subtitle"),
      description: t("services.8.description"),
      fullDescription: t("services.8.fullDescription"),
      features: t("services.8.features") as unknown as string[],
      icon: <Scale className="h-12 w-12" />,
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
      color: "emerald",
    },
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    window.scrollTo({ top: 0, behavior: "smooth" }); // <-- Add this line
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <Layout>
      {/* Hero Section */}
      {/* Hero Section */}
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('https://t3.ftcdn.net/jpg/06/23/78/88/360_F_623788874_AkPJl27fwKD8DGW4Eg6R2JSZ5eFIUYl6.jpg')] bg-cover bg-center"></div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-left"
            >
              <h1
                className="text-6xl md:text-6xl font-serif font-bold text-white mb-8"
                style={{
                  fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                  color: "#F5F5F5",
                }}
              >
                Our Services
              </h1>
              <div className="flex items-center space-x-2 mb-18">
              <Link to="/" className="text-gold font-medium">Home</Link>
              <span className="text-white/60">/</span>
                <span className="text-white">Our Services</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-24 text-xl" style={{ backgroundColor: "#030915" }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => handleServiceClick(service)}
                className="   p-0 h-90 shadow-[0_10px_30px_rgba(0,0,0,0.9)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-2"
                style={{ backgroundColor: "#030915"}}
              >
                <div className="relative h-full">
                  {/* Background Image */}

                  {/* Content Overlay */}
                  <div className="relative z-10 p-8 h-full min-h-[500px] flex flex-col justify-between text-white">
                    {/* Icon and Title */}
                    <div>
                      <div
                        className={`w-20 h-20 bg-${service.color} rounded-2xl flex items-center justify-center mb-6 
                                      shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                      >
                        {service.icon}
                      </div>
                      <h3
                        className="font-serif text-3xl font-bold mb-3 group-hover:text-white transition-colors duration-300"
                        style={{
                          fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                          color: "#F5F5F5",
                        }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="text-white text-lg font-medium mb-4"
                        style={{
                          fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                          color: "#f5c15c",
                        }}
                      >
                        {service.subtitle}
                      </p>
                      <p
                        className="text-white/90 leading-relaxed mb-6"
                        style={{
                          fontFamily: "'Open Sans', Lato", // or "'Cormorant Garamond', serif"
                          color: "#CCCCCC",
                        }}
                      >
                        {service.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <Link
                        to="/services"
                        className="group inline-flex items-center font-serif uppercase text-gold hover:text-gold-dark transition-colors text-lg border-none bg-transparent p-0 shadow-none"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: "#f5c15c",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          fontSize: "1.1rem",
                        }}
                      >
                        Explore More
                        <span className="ml-2 transition-transform group-hover:translate-x-1">
                          <ArrowRight className="h-5 w-5" style={{ color: "#f5c15c" }} />
                        </span>
                      </Link>

                      
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <GetAnExpert />

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute top-0 left-0 w-full h-full bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-24"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className=" max-w-4xl w-full max-h-[90vh] overflow-y-auto"style={{ backgroundColor: "#030915" }}
            >
              <div className="relative">
                {/* Header with image */}
                <div className="relative h-64 overflow-hidden rounded-t-3xl">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"  style={{
                      fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                      color: "#F5F5F5",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-darker to-transparent"></div>
                  <div className="absolute bottom-6 left-8 text-white">
                    <div
                      className={`w-16 h-16 bg-${selectedService.color} rounded-xl flex items-center justify-center mb-4`}
                    >
                      {selectedService.icon}
                    </div>
                    <h2 className="text-4xl font-serif font-bold"   style={{
    fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
    color: "#F5F5F5",
  }}>
                      {selectedService.title}
                    </h2>
                    <p className="text-white text-xl"   style={{
    fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
    color: "#f5c15c",
  }}>
                      {selectedService.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="absolute top-6 right-6 w-10 h-10 bg-white/4 backdrop-blur-sm rounded-full 
                               flex items-center justify-center text-white hover:bg-white/3 transition-colors"
                  >
                    ×
                  </button>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-lg text-darkBrown leading-relaxed mb-8"   style={{
    fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
    color: "#F5F5F5",
  }}>
                    {selectedService.fullDescription}
                  </p>

                  <h3 className="text-2xl font-serif font-bold text-emerald mb-6"   style={{
    fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
    color: "#F5F5F5",
  }}>
                    {t("services.feature")}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-8"   style={{
    fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
    color: "#f5c15c",
  }}>
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                        <span className="text-xl"  style={{
    fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
    color: "#f5c15c",
  }}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4 justify-between mt-8">
                    <button
                      className="group relative inline-flex items-center text-lg font-medium transition-colors border-2 border-gold  px-8 py-3 shadow-lg"
                      style={{
                        fontFamily: "'Open Sans', 'Lato', sans-serif",
                        color: "#CCCCCC",
                        fontWeight: 500,
                        letterSpacing: "0.05em",
                        background: "rgba(11, 31, 58, 0.9)",
                        backdropFilter: "blur(6px)",
                      }}
                      onClick={() => navigate('/contact')}
                    >
                      <span className="after:content-[''] after:block after:h-[2px] after:bg-gold after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                        {t("services.btn1")}
                      </span>
                    </button>
                    <button
                      onClick={closeModal}
                      className="group inline-flex items-center gap-2 font-serif uppercase transition-colors text-lg border-none bg-transparent p-0 shadow-none"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: "#f5c15c",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {t("services.btn2")}
                      <span className="ml-1 transition-transform group-hover:translate-x-1">
                        <svg width="18" height="18" fill="none" stroke="#f5c15c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default ServicesPage;
