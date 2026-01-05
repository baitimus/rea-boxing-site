import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        // Earthbound Palette
        bg: {
          DEFAULT: '#F9F8F4', // Warm Alabaster
          surface: '#FFFFFF',
          muted: '#F2F0EB',   // Soft Clay
        },
        text: {
          DEFAULT: '#2D3A31', // Deep Forest Green
          muted: '#5C6B60',
        },
        primary: {
          DEFAULT: '#2D3A31', // Deep Forest Green (Buttons)
          hover: '#C27B66',   // Terracotta (Interaction)
        },
        accent: {
          DEFAULT: '#8C9A84', // Sage Green
          light: '#DCCFC2',   // Mushroom
        },
        border: {
          DEFAULT: '#E6E2DA', // Stone
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Source Sans 3"', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        'arch': '200px', // For the iconic arch images
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(45, 58, 49, 0.05)',
        'soft-md': '0 10px 15px -3px rgba(45, 58, 49, 0.05)',
        'soft-lg': '0 20px 40px -10px rgba(45, 58, 49, 0.05)',
        'soft-xl': '0 25px 50px -12px rgba(45, 58, 49, 0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;