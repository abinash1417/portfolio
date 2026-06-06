import React from 'react';

// Replaced the old 3D canvas with a clean gradient mesh background
export default function Canvas3D() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'none',
      background: 'var(--bg-deep)',
      overflow: 'hidden',
    }}>
      {/* Subtle mesh gradient blobs */}
      <div style={{
        position: 'absolute', top: '-20%', left: '-10%',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)',
        filter: 'blur(40px)',
        animation: 'blobFloat 12s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-5%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)',
        filter: 'blur(40px)',
        animation: 'blobFloat 16s ease-in-out infinite reverse',
      }} />
      <div style={{
        position: 'absolute', top: '40%', left: '40%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%)',
        filter: 'blur(60px)',
        animation: 'blobFloat 20s ease-in-out infinite 4s',
      }} />
      <style>{`
        @keyframes blobFloat {
          0%, 100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px,-20px) scale(1.05); }
          66% { transform: translate(-20px,15px) scale(0.97); }
        }
      `}</style>
    </div>
  );
}
