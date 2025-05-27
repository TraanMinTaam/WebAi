/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        canela: ['Canela Text', 'serif'],
        favorit: ['Favorit Pro', 'system-ui', 'sans-serif'],
        'david': ['David Libre', 'serif']
      },
      colors: {
        primary: '#0A0F1D',
        text: {
          DEFAULT: '#1A1A1A',
          secondary: '#666666',
        },
        border: '#E5E5E5',
        'brandhub-navy': '#080d1e',
        'brandhub-gold': '#b9ff6c',
        background: 'hsl(0 0% 100%)',
        foreground: 'hsl(222.2 84% 4.9%)',
        card: 'hsl(0 0% 100%)',
        'card-foreground': 'hsl(222.2 84% 4.9%)',
        'muted-foreground': 'hsl(215.4 16.3% 46.9%)',
        'ring': 'hsl(222.2 84% 4.9%)',
        input: 'hsl(214.3 31.8% 91.4%)',
      },
      letterSpacing: {
        widest: '0.25em',
      },
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    },
  },
  plugins: [],
} 