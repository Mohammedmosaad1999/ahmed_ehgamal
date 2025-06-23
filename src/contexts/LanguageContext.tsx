import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.business-analysis': 'Business Analysis',
    'nav.achievements': 'Achievements',
    'nav.contact': 'Contact',
    
    // Home Page
    'home.title': 'Ahmed El-Gamal',
    'home.subtitle': 'Business Analyst & Product Owner',
    'home.description': 'Helping businesses turn complex needs into intelligent systems. With 120+ projects, 80+ satisfied clients, 30 industry domains, and 40+ launched products, I lead from analysis to delivery with clarity and agility.',
    'home.cta': 'Explore My Projects',
    'home.stats.projects': 'Projects Delivered',
    'home.stats.clients': 'Satisfied Clients',
    'home.stats.industries': 'Industries',
    'home.stats.products': 'Products Launched',
    
    // About Page
    'about.title': 'About Me',
    'about.subtitle': 'Passionate About Digital Innovation',
    'about.description1': "I'm Ahmed El-Gamal, a Business Analyst & Product Owner with a BSc in Computer Science and Artificial Intelligence from Helwan University. I specialize in translating business goals into actionable technical plans, ensuring every product delivered meets user needs and strategic KPIs.",
    'about.description2': 'With extensive experience across multiple industries, I bridge the gap between business requirements and technical implementation, leading teams to deliver scalable digital products that drive real business value.',
    'about.education': 'Education',
    'about.education.desc': 'BSc in Computer Science and Artificial Intelligence from Helwan University',
    'about.specialization': 'Specialization',
    'about.specialization.desc': 'Translating business goals into actionable technical plans',
    'about.collaboration': 'Collaboration',
    'about.collaboration.desc': 'Working with cross-functional teams to deliver exceptional results',
    'about.innovation': 'Innovation',
    'about.innovation.desc': 'Ensuring every product meets user needs and strategic KPIs',
    
    // Experience Page
    'experience.title': 'Professional Experience',
    'experience.company': 'Cyparta',
    'experience.role': 'Business Analyst & Product Owner',
    'experience.duration': 'March 2024 – Present',
    'experience.contributions': 'Key Contributions',
    'experience.resp1': 'Define business requirements and user stories',
    'experience.resp2': 'Prioritize product backlog and plan sprints',
    'experience.resp3': 'Collaborate with cross-functional teams',
    'experience.resp4': 'Align features with client objectives',
    'experience.resp5': 'Maintain detailed documentation for stakeholders',
    'experience.impact': 'Current Impact',
    'experience.impact.desc': 'Leading product development initiatives that have streamlined business processes and improved client satisfaction. Actively managing multiple product backlogs while ensuring alignment with strategic business objectives and maintaining high-quality deliverables.',
    
    // Projects Page
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Transforming business challenges into scalable digital solutions across multiple industries',
    
    // Skills Page
    'skills.title': 'Technical & Strategic Skills',
    'skills.technical': 'Technical Expertise',
    'skills.soft': 'Core Competencies',
    'skills.proficiency': 'Proficiency Overview',
    
    // Business Analysis Page
    'ba.title': 'Business Analysis',
    'ba.subtitle': 'Transforming requirements into working systems through strategic analysis and agile product design.',
    'ba.services': 'Core Services',
    'ba.highlights': 'Case Highlights',
    'ba.process': 'My Analysis Process',
    
    // Achievements Page
    'achievements.title': 'Professional Achievements',
    'achievements.subtitle': 'Measurable impact across industries, delivering value through strategic analysis and product excellence',
    'achievements.milestones': 'Key Milestones',
    'achievements.recognition': 'Impact & Recognition',
    
    // Contact Page
    'contact.title': "Let's Connect",
    'contact.subtitle': "Ready to transform your business ideas into reality? Let's discuss how we can work together.",
    'contact.info': 'Get in Touch',
    'contact.form': 'Send a Message',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.whatsapp': 'Chat with Me on WhatsApp',
    'contact.cta.title': 'Ready to Start Your Next Project?',
    'contact.cta.desc': 'Whether you need business analysis, product strategy, or end-to-end project management, I\'m here to help turn your vision into reality.',
    
    // Footer
    'footer.rights': '© 2024 Ahmed El-Gamal – All rights reserved.',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'نبذة عني',
    'nav.experience': 'الخبرة',
    'nav.projects': 'المشاريع',
    'nav.skills': 'المهارات',
    'nav.business-analysis': 'تحليل الأعمال',
    'nav.achievements': 'الإنجازات',
    'nav.contact': 'التواصل',
    
    // Home Page
    'home.title': 'أحمد الجمل',
    'home.subtitle': 'محلل أعمال ومالك منتج',
    'home.description': 'أساعد الشركات في تحويل الاحتياجات المعقدة إلى أنظمة ذكية. مع أكثر من 120 مشروع، و80+ عميل راضٍ، و30 مجال صناعي، و40+ منتج مُطلق، أقود من التحليل إلى التسليم بوضوح ومرونة.',
    'home.cta': 'استكشف مشاريعي',
    'home.stats.projects': 'مشروع مُنجز',
    'home.stats.clients': 'عميل راضٍ',
    'home.stats.industries': 'مجال صناعي',
    'home.stats.products': 'منتج مُطلق',
    
    // About Page
    'about.title': 'نبذة عني',
    'about.subtitle': 'شغوف بالابتكار الرقمي',
    'about.description1': 'أنا أحمد الجمال، محلل أعمال ومالك منتج حاصل على بكالوريوس علوم الحاسوب والذكاء الاصطناعي من جامعة حلوان. أتخصص في ترجمة أهداف الأعمال إلى خطط تقنية قابلة للتنفيذ، مما يضمن أن كل منتج يتم تسليمه يلبي احتياجات المستخدمين ومؤشرات الأداء الاستراتيجية.',
    'about.description2': 'مع خبرة واسعة عبر صناعات متعددة، أربط بين متطلبات الأعمال والتنفيذ التقني، وأقود الفرق لتقديم منتجات رقمية قابلة للتوسع تحقق قيمة تجارية حقيقية.',
    'about.education': 'التعليم',
    'about.education.desc': 'بكالوريوس علوم الحاسوب والذكاء الاصطناعي من جامعة حلوان',
    'about.specialization': 'التخصص',
    'about.specialization.desc': 'ترجمة أهداف الأعمال إلى خطط تقنية قابلة للتنفيذ',
    'about.collaboration': 'التعاون',
    'about.collaboration.desc': 'العمل مع فرق متعددة التخصصات لتحقيق نتائج استثنائية',
    'about.innovation': 'الابتكار',
    'about.innovation.desc': 'ضمان أن كل منتج يلبي احتياجات المستخدمين ومؤشرات الأداء الاستراتيجية',
    
    // Experience Page
    'experience.title': 'الخبرة المهنية',
    'experience.company': 'سايبارتا',
    'experience.role': 'محلل أعمال ومالك منتج',
    'experience.duration': 'مارس 2024 – حتى الآن',
    'experience.contributions': 'المساهمات الرئيسية',
    'experience.resp1': 'تحديد متطلبات الأعمال وقصص المستخدمين',
    'experience.resp2': 'ترتيب أولويات المنتج وتخطيط السبرنت',
    'experience.resp3': 'التعاون مع الفرق متعددة التخصصات',
    'experience.resp4': 'مواءمة الميزات مع أهداف العملاء',
    'experience.resp5': 'الحفاظ على التوثيق المفصل لأصحاب المصلحة',
    'experience.impact': 'التأثير الحالي',
    'experience.impact.desc': 'قيادة مبادرات تطوير المنتجات التي عملت على تبسيط العمليات التجارية وتحسين رضا العملاء. إدارة نشطة لعدة قوائم انتظار للمنتجات مع ضمان التوافق مع الأهداف التجارية الاستراتيجية والحفاظ على جودة عالية للمخرجات.',
    
    // Projects Page
    'projects.title': 'المشاريع المميزة',
    'projects.subtitle': 'تحويل تحديات الأعمال إلى حلول رقمية قابلة للتوسع عبر صناعات متعددة',
    
    // Skills Page
    'skills.title': 'المهارات التقنية والاستراتيجية',
    'skills.technical': 'الخبرة التقنية',
    'skills.soft': 'الكفاءات الأساسية',
    'skills.proficiency': 'نظرة عامة على الكفاءة',
    
    // Business Analysis Page
    'ba.title': 'تحليل الأعمال',
    'ba.subtitle': 'تحويل المتطلبات إلى أنظمة عمل من خلال التحليل الاستراتيجي وتصميم المنتجات المرن.',
    'ba.services': 'الخدمات الأساسية',
    'ba.highlights': 'أبرز الحالات',
    'ba.process': 'عملية التحليل الخاصة بي',
    
    // Achievements Page
    'achievements.title': 'الإنجازات المهنية',
    'achievements.subtitle': 'تأثير قابل للقياس عبر الصناعات، تقديم القيمة من خلال التحليل الاستراتيجي وتميز المنتجات',
    'achievements.milestones': 'المعالم الرئيسية',
    'achievements.recognition': 'التأثير والاعتراف',
    
    // Contact Page
    'contact.title': 'لنتواصل',
    'contact.subtitle': 'مستعد لتحويل أفكار عملك إلى واقع؟ دعنا نناقش كيف يمكننا العمل معًا.',
    'contact.info': 'تواصل معي',
    'contact.form': 'إرسال رسالة',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    'contact.whatsapp': 'تحدث معي على واتساب',
    'contact.cta.title': 'مستعد لبدء مشروعك القادم؟',
    'contact.cta.desc': 'سواء كنت تحتاج إلى تحليل الأعمال أو استراتيجية المنتج أو إدارة المشاريع من البداية إلى النهاية، أنا هنا لمساعدتك في تحويل رؤيتك إلى واقع.',
    
    // Footer
    'footer.rights': '© 2024 أحمد الجمال – جميع الحقوق محفوظة.',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'font-arabic' : 'font-inter'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};