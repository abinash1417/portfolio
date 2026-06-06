import React from 'react';
import { cvData } from '../utils/cvData';

export default function Timeline() {
  const { education } = cvData;

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education Journey</h2>
        
        {/* Full-width horizontal academic grid */}
        <div className="education-grid-new">
          {education.map((edu, idx) => {
            const isUni = edu.institution.includes("Kelaniya");
            
            return (
              <div key={idx} className="glass education-card-new" id={`edu-card-${idx}`}>
                
                {/* Decorative glowing backnode */}
                <div className="education-glow-accent" />

                <div className="education-card-header">
                  {/* Academic Icons */}
                  <div className="education-icon-box">
                    {isUni ? (
                      // Graduation Cap
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                      </svg>
                    ) : (
                      // School Book / Diploma
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                      </svg>
                    )}
                  </div>
                  
                  <div className="education-header-text">
                    <h3>{edu.institution}</h3>
                    <span className="education-period">{edu.period}</span>
                  </div>
                </div>

                <div className="education-degree-title">{edu.degree}</div>
                <p className="education-details-body">{edu.details}</p>
                
                {/* Academic Highlights Badges */}
                {isUni ? (
                  <div className="education-badges-row">
                    <span className="education-badge-chip uni-badge">Software Architecture</span>
                    <span className="education-badge-chip uni-badge">Algorithms & Structures</span>
                    <span className="education-badge-chip uni-badge">Full-Stack Paradigms</span>
                  </div>
                ) : (
                  <div className="education-badges-row">
                    <span className="education-badge-chip school-badge maths-badge">Maths: A</span>
                    <span className="education-badge-chip school-badge physics-badge">Physics: B</span>
                    <span className="education-badge-chip school-badge chem-badge">Chemistry: B</span>
                  </div>
                )}

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
