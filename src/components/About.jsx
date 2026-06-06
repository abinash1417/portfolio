import React, { useRef } from 'react';
import aboutAvatar from '../assets/about-avatar.jpeg';

export default function About() {
  const sectionRef = useRef(null);

  return (
    <section id="about" className="about-section section-with-border" ref={sectionRef}>
      <style>{`
        .about-bio-text {
          color: var(--text-secondary);
          line-height: 1.85;
          font-size: 0.97rem;
          margin-bottom: 1rem;
        }
        .about-bio-text strong { color: var(--text-primary); font-weight: 600; }
        .about-bio-text.secondary {
          color: var(--text-tertiary, rgba(148,163,184,0.85));
          font-size: 0.93rem;
        }

        .about-avatar-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        .about-avatar-wrap::before {
          content: '';
          position: absolute;
          inset: -18px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--accent, #6366f1) 0%, transparent 70%);
          opacity: 0.18;
          animation: avatarPulse 3s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes avatarPulse {
          0%, 100% { opacity: 0.13; transform: scale(0.97); }
          50%       { opacity: 0.26; transform: scale(1.04); }
        }

        @keyframes avatarFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }

        .about-avatar-img {
          position: relative;
          z-index: 1;
          width: clamp(220px, 80%, 340px);
          border-radius: 50% 50% 48% 48% / 55% 55% 45% 45%;
          object-fit: cover;
          object-position: top center;
          aspect-ratio: 3 / 4;
          animation: avatarFloat 4s ease-in-out infinite;
          filter: drop-shadow(0 12px 36px rgba(99,102,241,0.28));
          transition: filter 0.3s;
        }

        body.light-theme .about-avatar-img {
          filter: drop-shadow(0 12px 28px rgba(79,70,229,0.22));
        }

        .about-avatar-img:hover {
          filter: drop-shadow(0 16px 48px rgba(99,102,241,0.50));
          animation-play-state: paused;
        }

        .about-avatar-ring {
          position: absolute;
          width: clamp(260px, 92%, 390px);
          aspect-ratio: 1;
          border-radius: 50%;
          border: 1.5px dashed rgba(99,102,241,0.25);
          animation: ringRotate 18s linear infinite;
          pointer-events: none;
          z-index: 0;
        }
        @keyframes ringRotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .about-avatar-ring::after {
          content: '';
          position: absolute;
          top: -4px;
          left: 50%;
          translate: -50% 0;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent, #6366f1);
          box-shadow: 0 0 10px 3px rgba(99,102,241,0.55);
        }
      `}</style>

      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-v6-grid">

          {/* ══════ LEFT — Avatar image ══════ */}
          <div
            className="about-v6-left"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <div className="about-avatar-wrap">
              <div className="about-avatar-ring" />
              <img
                src={aboutAvatar}
                alt="Abinash – Software Engineer"
                className="about-avatar-img"
              />
            </div>
          </div>

          {/* ══════ RIGHT — Bio text ══════ */}
          <div className="about-v6-right">
            <div className="about-v6-bio">
              <p className="about-bio-text">
                I'm a third-year <strong>Software Engineering undergraduate</strong> at the University of
                Kelaniya, building high-performance backends with <strong>Spring Boot</strong> and{' '}
                <strong>Node.js</strong>, responsive frontends with <strong>React</strong> and{' '}
                <strong>Next.js</strong>, and containerized deployments using <strong>Docker</strong>.
                I focus on designing clean, scalable architectures and delivering reliable,
                production-ready applications.
              </p>
              <p className="about-bio-text secondary">
                I've developed <strong>AI-driven document search systems</strong>, full-featured
                e-commerce platforms with <strong>JWT-based role access control</strong>, and real-time
                hospital dispatch consoles. By applying <strong>Object-Oriented Programming (OOP)</strong>,{' '}
                <strong>SOLID principles</strong>, and clean architecture practices, I create
                maintainable, extensible, and testable software while following industry best practices
                for scalability, reliability, and long-term maintainability.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
