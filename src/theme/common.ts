import { defaultThemeMap as defaultStitchesThemeMap } from '@stitches/react'
import type * as Stitches from '@stitches/react'
import { config } from './stitches.config'

import {
  gray,
  blue,
  red,
  green,
  yellow,
  violet,
  grayDark,
  blueDark,
  redDark,
  greenDark,
  yellowDark,
  violetDark,
  blackA,
  whiteA
} from '@radix-ui/colors'

export const defaultTokens = {
  fonts: {
    base: "'Poppins', sans-serif"
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem'
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  lineHeights: {
    normal: 'normal',
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: '2',
    '3': '.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem'
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  },
  space: {
    px: '1px',
    0: '0',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem'
  },
  sizes: {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
    max: 'max-content',
    min: 'min-content',
    full: '100%',
    '3xs': '14rem',
    '2xs': '16rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    '8xl': '90rem'
  },
  radii: {
    none: '0',
    xs: '0.125rem',
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px'
  },
  zIndices: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800
  },
  borderWeights: {
    light: '1px',
    normal: '2px',
    bold: '3px',
    extrabold: '4px',
    black: '5px'
  },
  shadows: {
    '2xs':
      '  0.7px 0.7px 2.2px rgba(0, 0, 0, 0.01),1.7px 1.7px 5.3px rgba(0, 0, 0, 0.007),3.1px 3.1px 10px rgba(0, 0, 0, 0.006),5.6px 5.6px 17.9px rgba(0, 0, 0, 0.005),10.4px 10.4px 33.4px rgba(0, 0, 0, 0.004),25px 25px 80px rgba(0, 0, 0, 0.003)',
    xs: '  0.7px 0.7px 2.2px rgba(0, 0, 0, 0.02),1.7px 1.7px 5.3px rgba(0, 0, 0, 0.014),3.1px 3.1px 10px rgba(0, 0, 0, 0.012),5.6px 5.6px 17.9px rgba(0, 0, 0, 0.01),10.4px 10.4px 33.4px rgba(0, 0, 0, 0.008),25px 25px 80px rgba(0, 0, 0, 0.006)',
    sm: '0.7px 0.7px 2.2px rgba(0, 0, 0, 0.04), 1.7px 1.7px 5.3px rgba(0, 0, 0, 0.029), 3.1px 3.1px 10px rgba(0, 0, 0, 0.024), 5.6px 5.6px 17.9px rgba(0, 0, 0, 0.02), 10.4px 10.4px 33.4px rgba(0, 0, 0, 0.016), 25px 25px 80px rgba(0, 0, 0, 0.011)',
    md: '0.7px 0.7px 2.2px rgba(0, 0, 0, 0.08), 1.7px 1.7px 5.3px rgba(0, 0, 0, 0.058), 3.1px 3.1px 10px rgba(0, 0, 0, 0.048), 5.6px 5.6px 17.9px rgba(0, 0, 0, 0.04), 10.4px 10.4px 33.4px rgba(0, 0, 0, 0.032), 25px 25px 80px rgba(0, 0, 0, 0.022)',
    lg: '  0.7px 0.7px 2.2px rgba(0, 0, 0, 0.1),1.7px 1.7px 5.3px rgba(0, 0, 0, 0.072),3.1px 3.1px 10px rgba(0, 0, 0, 0.06),5.6px 5.6px 17.9px rgba(0, 0, 0, 0.05),10.4px 10.4px 33.4px rgba(0, 0, 0, 0.04),25px 25px 80px rgba(0, 0, 0, 0.028)',
    xl: '  0.7px 0.7px 2.2px rgba(0, 0, 0, 0.12),1.7px 1.7px 5.3px rgba(0, 0, 0, 0.086),3.1px 3.1px 10px rgba(0, 0, 0, 0.072),5.6px 5.6px 17.9px rgba(0, 0, 0, 0.06),10.4px 10.4px 33.4px rgba(0, 0, 0, 0.048),25px 25px 80px rgba(0, 0, 0, 0.034)',
    '2xl':
      '0.7px 0.7px 2.2px rgba(0, 0, 0, 0.14),1.7px 1.7px 5.3px rgba(0, 0, 0, 0.101),3.1px 3.1px 10px rgba(0, 0, 0, 0.083),5.6px 5.6px 17.9px rgba(0, 0, 0, 0.07),10.4px 10.4px 33.4px rgba(0, 0, 0, 0.057),25px 25px 80px rgba(0, 0, 0, 0.039)',
    outline: '0 0 0 2px rgba(0, 0, 0, 0.4)',
    inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    none: 'none',
    dark: '  0.7px 0.7px 2.2px rgba(0, 0, 0, 0.2),1.7px 1.7px 5.3px rgba(0, 0, 0, 0.144),3.1px 3.1px 10px rgba(0, 0, 0, 0.119),5.6px 5.6px 17.9px rgba(0, 0, 0, 0.1),10.4px 10.4px 33.4px rgba(0, 0, 0, 0.081),25px 25px 80px rgba(0, 0, 0, 0.056)'
  },
  transitions: {
    default: 'all 250ms ease'
  },
  breakpoints: {
    xs: '0em',
    sm: '35em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    xxl: '96em'
  }
}

