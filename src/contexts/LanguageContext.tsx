import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "th" | "zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const defaultLanguage: Language = "en";

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key: string) => key,
});

export const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Our Services",
    "nav.team": "Our Legal Team",
    "nav.contact": "Contact",
    "nav.news": "News Channel",
    "nav.fees": "Service Charges",

    // Header
    "header.address": "123 Silom Road, Bangkok, Thailand 10500",
    "header.phone": "(+66) 094-806-9123",
    "header.consultation": "Free Consultation",
    "header.available": "Available 24/7",
    "header.email": "bamroonglaw@gmail.com",
    "header.line": "@bamroonglaw",

    // Hero
    "hero.title": "Law Office",
    "hero.subtitle": "Booming noursihment",
    "hero.description":
      "Our law firm represents clients across Thailand. Providing consultations throughout the kingdom without conditions, we have successfully recovered over $1 billion on behalf of our clients.",

    // Features
    "features.service": "Highly Personalized Service",
    "features.record": "Proven Track Record of Success",
    "features.rated": "Top Rated Trial Attorneys",

    // Services
    "services.title": "Our Practice Areas",
    "services.corporate": "Corporate Law",
    "services.litigation": "Litigation",
    "services.realestate": "Real Estate",
    "services.intellectual": "Intellectual Property",
    "services.immigration": "Immigration",
    "services.international": "International Law",

    // About
    "about.title": "About Our Firm",
    "about.description":
      "With over 20 years of experience, our firm has established itself as a leader in Thai and international law. Our multilingual team provides expert legal counsel to clients from around the world.",
    "about.button": "Learn More",

    // Team
    "team.title": "Meet Our Expert Attorneys",
    "team.description":
      "Our team of experienced lawyers is dedicated to providing personalized legal services to meet your specific needs.",

    // Testimonials
    "testimonials.title": "What Our Clients Say",

    // Call to action
    "cta.title": "Need Legal Assistance?",
    "cta.description":
      "Contact us today for a free consultation with one of our experienced attorneys.",
    "cta.button": "Contact Us Now",

    // Footer
    "footer.rights": "All Rights Reserved",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.address": "123 Silom Road, Bangkok, Thailand 10500",
    "footer.phone": "(+66) 094-806-9123",
    "footer.email": "bamroonglaw@gmail.com",
    "footer.line": "@bamroonglaw",
    "footer.copyright": "Copyright 2025 © www.bamroonglaw.com",

    // Office strengths
    "strengths.title": "Office Strengths",
    "strengths.description":
      "Our law office was established to assist those who face legal challenges by providing comprehensive legal services. We are committed to ensuring equal access to justice for all clients needing legal assistance.",

    // Services details
    "services.civil": "Civil & Criminal Cases",
    "services.civil.description":
      "Representation for all types of cases in court proceedings.",
    "services.enforcement": "Enforcement Work",
    "services.enforcement.description":
      "Property services, seizure, freezing assets, bankruptcy cases.",
    "services.contracts": "Legal Contract Examination",
    "services.contracts.description":
      "Inspection and drafting of contracts, wills, and legal documents.",
    "services.consultation": "Legal Consultation",
    "services.consultation.description":
      "Advisory services, providing solutions, and corporate consulting.",
    "services.appeals": "Appeals & Supreme Court Cases",
    "services.appeals.description":
      "Handling fraud, defamation, personal and land criminal cases.",
    "services.negotiation": "Negotiation & Debt Collection",
    "services.negotiation.description":
      "Debt negotiation, solving debtor problems, expediting outstanding debts.",

    // YouTube section
    "youtube.title": "Recent Videos",
    "youtube.subscribers": "Subscribers",
    "youtube.videos": "Videos",
    "youtube.views": "Views",
  },

  th: {
    // Navigation
    "nav.home": "หน้าแรก",
    "nav.about": "เกี่ยวกับเรา",
    "nav.services": "บริการของเรา",
    "nav.team": "ทีมงานทนายความ",
    "nav.contact": "ติดต่อเรา",
    "nav.news": "ช่องข่าวสาร",
    "nav.fees": "ค่าบริการ",

    // Header
    "header.address":
      "3/1 ซอยบ้านเหรียง 7 ถนนบ้านเหรียง หมู่ 3 ตำบลเทพกระษัตรี อำเภอถลาง จังหวัดภูเก็ต",
    "header.phone": "094-806-9123",
    "header.consultation": "ปรึกษาฟรี",
    "header.available": "เปิดให้บริการ 24/7",
    "header.email": "bamroonglaw@gmail.com",
    "header.line": "@bamroonglaw",

    // Hero
    "hero.title": "สำนักงานกฎหมาย บำรุงโภชนา",
    "hero.subtitle": "ทนายความคุณภาพ ซื่อสัตย์ให้ศีลธรรมแก่ประชาชน",

    "hero.description":
      "ปรึกษาทั่วราชอาณาจักรไม่มีเงื่อนไข สำนักงานทนายความภูเก็ต ปรึกษาง่าย รวดเร็ว ทันใจ พร้อมแก้ปัญหาให้คุณในทันที เคยเป็นที่ปรึกษากฎหมายให้กับบริษัท ห้างร้าน องค์กร ปรึกษาคดี รับคดีตั้งแต่ต้นจนจบคดีและรับทั่วราชอาณาจักร",

    // Features
    "features.service": "บริการที่เป็นส่วนตัวสูง",
    "features.record": "ประวัติความสำเร็จที่พิสูจน์แล้ว",
    "features.rated": "ทนายความที่ได้รับการจัดอันดับสูงสุด",

    // Services
    "services.title": "ขอบเขตการให้บริการ",
    "services.corporate": "กฎหมายธุรกิจ",
    "services.litigation": "การดำเนินคดี",
    "services.realestate": "อสังหาริมทรัพย์",
    "services.intellectual": "ทรัพย์สินทางปัญญา",
    "services.immigration": "การเข้าเมือง",
    "services.international": "กฎหมายระหว่างประเทศ",

    // About
    "about.title": "เกี่ยวกับสำนักงานของเรา",
    "about.description":
      "สำนักงานทนายความภูเก็ต จัดตั้งขึ้นเพื่อช่วยเหลือผู้ที่ได้รับเดือดร้อนในทางกฎหมายโดยให้บริการทางกฎหมายทุกประเภท ซึ่งมุ่งหวังให้ผู้ที่ต้องการความช่วยเหลือทางกฎหมายได้รับความเป็นธรรมอย่างเท่าเทียมกัน",
    "about.button": "เรียนรู้เพิ่มเติม",

    // Team
    "team.title": "พบทีมทนายความผู้เชี่ยวชาญของเรา",
    "team.description":
      "ทีมทนายความที่มีประสบการณ์ของเราทุ่มเทในการให้บริการทางกฎหมายที่เหมาะสมกับความต้องการเฉพาะของคุณ",

    // Testimonials
    "testimonials.title": "ลูกค้าของเราพูดอย่างไร",

    // Call to action
    "cta.title": "ต้องการความช่วยเหลือทางกฎหมาย?",
    "cta.description":
      "ติดต่อเราวันนี้เพื่อรับคำปรึกษาฟรีกับทนายความที่มีประสบการณ์ของเรา",
    "cta.button": "ติดต่อเราตอนนี้",

    // Footer
    "footer.rights": "สงวนลิขสิทธิ์",
    "footer.privacy": "นโยบายความเป็นส่วนตัว",
    "footer.terms": "เงื่อนไขการให้บริการ",
    "footer.address":
      "3/1 ซอยบ้านเหรียง 7 ถนนบ้านเหรียง หมู่ 3 ตำบลเทพกระษัตรี อำเภอถลาง จังหวัดภูเก็ต",
    "footer.phone": "094-806-9123",
    "footer.email": "bamroonglaw@gmail.com",
    "footer.line": "@bamroonglaw",
    "footer.copyright": "ลิขสิทธิ์ 2568 © www.bamroonglaw.com",

    // Office strengths
    "strengths.title": "จุดแข็งของสำนักงาน",
    "strengths.description":
      "สำนักงานทนายความภูเก็ต จัดตั้งขึ้นเพื่อช่วยเหลือผู้ที่ได้รับเดือดร้อนในทางกฎหมายโดยให้บริการทางกฎหมายทุกประเภท ซึ่งมุ่งหวังให้ผู้ที่ต้องการความช่วยเหลือทางกฎหมายได้รับความเป็นธรรมอย่างเท่าเทียมกันโดยสำนักงานทนายความ บำรุงโภชนา จัดตั้งในเขตพื้นที่จังหวัดภูเก็ต หรืออาจเรียกว่าทนายความภูเก็ต",

    // Services details
    "services.civil": "รับว่าคดีแพ่ง คดีอาญา",
    "services.civil.description":
      "เป็นทนายความรับว่าคดีทุกประเภท ดำเนินกระบวนพิจารณาคดีใดๆในศาลแทนคู่ความทั้งคดีแพ่ง คดีอาญา",
    "services.enforcement": "รับงานบังคับคดี",
    "services.enforcement.description":
      "บริการยึดทรัพย์ นำยึด อายัดหรือระงับ นำเพิ่ม ตลาด งานคดีล้มละลายอื่นๆ",
    "services.contracts": "รับตรวจสอบสัญญาทางกฎหมาย",
    "services.contracts.description":
      "บริการตรวจสอบและร่างสัญญา ให้คำปรึกษาเกี่ยวกับสัญญาต่างๆ หนังสือพินัยกรรม",
    "services.consultation": "รับปรึกษาและที่ปรึกษากฎหมาย",
    "services.consultation.description":
      "บริการให้คำปรึกษา คำแนะนำ ความเห็น แนวทางแก้ไขปัญหา รับเป็นที่ปรึกษาให้กับบริษัทเอกชน",
    "services.appeals": "รับอุทธรณ์/ฎีกา",
    "services.appeals.description":
      "คดีฉ้อโกง หมิ่นประมาท คดีอาญาส่วนตัว รวมถึงคดีอาญาที่ดิน",
    "services.negotiation": "รับเจรจา ไกล่เกลี่ย หนี้/ทวงหนี้",
    "services.negotiation.description":
      "รับเจรจาหนี้ แก้ปัญหาของลูกหนี้ ติดตาม ตาม เร่งรัด หนี้ค้างชำระ",

    // YouTube section
    "youtube.title": "วิดีโอล่าสุด",
    "youtube.subscribers": "ผู้ติดตาม",
    "youtube.videos": "วิดีโอ",
    "youtube.views": "ยอดเข้าชม",
  },

  zh: {
    // Navigation
    "nav.home": "首页",
    "nav.about": "关于我们",
    "nav.services": "我们的服务",
    "nav.team": "律师团队",
    "nav.contact": "联系方式",
    "nav.news": "新闻频道",
    "nav.fees": "服务费用",

    // Header
    "header.address":
      "泰国普吉岛3/1 Ban Hiang 7巷, Ban Hiang路, 3村, Thepkrasattri区, Thalang, 普吉府",
    "header.phone": "094-806-9123",
    "header.consultation": "免费咨询",
    "header.available": "24/7全天候服务",
    "header.email": "bamroonglaw@gmail.com",
    "header.line": "@bamroonglaw",

    // Hero
    "hero.title": "律师事务所 兴盛养育",
    "hero.subtitle": "优质律师 诚实道德服务民众",

    "hero.description":
      "全国范围内无条件咨询。普吉律师事务所，便于咨询，快速，即时，随时为您解决问题。曾为企业、商场、公司提供法律咨询。从案件开始到结束全程负责，全国范围内接案。办理工作许可证、签证、税务账户。",

    // Features
    "features.service": "高度个性化的服务",
    "features.record": "成功的proven track record证明",
    "features.rated": "评价最高的审判律师",

    // Services
    "services.title": "我们的业务领域",
    "services.corporate": "公司法",
    "services.litigation": "诉讼",
    "services.realestate": "房地产",
    "services.intellectual": "知识产权",
    "services.immigration": "移民",
    "services.international": "国际法",

    // About
    "about.title": "关于我们的律所",
    "about.description":
      "普吉律师事务所成立旨在为那些在法律上遇到困难的人提供各类法律服务，目标是让所有需要法律帮助的人都能获得平等的公正待遇。",
    "about.button": "了解更多",

    // Team
    "team.title": "认识我们的专业律师",
    "team.description":
      "我们经验丰富的律师团队致力于提供个性化的法律服务，以满足您的特定需求。",

    // Testimonials
    "testimonials.title": "客户评价",

    // Call to action
    "cta.title": "需要法律援助？",
    "cta.description": "立即联系我们，与我们资深的律师进行免费咨询。",
    "cta.button": "立即联系我们",

    // Footer
    "footer.rights": "版权所有",
    "footer.privacy": "隐私政策",
    "footer.terms": "服务条款",
    "footer.address":
      "泰国普吉岛3/1 Ban Hiang 7巷, Ban Hiang路, 3村, Thepkrasattri区, Thalang, 普吉府",
    "footer.phone": "094-806-9123",
    "footer.email": "bamroonglaw@gmail.com",
    "footer.line": "@bamroonglaw",
    "footer.copyright": "版权 2025 © www.bamroonglaw.com",

    // Office strengths
    "strengths.title": "事务所优势",
    "strengths.description":
      "普吉律师事务所成立旨在为那些在法律上遇到困难的人提供各类法律服务。我们的目标是确保所有需要法律援助的客户都能获得平等的公正待遇。",

    // Services details
    "services.civil": "民事与刑事案件",
    "services.civil.description": "代理各类案件的法庭诉讼程序。",
    "services.enforcement": "执行工作",
    "services.enforcement.description": "财产服务、查封、冻结资产、破产案件。",
    "services.contracts": "法律合同审查",
    "services.contracts.description": "合同、遗嘱和法律文件的检查和起草。",
    "services.consultation": "法律咨询",
    "services.consultation.description": "咨询服务、提供解决方案和企业咨询。",
    "services.appeals": "上诉和最高法院案件",
    "services.appeals.description": "处理欺诈、诽谤、个人和土地刑事案件。",
    "services.negotiation": "谈判和债务追收",
    "services.negotiation.description":
      "债务谈判、解决债务人问题、加快未偿债务处理。",

    // YouTube section
    "youtube.title": "最新视频",
    "youtube.subscribers": "订阅者",
    "youtube.videos": "视频",
    "youtube.views": "观看次数",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Try to get language from localStorage or use browser language, defaulting to English
  const getBrowserLanguage = (): Language => {
    const userLang = navigator.language.split("-")[0];
    if (userLang === "th") return "th";
    if (userLang === "zh") return "zh";
    return "en";
  };

  const [language, setLanguage] = useState<Language>(() => {
    const storedLanguage = localStorage.getItem("language") as Language;
    return storedLanguage || getBrowserLanguage();
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
    // Change document title based on language
    if (language === "en") {
      document.title = "Thailand Law Firm - Professional Legal Services";
    } else if (language === "th") {
      document.title =
        "สำนักงานกฎหมาย บำรุงโภชนา - บริการทางกฎหมายโดยทนายความมืออาชีพ";
    } else if (language === "zh") {
      document.title = "泰国律师事务所 - 专业法律服务";
    }
  }, [language]);

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
