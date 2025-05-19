
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

const Testimonials = () => {
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Testimonials in different languages
  const testimonials: Record<string, Testimonial[]> = {
    en: [
      {
        id: 1,
        name: "Michael Johnson",
        role: "Business Owner",
        content: "Their expertise in Thai business law was invaluable for my company. They provided clear guidance and helped us navigate complex regulations with ease.",
        rating: 5
      },
      {
        id: 2,
        name: "Sarah Williams",
        role: "Expatriate",
        content: "As a foreigner living in Thailand, I was worried about my legal situation. This firm made everything clear and handled my case professionally.",
        rating: 5
      },
      {
        id: 3,
        name: "David Thompson",
        role: "Real Estate Investor",
        content: "Their knowledge of Thai property law is exceptional. They helped me secure my investments and avoid potential pitfalls in the market.",
        rating: 5
      }
    ],
    th: [
      {
        id: 1,
        name: "สมชาย รักไทย",
        role: "เจ้าของธุรกิจ",
        content: "ความเชี่ยวชาญด้านกฎหมายธุรกิจไทยของพวกเขามีคุณค่ามากสำหรับบริษัทของผม พวกเขาให้คำแนะนำที่ชัดเจนและช่วยให้เราเดินทางผ่านกฎระเบียบที่ซับซ้อนได้อย่างง่ายดาย",
        rating: 5
      },
      {
        id: 2,
        name: "วิภา สุขใจ",
        role: "นักธุรกิจ",
        content: "บริการด้านกฎหมายที่ยอดเยี่ยม ทีมทนายความมีความเป็นมืออาชีพและให้คำแนะนำที่ชัดเจน ทำให้เรื่องยากๆ กลายเป็นเรื่องง่าย",
        rating: 5
      },
      {
        id: 3,
        name: "ธนพล มั่งมี",
        role: "นักลงทุนอสังหาริมทรัพย์",
        content: "ความรู้ด้านกฎหมายอสังหาริมทรัพย์ไทยของพวกเขายอดเยี่ยมมาก พวกเขาช่วยให้ผมปกป้องการลงทุนและหลีกเลี่ยงปัญหาที่อาจเกิดขึ้นในตลาด",
        rating: 5
      }
    ],
    zh: [
      {
        id: 1,
        name: "王明",
        role: "企业主",
        content: "他们在泰国商业法方面的专业知识对我的公司非常宝贵。他们提供了明确的指导，帮助我们轻松应对复杂的法规。",
        rating: 5
      },
      {
        id: 2,
        name: "李红",
        role: "外籍人士",
        content: "作为一个在泰国生活的外国人，我对我的法律状况感到担忧。这家律所让一切变得清晰，并专业地处理了我的案件。",
        rating: 5
      },
      {
        id: 3,
        name: "张伟",
        role: "房地产投资者",
        content: "他们对泰国房地产法的了解非常出色。他们帮助我确保了我的投资安全，避免了市场中的潜在陷阱。",
        rating: 5
      }
    ]
  };
  
  const currentTestimonials = testimonials[language] || testimonials.en;
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === currentTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? currentTestimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-navy-dark mb-4">
            {t('testimonials.title')}
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 md:-translate-x-10 bg-white rounded-full p-2 shadow-md z-10 text-navy hover:text-gold focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 md:translate-x-10 bg-white rounded-full p-2 shadow-md z-10 text-navy hover:text-gold focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          {/* Testimonial card */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
            <div className="flex justify-center mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < currentTestimonials[currentIndex].rating
                      ? 'text-gold fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <blockquote className="text-center">
              <p className="text-lg text-gray-700 italic mb-6">
                "{currentTestimonials[currentIndex].content}"
              </p>
              <footer>
                <div className="font-bold text-navy-dark text-lg">
                  {currentTestimonials[currentIndex].name}
                </div>
                <div className="text-sm text-gold">
                  {currentTestimonials[currentIndex].role}
                </div>
              </footer>
            </blockquote>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {currentTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full ${
                  index === currentIndex ? 'bg-gold' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
