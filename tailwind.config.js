// @type {import('tailwindcss').Config}

export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppinsLight: ['PoppinsLight'],
        poppinsRegular: ['PoppinsRegular'],
        poppinsMedium: ['PoppinsMedium'],
        poppinsSemiBold: ['PoppinsSemiBold'],
        poppinsBold: ['PoppinsBold'],
        oswald: ['OswaldVar'],
      },
      colors: {
        moobMint: '#5A957A',
        moobSky: '#2FB8FF',
      },
    },
  },
  plugins: [],
};
