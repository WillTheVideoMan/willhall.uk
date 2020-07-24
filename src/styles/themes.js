/**
 * The base line height, units in em;
 */
const baseLineHeight = 1.5

/**
 * The font scaling parameter. The size of each font is based from the root font size, multiplied by the scaling factor.
 */
const fontScale = 1.2

const light = {
  colours: {
    primary: "black",
    accent: "#ddd",
    background: "white",
  },
  typography: {
    fontFamily: {
      heading: "Playfair Display",
      body: "Lora",
      monospace: "IBM Plex Mono",
    },
    fontSize: {
      heading: {
        massive: `${Math.pow(fontScale, 4)}rem`,
        primary: `${Math.pow(fontScale, 3)}rem`,
        secondary: `${Math.pow(fontScale, 2)}rem`,
        tertiary: `${Math.pow(fontScale, 1)}rem`,
      },
      body: {
        regular: "1rem",
        small: `${Math.pow(fontScale, -1)}rem`,
      },
    },
    lineHeight: {
      heading: `${baseLineHeight - 0.3}`,
      body: `${baseLineHeight}`,
    },
  },
  spacing: {
    main: {
      major: `${baseLineHeight - 0.5}rem`,
      minor: 0,
    },
    accent: {
      major: `${(baseLineHeight - 0.5 - 0.3) * 3}rem`,
      minor: `${baseLineHeight - 0.5 - 0.3}rem`,
    },
  },
}

const dark = {
  ...light,
  colours: {
    primary: "white",
    accent: "#333",
    background: "#111",
  },
}

module.exports = {
  light,
  dark,
}
