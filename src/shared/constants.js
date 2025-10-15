// Shared constants and configurations

export const APP_CONFIG = {
    name: 'The Purple Movement',
    version: '1.0.0',
    description: 'Where creativity meets technology',
};

export const API_ENDPOINTS = {
    base: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    users: '/users',
    posts: '/posts',
    comments: '/comments',
};

export const THEME_COLORS = {
    primary: '#8B5CF6',
    secondary: '#6366F1',
    accent: '#EC4899',
    background: '#F8FAFC',
    text: '#1E293B',
    customPurple: '#84298E',
};

export const BREAKPOINTS = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
};
