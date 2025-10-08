module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Primary Colors - Electric Blue (EV/Tech inspired)
        primary: {
          DEFAULT: "#0F172A", // Deep navy for professionalism
          50: "#F0F9FF", // Lightest blue
          100: "#E0F2FE", 
          200: "#BAE6FD", 
          300: "#7DD3FC", 
          400: "#38BDF8", 
          500: "#0EA5E9", // Electric blue
          600: "#0284C7", 
          700: "#0369A1", 
          800: "#075985", 
          900: "#0C4A6E", 
          950: "#0F172A", // Darkest - primary default
        },
        // Secondary Colors - Battery Green (Energy/Sustainability)
        secondary: {
          DEFAULT: "#10B981", // Emerald green
          50: "#ECFDF5", 
          100: "#D1FAE5", 
          200: "#A7F3D0", 
          300: "#6EE7B7", 
          400: "#34D399", 
          500: "#10B981", // Battery green
          600: "#059669", 
          700: "#047857", 
          800: "#065F46", 
          900: "#064E3B", 
          950: "#022C22",
        },
        // Accent Colors - High-Voltage Orange (Warning/Energy)
        accent: {
          DEFAULT: "#F59E0B", // Amber for energy
          50: "#FFFBEB", 
          100: "#FEF3C7", 
          200: "#FDE68A", 
          300: "#FCD34D", 
          400: "#FBBF24", 
          500: "#F59E0B", // High-voltage orange
          600: "#D97706", 
          700: "#B45309", 
          800: "#92400E", 
          900: "#78350F", 
        },
        // Background Colors (Light & Dark mode support)
        background: "#FFFFFF", // white
        'background-dark': "#0F172A", // dark mode bg
        surface: "#F8FAFC", // Light gray
        'surface-dark': "#1E293B", // dark mode surface
        // Text Colors (Light & Dark mode)
        'text-primary': "#1E293B", // Slate-800
        'text-primary-dark': "#F1F5F9", // Light text for dark mode
        'text-secondary': "#64748B", // Slate-500
        'text-secondary-dark': "#94A3B8", // Lighter for dark mode
        // Status Colors - Scientific/Technical
        success: {
          DEFAULT: "#10B981", // Emerald-500
          50: "#ECFDF5", 
          100: "#D1FAE5", 
          500: "#10B981", 
          600: "#059669", 
          700: "#047857", 
        },
        warning: {
          DEFAULT: "#F59E0B", // Amber-500
          50: "#FFFBEB", 
          100: "#FEF3C7", 
          500: "#F59E0B", 
          600: "#D97706", 
          700: "#B45309", 
        },
        error: {
          DEFAULT: "#EF4444", // Red-500
          50: "#FEF2F2", 
          100: "#FEE2E2", 
          500: "#EF4444", 
          600: "#DC2626", 
          700: "#B91C1C", 
        },
        // Technical/Scientific neutrals
        neutral: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        // Border Colors
        border: {
          DEFAULT: "#E2E8F0", // Neutral-200
          light: "#F1F5F9", // Neutral-100
          dark: "#334155", // For dark mode
        },
      },
      fontFamily: {
        // Headlines - Inter (tech-standard like Stripe)
        inter: ['Inter', 'sans-serif'],
        headline: ['Inter', 'sans-serif'],
        // Body - System font stack for performance
        body: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'sans-serif'],
        // Mono for technical data
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
        // Default sans
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'hero-lg': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '700' }],
        'hero-xl': ['5.5rem', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '600' }],
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'modal': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
        'scale-in': 'scaleIn 300ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [],
}