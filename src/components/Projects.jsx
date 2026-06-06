import React, { useRef, useState } from 'react';
import { cvData } from '../utils/cvData';
import { getTechIcon } from '../utils/techIcons';

function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
  const [glareStyle, setGlareStyle] = useState({ opacity: 0, left: '0px', top: '0px' });
  const [customImg, setCustomImg] = useState(null);
  const [imgErr, setImgErr] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const nx = (x / rect.width) - 0.5;
    const ny = (y / rect.height) - 0.5;
    setTransformStyle(`perspective(1000px) rotateX(${-ny * 5}deg) rotateY(${nx * 5}deg) scale(1.02)`);
    setGlareStyle({ opacity: 0.12, left: `${x}px`, top: `${y}px` });
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
    setGlareStyle({ opacity: 0, left: '0px', top: '0px' });
  };

  const handleImgUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const r = new FileReader();
      r.onload = ev => { setCustomImg(ev.target.result); setImgErr(false); };
      r.readAsDataURL(file);
    }
  };

  const hasDemo = project.demo && project.demoType;
  const displayImg = customImg || project.image;
  const showPlaceholder = (!customImg && imgErr) || (!customImg && !project.image);

  return (
    <div
      ref={cardRef}
      className="glass project-card-compact"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle, position: 'relative' }}
      id={`project-card-${project.id}`}
    >
      {/* Glare */}
      <div style={{
        position:'absolute', width:'150px', height:'150px',
        background:'radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)',
        borderRadius:'50%', pointerEvents:'none', transform:'translate(-50%,-50%)',
        transition:'opacity 0.2s ease-out', zIndex:0, ...glareStyle
      }} />

      {/* Project image */}
      <div className="project-graphic-frame" style={{ height:'210px', overflow:'hidden', borderRadius:'10px', marginBottom:'0.85rem', position:'relative' }}>
        {!showPlaceholder ? (
          <img
            src={displayImg}
            alt={project.title}
            onError={() => { if (!customImg) setImgErr(true); }}
            style={{ width:'100%', height:'100%', objectFit:'cover', display:'block', transition:'transform 0.4s ease' }}
            className="project-real-img"
          />
        ) : (
          /* Upload placeholder */
          <label
            htmlFor={`proj-img-${project.id}`}
            className="project-img-upload-placeholder"
            title="Click to upload project screenshot"
          >
            <div className="proj-upload-inner">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity:0.5 }}>
                <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <span style={{ fontSize:'0.75rem', opacity:0.6, marginTop:'6px' }}>Add screenshot</span>
            </div>
          </label>
        )}

        {/* Camera icon overlay (always visible on hover when image exists) */}
        {!showPlaceholder && (
          <label
            htmlFor={`proj-img-${project.id}`}
            className="project-img-change-btn"
            title="Change image"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
            </svg>
            Change
          </label>
        )}

        <input id={`proj-img-${project.id}`} type="file" accept="image/*" style={{ display:'none' }} onChange={handleImgUpload} />

        {project.aiFeatures && (
          <span className="badge badge-ai-mini" style={{ position:'absolute', top:'8px', right:'8px' }}>AI</span>
        )}
      </div>

      {/* Header */}
      <div className="project-compact-header">
        <div style={{ display:'flex', alignItems:'center', gap:'0.4rem', flexWrap:'wrap' }}>
          <h3 className="project-compact-title">{project.title}</h3>
        </div>
        <span className="project-compact-category">{project.type} · {project.period}</span>
      </div>

      <p className="project-compact-desc">{project.highlights[0]}</p>

      <div className="project-compact-tech-icons">
        {project.technologies.map((tech) => (
          <div key={tech} className="tech-icon-wrap">
            {getTechIcon(tech, 18)}
            <span className="tech-icon-tooltip">{tech}</span>
          </div>
        ))}
      </div>

      <div className="project-compact-ctas-row">
        {hasDemo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-cta-btn demo-btn"
            id={`demo-btn-${project.id}`}
          >
            {project.demoType === 'youtube' ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            )}
            {project.demoType === 'youtube' ? 'Watch Demo' : 'Live Demo'}
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-cta-btn code-btn"
          style={{ flex: hasDemo ? 1 : '1 1 100%' }}
          id={`github-btn-${project.id}`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
          Repository
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const { projects } = cvData;
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid-2col">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
