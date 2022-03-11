import { styled } from '../../../theme'
import {
  direction,
  justifyContent,
  alignItems,
  wrap,
  spacing
} from './stack.variants'

export const StyledStack = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
  variants: {
    direction,
    justifyContent,
    alignItems,
    wrap,
    spacing
  },
  defaultVariants: {
    direction: 'row',
    justifyContent: 'normal',
    alignItems: 'center'
  }
})

export const Stack = StyledStack

export const StyledVStack = styled(Stack, {
  defaultVariants: {
    direction: 'column',
    justifyContent: 'normal',
    alignItems: 'normal'
  }
})

export const StyledHStack = styled(Stack, {
  defaultVariants: {
    direction: 'row',
    justifyContent: 'normal',
    alignItems: 'center'
  }
})

export const VStack = StyledVStack
export const HStack = StyledHStack
