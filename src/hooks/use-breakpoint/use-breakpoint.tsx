import React, { useState, useEffect, createContext, useContext } from 'react'
import { BreakpointProps, BreakpointQueries } from './types'

const defaultValue = {}

const BreakpointContext = createContext(defaultValue)

export const BreakpointProvider = ({
  children,
  queries
}: {
  children: React.ReactNode
  queries: BreakpointQueries
}) => {
  const [queryMatch, setQueryMatch] = useState<BreakpointProps>({})

  useEffect(() => {
    const mediaQueryLists = {}
    const keys = Object.keys(queries)
    let isAttached = false

    const handleQueryListener = () => {
      const updatedMatches = keys.reduce((acc, media) => {
        acc[media] = !!(
          mediaQueryLists[media] && mediaQueryLists[media].matches
        )
        return acc
      }, {})
      setQueryMatch(updatedMatches)
    }

    if (window && window.matchMedia) {
      const matches = {}
      keys.forEach((media) => {
        if (typeof queries[media] === 'string') {
          mediaQueryLists[media] = window.matchMedia(queries[media])
          matches[media] = mediaQueryLists[media].matches
        } else {
          matches[media] = false
        }
      })
      setQueryMatch(matches)
      isAttached = true
      keys.forEach((media) => {
        if (typeof queries[media] === 'string') {
          mediaQueryLists[media].addListener(handleQueryListener)
        }
      })
    }

    return () => {
      if (isAttached) {
        keys.forEach((media) => {
          if (typeof queries[media] === 'string') {
            mediaQueryLists[media].removeListener(handleQueryListener)
          }
        })
      }
    }
  }, [queries])

  return (
    <BreakpointContext.Provider value={queryMatch}>
      {children}
    </BreakpointContext.Provider>
  )
}

const useBreakpoint = (): {
  currentScreen: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | string
  breakpointContext: BreakpointProps
} => {
  const context: BreakpointProps = useContext(BreakpointContext)
  if (context === defaultValue) {
    throw new Error('useBreakpoint must be used within BreakpointProvider')
  }
  const findIndexOfNextCurrentScreen = Object.keys(context).findIndex(
    (screenKey) => context[screenKey] === false
  )

  const currentScreen =
    findIndexOfNextCurrentScreen !== -1
      ? Object.keys(context)[findIndexOfNextCurrentScreen - 1]
      : Object.keys(context)[Object.keys(context).length - 1]

  const currentScreenObject = {
    currentScreen,
    breakpointContext: context
  }
  return currentScreenObject
}

export default useBreakpoint
