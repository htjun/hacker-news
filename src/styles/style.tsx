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
  heading: `'Telegraf', 'Inter', sans-serif`,
  serif: `serif`,
}

export const fontSize = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  xl2: '1.5rem',
  xl3: '2rem',
  xl4: '2.5rem',
  xl5: '3rem',
  xl6: '3.25rem',
}

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  black: 900,
}

export const textLineHeight = {
  tight: 1.25,
  normal: 1.5,
  loose: 1.65,
}

export const textLetterSpacing = {
  tighter: '-0.04em',
  tight: '-0.025em',
  normal: 0,
  loose: '0.025em',
}
