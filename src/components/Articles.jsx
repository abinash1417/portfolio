import React, { useRef, useState } from 'react';

const articles = [
  {
    id: 'aws-deployment',
    platform: 'medium',
    tag: 'Medium',
    tagColor: '#00ab6c',
    title: 'Deploying Your Application to AWS: What Nobody Tells You Before You Start',
    description:
      'A practical guide for developers moving from local to production — covering VPC, EC2 Auto Scaling, RDS in private subnets, S3 + CloudFront, Secrets Manager, and zero-downtime CI/CD deployments.',
    topics: ['AWS', 'EC2', 'RDS', 'S3', 'DevOps'],
    readTime: '8 min read',
    url: 'https://medium.com/@chandrannash281418/deploying-your-application-to-aws-what-nobody-tells-you-before-you-start-4d141a364d66',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <polyline points="8 21 12 17 16 21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 'rag-llm',
    platform: 'dev',
    tag: 'Dev.to',
    tagColor: '#7b5ea7',
    title: 'RAG Explained: How AI Applications Answer From Your Data, Not Their Training',
    description:
      'A deep dive into Retrieval-Augmented Generation — how chunking, vector embeddings, semantic search, and similarity thresholds work together to build accurate, grounded AI applications.',
    topics: ['AI', 'RAG', 'LLM', 'Embeddings', 'Machine Learning'],
    readTime: '10 min read',
    url: 'https://dev.to/abinash1417/how-i-used-rag-to-make-my-ai-pdf-generator-actually-smart-7h4',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
];

const MediumLogo = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.285 7.269a.733.733 0 0 0-.24-.619l-1.77-2.133v-.32h5.498l4.25 9.32 3.736-9.32H21v.319l-1.515 1.451a.45.45 0 0 0-.168.425v10.666a.448.448 0 0 0 .168.425l1.479 1.451v.319h-7.436v-.319l1.532-1.487c.15-.15.15-.194.15-.425V8.401L10.95 19.218h-.575L5.417 8.401v7.249c-.041.305.06.612.275.833L7.6 18.713v.319H2v-.319l1.907-2.23a.963.963 0 0 0 .253-.833V7.269z" />
  </svg>
);

const DevToLogo = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.29zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
  </svg>
);

function ArticleCard({ article }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
  const [glare, setGlare] = useState({ opacity: 0, left: '0px', top: '0px' });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const nx = (x / rect.width) - 0.5;
    const ny = (y / rect.height) - 0.5;
    setTransform(`perspective(1000px) rotateX(${-ny * 4}deg) rotateY(${nx * 4}deg) scale(1.02)`);
    setGlare({ opacity: 0.1, left: `${x}px`, top: `${y}px` });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
    setGlare({ opacity: 0, left: '0px', top: '0px' });
  };

  return (
    <div
      ref={cardRef}
      className="glass"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        position: 'relative',
        borderRadius: '16px',
        padding: '1.8rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
        overflow: 'hidden',
      }}
    >
      {/* Glare */}
      <div style={{
        position: 'absolute', width: '160px', height: '160px',
        background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none', transform: 'translate(-50%,-50%)',
        transition: 'opacity 0.2s ease-out', zIndex: 0, ...glare,
      }} />

      {/* Top row: platform badge + read time */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
          background: article.platform === 'medium' ? 'rgba(0,171,108,0.12)' : 'rgba(123,94,167,0.12)',
          color: article.tagColor,
          border: `1px solid ${article.tagColor}33`,
          borderRadius: '20px', padding: '0.25rem 0.75rem',
          fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.03em',
          fontFamily: 'var(--font-heading)',
        }}>
          {article.platform === 'medium' ? <MediumLogo /> : <DevToLogo />}
          {article.tag}
        </span>
        <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{article.readTime}</span>
      </div>

      {/* Icon + Title */}
      <div style={{ display: 'flex', gap: '0.9rem', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
        <div style={{
          width: '46px', height: '46px', borderRadius: '12px', flexShrink: 0,
          background: 'linear-gradient(135deg, var(--primary)22, var(--secondary)22)',
          border: '1px solid var(--border-glass)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--primary)',
        }}>
          {article.icon}
        </div>
        <h3 style={{
          fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700,
          color: 'var(--text-primary)', lineHeight: 1.4, margin: 0,
        }}>
          {article.title}
        </h3>
      </div>

      {/* Description */}
      <p style={{
        color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.65,
        margin: 0, position: 'relative', zIndex: 1,
      }}>
        {article.description}
      </p>

      {/* Topic pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', position: 'relative', zIndex: 1 }}>
        {article.topics.map(t => (
          <span key={t} style={{
            background: 'var(--bg-card)', border: '1px solid var(--border-glass)',
            borderRadius: '6px', padding: '0.2rem 0.6rem',
            fontSize: '0.72rem', color: 'var(--text-muted)',
            fontFamily: 'var(--font-heading)', fontWeight: 600,
          }}>{t}</span>
        ))}
      </div>

      {/* Read button */}
      <div style={{ marginTop: 'auto', position: 'relative', zIndex: 1 }}>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-cta-btn demo-btn"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          Read Article
        </a>
      </div>
    </div>
  );
}

export default function Articles() {
  return (
    <section id="articles" className="about-section articles-section section-with-border" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container">
        <h2 className="section-title">Published Articles</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
          gap: '1.5rem',
          maxWidth: '900px',
          margin: '2.5rem auto 0',
        }}>
          {articles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
