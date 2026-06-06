import React from 'react';
import { cvData } from '../utils/cvData';

// Proper Medium "M" wordmark-style icon
const MediumIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.285 7.269a.733.733 0 0 0-.24-.619l-1.77-2.133v-.32h5.498l4.25 9.32 3.736-9.32H21v.319l-1.515 1.451a.45.45 0 0 0-.168.425v10.666a.448.448 0 0 0 .168.425l1.479 1.451v.319h-7.436v-.319l1.532-1.487c.15-.15.15-.194.15-.425V8.401L10.95 19.218h-.575L5.417 8.401v7.249c-.041.305.06.612.275.833L7.6 18.713v.319H2v-.319l1.907-2.23a.963.963 0 0 0 .253-.833V7.269z"/>
  </svg>
);

export default function Footer() {
  const { fullName, links, email } = cvData.personalInfo;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrap">
      <div className="container">
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--primary), var(--secondary), transparent)',
          marginBottom: '2.5rem', opacity: 0.5,
        }} />

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
              ABINASH<span style={{ color: 'var(--primary)' }}>.</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', maxWidth: '260px', lineHeight: 1.6 }}>
              Software Engineering undergraduate building high-performance full-stack systems.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {['#home', '#about', '#skills', '#projects', '#articles', '#contact'].map(href => (
              <a key={href} href={href} style={{
                color: 'var(--text-muted)', fontSize: '0.85rem', textDecoration: 'none',
                transition: 'color 0.2s', fontFamily: 'var(--font-heading)', fontWeight: 500,
              }}
              onMouseEnter={e => e.target.style.color = 'var(--primary)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
              >{href.replace('#', '').charAt(0).toUpperCase() + href.slice(2)}</a>
            ))}
          </div>

          <div className="footer-socials-row" style={{ marginBottom: 0 }}>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-node" title="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="footer-social-node" title="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
            <a href={links.medium} target="_blank" rel="noopener noreferrer" className="footer-social-node" title="Medium">
              <MediumIcon />
            </a>
            <a href={`mailto:${email}`} className="footer-social-node" title="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
            <a href="https://wa.me/94764610649" target="_blank" rel="noopener noreferrer" className="footer-social-node whatsapp-node" title="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </a>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--border-glass)', paddingTop: '1.25rem',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
        }}>
          <p className="copyright-text" style={{ margin: 0 }}>
            &copy; {currentYear} <span className="highlight-footer">{fullName}</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
