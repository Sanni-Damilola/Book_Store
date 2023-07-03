/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // declearing background Image
        bgi: 'url("https://nokshi-2.myshopify.com/cdn/shop/files/home-1-slider-1.png?v=1614763716")',
        backgroundAttachment: {
          // declearing background Attachment
          // Add your customizations here
          fixed: "fixed",
          local: "local",
          scroll: "scroll",
        },
        bgDescription:
          'url("https://nokshi-2.myshopify.com/cdn/shop/files/home-3-slide-2.png?v=1614846534")',
      },
    },
  },
  plugins: [],
};
