import React from 'react'
import { globalCss, getCssText } from '../theme/stitches.config'

const globalStyles = globalCss({
  '*, *:before, *:after': {
    boxSizing: 'border-box',
    textRendering: 'geometricPrecision',
    WebkitTapHighlightColor: 'transparent'
  },
  html: {
    fontSize: '$md'
  },
  body: {
    margin: 0,
    padding: 0,
    minHeight: '100%',
    overflowX: 'hidden',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    textRendering: 'optimizeLegibility',
    fontSize: '$md',
    lineHeight: '$md',
    fontFamily: '$base'
  },
  'html, body': {
    backgroundColor: 'white',
    color: '$gray12'
  }
})

const flushCSS = () => (
  <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
)

const CssBaseline: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  globalStyles()
  return <React.Fragment>{children}</React.Fragment>
}

type MemoCssBaselineComponent<P = {}> = React.NamedExoticComponent<P> & {
  flush: typeof flushCSS
}

const MemoCssBaseline = React.memo(CssBaseline) as MemoCssBaselineComponent<
  React.PropsWithChildren<{}>
>
MemoCssBaseline.flush = flushCSS

export default MemoCssBaseline
