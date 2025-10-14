// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  darkMode: ['class', '.dark'],
  theme: {
    extend: {
      colors: {
        // Основные цвета из CSS переменных
        background: 'var(--bg)',
        foreground: 'var(--primary)',
        surface: 'var(--surface)',
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        pop: 'var(--pop)',
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-fore)',
        },
        border: 'var(--border)',

        // Дополнительные цвета для совместимости
        card: 'var(--surface)',
        'card-foreground': 'var(--primary)',
        popover: 'var(--surface)',
        'popover-foreground': 'var(--primary)',
        'primary-foreground': '#ffffff',
        secondary: 'var(--muted)',
        'secondary-foreground': 'var(--primary)',
        'accent-foreground': 'var(--primary)',
        destructive: 'var(--pop)',
        'destructive-foreground': '#ffffff',
        input: 'var(--border)',
        ring: 'var(--accent)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontSize: {
        '2xl': '1.5rem',
        xl: '1.25rem',
        lg: '1.125rem',
        base: '1rem',
      },
      fontWeight: {
        medium: '500',
        normal: '400',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    }
  },
  plugins: [],
}
