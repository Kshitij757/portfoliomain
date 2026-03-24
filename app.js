import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';

const { useState, useEffect, useRef } = React;
const e = React.createElement;
const m = (tag, props, ...children) => e(motion[tag] || motion.div, props, ...children);

// ════════════════════════════════════════════════
// DATA
// ════════════════════════════════════════════════

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/Kshitij757',
    icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kshitij-lodhi',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/Kshitij20_25/',
    icon: 'M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z'
  },
  {
    name: 'Email',
    url: 'mailto:kshitijlodhi2005@gmail.com',
    icon: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'
  },
];

const SKILLS = {
  'Languages': ['C++', 'Python', 'Java', 'JavaScript'],
  'Frameworks & Libraries': ['HTML', 'CSS', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'FastAPI', 'Streamlit', 'Scikit-learn'],
  'Tools & Platforms': ['MySQL', 'Power BI', 'Excel', 'Git', 'GitHub', 'Java GUI', 'Maven'],
  'Soft Skills': ['Problem-Solving', 'Leadership', 'Adaptability', 'Quick Learner'],
};

const PROJECTS = [
  {
    title: 'Real-Time CPU Scheduler',
    date: "Apr '25",
    description: 'Simulates real-time CPU scheduling using FCFS, SJF, SRTF, Priority, and Round Robin with clear Gantt chart visualization. Built an interactive interface using HTML, CSS, and JavaScript that generates dynamic Gantt charts, computes completion/turnaround/waiting time instantly, and visually highlights gaps, context switches, and algorithm-specific behavior.',
    tech: ['HTML', 'CSS', 'JavaScript', 'OS Concepts', 'Gantt Charts'],
    github: 'https://github.com/Kshitij757/RealTime_CPU_Scheduler',
  },
  {
    title: 'Pet Breed Recommender GenAI',
    date: "Feb '25",
    description: 'ML-based system that recommends suitable dog and cat breeds based on user preferences such as size, activity level, temperament, and maintenance needs. Integrated Google Generative AI to generate natural-language explanations for each recommendation, enhancing clarity and user experience.',
    tech: ['Python', 'FastAPI', 'Scikit-learn', 'Streamlit', 'Google GenAI', 'ML'],
    github: 'https://github.com/Kshitij757/pet-breed-recommender-genai',
  },
  {
    title: 'Snake Game Java',
    date: "Apr '24",
    description: 'Interactive Snake Game using Java Swing with smooth controls (WASD + Arrow keys) and real-time collision detection. Implemented a robust game loop, dynamic speed progression, scoring logic, and a persistent high score system using file handling to enhance replay value.',
    tech: ['Java', 'Java Swing', 'OOP', 'Maven', 'File Handling'],
    github: 'https://github.com/Kshitij757/snake-game-java',
  },
];

const TRAININGS = [
  {
    title: 'Java Application Development',
    company: 'Lovely Professional University',
    role: 'Software Development Trainee',
    date: "Jun '25 – Jul '25",
    description: 'Learned core Java concepts including OOPs principles, exception handling, collections, and multithreading. Gained hands-on experience in building desktop applications using Java Swing and Java GUI frameworks. Developed practical skills in event-driven programming, application logic design, and modular code development.',
    tech: ['Java', 'Swing', 'OOPs Concepts'],
  }
];

const TIMELINE = [
  { type: 'Education', title: "B.Tech CSE — CGPA: 6.5", org: 'Lovely Professional University, Phagwara', date: "Aug '23 – Present" },
  { type: 'Training', title: 'Java Application Development Trainee', org: 'Lovely Professional University', date: "Jun '25 – Jul '25" },
  { type: 'Achievement', title: 'Volunteer Intern — Pravah NGO', org: 'Haridwar, Uttarakhand', date: "Jun '24" },
  { type: 'Education', title: 'Intermediate — PCM (90%)', org: 'Achievers Home Public School, Haridwar', date: "Aug '20 – Jul '22" },
  { type: 'Education', title: 'Matriculation (85%)', org: 'Achievers Home Public School, Haridwar', date: "Feb '19 – Jul '20" },
];

