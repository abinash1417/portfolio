import React, { useState, useEffect, useRef } from 'react';
import Canvas3D from './components/Canvas3D';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    if (theme === 'light') document.body.classList.add('light-theme');
    else document.body.classList.remove('light-theme');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setShowBackToTop(scrollTop > 400);
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'articles', 'contact'];
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // Scroll-triggered section entrance animations — re-fires on every enter AND leave
  useEffect(() => {
    const sel = [
      '.about-section','.education-section','.skills-section',
      '.projects-section','.contact-section','.github-activity-section'
    ].join(',');
    const targets = document.querySelectorAll(sel);
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('section-visible');
        else                  e.target.classList.remove('section-visible');
      });
    }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'articles', label: 'Articles' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <Canvas3D />

      <header className="header-nav" id="main-header">
        <div style={{
          position: 'absolute', top: 0, left: 0, height: '3px',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
          boxShadow: '0 0 10px var(--primary)',
          transition: 'width 0.1s linear',
          zIndex: 101,
          borderRadius: '0 2px 2px 0'
        }} />

        <div className="container nav-container">
          <a href="#home" className="logo" id="nav-logo" onClick={closeMenu}>
            ABINASH<span>.</span>
          </a>

          <ul className={`nav-menu ${menuOpen ? 'mobile-active' : ''}`} style={{
            display: menuOpen ? 'flex' : undefined,
            flexDirection: menuOpen ? 'column' : undefined,
            position: menuOpen ? 'fixed' : undefined,
            top: menuOpen ? '80px' : undefined,
            left: menuOpen ? '0' : undefined,
            width: menuOpen ? '100%' : undefined,
            background: menuOpen ? 'var(--bg-deep)' : undefined,
            padding: menuOpen ? '2rem' : undefined,
            borderBottom: menuOpen ? '1px solid var(--border-glass)' : undefined,
            gap: menuOpen ? '1.5rem' : undefined,
            zIndex: menuOpen ? 99 : undefined
          }} id="nav-menu-list">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className={`nav-link ${activeSection === id ? 'nav-link-active' : ''}`} onClick={closeMenu} id={`link-${id}`}>{label}</a>
              </li>
            ))}
            <li>
              <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme" id="theme-toggler-btn">
                {theme === 'dark' ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                )}
              </button>
            </li>
          </ul>

          <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu" style={{ display: 'none' }} id="menu-hamburger-btn">
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </header>

      <main style={{ position: 'relative', zIndex: 2 }}>
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Articles />
        <Contact />
      </main>

      <Footer />

      {showBackToTop && (
        <a href="#home" className="back-to-top-fab" title="Back to top">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"/>
          </svg>
        </a>
      )}

      <style>{`
        @media (max-width: 968px) {
          .mobile-toggle { display: block !important; }
          .nav-menu { display: none !important; }
          .nav-menu.mobile-active { display: flex !important; animation: slideDown 0.3s ease forwards; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-link-active { color: var(--primary) !important; }
        .nav-link-active::after { width: 100% !important; }
        .back-to-top-fab {
          position: fixed; bottom: 2rem; right: 2rem;
          width: 48px; height: 48px; border-radius: 50%;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: #fff; display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 20px var(--primary-glow), 0 4px 16px rgba(0,0,0,0.4);
          z-index: 200; text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: fadeInUp 0.3s ease;
        }
        .back-to-top-fab:hover { transform: translateY(-4px) scale(1.1); box-shadow: 0 0 30px var(--primary), 0 8px 24px rgba(0,0,0,0.4); }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </>
  );
}
