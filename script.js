(function () {
  /* ----------------------------------------------------------
     1. TRANSLATIONS DICTIONARY
     ---------------------------------------------------------- */
  var translations = {
    "nav.about":   { en: "About",     ar: "نبذة" },
    "nav.stack":   { en: "Stack",     ar: "الأدوات" },
    "nav.path":    { en: "Path",      ar: "المسار" },
    "nav.contact": { en: "Contact",   ar: "تواصل" },
    "nav.cta":     { en: "Say hello", ar: "تواصل معي" },

    "hero.available":       { en: "Available",            ar: "متاح" },
    "hero.availableSuffix": { en: "for junior roles",     ar: "لوظائف مبتدئين" },
    "hero.kicker":          { en: "Qalyubia, Egypt",      ar: "القليوبية، مصر" },
    "hero.name":            { en: "Mohamed Ahmed",        ar: "محمد أحمد" },
    "hero.role":            { en: "Front-End Web Developer", ar: "مطوّر واجهات أمامية" },
    "hero.lede":            { 
      en: "Computer Science student building toward the React ecosystem through Egypt's national DEPI program — turning requirements into interfaces that are clean, accessible, and fast on every screen.",
      ar: "طالب علوم حاسب يتجه نحو منظومة React من خلال مبادرة \"مصر الرقمية للرواد\" الوطنية — يحوّل المتطلبات إلى واجهات نظيفة وسهلة الوصول وسريعة على كل شاشة." 
    },
    "hero.btnEmail":         { en: "Email me", ar: "راسلني" },
    "hero.btnGithub":        { en: "GitHub",   ar: "GitHub" },
    "hero.btnLinkedin":      { en: "LinkedIn", ar: "LinkedIn" },

    "about.heading": { en: "About", ar: "نبذة عني" },
    "about.p1": { 
      en: "I'm a Computer Science student specializing in front-end engineering, currently training in the React ecosystem through the Digital Egypt Pioneers Initiative. My focus is translating functional requirements into interfaces that hold up: semantic markup, layouts that don't break, and components built to be read by the next person who touches the code.",
      ar: "أنا طالب علوم حاسب متخصص في هندسة الواجهات الأمامية، وأتدرّب حاليًا على منظومة React عبر مبادرة مصر الرقمية للرواد. تركيزي هو تحويل المتطلبات الوظيفية إلى واجهات ثابتة: عناصر HTML دلالية، تخطيطات لا تنكسر، ومكوّنات مكتوبة بحيث يفهمها أي شخص آخر يفتح الكود بعدي." 
    },
    "about.p2": { 
      en: "I like the discipline side of front-end work as much as the visual side — structuring components, writing JavaScript that's easy to follow, and using Git properly instead of as an afterthought.",
      ar: "أستمتع بالجانب المنظّم من العمل بقدر استمتاعي بالجانب البصري — تنظيم المكوّنات، كتابة JavaScript يسهل تتبّعه، واستخدام Git بشكل صحيح بدلاً من كونه خطوة ثانوية." 
    },
    "about.fact1.k": { en: "Based in", ar: "المكان" },
    "about.fact1.v": { en: "Qalyubia, Egypt", ar: "القليوبية، مصر" },
    "about.fact2.k": { en: "Studying", ar: "الدراسة" },
    "about.fact2.v": { en: "B.Sc. Computer Science, Thebes Academy — expected June 2028", ar: "بكالوريوس علوم حاسب، أكاديمية طيبة — التخرج المتوقع يونيو 2028" },
    "about.fact3.k": { en: "Training", ar: "التدريب" },
    "about.fact3.v": { en: "React Front-End track, Digital Egypt Pioneers Initiative (DEPI)", ar: "مسار React للواجهات الأمامية، مبادرة مصر الرقمية للرواد" },
    "about.fact4.k": { en: "Looking for", ar: "أبحث عن" },
    "about.fact4.v": { en: "Junior / trainee front-end opportunities", ar: "فرص مبتدئين أو تدريب في تطوير الواجهات الأمامية" },

    "stack.heading": { en: "What I work with", ar: "أدوات أستخدمها" },
    "stack.cat1.title": { en: "Web technologies", ar: "تقنيات الويب" },
    "stack.cat1.i1": { en: "HTML5 & semantic markup", ar: "HTML5 وعناصر دلالية" },
    "stack.cat1.i2": { en: "CSS3", ar: "CSS3" },
    "stack.cat1.i3": { en: "JavaScript (ES6+)", ar: "JavaScript (ES6+)" },
    "stack.cat1.i4": { en: "React.js", ar: "React.js" },
    "stack.cat1.i5": { en: "Responsive web design", ar: "تصميم متجاوب" },
    "stack.cat1.i6": { en: "DOM manipulation", ar: "التعامل مع DOM" },
    "stack.cat2.title": { en: "UI & layout", ar: "الواجهة والتخطيط" },
    "stack.cat2.i1": { en: "Flexbox", ar: "Flexbox" },
    "stack.cat2.i2": { en: "CSS Grid", ar: "CSS Grid" },
    "stack.cat2.i3": { en: "Mobile-first design", ar: "تصميم يبدأ من الموبايل" },
    "stack.cat2.i4": { en: "Cross-browser compatibility", ar: "توافق بين المتصفحات" },
    "stack.cat3.title": { en: "Tools & environment", ar: "أدوات وبيئة العمل" },
    "stack.cat3.i1": { en: "Git & GitHub", ar: "Git و GitHub" },
    "stack.cat3.i2": { en: "VS Code", ar: "VS Code" },
    "stack.cat3.i3": { en: "npm", ar: "npm" },
    "stack.cat3.i4": { en: "Browser DevTools", ar: "أدوات المطوّر بالمتصفح" },
    "stack.cat4.title": { en: "Core foundations", ar: "أساسيات برمجية" },
    "stack.cat4.i1": { en: "Object-oriented programming", ar: "البرمجة كائنية التوجه" },
    "stack.cat4.i2": { en: "Data structures fundamentals", ar: "أساسيات هياكل البيانات" },
    "stack.cat4.i3": { en: "Problem solving", ar: "حل المشكلات" },

    "path.heading": { en: "Path so far", ar: "المسار حتى الآن" },
    "path.tl1.date": { en: "July 2026 — Present", ar: "يوليو 2026 — حتى الآن" },
    "path.tl1.title": { en: "React Front-End Development Track", ar: "مسار تطوير الواجهات الأمامية بـ React" },
    "path.tl1.org": { en: "Digital Egypt Pioneers Initiative (DEPI) — MCIT, Egypt", ar: "مبادرة مصر الرقمية للرواد — وزارة الاتصالات، مصر" },
    "path.tl1.li1": { en: "Building responsive, user-centric interfaces to modern UI standards.", ar: "بناء واجهات متجاوبة تتمحور حول المستخدم وفق أحدث المعايير." },
    "path.tl1.li2": { en: "Writing modular ES6+ JavaScript and structuring component-driven single-page apps.", ar: "كتابة JavaScript حديث ومقسّم، وبناء تطبيقات صفحة واحدة قائمة على المكوّنات." },
    "path.tl1.li3": { en: "Using Git and GitHub for version control and collaborative development.", ar: "استخدام Git و GitHub للتحكم في الإصدارات والعمل الجماعي." },
    "path.tl2.date": { en: "Expected June 2028", ar: "التخرج المتوقع يونيو 2028" },
    "path.tl2.title": { en: "Bachelor of Computer Science", ar: "بكالوريوس علوم حاسب" },
    "path.tl2.org": { en: "Thebes Academy, Maadi — Cairo, Egypt", ar: "أكاديمية طيبة، المعادي — القاهرة، مصر" },
    "path.tl2.li1": { en: "Coursework in programming fundamentals, OOP, data structures, and web development basics.", ar: "مقررات في أساسيات البرمجة، البرمجة كائنية التوجه، هياكل البيانات، وأساسيات تطوير الويب." },

    "building.heading": { en: "Still early, still shipping", ar: "ما زلت في البداية، وما زلت أنتج" },
    "building.p": { 
      en: "My project list is growing alongside the DEPI track — new front-end builds land on GitHub as I finish them. It's the fastest way to see how I actually write code.",
      ar: "قائمة مشاريعي تكبر مع تقدّمي في مسار DEPI — كل مشروع جديد أنتهي منه يظهر على GitHub. إنها أسرع طريقة لترى كيف أكتب الكود فعليًا." 
    },
    "building.cta": { en: "Visit GitHub", ar: "زيارة GitHub" },

    "contact.heading": { en: "Let's talk", ar: "لنتحدث" },
    "contact.sub": { 
      en: "Open to junior and trainee front-end roles, internships, and freelance work. The fastest way to reach me is email.",
      ar: "منفتح على وظائف مبتدئين وتدريب في الواجهات الأمامية، وفرص تدريب، وأعمال حرة. أسرع طريقة للتواصل معي هي البريد الإلكتروني." 
    },
    "contact.emailLabel":    { en: "EMAIL",    ar: "البريد" },
    "contact.phoneLabel":    { en: "PHONE",    ar: "الهاتف" },
    "contact.githubLabel":   { en: "GITHUB",   ar: "GITHUB" },
    "contact.linkedinLabel": { en: "LINKEDIN", ar: "LINKEDIN" },

    "footer.name":     { en: "Mohamed Ahmed — Front-End Web Developer", ar: "محمد أحمد — مطوّر واجهات أمامية" },
    "footer.location": { en: "Qalyubia, Egypt", ar: "القليوبية، مصر" }
  };

  var STORAGE_THEME = 'portfolio-theme';
  var STORAGE_LANG  = 'portfolio-lang';
  var root = document.documentElement;

  /* ----------------------------------------------------------
     2. THEME TOGGLE (Dark / Light)
     ---------------------------------------------------------- */
  var themeToggle = document.getElementById('themeToggle');

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem(STORAGE_THEME, theme); } catch (e) {}
  }

  themeToggle.addEventListener('click', function () {
    var current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    setTheme(current === 'light' ? 'dark' : 'light');
  });

  /* ----------------------------------------------------------
     3. LANGUAGE TOGGLE (English / Arabic)
     ---------------------------------------------------------- */
  var langToggle = document.getElementById('langToggle');
  var langToggleLabel = document.getElementById('langToggleLabel');
  var hamburgerBtn = document.getElementById('hamburgerBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  var i18nNodes = document.querySelectorAll('[data-i18n]');

  function applyLanguage(lang) {
    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    langToggleLabel.textContent = lang === 'ar' ? 'EN' : 'AR';
    langToggle.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    
    if (hamburgerBtn) {
      var isOpen = mobileMenu && mobileMenu.classList.contains('open');
      hamburgerBtn.setAttribute('aria-label', lang === 'ar' ? (isOpen ? 'إغلاق القائمة' : 'فتح القائمة') : (isOpen ? 'Close menu' : 'Open menu'));
    }

    i18nNodes.forEach(function (node) {
      var key = node.getAttribute('data-i18n');
      var entry = translations[key];
      if (entry && entry[lang] !== undefined) {
        node.textContent = entry[lang];
      }
    });
  }

  function setLanguage(lang) {
    applyLanguage(lang);
    try { localStorage.setItem(STORAGE_LANG, lang); } catch (e) {}
  }

  langToggle.addEventListener('click', function () {
    var current = root.getAttribute('lang') === 'ar' ? 'ar' : 'en';
    setLanguage(current === 'ar' ? 'en' : 'ar');
  });

  /* ----------------------------------------------------------
     4. MOBILE HAMBURGER MENU
     ---------------------------------------------------------- */
  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }

  hamburgerBtn.addEventListener('click', function () {
    var isOpen = mobileMenu.classList.toggle('open');
    hamburgerBtn.classList.toggle('active', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
  });

  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMobileMenu);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) closeMobileMenu();
  });

  /* ----------------------------------------------------------
     5. INITIALIZE ON LOAD
     ---------------------------------------------------------- */
  applyLanguage(root.getAttribute('lang') === 'ar' ? 'ar' : 'en');

})();