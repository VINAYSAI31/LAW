import React from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Heart, Shield, Users, Scale, Target, Compass } from "lucide-react";
import GetAnExpert from "@/components/GetAnExpert";
import { useNavigate, Link } from "react-router-dom";


const VisionMission = () => {
  const strengths = [
    {
      title: "Genuine understanding",
      icon: Heart,
      description:
        "We listen with heart, not just to find legal solutions, but to truly understand.",
      color: "emerald",
    },
    {
      title: "Honesty and integrity",
      icon: Shield,
      description:
        "We believe everyone deserves protection—whether they have a voice in society or not.",
      color: "gold",
    },
    {
      title: "Affordable and fair pricing",
      icon: Users,
      description:
        "We keep our services affordable, because hardship does not discriminate.",
      color: "darkBrown",
    },
  ];

  const values = [
    {
      icon: Scale,
      title: "Equal Protection",
      description:
        "We believe everyone deserves protection—whether they have a voice in society or not.",
    },
    {
      icon: Heart,
      title: "Empathetic Service",
      description:
        "We listen with heart, not just to find legal solutions, but to truly understand.",
    },
    {
      icon: Users,
      title: "Accessible Pricing",
      description:
        "We keep our services affordable, because hardship does not discriminate.",
    },
    {
      icon: Target,
      title: "Free Consultations",
      description:
        "We offer free initial consultations—to help you see your options before committing.",
    },
  ];

  return (
    <Layout>
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
              <h1 className="text-6xl md:text-6xl font-serif font-bold text-white mb-8">
                Mission and Vision
              </h1>
              <div className="flex items-center space-x-2 mb-18">
              <Link to="/" className="text-gold font-medium">Home</Link>
              <span className="text-white/60">/</span>
                <span className="text-white">Our Mission</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Strengths Section */}
      <div className="py-24 " style={{ backgroundColor: "#0B1F3A" }}>
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Heading block with yellow border line */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border-l-4 border-gold pl-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold " style={{
                  fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                  color: "#F5F5F5",
                }}>
              Because justice should not belong to only a few.
            </h2>
          </motion.div>

          {/* Subtext sections */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold text-darkBrown"style={{
              fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
              color: "#BFA75C",
            }}
          >
            We make the law truly reliable.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl md:text-3xl font-light italic"style={{
              fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
              color: "#BFA75C",
            }}
          >
            We do this job because we want to stand by those who have no voice.
          </motion.p>
        </div>
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-emerald mb-6 py-16" 
style={{
                  fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                  color: "#F5F5F5",
                }}>
              OUR STRENGHTS
            </h2>
            <div className="w-60 h-1 bg-gold mx-auto "></div>
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
                  <div
                    className={`absolute inset-0  transform  group-hover:rotate-2 transition-transform duration-300`}
                  ></div>

                  {/* Content card */}
                  <div className="relative bg-white  p-8 shadow-2xl transform group-hover:-translate-y-2 transition-all duration-300 h-full bg-white/10 ">
                    <div className="text-center">
                      <div
                        className={`w-20 h-20 bg-${strength.color}    flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <strength.icon className="h-10 w-10 text-white" />
                      </div>

                      <h3 className="text-2xl font-serif font-bold text-emerald mb-4 group-hover:text-gold transition-colors duration-300"
style={{
                  fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                  color: "#F5F5F5",
                }}>
                        {strength.title}
                      </h3>

                      <p className="text-darkBrown leading-relaxed text-lg" style={{
                  fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                  color: "#BFA75C",
                }}>
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
      <div className="py-24 relative overflow-hidden" style={{ backgroundColor: "#0B1F3A" }}>
        <div className="absolute inset-0 thai-pattern opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm border border-gold/30  overflow-hidden shadow-2xl">
              {/* Header */}
              {/* <div className="bg-gradient-to-r from-gold to-gold-dark p-8 text-center">
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-emerald mb-4">
                  Our Foundation
                </h3>
                <div className="w-16 h-1 bg-emerald mx-auto"></div>
              </div> */}

              {/* Content */}
              <div className="p-8 md:p-12 text-white">
                <div className="text-center mb-12">
                  <p className="text-2xl md:text-3xl font-serif leading-relaxed mb-8 text-cream" style={{
                  fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                  color: "#F5F5F5",
                }}>
                    The Law Office of Bamroong Rungruang was founded with a
                    sincere mission:
                  </p>

                  <div className="bg-white/10 backdrop-blur-sm border border-gold/30    p-8 mb-12">
                    <p className="text-3xl md:text-4xl font-serif font-bold text-gold leading-relaxed" style={{
                  fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                  color: "#BFA75C",
                }}>
                      To make the law an accessible support, not a barrier,
                      especially for ordinary people.
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
                      className="flex items-start space-x-4 bg-white/5     p-6 border border-white/10"
                    >
                      <div className="w-12 h-12 bg-gold  flex items-center justify-center flex-shrink-0">
                        <value.icon className="h-6 w-6 text-emerald" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gold mb-2" style={{
                  fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                  color: "#F5F5F5",
                }}>
                          {value.title}
                        </h4>
                        <p className="text-xl leading-relaxed" style={{
                  fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                  color: "#BFA75C",
                }}>
                          {value.description}
                        </p>
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
                  <p className="text-2xl md:text-3xl text-gold  leading-relaxed" style={{
                  fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                  color: "#BFA75C",
                }}>
                    Every case we take, we handle as if it were our own, because
                    true justice starts from understanding others' pain.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action Section */}
      <GetAnExpert />
    </Layout>
  );
};

export default VisionMission;
