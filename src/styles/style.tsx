// Color
export const hsl = (color: string, lightness: number) => {
  let hs: string

  switch (color) {
    case "neutral":
      hs = "216, 8%"
      break;
    default:
      hs = "216, 8%"
      break;
  }
  return `hsl(${hs}, ${lightness}%)`
}

// Typography
export const fontSet = {
  sans: `'Inter', sans-serif`,
  serif: `serif`,
}