const CERTIFICATIONS = [
  { title: 'Peer-to-Peer Protocols & Local Area Networks', issuer: 'University of Colorado via Coursera', date: 'Nov 2024', file: 'Certificates/coursera_peer_to_peer.png' },
  { title: 'C Programming for Beginners – Master the C Language', issuer: 'Udemy', date: 'Feb 2024', file: 'Certificates/udemy_c_programming.png' },
  { title: 'Generative AI & Computational Theory Portfolio', issuer: 'Udemy', date: 'Jul 2025', file: null },
];

const ACHIEVEMENTS = [
  {
    icon: '🌱',
    title: 'Volunteer Intern – Pravah NGO',
    date: "Jun '24",
    description: 'Contributed to the education and welfare of underprivileged children by teaching academic subjects, engaging them in learning activities, and helping in food distribution. Worked closely with children lacking family support or involved in child labour.',
  }
];

const MARQUEE_WORDS = ['JAVA', 'PYTHON', 'C++', 'FULL STACK', 'MACHINE LEARNING', 'OPEN SOURCE', 'OOP', 'DSA', 'PROBLEM SOLVING', 'JAVASCRIPT', 'GENAI'];

// ════════════════════════════════════════════════
// HOOKS
// ════════════════════════════════════════════════

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const h = () => setY(window.scrollY);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);
  return y;
}

function useInViewOnce(ref, threshold = 0.2) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

