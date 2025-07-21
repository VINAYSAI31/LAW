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

// ===============================
// ENGLISH TRANSLATIONS
// ===============================
export const translations = {
  en: {
    // ===============================
    // NAVIGATION
    // ===============================
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Our Services",
    "nav.contact": "Contact",
    "nav.mission": "Our Mission",
    "nav.getInTouch": "Get in Touch",
    "nav.title": "Bamroong Law Office",

    // ===============================
    // HERO SECTION
    // ===============================
    "hero.title": "Bumrung Rungreung Law Office",
    "hero.cta": "Our Services",
    "hero.button": "Get Started",
    "hero.description1": "When you feel like there's no one to turn to…",
    "hero.description2":
      "We are here to listen without judgment and stand by your side with fairness and integrity.",

    // ===============================
    // FEATURES SECTION
    // ===============================
    "features.service": "Highly Personalized Service",
    "features.record": "Proven Track Record of Success",
    "features.rated": "Top Rated Trial Attorneys",

    // ===============================
    // ABOUT US PAGE
    // ===============================
    "about.title": "ABOUT OUR FIRM",
    "about.description":
      "With over 20 years of experience, our firm has established itself as a leader in Thai and international law. Our multilingual team provides expert legal counsel to clients from around the world.",
    "about.button": "Learn More",
    "about.button.explore": "Explore More",

    // aboutAchievements
    "about.achievement1": "Years Experience",
    "about.achievement2": "Successful Cases",
    "about.achievement3": "Legal Professionals",
    "about.achievement4": "Languages Supported",

    // aboutValues
    "about.value1.title": "INTEGRITY",
    "about.value1.description":
      "Upholding the highest ethical standards in all our legal practices",

    "about.value2.title": "EXCELLENCE",
    "about.value2.description":
      "Delivering exceptional legal services with precision and expertise",

    "about.value3.title": "RELIABILITY",
    "about.value3.description":
      "Always available when you need us most, with timely responses",

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

    "aboutus.title.one": "ABOUT ",
    "aboutus.title.two": "Our Firm",
    "aboutus.subtitle":
      "Two decades of unwavering commitment to justice, excellence, and client success",
    "aboutus.storyTitle": "Our Story of Justice",
    "aboutus.story1":
      "There was once a time in my life when I stood alone, fighting with no one who understood, no one to help, and it felt like no one truly listened. On that day, I made a promise—if I ever gained enough knowledge, I would stand by those seeking justice. ",
    "aboutus.story2":
      "I graduated in law and have taken on small and large cases, some that shook me to the core, and others that rekindled my belief that Justice still exists. For me, every case is not just 'work'—it is someone's life, and I never forget that. This law firm was founded not for power or fame—but to truly help those in distress.",

    "aboutus.story3":
      "If you're looking for someone who not only knows the law but understands your heart—I am here for you. I will listen to your problems with compassion, care, and the warmth of a trusted friend",
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
    "about.breadcrumb.home": "Home",
    "about.breadcrumb.current": "About Us",
    "about.introduction":
      "On the day you don't know who to turn to... We are the ones who listen with our hearts without judgment and stand here to help you with justice.",
    "about.coreValues.heading": "Core Values",
    "about.coreValues.intro":
      "The principles that guide every decision, every case, and every client interaction",
    "about.coreValues.value1.title": "Integrity",
    "about.coreValues.value1.description":
      "Upholding the highest ethical standards in all our legal practices.",
    "about.coreValues.value2.title": "Excellence",
    "about.coreValues.value2.description":
      "Delivering exceptional legal services with precision and expertise.",
    "about.coreValues.value3.title": "Compassion",
    "about.coreValues.value3.description":
      "Approaching every case with empathy and genuine care.",
    "about.coreValues.value4.title": "Results",
    "about.coreValues.value4.description":
      "Achieving outcomes that protect our clients' interests.",
    // --------------------------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------------------------

    //SERVICES PAGE

    "services.1.title": "Civil Cases",
    "services.1.subtitle": "Complete Legal Representation",
    "services.1.description":
      "Expert legal representation for all types of civil cases. Our experienced attorneys handle court proceedings with dedication and expertise, ensuring your rights are protected throughout the legal process.",
    "services.1.fullDescription":
      "We provide comprehensive legal representation in both civil matters, handling everything from initial consultation to final verdict. Our team has extensive experience in criminal defense, personal injury, contract disputes, and family law. We ensure that every client receives personalized attention and aggressive representation in court.",
    "services.1.features": [
      "Damage compensation lawsuits",
      "Breach of contract",
      "Inheritance and estate division",
      "Land disputes, servitudes, rights of possession",
      "Eviction and demolition cases",
      "Tort cases (e.g., car accidents, property damage)",
    ],

    "services.2.title": "Criminal Cases",
    "services.2.subtitle": "Offenses under Criminal Law",
    "services.2.description":
      "Comprehensive legal representation for clients involved in criminal offenses, ranging from theft and assault to serious crimes like homicide and sexual offenses.",
    "services.2.fullDescription":
      "Our criminal law team provides expert legal defense and prosecution services for a wide range of criminal cases. We handle everything from minor offenses to serious criminal matters including fraud, drug-related crimes, violent offenses, and more. We ensure that your rights are protected throughout the legal process and offer strategic guidance every step of the way.",
    "services.2.features": [
      "Theft, embezzlement, fraud",
      "Drug offenses",
      "Assault, homicide",
      "Defamation",
      "Child abduction, sexual assault",
      "Document forgery",
    ],

    "services.3.title": "Labor Disputes",
    "services.3.subtitle": "Employer-Employee Legal Issues",
    "services.3.description":
      "Legal support for resolving workplace conflicts, including unfair dismissals, compensation disputes, and violations of labor rights.",
    "services.3.fullDescription":
      "We specialize in handling labor disputes between employers and employees, offering expert legal assistance in cases such as unfair dismissal, wage or benefit claims, breach of employment contracts, and disputes over labor rights. Our goal is to protect your rights and resolve conflicts efficiently through negotiation or litigation.",
    "services.3.features": [
      "Unfair dismissal",
      "Compensation claims",
      "Breach of employment contract",
      "Welfare and labor rights disputes",
    ],

    "services.4.title": "Family & Juvenile  Law ",
    "services.4.subtitle": "Domestic and Family-Related Issues",
    "services.4.description":
      "Legal guidance and representation in family-related matters including divorce, child custody, support claims, and marital property disputes.",
    "services.4.fullDescription":
      "We provide compassionate and strategic legal services for individuals dealing with family law matters. Our team handles a wide range of domestic issues such as divorce proceedings, child custody and support claims, marital property division, and child legitimation. We aim to resolve disputes with sensitivity while protecting your legal rights and interests.",
    "services.4.features": [
      "Divorce",
      "Child support claims",
      "Custody disputes",
      "Marital property division",
      "Child legitimation",
    ],

    "services.5.title": "Inheritance Cases",
    "services.5.subtitle": "Property & Estate Matters",
    "services.5.description":
      "Legal services involving the estate of deceased persons, including administration, division, objections, and will-related disputes.",
    "services.5.fullDescription":
      "We offer expert legal representation in inheritance matters involving estate administration, property division, and disputes over wills. Whether it's appointing estate administrators, contesting estate management, or handling allegations of will forgery, our legal team ensures your rights are upheld throughout the process.",
    "services.5.features": [
      "Appointing estate administrators",
      "Estate division",
      "Objections to estate management",
      "Will forgery cases",
    ],

    "services.6.title": "Consumer, Business & Commercial Disputes",
    "services.6.subtitle": "Trade, Payment & Service Conflicts",
    "services.6.description":
      "Legal services for resolving disputes involving faulty goods, trade conflicts, defaulted payments, and bounced cheques in both consumer and business contexts.",
    "services.6.fullDescription":
      "Our team provides legal support in consumer protection and business-related disputes. We handle lawsuits against companies for defective goods or poor services, trade disputes, unpaid debts, and financial instrument issues such as bounced cheques. Our goal is to resolve these matters efficiently while protecting our clients' commercial and personal interests.",
    "services.6.features": [
      "Lawsuits against companies for faulty goods/services",
      "Trade disputes",
      "Defaulted payments",
      "Bounced cheque cases",
    ],
    "services.7.title": "Administrative Law",
    "services.7.subtitle": "Disputes with Government Agencies",
    "services.7.description":
      "Legal services for filing lawsuits against government bodies and challenging administrative decisions such as land expropriation.",
    "services.7.fullDescription":
      "We represent individuals and businesses in administrative law cases involving disputes with government agencies. This includes filing lawsuits against public bodies, challenging administrative orders, and protecting rights in cases such as land expropriation or regulatory overreach. Our firm ensures that all proceedings are handled with precision and in accordance with the law.",
    "services.7.features": [
      "Lawsuits against government agencies",
      "Challenging administrative orders (e.g., land expropriation)",
    ],
    "services.8.title": "Bankruptcy & Business Rehabilitation",
    "services.8.subtitle": "Insolvency, Debt Relief & Corporate Recovery",
    "services.8.description":
      "Legal services for individuals and businesses facing bankruptcy, including debt restructuring and rehabilitation planning.",
    "services.8.fullDescription":
      "We assist clients through bankruptcy proceedings and business rehabilitation processes. Our services include filing for bankruptcy, negotiating debt restructuring plans, and representing clients in rehabilitation cases. We aim to provide sustainable financial recovery strategies while ensuring compliance with legal obligations.",
    "services.8.features": [
      "Filing for bankruptcy",
      "Debt restructuring and rehabilitation negotiation",
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

    // Lawyer Profile
    "profile.section": "About Me",
    "profile.name": "BAMRUNG RUNGREUANG",
    "profile.title": "Lawyer, Lawyers Council of Thailand",
    "profile.position": "Position",
    "profile.experience":
      "With over 30 years of legal experience, I am a licensed attorney with the Lawyers Council of Thailand, offering services including legal consultation and appointed defense.",
    "profile.consulting": "Consulting - Volunteer lawyer",
    "profile.education": "Education",
    "profile.education.bachelor": "Bachelor's Degree",
    "profile.education.bachelor.detail":
      "Bachelor of Law, Sukhothai Thammathirat Open University",
    "profile.education.master": "Master's Degree",
    "profile.education.master.detail":
      "Political Science, Major in Political Communication, Krirk University",
    "profile.education.phd": "Ph.D.",
    "profile.education.phd.detail":
      "Honorary Doctorate in Political Science, Politics and Governance, LADC Institute",
    "services.heading": "OUR SERVICES",
    "services.button.explore": "Explore More",

    // Mission & Vision
    "mission.title": "Our Mission & Vision",
    "mission.missionHeading": "OUR MISSION",
    "mission.missionText": "Because justice should not belong to only a few",
    "mission.missionSubText": "We make the law truly reliable.",
    "mission.visionHeading": "Our Vision",
    "mission.visionText":
      "We do this job because we want to stand by those who have no voice.",
    "mission.button": "Explore More",

    // Get an Expert
    "getExpert.title": "Get a Legal Expert",
    "getExpert.description":
      "You are planning to establish your business in a foreign country and struggle with local laws, trying to bypass pitfalls and potential risks? We know the situation all too well.",
    "getExpert.button.contact": "Contact Now",
    "getExpert.stats.years": "Years of Business",
    "getExpert.stats.works": "Completed Works",
    "getExpert.stats.customers": "Valuable Customers",
    "getExpert.stats.team": "Team Members",

    // Mission & Vision (EN)
    "missionVision.title": "Our Mission & Vision",
    "missionVision.missionHeading": "OUR MISSION",
    "missionVision.missionText":
      "Because justice should not belong to only a few.",
    "missionVision.missionSubText": "We make the law truly reliable.",
    "missionVision.visionHeading": "Our Vision",
    "missionVision.visionText":
      "We do this job because we want to stand by those who have no voice.",
    "missionVision.button": "Explore More",
    // Mission & Vision (EN)
    "missionVision.strengthsHeading": "OUR STRENGTHS",
    "missionVision.strength1.title": "Genuine understanding",
    "missionVision.strength1.description":
      "We listen with heart, not just to find legal solutions, but to truly understand.",
    "missionVision.strength2.title": "Honesty and integrity",
    "missionVision.strength2.description":
      "We believe everyone deserves protection—whether they have a voice in society or not.",
    "missionVision.strength3.title": "Affordable and fair pricing",
    "missionVision.strength3.description":
      "We keep our services affordable, because hardship does not discriminate.",
    "missionVision.foundation":
      "The Law Office of Bamroong Rungruang was founded with a sincere mission:",
    "missionVision.foundationGoal":
      "To make the law an accessible support, not a barrier, especially for ordinary people.",
    "missionVision.value1.title": "Equal Protection",
    "missionVision.value1.description":
      "We believe everyone deserves protection—whether they have a voice in society or not.",
    "missionVision.value2.title": "Empathetic Service",
    "missionVision.value2.description":
      "We listen with heart, not just to find legal solutions, but to truly understand.",
    "missionVision.value3.title": "Accessible Pricing",
    "missionVision.value3.description":
      "We keep our services affordable, because hardship does not discriminate.",
    "missionVision.value4.title": "Free Consultations",
    "missionVision.value4.description":
      "We offer free initial consultations—to help you see your options before committing.",
    "missionVision.finalStatement":
      "Every case we take, we handle as if it were our own, because true justice starts from understanding others' pain.",
    // Contact Page (EN)
    "contact.title": "Contact Our Legal Team",
    "contact.description":
      "Get professional legal assistance. Send us your inquiry and our experienced attorneys will respond promptly.",
    "contact.form.nameLabel": "Your Name",
    "contact.form.namePlaceholder": "Enter your full name",
    "contact.form.emailLabel": "Email Address",
    "contact.form.emailPlaceholder": "your.email@example.com",
    "contact.form.phoneLabel": "Phone Number",
    "contact.form.phonePlaceholder": "+66 XX XXX XXXX",
    "contact.form.lineLabel": "LINE ID",
    "contact.form.linePlaceholder": "Your LINE ID",
    "contact.form.subjectLabel": "Subject",
    "contact.form.subjectPlaceholder": "Brief description of your legal matter",
    "contact.form.messageLabel": "Message *",
    "contact.form.messagePlaceholder":
      "Please describe your legal issue or question in detail...",
    "contact.button.send": "Send Message",
    "contact.button.sending": "Sending Message...",
    "contact.info.heading": "Get in Touch",
    "contact.info.addressLabel": "Office Address",
    "contact.info.phoneLabel": "Phone",
    "contact.info.emailLabel": "Email",
    "contact.info.hoursLabel": "Office Hours",
    "contact.info.consultationHeading": "Free Consultation",
    "contact.info.consultationText":
      "We offer free initial consultations to help you understand your legal options before making any commitments.",
    "contact.info.consultationNote":
      "No obligation • Confidential • Professional advice",
    // Contact Page (EN)
    "contact.info.addressValue": "123 Legal District, Bangkok\nThailand 10110",
    "contact.info.phoneValue": "+66 2 XXX XXXX",
    "contact.info.emailValue": "info@bamroonglaw.com",
    "contact.info.hoursValue":
      "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 1:00 PM\nSunday: Closed",
    // Contact Page (EN)
    "contact.info.lineLabel": "LINE ID",
    "contact.info.lineValue": "@bamroonglaw",
  },

  // ===============================
  // THAI TRANSLATIONS
  // ===============================
  th: {
    // ===============================
    // NAVIGATION
    // ===============================
    "nav.home": "หน้าแรก",
    "nav.about": "เกี่ยวกับเรา",
    "nav.services": "บริการของเรา",
    "nav.team": "ทีมงานทนายความ",
    "nav.contact": "ติดต่อเรา",
    "nav.news": "ช่องข่าวสาร",
    "nav.vis": "วิสัยทัศน์",
    "nav.mission": "เรื่องราวของเรา",
    "nav.getInTouch": "รับอินทัช",
    "nav.title": "บำรุง รุ่งเรือง",

    // ===============================
    // HEADER
    // ===============================
    "header.address":
      "3/1 ซอยบ้านเหรียง 7 ถนนบ้านเหรียง หมู่ 3 ตำบลเทพกระษัตรี อำเภอถลาง จังหวัดภูเก็ต",
    "header.phone": "094-806-9123",
    "header.consultation": "ปรึกษาฟรี",
    "header.available": "เปิดให้บริการ 24/7",
    "header.email": "bamroonglaw@gmail.com",
    "header.line": "@bamroonglaw",

    // ===============================
    // HERO SECTION
    // ===============================
    "hero.title": "ทนาย บำรุง รุ่งเรือง",
    "hero.cta": "บริการของเรา",
    "hero.button": "เริ่มต้น",
    "hero.description1": "เมื่อคุณรู้สึกว่าไม่มีใครให้หันไปหา...",
    "hero.description2":
      "เราพร้อมรับฟังโดยไม่ตัดสิน และยืนเคียงข้างคุณด้วยความยุติธรรมและความซื่อสัตย์",

    // ===============================
    // FEATURES SECTION
    // ===============================
    "features.service": "บริการที่เป็นส่วนตัวสูง",
    "features.record": "ประวัติความสำเร็จที่พิสูจน์แล้ว",
    "features.rated": "ทนายความที่ได้รับการจัดอันดับสูงสุด",

    // ===============================
    // ABOUT US PAGE
    // ===============================
    "about.description":
      "ด้วยประสบการณ์กว่า 20 ปี บริษัทของเราได้สร้างชื่อเสียงในฐานะผู้นำด้านกฎหมายไทยและกฎหมายระหว่างประเทศ ทีมงานที่พูดได้หลายภาษาของเราพร้อมให้คำปรึกษากฎหมายอย่างเชี่ยวชาญแก่ลูกค้าจากทั่วโลก",
    "about.button": "Learn More",
    "about.value1.title": "ความซื่อสัตย์",
    "about.value1.description":
      "ยึดมั่นในมาตรฐานจริยธรรมสูงสุดในแนวทางปฏิบัติทางกฎหมายทั้งหมดของเรา",
    "about.value2.title": "ความเป็นเลิศ",
    "about.value2.description":
      "การให้บริการทางกฎหมายที่เหนือระดับด้วยความแม่นยำและความเชี่ยวชาญ",
    "about.value3.title": "ความน่าเชื่อถือ",
    "about.value3.description":
      "พร้อมให้บริการเสมอเมื่อคุณต้องการเรามากที่สุด พร้อมตอบกลับอย่างทันท่วงที",
    "about.button.explore": "สำรวจเพิ่มเติม",
    "about.title": "เกี่ยวกับสำนักงานของเรา",
    "about.breadcrumb.home": "หน้าแรก",
    "about.breadcrumb.current": "เกี่ยวกับเรา",
    "about.introduction":
      "ในวันที่คุณไม่รู้จะหันหน้าไปหาใคร... เราคือคนที่ฟังด้วยใจไม่ตัดสินและยืนอยู่ตรงนี้เพื่อช่วยเหลือคุณด้วยความยุติธรรม",
    "about.coreValues.heading": "ค่านิยมหลัก",
    "about.coreValues.intro":
      "หลักการที่เป็นแนวทางในการตัดสินใจทุกครั้ง ทุกคดี และทุกการดูแลลูกค้า",
    "about.coreValues.value1.title": "ความซื่อสัตย์",
    "about.coreValues.value1.description":
      "ยึดมั่นในมาตรฐานจริยธรรมสูงสุดในทุกการปฏิบัติงานทางกฎหมายของเรา",
    "about.coreValues.value2.title": "ความเป็นเลิศ",
    "about.coreValues.value2.description":
      "ให้บริการทางกฎหมายที่ยอดเยี่ยมด้วยความแม่นยำและความเชี่ยวชาญ",
    "about.coreValues.value3.title": "ความเห็นอกเห็นใจ",
    "about.coreValues.value3.description":
      "ดูแลทุกคดีด้วยความเห็นอกเห็นใจและเอาใจใส่อย่างแท้จริง",
    "about.coreValues.value4.title": "ผลลัพธ์",
    "about.coreValues.value4.description":
      "บรรลุผลลัพธ์ที่ปกป้องผลประโยชน์ของลูกค้า",

    "aboutus.subtitle":
      "สองทศวรรษแห่งความมุ่งมั่นอย่างไม่ลดละเพื่อความยุติธรรม ความเป็นเลิศ และความสำเร็จของลูกค้า",
    "aboutus.storyTitle": "เรื่องราวความยุติธรรมของเรา",
    "aboutus.story1":
      "ครั้งหนึ่งในชีวิตของฉัน ฉันต้องยืนหยัดเพียงลำพัง โดยไม่มีใครเข้าใจ ไม่มีใครช่วยเหลือ และรู้สึกเหมือนไม่มีใครรับฟังอย่างแท้จริง ในวันนั้น ฉันให้สัญญาว่า หากฉันมีความรู้เพียงพอ ฉันจะยืนเคียงข้างผู้ที่แสวงหาความยุติธรรม",
    "aboutus.story2":
      "ฉันจบการศึกษาทางด้านกฎหมายและเคยรับทำคดีเล็กและคดีใหญ่ บางคดีก็สะเทือนใจฉันมาก แต่บางคดีก็ทำให้ฉันกลับมาเชื่อมั่นอีกครั้งว่าความยุติธรรมยังคงมีอยู่ สำหรับฉันแล้ว คดีทุกคดีไม่ใช่แค่ 'งาน'  แต่เป็นชีวิตของคนคนหนึ่ง และฉันไม่เคยลืมเรื่องนี้ สำนักงานกฎหมายแห่งนี้ไม่ได้ก่อตั้งขึ้นเพื่ออำนาจหรือชื่อเสียง แต่ก่อตั้งขึ้นเพื่อช่วยเหลือผู้ที่เดือดร้อนอย่างแท้จริง",
    "aboutus.story3":
      "หากคุณกำลังมองหาใครสักคนที่ไม่เพียงแต่รู้กฎหมายแต่ยังเข้าใจหัวใจของคุณอีกด้วย ฉันอยู่ที่นี่เพื่อคุณ ฉันจะรับฟังปัญหาของคุณด้วยความเห็นอกเห็นใจ ความเอาใจใส่ และความอบอุ่นจากเพื่อนที่ไว้ใจได้",
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
      "ดูแลทุกคดีด้วยความเห็นอกเห็นใจและเอาใจใส่อย่างแท้จริง",

    "aboutus.value4.title": "ผลลัพธ์",
    "aboutus.value4.description": "บรรลุผลลัพธ์ที่ปกป้องผลประโยชน์ของลูกค้า",

    // CTA
    "aboutus.ctaTitle": "พร้อมที่จะ ร่วมงานกับเราไหม?",

    "aboutus.ctaDesc":
      "ให้ทีมงานที่มีประสบการณ์ของเราช่วยแนะนำคุณผ่านความท้าทายทางกฎหมายด้วยความเชี่ยวชาญและความทุ่มเท",

    "aboutus.ctaBtn1": "รับคำปรึกษาฟรี",

    "aboutus.ctaBtn2": "ดูบริการของเรา",
    // --------------------------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------------------------

    //SERVICES PAGE

    "services.1.title": "คดีแพ่ง",
    "services.1.subtitle": "การเป็นตัวแทนทางกฎหมายอย่างครอบคลุม",
    "services.1.description":
      "ตัวแทนทางกฎหมายที่เชี่ยวชาญสำหรับคดีแพ่งทุกประเภท ทนายความที่มีประสบการณ์ของเราดำเนินการพิจารณาคดีในศาลด้วยความทุ่มเทและความเชี่ยวชาญ เพื่อให้แน่ใจว่าสิทธิของคุณได้รับการคุ้มครองตลอดกระบวนการทางกฎหมาย",
    "services.1.fullDescription":
      "เราให้บริการตัวแทนทางกฎหมายที่ครอบคลุมทั้งในคดีแพ่ง จัดการทุกอย่างตั้งแต่การปรึกษาหารือเบื้องต้นจนถึงคำตัดสินขั้นสุดท้าย ทีมงานของเรามีประสบการณ์มากมายในการป้องกันทางอาญา การบาดเจ็บส่วนบุคคล ข้อพิพาทด้านสัญญา และกฎหมายครอบครัว เราให้แน่ใจว่าลูกค้าทุกคนจะได้รับความเอาใจใส่เป็นรายบุคคลและการเป็นตัวแทนที่เข้มแข็งในศาล",
    "services.1.features": [
      "คดีเรียกร้องค่าเสียหาย",
      "ผิดสัญญา",
      "การแบ่งมรดกและทรัพย์มรดก",
      "ข้อพิพาทเรื่องที่ดิน ภาระจำยอม สิทธิในการครอบครอง",
      "คดีขับไล่และรื้อถอน",
      "คดีละเมิด (เช่น คดีรถยนต์ อุบัติเหตุ, ความเสียหายต่อทรัพย์สิน)",
    ],
    "services.2.title": "คดีอาญา",
    "services.2.subtitle": "ความผิดตามกฎหมายอาญา",
    "services.2.description":
      "ตัวแทนทางกฎหมายที่ครอบคลุมสำหรับลูกค้าที่เกี่ยวข้องกับความผิดทางอาญา ตั้งแต่การลักทรัพย์และการทำร้ายร่างกายไปจนถึงอาชญากรรมร้ายแรง เช่น การฆ่าคนตายและการล่วงละเมิดทางเพศ",
    "services.2.fullDescription":
      "ทีมกฎหมายอาญาของเราให้บริการด้านการป้องกันทางกฎหมายและการฟ้องร้องโดยผู้เชี่ยวชาญสำหรับคดีอาญาที่หลากหลาย เราจัดการทุกอย่างตั้งแต่ความผิดเล็กน้อยไปจนถึงคดีอาญาร้ายแรง รวมถึงการฉ้อโกง อาชญากรรมที่เกี่ยวข้องกับยาเสพติด ความผิดรุนแรง และอื่นๆ เราให้แน่ใจว่าสิทธิของคุณได้รับการคุ้มครองตลอดกระบวนการทางกฎหมายและให้คำแนะนำเชิงกลยุทธ์ทุกขั้นตอน",
    "services.2.features": [
      "การลักทรัพย์ การยักยอก การฉ้อโกง",
      "ความผิดเกี่ยวกับยาเสพติด",
      "การทำร้ายร่างกาย การฆ่าคนตาย",
      "การหมิ่นประมาท",
      "การลักพาตัวเด็ก การล่วงละเมิดทางเพศ",
      "เอกสาร การปลอมแปลง",
    ],
    "services.3.title": "ข้อพิพาทด้านแรงงาน",
    "services.3.subtitle": "ประเด็นทางกฎหมายระหว่างนายจ้างและลูกจ้าง",
    "services.3.description":
      "การสนับสนุนทางกฎหมายเพื่อแก้ไขข้อขัดแย้งในที่ทำงาน รวมถึงการเลิกจ้างโดยไม่เป็นธรรม ข้อโต้แย้งเรื่องค่าชดเชย และการละเมิดสิทธิแรงงาน",
    "services.3.fullDescription":
      "เราเชี่ยวชาญในการจัดการข้อขัดแย้งด้านแรงงานระหว่างนายจ้างและลูกจ้าง โดยให้ความช่วยเหลือทางกฎหมายจากผู้เชี่ยวชาญในกรณีต่างๆ เช่น การเลิกจ้างโดยไม่เป็นธรรม การเรียกร้องค่าจ้างหรือสวัสดิการ การละเมิดสัญญาจ้างงาน และข้อพิพาทเกี่ยวกับสิทธิแรงงาน เป้าหมายของเราคือการปกป้องสิทธิของคุณและแก้ไขข้อขัดแย้งอย่างมีประสิทธิภาพผ่านการเจรจาหรือการฟ้องร้อง",
    "services.3.features": [
      "การเลิกจ้างโดยไม่เป็นธรรม",
      "การเรียกร้องค่าชดเชย",
      "การละเมิดสัญญาจ้างงาน",
      "ข้อพิพาทด้านสวัสดิการและสิทธิแรงงาน",
    ],
    "services.4.title": "กฎหมายครอบครัวและเยาวชน",
    "services.4.subtitle": "ปัญหาในครอบครัวและครอบครัว",
    "services.4.description":
      "คำแนะนำทางกฎหมายและการเป็นตัวแทนในประเด็นที่เกี่ยวข้องกับครอบครัว รวมถึงการหย่าร้าง สิทธิในการดูแลบุตร การเรียกร้องค่าอุปการะเลี้ยงดูบุตร และข้อพิพาทเกี่ยวกับทรัพย์สินระหว่างสามีภรรยา",
    "services.4.fullDescription":
      "เราให้บริการทางกฎหมายที่เห็นอกเห็นใจและมีกลยุทธ์สำหรับบุคคลที่ต้องรับมือกับประเด็นทางกฎหมายครอบครัว ทีมงานของเราดูแลประเด็นภายในประเทศที่หลากหลาย เช่น กระบวนการหย่าร้าง สิทธิในการดูแลบุตรและค่าอุปการะเลี้ยงดูบุตร การแบ่งทรัพย์สินระหว่างสามีภรรยา และการรับรองบุตร เรามุ่งมั่นที่จะแก้ไขข้อพิพาทด้วยความละเอียดอ่อนในขณะที่ปกป้องสิทธิและผลประโยชน์ทางกฎหมายของคุณ",
    "services.4.features": [
      "การหย่าร้าง",
      "การเรียกร้องค่าอุปการะเลี้ยงดูบุตร",
      "ข้อพิพาทเกี่ยวกับการดูแลบุตร",
      "การแบ่งทรัพย์สินระหว่างสามีภรรยา",
      "การรับรองบุตร",
    ],

    "services.5.title": "คดีมรดก",
    "services.5.subtitle": "เรื่องทรัพย์สินและมรดก",
    "services.5.description":
      "บริการทางกฎหมายที่เกี่ยวข้องกับมรดกของผู้เสียชีวิต รวมถึงการบริหาร การแบ่งมรดก การคัดค้าน และข้อพิพาทเกี่ยวกับพินัยกรรม",
    "services.5.fullDescription":
      "เราให้บริการตัวแทนทางกฎหมายที่มีความเชี่ยวชาญในเรื่องมรดกที่เกี่ยวข้องกับการบริหารมรดก การแบ่งทรัพย์สิน และข้อพิพาทเกี่ยวกับพินัยกรรม ไม่ว่าจะเป็นการแต่งตั้งผู้ดูแลมรดก การโต้แย้งการจัดการมรดก หรือการจัดการกับข้อกล่าวหาการปลอมแปลงพินัยกรรม ทีมกฎหมายของเรารับรองว่าสิทธิของคุณจะได้รับการรักษาไว้ตลอดกระบวนการ",
    "services.5.features": [
      "การแต่งตั้งผู้ดูแลมรดก",
      "การแบ่งมรดก",
      "การคัดค้านการจัดการมรดก",
      "คดีปลอมแปลงพินัยกรรม",
    ],
    "services.6.title": "ข้อพิพาทระหว่างผู้บริโภค ธุรกิจ และการค้า",
    "services.6.subtitle": "ข้อขัดแย้งทางการค้า การชำระเงิน และบริการ",
    "services.6.description":
      "บริการทางกฎหมายเพื่อแก้ไขข้อพิพาทที่เกี่ยวข้องกับสินค้าชำรุด ข้อขัดแย้งทางการค้า การชำระเงินผิดนัด และเช็คเด้งทั้งในบริบทของผู้บริโภคและธุรกิจ",
    "services.6.fullDescription":
      "ทีมงานของเราให้การสนับสนุนทางกฎหมายในการคุ้มครองผู้บริโภคและข้อพิพาทที่เกี่ยวข้องกับธุรกิจ เราดำเนินการฟ้องร้องบริษัทต่างๆ สำหรับสินค้าชำรุดหรือบริการไม่ดี ข้อขัดแย้งทางการค้า หนี้ที่ยังไม่ได้ชำระ และปัญหาตราสารทางการเงิน เช่น เช็คเด้ง เป้าหมายของเราคือการแก้ไขปัญหาเหล่านี้อย่างมีประสิทธิภาพในขณะที่ปกป้องผลประโยชน์ทางการค้าและส่วนบุคคลของลูกค้าของเรา",
    "services.6.features": [
      "คดีฟ้องร้องบริษัทต่างๆ สำหรับสินค้า/บริการชำรุด",
      "ข้อขัดแย้งทางการค้า",
      "การชำระเงินผิดนัด",
      "กรณีเช็คเด้ง",
    ],
    "services.7.title": "กฎหมายปกครอง",
    "services.7.subtitle": "ข้อพิพาทกับหน่วยงานของรัฐ",
    "services.7.description":
      "บริการทางกฎหมายสำหรับการฟ้องร้องหน่วยงานของรัฐและท้าทายการตัดสินใจทางปกครอง เช่น การเวนคืนที่ดิน",
    "services.7.fullDescription":
      "เราเป็นตัวแทนบุคคลและธุรกิจในคดีปกครองที่เกี่ยวข้องกับข้อพิพาทกับหน่วยงานของรัฐ ซึ่งรวมถึงการฟ้องร้องหน่วยงานของรัฐ การท้าทายคำสั่งทางปกครอง และการปกป้องสิทธิในกรณีต่างๆ เช่น การเวนคืนที่ดินหรือการใช้อำนาจเกินขอบเขตของกฎระเบียบ บริษัทของเรารับประกันว่าการดำเนินการทั้งหมดได้รับการดำเนินการอย่างแม่นยำและสอดคล้องกับกฎหมาย",
    "services.7.features": [
      "คดีฟ้องร้องหน่วยงานของรัฐ",
      "การท้าทายคำสั่งทางปกครอง (เช่น การเวนคืนที่ดิน)",
    ],
    "services.8.title": "การล้มละลายและการฟื้นฟูธุรกิจ",
    "services.8.subtitle": "การล้มละลาย การบรรเทาหนี้ และการฟื้นฟูองค์กร",
    "services.8.description":
      "บริการทางกฎหมายสำหรับบุคคลและธุรกิจที่เผชิญกับการล้มละลาย รวมถึงการปรับโครงสร้างหนี้และการวางแผนการฟื้นฟู",
    "services.8.fullDescription":
      "เราให้ความช่วยเหลือลูกค้าผ่านกระบวนการล้มละลายและกระบวนการฟื้นฟูธุรกิจ บริการของเราได้แก่ การยื่นฟ้องล้มละลาย การเจรจาแผนการปรับโครงสร้างหนี้ และการเป็นตัวแทนลูกค้าในคดีฟื้นฟู เรามุ่งมั่นที่จะนำเสนอแนวทางการฟื้นฟูทางการเงินที่ยั่งยืนในขณะที่รับรองการปฏิบัติตามภาระผูกพันทางกฎหมาย",
    "services.8.features": [
      "การยื่นฟ้องล้มละลาย",
      "การปรับโครงสร้างหนี้และการเจรจาการฟื้นฟู",
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

    // Lawyer Profile
    "profile.section": "เกี่ยวกับฉัน",
    "profile.name": "บำรุง รุ่งเรือง",
    "profile.title": "ทนายความ, สภาทนายความแห่งประเทศไทย",
    "profile.position": "ตำแหน่ง",
    "profile.experience":
      "ด้วยประสบการณ์ทางกฎหมายมากกว่า 30 ปี ข้าพเจ้าเป็นทนายความที่ได้รับใบอนุญาตจากสภาทนายความแห่งประเทศไทย ให้บริการทั้งการปรึกษากฎหมายและการแต่งตั้งเป็นทนายความแก้ต่าง",
    "profile.consulting": "ที่ปรึกษา - ทนายอาสา",
    "profile.education": "การศึกษา",
    "profile.education.bachelor": "ปริญญาตรี",
    "profile.education.bachelor.detail":
      "นิติศาสตรบัณฑิต มหาวิทยาลัยสุโขทัยธรรมาธิราช",
    "profile.education.master": "ปริญญาโท",
    "profile.education.master.detail":
      "รัฐศาสตร์ สาขาการสื่อสารการเมือง มหาวิทยาลัยเกริก",
    "profile.education.phd": "ปริญญาเอกกิตติมศักดิ์",
    "profile.education.phd.detail": "รัฐศาสตร์การเมืองและการปกครอง สถาบัน LADC",
    "services.heading": "บริการของเรา",
    "services.button.explore": "สำรวจเพิ่มเติม",

    // Mission & Vision
    "mission.title": "พันธกิจและวิสัยทัศน์ของเรา",
    "mission.missionHeading": "พันธกิจของเรา",
    "mission.missionText": "เพราะความยุติธรรมไม่ควรเป็นของคนเพียงไม่กี่คน",
    "mission.missionSubText": "เราทำให้กฎหมายเป็นที่พึ่งได้อย่างแท้จริง",
    "mission.visionHeading": "วิสัยทัศน์ของเรา",
    "mission.visionText":
      "เราทำงานนี้เพราะต้องการยืนหยัดเคียงข้างผู้ที่ไม่มีเสียงในสังคม",
    "mission.button": "สำรวจเพิ่มเติม",

    // Get an Expert
    "getExpert.title": "ขอคำปรึกษาจากผู้เชี่ยวชาญด้านกฎหมาย",
    "getExpert.description":
      "คุณกำลังวางแผนจะเริ่มต้นธุรกิจในต่างประเทศและประสบปัญหากับกฎหมายท้องถิ่น ต้องการหลีกเลี่ยงความเสี่ยงและอุปสรรคใช่หรือไม่? เราเข้าใจสถานการณ์นี้เป็นอย่างดี",
    "getExpert.button.contact": "ติดต่อทันที",
    "getExpert.stats.years": "ปีแห่งการดำเนินธุรกิจ",
    "getExpert.stats.works": "ผลงานที่สำเร็จ",
    "getExpert.stats.customers": "ลูกค้าที่มีคุณค่า",
    "getExpert.stats.team": "สมาชิกในทีม",

    // Mission & Vision (TH)
    "missionVision.title": "พันธกิจและวิสัยทัศน์ของเรา",
    "missionVision.missionHeading": "พันธกิจของเรา",
    "missionVision.missionText":
      "เพราะความยุติธรรมไม่ควรเป็นของคนเพียงไม่กี่คน",
    "missionVision.missionSubText": "เราทำให้กฎหมายเป็นที่พึ่งได้อย่างแท้จริง",
    "missionVision.visionHeading": "วิสัยทัศน์ของเรา",
    "missionVision.visionText":
      "เราทำงานนี้เพราะต้องการยืนหยัดเคียงข้างผู้ที่ไม่มีเสียงในสังคม",
    "missionVision.button": "สำรวจเพิ่มเติม",
    "missionVision.strengthsHeading": "จุดแข็งของเรา",
    "missionVision.strength1.title": "ความเข้าใจอย่างแท้จริง",
    "missionVision.strength1.description":
      "เรารับฟังด้วยหัวใจ ไม่ใช่แค่เพื่อหาทางออกทางกฎหมาย แต่เพื่อเข้าใจอย่างแท้จริง",
    "missionVision.strength2.title": "ความซื่อสัตย์และความจริงใจ",
    "missionVision.strength2.description":
      "เรามีความเชื่อว่าทุกคนสมควรได้รับการคุ้มครอง ไม่ว่าจะมีเสียงในสังคมหรือไม่ก็ตาม",
    "missionVision.strength3.title": "ราคาที่เข้าถึงได้",
    "missionVision.strength3.description":
      "เราคิดค่าบริการอย่างเป็นธรรม เพราะความลำบากไม่เลือกคน",
    "missionVision.foundation":
      "สำนักงานกฎหมายบำรุง รุ่งเรือง ก่อตั้งขึ้นด้วยพันธกิจที่จริงใจ:",
    "missionVision.foundationGoal":
      "เพื่อให้กฎหมายเป็นที่พึ่งที่เข้าถึงได้ ไม่ใช่อุปสรรค โดยเฉพาะสำหรับคนธรรมดา",
    "missionVision.value1.title": "การคุ้มครองอย่างเท่าเทียม",
    "missionVision.value1.description":
      "เรามีความเชื่อว่าทุกคนสมควรได้รับการคุ้มครอง ไม่ว่าจะมีเสียงในสังคมหรือไม่ก็ตาม",
    "missionVision.value2.title": "บริการด้วยความเห็นอกเห็นใจ",
    "missionVision.value2.description":
      "เรารับฟังด้วยหัวใจ ไม่ใช่แค่เพื่อหาทางออกทางกฎหมาย แต่เพื่อเข้าใจอย่างแท้จริง",
    "missionVision.value3.title": "ราคาที่เข้าถึงได้",
    "missionVision.value3.description":
      "เราคิดค่าบริการอย่างเป็นธรรม เพราะความลำบากไม่เลือกคน",
    "missionVision.value4.title": "ปรึกษาฟรีครั้งแรก",
    "missionVision.value4.description":
      "เรายินดีให้คำปรึกษาเบื้องต้นฟรี เพื่อให้คุณเห็นทางเลือกก่อนตัดสินใจ",
    "missionVision.finalStatement":
      "ทุกคดีที่เรารับ เราดูแลเหมือนเป็นเรื่องของเราเอง เพราะความยุติธรรมที่แท้จริงเริ่มต้นจากการเข้าใจความเจ็บปวดของผู้อื่น",
    // Contact Page (TH)
    "contact.title": "ติดต่อทีมกฎหมายของเรา",
    "contact.description":
      "รับคำปรึกษาทางกฎหมายจากผู้เชี่ยวชาญ ส่งคำถามของคุณมาได้เลย ทนายความของเราจะตอบกลับอย่างรวดเร็ว",
    "contact.form.nameLabel": "ชื่อของคุณ",
    "contact.form.namePlaceholder": "กรอกชื่อ-นามสกุลของคุณ",
    "contact.form.emailLabel": "อีเมล",
    "contact.form.emailPlaceholder": "your.email@example.com",
    "contact.form.phoneLabel": "เบอร์โทรศัพท์",
    "contact.form.phonePlaceholder": "+66 XX XXX XXXX",
    "contact.form.lineLabel": "LINE ID",
    "contact.form.linePlaceholder": "LINE ID ของคุณ",
    "contact.form.subjectLabel": "หัวข้อเรื่อง",
    "contact.form.subjectPlaceholder": "อธิบายปัญหาทางกฎหมายโดยย่อ",
    "contact.form.messageLabel": "ข้อความ *",
    "contact.form.messagePlaceholder":
      "โปรดอธิบายปัญหาหรือคำถามทางกฎหมายของคุณอย่างละเอียด...",
    "contact.button.send": "ส่งข้อความ",
    "contact.button.sending": "กำลังส่งข้อความ...",
    "contact.info.heading": "ติดต่อเรา",
    "contact.info.addressLabel": "ที่อยู่สำนักงาน",
    "contact.info.phoneLabel": "โทรศัพท์",
    "contact.info.emailLabel": "อีเมล",
    "contact.info.hoursLabel": "เวลาทำการ",
    "contact.info.consultationHeading": "ปรึกษาฟรี",
    "contact.info.consultationText":
      "เรายินดีให้คำปรึกษาเบื้องต้นฟรี เพื่อให้คุณเข้าใจทางเลือกทางกฎหมายก่อนตัดสินใจใด ๆ",
    "contact.info.consultationNote":
      "ไม่มีข้อผูกมัด • เป็นความลับ • ให้คำแนะนำอย่างมืออาชีพ",
    // Contact Page (TH)
    "contact.info.addressValue": "123 เขตกฎหมาย กรุงเทพฯ\nประเทศไทย 10110",
    "contact.info.phoneValue": "+66 2 XXX XXXX",
    "contact.info.emailValue": "info@bamroonglaw.com",
    "contact.info.hoursValue":
      "จันทร์ - ศุกร์: 9:00 - 18:00 น.\nเสาร์: 9:00 - 13:00 น.\nอาทิตย์: ปิดทำการ",
    // Contact Page (TH)
    "contact.info.lineLabel": "LINE ID",
    "contact.info.lineValue": "@bamroonglaw",
  },

  // ===============================
  // CHINESE TRANSLATIONS
  // ===============================
  zh: {
    // ===============================
    // NAVIGATION
    // ===============================
    "nav.home": "首页",
    "nav.about": "关于我们",
    "nav.services": "我们的服务",
    "nav.team": "律师团队",
    "nav.contact": "联系方式",
    "nav.news": "新闻频道",
    "nav.vis": "视觉",
    "nav.mission": "我们的使命",
    "nav.getInTouch": "联系我们",
    "nav.title": "布姆伦·伦格伦",

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
    "hero.cta": "我们的服务",
    "hero.button": "立即开始",
    "hero.description1": "当你觉得无处可依时……",
    "hero.description2": "我们会无偏见地倾听，并以公正和诚信陪伴在你身边。",

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
    "about.button.explore": "探索更多",
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
    "about.title": "About Us",
    "about.breadcrumb.home": "首页",
    "about.breadcrumb.current": "关于我们",
    "about.introduction":
      "在你不知道向谁求助的日子里……我们会用心倾听，不带偏见，站在这里帮助你伸张正义。",
    "about.coreValues.heading": "核心价值观",
    "about.coreValues.intro":
      "指导我们每一次决策、每一个案件、每一次客户互动的原则",
    "about.coreValues.value1.title": "诚信",
    "about.coreValues.value1.description":
      "在我们所有法律实践中秉持最高的道德标准。",
    "about.coreValues.value2.title": "卓越",
    "about.coreValues.value2.description":
      "以精准和专业的态度提供卓越的法律服务。",
    "about.coreValues.value3.title": "同理心",
    "about.coreValues.value3.description": "以同理心和真诚关怀处理每一个案件。",
    "about.coreValues.value4.title": "成果",
    "about.coreValues.value4.description": "实现保护客户利益的成果。",
    "aboutus.title.one": "关于我们",
    "aboutus.title.two": "我们的律所",
    "aboutus.subtitle":
      "二十年来，我们始终坚定不移地致力于公正、卓越和客户成功",
    "aboutus.storyTitle": "我们的公正故事",
    "aboutus.story1":
      "我生命中曾有一段时光，我孤身一人，与人抗争，无人理解，无人帮助，感觉无人真正倾听。那一天，我许下承诺——如果我能获得足够的知识，我将与那些寻求正义的人站在一起。",
    "aboutus.story2":
      "我毕业于法律专业，接手过大大小小的案件，有些案件深深地震撼了我，有些则让我重新燃起对正义依然存在的信念。对我来说，每个案件都不仅仅是'工作'——而是关乎一个人的生命，我永远不会忘记这一点。这家律师事务所的成立不是为了权力或名望，而是为了真正帮助那些身处困境的人。",
    "aboutus.story3":
      "如果你正在寻找一位不仅懂法律，更懂你内心的人——我随时为你服务。我会用同情、关怀和值得信赖的朋友般的温暖，倾听你的烦恼。",
    "aboutus.ctaButton": "安排咨询",

    "aboutus.achievement1": "卓越成就年限",
    "aboutus.achievement2": "成功案例",
    "aboutus.achievement3": "成功率",
    "aboutus.achievement4": "支持语言",

    "aboutus.values.title": "我们的核心价值观",
    "aboutus.values.subtitle": "二十年来始终如一地致力于正义、卓越和客户成功",
    "aboutus.value1.title": "Integrity",
    "aboutus.value1.description":
      "Upholding the highest ethical standards in all our legal practices.",
    "aboutus.value2.title": "Excellence",
    "aboutus.value2.description":
      "Delivering exceptional legal services with precision and expertise.",
    "aboutus.value3.title": "Compassion",
    "aboutus.value3.description":
      "Approaching every case with empathy and genuine care.",
    "aboutus.value4.title": "Results",
    "aboutus.value4.description":
      "Achieving outcomes that protect our clients' interests.",

    "aboutus.ctaTitle": "Ready to Work With Us?",
    "aboutus.ctaDesc":
      "Let our experienced team guide you through your legal challenges with expertise and dedication.",
    "aboutus.ctaBtn1": "Get Free Consultation",
    "aboutus.ctaBtn2": "View Our Services",

    // --------------------------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------------------------

    //SERVICES PAGE
    "services.1.title": "民事案件",
    "services.1.subtitle": "全面的法律代理",
    "services.1.description":
      "我们为各类民事案件提供专业的法律代理服务。我们经验丰富的律师以敬业精神和专业技能处理诉讼程序，确保您的权利在整个法律程序中得到保护。",
    "services.1.fullDescription":
      "我们提供全面的民事法律代理服务，从初步咨询到最终判决，全程为您服务。我们的团队在刑事辩护、人身伤害、合同纠纷和家庭法方面拥有丰富的经验。我们确保每位客户都能在法庭上获得个性化的关注和积极的法律代理。",
    "services.1.features": [
      "损害赔偿诉讼",
      "违约",
      "继承和遗产分割",
      "土地纠纷、地役权、占有权",
      "驱逐和拆迁案件",
      "侵权案件（例如车祸、财产损失）",
    ],
    "services.2.title": "刑事案件",
    "services.2.subtitle": "刑法规定的犯罪",
    "services.2.description":
      "为涉及刑事犯罪的客户提供全面的法律代理服务，涵盖从盗窃、袭击到杀人、性侵犯等严重犯罪。",
    "services.2.fullDescription":
      "我们的刑法团队为各种刑事案件提供专业的法律辩护和起诉服务。我们处理从轻微犯罪到严重刑事案件的各种案件，包括欺诈、毒品犯罪、暴力犯罪等等。我们确保您的权利在整个法律程序中得到保护，并在每一步都提供战略指导。",
    "services.2.features": [
      "盗窃、挪用公款、欺诈",
      "毒品犯罪",
      "袭击、杀人",
      "诽谤",
      "绑架儿童、性侵犯",
      "文件伪造",
    ],
    "services.3.title": "劳动争议",
    "services.3.subtitle": "劳资法律问题",
    "services.3.description":
      "提供解决职场纠纷的法律支持，包括不公平解雇、赔偿纠纷和侵犯劳工权利的行为。",
    "services.3.fullDescription":
      "我们专注于处理劳资纠纷，在不公平解雇、工资或福利索赔、违反劳动合同以及劳工权利纠纷等案件中提供专业的法律援助。我们的目标是通过谈判或诉讼，有效维护您的权益并解决纠纷。",
    "services.3.features": [
      "不公平解雇",
      "赔偿索赔",
      "违反劳动合同",
      "福利和劳工权利纠纷",
    ],
    "services.4.title": "家庭与青少年法",
    "services.4.subtitle": "家庭及家庭相关事务",
    "services.4.description":
      "提供家庭相关事务的法律指导和代理服务，包括离婚、子女监护权、抚养费索赔和婚姻财产纠纷。",
    "services.4.fullDescription":
      "我们为处理家庭法律事务的个人提供富有同情心和策略性的法律服务。我们的团队处理各种家庭事务，例如离婚诉讼、子女监护权和抚养费索赔、婚姻财产分割以及子女合法化。我们致力于在保护您的合法权益的同时，以审慎的态度解决纠纷。",
    "services.4.features": [
      "离婚",
      "子女抚养费索赔",
      "监护权纠纷",
      "婚姻财产分割",
      "子女合法化",
    ],
    "services.5.title": "继承案件",
    "services.5.subtitle": "财产及遗产事宜",
    "services.5.description":
      "涉及死者遗产的法律服务，包括遗产管理、分割、异议及遗嘱相关纠纷。",
    "services.5.fullDescription":
      "我们提供专业的遗产管理、财产分割和遗嘱纠纷等继承事务的法律代理服务。无论是指定遗产管理人、对遗产管理提出异议，还是处理遗嘱伪造指控，我们的法律团队都会确保您的权利在整个过程中得到维护。",
    "services.5.features": [
      "指定遗产管理人",
      "遗产分割",
      "对遗产管理提出异议",
      "遗嘱伪造案件",
    ],
    "services.6.title": "消费者、企业及商业纠纷",
    "services.6.subtitle": "贸易、支付及服务冲突",
    "services.6.description":
      "提供法律服务，解决消费者和企业环境下涉及缺陷商品、贸易冲突、拖欠付款和空头支票的纠纷。",
    "services.6.fullDescription":
      "我们的团队为消费者保护和商业相关纠纷提供法律支持。我们处理针对公司因商品缺陷或服务质量低劣、贸易纠纷、未偿债务以及空头支票等金融工具问题而提起的诉讼。我们的目标是高效解决这些问题，同时保护客户的商业和个人利益。",
    "services.6.features": [
      "针对公司因缺陷商品/服务而提起的诉讼",
      "贸易纠纷",
      "拖欠付款",
      "空头支票案件",
    ],
    "services.7.title": "行政法",
    "services.7.subtitle": "与政府机构的纠纷",
    "services.7.description":
      "针对政府机构提起诉讼以及质疑土地征用等行政决定的法律服务。",
    "services.7.fullDescription":
      "我们代理个人和企业处理与政府机构相关的行政法律纠纷案件。这包括针对公共机构提起诉讼、质疑行政命令以及在土地征用或监管过度等情况下维护权利。我们律所确保所有程序都依法精准处理。",
    "services.7.features": [
      "针对政府机构的诉讼",
      "质疑行政命令（例如土地征用）",
    ],
    "services.8.title": "破产与企业重整",
    "services.8.subtitle": "破产、债务减免与企业复苏",
    "services.8.description":
      "为面临破产的个人和企业提供法律服务，包括债务重组和重整规划。",
    "services.8.fullDescription":
      "我们协助客户完成破产程序和企业重整流程。我们的服务包括申请破产、协商债务重组方案以及代表客户处理重整案件。我们的目标是提供可持续的财务恢复策略，同时确保客户履行法律义务。",
    "services.8.features": ["申请破产", "债务重组和重整谈判"],
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

    // Lawyer Profile
    "profile.section": "关于我",
    "profile.name": "巴姆隆 荣瑞昂",
    "profile.title": "律师，泰国律师协会",
    "profile.position": "职位",
    "profile.experience":
      "拥有30余年法律经验，我是泰国律师协会的注册律师，提供法律咨询及指定辩护等服务。",
    "profile.consulting": "咨询 - 志愿律师",
    "profile.education": "教育背景",
    "profile.education.bachelor": "学士学位",
    "profile.education.bachelor.detail": "法学学士，素可泰开放大学",
    "profile.education.master": "硕士学位",
    "profile.education.master.detail": "政治学（政治传播专业），格乐大学",
    "profile.education.phd": "博士学位（荣誉）",
    "profile.education.phd.detail": "政治学博士（政治与治理），LADC学院",
    "services.heading": "我们的服务",
    "services.button.explore": "探索更多",

    // Mission & Vision
    "mission.title": "我们的使命与愿景",
    "mission.missionHeading": "我们的使命",
    "mission.missionText": "因为正义不应只属于少数人",
    "mission.missionSubText": "我们让法律真正值得信赖。",
    "mission.visionHeading": "我们的愿景",
    "mission.visionText":
      "我们做这份工作，是因为我们想要站在那些没有发声权利的人身边。",
    "mission.button": "探索更多",

    // Get an Expert
    "getExpert.title": "联系法律专家",
    "getExpert.description":
      "您计划在海外开展业务，却因当地法律而苦恼，想要规避风险和陷阱？我们非常了解您的处境。",
    "getExpert.button.contact": "立即联系",
    "getExpert.stats.years": "年业务经验",
    "getExpert.stats.works": "完成的项目",
    "getExpert.stats.customers": "尊贵客户",
    "getExpert.stats.team": "团队成员",

    // Mission & Vision (ZH)
    "missionVision.title": "我们的使命与愿景",
    "missionVision.missionHeading": "我们的使命",
    "missionVision.missionText": "因为正义不应只属于少数人。",
    "missionVision.missionSubText": "我们让法律真正值得信赖。",
    "missionVision.visionHeading": "我们的愿景",
    "missionVision.visionText":
      "我们做这份工作，是因为我们想要站在那些没有发声权利的人身边。",
    "missionVision.button": "探索更多",
    "missionVision.strengthsHeading": "我们的优势",
    "missionVision.strength1.title": "真正的理解",
    "missionVision.strength1.description":
      "我们用心倾听，不只是为了解决法律问题，更是为了真正理解。",
    "missionVision.strength2.title": "诚信与正直",
    "missionVision.strength2.description":
      "我们相信每个人都应得到保护，无论他们在社会上是否有发声权。",
    "missionVision.strength3.title": "合理且公平的价格",
    "missionVision.strength3.description":
      "我们保持服务价格合理，因为困境不会选择人。",
    "missionVision.foundation": "Bamroong Rungruang律师事务所成立的初心：",
    "missionVision.foundationGoal":
      "让法律成为每个人都能依靠的支持，而不是障碍，尤其是对普通人。",
    "missionVision.value1.title": "平等保护",
    "missionVision.value1.description":
      "我们相信每个人都应得到保护，无论他们在社会上是否有发声权。",
    "missionVision.value2.title": "同理心服务",
    "missionVision.value2.description":
      "我们用心倾听，不只是为了解决法律问题，更是为了真正理解。",
    "missionVision.value3.title": "可负担的价格",
    "missionVision.value3.description":
      "我们保持服务价格合理，因为困境不会选择人。",
    "missionVision.value4.title": "免费咨询",
    "missionVision.value4.description":
      "我们提供首次免费咨询，让您在做决定前了解所有选项。",
    "missionVision.finalStatement":
      "每一个我们接手的案件，我们都像对待自己的事情一样用心，因为真正的正义始于理解他人的痛苦。",
    // Contact Page (ZH)
    "contact.title": "联系我们的法律团队",
    "contact.description":
      "获得专业法律协助。请发送您的咨询，我们的资深律师会尽快回复您。",
    "contact.form.nameLabel": "您的姓名",
    "contact.form.namePlaceholder": "请输入您的全名",
    "contact.form.emailLabel": "电子邮箱",
    "contact.form.emailPlaceholder": "your.email@example.com",
    "contact.form.phoneLabel": "电话号码",
    "contact.form.phonePlaceholder": "+66 XX XXX XXXX",
    "contact.form.lineLabel": "LINE ID",
    "contact.form.linePlaceholder": "您的 LINE ID",
    "contact.form.subjectLabel": "主题",
    "contact.form.subjectPlaceholder": "简要描述您的法律问题",
    "contact.form.messageLabel": "留言 *",
    "contact.form.messagePlaceholder": "请详细描述您的法律问题或疑问...",
    "contact.button.send": "发送信息",
    "contact.button.sending": "正在发送...",
    "contact.info.heading": "联系我们",
    "contact.info.addressLabel": "办公地址",
    "contact.info.phoneLabel": "电话",
    "contact.info.emailLabel": "邮箱",
    "contact.info.hoursLabel": "办公时间",
    "contact.info.consultationHeading": "免费咨询",
    "contact.info.consultationText":
      "我们提供首次免费咨询，帮助您在做出任何决定前了解法律选项。",
    "contact.info.consultationNote": "无义务 • 保密 • 专业建议",
    // Contact Page (ZH)
    "contact.info.addressValue": "泰国曼谷法律区123号\n泰国 10110",
    "contact.info.phoneValue": "+66 2 XXX XXXX",
    "contact.info.emailValue": "info@bamroonglaw.com",
    "contact.info.hoursValue":
      "周一至周五: 9:00-18:00\n周六: 9:00-13:00\n周日: 休息",
    // Contact Page (ZH)
    "contact.info.lineLabel": "LINE ID",
    "contact.info.lineValue": "@bamroonglaw",
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
