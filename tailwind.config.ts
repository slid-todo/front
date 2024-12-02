/* eslint-disable */

import type { Config } from 'tailwindcss';

const pxToRem = require('tailwindcss-preset-px-to-rem');

export default {
  presets: [pxToRem],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
          950: "#172554"
        },
        slate: {
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
          950: "#020617"
        },
        primary: {
          100: "#536894",
          200: "#374D7A"
        }
      },

      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },

      fontSize: {
        "3xl-bold": ["30px", { lineHeight: "36px", fontWeight: "700" }],
        "3xl-semibold": ["30px", { lineHeight: "36px", fontWeight: "600" }],
        "3xl-medium": ["30px", { lineHeight: "36px", fontWeight: "500" }],
        "3xl-normal": ["30px", { lineHeight: "36px", fontWeight: "400" }],
        "3xl-light": ["30px", { lineHeight: "36px", fontWeight: "300" }],
  
        "2xl-bold": ["24px", { lineHeight: "32px", fontWeight: "700" }],
        "2xl-semibold": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "2xl-medium": ["24px", { lineHeight: "32px", fontWeight: "500" }],
        "2xl-normal": ["24px", { lineHeight: "32px", fontWeight: "400" }],
        "2xl-light": ["24px", { lineHeight: "32px", fontWeight: "300" }],
  
        "xl-bold": ["20px", { lineHeight: "28px", fontWeight: "700" }],
        "xl-semibold": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "xl-medium": ["20px", { lineHeight: "28px", fontWeight: "500" }],
        "xl-normal": ["20px", { lineHeight: "28px", fontWeight: "400" }],
        "xl-light": ["20px", { lineHeight: "28px", fontWeight: "300" }],
  
        "lg-bold": ["18px", { lineHeight: "28px", fontWeight: "700" }],
        "lg-semibold": ["18px", { lineHeight: "28px", fontWeight: "600" }],
        "lg-medium": ["18px", { lineHeight: "28px", fontWeight: "500" }],
        "lg-normal": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "lg-light": ["18px", { lineHeight: "28px", fontWeight: "300" }],
  
        "base-bold": ["16px", { lineHeight: "24px", fontWeight: "700" }],
        "base-semibold": ["16px", { lineHeight: "24px", fontWeight: "600" }],
        "base-medium": ["16px", { lineHeight: "24px", fontWeight: "500" }],
        "base-normal": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "base-light": ["16px", { lineHeight: "24px", fontWeight: "300" }],
  
        "sm-bold": ["14px", { lineHeight: "20px", fontWeight: "700" }],
        "sm-semibold": ["14px", { lineHeight: "20px", fontWeight: "600" }],
        "sm-medium": ["14px", { lineHeight: "20px", fontWeight: "500" }],
        "sm-normal": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "sm-light": ["14px", { lineHeight: "20px", fontWeight: "300" }],
  
        "xs-bold": ["12px", { lineHeight: "16px", fontWeight: "700" }],
        "xs-semibold": ["12px", { lineHeight: "16px", fontWeight: "600" }],
        "xs-medium": ["12px", { lineHeight: "16px", fontWeight: "500" }],
        "xs-normal": ["12px", { lineHeight: "16px", fontWeight: "400" }],
        "xs-light": ["12px", { lineHeight: "16px", fontWeight: "300" }],

      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
} satisfies Config;
