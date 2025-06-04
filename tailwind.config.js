/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#0084FF',
        'reactor-white': '#E8F0FE',
        'stark-red': '#FF3D00',
        'space-black': '#0A0F18',
        'dark-blue': '#051A2F',
        'light-blue': '#56C3FF',
        'grid-blue': '#173153',
        success: '#00C853',
        warning: '#FFD600',
        error: '#FF1744',
      },
      fontFamily: {
        stark: ['"Stark Industries"', 'Orbitron', 'sans-serif'],
        interface: ['"Interface"', 'Roboto', 'sans-serif'],
        tech: ['"Tech Readout"', 'Space Mono', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-glow': 'pulse-glow 2.5s infinite ease-in-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 15px rgba(0, 132, 255, 0.6), 0 0 30px rgba(0, 132, 255, 0.4), 0 0 45px rgba(0, 132, 255, 0.2)' 
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(0, 132, 255, 0.8), 0 0 40px rgba(0, 132, 255, 0.6), 0 0 60px rgba(0, 132, 255, 0.4)' 
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'tech-gradient': 'linear-gradient(135deg, #051A2F 0%, #0A0F18 100%)',
        'holographic': 'linear-gradient(45deg, rgba(0, 132, 255, 0.05) 0%, rgba(232, 240, 254, 0.1) 50%, rgba(0, 132, 255, 0.05) 100%)',
      },
      boxShadow: {
        'holographic': '0 0 10px rgba(0, 132, 255, 0.3), inset 0 0 8px rgba(0, 132, 255, 0.3)',
        'reactor': '0 0 15px rgba(0, 132, 255, 0.6), 0 0 30px rgba(0, 132, 255, 0.4), 0 0 45px rgba(0, 132, 255, 0.2)',
      },
    },
  },
  plugins: [],
};