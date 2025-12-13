import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C00', // vermelho Athlético
        black: '#0B0B0B',
      },
    },
  },
  plugins: [],
};

export default config;
