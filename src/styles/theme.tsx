import * as style from "src/styles/style"

export const lightTheme = {
  background: {
    l1: style.hsl("neutral", 100),
    l2: style.hsl("neutral", 98),
    l3: style.hsl("neutral", 96),
    l4: style.hsl("neutral", 92),
  },
  text: {
    neutral: {
      l1: style.hsl("neutral", 0),
      l2: style.hsl("neutral", 32),
    },
    navy: {
      l1: style.hsl("navy", 16),
      l2: style.hsl("navy", 24),
    },
  },
}

export const darkTheme = {
  background: {
    l1: style.hsl("neutral", 0),
    l2: style.hsl("neutral", 2),
    l3: style.hsl("neutral", 4),
    l4: style.hsl("neutral", 6),
  },
  text: {
    neutral: {
      l1: style.hsl("neutral", 100),
      l2: style.hsl("neutral", 64),
    },
    navy: {
      l1: style.hsl("navy", 80),
      l2: style.hsl("navy", 72),
    },
  },
}
