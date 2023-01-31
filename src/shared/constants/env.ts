export const isServer = typeof window === 'undefined';

export const isClient = !isServer;

export const NODE_ENV = process.env.NODE_ENV;

export const PORT = process.env.PORT || 3000;

export const HOST = process.env.HOST || 'http://localhost';
