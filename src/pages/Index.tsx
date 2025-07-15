
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import YouTubeSection from '@/components/YouTubeSection';
import OfficeStrengths from '@/components/OfficeStrengths';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import LawyerProfile from '@/components/LawyerProfile';
import GetAnExpert from '@/components/GetAnExpert';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <LawyerProfile/>
   
      
      <About />
      <GetAnExpert/>
    
      <CallToAction />
    </Layout>
  );
};

export default Index;
