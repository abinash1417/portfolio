import React, { useState, useEffect } from 'react';
import { cvData } from '../utils/cvData';

// ──────────────────────────────────────────────────────────────────────────────
// CONTACT FORM — wired to Formspree (free, works on Vercel, no backend needed)
//
// HOW TO ACTIVATE (one-time setup):
//  1. Go to https://formspree.io/  →  create a free account
//  2. Click "New Form" → give it a name → copy your form ID (looks like "xpwzabcd")
//  3. Replace the placeholder below with your real form ID:
//       const FORMSPREE_ID = 'YOUR_FORM_ID_HERE';
//  4. Formspree will forward every submission to kopalachandranabinash@gmail.com
//     (or whatever email you used to sign up with Formspree).
//  5. Verify your email when Formspree sends the confirmation link.
// ──────────────────────────────────────────────────────────────────────────────
const FORMSPREE_ID = 'mwvjpwrk';

export default function Contact() {
  const { phone, email, location, links } = cvData.personalInfo;

  const [localTime, setLocalTime] = useState('');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat([], {
        timeZone: 'Asia/Colombo',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true,
      });
      setLocalTime(formatter.format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) =>
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      if (res.ok) {
        setStatus('sent');
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        const data = await res.json();
        setErrorMsg(data?.errors?.[0]?.message || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  const MediumIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
    </svg>
  );

  return (
    <section id="contact" className="contact-section" style={{ background: 'rgba(6, 9, 19, 0.4)' }}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-wrapper">
          {/* Left panel */}
          <div className="glass contact-info-panel" id="contact-details">
            <div>
              <h3>Let's build something great.</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                I am actively seeking software engineering internships where I can contribute full-stack capabilities,
                REST API architectures, and AI-driven solutions. Drop a line!
              </p>
            </div>

            <div className="contact-details-list">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.19 11.9 19.79 19.79 0 0 1 1.12 3.22 2 2 0 0 1 3.1 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="contact-text">
                  <h4>Call Me</h4>
                  <a href={`tel:${phone}`} id="contact-phone-link">{phone}</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="contact-text">
                  <h4>Email Me</h4>
                  <a href={`mailto:${email}`} id="contact-email-link">{email}</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>{location}</p>
                </div>
              </div>

              {/* Social quick-links */}
              <div className="contact-item">
                <div className="contact-icon" style={{ color: 'var(--primary)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                </div>
                <div className="contact-text">
                  <h4>Find Me Online</h4>
                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.25rem', flexWrap: 'wrap' }}>
                    <a href={links.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontSize: '0.82rem' }}>LinkedIn</a>
                    <a href={links.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', fontSize: '0.82rem' }}>GitHub</a>
                    <a href={links.medium} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontSize: '0.82rem' }}>Medium</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="sri-lanka-card" id="sri-lanka-time-card">
              <div className="location-badge">
                <span style={{ fontSize: '1.25rem' }}>🇱🇰</span>
                <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>Colombo, SL</span>
              </div>
              <div className="live-time-indicator">
                <div className="glow-point" />
                <span style={{ fontFamily: 'monospace', fontWeight: 'bold', color: 'var(--primary)', letterSpacing: '0.05em' }}>
                  {localTime || '00:00:00 AM'}
                </span>
              </div>
            </div>
          </div>

          {/* Right panel: Contact Form */}
          <div className="glass contact-form-panel" id="contact-form-card">


            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="form-name">Name</label>
                <input type="text" id="form-name" name="name" value={formState.name} onChange={handleChange} placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="form-email">Email Address</label>
                <input type="email" id="form-email" name="email" value={formState.email} onChange={handleChange} placeholder="your.email@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="form-message">Message</label>
                <textarea id="form-message" name="message" value={formState.message} onChange={handleChange} placeholder="Tell me about your team and opportunities..." rows="5" required />
              </div>

              <button
                type="submit"
                className="neon-btn"
                style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
                disabled={status === 'sending' || status === 'sent'}
                id="btn-submit-form"
              >
                {status === 'sending' ? (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="glow-point" style={{ animationDuration: '0.6s' }} /> Sending...
                  </span>
                ) : status === 'sent' ? (
                  '✓ Message Sent!'
                ) : (
                  'Send Message'
                )}
              </button>

              {status === 'sent' && (
                <p style={{ color: 'var(--primary)', fontSize: '0.85rem', textAlign: 'center', marginTop: '0.6rem', animation: 'float 3s infinite ease-in-out' }}>
                  Thank you! I'll get back to you as soon as possible. 🎉
                </p>
              )}
              {status === 'error' && (
                <p style={{ color: '#fb7185', fontSize: '0.85rem', textAlign: 'center', marginTop: '0.6rem' }}>
                  ⚠️ {errorMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