function AnimatedCounter({ target }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const inView = useInViewOnce(ref);
  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const startTime = Date.now();
    const step = () => {
      const progress = Math.min((Date.now() - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return e('span', { ref }, count);
}

// ════════════════════════════════════════════════
// ANIMATION VARIANTS
// ════════════════════════════════════════════════

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

// ════════════════════════════════════════════════
// SVG ICON
// ════════════════════════════════════════════════

function SvgIcon({ path, size = 20 }) {
  return e('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'currentColor' },
    e('path', { d: path })
  );
}

const DownloadIcon = () => e('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
  e('path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' }),
  e('polyline', { points: '7 10 12 15 17 10' }),
  e('line', { x1: '12', y1: '15', x2: '12', y2: '3' })
);

// ════════════════════════════════════════════════
// NAVBAR
// ════════════════════════════════════════════════

function NavBar() {
  const scrollY = useScrollY();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = scrollY > 60;
  const links = ['About', 'Projects', 'LeetCode', 'Training', 'Timeline', 'Certificates', 'Contact'];

  return e(React.Fragment, null,
    e('nav', { className: `navbar ${scrolled ? 'scrolled' : ''}` },
      e('a', { href: '#', className: 'nav-logo' }, 'KL', e('span', null, '.')),
      e('ul', { className: 'nav-links' },
        ...links.map(l => e('li', { key: l }, e('a', { href: `#${l.toLowerCase()}` }, l)))
      ),
      e('button', {
        className: 'hamburger', onClick: () => setMenuOpen(!menuOpen), 'aria-label': 'Menu',
      },
        e('span', { style: menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {} }),
        e('span', { style: menuOpen ? { opacity: 0 } : {} }),
        e('span', { style: menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {} }),
      ),
    ),
    e('div', { className: `mobile-menu ${menuOpen ? 'open' : ''}` },
      ...links.map(l => e('a', {
        key: l, href: `#${l.toLowerCase()}`, onClick: () => setMenuOpen(false),
      }, l)),
    ),
  );
}

// ════════════════════════════════════════════════
// HERO
// ════════════════════════════════════════════════

function Hero() {
  const [showResumeModal, setShowResumeModal] = useState(false);

  useEffect(() => {
    const handleEsc = (ev) => { if (ev.key === 'Escape') setShowResumeModal(false); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return e(React.Fragment, null,
    e(motion.section, {
      className: 'hero', initial: 'hidden', animate: 'visible', variants: stagger,
    },
      e('div', { className: 'container w-full' },
        e('div', { className: 'hero-grid' },
          e('div', { style: { display: 'flex', flexDirection: 'column', justifyContent: 'center' } },
            m('div', { variants: fadeUp },
              e('h1', { className: 'hero-slogan' },
                'KSHITIJ',
                e('br'),
                e('span', { className: 'cyan' }, 'LODHI')
              )
            ),
            m('div', { variants: fadeUp },
              e('p', { className: 'hero-sub' }, '// CS ENGINEER · BUILDER · PROBLEM SOLVER')
            ),
            m('div', { variants: fadeUp, className: 'hero-socials', style: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' } },
              e('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '12px' } },
                ...SOCIAL_LINKS.map(link =>
                  e('a', {
                    key: link.name, href: link.url, target: '_blank',
                    rel: 'noopener noreferrer', className: 'social-btn', title: link.name,
                  }, e(SvgIcon, { path: link.icon, size: 18 }))
                )
              ),
              e('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' } },
                e('a', { href: '#contact', className: 'work-btn' }, 'Work with me →'),
                e('div', { className: 'download-wrapper' },
                  e('button', {
                    onClick: () => setShowResumeModal(true),
                    className: 'download-btn', 'aria-label': 'View Resume'
                  },
                    e(DownloadIcon, null),
                    e('span', { className: 'download-text' }, 'RESUME')
                  )
                )
              )
            ),
          ),
          m('div', { variants: fadeUp, className: 'hero-right' },
            e('div', { className: 'floating-icon icon-1' }, '💻'),
            e('div', { className: 'floating-icon icon-2' }, '⚙️'),
            e('div', { className: 'floating-icon icon-3' }, '🐍'),
            e('div', { className: 'floating-icon icon-4' }, '☕'),
            e('div', { className: 'info-card' },
              e('p', { className: 'info-card-text' },
                '3rd-year ',
                e('span', { className: 'highlight' }, 'B.Tech CSE'),
                ' student at LPU — passionate about building impactful software, solving algorithmic challenges, and exploring AI/ML frontiers.'
              )
            )
          ),
        ),
      ),
    ),
    // Resume Modal
    e(AnimatePresence, null,
      showResumeModal && e(motion.div, {
        key: 'resume-modal-overlay',
        initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 },
        style: {
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px'
        },
        onClick: () => setShowResumeModal(false)
      },
        e('button', {
          style: {
            position: 'absolute', top: '24px', right: '32px',
            background: 'none', border: 'none', color: 'white', fontSize: '2.5rem',
            cursor: 'pointer', lineHeight: 1
          },
          onClick: () => setShowResumeModal(false)
        }, '×'),
        e(motion.div, {
          key: 'resume-modal-content',
          initial: { scale: 0.95, opacity: 0, y: 20 },
          animate: { scale: 1, opacity: 1, y: 0 },
          exit: { scale: 0.95, opacity: 0, y: 20 },
          transition: { type: 'spring', damping: 25, stiffness: 300 },
          style: {
            width: '100%', maxWidth: '700px', height: '85vh',
            background: 'var(--dark-2)', border: '2px solid var(--cyan)',
            boxShadow: '12px 12px 0 #000', display: 'flex', flexDirection: 'column'
          },
          onClick: (ev) => ev.stopPropagation()
        },
          e('div', { style: { padding: '16px 24px', borderBottom: '2px solid #1e2a3a', display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
            e('h3', { style: { fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--cyan)', textTransform: 'uppercase' } }, 'KSHITIJ LODHI — RESUME'),
            e('div', { style: { display: 'flex', gap: '16px', alignItems: 'center' } },
              e('a', {
                href: 'Resume/Kshitij_Lodhi_CV.docx',
                download: 'Kshitij_Lodhi_CV.docx',
                style: {
                  background: 'var(--cyan)', color: 'var(--dark)', padding: '6px 14px',
                  fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 'bold',
                  textDecoration: 'none', border: '2px solid #000', boxShadow: '2px 2px 0 #000'
                }
              }, 'DOWNLOAD ⬇'),
              e('button', {
                style: { background: 'none', border: 'none', color: 'var(--grey)', fontSize: '1.2rem', cursor: 'pointer' },
                onClick: () => setShowResumeModal(false), 'aria-label': 'Close'
              }, 'ESC')
            )
          ),
          e('div', {
            style: {
              flex: 1, padding: '24px', display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', overflow: 'auto',
              fontFamily: 'var(--font-body)', color: 'var(--light)', gap: '0'
            }
          },
            e('div', {
              style: {
                width: '100%', maxWidth: '580px', background: 'var(--dark-3)',
                border: '1px solid #1e2a3a', padding: '32px', fontSize: '0.75rem', lineHeight: '1.8'
              }
            },
              e('h1', { style: { fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--cyan)', marginBottom: '4px' } }, 'KSHITIJ LODHI'),
              e('p', { style: { color: 'var(--grey)', marginBottom: '16px', fontSize: '0.7rem' } },
                '📧 kshitijlodhi2005@gmail.com  |  📱 9193082745'
              ),
              e('p', { style: { color: 'var(--grey)', marginBottom: '20px', fontSize: '0.7rem' } },
                '🔗 linkedin.com/in/kshitij-lodhi  |  💻 github.com/Kshitij757'
              ),
              e('hr', { style: { borderColor: '#1e2a3a', marginBottom: '16px' } }),
              e('h3', { style: { color: 'var(--cyan)', fontFamily: 'var(--font-display)', fontSize: '0.8rem', marginBottom: '8px', textTransform: 'uppercase' } }, 'Education'),
              e('p', { style: { color: 'var(--light)', marginBottom: '4px' } }, 'B.Tech CSE — Lovely Professional University (CGPA: 6.5) | Aug\'23–Present'),
              e('p', { style: { color: 'var(--grey)', marginBottom: '12px', fontSize: '0.7rem' } }, 'Intermediate PCM 90% — Achievers Home Public School | Matriculation 85%'),
              e('hr', { style: { borderColor: '#1e2a3a', marginBottom: '16px' } }),
              e('h3', { style: { color: 'var(--cyan)', fontFamily: 'var(--font-display)', fontSize: '0.8rem', marginBottom: '8px', textTransform: 'uppercase' } }, 'Skills'),
              e('p', { style: { color: 'var(--grey)' } }, 'C++, Python, Java, JavaScript | HTML, CSS, Pandas, NumPy | MySQL, Power BI, Git, GitHub'),
              e('hr', { style: { borderColor: '#1e2a3a', margin: '16px 0' } }),
              e('h3', { style: { color: 'var(--cyan)', fontFamily: 'var(--font-display)', fontSize: '0.8rem', marginBottom: '8px', textTransform: 'uppercase' } }, 'Projects'),
              e('p', null, '→ Real-Time CPU Scheduler (Apr\'25)'),
              e('p', null, '→ Pet Breed Recommender GenAI (Feb\'25)'),
              e('p', { style: { marginBottom: '16px' } }, '→ Snake Game Java (Apr\'24)'),
              e('p', { style: { color: 'var(--grey)', fontSize: '0.7rem', textAlign: 'center', marginTop: '16px' } }, '[ Download .docx for full details ]')
            )
          )
        )
      )
    )
  );
}

// ════════════════════════════════════════════════
// MARQUEE
// ════════════════════════════════════════════════

function Marquee({ reverse = false, dark = false }) {
  const items = [...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS];
  return e('div', { className: `marquee-wrap ${dark ? 'dark-marquee' : ''}` },
    e('div', { className: `marquee-track ${reverse ? 'reverse' : ''}` },
      ...items.map((word, i) =>
        e('span', { key: i, className: 'marquee-item' },
          word, e('span', { className: 'marquee-dot' })
        )
      )
    )
  );
}

// ════════════════════════════════════════════════
// ABOUT
// ════════════════════════════════════════════════

function AboutSection() {
  return e(motion.section, {
    id: 'about', className: 'section about',
    initial: 'hidden', whileInView: 'visible',
    viewport: { once: true, margin: '-80px' }, variants: stagger,
  },
    e('div', { className: 'container' },
      m('div', { variants: fadeUp, className: 'section-title' },
        e('span', { className: 'num' }, '01'), 'ABOUT ME'
      ),
      m('div', { variants: fadeUp, className: 'stats-grid' },
        ...[
          { num: 2, suffix: '+', label: 'YEARS CODING' },
          { num: PROJECTS.length, suffix: '+', label: 'PROJECTS BUILT' },
          { num: CERTIFICATIONS.length, suffix: '', label: 'CERTIFICATIONS' },
        ].map((s, i) =>
          e('div', { key: i, className: 'stat-card' },
            e('div', { className: 'stat-number' }, e(AnimatedCounter, { target: s.num }), s.suffix),
            e('div', { className: 'stat-label' }, s.label),
          )
        )
      ),
      m('div', { variants: fadeUp, className: 'skills-grid' },
        ...Object.entries(SKILLS).map(([category, skills]) =>
          e('div', { key: category, className: 'skill-group' },
            e('div', { className: 'skill-group-title' }, category),
            e('div', { className: 'skill-tags' },
              ...skills.map(skill => e('span', { key: skill, className: 'skill-tag' }, skill))
            )
          )
        )
      )
    )
  );
}

// ════════════════════════════════════════════════
// PROJECTS
// ════════════════════════════════════════════════

function ProjectsSection() {
  return e(motion.section, {
    id: 'projects', className: 'section',
    initial: 'hidden', whileInView: 'visible',
    viewport: { once: true, margin: '-80px' }, variants: stagger,
  },
    e('div', { className: 'container' },
      m('div', { variants: fadeUp, className: 'section-title' },
        e('span', { className: 'num' }, '02'), 'PROJECTS'
      ),
      ...PROJECTS.map((proj, idx) =>
        m('div', { key: idx, variants: fadeUp, className: 'project-card' },
          e('div', { className: 'project-num' }, String(idx + 1).padStart(2, '0')),
          e('div', null,
            e('div', { style: { display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' } },
              e('h3', { className: 'project-title', style: { margin: 0 } }, proj.title),
              e('span', { style: { color: 'var(--grey)', fontSize: '0.85rem', fontFamily: 'var(--font-body)', fontWeight: 'bold' } }, proj.date)
            ),
            e('p', { className: 'project-desc' }, proj.description),
            e('div', { className: 'project-tags' },
              ...proj.tech.map(t => e('span', { key: t, className: 'project-tag' }, t))
            )
          ),
          e('div', { style: { display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-end', justifyContent: 'center' } },
            e('a', {
              href: proj.github, target: '_blank', rel: 'noopener noreferrer',
              className: 'project-cta'
            }, 'GITHUB ↗')
          )
        )
      )
    )
  );
}

// ════════════════════════════════════════════════
// LEETCODE
// ════════════════════════════════════════════════

function LeetCodeSection() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Use LeetCode public API via a CORS proxy to fetch stats
    const username = 'Kshitij20_25';
    fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.totalSolved !== undefined) {
          setStats(data);
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return e(motion.section, {
    id: 'leetcode', className: 'section',
    initial: 'hidden', whileInView: 'visible',
    viewport: { once: true, margin: '-80px' }, variants: stagger,
    style: { background: 'var(--dark-2)' }
  },
    e('div', { className: 'container' },
      m('div', { variants: fadeUp, className: 'section-title' },
        e('span', { className: 'num' }, '03'), 'LEETCODE'
      ),
      m('div', { variants: fadeUp },
        e('div', { className: 'leetcode-panel' },
          e('div', { className: 'leetcode-header' },
            e('div', { className: 'leetcode-logo' },
              // LeetCode SVG logo
              e('svg', { width: 32, height: 32, viewBox: '0 0 24 24', fill: 'var(--cyan)' },
                e('path', { d: 'M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z' })
              ),
              e('span', { className: 'leetcode-username' }, '@Kshitij20_25')
            )
          ),
          loading
            ? e('div', { className: 'lc-loading' }, '⟳ Loading LeetCode stats...')
            : error
            ? e('div', null,
                e('div', { className: 'lc-loading', style: { color: 'var(--grey)' } },
                  'Stats unavailable (API limit). Visit profile directly.'
                ),
                e('div', { className: 'leetcode-stats', style: { marginTop: '16px' } },
                  e('div', { className: 'lc-stat easy' }, e('div', { className: 'lc-num' }, '—'), e('div', { className: 'lc-label' }, 'Easy')),
                  e('div', { className: 'lc-stat medium' }, e('div', { className: 'lc-num' }, '—'), e('div', { className: 'lc-label' }, 'Medium')),
                  e('div', { className: 'lc-stat hard' }, e('div', { className: 'lc-num' }, '—'), e('div', { className: 'lc-label' }, 'Hard')),
                )
              )
            : e('div', null,
                e('div', { className: 'lc-total' }, stats.totalSolved),
                e('div', { className: 'lc-total-label' }, 'Problems Solved'),
                e('div', { className: 'leetcode-stats' },
                  e('div', { className: 'lc-stat easy' },
                    e('div', { className: 'lc-num' }, stats.easySolved || 0),
                    e('div', { className: 'lc-label' }, 'Easy')
                  ),
                  e('div', { className: 'lc-stat medium' },
                    e('div', { className: 'lc-num' }, stats.mediumSolved || 0),
                    e('div', { className: 'lc-label' }, 'Medium')
                  ),
                  e('div', { className: 'lc-stat hard' },
                    e('div', { className: 'lc-num' }, stats.hardSolved || 0),
                    e('div', { className: 'lc-label' }, 'Hard')
                  ),
                ),
                stats.ranking && e('div', { style: { color: 'var(--grey)', fontSize: '0.75rem', marginTop: '4px', textAlign: 'center' } },
                  'Ranking: ', e('span', { style: { color: 'var(--cyan)', fontWeight: 'bold' } }, '#' + stats.ranking.toLocaleString())
                )
              ),
          e('div', { style: { marginTop: '20px' } },
            e('a', {
              href: 'https://leetcode.com/u/Kshitij20_25/',
              target: '_blank', rel: 'noopener noreferrer',
              className: 'lc-link'
            }, 'VIEW PROFILE ↗')
          )
        )
      )
    )
  );
}

// ════════════════════════════════════════════════
// TRAINING
// ════════════════════════════════════════════════

function TrainingSection() {
  return e(motion.section, {
    id: 'training', className: 'section',
    initial: 'hidden', whileInView: 'visible',
    viewport: { once: true, margin: '-80px' }, variants: stagger,
  },
    e('div', { className: 'container' },
      m('div', { variants: fadeUp, className: 'section-title' },
        e('span', { className: 'num' }, '04'), 'TRAINING'
      ),
      ...TRAININGS.map((train, idx) =>
        m('div', { key: idx, variants: fadeUp, className: 'project-card' },
          e('div', { className: 'project-num' }, String(idx + 1).padStart(2, '0')),
          e('div', null,
            e('div', { style: { display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px', flexWrap: 'wrap' } },
              e('h3', { className: 'project-title', style: { margin: 0 } }, train.title),
              e('span', { style: { color: 'var(--grey)', fontSize: '0.85rem', fontFamily: 'var(--font-body)', fontWeight: 'bold' } }, train.date)
            ),
            e('div', { style: { color: 'var(--cyan)', fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '4px', textTransform: 'uppercase' } }, train.company),
            e('div', { style: { color: 'var(--grey)', fontFamily: 'var(--font-body)', fontSize: '0.75rem', marginBottom: '12px', fontStyle: 'italic' } }, train.role),
            e('p', { className: 'project-desc', style: { margin: '0 0 12px 0' } }, train.description),
            e('div', { className: 'project-tags' },
              ...train.tech.map(t => e('span', { key: t, className: 'project-tag' }, t))
            )
          ),
          e('div', null)
        )
      )
    )
  );
}

// ════════════════════════════════════════════════
// TIMELINE
// ════════════════════════════════════════════════

function TimelineSection() {
  return e(motion.section, {
    id: 'timeline', className: 'section timeline',
    initial: 'hidden', whileInView: 'visible',
    viewport: { once: true, margin: '-80px' }, variants: stagger,
  },
    e('div', { className: 'container' },
      m('div', { variants: fadeUp, className: 'section-title', style: { marginBottom: '8px' } },
        e('span', { className: 'num' }, '05'), 'THE RECORD'
      ),
      m('p', { variants: fadeUp, style: { marginBottom: '48px', color: 'var(--grey)', fontFamily: 'var(--font-body)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' } },
        'Education · Training · Achievements'
      ),
      e('div', { className: 'timeline-line' },
        ...TIMELINE.map((item, idx) =>
          m('div', { key: idx, variants: fadeUp, className: 'timeline-item' },
            e('div', { className: 'timeline-type' }, item.type),
            e('div', { className: 'timeline-title' }, item.title),
            e('div', { className: 'timeline-org' }, item.org),
            e('div', { className: 'timeline-date' }, item.date),
          )
        )
      )
    )
  );
}

// ════════════════════════════════════════════════
// CERTIFICATES
// ════════════════════════════════════════════════

function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const handleEsc = (ev) => { if (ev.key === 'Escape') setSelectedCert(null); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return e(motion.section, {
    id: 'certificates', className: 'section certificates',
    initial: 'hidden', whileInView: 'visible',
    viewport: { once: true, margin: '-80px' }, variants: stagger,
  },
    e('div', { className: 'container' },
      m('div', { variants: fadeUp, className: 'section-title' },
        e('span', { className: 'num' }, '06'), 'CERTIFICATES'
      ),
      e('div', { className: 'cert-grid' },
        ...CERTIFICATIONS.map((cert, idx) =>
          m('div', {
            key: idx, variants: fadeUp, className: 'cert-card',
            onClick: () => cert.file && setSelectedCert(cert),
            style: { cursor: cert.file ? 'pointer' : 'default' }
          },
            e('div', { className: 'cert-bg-num' }, String(idx + 1).padStart(2, '0')),
            e('div', { className: 'cert-title' }, cert.title, cert.file ? e('span', { style: { color: 'var(--cyan)', marginLeft: '8px', fontSize: '0.9em' } }, '↗') : null),
            e('div', { className: 'cert-issuer' }, cert.issuer),
            e('div', { className: 'cert-date' }, cert.date),
          )
        )
      )
    ),
    e(AnimatePresence, null,
      selectedCert && e(motion.div, {
        key: 'cert-modal-overlay',
        initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 },
        style: {
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px'
        },
        onClick: () => setSelectedCert(null)
      },
        e('button', {
          style: { position: 'absolute', top: '24px', right: '32px', background: 'none', border: 'none', color: 'white', fontSize: '2.5rem', cursor: 'pointer', lineHeight: 1 },
          onClick: () => setSelectedCert(null)
        }, '×'),
        e(motion.div, {
          key: 'cert-modal-content',
          initial: { scale: 0.95, opacity: 0, y: 20 },
          animate: { scale: 1, opacity: 1, y: 0 },
          exit: { scale: 0.95, opacity: 0, y: 20 },
          transition: { type: 'spring', damping: 25, stiffness: 300 },
          style: {
            width: '100%', maxWidth: '900px', height: '85vh',
            background: 'var(--dark-2)', border: '2px solid var(--cyan)',
            boxShadow: '12px 12px 0 #000', display: 'flex', flexDirection: 'column'
          },
          onClick: (ev) => ev.stopPropagation()
        },
          e('div', { style: { padding: '16px 24px', borderBottom: '2px solid #1e2a3a', display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
            e('h3', { style: { fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--cyan)', textTransform: 'uppercase' } }, selectedCert.title),
            e('div', { style: { display: 'flex', gap: '16px', alignItems: 'center' } },
              e('a', {
                href: selectedCert.file, download: selectedCert.title + ' Certificate',
                style: { background: 'var(--cyan)', color: 'var(--dark)', padding: '6px 12px', fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 'bold', textDecoration: 'none', border: '2px solid #000', boxShadow: '2px 2px 0 #000' }
              }, 'DOWNLOAD ⬇'),
              e('button', {
                style: { background: 'none', border: 'none', color: 'var(--grey)', fontSize: '1.2rem', cursor: 'pointer' },
                onClick: () => setSelectedCert(null), 'aria-label': 'Close'
              }, 'ESC')
            )
          ),
          e('div', { style: { flex: 1, padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' } },
            e('img', {
              src: selectedCert.file, alt: selectedCert.title,
              style: { maxWidth: '100%', maxHeight: 'calc(100% - 60px)', objectFit: 'contain', borderRadius: '4px' }
            }),
            e('a', {
              href: selectedCert.file, download: selectedCert.title + ' Certificate',
              style: {
                display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '16px',
                padding: '10px 20px', color: 'var(--dark)', background: 'var(--cyan)',
                fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 'bold',
                textDecoration: 'none', textTransform: 'uppercase', border: '2px solid #000', boxShadow: '2px 2px 0 #000'
              }
            }, e(DownloadIcon, null), 'DOWNLOAD CERTIFICATE')
          )
        )
      )
    )
  );
}

// ════════════════════════════════════════════════
// ACHIEVEMENTS
// ════════════════════════════════════════════════

function AchievementsSection() {
  return e(motion.section, {
    id: 'achievements', className: 'section',
    initial: 'hidden', whileInView: 'visible',
    viewport: { once: true, margin: '-80px' }, variants: stagger,
    style: { background: 'var(--dark-3)' }
  },
    e('div', { className: 'container' },
      m('div', { variants: fadeUp, className: 'section-title' },
        e('span', { className: 'num' }, '07'), 'ACHIEVEMENTS'
      ),
      ...ACHIEVEMENTS.map((ach, idx) =>
        m('div', { key: idx, variants: fadeUp, className: 'achievement-card' },
          e('div', { className: 'achievement-icon' }, ach.icon),
          e('div', null,
            e('div', { className: 'achievement-title' }, ach.title),
            e('div', { className: 'achievement-date' }, ach.date),
            e('p', { className: 'achievement-desc' }, ach.description)
          )
        )
      )
    )
  );
}

// ════════════════════════════════════════════════
// CONTACT
// ════════════════════════════════════════════════

function ContactSection() {
  return e(motion.section, {
    id: 'contact', className: 'section contact',
    initial: 'hidden', whileInView: 'visible',
    viewport: { once: true, margin: '-80px' }, variants: stagger,
  },
    e('div', { className: 'container' },
      m('div', { variants: fadeUp, className: 'section-title' },
        e('span', { className: 'num' }, '08'), 'GET IN TOUCH'
      ),
      m('div', { variants: fadeUp, className: 'contact-grid' },
        e('div', null,
          e('div', { className: 'contact-heading' },
            "LET'S BUILD ",
            e('span', { className: 'cyan' }, 'SOMETHING'),
            ' TOGETHER'
          ),
          e('p', { className: 'contact-text' },
            'Open to collaborations, internship opportunities, and interesting engineering challenges. Reach out and let\'s connect!'
          ),
          e('div', { style: { marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' } },
            ...SOCIAL_LINKS.map(link =>
              e('a', {
                key: link.name, href: link.url, target: '_blank', rel: 'noopener noreferrer',
                className: 'social-btn', title: link.name,
              }, e(SvgIcon, { path: link.icon, size: 18 }))
            )
          ),
          e('div', { style: { marginTop: '20px', fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--grey)' } },
            '✉ ',
            e('a', {
              href: 'mailto:kshitijlodhi2005@gmail.com',
              style: { color: 'var(--cyan)', fontWeight: 'bold', textDecoration: 'none' }
            }, 'kshitijlodhi2005@gmail.com')
          ),
          e('div', { style: { marginTop: '8px', fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--grey)' } },
            '📱 9193082745'
          )
        ),
        e('form', {
          className: 'contact-form',
          action: 'https://formspree.io/f/kshitijlodhi2005@gmail.com',
          method: 'POST',
        },
          e('input', { type: 'text', name: 'name', className: 'form-input', placeholder: 'YOUR NAME', required: true }),
          e('input', { type: 'email', name: 'email', className: 'form-input', placeholder: 'YOUR EMAIL', required: true }),
          e('textarea', { name: 'message', className: 'form-textarea', placeholder: 'YOUR MESSAGE', required: true }),
          e('button', { type: 'submit', className: 'form-submit' }, 'SEND MESSAGE →')
        )
      )
    )
  );
}

// ════════════════════════════════════════════════
// FOOTER
// ════════════════════════════════════════════════

function Footer() {
  return e('footer', { className: 'footer' },
    e('p', null,
      '© 2025 Kshitij Lodhi. Built with ',
      e('span', { className: 'cyan' }, 'code'),
      ' and ',
      e('span', { className: 'cyan' }, 'passion'),
      '.'
    )
  );
}

// ════════════════════════════════════════════════
// APP
// ════════════════════════════════════════════════

function App() {
  return e(React.Fragment, null,
    e(NavBar),
    e('main', null,
      e(Hero),
      e(Marquee, { reverse: false }),
      e(AboutSection),
      e(Marquee, { reverse: true, dark: true }),
      e(ProjectsSection),
      e(Marquee, { reverse: false }),
      e(LeetCodeSection),
      e(Marquee, { reverse: true, dark: true }),
      e(TrainingSection),
      e(Marquee, { reverse: false }),
      e(TimelineSection),
      e(Marquee, { reverse: true, dark: true }),
      e(CertificatesSection),
      e(AchievementsSection),
      e(ContactSection),
    ),
    e(Footer)
  );
}

createRoot(document.getElementById('root')).render(e(App));
