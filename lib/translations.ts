export type Language = 'en' | 'ru' | 'uz' | 'tk';

export interface Translations {
  // Navigation
  nav: {
    modules: string;
    labs: string;
    tools: string;
  };
  
  // Home page
  home: {
    title: string;
    subtitle: string;
    exploreModules: string;
    tryLabs: string;
    learningModules: string;
    labExercises: string;
    securityTools: string;
    featuredModules: string;
    handsOnLabs: string;
    essentialTools: string;
    viewAll: string;
  };
  
  // Modules page
  modules: {
    title: string;
    description: string;
    allLevels: string;
    allCategories: string;
    difficulty: string;
    category: string;
    duration: string;
    backToModules: string;
    prerequisites: string;
    learningObjectives: string;
    noModulesFound: string;
  };
  
  // Labs page
  labs: {
    title: string;
    description: string;
    allLevels: string;
    allTypes: string;
    difficulty: string;
    vulnerabilityType: string;
    backToLabs: string;
    vulnerableCode: string;
    exploitationSteps: string;
    remediation: string;
    relatedModule: string;
    noLabsFound: string;
  };
  
  // Tools page
  tools: {
    title: string;
    description: string;
    allCategories: string;
    category: string;
    freeOnly: string;
    backToTools: string;
    installationGuide: string;
    usageExamples: string;
    sourceCode: string;
    officialWebsite: string;
    githubRepository: string;
    free: string;
    paid: string;
    noToolsFound: string;
  };
  
