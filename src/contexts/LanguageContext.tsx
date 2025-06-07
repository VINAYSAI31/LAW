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

    // About
    "about.title": "About Our Firm",
    "about.description":
      "With over 20 years of experience, our firm has established itself as a leader in Thai and international law. Our multilingual team provides expert legal counsel to clients from around the world.",
    "about.button": "Learn More",

    // aboutAchievements
    "about.achievement1": "Years Experience",
    "about.achievement2": "Successful Cases",
    "about.achievement3": "Legal Professionals",
    "about.achievement4": "Languages Supported",

    // aboutValues
    "about.value1.title": "Integrity",
    "about.value1.description":
      "Upholding the highest ethical standards in all our legal practices",

    "about.value2.title": "Excellence",
    "about.value2.description":
      "Delivering exceptional legal services with precision and expertise",

    "about.value3.title": "Reliability",
    "about.value3.description":
      "Always available when you need us most, with timely responses",

    // --------------------------------------------------------------------------------------------------------------------

    // Team
    "team.title": "Meet Our Expert Attorneys",
    "team.description":
      "Our team of experienced lawyers is dedicated to providing personalized legal services to meet your specific needs.",
    // --------------------------------------------------------------------------------------------------------------------

    // Testimonials
    "testimonials.title": "What Our Clients Say",

    // Call to action
    "cta.title": "Need Legal Assistance?",
    "cta.description":
      "Contact us today for a free consultation with one of our experienced attorneys.",
    "cta.button": "Contact Us Now",
    // --------------------------------------------------------------------------------------------------------------------

    // Footer
    "footer.rights": "All Rights Reserved",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.address": "123 Silom Road, Bangkok, Thailand 10500",
    "footer.phone": "(+66) 094-806-9123",
    "footer.email": "bamroonglaw@gmail.com",
    "footer.line": "@bamroonglaw",
    "footer.copyright": "Copyright 2025 © www.bamroonglaw.com",
    // --------------------------------------------------------------------------------------------------------------------

    // Office strengths
    "strengths.title": "Office Strengths",
    "strengths.description":
      "Our law office was established to assist those who face legal challenges by providing comprehensive legal services. We are committed to ensuring equal access to justice for all clients needing legal assistance.",
    // --------------------------------------------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------------------------------------------

    // YouTube section
    "youtube.title": "Recent Videos",
    "youtube.subscribers": "Subscribers",
    "youtube.videos": "Videos",
    "youtube.views": "Views",
    // --------------------------------------------------------------------------------------------------------------------

    //ABOUT US PAGE

    "aboutus.title.one": "About ",
    "aboutus.title.two": "Our Firm",
    "aboutus.subtitle":
      "Two decades of unwavering commitment to justice, excellence, and client success",
    "aboutus.storyTitle": "Our Story of Justice",
    "aboutus.story1":
      " Founded in 2004 with a simple yet powerful vision: to provide exceptional legal representation that truly makes a difference in our clients' lives. What started as a small practice has grow into one of the region's most respected law firms.",
    "aboutus.story2":
      "Our journey has been marked by landmark cases, innovative legal strategies, and an unwavering commitment to justice.We've represented individuals, families, and corporations across a wide spectrum of legal matters, always with the same dedication to excellence.",
    "aboutus.story3":
      "Today, we continue to push boundaries, embrace technology, and expand our expertise while maintaining the personal touch and ethical standards that define our practice.",
    "aboutus.ctaButton": "Schedule Consultation",

    // Achievements / Stats
    "aboutus.achievement1": "Years of Excellence",
    "aboutus.achievement2": "Successful Cases",
    "aboutus.achievement3": "Success Rate",
    "aboutus.achievement4": "Languages Supported",

    // Values
    "aboutus.values.title": "Our Core Values",
    "aboutus.values.subtitle":
      "Two decades of unwavering commitment to justice, excellence, and client success",
    "aboutus.value1.title": "Integrity",
    "aboutus.value1.description":
      "Upholding the highest ethical standards in all our legal practices",

    "aboutus.value2.title": "Excellence",
    "aboutus.value2.description":
      "Delivering exceptional legal services with precision and expertise",

    "aboutus.value3.title": "Compassion",
    "aboutus.value3.description":
      "Approaching every case with empathy and genuine care",

    "aboutus.value4.title": "Results",
    "aboutus.value4.description":
      "Achieving outcomes that protect our clients' interests",

    // CTA
    "aboutus.ctaTitle": "Ready to Work With Us?",
    "aboutus.ctaDesc":
      "Let our experienced team guide you through your legal challenges with expertise and dedication.",
    "aboutus.ctaBtn1": "Get Free Consultation",
    "aboutus.ctaBtn2": "View Our Services",
    // --------------------------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------------------------

    //SERVICES PAGE

    "services.1.title": "Civil & Criminal Cases",
    "services.1.subtitle": "Complete Legal Representation",
    "services.1.description":
      "Expert legal representation for all types of civil and criminal cases. Our experienced attorneys handle court proceedings with dedication and expertise, ensuring your rights are protected throughout the legal process.",
    "services.1.fullDescription":
      "We provide comprehensive legal representation in both civil and criminal matters, handling everything from initial consultation to final verdict. Our team has extensive experience in criminal defense, personal injury, contract disputes, and family law. We ensure that every client receives personalized attention and aggressive representation in court.",
    "services.1.features": [
      "Criminal Defense",
      "Civil Litigation",
      "Personal Injury",
      "Family Law",
      "Contract Disputes",
    ],

    "services.2.title": "Enforcement Services",
    "services.2.subtitle": "Asset Recovery & Debt Collection",
    "services.2.description":
      "Professional property enforcement services including asset seizure, property freezing, bankruptcy proceedings, and comprehensive debt recovery solutions with proven track record.",
    "services.2.fullDescription":
      "Our enforcement division specializes in asset recovery, debt collection, and bankruptcy proceedings. We handle complex cases involving property seizure, asset freezing, and market liquidation. Our team works efficiently to recover debts while maintaining professional relationships and following all legal protocols.",
    "services.2.features": [
      "Asset Seizure",
      "Property Freezing",
      "Bankruptcy Cases",
      "Debt Recovery",
      "Market Liquidation",
    ],

    "services.3.title": "Contract Legal Examination",
    "services.3.subtitle": "Contract Review & Drafting",
    "services.3.description":
      "Thorough contract inspection and drafting services. Expert consultation on various contracts, wills, and legal documents to protect your interests and ensure compliance.",
    "services.3.fullDescription":
      "We provide meticulous contract review, drafting, and consultation services. Our legal experts examine every clause to identify potential risks and opportunities. Whether you need contract creation, review, or modification, we ensure your agreements are legally sound and protect your interests.",
    "services.3.features": [
      "Contract Review",
      "Document Drafting",
      "Will Preparation",
      "Legal Consultation",
      "Risk Assessment",
    ],

    "services.4.title": "Legal Consultation & Counsel",
    "services.4.subtitle": "Strategic Legal Advice",
    "services.4.description":
      "Professional consulting services providing expert advice, strategic solutions, and ongoing legal counsel for private companies and individuals across various industries.",
    "services.4.fullDescription":
      "Our consultation services offer comprehensive legal guidance for businesses and individuals. We provide strategic advice on corporate matters, regulatory compliance, risk management, and long-term legal planning. Our team serves as trusted advisors for complex legal decisions.",
    "services.4.features": [
      "Corporate Counsel",
      "Regulatory Compliance",
      "Risk Management",
      "Strategic Planning",
      "Ongoing Support",
    ],

    "services.5.title": "Appeals & Supreme Court",
    "services.5.subtitle": "High-Level Litigation",
    "services.5.description":
      "Specialized representation in appeals and Supreme Court cases including fraud, defamation, personal crimes, and land-related criminal cases with extensive courtroom experience.",
    "services.5.fullDescription":
      "Our appellate practice handles complex appeals and Supreme Court cases. We have extensive experience in fraud cases, defamation claims, personal crimes, and land disputes. Our attorneys are skilled in appellate brief writing, oral arguments, and navigating higher court procedures.",
    "services.5.features": [
      "Appeal Cases",
      "Supreme Court",
      "Fraud Defense",
      "Defamation Claims",
      "Land Disputes",
    ],

    "services.6.title": "Negotiation & Debt Collection",
    "services.6.subtitle": "Resolution & Recovery",
    "services.6.description":
      "Professional debt negotiation and collection services. Comprehensive solutions for creditor-debtor disputes and outstanding debt recovery with strategic mediation approaches.",
    "services.6.fullDescription":
      "We specialize in debt negotiation, mediation, and collection services. Our team works to resolve creditor-debtor disputes through negotiation and alternative dispute resolution. We focus on achieving favorable outcomes while maintaining professional relationships and following ethical practices.",
    "services.6.features": [
      "Debt Negotiation",
      "Mediation Services",
      "Collection Strategies",
      "Dispute Resolution",
      "Payment Planning",
    ],
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

    "services.title.one": "Our",
    "services.title.two": "services",
    "services.subtitle":
      "Comprehensive legal solutions tailored to your unique needs with expertise and dedication",
    "services.areas": " Specialized Legal Areas",
    "services.cta.title": "Need Expert Legal Assistance?",
    "services.cta.desc":
      "Our experienced legal team is ready to provide professional consultation and expert advice tailored to your specific needs. Contact us today for a comprehensive legal strategy.",
    "services.cta.btn": "Schedule Free Consultation",

    "services.feature": "Key Features",
    "services.btn1": "Get Free Consultation",
    "services.btn2": " Back to Services",
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

    // About
    "about.title": "เกี่ยวกับสำนักงานของเรา",
    "about.description":
      "สำนักงานทนายความภูเก็ต จัดตั้งขึ้นเพื่อช่วยเหลือผู้ที่ได้รับเดือดร้อนในทางกฎหมายโดยให้บริการทางกฎหมายทุกประเภท ซึ่งมุ่งหวังให้ผู้ที่ต้องการความช่วยเหลือทางกฎหมายได้รับความเป็นธรรมอย่างเท่าเทียมกัน",
    "about.button": "เรียนรู้เพิ่มเติม",
    // Achievements
    "about.achievement1": "ประสบการณ์หลายปี",
    "about.achievement2": "กรณีที่ประสบความสำเร็จ",
    "about.achievement3": "ผู้เชี่ยวชาญด้านกฎหมาย",
    "about.achievement4": "ภาษาที่รองรับ",

    // Values
    "about.value1.title": "ความซื่อสัตย์",
    "about.value1.description":
      "ยึดมั่นในมาตรฐานจริยธรรมสูงสุดในแนวทางปฏิบัติทางกฎหมายทั้งหมดของเรา",

    "about.value2.title": "ความเป็นเลิศ",
    "about.value2.description":
      "การให้บริการทางกฎหมายที่เหนือระดับด้วยความแม่นยำและความเชี่ยวชาญ",

    "about.value3.title": "ความน่าเชื่อถือ",
    "about.value3.description":
      "พร้อมให้บริการเสมอเมื่อคุณต้องการเรามากที่สุด พร้อมตอบกลับอย่างทันท่วงที",

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

    // YouTube section
    "youtube.title": "วิดีโอล่าสุด",
    "youtube.subscribers": "ผู้ติดตาม",
    "youtube.videos": "วิดีโอ",
    "youtube.views": "ยอดเข้าชม",
    // --------------------------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------------------------

    //ABOUT US PAGE
    "aboutus.title.one": "เกี่ยวกับ ",
    "aboutus.title.two": "บริษัทของเรา",
    "aboutus.subtitle":
      "สองทศวรรษแห่งความมุ่งมั่นอย่างไม่ลดละเพื่อความยุติธรรม ความเป็นเลิศ และความสำเร็จของลูกค้า",
    "aboutus.storyTitle": "เรื่องราวความยุติธรรมของเรา",
    "aboutus.story1":
      "ก่อตั้งขึ้นในปี 2547 ด้วยวิสัยทัศน์ที่เรียบง่ายแต่ทรงพลัง: เพื่อให้บริการด้านกฎหมายที่โดดเด่นซึ่งสร้างความแตกต่างอย่างแท้จริงในชีวิตของลูกค้าของเรา สิ่งที่เริ่มต้นจากสำนักงานกฎหมายขนาดเล็กได้เติบโตจนกลายเป็นสำนักงานกฎหมายที่ได้รับความเคารพมากที่สุดแห่งหนึ่งในภูมิภาค",
    "aboutus.story2":
      "การเดินทางของเราเต็มไปด้วยคดีสำคัญ กลยุทธ์ทางกฎหมายที่สร้างสรรค์ และความมุ่งมั่นอย่างไม่ลดละเพื่อความยุติธรรม เรามอบบริการให้กับบุคคล ครอบครัว และองค์กรต่างๆ ในประเด็นทางกฎหมายที่หลากหลาย โดยทุ่มเทเพื่อความเป็นเลิศเสมอมา",
    "aboutus.story3":
      "ปัจจุบัน เรายังคงขยายขอบเขต ใช้เทคโนโลยี และขยายความเชี่ยวชาญของเราต่อไป ในขณะที่ยังคงรักษาความเป็นส่วนตัวและมาตรฐานทางจริยธรรมที่กำหนดแนวทางปฏิบัติของเรา",
    "aboutus.ctaButton": "กำหนดเวลาการให้คำปรึกษา",

    "aboutus.achievement1": "ปีแห่งความเป็นเลิศ",
    "aboutus.achievement2": "กรณีที่ประสบความสำเร็จ",
    "aboutus.achievement3": "อัตราความสำเร็จ",
    "aboutus.achievement4": "ภาษาที่รองรับ",

    "aboutus.values.title": "ค่านิยมหลักของเรา",
    "aboutus.values.subtitle":
      "สองทศวรรษแห่งความมุ่งมั่นอย่างไม่ลดละเพื่อความยุติธรรม ความเป็นเลิศ และความสำเร็จของลูกค้า",
    "aboutus.value1.title": "ความซื่อสัตย์",
    "aboutus.value1.description":
      "การยึดมั่นในมาตรฐานจริยธรรมสูงสุดในแนวทางปฏิบัติทางกฎหมายทั้งหมดของเรา",

    "aboutus.value2.title": "ความเป็นเลิศ",
    "aboutus.value2.description":
      "การมอบบริการทางกฎหมายที่ยอดเยี่ยมด้วยความแม่นยำและความเชี่ยวชาญ",

    "aboutus.value3.title": "ความเห็นอกเห็นใจ",
    "aboutus.value3.description":
      "ดำเนินการทุกกรณีด้วยความเห็นอกเห็นใจและเอาใจใส่อย่างแท้จริง",

    "aboutus.value4.title": "ผลลัพธ์",
    "aboutus.value4.description":
      "การบรรลุผลลัพธ์ที่ปกป้องผลประโยชน์ของลูกค้าของเรา",

    // CTA
    "aboutus.ctaTitle": "พร้อมที่จะ ร่วมงานกับเราไหม?",

    "aboutus.ctaDesc":
      "ให้ทีมงานที่มีประสบการณ์ของเราช่วยแนะนำคุณผ่านความท้าทายทางกฎหมายด้วยความเชี่ยวชาญและความทุ่มเท",

    "aboutus.ctaBtn1": "รับคำปรึกษาฟรี",

    "aboutus.ctaBtn2": "ดูบริการของเรา",
    // --------------------------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------------------------
    //SERVICES PAGE
    "services.1.title": "คดีแพ่งและอาญา",
    "services.1.subtitle": "การเป็นตัวแทนทางกฎหมายอย่างครอบคลุม",
    "services.1.description":
      "ตัวแทนทางกฎหมายที่เชี่ยวชาญสำหรับคดีแพ่งและอาญาประเภทต่างๆ ทนายความที่มีประสบการณ์ของเราดำเนินการพิจารณาคดีในศาลด้วยความทุ่มเทและความเชี่ยวชาญ เพื่อให้แน่ใจว่าสิทธิของคุณได้รับการคุ้มครองตลอดกระบวนการทางกฎหมาย",
    "services.1.fullDescription":
      "เราให้บริการตัวแทนทางกฎหมายอย่างครอบคลุมทั้งคดีแพ่งและอาญา จัดการทุกอย่างตั้งแต่การปรึกษาหารือเบื้องต้นจนถึงคำตัดสินขั้นสุดท้าย ทีมงานของเรามีประสบการณ์มากมายในการป้องกันคดีอาญา การบาดเจ็บส่วนบุคคล ข้อพิพาทด้านสัญญา และกฎหมายครอบครัว เราให้แน่ใจว่าลูกค้าทุกคนจะได้รับความเอาใจใส่เป็นรายบุคคลและการเป็นตัวแทนที่เข้มแข็งในศาล",
    "services.1.features": [
      "การป้องกันคดีอาญา",
      "การฟ้องร้องคดีแพ่ง",
      "การบาดเจ็บส่วนบุคคล",
      "กฎหมายครอบครัว",
      "ข้อพิพาทด้านสัญญา",
    ],
    "services.2.title": "บริการบังคับใช้กฎหมาย",
    "services.2.subtitle": "การกู้คืนทรัพย์สินและการเรียกเก็บหนี้",
    "services.2.description":
      "บริการบังคับใช้กฎหมายทรัพย์สินระดับมืออาชีพ รวมถึงการยึดทรัพย์สิน การอายัดทรัพย์สิน การดำเนินคดีล้มละลาย และโซลูชันการเรียกเก็บหนี้ที่ครอบคลุมพร้อมประวัติที่พิสูจน์ได้",
    "services.2.fullDescription":
      "แผนกการบังคับใช้กฎหมายของเรามีความเชี่ยวชาญด้านการเรียกเก็บทรัพย์สิน การเรียกเก็บหนี้ และการดำเนินคดีล้มละลาย เราดูแลคดีที่ซับซ้อนที่เกี่ยวข้องกับการยึดทรัพย์สิน การอายัดทรัพย์สิน และการชำระบัญชีในตลาด ทีมงานของเราทำงานอย่างมีประสิทธิภาพในการเรียกเก็บหนี้ในขณะที่รักษาความสัมพันธ์ในเชิงวิชาชีพและปฏิบัติตามพิธีสารทางกฎหมายทั้งหมด",
    "services.2.features": [
      "การยึดทรัพย์สิน",
      "การอายัดทรัพย์สิน",
      "คดีล้มละลาย",
      "การกู้คืนหนี้",
      "การชำระบัญชีในตลาด",
    ],
    "services.3.title": "การตรวจสอบสัญญาทางกฎหมาย",
    "services.3.subtitle": "การตรวจสอบและร่างสัญญา",
    "services.3.description":
      "บริการตรวจสอบและร่างสัญญาอย่างละเอียดถี่ถ้วน ให้คำปรึกษากับผู้เชี่ยวชาญเกี่ยวกับสัญญา พินัยกรรม และเอกสารทางกฎหมายต่างๆ เพื่อปกป้องผลประโยชน์ของคุณและรับรองการปฏิบัติตาม",
    "services.3.fullDescription":
      "เราให้บริการตรวจสอบ ร่าง และให้คำปรึกษาสัญญาอย่างละเอียด ผู้เชี่ยวชาญทางกฎหมายของเราตรวจสอบทุกเงื่อนไขเพื่อระบุความเสี่ยงและโอกาสที่อาจเกิดขึ้น ไม่ว่าคุณจะต้องการจัดทำ ตรวจสอบ หรือแก้ไขสัญญา เราก็จะทำให้สัญญาของคุณถูกต้องตามกฎหมายและปกป้องผลประโยชน์ของคุณ",
    "services.3.features": [
      "การตรวจสอบสัญญา",
      "การร่างเอกสาร",
      "การเตรียมพินัยกรรม",
      "การให้คำปรึกษากฎหมาย",
      "การประเมินความเสี่ยง",
    ],
    "services.4.title": "การให้คำปรึกษาและคำแนะนำทางกฎหมาย",
    "services.4.subtitle": "คำแนะนำทางกฎหมายเชิงกลยุทธ์",
    "services.4.description":
      "บริการให้คำปรึกษาโดยผู้เชี่ยวชาญที่ให้คำแนะนำจากผู้เชี่ยวชาญ โซลูชันเชิงกลยุทธ์ และคำแนะนำทางกฎหมายอย่างต่อเนื่องสำหรับบริษัทเอกชนและบุคคลในอุตสาหกรรมต่างๆ",
    "services.4.fullDescription":
      "บริการให้คำปรึกษาของเรานำเสนอคำแนะนำทางกฎหมายที่ครอบคลุมสำหรับธุรกิจและบุคคล เราให้คำแนะนำเชิงกลยุทธ์เกี่ยวกับเรื่องขององค์กร การปฏิบัติตามกฎระเบียบ การจัดการความเสี่ยง และการวางแผนทางกฎหมายระยะยาว ทีมงานของเราทำหน้าที่เป็นที่ปรึกษาที่เชื่อถือได้สำหรับการตัดสินใจทางกฎหมายที่ซับซ้อน",
    "services.4.features": [
      "ที่ปรึกษาองค์กร",
      "การปฏิบัติตามกฎระเบียบ",
      "การจัดการความเสี่ยง",
      "การวางแผนเชิงกลยุทธ์",
      "การสนับสนุนอย่างต่อเนื่อง",
    ],

    "services.5.title": "การอุทธรณ์และศาลฎีกา",
    "services.5.subtitle": "การดำเนินคดีระดับสูง",
    "services.5.description":
      "การเป็นตัวแทนเฉพาะทางในคดีอุทธรณ์และคดีศาลฎีกา รวมถึงการฉ้อโกง การหมิ่นประมาท อาชญากรรมส่วนบุคคล และคดีอาญาที่เกี่ยวข้องกับที่ดิน โดยมีประสบการณ์ในศาลสูง",
    "services.5.fullDescription":
      "ฝ่ายอุทธรณ์ของเรารับพิจารณาคดีอุทธรณ์ที่ซับซ้อนและคดีศาลฎีกา เรามีประสบการณ์มากมายในคดีฉ้อโกง การเรียกร้องค่าเสียหายจากการหมิ่นประมาท อาชญากรรมส่วนบุคคล และข้อพิพาทเรื่องที่ดิน ทนายความของเรามีทักษะในการเขียนคำร้องอุทธรณ์ การโต้แย้งด้วยวาจา และการดำเนินการตามขั้นตอนของศาลชั้นสูง",
    "services.5.features": [
      "คดีอุทธรณ์",
      "ศาลฎีกา",
      "การป้องกันการฉ้อโกง",
      "การเรียกร้องค่าเสียหายจากการหมิ่นประมาท",
      "ข้อพิพาทเรื่องที่ดิน",
    ],

    "services.6.title": "การเจรจาและการจัดเก็บหนี้",
    "services.6.subtitle": "การแก้ไขปัญหาและการกู้คืนหนี้",
    "services.6.description":
      "บริการการเจรจาและการจัดเก็บหนี้ระดับมืออาชีพ โซลูชันที่ครอบคลุมสำหรับข้อพิพาทระหว่างเจ้าหนี้และลูกหนี้และการเรียกเก็บหนี้ค้างชำระด้วยแนวทางการไกล่เกลี่ยเชิงกลยุทธ์",
    "services.6.fullDescription":
      "เราเชี่ยวชาญในการเจรจาหนี้ การไกล่เกลี่ย และบริการการจัดเก็บหนี้ ทีมงานของเราทำงานเพื่อแก้ไขข้อพิพาทระหว่างเจ้าหนี้และลูกหนี้ผ่านการเจรจาและการระงับข้อพิพาททางเลือก เราเน้นที่การบรรลุผลลัพธ์ที่ดีในขณะที่รักษาความสัมพันธ์ในเชิงวิชาชีพและปฏิบัติตามหลักปฏิบัติทางจริยธรรม",
    "services.6.features": [
      "การเจรจาหนี้",
      "บริการการไกล่เกลี่ย",
      "กลยุทธ์การจัดเก็บหนี้",
      "การแก้ไขข้อพิพาท",
      "การวางแผนการชำระเงิน",
    ],
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
    "services.title.one": "ของเรา",
    "services.title.two": "บริการ",
    "services.subtitle":
      "โซลูชันทางกฎหมายที่ครอบคลุมซึ่งเหมาะกับความต้องการเฉพาะของคุณด้วยความเชี่ยวชาญและความทุ่มเท",
    "services.areas": " พื้นที่กฎหมายเฉพาะ",
    "services.cta.title":
      "ต้องการความช่วยเหลือทางกฎหมายจากผู้เชี่ยวชาญหรือไม่?",
    "services.cta.desc":
      "ทีมกฎหมายที่มีประสบการณ์ของเรายินดีให้คำปรึกษาอย่างมืออาชีพและคำแนะนำจากผู้เชี่ยวชาญที่เหมาะกับความต้องการเฉพาะของคุณ ติดต่อเราได้วันนี้เพื่อกลยุทธ์ทางกฎหมายที่ครอบคลุม",
    "services.cta.btn": "กำหนดเวลาปรึกษาฟรี",
    "services.feature": "คุณสมบัติหลัก",
    "services.btn1": "รับคำปรึกษาฟรี",
    "services.btn2": " กลับไปที่บริการ",
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
    // Achievements
    "about.achievement1": "多年经验",
    "about.achievement2": "成功案例",
    "about.achievement3": "法律专业人士",
    "about.achievement4": "支持语言",

    // Values
    "about.value1.title": "诚信",
    "about.value1.description": "在我们所有的法律实践中秉持最高的道德标准",

    "about.value2.title": "卓越",
    "about.value2.description": "以精准和专业的态度提供卓越的法律服务",

    "about.value3.title": "可靠",
    "about.value3.description":
      "在您最需要我们的时候，我们随时待命，并及时响应",

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

    // --------------------------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------------------------

    //ABOUT US PAGE
    "aboutus.title.one": "关于我们",
    "aboutus.title.two": "我们的律所",
    "aboutus.subtitle":
      "二十年来，我们始终坚定不移地致力于公正、卓越和客户成功",
    "aboutus.storyTitle": "我们的公正故事",
    "aboutus.story1":
      "本律所成立于2004年，秉持着一个简单而强大的愿景：提供卓越的法律代理服务，真正改变客户的生活。我们最初只是一家小型律所，如今已发展成为本地区最受尊敬的律所之一。",
    "aboutus.story2":
      "我们的发展历程充满了里程碑式的案例、创新的法律策略以及对公正的坚定承诺。我们代理过个人、家庭和公司，涉及广泛的法律事务，始终秉持着对卓越的追求。",
    "aboutus.story3":
      "如今，我们不断突破界限，拥抱科技，拓展专业知识，同时保持我们执业特有的个人风格和道德标准。",
    "aboutus.ctaButton": "安排咨询",

    "aboutus.achievement1": "卓越成就年限",
    "aboutus.achievement2": "成功案例",
    "aboutus.achievement3": "成功率",
    "aboutus.achievement4": "支持语言",

    "aboutus.values.title": "我们的核心价值观",
    "aboutus.values.subtitle": "二十年来始终如一地致力于正义、卓越和客户成功",
    "aboutus.value1.title": "诚信",
    "aboutus.value1.description": "在我们所有的法律实践中秉持最高的道德标准",

    "aboutus.value2.title": "卓越",
    "aboutus.value2.description": "以精准和专业的态度提供卓越的法律服务",

    "aboutus.value3.title": "同理心",
    "aboutus.value3.description": "以同理心和真诚关怀处理每一个案件",

    "aboutus.value4.title": "成果",
    "aboutus.value4.description": "实现保护客户利益的成果",

    "aboutus.ctaTitle": "准备好与我们合作了吗？",
    "aboutus.ctaDesc":
      "让我们经验丰富的团队以专业知识和敬业精神指导您应对法律挑战。",
    "aboutus.ctaBtn1": "获取免费咨询",
    "aboutus.ctaBtn2": "查看我们的服务",

    // --------------------------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------------------------

    //SERVICES PAGE
    "services.1.title": "民事及刑事案件",
    "services.1.subtitle": "全面的法律代理",
    "services.1.description":
      "我们为各类民事和刑事案件提供专业的法律代理服务。我们经验丰富的律师以敬业精神和专业技能处理诉讼程序，确保您的权利在整个法律程序中得到保护。",
    "services.1.fullDescription":
      "我们提供全面的民事和刑事法律代理服务，从初步咨询到最终判决，全程为您服务。我们的团队在刑事辩护、人身伤害、合同纠纷和家庭法方面拥有丰富的经验。我们确保每位客户都能在法庭上获得个性化的关注和积极的法律代理。",
    "services.1.features": [
      "刑事辩护",
      "民事诉讼",
      "人身伤害",
      "家庭法",
      "合同纠纷",
    ],
    "services.2.title": "执行服务",
    "services.2.subtitle": "资产追回与债务催收",
    "services.2.description":
      "专业的财产执行服务，包括资产扣押、财产冻结、破产程序以及拥有良好业绩记录的全面债务追回解决方案。",
    "services.2.fullDescription":
      "我们的执行部门专注于资产追回、债务催收和破产程序。我们处理涉及财产扣押、资产冻结和市场清算的复杂案件。我们的团队高效地追回债务，同时保持专业的关系并遵守所有法律协议。",
    "services.2.features": [
      "资产扣押",
      "财产冻结",
      "破产案件",
      "债务追回",
      "市场清算",
    ],
    "services.3.title": "合同法律审查",
    "services.3.subtitle": "合同审查与起草",
    "services.3.description":
      "全面的合同审查与起草服务。针对各种合同、遗嘱和法律文件提供专家咨询，以保护您的利益并确保合规。",
    "services.3.fullDescription":
      "我们提供细致的合同审查、起草和咨询服务。我们的法律专家会仔细审查每一项条款，以识别潜在的风险和机遇。无论您需要创建、审查还是修改合同，我们都确保您的协议合法合理，并保护您的利益。",
    "services.3.features": [
      "合同审查",
      "文件起草",
      "遗嘱准备",
      "法律咨询",
      "风险评估",
    ],
    "services.4.title": "法律咨询与法律顾问",
    "services.4.subtitle": "战略法律咨询",
    "services.4.description":
      "专业咨询服务，为各行各业的私营企业和个人提供专家建议、战略解决方案和持续法律顾问服务。",
    "services.4.fullDescription":
      "我们的咨询服务为企业和个人提供全面的法律指导。我们就公司事务、监管合规、风险管理和长期法律规划提供战略建议。我们的团队是复杂法律决策的值得信赖的顾问。",
    "services.4.features": [
      "企业法律顾问",
      "监管合规",
      "风险管理",
      "战略规划",
      "持续支持",
    ],

    "services.5.title": "上诉及最高法院",
    "services.5.subtitle": "高级别诉讼",
    "services.5.description":
      "专业代理上诉及最高法院案件，包括欺诈、诽谤、人身犯罪和土地相关刑事案件，并拥有丰富的法庭经验。",
    "services.5.fullDescription":
      "我们的上诉业务处理复杂的上诉及最高法院案件。我们在欺诈案件、诽谤索赔、人身犯罪和土地纠纷方面拥有丰富的经验。我们的律师擅长撰写上诉书状、进行口头辩论以及应对高等法院程序。",
    "services.5.features": [
      "上诉案件",
      "最高法院",
      "欺诈辩护",
      "诽谤索赔",
      "土地纠纷",
    ],

    "services.6.title": "谈判与债务催收",
    "services.6.subtitle": "解决与追偿",
    "services.6.description":
      "专业的债务谈判与催收服务。通过战略调解方法，为债权人-债务人纠纷和未偿债务追偿提供全面的解决方案。",
    "services.6.fullDescription":
      "我们专注于债务谈判、调解和催收服务。我们的团队致力于通过谈判和替代性争议解决方式解决债权人-债务人纠纷。我们致力于在维护专业关系和遵守道德规范的同时，取得有利的结果。",
    "services.6.features": [
      "债务谈判",
      "调解服务",
      "催收策略",
      "争议解决",
      "付款计划",
    ],

    "services.title.one": "我们的服务",
    "services.title.two": "服务",
    "services.subtitle":
      "我们以专业知识和奉献精神，根据您的独特需求提供全面的法律解决方案",
    "services.areas": "专业法律领域",
    "services.cta.title": "需要专业的法律援助吗？",
    "services.cta.desc":
      "我们经验丰富的法律团队随时准备根据您的具体需求提供专业的咨询和专家建议。立即联系我们，获取全面的法律策略。",
    "services.cta.btn": "预约免费咨询",
    "services.feature": "主要特点",
    "services.btn1": "获取免费咨询",
    "services.btn2": "返回服务",
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

  const t = (key: string): string | string[] => {
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
