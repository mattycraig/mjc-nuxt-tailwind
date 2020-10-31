const { colors } = require('tailwindcss/defaultTheme')
// const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.pink,
      },
    },
  },
  variants: {
    // padding: ({ after }) => after(['important'])
  },
  plugins: [
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/custom-forms'),
    // plugin(function ({ addVariant }) {
    //   addVariant('important', ({ container }) => {
    //     container.walkRules(rule => {
    //       rule.selector = `.\\!${rule.selector.slice(1)}`
    //       rule.walkDecls(decl => {
    //         decl.important = true
    //       })
    //     })
    //   })
    // })
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
