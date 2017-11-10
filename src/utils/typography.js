import Typography from "typography"
import stAnnesTheme from "typography-theme-st-annes"

stAnnesTheme.googleFonts = [
  {
    name: 'Source Serif Pro',
    styles: [
      '600',
    ],
  },
]

const typography = new Typography(stAnnesTheme)

export default typography
