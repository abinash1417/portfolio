import React from 'react';
import { getTechIcon } from '../utils/techIcons';

const combinedInsights = [
  { label: 'OOP & SOLID Principles',           icon: '🧱' },
  { label: 'REST APIs & JWT Auth',              icon: '🔐' },
  { label: 'Data Structures & Algorithms',      icon: '🧩' },
  { label: 'CI/CD & Role-Based Access',         icon: '⚙️' },
  { label: 'Clean Code & Problem Solving',      icon: '✨' },
  { label: 'Team Collaboration & Adaptability', icon: '🤝' },
];

const groups = [
  {
    id: 'languages', label: 'Languages',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    accent: 'var(--primary)',
    skills: [
      { name: 'Java',       level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'Python',     level: 75 },
      { name: 'C',          level: 70 },
      { name: 'HTML',       level: 95 },
      { name: 'CSS',        level: 90 },
    ],
  },
  {
    id: 'frameworks', label: 'Frameworks',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
    accent: 'var(--secondary)',
    skills: [
      { name: 'Spring Boot', level: 90 },
      { name: 'React.js',    level: 95 },
      { name: 'Node.js',     level: 85 },
      { name: 'Express.js',  level: 85 },
      { name: 'Next.js',     level: 80 },
    ],
  },
  {
    id: 'databases', label: 'Databases',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    accent: 'var(--accent)',
    skills: [
      { name: 'MySQL',   level: 85 },
      { name: 'MongoDB', level: 80 },
    ],
  },
  {
    id: 'cloud-ai', label: 'Cloud & AI',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
    accent: '#a78bfa',
    skills: [
      { name: 'AWS',        level: 70 },
      { name: 'Cloudinary', level: 80 },
      { name: 'Groq AI',    level: 85 },
    ],
  },
  {
    id: 'devops', label: 'DevOps & Tools',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
    accent: '#f59e0b',
    skills: [
      { name: 'Git & GitHub',   level: 95 },
      { name: 'Docker',         level: 80 },
      { name: 'Jenkins',        level: 75 },
      { name: 'GitHub Actions', level: 75 },
      { name: 'Postman',        level: 90 },
    ],
  },
];

const renderSkillCard = (skill) => (
  <div key={skill.name} className="skill-icon-card">
    <div className="skill-icon-wrapper">{getTechIcon(skill.name, 28)}</div>
    <span className="skill-label-name">{skill.name}</span>
    <span className="skill-level-indicator">{skill.level}%</span>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="skills-section section-with-border">
      <style>{`
        .skills-all-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 900px) {
          .skills-all-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .skills-all-grid { grid-template-columns: 1fr; }
        }
        .skills-insights-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .insights-chip-grid {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
        }
      `}</style>
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>

        <div className="skills-all-grid">
          {/* Row 1: Languages, Frameworks, Databases */}
          {/* Row 2: Cloud & AI, DevOps & Tools, Core Concepts & Soft Skills */}
          {groups.map((group) => (
            <div
              key={group.id}
              className="glass skill-group-card"
              id={`skills-${group.id}`}
              style={{ '--group-accent': group.accent }}
            >
              <div className="skill-group-accent-bar" />
              <h3 className="group-title">
                <span style={{ color: group.accent }}>{group.icon}</span>
                {group.label}
              </h3>
              <div className="skills-icons-subgrid">
                {group.skills.map(renderSkillCard)}
              </div>
            </div>
          ))}

          {/* 6th card — Core Concepts & Soft Skills */}
          <div
            className="glass skill-group-card skills-insights-card"
            style={{ '--group-accent': '#34d399' }}
          >
            <div className="skill-group-accent-bar" />
            <h3 className="group-title">
              <span style={{ color: '#34d399' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                </svg>
              </span>
              Concepts &amp; Soft Skills
            </h3>
            <div className="insights-chip-grid">
              {combinedInsights.map((item) => (
                <div key={item.label} className="soft-skill-chip" style={{ padding: '0.45rem 0.75rem' }}>
                  <span className="soft-skill-icon">{item.icon}</span>
                  <span className="soft-skill-name" style={{ fontSize: '0.8rem' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
