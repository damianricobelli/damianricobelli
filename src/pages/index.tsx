import Head from 'next/head'
import { HStack } from '../components/ui/stack'
import { Text } from '../components/ui/text'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from '../components/ui/sheet'

import { motion } from 'framer-motion'

import { styled } from '../theme'

import {
  TwitterLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
  HamburgerMenuIcon
} from '@radix-ui/react-icons'

import useBreakpoint from '../hooks/use-breakpoint'
import { Box } from '../components/ui/box'

const Button = styled(motion.button, {
  border: 'none',
  outline: 'none',
  fontFamily: '$heading',
  fontWeight: '$semibold',
  textDecoration: 'none',
  display: 'inline-flex',
  appearance: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  position: 'relative',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  width: 'auto',
  lineHeight: '$base',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  fontVariantNumeric: 'tabular-nums',
  borderRadius: '$lg',
  _hover: {
    cursor: 'pointer'
  },
  variants: {
    size: {
      xs: {
        fontSize: '$xs',
        btnSize: ['$6', '$2']
      },
      sm: {
        fontSize: '$sm',
        btnSize: ['$8', '$3']
      },
      md: {
        fontSize: '$md',
        btnSize: ['$10', '$4']
      },
      lg: {
        fontSize: '$lg',
        btnSize: ['$12', '$5']
      },
      xl: {
        fontSize: '$xl',
        btnSize: ['$14', '$6']
      }
    },
    variant: {
      white: {
        backgroundColor: '$gray3',
        color: '$gray12',
        '&:hover': { backgroundColor: '$gray4' },
        '&:focus': { boxShadow: '0 0 0 2px white, 0 0 0 4px $colors$gray12' },
        '&:active': { backgroundColor: '$gray6' }
      },
      black: {
        backgroundColor: '$gray12',
        color: '$gray1',
        '&:hover': { backgroundColor: '#353535' },
        '&:focus': {
          boxShadow: '0 0 0 2px white, 0 0 0 4px $colors$gray12'
        },
        '&:active': { backgroundColor: '$gray12' }
      }
    }
  },
  defaultVariants: {
    size: 'lg',
    variant: 'white'
  }
})

const LINKS: {
  id: number
  label: string
  variant: 'white' | 'black'
  icon: any
}[] = [
  {
    id: 0,
    label: 'Linkedin',
    variant: 'white',
    icon: <LinkedInLogoIcon />
  },
  {
    id: 1,
    label: 'Github',
    variant: 'white',
    icon: <GitHubLogoIcon />
  },
  {
    id: 3,
    label: 'Twitter',
    variant: 'white',
    icon: <TwitterLogoIcon />
  },
  {
    id: 4,
    label: 'Contact',
    variant: 'black',
    icon: <EnvelopeClosedIcon />
  }
]

export default function Home() {
  const { breakpointContext: breakpoint } = useBreakpoint()
  return (
    <>
      <Head>
        <title>Damián Ricobelli - Frontend Engineer</title>
        <meta
          name="description"
          content="I'm a Frontend Developer with more than 5 years of experience, focused on React, Next JS and development of libraries for the Styled System of products. Currently working on GuruHotel, using Next JS and GraphQL as core."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HStack justifyContent="space-between" alignItems="center">
        <Text>Damián Ricobelli</Text>
        {breakpoint.lg ? (
          <HStack spacing="6">
            {LINKS.map((link) => (
              <Button
                variant={link.variant}
                key={link.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <HStack spacing="4">
                  {link.icon}
                  {link.label}
                </HStack>
              </Button>
            ))}
          </HStack>
        ) : (
          <Sheet>
            <SheetTrigger asChild>
              <Box
                css={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '$full',
                  h: '$10',
                  w: '$10',
                  backgroundColor: '$gray12',
                  color: '$gray1',
                  '&:hover': { backgroundColor: '$gray11' },
                  '&:focus': { boxShadow: `0 0 0 2px white` }
                }}
              >
                <HamburgerMenuIcon />
              </Box>
            </SheetTrigger>
            <SheetContent size="lg" placement="right">
              <SheetClose
                css={{ position: 'absolute', top: '$2', right: '$2' }}
                asChild
              ></SheetClose>
            </SheetContent>
          </Sheet>
        )}
      </HStack>
    </>
  )
}
