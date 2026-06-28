// ===== Sprachumschaltung DE / EN =====================================
// Deutsch ist die Standardsprache und steht direkt im HTML. Die deutschen
// Texte werden beim Laden aus dem DOM erfasst; nur die englische Fassung
// wird hier gepflegt. So bleibt die DE-Ansicht immer 1:1 zum Markup.

const I18N_EN = {
  // Navigation
  'nav.about': 'About us',
  'nav.team': 'Team',
  'nav.services': 'Services',
  'nav.approach': 'Approach',
  'nav.contact': 'Contact',

  // Hero
  'hero.overline': 'Executive Search &amp; Restructuring Advisory',
  'hero.headline': 'Securing leadership.<br />Strengthening companies.',
  'hero.sub': 'We fill key positions from senior professional to executive level<br />and support mid-sized companies in an advisory capacity through restructuring and transformation.',
  'hero.cta': 'Request a conversation',
  'hero.scroll': 'Learn more',

  // About
  'about.label': '01 &mdash; Who we are',
  'about.headline': 'Search depth and operational substance',
  'about.p1': 'Wiegmann Executive Advisory combines Executive Search with restructuring and operations advisory — from a single source. We fill key positions and then support implementation in an advisory role. Two perspectives that rarely come together in practice.',
  'about.p2': 'Our clients are mid-sized, often owner-managed companies as well as divisions and business units within group structures. We consistently think on two levels: senior professionals with a gross annual salary between €100,000 and €200,000, and executives from €200,000 gross per year.',
  'about.s1n': '100–200K',
  'about.s1l': 'Senior Professional, p.a.',
  'about.s2n': '200K+',
  'about.s2l': 'Executive, p.a.',
  'about.s3n': 'Mid-market',
  'about.s3l': 'Core focus',

  // Pull quote
  'quote': '“The right appointment is the beginning — operational impact is the measure.”',

  // Team
  'team.label': '02 &mdash; The team',
  'team.headline': 'Two perspectives, one signature',
  'team.intro': 'Jan and Frank Wiegmann combine search expertise with decades of operational leadership — as a shared foundation for the advisory.',
  'team.fw.role': 'Restructuring &amp; Operations',
  'team.fw.bio': 'Frank Wiegmann brings decades of experience in the operational leadership of international industrial companies. As CEO of Bene AG and COO of Schuler AG, he led transformation processes, restructurings and operational excellence programmes in complex, owner-managed and listed structures. His line experience forms the operational depth of the advisory.',
  'team.fw.t1': 'Former CEO, Bene AG',
  'team.fw.t2': 'Former COO, Schuler AG',
  'team.fw.t3': 'Restructuring &amp; industrial transformation',
  'team.jw.role': 'Executive Search',
  'team.jw.bio': 'For around ten years, Jan Wiegmann has led executive search mandates focused on Industrial &amp; Technology, MedTech and Professional Services. He supports owner-managed companies, mid-sized groups and business units in filling key positions at senior professional and executive level.',
  'team.jw.t1': '~10 years Executive Search',
  'team.jw.t2': 'Industrial &amp; Technology, MedTech',
  'team.jw.t3': 'Professional Services',

  // Network
  'net.heading': 'Network &amp; cooperation partners',
  'net.text': 'For mandates that go beyond our core competence, we draw on a network of further senior partners in executive search and work with cooperation partners from venture capital, strategy consulting, organisational development and interim management.',
  'net.t1': 'Senior Partners, Executive Search',
  'net.t2': 'Venture Capital',
  'net.t3': 'Strategy Consulting',
  'net.t4': 'Organisational Development',
  'net.t5': 'Interim CFOs &amp; COOs',

  // Services
  'svc.label': '03 &mdash; Services',
  'svc.headline': 'Two fields of competence',
  'svc.sub': 'Executive Search and restructuring or operations advisory for mid-sized businesses, owner-managed companies and group divisions.',
  'svc1.t': 'Senior Professional Search',
  'svc1.d': 'Filling division- and department-head positions with a gross annual salary between €100,000 and €200,000 — for mid-market, owner-managed companies and business units.',
  'svc2.t': 'Executive Search',
  'svc2.d': 'Filling managing-director, board and divisional-board positions from a gross annual salary of €200,000 — at group and mid-market level.',
  'svc3.t': 'Executive Coaching',
  'svc3.d': 'Supporting managing directors and division heads in strengthening leadership identity, decisiveness and impact within the organisation.',
  'svc4.t': 'Board Advisory',
  'svc4.d': 'Independent advice for advisory and supervisory boards in owner-managed companies — critical reflection, governance optimisation and strategic impulses.',
  'svc5.t': 'Restructuring Advisory',
  'svc5.d': 'Operational and financial restructuring of mid-sized companies in challenging situations — from diagnosis to implementation.',
  'svc6.t': 'Operations Advisory',
  'svc6.d': 'Efficiency improvement, process and cost optimisation — advisory support for operational implementation.',

  // Approach
  'app.label': '04 &mdash; Our approach',
  'app.headline': 'Principles that guide us',
  'p1.h': 'Absolute confidentiality',
  'p1.d': 'No mandate is ever referenced. No name is mentioned. Discretion is not a service — it is a precondition.',
  'p2.h': 'Plain language',
  'p2.d': 'We say what others leave unsaid. Friendly directness is more effective than diplomatic ambiguity.',
  'p3.h': 'No conflicts of interest',
  'p3.d': 'We do not fill competing mandates within the same market segment and have no interest in prolonging projects for their own sake.',
  'p4.h': 'Long-term perspective',
  'p4.d': 'We think in consequences, not in quarters. What seems right today must still be defensible tomorrow.',

  // Contact
  'contact.label': '05 &mdash; Contact',
  'contact.headline': 'First contact',
  'contact.text': 'A first conversation is non-binding and free of charge. Write to us — we will respond within 24 hours.',
  'contact.emailLabel': 'Email',
  'contact.availLabel': 'Availability',
  'contact.availValue': 'Mon – Fri, 9 am – 6 pm',
  'form.name': 'Name',
  'form.org': 'Organisation',
  'form.email': 'Email',
  'form.message': 'Your enquiry',
  'form.namePh': 'Your full name',
  'form.orgPh': 'Your company / your position',
  'form.emailPh': 'Your email address',
  'form.messagePh': 'A brief description of your enquiry (confidential)',
  'form.submit': 'Send message',
  'form.note': 'All enquiries are treated in strict confidence.',

  // Footer
  'footer.imprint': 'Imprint',
  'footer.privacy': 'Privacy',
  'footer.terms': 'Terms',
  'footer.legal': '&copy; 2026 Wiegmann Executive Advisory &mdash; All rights reserved. This website is not publicly accessible and not intended for distribution.',
};

