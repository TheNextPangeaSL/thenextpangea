/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [
    // Dynamic color classes used in mega menu & product pages via template literals
    "bg-pangea-sky-blue/15",
    "bg-pangea-sky-blue/10",
    "bg-pangea-calm-blue/15",
    "bg-pangea-calm-blue/10",
    "bg-pangea-roast-sand/15",
    "bg-pangea-roast-sand/10",
    "bg-pangea-classic-blue/15",
    "bg-pangea-classic-blue/10",
    "text-pangea-sky-blue",
    "text-pangea-calm-blue",
    "text-pangea-roast-sand",
    "text-pangea-classic-blue",
    "border-pangea-sky-blue/30",
    "border-pangea-calm-blue/30",
    "border-pangea-roast-sand/30",
    "border-pangea-classic-blue/30",
  ],
  theme: {
    extend: {
      colors: {
        pangea: {
          "dark-blue": "#1F3042",
          "classic-blue": "#336699",
          "calm-blue": "#88B0D8",
          "sky-blue": "#66CCFF",
          "light-grey": "#E8E8E8",
          "roast-sand": "#C5BCA4",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        lato: [
          "Lato",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "ocean-gradient":
          "linear-gradient(135deg, #1F3042 0%, #336699 50%, #88B0D8 100%)",
        "hero-gradient":
          "linear-gradient(180deg, rgba(31,48,66,0.85) 0%, rgba(31,48,66,0.6) 40%, rgba(31,48,66,0.85) 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in-down": "fadeInDown 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.8s ease-out forwards",
        "slide-in-right": "slideInRight 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        pangea: "0 4px 30px rgba(31, 48, 66, 0.12)",
        "pangea-lg": "0 10px 50px rgba(31, 48, 66, 0.18)",
        "pangea-glow": "0 0 40px rgba(102, 204, 255, 0.15)",
        "pangea-soft":
          "0 2px 15px rgba(31, 48, 66, 0.06), 0 0 0 1px rgba(31, 48, 66, 0.02)",
        "pangea-xl":
          "0 20px 60px rgba(31, 48, 66, 0.15), 0 0 0 1px rgba(31, 48, 66, 0.04)",
      },
      transitionDuration: {
        400: "400ms",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
