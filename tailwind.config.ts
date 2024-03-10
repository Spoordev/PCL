// tailwind.config.js

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        // Define your custom container styles here
        custom: {
          maxWidth: '1200px', // Example max width
          padding: '0 1rem', // Example padding
          margin: '0 auto', // Center the container horizontally
        },
      },
      maxWidth: {
        '9xl': '1920px', // Custom larger maximum width
      },
    },
  },
  plugins: [],
};
