import React from 'react'
import { styled, keyframes, VariantProps, DefaultProps } from '../../../theme'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { compoundVariants } from './sheet.compound-variants'

type SheetContentVariants = VariantProps<typeof StyledContent>

type SheetContentProps = SheetContentVariants &
  DefaultProps &
  DialogPrimitive.DialogContentProps

const showOverlay = keyframes({
  from: { opacity: '0' },
  to: { opacity: '1' }
})

const showContent = keyframes({
  from: { transform: '$$transformValue' },
  to: { transform: 'translate3d(0,0,0)' }
})

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: 'rgba(0,0,0,.55)',
  position: 'fixed',
  zIndex: '$overlay',
  inset: 0,
  '&[data-state="open"]': {
    animation: `${showOverlay} 600ms cubic-bezier(0.16, 1, 0.3, 1)`
  }
})

const StyledContent = styled(
  DialogPrimitive.Content,
  {
    position: 'fixed',
    top: 0,
    bottom: 0,
    zIndex: '$overlay',
    width: 300,
    backgroundColor: 'white',
    '&[data-state="open"]': {
      animation: `${showContent} 600ms cubic-bezier(0.16, 1, 0.3, 1)`
    },
    variants: {
      placement: {
        top: {
          $$transformValue: 'translate3d(0,-100%,0)',
          width: '100%',
          height: 300,
          bottom: 'auto',
          left: 0
        },
        right: {
          $$transformValue: 'translate3d(100%,0,0)',
          right: 0
        },
        bottom: {
          $$transformValue: 'translate3d(0,100%,0)',
          width: '100%',
          height: 300,
          bottom: 0,
          left: 0,
          top: 'auto'
        },
        left: {
          $$transformValue: 'translate3d(-100%,0,0)',
          left: 0
        }
      },
      size: {
        xs: {},
        sm: {},
        md: {},
        lg: {},
        xl: {},
        full: {}
      }
    },
    defaultVariants: {
      placement: 'right',
      size: 'sm'
    }
  },
  compoundVariants
)

const StyledCloseButton = styled(DialogPrimitive.Close, {
  position: 'absolute',
  top: '$2',
  right: '$2'
})

const StyledTitle = styled(DialogPrimitive.Title, {
  fontFamily: '$heading'
})

const StyledDescription = styled(DialogPrimitive.Description, {
  fontFamily: '$base'
})

export const SheetContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  SheetContentProps
>(({ children, ...props }, forwardedRef) => (
  <DialogPrimitive.Portal>
    <StyledOverlay />
    <StyledContent {...props} ref={forwardedRef}>
      {children}
    </StyledContent>
  </DialogPrimitive.Portal>
))

SheetContent.displayName = 'SheetContent'

export const Sheet = DialogPrimitive.Root
export const SheetTrigger = DialogPrimitive.Trigger
export const SheetClose = StyledCloseButton
export const SheetTitle = StyledTitle
export const SheetDescription = StyledDescription