const I18N_TITLE = {
  de: 'Wiegmann Executive Advisory',
  en: 'Wiegmann Executive Advisory',
};

// Form-Erfolgsmeldung (von main.js genutzt)
window.I18N_SUCCESS = {
  de: {
    h: 'Vielen Dank.',
    p: 'Ihre Nachricht wurde vorbereitet. Bitte senden Sie die geöffnete E-Mail ab,<br />um Ihre Anfrage zu übermitteln.',
  },
  en: {
    h: 'Thank you.',
    p: 'Your message has been prepared. Please send the opened email<br />to submit your enquiry.',
  },
};

(function () {
  const STORAGE_KEY = 'weaLang';

  // Deutsche Ausgangstexte aus dem DOM erfassen
  const DE = {};
  document.querySelectorAll('[data-i18n]').forEach(el => {
    DE[el.getAttribute('data-i18n')] = el.innerHTML;
  });
  const DE_PH = {};
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    DE_PH[el.getAttribute('data-i18n-ph')] = el.getAttribute('placeholder');
  });

  function apply(lang) {
    const useEN = lang === 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = useEN ? I18N_EN[key] : DE[key];
      if (val !== undefined) el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      const val = useEN ? I18N_EN[key] : DE_PH[key];
      if (val !== undefined) el.setAttribute('placeholder', val);
    });
    document.documentElement.lang = lang;
    document.title = I18N_TITLE[lang] || I18N_TITLE.de;
    document.querySelector('.nav-toggle')?.setAttribute(
      'aria-label', useEN ? 'Open menu' : 'Menü öffnen');
    document.querySelectorAll('.lang-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
    window.currentLang = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  // Wire up buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => apply(btn.dataset.lang));
  });

  // Startsprache: gespeicherte Wahl, sonst Deutsch
  let initial = 'de';
  try { initial = localStorage.getItem(STORAGE_KEY) || 'de'; } catch (e) {}
  window.currentLang = initial;
  if (initial === 'en') apply('en');
  else apply('de'); // setzt Toggle-Status & lang-Attribut
})();
