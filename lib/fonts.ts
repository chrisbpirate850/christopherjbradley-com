// System font optimization
// This configuration uses the default system font stack for optimal performance
// No font files need to be loaded, reducing initial page load time

export const systemFonts = {
  sans: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    '"Noto Sans"',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"',
  ].join(', '),
}

// Font feature settings for better typography
export const fontFeatureSettings = {
  ligatures: '"rlig" 1, "calt" 1',
  numeric: '"tnum"',
  oldstyle: '"onum"',
}
