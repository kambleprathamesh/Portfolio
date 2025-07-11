/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "text-[#55e6a5]",
    "bg-[#03050a]",
    "bg-[#414140]",
    "text-gray-400",
    "bg-[#55e6a5]",
    "border-yellow-300",
    "w-[80%]",
    "ml-[3rem]",
    "ml-[7rem]",
    "top-[22rem]",
    "top-[4rem]",
    "top-[5rem]",
    "top-[38rem]",
    "top-[42rem]",
    "left-[78rem]",
    "right-[6rem]",
    "right-[7rem]",
    "w-[240px]",
    "w-[400px]",
    "text-[12px]",
    "text-[1.6rem]",
    "h-[300px]",
  ],
  theme: {
    extend: {
      keyframes: {
        dropIn: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        drop: "dropIn 60s ease-out forwards",
      },
    },
  },
  plugins: [],
};
