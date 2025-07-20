import React from "react";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  Award,
  Users,
  Scale,
  Globe,
  Shield,
  Star,
  Heart,
  Target,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";
import GetAnExpert from "@/components/GetAnExpert";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: <Award className="h-8 w-8" />,
      number: "20+",
      label: t("aboutus.achievement1"),
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "2,500+",
      label: t("aboutus.achievement2"),
    },
    {
      icon: <Scale className="h-8 w-8" />,
      number: "98%",
      label: t("aboutus.achievement3"),
    },
    {
      icon: <Globe className="h-8 w-8" />,
      number: "3",
      label: t("aboutus.achievement4"),
    },
  ];

  const values = [
    {
      icon: <Shield className="h-12 w-12" />,
      title: t("aboutus.value1.title"),
      description: t("aboutus.value1.description"),
      color: "bg-darker-emerald",
    },
    {
      icon: <Star className="h-12 w-12" />,
      title: t("aboutus.value2.title"),
      description: t("aboutus.value2.description"),
      color: "bg-gold",
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: t("aboutus.value3.title"),
      description: t("aboutus.value3.description"),
      color: "bg-darkBrown",
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: t("aboutus.value4.title"),
      description: t("aboutus.value4.description"),
      color: "bg-emerald-dark",
    },
  ];

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
              <h1 className="text-6xl md:text-6xl font-serif font-bold text-white mb-8" style={{
                fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                color: "#F5F5F5",
              }}>
                About Us
              </h1>
              <div className="flex items-center space-x-2 mb-18">
                <Link to="/" className="text-gold font-medium">Home</Link>
                <span className="text-white/60">/</span>
                <span className="text-white">About Us</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission Statement Section */}
      <div
        className="pt-[160px] pb-24  "
        style={{ backgroundColor: "#071424" }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/lovable-uploads/about-us.jpg"
                alt="Legal consultation"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="border-l-4 border-gold pl-8" style={{
                  color: "#BFA75C",
                  fontFamily: "'Open Sans', 'Lato', sans-serif",
                }}>
                <blockquote className="text-2xl md:text-3xl font-serif text-emerald leading-relaxed mb-8">
                  "On the day you don't know who to turn to... We are the ones
                  who listen with our hearts without judgment and stand here to
                  help you with justice."
                </blockquote>
              </div>
              <div
                className="space-y-6 text-lg leading-relaxed"
                style={{
                  color: "#CCCCCC",
                  fontFamily: "'Open Sans', 'Lato', sans-serif",
                }}
              >
                <p>{t("aboutus.story1")}</p>
                <p>{t("aboutus.story2")}</p>
                <p>{t("aboutus.story3")}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Custom Horizontal Line */}
      <div className="w-full flex justify-center" style={{ backgroundColor: "#071424" }}>
        <hr style={{ border: 0, height: "3px", width: "1390px", backgroundColor: "#BFA75C", borderRadius: "2px", margin: "0 auto" }} />
      </div>

      {/* Core Values Section - Completely Redesigned */}
      <div
        className="py-24  relative overflow-hidden"
        style={{ backgroundColor: "#071424" }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-5xl font-bold mb-6"
              style={{
                fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                color: "#F5F5F5",
              }}
            >
              CIVIL CASES
            </h2>

            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-2xl text-white/80 max-w-3xl mx-auto">
              The principles that guide every decision, every case, and every
              client interaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative "
                style={{ backgroundColor: "#071424" }}
              >
                <div
                  className="relative bg-white/4 shadow-[0_40px_60px_rgba(0,0,0,0.9)]  transition-transform duration-300 hover:-translate-y-2 backdrop-blur-sm border border-white/20  p-8 h-full 
                                transition-all duration-500 transform hover:-translate-y-4
                               hover:bg-white/3 hover:border-gold/30"
                >
                  {/* Icon Container */}
                  <div
                    className={`w-20 h-20 ${value.color} rounded-2xl flex items-center justify-center 
                                  text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300
                                  relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-white/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">{value.icon}</div>
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl font-serif font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300" 
                  style={{
                fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                color: "#BFA75C",
              }}>
                    {value.title}
                  </h3>
                  <p className="text-white/80 text-1xl leading-relaxed group-hover:text-white transition-colors duration-300"
                  style={{
                fontFamily: "'Open Sans', Lato", // or "'Cormorant Garamond', serif"
                color: "#CCCCCC",
              }} >
                    {value.description}
                  </p>

                  {/* Decorative Element */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <GetAnExpert />
    </Layout>
  );
};

export default AboutPage;
