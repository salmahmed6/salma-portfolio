export const content = {
  en: {
    meta: {
      langLabel: 'العربية',
      dir: 'ltr',
    },
    nav: {
      about: 'About',
      experience: 'Experience',
      journey: 'Journey',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    statusBar: {
      prompt: 'salma@portfolio:~$',
      status: 'open_to_work: true',
      locationLabel: 'Cairo, EG',
    },
    hero: {
      eyebrow: 'Available for new opportunities',
      name: 'Salma Ahmed',
      role: 'Software Engineer Backend Developer',
      tagline:
        "From a blank repo to a production-ready product — I design the architecture, build the backend, connect the pieces, and make it ready to scale.",
      terminal: [
        { cmd: 'whoami', out: 'Salma Ahmed — Software Engineer Backend Developer' },
        { cmd: 'currently', out: 'Building Ordex, a multi-tenant commerce OS' },
        { cmd: 'based_in', out: 'Cairo, Egypt' },
      ],
      ctaPrimary: 'View projects',
      ctaSecondary: 'Get in touch',
    },
    about: {
      eyebrow: 'About',
      heading: "I build the parts of a SaaS product that aren't allowed to fail.",
      paragraphs: [
        "Two years in, I've owned systems most engineers only touch pieces of — tenant isolation, subscription billing, payment webhooks, role-based access. I like the parts of backend work where a mistake is expensive: money, auth, data integrity.",
        "A project I'm especially proud of is Ordex, a multi-tenant commerce platform I built mostly on my own. I worked on everything from the database and backend architecture to the frontend, admin panel, payments, and deployment. It taught me that good architecture isn't just about choosing the right technology — it's about thinking ahead about what can go wrong. What if a payment webhook comes twice? What if a subscription expires at the wrong time? What happens when a service goes down?",
        "Outside product work, I'm currently deepening my ML fundamentals through an AWS-sponsored AI & ML Scholars program.",
      ],
    },
    experience: {
      eyebrow: 'Experience',
      heading: 'Where the systems got real',
      items: [
        {
          company: 'Share Adawli',
          role: 'Software Developer',
          period: 'Feb 2026 — Aug 2026',
          location: 'Jeddah, Saudi Arabi · Remote',
          points: [
            'Architected the backend for Zumra, an automated candidate-matching platform, using NestJS.',
            'Resolved critical vulnerabilities in the HyperPay payment gateway — transaction security, 3DS2, webhook reliability.',
            'Kept mission-critical services stable and available 24/7 in a high-traffic production environment.',
          ],
        },
        {
          company: 'Runsoft',
          role: 'Backend Developer',
          period: 'Feb 2025 — Dec 2025',
          location: 'Cairo, Egypt',
          points: [
            'Built and maintained the Laravel/MySQL backend for Bay To Stay, a rental platform live on iOS and Android.',
            'Designed JWT/OAuth2 auth flows that cut unauthorized access attempts by 35%.',
            'Integrated PayTabs payments and tuned Eloquent ORM queries for performance.',
          ],
        },
        {
          company: 'Orange Digital Center',
          role: 'Software Engineer Trainee',
          period: 'Nov 2024 — Jan 2025',
          location: 'Cairo, Egypt',
          points: [
            'Built a contact-form service, a finance tracker, and a task-management app — Node.js, Express, MongoDB, JWT.',
            'First hands-on experience with Agile, SDLC, and CI/CD inside a team.',
          ],
        },
      ],
    },
    journey: {
      eyebrow: 'Currently diving into',
      heading: "Still learning, and I don't plan to stop",
      sections: [
        {
          label: null,
          paragraphs: [
            "I used to think that learning technology meant reaching a point where you finally \"know enough.\"",
            "I don't think that anymore.",
            "Once you open the door to technology, you realize there is no finish line. Every answer leads to another question, every project opens another door, and somehow you end up wanting to understand what is happening underneath everything you build.",
            "That is where I am today.",
          ],
        },
        {
          label: 'The foundation',
          paragraphs: [
            "I started my journey as a developer, building APIs, backends, websites, authentication systems, databases, and real products. I worked with Node.js, TypeScript, NestJS, Express, Laravel, React, Next.js, PostgreSQL, MongoDB, Docker, CI/CD, Redis and many other tools along the way.",
            "But for me, the most important part was never the list of technologies.",
            "It was the process of building something, breaking it, debugging it, asking \"why\", and then trying again.",
            "I have spent countless hours fixing bugs that looked impossible at first — authentication problems, database issues, deployment errors, Redis and caching problems, CI/CD pipelines, API failures, production bugs, payment flows and many other things that taught me more than any tutorial could.",
          ],
        },
        {
          label: 'Learning through failure',
          paragraphs: [
            "I have also learned through interviews — including the ones I didn't pass.",
            "There were interviews where I prepared deeply, studied new concepts, practiced technical questions, and still didn't get the opportunity. At first, failure felt like a closed door.",
            "Now I see it differently. Every rejection showed me something I needed to improve. Every interview made me discover a gap in my knowledge. Every difficult question became something I wanted to understand instead of simply memorize.",
            "So I kept knocking.",
          ],
        },
        {
          label: 'The AI & ML chapter',
          paragraphs: [
            "Somewhere along the way, I started feeling that I didn't only want to use technology. I wanted to understand more of what is happening behind it.",
            "My interest in AI and Machine Learning started becoming much more serious through the AWS AI & ML Scholars journey, powered by Udacity. That experience pushed me beyond simply integrating AI APIs and made me curious about the ideas behind the models, the data, the learning process, and the systems that make AI useful in the real world.",
            "At the same time, I started working on automation projects and exploring how AI can connect with real workflows and everyday problems. Building software is exciting. But building software that can learn, reason, automate work, and help people solve problems feels like another level of the journey.",
            "Right now, I am continuing my self-study in AI and Machine Learning — revisiting fundamentals, exploring machine learning concepts, studying how models work, and trying to connect the theory with the engineering skills I already have.",
          ],
        },
        {
          label: 'Still on the road',
          paragraphs: [
            "My journey has never been a straight line. There have been projects I finished, projects I abandoned, bugs I couldn't understand at first, technologies I had to revisit, interviews I passed, interviews I failed, and opportunities that didn't work out.",
            "But every one of them moved me forward somehow.",
            "Today, I am still building. Still studying. Still experimenting. Still preparing for interviews. And still asking myself: what if I go a little deeper?",
          ],
        },
      ],
      closing: "I don't have everything figured out. I just haven't stopped trying.",
      log: [
        { status: 'completed', label: 'COMPLETED', text: 'AWS AI & ML Scholars — AWS-sponsored learning journey powered by Udacity' },
        { status: 'completed', label: 'COMPLETED', text: 'AWS AI & ML Challenge Phase — completed and unlocked AWS Skill Builder access' },
        { status: 'ongoing', label: 'ONGOING', text: 'AI & ML Nanodegree — progressing through self-study and coursework' },
        { status: 'ongoing', label: 'ONGOING', text: 'MLOps fundamentals — studying how ML systems move into production' },
        { status: 'completed', label: 'COMPLETED', text: 'Automation pipelines — n8n + Gemini workflows shipped in production at work' },
        { status: 'exploring', label: 'EXPLORING', text: 'Going deeper into AI/ML theory — connecting engineering experience with ML fundamentals' },
        { status: 'exploring', label: 'EXPLORING', text: "Master's degree in AI — a serious consideration for the next chapter" },
      ],
    },
    projects: {
      eyebrow: 'Projects',
      heading: 'Selected work',
      items: [
        {
          tag: 'GET /projects/ordex',
          title: 'Ordex — Commerce OS Platform',
          description:
            'A multi-tenant SaaS commerce platform for MENA sellers. Vendors get their own isolated storefront, product catalog, and order management. Under the hood: tenant-isolated queries, dual JWT auth, three-tier RBAC, a four-plan subscription engine, an 11-step BullMQ billing state machine (Paymob + InstaPay), SSR storefronts with Redis caching, and a 15+ page admin panel — all with full Arabic/English RTL support.',
          stack: ['Next.js', 'Express', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'Docker'],
          link: 'https://ordex.mora-industries.cloud/',
          linkLabel: 'View live',
          featured: true,
        },
        {
          tag: 'POST /projects/legal-api',
          title: 'Legal Consultation Platform',
          description:
            'Backend API for a legal consultation service where clients can book appointments, pay, and chat with an AI legal assistant. Appointments sync automatically to Google Calendar and Meet. Payments flow through Stripe, Tabby, and Tamara. The AI chatbot is built on Google Gemini and handles bilingual legal queries.',
          stack: ['Node.js', 'Express', 'TypeScript', 'Prisma', 'PostgreSQL', 'Google Gemini', 'Stripe'],
          link: 'https://www.saadalboqami.com/',
          linkLabel: 'View live'
        },
        {
          tag: 'GET /projects/baytostay',
          title: 'Bay To Stay',
          description:
            'A rental platform live on both iOS and Android. Tenants can search listings, chat in real-time with landlords, and pay — all from the app. Built the Laravel/MySQL backend, designed the JWT/OAuth2 auth flows, integrated real-time messaging via Pusher, push notifications via Firebase, and PayTabs payment processing.',
          stack: ['Laravel', 'MySQL', 'Pusher', 'Firebase', 'PayTabs', 'JWT'],
          link: 'https://play.google.com/store/apps/details?id=com.runsoft.bay_to_stay',
          linkLabel: 'Google Play',
          link2: 'https://apps.apple.com/eg/app/bay-to-stay/id6743452055',
          link2Label: 'App Store',
        },
        {
          tag: 'GET /projects/alinea',
          title: 'ALINEA — AI Behavioral Coach',
          description:
            'An AI-powered cognitive coaching platform that intercepts high-risk emotional trades before they happen. ALINEA uses real-time behavioral signal analysis and Claude AI coaching to help traders understand the psychology behind their decisions — intervening at the moment a trade is most likely to go wrong.',
          stack: ['TypeScript', 'Next.js', 'Claude AI', 'Behavioral Analysis'],
          link: 'https://alinea-sccn.vercel.app/',
          linkLabel: 'View live',
          link2: 'https://github.com/salmahmed6/ALINEA',
          link2Label: 'GitHub',
        },
        {
          tag: 'GET /projects/ai-recruiter',
          title: 'AI Recruiter Pipeline',
          description:
            'An automated, rate-limit-resilient backend pipeline built in n8n that parses developer company repositories, evaluates open positions against target developer roles using the Google Gemini API, intelligently scrapes contact information, and structures the outreach funnel — all without manual intervention.',
          stack: ['n8n', 'Google Gemini', 'Automation', 'Web Scraping'],
          link: 'https://github.com/salmahmed6/AI-Recruiter-Pipline',
          linkLabel: 'GitHub',
        },
        {
          tag: 'GET /projects/walk-with-me',
          title: 'Walk With Me',
          description:
            'NestJS backend for a fitness and mindfulness app. Users track walks in real-time, chat with other participants, and earn coin-based rewards. Real-time location tracking and chat run over WebSockets. Auth is handled via Firebase (Google, Twitter, email). Built to handle concurrent real-time sessions across multiple users.',
          stack: ['NestJS', 'WebSockets', 'Firebase', 'MongoDB', 'TypeScript'],
          link: 'https://github.com/salmahmed6/walk-with-me-mvp',
          linkLabel: 'GitHub',
        },
        {
          tag: 'npm i node-auth-guard',
          title: 'Node Auth Guard',
          description:
            'A reusable authentication and authorization package for Node.js/Express applications. Drop it into any project and get JWT auth, email verification, password reset flows, and role-based access control middleware out of the box. Published and maintained on npm.',
          stack: ['Node.js', 'Express', 'JWT', 'bcrypt', 'Joi'],
          link: 'https://github.com/salmahmed6/node-auth-guard',
          linkLabel: 'GitHub',
        },
      ],
    },
    skills: {
      eyebrow: 'Skills',
      heading: 'Toolbox',
      groups: [
        {
          title: 'Languages',
          items: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'SQL', 'C++'],
        },
        {
          title: 'Backend',
          items: ['Node.js', 'Express.js', 'NestJS', 'Laravel', 'REST APIs', 'WebSockets', 'JWT', 'OAuth2', 'RBAC'],
        },
        {
          title: 'Frontend',
          items: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'HTML', 'CSS', 'React Query', 'Zustand', 'Zod'],
        },
        {
          title: 'Databases & Data',
          items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'BullMQ', 'Prisma', 'TypeORM', 'Eloquent ORM'],
        },
        {
          title: 'DevOps & Infrastructure',
          items: ['Docker', 'Git', 'GitHub Actions', 'CI/CD', 'PM2', 'AWS', 'Linux', 'Cloudflare R2', 'Cloudinary'],
        },
        {
          title: 'AI / ML / Automation',
          items: ['OpenAI API', 'Google Gemini', 'AWS AI & ML', 'ML fundamentals', 'MLOps', 'n8n', 'Workflow automation'],
        },
        {
          title: 'Architecture & Practice',
          items: ['Multi-tenancy', 'SaaS architecture', 'System design', 'Payment integrations', 'Agile', 'API design', 'HMAC webhooks'],
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      heading: "Let's talk",
      // text: 'Open to backend and full-stack roles',
      email: 'salmaahmedali924@gmail.com',
      emailCta: 'Send an email',
      links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/salma-ahmed-988880221/' },
        { label: 'GitHub', href: 'https://github.com/salmahmed6' },
        { label: 'X / Twitter', href: 'https://x.com/Saloma8_' },
      ],
    },
    footer: {
      text: 'Designed & built by Salma Ahmed',
      backToTop: 'Back to top',
    },
  },

  ar: {
    meta: {
      langLabel: 'English',
      dir: 'rtl',
    },
    nav: {
      about: 'نبذة',
      experience: 'الخبرات',
      journey: 'رحلتي',
      projects: 'المشاريع',
      skills: 'المهارات',
      contact: 'تواصل',
    },
    statusBar: {
      prompt: 'salma@portfolio:~$',
      status: 'open_to_work: true',
      locationLabel: 'القاهرة، مصر',
    },
    hero: {
      eyebrow: 'متاحة لفرص عمل جديدة',
      name: 'سلمى أحمد',
      role: 'مهندسة باك-إند وفل-ستاك',
      tagline:
        'أصمّم وأبني أنظمة SaaS متعددة المستأجرين من الألف إلى الياء — من التصميم المعماري وحتى كل تفصيلة لا تحتمل الخطأ في الإنتاج.',
      terminal: [
        { cmd: 'whoami', out: 'سلمى أحمد — مهندسة باك-إند / فل-ستاك' },
        { cmd: 'currently', out: 'أبني Ordex، منصة تجارة متعددة المستأجرين، في Share Adawli' },
        { cmd: 'based_in', out: 'القاهرة، مصر' },
      ],
      ctaPrimary: 'عرض المشاريع',
      ctaSecondary: 'تواصل معي',
    },
    about: {
      eyebrow: 'نبذة',
      heading: 'أبني الأجزاء التي لا يُسمح لها بالفشل في منتجات SaaS.',
      paragraphs: [
        'خلال عامين، تولّيت أنظمة لا يلمس معظم المهندسين سوى جزء منها — عزل بيانات المستأجرين، فوترة الاشتراكات، ويب هوكس الدفع، والتحكم في الصلاحيات. أستمتع بالأجزاء التي يكون فيها الخطأ مكلفًا: المال، المصادقة، وسلامة البيانات.',
        'مشروعي المرجعي هو Ordex، منصة تجارة متعددة المستأجرين صممتها وبنيتها بمفردي — من مخطط قاعدة البيانات وحتى لوحة التحكم. علّمني هذا المشروع أن جزءًا كبيرًا من "الهندسة المعمارية" هو توقّع الفشل: ماذا يحدث عند وصول ويب هوك مرتين، أو عند انتهاء خطة مستأجر أثناء طلب جارٍ، أو عند تعطّل مزوّد الدفع.',
        'إلى جانب العمل على المنتجات، أصون حزمة مصادقة مفتوحة المصدر على npm، وأعمّق حاليًا أساسياتي في تعلّم الآلة عبر برنامج AWS AI & ML Scholars المدعوم من AWS.',
      ],
    },
    experience: {
      eyebrow: 'الخبرات',
      heading: 'حيث أصبحت الأنظمة حقيقية',
      items: [
        {
          company: 'Share Adawli',
          role: 'مهندسة باك-إند',
          period: 'فبراير 2026 — حتى الآن',
          location: 'جدة، السعودية · عن بُعد',
          points: [
            'صممت الواجهة الخلفية لمنصة Zumra، نظام مطابقة مرشحين آلي، باستخدام NestJS.',
            'أصلحت ثغرات حرجة في بوابة الدفع HyperPay — أمان المعاملات، مصادقة 3DS2، وموثوقية الويب هوكس.',
            'حافظت على استقرار الخدمات الحيوية وتوافرها على مدار الساعة في بيئة إنتاج عالية الحركة.',
          ],
        },
        {
          company: 'Runsoft',
          role: 'مطوّرة باك-إند',
          period: 'فبراير 2025 — ديسمبر 2025',
          location: 'القاهرة، مصر',
          points: [
            'بنيت وصنت الواجهة الخلفية بـ Laravel وMySQL لتطبيق Bay To Stay، منصة إيجارات متاحة على iOS وAndroid.',
            'صممت تدفقات مصادقة JWT وOAuth2 قلّلت محاولات الوصول غير المصرح به بنسبة 35%.',
            'دمجت مدفوعات PayTabs وحسّنت أداء استعلامات Eloquent ORM.',
          ],
        },
        {
          company: 'Orange Digital Center',
          role: 'متدربة هندسة برمجيات',
          period: 'نوفمبر 2024 — يناير 2025',
          location: 'القاهرة، مصر',
          points: [
            'بنيت خدمة نموذج تواصل، ومتتبع مصاريف، وتطبيق إدارة مهام — Node.js وExpress وMongoDB وJWT.',
            'أول تجربة عملية مع Agile وSDLC وCI/CD ضمن فريق.',
          ],
        },
      ],
    },
    journey: {
      eyebrow: 'أستكشفه الآن',
      heading: 'ما زلت أتعلّم، ولا أنوي التوقف',
      sections: [
        {
          label: null,
          paragraphs: [
            'كنت أظن في السابق أن تعلّم التقنية يعني الوصول إلى نقطة تشعر فيها أنك "تعرف ما يكفي".',
            'لم أعد أؤمن بذلك.',
            'حين تفتح باب التقنية، تدرك أنه لا خط نهاية. كل إجابة تقود إلى سؤال جديد، وكل مشروع يفتح بابًا آخر، وفجأة تجد نفسك تريد أن تفهم ما يحدث خلف كل شيء تبنيه.',
            'هذا هو مكاني اليوم.',
          ],
        },
        {
          label: 'البداية',
          paragraphs: [
            'بدأت رحلتي كمطوّرة أبني الـ APIs والـ backends ومواقع الويب وأنظمة المصادقة وقواعد البيانات ومنتجات حقيقية. عملت مع Node.js وTypeScript وNestJS وExpress وLaravel وReact وNext.js وPostgreSQL وMongoDB وDocker وCI/CD وRedis والكثير غيرها.',
            'لكن الأهم بالنسبة لي لم يكن قائمة التقنيات أبدًا.',
            'كان العملية نفسها: بناء شيء، ثم كسره، ثم تصحيحه، ثم السؤال "لماذا؟"، ثم المحاولة مجددًا.',
          ],
        },
        {
          label: 'التعلّم من الفشل',
          paragraphs: [
            'تعلّمت أيضًا من المقابلات — بما فيها تلك التي لم أنجح فيها.',
            'كانت هناك مقابلات استعددت لها جيدًا، درست مفاهيم جديدة، تدرّبت على أسئلة تقنية، ومع ذلك لم تُفضِ إلى فرصة. في البداية، بدا الفشل كبابٍ موصد.',
            'اليوم أرى الأمر بشكل مختلف. كل رفض أظهر لي شيئًا أحتاج إلى تحسينه. كل مقابلة كشفت ثغرة في معرفتي. وكل سؤال صعب أصبح شيئًا أردت فهمه لا مجرد حفظه.',
            'فواصلت الطرق.',
          ],
        },
        {
          label: 'فصل الذكاء الاصطناعي',
          paragraphs: [
            'في مرحلة ما، بدأت أشعر أنني لا أريد فقط استخدام التقنية، بل أريد أن أفهم ما يحدث خلفها.',
            'اهتمامي بالذكاء الاصطناعي وتعلّم الآلة أصبح أكثر جدية من خلال برنامج AWS AI & ML Scholars المقدَّم عبر Udacity. دفعني ذلك إلى ما هو أبعد من مجرد دمج الـ APIs، وجعلني فضوليًا حول الأفكار الكامنة وراء النماذج والبيانات وعملية التعلّم.',
            'في الوقت نفسه، بدأت العمل على مشاريع أتمتة واستكشاف كيف يمكن للذكاء الاصطناعي أن يتصل بسير العمل الحقيقية. بناء البرمجيات مثير للاهتمام، لكن بناء برمجيات تستطيع التعلّم والتفكير وأتمتة العمل ومساعدة الناس — هذا مستوى آخر من الرحلة.',
          ],
        },
        {
          label: 'لا تزال الرحلة مستمرة',
          paragraphs: [
            'لم تكن رحلتي خطًا مستقيمًا. كانت هناك مشاريع أتممتها، ومشاريع تركتها، وأخطاء لم أفهمها في البداية، ومقابلات نجحت فيها، ومقابلات رسبت فيها، وفرص لم تتحقق.',
            'لكن كلًا منها أحدث فارقًا.',
            'اليوم، ما زلت أبني. ما زلت أدرس. ما زلت أجرّب. وما زلت أسأل نفسي: وإذا ذهبت أعمق قليلًا؟',
          ],
        },
      ],
      closing: 'لا أملك كل الإجابات. أنا فقط لم أتوقف عن المحاولة.',
      log: [
        { status: 'completed', label: 'مكتمل', text: 'AWS AI & ML Scholars — رحلة تعلّم برعاية AWS عبر Udacity' },
        { status: 'completed', label: 'مكتمل', text: 'مرحلة التحدي AWS — أتممتها وحصلت على وصول إلى AWS Skill Builder' },
        { status: 'ongoing', label: 'جارٍ', text: 'Nanodegree في الذكاء الاصطناعي — دراسة ذاتية متواصلة' },
        { status: 'ongoing', label: 'جارٍ', text: 'MLOps — دراسة أساسيات نقل نماذج ML إلى الإنتاج' },
        { status: 'completed', label: 'مكتمل', text: 'خطوط أتمتة n8n + Gemini — مشحونة في الإنتاج الفعلي في العمل' },
        { status: 'exploring', label: 'استكشاف', text: 'التعمّق في الذكاء الاصطناعي — ربط خبرة الهندسة بأساسيات ML' },
        { status: 'exploring', label: 'استكشاف', text: 'الماجستير في الذكاء الاصطناعي — اعتبار جدي للفصل القادم' },
      ],
    },
    projects: {
      eyebrow: 'المشاريع',
      heading: 'أعمال مختارة',
      items: [
        {
          tag: 'GET /projects/ordex',
          title: 'Ordex — منصة Commerce OS',
          description:
            'منصة تجارة SaaS متعددة المستأجرين للبائعين في منطقة الشرق الأوسط وشمال إفريقيا. كل بائع يحصل على متجره المعزول وكتالوج منتجاته وإدارة طلباته. تحت الغطاء: عزل كامل للبيانات، مصادقة JWT مزدوجة، صلاحيات ثلاثية المستويات، محرك اشتراكات بأربع خطط، آلة فوترة من 11 خطوة عبر BullMQ مع Paymob وInstaPay، واجهات متجر SSR مع Redis، ودعم كامل للعربية والإنجليزية.',
          stack: ['Next.js', 'Express', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'Docker'],
          link: 'https://ordex.mora-industries.cloud/',
          linkLabel: 'عرض النسخة الحية',
          featured: true,
        },
        {
          tag: 'POST /projects/legal-api',
          title: 'منصة الاستشارات القانونية',
          description:
            'واجهة برمجية لخدمة استشارات قانونية حيث يمكن للعملاء حجز مواعيد والدفع والدردشة مع مساعد قانوني بالذكاء الاصطناعي. المواعيد تتزامن تلقائيًا مع Google Calendar وMeet. المدفوعات عبر Stripe وTabby وTamara. روبوت المحادثة مبني على Google Gemini.',
          stack: ['Node.js', 'Express', 'TypeScript', 'Prisma', 'PostgreSQL', 'Google Gemini', 'Stripe'],
        },
        {
          tag: 'GET /projects/baytostay',
          title: 'Bay To Stay',
          description:
            'منصة إيجارات متاحة فعليًا على iOS وAndroid. المستأجرون يبحثون عن شقق ويتواصلون مع الملاك في الوقت الحقيقي ويدفعون من داخل التطبيق. بنيت الواجهة الخلفية بـ Laravel وMySQL، ودمجت الرسائل الفورية عبر Pusher، والإشعارات عبر Firebase، والمدفوعات عبر PayTabs.',
          stack: ['Laravel', 'MySQL', 'Pusher', 'Firebase', 'PayTabs', 'JWT'],
          link: 'https://play.google.com/store/apps/details?id=com.runsoft.bay_to_stay',
          linkLabel: 'Google Play',
          link2: 'https://apps.apple.com/eg/app/bay-to-stay/id6743452055',
          link2Label: 'App Store',
        },
        {
          tag: 'GET /projects/alinea',
          title: 'ALINEA — مدرّب سلوكي بالذكاء الاصطناعي',
          description:
            'منصة تدريب معرفي مدعومة بالذكاء الاصطناعي تتدخّل قبل الصفقات العاطفية عالية المخاطر. تستخدم ALINEA تحليل الإشارات السلوكية الآنية وتدريب Claude AI لمساعدة المتداولين على فهم نفسية قراراتهم.',
          stack: ['TypeScript', 'Next.js', 'Claude AI', 'Behavioral Analysis'],
          link: 'https://alinea-sccn.vercel.app/',
          linkLabel: 'عرض النسخة الحية',
          link2: 'https://github.com/salmahmed6/ALINEA',
          link2Label: 'GitHub',
        },
        {
          tag: 'GET /projects/ai-recruiter',
          title: 'خط أنابيب التوظيف بالذكاء الاصطناعي',
          description:
            'خط أنابيب آلي مدمج في n8n يحلّل مستودعات شركات التطوير، يقيّم الوظائف المتاحة مقابل ملفات المطوّرين المستهدفين عبر Gemini API، يستخرج معلومات التواصل، ويبني مسار التواصل الخارجي — كل هذا دون تدخّل يدوي.',
          stack: ['n8n', 'Google Gemini', 'Automation', 'Web Scraping'],
          link: 'https://github.com/salmahmed6/AI-Recruiter-Pipline',
          linkLabel: 'GitHub',
        },
        {
          tag: 'GET /projects/walk-with-me',
          title: 'Walk With Me',
          description:
            'واجهة خلفية بـ NestJS لتطبيق لياقة وتأمل. المستخدمون يتتبّعون مساراتهم في الوقت الحقيقي، يتحدّثون مع المشاركين، ويكسبون مكافآت. التتبّع والدردشة عبر WebSockets. المصادقة عبر Firebase.',
          stack: ['NestJS', 'WebSockets', 'Firebase', 'MongoDB', 'TypeScript'],
          link: 'https://github.com/salmahmed6/walk-with-me-mvp',
          linkLabel: 'GitHub',
        },
        {
          tag: 'npm i node-auth-guard',
          title: 'Node Auth Guard',
          description:
            'حزمة مصادقة وصلاحيات قابلة لإعادة الاستخدام لتطبيقات Node.js/Express. تحصل على JWT وتحقق البريد الإلكتروني واستعادة كلمة المرور والتحكم في الوصول القائم على الأدوار — جاهزة للاستخدام. منشورة على npm.',
          stack: ['Node.js', 'Express', 'JWT', 'bcrypt', 'Joi'],
          link: 'https://github.com/salmahmed6/node-auth-guard',
          linkLabel: 'GitHub',
        },
      ],
    },
    skills: {
      eyebrow: 'المهارات',
      heading: 'الأدوات',
      groups: [
        {
          title: 'اللغات',
          items: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'SQL', 'C++'],
        },
        {
          title: 'الواجهة الخلفية',
          items: ['Node.js', 'Express.js', 'NestJS', 'Laravel', 'REST APIs', 'WebSockets', 'JWT', 'OAuth2', 'RBAC'],
        },
        {
          title: 'الواجهة الأمامية',
          items: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'HTML', 'CSS', 'React Query', 'Zustand', 'Zod'],
        },
        {
          title: 'قواعد البيانات',
          items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'BullMQ', 'Prisma', 'TypeORM', 'Eloquent ORM'],
        },
        {
          title: 'DevOps والبنية التحتية',
          items: ['Docker', 'Git', 'GitHub Actions', 'CI/CD', 'PM2', 'AWS', 'Linux', 'Cloudflare R2', 'Cloudinary'],
        },
        {
          title: 'الذكاء الاصطناعي / الأتمتة',
          items: ['OpenAI API', 'Google Gemini', 'AWS AI & ML', 'ML fundamentals', 'MLOps', 'n8n', 'Workflow automation'],
        },
        {
          title: 'الهندسة والممارسات',
          items: ['Multi-tenancy', 'SaaS architecture', 'System design', 'Payment integrations', 'Agile', 'API design', 'HMAC webhooks'],
        },
      ],
    },
    contact: {
      eyebrow: 'تواصل',
      heading: 'لنتحدث',
      text: 'متاحة لأدوار باك-إند أو فل-ستاك — خصوصًا الفرق التي تبني منتجات SaaS متعددة المستأجرين أو مرتبطة بأنظمة الدفع.',
      email: 'salmaahmedali924@gmail.com',
      emailCta: 'أرسل بريدًا إلكترونيًا',
      links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/salma-ahmed-988880221/' },
        { label: 'GitHub', href: 'https://github.com/salmahmed6' },
        { label: 'X / Twitter', href: 'https://x.com/Saloma8_' },
      ],
    },
    footer: {
      text: 'تصميم وبناء سلمى أحمد',
      backToTop: 'العودة للأعلى',
    },
  },
}

export const languages = ['en', 'ar']
