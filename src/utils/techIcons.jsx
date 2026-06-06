import React from 'react';

export const techIconMap = {
  java: (size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2c-.6 0-1.1.4-1.2 1-.2 1.1-.9 2-2 2.6-1 .6-1.5 1.6-1.5 2.8 0 1.8 1.5 3.3 3.3 3.3.6 0 1.2-.2 1.7-.5 1-.6 2.2-.9 3.4-.9.7 0 1.3.6 1.3 1.3v.4c0 1.4-1.2 2.6-2.6 2.6h-5.8c-1.3 0-2.4 1.1-2.4 2.4 0 1.1.7 2 1.7 2.3 2 .6 4.1.9 6.2.9 2.1 0 4.1-.3 6.1-.9.8-.3 1.4-1 1.4-1.8v-.4c0-1.4-1.2-2.6-2.6-2.6h-.8c-.7 0-1.3-.6-1.3-1.3v-.4c0-1.4 1.2-2.6 2.6-2.6 1 0 2-.4 2.6-1.2.6-.8.8-1.8.5-2.8-.4-1.5-1.7-2.6-3.3-2.6h-.8c-.7 0-1.3-.6-1.3-1.3V3.3c0-.7-.6-1.3-1.3-1.3z" fill="#f43f5e" />
      <path d="M6 18c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2H6z" fill="#0284c7" />
    </svg>
  ),
  javascript: (size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="3" fill="#eab308" />
      <text x="14" y="20" fill="#000" fontSize="9" fontWeight="900" fontFamily="sans-serif">JS</text>
    </svg>
  ),
  python: (size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2c-1.8 0-3.3.4-4 1.2-.8.8-1.2 2.1-1.2 4h1.7c0-1.3.3-2 1-2.4C10 4.4 11 4.3 12 4.3c1.7 0 3 .9 3 2.5v1.4c0 .8-.7 1.4-1.5 1.4h-3.4c-1.8 0-3.3 1-3.8 2.5C6 12.8 6 13.8 6.6 15c.6 1.2 1.8 1.8 3.4 1.8h.9v-1.4c0-.9.7-1.7 1.7-1.7h3.4c1 0 1.7-.8 1.7-1.7V9.5c0-1.8-.4-3.3-1.2-4C15.7 4.7 14.4 4.3 12 4.3V2zm0 1c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7z" fill="#0284c7" />
      <path d="M12 22c1.8 0 3.3-.4 4-1.2.8-.8 1.2-2.1 1.2-4h-1.7c0 1.3-.3 2-1 2.4-.5.4-1.5.5-2.5.5-1.7 0-3-.9-3-2.5v-1.4c0-.8.7-1.4 1.5-1.4h3.4c1.8 0 3.3-1 3.8-2.5.3-.7.3-1.7-.3-2.9-.6-1.2-1.8-1.8-3.4-1.8h-.9v1.4c0 .9-.7 1.7-1.7 1.7h-3.4c-1 0-1.7.8-1.7 1.7v2.5c0 1.8.4 3.3 1.2 4 .8.8 2.1 1.2 4.5 1.2zm0-1c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z" fill="#eab308" />
    </svg>
  ),
  html: (size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4 2l1.6 16.5L12 22l6.4-3.5L20 2H4zm12.3 6.3H9.4l.2 2h6.5l-.6 6L12 18.2l-3.5-1.9-.2-2.5h2l.1 1.1 1.6.9 1.6-.9.2-2.3H8.8l-.4-4.5h8.3l-.4 3.8z" fill="#ea580c" />
    </svg>
  ),
  css: (size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4 2l1.6 16.5L12 22l6.4-3.5L20 2H4zm12.5 5.5l-.2 2.3H9.5l.2 2H16l-.4 4-3.6 2-3.6-2-.1-1.3h2l.1.5 1.6.9 1.6-.9.2-2H8.8L8.4 6.5h8.1z" fill="#0252d4" />
    </svg>
  ),
  c: (size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#0284c7" />
      <path d="M15 15a4 4 0 1 1 0-6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  springboot: (size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm2 14c-1.5.8-3.4.4-4.2-1-.8-1.5-.4-3.4 1-4.2.8-.4 1.7-.5 2.5-.2.5.2.8.7.6 1.2s-.7.8-1.2.6c-.5-.2-1.1-.1-1.5.1-.7.4-1 1.3-.6 2 .4.7 1.3 1 2 .6.3-.2.6-.5.7-.8.2-.5.7-.8 1.2-.6.5.2.8.7.6 1.2-.2.6-.6 1-1.1 1.2zm3.3-8.8c.4.6.2 1.5-.4 1.9L13.8 11c-.3.2-.5.5-.5.9s.1.8.4 1l4.7 2.8c.6.4.8 1.2.4 1.9s-1.2.8-1.9.4L12.2 15c-.7-.4-1.2-1.2-1.2-2s.5-1.6 1.2-2l4.7-2.8c.6-.4 1.5-.2 1.9.4z" fill="#10b981" />
    </svg>
  ),
  react: (size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2" fill="#06b6d4" />
      <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#06b6d4" strokeWidth="1.5" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#06b6d4" strokeWidth="1.5" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#06b6d4" strokeWidth="1.5" transform="rotate(150 12 12)" />
    </svg>
  ),
  nextjs: (size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#000" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <path d="M16.5 16.5L10 8.5V16H8.5V7.5H10L16 15V7.5H17.5V16.5h-1z" fill="#fff" />
    </svg>
  ),
  nodejs: (size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L4 6.6v9.2L12 21l8-4.6V6.6L12 2zm0 2.3l6 3.5v6.9l-6 3.5-6-3.5V7.8l6-3.5zm-1.5 5.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5c.3 0 .6-.1.8-.3v2.8c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-.9h-1.5v.9c0 1.3 1.1 2.4 2.4 2.4s2.4-1.1 2.4-2.4V11.3c0-.8-.7-1.5-1.5-1.5zm3 0c-.8 0-1.5.7-1.5 1.5v2.3c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-2.3c0-.8-.7-1.5-1.5-1.5zm0 1.5c.3 0 .5.2.5.5v1.3c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-1.3c0-.3.2-.5.5-.5z" fill="#10b981" />
    </svg>
  ),
  expressjs: (size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#1f2937" />
      <text x="3" y="15" fill="#f3f4f6" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Express</text>
    </svg>
  ),
  mysql: (size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zm0 4c0 1.7 3.6 3 8 3s8-1.3 8-3v4c0 1.7-3.6 3-8 3s-8-1.3-8-3v-4zm0 5c0 1.7 3.6 3 8 3s8-1.3 8-3v4c0 1.7-3.6 3-8 3s-8-1.3-8-3v-4z" fill="#0284c7" />
    </svg>
  ),
  mongodb: (size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2C11.5 3.5 9 8 9 11.5c0 2.5 1.3 4.5 3 4.5s3-2 3-4.5c0-3.5-2.5-8-3-9.5z" fill="#10b981" />
      <path d="M12 2c.5 1.5 3 6 3 9.5 0 2.5-1.3 4.5-3 4.5V2z" fill="#059669" />
      <path d="M12 16v6" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  docker: (size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3 13.5c0-.6.4-1 1-1h1.5c.6 0 1 .4 1 1v1.5c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1v-1.5zm4.5 0c0-.6.4-1 1-1H10c.6 0 1 .4 1 1v1.5c0 .6-.4 1-1 1H8.5c-.6 0-1-.4-1-1v-1.5zm4.5 0c0-.6.4-1 1-1h1.5c.6 0 1 .4 1 1v1.5c0 .6-.4 1-1 1H13c-.6 0-1-.4-1-1v-1.5zm4.5 0c0-.6.4-1 1-1H19c.6 0 1 .4 1 1v1.5c0 .6-.4 1-1 1h-1.5c-.6 0-1-.4-1-1v-1.5zM7.5 9c0-.6.4-1 1-1H10c.6 0 1 .4 1 1v1.5c0 .6-.4 1-1 1H8.5c-.6 0-1-.4-1-1V9zm4.5 0c0-.6.4-1 1-1h1.5c.6 0 1 .4 1 1v1.5c0 .6-.4 1-1 1H13c-.6 0-1-.4-1-1V9zm4.5 0c0-.6.4-1 1-1H19c.6 0 1 .4 1 1v1.5c0 .6-.4 1-1 1h-1.5c-.6 0-1-.4-1-1V9zM12 4.5c0-.6.4-1 1-1h1.5c.6 0 1 .4 1 1v1.5c0 .6-.4 1-1 1H13c-.6 0-1-.4-1-1V4.5zM2 17.5C2 15 8 15 12 15s10 0 10 2.5-4 3.5-10 3.5-10-1-10-3.5z" fill="#0284c7" />
    </svg>
  ),
  aws: (size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 4c-4.4 0-8 2.2-8 5 0 .8.3 1.6.9 2.2L3.5 13c-.3.3-.1.8.4.8H8c1.3 0 2.4-.8 2.8-2 .5.1 1 .2 1.6.2 3.9 0 7-1.8 7-4s-3.1-4-7-4zm-3 7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm6-2c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="#1f2937" />
      <path d="M6 16c2.5 1.5 5.5 2 8.5 1.5 2-.3 3.5-1 4.5-2 .3-.3.8-.1.7.3-.8 1.8-2.8 2.8-5.2 3.2-3.3.5-6.8-.2-9.5-2.2-.4-.3-.3-.8 0-1l1-.8z" fill="#ea580c" />
    </svg>
  ),
  git: (size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M18.8 11.2l-6-6c-.4-.4-1.2-.4-1.6 0l-6 6c-.4.4-.4 1.2 0 1.6l6 6c.4.4 1.2.4 1.6 0l6-6c.4-.4.4-1.2 0-1.6zm-6.8 5.6V14c-.6 0-1.1-.3-1.4-.7l-1.9 1c0 .2.1.4.1.7 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.4 0 .7.1.9.3l1.9-1c-.1-.3-.2-.6-.2-.9 0-1.1.9-2 2-2s2 .9 2 2c0 .4-.1.7-.3.9v2.8c.4.3.7.8.7 1.3 0 1.1-.9 2-2 2s-2-.9-2-2z" fill="#ea580c" />
    </svg>
  ),
  github: (size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.5 2.3 1.1 2.9.8.1-.6.4-1.1.6-1.3-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.7 9.7 0 0 1 5.2 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5C19.1 20.2 22 16.4 22 12c0-5.5-4.5-10-10-10z" fill="currentColor" />
    </svg>
  ),
  jenkins: (size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" fill="#ea580c" />
      <path d="M9 13.5a3 3 0 0 1 6 0v.5H9v-.5z" fill="#f3f4f6" stroke="#4b5563" />
    </svg>
  ),
  postman: (size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 13.5l-2.5-2.5c-.3-.3-.3-.8 0-1.1L13 9.5c.3-.3.8-.3 1.1 0s.3.8 0 1.1L12.1 13l2 2c.3.3.3.8 0 1.1-.3.3-.8.3-1.1 0z" fill="#ea580c" />
    </svg>
  ),
  githubactions: (size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6zm8 2c-.6 0-1 .4-1 1s.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1h-4zm-4 4c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1H8zm4 4c-.6 0-1 .4-1 1s.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1h-4z" fill="#3b82f6" />
    </svg>
  ),
  cloudinary: (size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M19.3 10c.2-.5.3-1 .3-1.5 0-3-2.5-5.5-5.5-5.5-2.5 0-4.6 1.7-5.3 4-.7-.3-1.4-.5-2.2-.5-3.3 0-6 2.7-6 6s2.7 6 6 6h12.7c2.5 0 4.5-2 4.5-4.5 0-2.2-1.6-4-3.5-4.5z" fill="#0284c7" />
    </svg>
  ),
  groqai: (size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="20" height="20" x="2" y="2" rx="4" fill="#a78bfa" />
      <path d="M12 6l-4 5h3v7l4-5h-3V6z" fill="#fff" />
    </svg>
  ),
  chromadb: (size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="20" height="20" x="2" y="2" rx="4" fill="#06b6d4" />
      <circle cx="9" cy="9" r="2" fill="#fff" />
      <circle cx="15" cy="9" r="2" fill="#fff" />
      <circle cx="9" cy="15" r="2" fill="#fff" />
      <circle cx="15" cy="15" r="2" fill="#fff" />
      <path d="M9 9h6v6H9V9z" stroke="#fff" strokeWidth="1" />
    </svg>
  ),
  restapis: (size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="6" cy="12" r="3" fill="#10b981" />
      <circle cx="18" cy="8" r="3" fill="#3b82f6" />
      <circle cx="18" cy="16" r="3" fill="#8b5cf6" />
      <path d="M9 12h6m0 0l-2-2m2 2l-2 2M9 12l9-4m-9 4l9 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  jwt: (size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="5" y="10" width="14" height="11" rx="2" fill="#db2777" />
      <path d="M8 10V7a4 4 0 1 1 8 0v3" stroke="#db2777" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
};

export function getTechIcon(techName, size = 24) {
  if (!techName) return null;
  const normalized = techName.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  if (normalized.includes('java') && !normalized.includes('script')) {
    return techIconMap.java(size);
  }
  if (normalized.includes('javascript') || normalized === 'js') {
    return techIconMap.javascript(size);
  }
  if (normalized.includes('python')) {
    return techIconMap.python(size);
  }
  if (normalized.includes('html')) {
    return techIconMap.html(size);
  }
  if (normalized.includes('css')) {
    return techIconMap.css(size);
  }
  if (normalized === 'c') {
    return techIconMap.c(size);
  }
  if (normalized.includes('springboot')) {
    return techIconMap.springboot(size);
  }
  if (normalized.includes('react')) {
    return techIconMap.react(size);
  }
  if (normalized.includes('next')) {
    return techIconMap.nextjs(size);
  }
  if (normalized.includes('node')) {
    return techIconMap.nodejs(size);
  }
  if (normalized.includes('express')) {
    return techIconMap.expressjs(size);
  }
  if (normalized.includes('mysql')) {
    return techIconMap.mysql(size);
  }
  if (normalized.includes('mongo')) {
    return techIconMap.mongodb(size);
  }
  if (normalized.includes('docker')) {
    return techIconMap.docker(size);
  }
  if (normalized.includes('aws')) {
    return techIconMap.aws(size);
  }
  if (normalized === 'git' || normalized.includes('github') && !normalized.includes('actions')) {
    return techIconMap.git(size);
  }
  if (normalized.includes('jenkins')) {
    return techIconMap.jenkins(size);
  }
  if (normalized.includes('postman')) {
    return techIconMap.postman(size);
  }
  if (normalized.includes('actions')) {
    return techIconMap.githubactions(size);
  }
  if (normalized.includes('cloudinary')) {
    return techIconMap.cloudinary(size);
  }
  if (normalized.includes('groq')) {
    return techIconMap.groqai(size);
  }
  if (normalized.includes('chroma')) {
    return techIconMap.chromadb(size);
  }
  if (normalized.includes('jwt')) {
    return techIconMap.jwt(size);
  }
  if (normalized.includes('api') || normalized.includes('rest')) {
    return techIconMap.restapis(size);
  }

  // Fallback: A nice technology chip
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
      <polyline points="2 17 12 22 22 17"></polyline>
      <polyline points="2 12 12 17 22 12"></polyline>
    </svg>
  );
}
