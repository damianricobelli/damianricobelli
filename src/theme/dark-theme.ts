import {
  grayDark,
  blueDark,
  redDark,
  greenDark,
  yellowDark,
  violetDark,
  blackA,
  whiteA
} from '@radix-ui/colors'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  colors: {
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
    ...yellowDark,
    ...violetDark,
    ...blackA,
    ...whiteA
  },
  shadows: {
    xs: '-4px 0 15px rgb(0 0 0 / 50%)',
    sm: '0 5px 20px -5px rgba(20, 20, 20, 0.1)',
    md: '0 8px 30px rgba(20, 20, 20, 0.15)',
    lg: '0 30px 60px rgba(20, 20, 20, 0.15)',
    xl: '0 40px 80px rgba(20, 20, 20, 0.25)'
  }
}
