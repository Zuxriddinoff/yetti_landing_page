export type Locale = "en" | "ru" | "uz";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  uz: "UZ",
};

export const translations = {
  en: {
    navbar: {
      services: "Services",
      portfolio: "Portfolio",
      process: "Process",
      contact: "Contact",
      cta: "Start a Project",
      homeAria: "YE77I TECH home",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      language: "Language",
    },
    hero: {
      badge: "Software design and engineering studio",
      title: "Digital products that feel premium from the first second.",
      description:
        "YE77I TECH designs and builds elegant software for growing companies, combining strong visual execution with stable engineering and a clean delivery process.",
      primaryCta: "Start a Project",
      secondaryCta: "View Case Studies",
      highlights: [
        "Enterprise websites",
        "Product platforms",
        "Internal systems",
        "AI-powered workflows",
      ],
      panelEyebrow: "Product Preview",
      panelTitle: "Brand, UI, and system quality in one frame.",
      panelStatus: "Online",
      scoreLabel: "Experience Score",
      scoreText:
        "Interface clarity, trust signals, and conversion flow tuned for premium-first perception.",
      confidenceLabel: "Release Confidence",
      scalabilityLabel: "Scalability",
      scalabilityValue: "Ready",
      performanceLabel: "Performance curve",
      performanceValue: "Consistent growth profile",
      uptimeLabel: "Uptime",
      stats: [
        { label: "Launch windows", value: "6-8 weeks" },
        { label: "Senior-led delivery", value: "100%" },
        { label: "Long-term support", value: "Built in" },
      ],
    },
    stats: {
      aria: "Company statistics",
      items: [
        { value: 10, suffix: "+", label: "Projects Delivered" },
        { value: 10, suffix: "+", label: "Happy Clients" },
        { value: 2, suffix: "+", label: "Years of Excellence" },
      ],
    },
    services: {
      label: "What We Do",
      title: "End-to-end software capability for ambitious teams.",
      description:
        "We combine product thinking, design discipline, and senior engineering to deliver systems that feel simple for users and reliable for teams.",
      items: [
        {
          title: "Web Development",
          description:
            "Next.js, React, TypeScript based web products designed for speed and reliability.",
          tags: ["Next.js", "React", "TypeScript"],
        },
        {
          title: "Mobile Apps",
          description:
            "Cross-platform mobile experiences with thoughtful UX and strong release quality.",
          tags: ["React Native", "iOS", "Android"],
        },
        {
          title: "Backend & APIs",
          description:
            "Scalable services, integrations, and data flows built for operational clarity.",
          tags: ["Node.js", "Python", "GraphQL"],
        },
        {
          title: "UI/UX Design",
          description:
            "Interface systems that feel refined, usable, and consistent across every touchpoint.",
          tags: ["Figma", "Design Systems", "Prototyping"],
        },
        {
          title: "Cloud & DevOps",
          description:
            "Infrastructure and delivery pipelines that keep deployments predictable and safe.",
          tags: ["AWS", "Docker", "CI/CD"],
        },
        {
          title: "AI Integration",
          description:
            "Practical intelligent features that improve workflows, automation, and decision making.",
          tags: ["OpenAI", "Automation", "AI Workflows"],
        },
      ],
    },
    process: {
      label: "How We Work",
      title: "Our Proven Process",
      description:
        "A structured delivery model that keeps strategy, design, and engineering aligned from kickoff to launch.",
      steps: [
        {
          number: "01",
          title: "Discovery",
          description:
            "We define goals, business context, and technical requirements before building.",
        },
        {
          number: "02",
          title: "Design",
          description:
            "Wireframes and interfaces are shaped around clarity, usability, and product fit.",
        },
        {
          number: "03",
          title: "Build",
          description:
            "We deliver in focused sprints with maintainable code and strong technical review.",
        },
        {
          number: "04",
          title: "Launch",
          description:
            "Release, observe, refine, and keep the product stable as adoption grows.",
        },
      ],
    },
    portfolio: {
      label: "Selected Projects",
      title: "Recent Work",
      cta: "View All Projects",
      items: [
        {
          title: "E-Commerce Platform",
          description:
            "Full-stack shopping platform with real-time inventory and a streamlined buying flow.",
          tags: ["Next.js", "Stripe", "PostgreSQL"],
        },
        {
          title: "Mobile Banking App",
          description:
            "Secure fintech experience with modern account management and trust-focused UX.",
          tags: ["React Native", "Node.js", "AWS"],
        },
        {
          title: "AI Analytics Dashboard",
          description:
            "A clean insight platform that turns complex operational data into fast decisions.",
          tags: ["Python", "OpenAI", "React"],
        },
      ],
    },
    tech: {
      label: "Technologies We Master",
    },
    testimonials: {
      label: "Client Feedback",
      title: "What Clients Say",
      description:
        "We partner closely with founders and product teams who care about quality, delivery discipline, and long-term maintainability.",
      items: [
        {
          quote:
            "YE77I TECH delivered beyond expectations. Our platform handles 100k+ users flawlessly.",
          name: "Amir K.",
          role: "CTO at TechStart",
          initials: "AK",
        },
        {
          quote:
            "The team's attention to detail and clean code saved us months of refactoring work.",
          name: "Sarah M.",
          role: "Founder at DataFlow",
          initials: "SM",
        },
        {
          quote:
            "From design to deployment in 6 weeks. Incredibly fast without compromising quality.",
          name: "James L.",
          role: "CEO at LaunchPad",
          initials: "JL",
        },
      ],
    },
    cta: {
      title: "Ready to build with a team that keeps things sharp and simple?",
      description: "Let's discuss your product, timeline, and technical direction.",
      button: "Get in Touch",
    },
    leadModal: {
      badge: "Contact request",
      title: "Let's talk about your project",
      description: "Leave your name and phone number. We will get in touch with you shortly.",
      nameLabel: "Your name",
      namePlaceholder: "Enter your name",
      phoneLabel: "Phone number",
      phonePlaceholder: "Enter your phone number",
      submit: "Send request",
      submitting: "Sending...",
      success: "Request sent successfully. We will contact you soon.",
      error: "Something went wrong. Please try again.",
      close: "Close modal",
    },
    footer: {
      tagline: "Building tomorrow's software, today.",
      servicesTitle: "Services",
      companyTitle: "Company",
      contactTitle: "Contact",
      services: [
        "Web Development",
        "Mobile Apps",
        "Backend & APIs",
        "UI/UX Design",
        "Cloud & DevOps",
        "AI Integration",
      ],
      company: ["About Us", "Portfolio", "Process", "Blog", "Careers"],
      email: "ye77itech@gmail.com",
      location: "Location: Tashkent, Uzbekistan",
      cta: "Start a Project",
      copyright: "© 2025 YE77I TECH. All rights reserved.",
      madeIn: "Made with ♥ in Tashkent",
      github: "GitHub",
      linkedin: "LinkedIn",
      telegram: "Telegram",
    },
  },
  ru: {
    navbar: {
      services: "Услуги",
      portfolio: "Портфолио",
      process: "Процесс",
      contact: "Контакты",
      cta: "Начать проект",
      homeAria: "Главная YE77I TECH",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
      language: "Язык",
    },
    hero: {
      badge: "Студия дизайна и разработки ПО",
      title: "Цифровые продукты, которые с первых секунд ощущаются премиально.",
      description:
        "YE77I TECH проектирует и разрабатывает элегантные цифровые продукты для растущих компаний, сочетая сильную визуальную подачу, стабильную инженерию и чистый процесс доставки.",
      primaryCta: "Начать проект",
      secondaryCta: "Смотреть кейсы",
      highlights: [
        "Корпоративные сайты",
        "Продуктовые платформы",
        "Внутренние системы",
        "AI-решения",
      ],
      panelEyebrow: "Превью продукта",
      panelTitle: "Бренд, UI и системное качество в одном кадре.",
      panelStatus: "Онлайн",
      scoreLabel: "Оценка опыта",
      scoreText:
        "Чистота интерфейса, сигналы доверия и сценарий конверсии настроены на премиальное восприятие.",
      confidenceLabel: "Надежность релиза",
      scalabilityLabel: "Масштабируемость",
      scalabilityValue: "Готово",
      performanceLabel: "Кривая роста",
      performanceValue: "Стабильный профиль роста",
      uptimeLabel: "Доступность",
      stats: [
        { label: "Срок запуска", value: "6-8 недель" },
        { label: "Senior-led delivery", value: "100%" },
        { label: "Долгосрочная поддержка", value: "Встроена" },
      ],
    },
    stats: {
      aria: "Статистика компании",
      items: [
        { value: 10, suffix: "+", label: "Выполненных проектов" },
        { value: 10, suffix: "+", label: "Довольных клиентов" },
        { value: 2, suffix: "+", label: "Лет опыта" },
      ],
    },
    services: {
      label: "Чем мы занимаемся",
      title: "Полный цикл разработки для амбициозных команд.",
      description:
        "Мы объединяем продуктовое мышление, дизайнерскую дисциплину и senior-инженерию, чтобы создавать системы, удобные для пользователей и надежные для команд.",
      items: [
        {
          title: "Веб-разработка",
          description:
            "Веб-продукты на Next.js, React и TypeScript, созданные для скорости и надежности.",
          tags: ["Next.js", "React", "TypeScript"],
        },
        {
          title: "Мобильные приложения",
          description:
            "Кроссплатформенные мобильные продукты с продуманным UX и высоким качеством релиза.",
          tags: ["React Native", "iOS", "Android"],
        },
        {
          title: "Бэкенд и API",
          description:
            "Масштабируемые сервисы, интеграции и потоки данных с четкой архитектурой.",
          tags: ["Node.js", "Python", "GraphQL"],
        },
        {
          title: "UI/UX Дизайн",
          description:
            "Интерфейсные системы, которые выглядят точно, удобно и цельно на каждом экране.",
          tags: ["Figma", "Design Systems", "Prototyping"],
        },
        {
          title: "Cloud и DevOps",
          description:
            "Инфраструктура и пайплайны поставки, делающие деплой предсказуемым и безопасным.",
          tags: ["AWS", "Docker", "CI/CD"],
        },
        {
          title: "Интеграция AI",
          description:
            "Практичные интеллектуальные функции для автоматизации, аналитики и улучшения процессов.",
          tags: ["OpenAI", "Automation", "AI Workflows"],
        },
      ],
    },
    process: {
      label: "Как мы работаем",
      title: "Наш проверенный процесс",
      description:
        "Структурированная модель работы, которая держит стратегию, дизайн и разработку в одном ритме от старта до запуска.",
      steps: [
        {
          number: "01",
          title: "Исследование",
          description:
            "Сначала мы определяем цели, бизнес-контекст и технические требования.",
        },
        {
          number: "02",
          title: "Дизайн",
          description:
            "Каркасы и интерфейсы строятся вокруг ясности, удобства и соответствия продукту.",
        },
        {
          number: "03",
          title: "Разработка",
          description:
            "Мы поставляем результат короткими спринтами с поддерживаемым кодом и сильным ревью.",
        },
        {
          number: "04",
          title: "Запуск",
          description:
            "Запускаем, наблюдаем, улучшаем и сохраняем стабильность по мере роста продукта.",
        },
      ],
    },
    portfolio: {
      label: "Избранные проекты",
      title: "Последние работы",
      cta: "Все проекты",
      items: [
        {
          title: "E-Commerce Платформа",
          description:
            "Полноценная торговая платформа с инвентарем в реальном времени и удобным сценарием покупки.",
          tags: ["Next.js", "Stripe", "PostgreSQL"],
        },
        {
          title: "Мобильный банкинг",
          description:
            "Безопасный fintech-продукт с современным управлением счетами и UX, вызывающим доверие.",
          tags: ["React Native", "Node.js", "AWS"],
        },
        {
          title: "AI Аналитика",
          description:
            "Чистая аналитическая платформа, которая превращает сложные данные в быстрые решения.",
          tags: ["Python", "OpenAI", "React"],
        },
      ],
    },
    tech: {
      label: "Технологии, которыми мы владеем",
    },
    testimonials: {
      label: "Отзывы клиентов",
      title: "Что говорят клиенты",
      description:
        "Мы тесно работаем с основателями и продуктовыми командами, для которых важны качество, дисциплина поставки и долгосрочная поддерживаемость.",
      items: [
        {
          quote:
            "YE77I TECH превзошли ожидания. Наша платформа без проблем выдерживает более 100 тысяч пользователей.",
          name: "Амир К.",
          role: "CTO в TechStart",
          initials: "АК",
        },
        {
          quote:
            "Внимание команды к деталям и чистый код сэкономили нам месяцы будущего рефакторинга.",
          name: "Сара М.",
          role: "Основатель DataFlow",
          initials: "СМ",
        },
        {
          quote:
            "От дизайна до деплоя за 6 недель. Очень быстро и без компромиссов по качеству.",
          name: "Джеймс Л.",
          role: "CEO LaunchPad",
          initials: "ДЛ",
        },
      ],
    },
    cta: {
      title: "Готовы работать с командой, которая держит всё чётко и просто?",
      description: "Давайте обсудим ваш продукт, сроки и техническое направление.",
      button: "Связаться",
    },
    leadModal: {
      badge: "Запрос на связь",
      title: "Давайте обсудим ваш проект",
      description: "Оставьте имя и номер телефона. Мы свяжемся с вами в ближайшее время.",
      nameLabel: "Ваше имя",
      namePlaceholder: "Введите ваше имя",
      phoneLabel: "Номер телефона",
      phonePlaceholder: "Введите номер телефона",
      submit: "Отправить заявку",
      submitting: "Отправка...",
      success: "Заявка отправлена. Мы скоро с вами свяжемся.",
      error: "Что-то пошло не так. Попробуйте ещё раз.",
      close: "Закрыть окно",
    },
    footer: {
      tagline: "Создаём программное обеспечение завтрашнего дня уже сегодня.",
      servicesTitle: "Услуги",
      companyTitle: "Компания",
      contactTitle: "Контакты",
      services: [
        "Веб-разработка",
        "Мобильные приложения",
        "Бэкенд и API",
        "UI/UX Дизайн",
        "Cloud и DevOps",
        "Интеграция AI",
      ],
      company: ["О нас", "Портфолио", "Процесс", "Блог", "Карьера"],
      email: "ye77itech@gmail.com",
      location: "Локация: Ташкент, Узбекистан",
      cta: "Начать проект",
      copyright: "© 2025 YE77I TECH. Все права защищены.",
      madeIn: "Сделано с ♥ в Ташкенте",
      github: "GitHub",
      linkedin: "LinkedIn",
      telegram: "Telegram",
    },
  },
  uz: {
    navbar: {
      services: "Xizmatlar",
      portfolio: "Portfolio",
      process: "Jarayon",
      contact: "Kontakt",
      cta: "Loyihani Boshlash",
      homeAria: "YE77I TECH bosh sahifasi",
      openMenu: "Menyuni ochish",
      closeMenu: "Menyuni yopish",
      language: "Til",
    },
    hero: {
      badge: "Biznes uchun sayt va ilovalar yaratamiz",
      title: "Mijoz ishonchini oshiradigan sayt, ilova va CRM yechimlari.",
      description:
        "YE77I TECH sizning biznesingizni chiroyli ko‘rsatadigan, ishlatishga qulay va savdo jarayonini yengillashtiradigan raqamli yechimlarni yaratadi.",
      primaryCta: "Loyihani Boshlash",
      secondaryCta: "Keyslami Ko‘rish",
      highlights: [
        "Sotuv olib keladigan saytlar",
        "Qulay mobil ilovalar",
        "Biznesni tartibga soladigan CRM lar",
        "Hisobot va nazorat panellari",
      ],
      panelEyebrow: "Biznes natijasi",
      panelTitle: "Chiroyli ko‘rinish, qulay foydalanish va ishonchli ishlash bitta yechimda.",
      panelStatus: "Onlayn",
      scoreLabel: "Ishonch darajasi",
      scoreText:
        "Qulay interfeys, aniq taklif va ishonch uyg‘otadigan ko‘rinish mijozni tezroq qaror qilishga yordam beradi.",
      confidenceLabel: "Loyihaga tayyorlik",
      scalabilityLabel: "Biznesga moslashuv",
      scalabilityValue: "Mos va tayyor",
      performanceLabel: "Biznes o‘sishi",
      performanceValue: "Barqaror ishlash va qulay boshqaruv",
      uptimeLabel: "Uptime",
      stats: [
        { label: "Ishga tushirish muddati", value: "6-8 hafta" },
        { label: "Doimiy aloqa", value: "Har hafta" },
        { label: "Qo‘llab-quvvatlash", value: "Mavjud" },
      ],
    },
    stats: {
      aria: "Kompaniya statistikasi",
      items: [
        { value: 10, suffix: "+", label: "Topshirilgan loyihalar" },
        { value: 10, suffix: "+", label: "Mamnun mijozlar" },
        { value: 2, suffix: "+", label: "Yillik tajriba" },
      ],
    },
    services: {
      label: "Nima qilamiz",
      title: "Biznesingizni kuchaytiradigan raqamli yechimlar.",
      description:
        "Biz sizga mijoz topish, xizmatni qulay ko‘rsatish va ichki jarayonlarni tartibga solishga yordam beradigan sayt va tizimlar yaratamiz.",
      items: [
        {
          title: "Korporativ saytlar",
          description:
            "Kompaniyangizni ishonchli ko‘rsatadigan, xizmatlaringizni tushunarli tanishtiradigan va murojaat olib keladigan saytlar.",
          tags: ["Ishonch", "Murojaat", "Savdo"],
        },
        {
          title: "Mobil Ilovalar",
          description:
            "Mijozga qulay, foydalanish oson va xizmatni telefonda ham tez yetkazib beradigan ilovalar.",
          tags: ["Qulaylik", "Soddalik", "Tezkorlik"],
        },
        {
          title: "CRM va ichki tizimlar",
          description:
            "Sotuv, buyurtma, mijozlar va jamoa ishini bitta joyda tartib bilan yuritishga yordam beradigan tizimlar.",
          tags: ["Nazorat", "Tartib", "Boshqaruv"],
        },
        {
          title: "Qulay dizayn",
          description:
            "Mijoz chalkashmaydigan, tez tushunadigan va bemalol foydalanadigan ko‘rinish va ekranlar.",
          tags: ["Tushunarli", "Chiroyli", "Qulay"],
        },
        {
          title: "Integratsiya va avtomatlashtirish",
          description:
            "Telegram, to‘lov, forma, hisobot va boshqa jarayonlarni o‘zaro bog‘lab, ortiqcha qo‘l mehnatini kamaytiramiz.",
          tags: ["Tejash", "Tezlik", "Qulaylik"],
        },
        {
          title: "Hisobot va analitika",
          description:
            "Rahbar uchun kerakli raqamlarni sodda ko‘rinishda chiqarib, tezroq qaror qabul qilishga yordam beramiz.",
          tags: ["Hisobot", "Tahlil", "Qaror"],
        },
      ],
    },
    process: {
      label: "Qanday ishlaymiz",
      title: "Siz uchun tushunarli va qulay jarayon.",
      description:
        "Loyihaning har bosqichi sizga aniq bo‘lishi uchun ishni sodda, tartibli va muntazam aloqa bilan olib boramiz.",
      steps: [
        {
          number: "01",
          title: "Suhbat va tushunish",
          description:
            "Avval biznesingizni, maqsadingizni va sizga qanday yechim kerakligini birga aniqlab olamiz.",
        },
        {
          number: "02",
          title: "Taklif va ko‘rinish",
          description:
            "Qanday ko‘rinishi, qanday ishlashi va mijozga qanday qulay bo‘lishini oldindan ko‘rsatamiz.",
        },
        {
          number: "03",
          title: "Yaratish",
          description:
            "Kelishilgan reja asosida sayt yoki tizimni bosqichma-bosqich tayyorlab boramiz.",
        },
        {
          number: "04",
          title: "Ishga tushirish va qo‘llash",
          description:
            "Ishga tushirgandan keyin ham natijani kuzatib, kerak bo‘lsa yaxshilashda yoningizda bo‘lamiz.",
        },
      ],
    },
    portfolio: {
      label: "Tanlangan loyihalar",
      title: "So‘nggi ishlar",
      cta: "Barcha loyihalar",
      items: [
        {
          title: "E-Commerce Platforma",
          description:
            "Onlayn savdoni tezlashtirgan, buyurtmalarni tartibga solgan va mijozga xaridni osonlashtirgan savdo sayti.",
          tags: ["Savdo", "To‘lov", "Buyurtma"],
        },
        {
          title: "Mobil Banking Ilovasi",
          description:
            "Mijozga pul boshqarishni qulaylashtirgan, xizmatdan foydalanishni soddalashtirgan mobil ilova.",
          tags: ["Qulaylik", "Ishonch", "Mobil xizmat"],
        },
        {
          title: "AI Analitika Dashboard",
          description:
            "Rahbariyat uchun asosiy ko‘rsatkichlarni bir joyga jamlab, tezroq va aniqroq qaror olishga yordam bergan panel.",
          tags: ["Hisobot", "Nazorat", "Qaror"],
        },
      ],
    },
    tech: {
      label: "Biz mukammal ishlaydigan texnologiyalar",
    },
    testimonials: {
      label: "Mijozlar fikri",
      title: "Mijozlar nima deydi",
      description:
        "Biz bilan ishlagan mijozlar odatda qulay aloqa, chiroyli natija va biznesga foydali yechimni alohida ta’kidlashadi.",
      items: [
        {
          quote:
            "Bizga aynan nima kerakligini tez tushunib olishdi va natijada mijozga yoqadigan, ishonchli sayt oldik.",
          name: "Amir K.",
          role: "Biznes egasi",
          initials: "AK",
        },
        {
          quote:
            "Jarayon boshidan oxirigacha aniq bo‘ldi. Har hafta nima bo‘layotganini bilib turdik va natijadan mamnun qoldik.",
          name: "Sarah M.",
          role: "Kompaniya asoschisi",
          initials: "SM",
        },
        {
          quote:
            "Yangi tizim ichki ishlarimizni tartibga soldi. Jamoa vaqtini tejay boshladik va mijozlar bilan ishlash ham osonlashdi.",
          name: "James L.",
          role: "Direktor",
          initials: "JL",
        },
      ],
    },
    cta: {
      title: "Biznesingiz uchun qanday yechim kerakligini birga aniqlab olaylik.",
      description: "Sayt, ilova yoki CRM kerak bo‘lsa, sizga mos va foyda beradigan variantni taklif qilamiz.",
      button: "Bog‘lanish",
    },
    leadModal: {
      badge: "Aloqa so‘rovi",
      title: "Loyihangiz haqida gaplashamiz",
      description: "Ismingiz va telefon raqamingizni qoldiring. Tez orada siz bilan bog‘lanamiz.",
      nameLabel: "Ismingiz",
      namePlaceholder: "Ismingizni kiriting",
      phoneLabel: "Telefon raqami",
      phonePlaceholder: "Telefon raqamingizni kiriting",
      submit: "So‘rov yuborish",
      submitting: "Yuborilmoqda...",
      success: "So‘rov yuborildi. Tez orada siz bilan bog‘lanamiz.",
      error: "Xatolik yuz berdi. Qayta urinib ko‘ring.",
      close: "Oynani yopish",
    },
    footer: {
      tagline: "Ertangi dasturiy ta’minotni bugundan quramiz.",
      servicesTitle: "Xizmatlar",
      companyTitle: "Kompaniya",
      contactTitle: "Kontakt",
      services: [
        "Web Dasturlash",
        "Mobil Ilovalar",
        "Backend va API",
        "UI/UX Dizayn",
        "Cloud va DevOps",
        "AI Integratsiya",
      ],
      company: ["Biz haqimizda", "Portfolio", "Jarayon", "Blog", "Karyera"],
      email: "ye77itech@gmail.com",
      location: "Manzil: Toshkent, O‘zbekiston",
      cta: "Loyihani Boshlash",
      copyright: "© 2025 YE77I TECH. Barcha huquqlar himoyalangan.",
      madeIn: "Toshkentda ♥ bilan yaratildi",
      github: "GitHub",
      linkedin: "LinkedIn",
      telegram: "Telegram",
    },
  },
} as const;

export type Translation = (typeof translations)[Locale];