export const defaultColors = {
  ...gray,
  ...blue,
  ...red,
  ...green,
  ...yellow,
  ...violet,
  ...grayDark,
  ...blueDark,
  ...redDark,
  ...greenDark,
  ...yellowDark,
  ...violetDark,
  ...blackA,
  ...whiteA
}

export const defaultMedia = {
  xs: `(min-width: ${defaultTokens.breakpoints.xs})`,
  sm: `(min-width: ${defaultTokens.breakpoints.sm})`,
  md: `(min-width: ${defaultTokens.breakpoints.md})`,
  lg: `(min-width: ${defaultTokens.breakpoints.lg})`,
  xl: `(min-width: ${defaultTokens.breakpoints.xl})`,
  xxl: `(min-width: ${defaultTokens.breakpoints.xxl})`,
  motion: '(prefers-reduced-motion)',
  safari: 'not all and (min-resolution:.001dpcm)',
  hover: '(any-hover: hover)',
  dark: '(prefers-color-scheme: dark)',
  light: '(prefers-color-scheme: light)'
}

export const defaultUtils = {
  // :hov effects
  _hover: (value: Stitches.ScaleValue<typeof config>) => ({
    '&:hover': value
  }),
  _active: (value: Stitches.ScaleValue<typeof config>) => ({
    '&:active': value
  }),
  _focus: (value: Stitches.ScaleValue<typeof config>) => ({
    '&:focus': value
  }),
  _disabled: (value: Stitches.ScaleValue<typeof config>) => ({
    '&:disabled': value
  }),
  _visited: (value: Stitches.ScaleValue<typeof config>) => ({
    '&:visited': value
  }),
  _focusWithin: (value: Stitches.ScaleValue<typeof config>) => ({
    '&:focus-within': value
  }),
  _focusVisible: (value: Stitches.ScaleValue<typeof config>) => ({
    '&:focus-visible': value
  }),
  _target: (value: Stitches.ScaleValue<typeof config>) => ({
    '&:target': value
  }),
  // Input selectors
  _placeholder: (value: Stitches.ScaleValue<typeof config>) => ({
    '&::placeholder': value
  }),
  // An abbreviated property for colors key
  bg: (value: Stitches.PropertyValue<'color'>) => ({
    background: value
  }),
  bgColor: (value: Stitches.PropertyValue<'color'>) => ({
    backgroundColor: value
  }),
  bgImage: (value: Stitches.PropertyValue<'color'>) => ({
    backgroundImage: value
  }),
  //  A property to apply linear gradient
  linearGradient: (value: string) => ({
    backgroundImage: `linear-gradient(${value})`
  }),
  //  An abbreviated property for radii key
  br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
    borderRadius: value
  }),
  rounded: (value: Stitches.PropertyValue<'borderRadius'>) => ({
    borderRadius: value
  }),
  //  An abbreviated property for sizes key
  size: (value: Stitches.PropertyValue<'width'>) => ({
    width: value,
    height: value
  }),
  btnSize: ([size, space]: [
    Stitches.PropertyValue<'height'> | null,
    Stitches.PropertyValue<'padding'> | null
  ]) => ({
    minHeight: size,
    height: size,
    paddingInlineStart: space,
    paddingInlineEnd: space
  }),
  w: (value: Stitches.PropertyValue<'width'>) => ({
    width: value
  }),
  minW: (value: Stitches.PropertyValue<'minWidth'>) => ({
    minWidth: value
  }),
  maxW: (value: Stitches.PropertyValue<'maxWidth'>) => ({
    maxWidht: value
  }),
  h: (value: Stitches.PropertyValue<'height'>) => ({
    height: value
  }),
  minH: (value: Stitches.PropertyValue<'minHeight'>) => ({
    minHeight: value
  }),
  maxH: (value: Stitches.PropertyValue<'maxHeight'>) => ({
    maxHeight: value
  }),
  // An abbreviated property for space key
  m: (value: Stitches.PropertyValue<'margin'>) => ({
    margin: value
  }),
  mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
    marginTop: value
  }),
  mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
    marginRight: value
  }),
  mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
    marginBottom: value
  }),
  ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
    marginLeft: value
  }),
  mx: (value: Stitches.PropertyValue<'margin'>) => ({
    marginLeft: value,
    marginRight: value
  }),
  my: (value: Stitches.PropertyValue<'margin'>) => ({
    marginTop: value,
    marginBottom: value
  }),
  marginX: (value: Stitches.PropertyValue<'margin'>) => ({
    marginLeft: value,
    marginRight: value
  }),
  marginY: (value: Stitches.PropertyValue<'margin'>) => ({
    marginTop: value,
    marginBottom: value
  }),
  p: (value: Stitches.PropertyValue<'padding'>) => ({
    padding: value
  }),
  pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
    paddingTop: value
  }),
  pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
    paddingRight: value
  }),
  pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
    paddingBottom: value
  }),
  pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value
  }),
  px: (value: Stitches.PropertyValue<'padding'>) => ({
    paddingLeft: value,
    paddingRight: value
  }),
  py: (value: Stitches.PropertyValue<'padding'>) => ({
    paddingTop: value,
    paddingBottom: value
  }),
  paddingX: (value: Stitches.PropertyValue<'padding'>) => ({
    paddingLeft: value,
    paddingRight: value
  }),
  paddingY: (value: Stitches.PropertyValue<'padding'>) => ({
    paddingTop: value,
    paddingBottom: value
  }),
  // An abbreviated property for shadows key
  shadow: (value: Stitches.PropertyValue<'boxShadow'>) => ({
    boxShadow: value
  }),
  // An abbreviated property for borderWidths key
  borderW: (value: Stitches.PropertyValue<'borderWidth'>) => ({
    borderWidth: value
  }),
  borderTopW: (value: Stitches.PropertyValue<'borderTopWidth'>) => ({
    borderTopWidth: value
  }),
  borderRightW: (value: Stitches.PropertyValue<'borderRightWidth'>) => ({
    borderRightWidth: value
  }),
  borderBottomW: (value: Stitches.PropertyValue<'borderBottomWidth'>) => ({
    borderBottomWidth: value
  }),
  borderLeftW: (value: Stitches.PropertyValue<'borderLeftWidth'>) => ({
    borderLeftWidth: value
  }),
  // An abbreviated property for borderStyles key
  borderS: (value: Stitches.PropertyValue<'borderStyle'>) => ({
    borderStyle: value
  }),
  borderTopS: (value: Stitches.PropertyValue<'borderTopStyle'>) => ({
    borderTopStyle: value
  }),
  borderRightS: (value: Stitches.PropertyValue<'borderRightStyle'>) => ({
    borderRightStyle: value
  }),
  borderBottomS: (value: Stitches.PropertyValue<'borderBottomStyle'>) => ({
    borderBottomStyle: value
  }),
  borderLeftS: (value: Stitches.PropertyValue<'borderLeftStyle'>) => ({
    borderLeftStyle: value
  }),
  spacing: (value: Stitches.PropertyValue<'gap'>) => ({
    gap: value
  })
}

export const defaultThemeMap = {
  ...defaultStitchesThemeMap
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  prefix: 'personalui',
  theme: {
    ...defaultTokens,
    colors: defaultColors,
    shadows: {}
  },
  media: defaultMedia,
  utils: defaultUtils,
  themeMap: defaultThemeMap
}
