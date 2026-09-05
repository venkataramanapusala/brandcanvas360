import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const colorVar = (name: string) => `rgb(var(${name}) / <alpha-value>)`;

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          base: colorVar('--color-brand-rgb'),
          950: colorVar('--color-surface-overlay-rgb'),
          900: colorVar('--color-surface-deep-rgb'),
          800: colorVar('--color-surface-card-rgb'),
          700: colorVar('--color-surface-base-rgb'),
          600: colorVar('--color-surface-raised-rgb'),
        },
        surface: {
          base: colorVar('--color-surface-base-rgb'),
          deep: colorVar('--color-surface-deep-rgb'),
          card: colorVar('--color-surface-card-rgb'),
          raised: colorVar('--color-surface-raised-rgb'),
          overlay: colorVar('--color-surface-overlay-rgb'),
        },
        ink: {
          primary: colorVar('--color-text-primary-rgb'),
          secondary: colorVar('--color-text-secondary-rgb'),
          muted: colorVar('--color-text-muted-rgb'),
          inverse: colorVar('--color-text-inverse-rgb'),
        },
        primary: colorVar('--color-cta-primary-rgb'),
        primaryHover: colorVar('--color-cta-primary-hover-rgb'),
        accent: colorVar('--color-cta-secondary-rgb'),
        accentHover: colorVar('--color-cta-secondary-hover-rgb'),
        gold: colorVar('--color-cta-primary-rgb'),
        success: colorVar('--color-success-rgb'),
        warning: colorVar('--color-warning-rgb'),
        error: colorVar('--color-error-rgb'),
        info: colorVar('--color-info-rgb'),
        dark: colorVar('--color-surface-base-rgb'),
        darkCard: colorVar('--color-surface-card-rgb'),
        muted: colorVar('--color-text-muted-rgb'),
        borderSubtle: 'var(--color-border-subtle)',
        borderStrong: 'var(--color-border-strong)',
      },
      boxShadow: {
        'crimson-soft': 'var(--shadow-crimson-soft)',
        'crimson-glow': 'var(--shadow-crimson-glow)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        heading: ['var(--font-plus-jakarta)', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '1' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out both',
        float: 'float 5s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
