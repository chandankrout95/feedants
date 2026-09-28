module.exports = {
  content: ['./App.jsx', './src/**/*.{js,jsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#0B6B6B',
        tealDark: '#0A5A5A',
        tint: '#E4F1F1',
        mint: '#DDF4EA',
        ink: '#0F1F24',
        muted: '#6B7B80',
        line: '#D5E3E4',
      },
    },
  },
};
