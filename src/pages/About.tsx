import React from "react";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  Award,
  Users,
  Scale,
  Clock,
  Globe,
  Shield,
  Star,
  BookOpen,
  Heart,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

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

  // const timeline = [
  //   {
  //     year: t("about.timeline1.year"),
  //     title: t("about.timeline1.title"),
  //     description: t("about.timeline1.description"),
  //   },
  //   {
  //     year: t("about.timeline2.year"),
  //     title: t("about.timeline2.title"),
  //     description: t("about.timeline2.description"),
  //   },
  //   {
  //     year: t("about.timeline3.year"),
  //     title: t("about.timeline3.title"),
  //     description: t("about.timeline3.description"),
  //   },
  //   {
  //     year: t("about.timeline4.year"),
  //     title: t("about.timeline4.title"),
  //     description: t("about.timeline4.description"),
  //   },
  // ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-emerald-dark">
        {/* Background with overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald via-emerald-dark to-emerald-dark"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1200&q=80')] bg-cover bg-center opacity-10"></div>

        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8">
              {t("aboutus.title.one")}<span className="text-gold shine-text">{t("aboutus.title.two")}</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 text-cream">
              <p>{t("aboutus.subtitle")}</p>
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="text-gold mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-gold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-cream text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-24 bg-emerald-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-serif font-bold text-cream mb-8">
                {t("aboutus.storyTitle")}
              </h2>
              <div className="space-y-6 text-lg text-cream leading-relaxed">
                <p>
                  {t("aboutus.story1")}
                </p>
                <p>
                  {t("aboutus.story2")}
                </p>
                <p>
                 {t("aboutus.story3")}
                </p>
              </div>
              <Button className="mt-8 bg-emerald hover:bg-emerald-dark text-white px-8 py-4 text-lg">
                 {t("aboutus.ctaButton")}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
                  alt="Legal team"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-2xl p-3 ">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-emerald rounded-full flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-gold" />
                    </div>
                    
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 bg-emerald-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-Garamond font-bold text-cream mb-6">
              {t("aboutus.values.title")}
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-cream max-w-3xl mx-auto">
              {t("aboutus.values.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div
  className="bg-emerald-dark text-gold   p-8 h-full shadow-[0_10px_30px_rgba(0,0,0,0.9)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-2"
>

                  <div
                    className={`w-20 h-20 ${value.color} rounded-2xl flex items-center justify-center text-white mb-6 
                                  shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gold-light mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gold-light leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
     

      {/* CTA Section */}
      <div className="py-24">
        <div className="container mx-auto px-4 text-center text-cream">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
              // className="bg-emerald-dark text-cream    p-8 h-full shadow-[0_10px_30px_rgba(0,0,0,0.9)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-2"

          >
            <h2 className="text-5xl font-serif font-bold text-emerald mb-6">
              {t("aboutus.ctaTitle")}
            </h2>
            <p className="text-xl text-emerald-dark mb-8 max-w-2xl mx-auto">
              {t("aboutus.ctaDesc")}
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-emerald hover:bg-emerald-dark text-white px-8 py-4 text-lg shadow-lg">
                {t("aboutus.ctaBtn1")}
              </Button>
              <Button className="bg-transparent border-2 border-emerald text-emerald hover:bg-emerald hover:text-white px-8 py-4 text-lg">
                {t("aboutus.ctaBtn2")}
              </Button>
            </div> */}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
