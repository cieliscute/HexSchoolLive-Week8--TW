// const animate = require("tailwindcss-animate") 原本是require改import
import animate from 'tailwindcss-animate'
import defaultTheme from 'tailwindcss/defaultTheme'


/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  safelist: ['dark'],
  prefix: '',

  content: [
    './pages/**/*.{js,jsx,vue}',
    './components/**/*.{js,jsx,vue}',
    './app/**/*.{js,jsx,vue}',
    './src/**/*.{js,jsx,vue}'
  ],

  theme: {
    container: {
      center: true,
      padding: '0.75rem'
    },
    screens: {
      xs: '480px', // 自定義
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px'
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // shadcn自行產生的，需要改為自己的色系
        // primary: {
        //   DEFAULT: 'hsl(var(--primary))',
        //   foreground: 'hsl(var(--primary-foreground))'
        // },
        // secondary: {
        //   DEFAULT: 'hsl(var(--secondary))',
        //   foreground: 'hsl(var(--secondary-foreground))'
        // },
        primary: {
          DEFAULT: '#6E01F8',
          dark: '#380C7E',
          'deep-dark': '#1F0F39',
          linearlight: '#7000FF',
          lineardark: '#11002D'
        },
        neutral: {
          DEFAULT: '#E9E2F3',
          linearlight: '#28085C',
          lineardark: '#000000'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        },
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' }
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 }
        },
        'spin-reverse': {
          from: {
            transform: 'rotate(360deg)'
          },
          to: {
            transform: 'rotate(0deg)'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down .3s cubic-bezier(.84,0,.79,.39)',
        'collapsible-up': 'collapsible-up .3s cubic-bezier(.84,0,.79,.39)'
      },
      fontFamily: {
        NotoSansTC: ['"Noto Sans TC"', ...defaultTheme.fontFamily.sans],
        Shrikhand: ['Shrikhand', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [animate]
}