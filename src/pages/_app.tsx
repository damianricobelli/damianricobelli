import { AppProps } from 'next/app'
import { Container } from '../components/ui/container'
import { BreakpointProvider } from '../hooks/use-breakpoint'
import { PersonalUIProvider } from '../theme'

const queries = {
  xs: '(min-width: 0em)',
  sm: '(min-width: 35em)',
  md: '(min-width: 48em)',
  lg: '(min-width: 62em)',
  xl: '(min-width: 80em)',
  '2xl': '(min-width: 96em)'
}

function App({ Component, pageProps }: AppProps) {
  return (
    <PersonalUIProvider>
      <BreakpointProvider queries={queries}>
        <Container css={{ py: '$8', px: '$20' }}>
          <Component {...pageProps} />
        </Container>
      </BreakpointProvider>
    </PersonalUIProvider>
  )
}

export default App
