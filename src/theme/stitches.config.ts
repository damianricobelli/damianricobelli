import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'
import commonTheme from './common'
import lightTheme from './light-theme'
import darkTheme from './dark-theme'
import deepMerge from './utils/deep-merge'
import { Theme, BaseTheme } from './types'

export const getStitchesTheme = (targetTheme: BaseTheme): BaseTheme => {
  return deepMerge(targetTheme, commonTheme.theme)
}

export const {
  createTheme: createThemeBase,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  config
} = createStitches({
  ...commonTheme,
  theme: {
    ...commonTheme.theme,
    shadows: {
      ...lightTheme.shadows
    },
    colors: {
      ...commonTheme.theme.colors,
      ...lightTheme.colors
    }
  }
})

export const createTheme = ({ type, theme, className }: Theme) => {
  if (!type) {
    throw new Error('Theme type is required')
  }
  return createThemeBase(
    className || `${type}-theme`,
    deepMerge(type === 'dark' ? darkTheme : lightTheme, theme)
  )
}

export type DefaultProps = {
  id?: string
  css?: CSS
  as?: keyof JSX.IntrinsicElements
}

export type VariantProps<T> = Stitches.VariantProps<T>
export type PropertyValue<Property extends keyof Stitches.CSSProperties> =
  Stitches.PropertyValue<Property, typeof config>
export type CSS = Stitches.CSS<typeof config>
export type ScaleValue<T> = Stitches.ScaleValue<T>

export type StitchesTheme = typeof theme
