export const theme = {

  colors: {


    light: {

      background:
        "#F8F5EF",

      surface:
        "#EFE7DC",

      foreground:
        "#151515",

      muted:
        "#6F6A62",

      accent:
        "#B08D57",

      border:
        "#DED5C8",

    },


    dark: {

      background:
        "#111111",

      surface:
        "#1A1A1A",

      foreground:
        "#F8F5EF",

      muted:
        "#B8B0A5",

      accent:
        "#C5A46D",

      border:
        "#333333",

    },


  },


  typography: {

    heading:
      "Cormorant Garamond",

    body:
      "Inter",

    accent:
      "Instrument Serif",

  },


  layout: {

    container:
      "1400px",

    sectionSpacing:
      "120px",

  },


  animation: {

    duration: {

      fast:
        0.3,

      normal:
        0.6,

      slow:
        1,

    },


    easing:

      [
        0.22,
        1,
        0.36,
        1,
      ],

  },


} as const;