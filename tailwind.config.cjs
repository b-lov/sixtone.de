const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  // TODO: add better sans font like plex
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald'],
        rim: ['Rat Infested Mailbox']
      },
      colors: {
        accent: 'hsl(32deg 85% 40%)'
        // accent: '#18AEBF'
        // accent: '#bf7522'
        // accent: '#d97706'
      }
    }
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ]
};

module.exports = config;
