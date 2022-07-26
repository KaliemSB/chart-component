import { createStitches } from "@stitches/core";

const { globalCss, css } = createStitches({
  theme: {
    colors: {
      primary: "hsl(10, 79%, 65%)",
      secondary: "hsl(186, 34%, 60%)",
      darkBrown: "hsl(25, 47%, 15%)",
      mediumBrown: "hsl(28, 10%, 53%)",
      cream: "hsl(27, 66%, 92%)",
      veryPaleOrange: "hsl(33, 100%, 98%)"
    },
    fontSizes: {
      1: "18px",
      2: "24px",
      3: "28px",
      4: "12px",
      5: "14px",
      6: "16px"
    },
    fontWeights: {
      1: "400",
      2: "700"
    },
    fonts: {
      DMSans: "'DM Sans', sans-serif"
    },
    radii: {
      1: "8px",
      2: "4px"
    }
  }
});

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "$DMSans",
    fontSize: "$1",
    fontWeight: "$1"
  },
  body: {
    background: "$cream",
    height: "100vh"
  },
  "#app": {
    height: "inherit"
  },
  main: {
    height: "inherit",
    display: "grid",
    placeItems: "center",
    maxWidth: "375px",
    margin: "auto",
    gridAutoRows: "max-content",
    alignContent: "center",
    gap: ".8rem",
    padding: "1rem"
  }
})

export { globalStyles, css };