  // Common
  common: {
    website: string;
    github: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      modules: 'Modules',
      labs: 'Labs',
      tools: 'Tools',
    },
    home: {
      title: 'Master Bug Bounty Hunting',
      subtitle: 'Learn ethical hacking through interactive courses, hands-on lab exercises, and real-world security tools. Start your journey from beginner to expert.',
      exploreModules: 'Explore Modules',
      tryLabs: 'Try Labs',
      learningModules: 'Learning Modules',
      labExercises: 'Lab Exercises',
      securityTools: 'Security Tools',
      featuredModules: 'Featured Modules',
      handsOnLabs: 'Hands-On Labs',
      essentialTools: 'Essential Tools',
      viewAll: 'View All →',
    },
    modules: {
      title: 'Learning Modules',
      description: 'Master web application security through comprehensive courses covering SQL injection, XSS, authentication bypass, and more.',
      allLevels: 'All Levels',
      allCategories: 'All Categories',
      difficulty: 'Difficulty',
      category: 'Category',
      duration: 'Duration:',
      backToModules: '← Back to Modules',
      prerequisites: 'Prerequisites',
      learningObjectives: 'Learning Objectives',
      noModulesFound: 'No modules found matching your criteria.',
    },
    labs: {
      title: 'Lab Exercises',
      description: 'Practice your skills with hands-on lab exercises featuring vulnerable code, exploitation techniques, and remediation strategies.',
      allLevels: 'All Levels',
      allTypes: 'All Types',
      difficulty: 'Difficulty',
      vulnerabilityType: 'Vulnerability Type',
      backToLabs: '← Back to Labs',
      vulnerableCode: 'Vulnerable Code',
      exploitationSteps: 'Exploitation Steps',
      remediation: 'Remediation',
      relatedModule: 'Related Module:',
      noLabsFound: 'No labs found matching your criteria.',
    },
    tools: {
      title: 'Security Tools',
      description: 'Discover essential security tools with installation guides, usage examples, and practical tips for bug bounty hunting.',
      allCategories: 'All Categories',
      category: 'Category',
      freeOnly: 'Free Only',
      backToTools: '← Back to Tools',
      installationGuide: 'Installation Guide',
      usageExamples: 'Usage Examples',
      sourceCode: 'Source Code',
      officialWebsite: 'Official Website',
      githubRepository: 'GitHub Repository',
      free: 'Free',
      paid: 'Paid',
      noToolsFound: 'No tools found matching your criteria.',
    },
    common: {
      website: 'Website',
      github: 'GitHub',
    },
  },
  ru: {
    nav: {
      modules: 'Модули',
      labs: 'Лабы',
      tools: 'Инструменты',
    },
    home: {
      title: 'Овладейте Bug Bounty Hunting',
      subtitle: 'Изучайте этичный хакинг через интерактивные курсы, практические лабораторные упражнения и реальные инструменты безопасности. Начните свой путь от новичка до эксперта.',
      exploreModules: 'Изучить модули',
      tryLabs: 'Попробовать лабы',
      learningModules: 'Учебные модули',
      labExercises: 'Лабораторные упражнения',
      securityTools: 'Инструменты безопасности',
      featuredModules: 'Избранные модули',
      handsOnLabs: 'Практические лабы',
      essentialTools: 'Основные инструменты',
      viewAll: 'Посмотреть все →',
    },
    modules: {
      title: 'Учебные модули',
      description: 'Овладейте безопасностью веб-приложений через комплексные курсы, охватывающие SQL-инъекции, XSS, обход аутентификации и многое другое.',
      allLevels: 'Все уровни',
      allCategories: 'Все категории',
      difficulty: 'Сложность',
      category: 'Категория',
      duration: 'Продолжительность:',
      backToModules: '← Назад к модулям',
      prerequisites: 'Предварительные требования',
      learningObjectives: 'Цели обучения',
      noModulesFound: 'Модули, соответствующие вашим критериям, не найдены.',
    },
    labs: {
      title: 'Лабораторные упражнения',
      description: 'Практикуйте свои навыки с практическими лабораторными упражнениями, включающими уязвимый код, техники эксплуатации и стратегии исправления.',
      allLevels: 'Все уровни',
      allTypes: 'Все типы',
      difficulty: 'Сложность',
      vulnerabilityType: 'Тип уязвимости',
      backToLabs: '← Назад к лабам',
      vulnerableCode: 'Уязвимый код',
      exploitationSteps: 'Шаги эксплуатации',
      remediation: 'Исправление',
      relatedModule: 'Связанный модуль:',
      noLabsFound: 'Лабы, соответствующие вашим критериям, не найдены.',
    },
    tools: {
      title: 'Инструменты безопасности',
      description: 'Откройте для себя основные инструменты безопасности с руководствами по установке, примерами использования и практическими советами для bug bounty hunting.',
      allCategories: 'Все категории',
      category: 'Категория',
      freeOnly: 'Только бесплатные',
      backToTools: '← Назад к инструментам',
      installationGuide: 'Руководство по установке',
      usageExamples: 'Примеры использования',
      sourceCode: 'Исходный код',
      officialWebsite: 'Официальный сайт',
      githubRepository: 'GitHub репозиторий',
      free: 'Бесплатно',
      paid: 'Платно',
      noToolsFound: 'Инструменты, соответствующие вашим критериям, не найдены.',
    },
    common: {
      website: 'Веб-сайт',
      github: 'GitHub',
    },
  },
  uz: {
    nav: {
      modules: 'Modullar',
      labs: 'Laboratoriyalar',
      tools: 'Vositalar',
    },
    home: {
      title: 'Bug Bounty Huntingni Egallab Oling',
      subtitle: 'Interaktiv kurslar, amaliy laboratoriya mashqlari va real xavfsizlik vositalari orqali etik xakerlikni o\'rganing. Boshlovchidan ekspertgacha yo\'lingizni boshlang.',
      exploreModules: 'Modullarni O\'rganish',
      tryLabs: 'Laboratoriyalarni Sinab Ko\'ring',
      learningModules: 'Ta\'lim Modullari',
      labExercises: 'Laboratoriya Mashqlari',
      securityTools: 'Xavfsizlik Vositalari',
      featuredModules: 'Tanlangan Modullar',
      handsOnLabs: 'Amaliy Laboratoriyalar',
      essentialTools: 'Muhim Vositalar',
      viewAll: 'Barchasini Ko\'rish →',
    },
    modules: {
      title: 'Ta\'lim Modullari',
      description: 'SQL in\'ektsiyasi, XSS, autentifikatsiyani aylanib o\'tish va boshqalarni qamrab olgan keng qamrovli kurslar orqali veb-ilova xavfsizligini o\'zlashtiring.',
      allLevels: 'Barcha Darajalar',
      allCategories: 'Barcha Kategoriyalar',
      difficulty: 'Qiyinlik',
      category: 'Kategoriya',
      duration: 'Davomiyligi:',
      backToModules: '← Modullarga Qaytish',
      prerequisites: 'Oldindan Talablar',
      learningObjectives: 'O\'quv Maqsadlari',
      noModulesFound: 'Mezonlaringizga mos modullar topilmadi.',
    },
    labs: {
      title: 'Laboratoriya Mashqlari',
      description: 'Zaif kod, ekspluatatsiya usullari va tuzatish strategiyalarini o\'z ichiga olgan amaliy laboratoriya mashqlari bilan ko\'nikmalaringizni mashq qiling.',
      allLevels: 'Barcha Darajalar',
      allTypes: 'Barcha Turlar',
      difficulty: 'Qiyinlik',
      vulnerabilityType: 'Zaiflik Turi',
      backToLabs: '← Laboratoriyalarga Qaytish',
      vulnerableCode: 'Zaif Kod',
      exploitationSteps: 'Ekspluatatsiya Qadamlari',
      remediation: 'Tuzatish',
      relatedModule: 'Bog\'liq Modul:',
      noLabsFound: 'Mezonlaringizga mos laboratoriyalar topilmadi.',
    },
    tools: {
      title: 'Xavfsizlik Vositalari',
      description: 'O\'rnatish qo\'llanmalari, foydalanish misollari va bug bounty hunting uchun amaliy maslahatlar bilan muhim xavfsizlik vositalarini kashf eting.',
      allCategories: 'Barcha Kategoriyalar',
      category: 'Kategoriya',
      freeOnly: 'Faqat Bepul',
      backToTools: '← Vositalarga Qaytish',
      installationGuide: 'O\'rnatish Qo\'llanmasi',
      usageExamples: 'Foydalanish Misollari',
      sourceCode: 'Manba Kodi',
      officialWebsite: 'Rasmiy Veb-sayt',
      githubRepository: 'GitHub Repozitoriyasi',
      free: 'Bepul',
      paid: 'Pullik',
      noToolsFound: 'Mezonlaringizga mos vositalar topilmadi.',
    },
    common: {
      website: 'Veb-sayt',
      github: 'GitHub',
    },
  },
  tk: {
    nav: {
      modules: 'Modullar',
      labs: 'Laboratoriýalar',
      tools: 'Gurallar',
    },
    home: {
      title: 'Bug Bounty Hunting-e Ýetişiň',
      subtitle: 'Interaktiw kurslar, amaly laboratoriýa maşklary we hakyky howpsuzlyk gurallary arkaly etiki hakerligi öwreniň. Başlangyçdan hünärmen derejesine çenli syýahatyňyzy başlaň.',
      exploreModules: 'Modullary Öwreniň',
      tryLabs: 'Laboratoriýalary Synap Görüň',
      learningModules: 'Okuw Modullary',
      labExercises: 'Laboratoriýa Maşklary',
      securityTools: 'Howpsuzlyk Gurallary',
      featuredModules: 'Saýlanan Modullar',
      handsOnLabs: 'Amaly Laboratoriýalar',
      essentialTools: 'Möhüm Gurallar',
      viewAll: 'Ählisini Görüň →',
    },
    modules: {
      title: 'Okuw Modullary',
      description: 'SQL sanjymy, XSS, autentifikasiýany aýlanyp geçmek we beýleki mowzuklary öz içine alýan giňişleýin kurslar arkaly web programma howpsuzlygyny öwreniň.',
      allLevels: 'Ähli Derejeleri',
      allCategories: 'Ähli Kategoriýalar',
      difficulty: 'Kynlyk',
      category: 'Kategoriýa',
      duration: 'Dowamlylygy:',
      backToModules: '← Modullara Dolanmak',
      prerequisites: 'Talaplary',
      learningObjectives: 'Okuw Maksatlary',
      noModulesFound: 'Kriterialaryňyza gabat gelýän modullar tapylmady.',
    },
    labs: {
      title: 'Laboratoriýa Maşklary',
      description: 'Gowşak kod, ulanyş usullary we düzediş strategiýalaryny öz içine alýan amaly laboratoriýa maşklary bilen endikleriňizi türgenleşdiriň.',
      allLevels: 'Ähli Derejeleri',
      allTypes: 'Ähli Görnüşleri',
      difficulty: 'Kynlyk',
      vulnerabilityType: 'Gowşaklyk Görnüşi',
      backToLabs: '← Laboratoriýalara Dolanmak',
      vulnerableCode: 'Gowşak Kod',
      exploitationSteps: 'Ulanyş Ädimleri',
      remediation: 'Düzediş',
      relatedModule: 'Baglanyşykly Modul:',
      noLabsFound: 'Kriterialaryňyza gabat gelýän laboratoriýalar tapylmady.',
    },
    tools: {
      title: 'Howpsuzlyk Gurallary',
      description: 'Gurnama gollanmalary, ulanyş mysallary we bug bounty hunting üçin amaly maslahatlar bilen möhüm howpsuzlyk gurallaryny açyň.',
      allCategories: 'Ähli Kategoriýalar',
      category: 'Kategoriýa',
      freeOnly: 'Diňe Mugt',
      backToTools: '← Gurallara Dolanmak',
      installationGuide: 'Gurnama Gollanmasy',
      usageExamples: 'Ulanyş Mysallary',
      sourceCode: 'Çeşme Kody',
      officialWebsite: 'Resmi Web Sahypasy',
      githubRepository: 'GitHub Ammary',
      free: 'Mugt',
      paid: 'Tölegli',
      noToolsFound: 'Kriterialaryňyza gabat gelýän gurallar tapylmady.',
    },
    common: {
      website: 'Web sahypasy',
      github: 'GitHub',
    },
  },
};

export function getTranslations(language: Language): Translations {
  return translations[language];
}