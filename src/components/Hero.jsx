import React, { useState, useEffect, useRef } from 'react';
import { cvData } from '../utils/cvData';

function HexGrid() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    const HEX_SIZE = 36, H_SPACING = HEX_SIZE * Math.sqrt(3), V_SPACING = HEX_SIZE * 1.5;
    let t = 0;
    const hexPath = (cx, cy, size) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6;
        i === 0 ? ctx.moveTo(cx + size * Math.cos(angle), cy + size * Math.sin(angle))
                : ctx.lineTo(cx + size * Math.cos(angle), cy + size * Math.sin(angle));
      }
      ctx.closePath();
    };
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.008;
      const cols = Math.ceil(canvas.width / H_SPACING) + 2;
      const rows = Math.ceil(canvas.height / V_SPACING) + 2;
      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          const offset = row % 2 === 0 ? 0 : H_SPACING / 2;
          const cx = col * H_SPACING + offset, cy = row * V_SPACING;
          const dist = Math.sqrt((cx - canvas.width * 0.65) ** 2 + (cy - canvas.height * 0.5) ** 2);
          const wave = Math.sin(dist * 0.018 - t * 1.8) * 0.5 + 0.5;
          const alpha = wave * 0.22 + 0.04;
          hexPath(cx, cy, HEX_SIZE - 2);
          if (wave > 0.65) { ctx.fillStyle = `rgba(99,102,241,${wave * 0.09})`; ctx.fill(); }
          ctx.strokeStyle = `rgba(99,102,241,${alpha})`; ctx.lineWidth = 0.9; ctx.stroke();
          if (wave > 0.82 && (row * cols + col) % 7 === 0) {
            hexPath(cx, cy, HEX_SIZE - 2);
            ctx.strokeStyle = `rgba(34,211,238,${alpha * 1.6})`; ctx.lineWidth = 1.2; ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(render);
    };
    render();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} />;
}

const ROLES = [
  { label: 'Backend Architect',    color: '#22d3ee' },
  { label: 'AI Solutions Builder', color: '#fb7185' },
  { label: 'Software Engineer',    color: '#a3e635' },
  { label: 'Full-Stack Developer', color: '#818cf8' },
];

function WordFlip() {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState('visible');
  useEffect(() => {
    const HOLD = 2400, EXIT = 400, ENTER = 400;
    let timer;
    if (phase === 'visible')   timer = setTimeout(() => setPhase('exit'), HOLD);
    else if (phase === 'exit') timer = setTimeout(() => { setIdx(i => (i + 1) % ROLES.length); setPhase('enter'); }, EXIT);
    else                       timer = setTimeout(() => setPhase('visible'), ENTER);
    return () => clearTimeout(timer);
  }, [phase]);
  const role = ROLES[idx];
  return (
    <div className="word-flip-row" style={{ marginBottom: '2rem' }}>
      <span className="word-flip-prefix">I'm a </span>
      <span className={`word-flip-word word-flip-${phase}`} style={{ color: role.color, '--flip-color': role.color }}>
        {role.label}
      </span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SPRING BOOT CODE TYPER — real Java/Spring code from Abinash's
   actual projects: ElectroMart, Hospital App, PDF Chatbot
═══════════════════════════════════════════════════════════════ */
const SPRING_PAIRS = [
  {
    line1: { prefix: '>', text: '@RestController @RequestMapping("/api/products")', color: '#86efac', glow: '#22c55e' },
    line2: { prefix: ' ', text: 'public class ProductController { // ElectroMart', color: '#6ee7b7', glow: '#10b981' },
  },
  {
    line1: { prefix: '>', text: '@PostMapping("/auth/login") // JWT Authentication', color: '#93c5fd', glow: '#3b82f6' },
    line2: { prefix: ' ', text: 'ResponseEntity<AuthResponse> login(@RequestBody LoginRequest req)', color: '#818cf8', glow: '#6366f1' },
  },
  {
    line1: { prefix: '>', text: '@PreAuthorize("hasRole(\'ADMIN\')") // Role-Based Access', color: '#c4b5fd', glow: '#8b5cf6' },
    line2: { prefix: ' ', text: 'List<Order> getAllOrders() { return orderService.findAll(); }', color: '#a78bfa', glow: '#7c3aed' },
  },
  {
    line1: { prefix: '>', text: '@Entity @Table(name="appointments") // Hospital App', color: '#67e8f9', glow: '#06b6d4' },
    line2: { prefix: ' ', text: 'private LocalDateTime scheduledAt; // MySQL + JPA', color: '#22d3ee', glow: '#0891b2' },
  },
  {
    line1: { prefix: '>', text: 'SpringApplication.run(ElectroMartApp.class, args);', color: '#f59e0b', glow: '#d97706' },
    line2: { prefix: ' ', text: '// Server started on port 8080 — 0 errors ✓', color: '#fcd34d', glow: '#f59e0b' },
  },
  {
    line1: { prefix: '>', text: '@Service public class GroqAiService { // AI Layer', color: '#fb7185', glow: '#f43f5e' },
    line2: { prefix: ' ', text: 'String getProductAdvice(String query) { /* Groq AI */ }', color: '#fca5a5', glow: '#ef4444' },
  },
];

function FloatingCodeTyper() {
  const [pairIdx, setPairIdx] = useState(0);
  const [line1Chars, setLine1Chars] = useState(0);
  const [line2Chars, setLine2Chars] = useState(0);
  const [phase, setPhase] = useState('type1');
  const phaseRef = useRef('type1');
  const timerRef = useRef(null);

  const pair = SPRING_PAIRS[pairIdx];

  const clearAll = () => { if (timerRef.current) clearTimeout(timerRef.current); };

  useEffect(() => {
    clearAll();
    setLine1Chars(0);
    setLine2Chars(0);
    phaseRef.current = 'type1';
    setPhase('type1');
    let charCount = 0;

    const typeChar = () => {
      if (phaseRef.current === 'type1') {
        charCount++;
        setLine1Chars(charCount);
        if (charCount < pair.line1.text.length) {
          timerRef.current = setTimeout(typeChar, 28);
        } else {
          timerRef.current = setTimeout(() => {
            phaseRef.current = 'type2';
            setPhase('type2');
            charCount = 0;
            timerRef.current = setTimeout(typeChar, 50);
          }, 250);
        }
      } else if (phaseRef.current === 'type2') {
        charCount++;
        setLine2Chars(charCount);
        if (charCount < pair.line2.text.length) {
          timerRef.current = setTimeout(typeChar, 24);
        } else {
          phaseRef.current = 'hold';
          setPhase('hold');
          timerRef.current = setTimeout(() => {
            phaseRef.current = 'fadeout';
            setPhase('fadeout');
            timerRef.current = setTimeout(() => {
              setPairIdx(i => (i + 1) % SPRING_PAIRS.length);
            }, 480);
          }, 2000);
        }
      }
    };

    timerRef.current = setTimeout(typeChar, 60);
    return clearAll;
  }, [pairIdx]);

  const isOut = phase === 'fadeout';

  return (
    <>
      <style>{`
        @keyframes termCursorBlink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes livePulse { 0%,100%{opacity:.6;transform:scale(1)} 50%{opacity:1;transform:scale(1.4)} }
        @keyframes slideUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
      <div style={{
        width: '100%',
        maxWidth: 355,
        marginTop: 16,
        borderRadius: 12,
        overflow: 'hidden',
        background: 'rgba(4,7,18,0.86)',
        border: `1px solid rgba(99,102,241,0.2)`,
        backdropFilter: 'blur(20px)',
        boxShadow: `0 0 0 0.5px rgba(255,255,255,0.04) inset, 0 12px 40px rgba(0,0,0,0.5), 0 0 28px rgba(99,102,241,0.12)`,
        opacity: isOut ? 0 : 1,
        transform: isOut ? 'translateY(6px) scale(0.98)' : 'translateY(0) scale(1)',
        transition: 'opacity 0.42s ease, transform 0.42s ease',
        animation: 'slideUp 0.5s ease',
      }}>

        {/* ── Title bar ── */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 5,
          padding: '7px 12px 6px',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          background: 'rgba(255,255,255,0.02)',
        }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef4444', opacity: 0.8 }}/>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#f59e0b', opacity: 0.8 }}/>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', opacity: 0.8 }}/>
          <span style={{ marginLeft: 8, fontFamily: '"Fira Code","JetBrains Mono",monospace', fontSize: '0.58rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.06em' }}>
            abinash@spring-boot ~ java
          </span>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4 }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 5px #22c55e', animation: 'livePulse 2s ease-in-out infinite' }}/>
            <span style={{ fontFamily: 'monospace', fontSize: '0.5rem', color: 'rgba(255,255,255,0.2)' }}>LIVE</span>
          </div>
        </div>

        {/* ── Code lines ── */}
        <div style={{ padding: '10px 14px 8px', minHeight: 68 }}>

          {/* Line 1 */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: 7, minHeight: 20 }}>
            <span style={{ fontFamily: '"Fira Code",monospace', fontSize: '0.68rem', color: 'rgba(99,102,241,0.55)', flexShrink: 0, marginTop: 1 }}>
              {pair.line1.prefix}
            </span>
            <span style={{
              fontFamily: '"Fira Code","JetBrains Mono","Cascadia Code",monospace',
              fontSize: '0.68rem',
              color: pair.line1.color,
              textShadow: `0 0 12px ${pair.line1.glow}60`,
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all',
              lineHeight: 1.5,
              flex: 1,
            }}>
              {pair.line1.text.slice(0, line1Chars)}
              {phase === 'type1' && (
                <span style={{
                  display: 'inline-block', width: 2, height: 13,
                  background: pair.line1.color, boxShadow: `0 0 7px ${pair.line1.glow}`,
                  borderRadius: 1, marginLeft: 1, verticalAlign: 'middle',
                  animation: 'termCursorBlink 0.6s step-end infinite',
                }}/>
              )}
            </span>
          </div>

          {/* Line 2 — appears after line 1 finishes */}
          {(phase === 'type2' || phase === 'hold' || phase === 'fadeout') && (
            <div style={{
              display: 'flex', alignItems: 'flex-start', gap: 6, minHeight: 20,
              opacity: isOut ? 0 : 1, transition: 'opacity 0.3s ease',
            }}>
              <span style={{ fontFamily: '"Fira Code",monospace', fontSize: '0.68rem', color: 'rgba(255,255,255,0.12)', flexShrink: 0, marginTop: 1 }}>
                {pair.line2.prefix}
              </span>
              <span style={{
                fontFamily: '"Fira Code","JetBrains Mono","Cascadia Code",monospace',
                fontSize: '0.68rem',
                color: pair.line2.color,
                textShadow: `0 0 12px ${pair.line2.glow}60`,
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-all',
                lineHeight: 1.5,
                flex: 1,
              }}>
                {pair.line2.text.slice(0, line2Chars)}
                {phase === 'type2' && (
                  <span style={{
                    display: 'inline-block', width: 2, height: 13,
                    background: pair.line2.color, boxShadow: `0 0 7px ${pair.line2.glow}`,
                    borderRadius: 1, marginLeft: 1, verticalAlign: 'middle',
                    animation: 'termCursorBlink 0.6s step-end infinite',
                  }}/>
                )}
              </span>
            </div>
          )}
        </div>

        {/* ── Status bar ── */}
        <div style={{
          padding: '4px 14px 6px',
          borderTop: '1px solid rgba(255,255,255,0.04)',
          display: 'flex', alignItems: 'center', gap: 6,
          background: `linear-gradient(to right, ${pair.line1.glow}09, transparent)`,
        }}>
          <span style={{ fontFamily: '"Fira Code",monospace', fontSize: '0.52rem', color: 'rgba(255,255,255,0.13)', letterSpacing: '0.04em' }}>
            Spring Boot · Java 17 · Port 8080
          </span>
          <span style={{ marginLeft: 'auto', fontFamily: 'monospace', fontSize: '0.5rem', color: phase === 'hold' ? pair.line1.color : 'rgba(255,255,255,0.12)',
            textShadow: phase === 'hold' ? `0 0 8px ${pair.line1.glow}` : 'none',
            transition: 'color 0.4s, text-shadow 0.4s',
          }}>
            {phase === 'hold' ? '✓ OK' : '...'}
          </span>
        </div>
      </div>
    </>
  );
}

function HeroAvatar({ profileImage, imgFailed, setImgFailed, handlePhoto }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="hero-photo-wrap">
        <div className="hero-photo-ring hero-ring-1" />
        <div className="hero-photo-ring hero-ring-2" />
        <label htmlFor="hero-photo-input" className="hero-photo-frame-new" title="Click to upload photo">
          {profileImage ? (
            <img src={profileImage} alt="Abinash" className="hero-photo-img-new" />
          ) : imgFailed ? (
            <div className="hero-photo-initials-new"><span className="gradient-text">KA</span></div>
          ) : (
            <img src="/images/abinash.jpg" alt="Kopalachandran Abinash" className="hero-photo-img-new" onError={() => setImgFailed(true)} />
          )}
          <div className="hero-photo-hover-overlay-new">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
            </svg>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, marginTop: '4px' }}>Upload</span>
          </div>
        </label>
        <input id="hero-photo-input" type="file" accept="image/*" style={{ display: 'none' }} onChange={handlePhoto} />
      </div>

      {/* Spring Boot Java 2-line typing animation */}
      <FloatingCodeTyper />
    </div>
  );
}

export default function Hero() {
  const { fullName, links, email } = cvData.personalInfo;
  const [profileImage, setProfileImage] = useState(null);
  const [imgFailed, setImgFailed] = useState(false);
  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (file) { const r = new FileReader(); r.onload = ev => setProfileImage(ev.target.result); r.readAsDataURL(file); }
  };

  // Correct Medium "M" wordmark icon
  const MediumIcon = () => (
    <svg width="20" height="20" viewBox="0 0 195 195" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M 0 0 L 0 195 L 195 195 L 195 0 Z" fill="none"/>
      <path d="M 22 48 L 22 147 L 55 147 L 55 80 L 81 147 L 113 147 L 139 80 L 139 147 L 172 147 L 172 48 L 130 48 L 97 120 L 64 48 Z" fill="currentColor"/>
    </svg>
  );

  return (
    <section id="home" className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <HexGrid />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-wrapper">
          <div className="hero-content">
            <div className="badge" style={{ marginBottom: '1.25rem', width: 'fit-content' }}>Open to Internships 👋</div>
            <h1 className="hero-name" style={{ fontSize: '4.6rem', lineHeight: '1.05', fontWeight: 800, marginBottom: '1rem' }}>
              Hi, I'm <br /><span className="gradient-text">{fullName}</span>
            </h1>
            <WordFlip />
            <p className="hero-desc" style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: '1.7' }}>
              I build things that work — fast backends, sharp frontends, and AI that actually solves problems. Let's ship something great.
            </p>
            <div className="hero-action-buttons-row">
              <a href="/Kopalachandran_Abinash_CV.pdf" download className="neon-btn">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download CV
              </a>
              <a href="#projects" className="neon-btn-secondary">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                View Projects
              </a>
            </div>
            <div className="hero-socials-row-new">
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="hero-social-icon-chip" title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="hero-social-icon-chip" title="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </a>
              <a href={links.medium} target="_blank" rel="noopener noreferrer" className="hero-social-icon-chip" title="Medium">
                <MediumIcon />
              </a>
              <a href={`mailto:${email}`} className="hero-social-icon-chip" title="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </a>
            </div>
          </div>
          <div className="hero-avatar-side" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <HeroAvatar profileImage={profileImage} imgFailed={imgFailed} setImgFailed={setImgFailed} handlePhoto={handlePhoto} />
          </div>
        </div>
      </div>
    </section>
  );
}
