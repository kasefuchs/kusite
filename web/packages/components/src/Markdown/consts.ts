import Link, { type LinkProps } from '@/Link'
import Typography, { type TypographyProps } from '@/Typography'
import type { MarkdownToJSX } from 'markdown-to-jsx'
import Divider from '@/Divider'
import Image from '@/Image'
import Container from '@/Container'

export const options: MarkdownToJSX.Options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        variant: 'h1',
        marginBottom: true,
      } satisfies TypographyProps,
    },
    h2: {
      component: Typography,
      props: {
        variant: 'h2',
        marginBottom: true,
      } satisfies TypographyProps,
    },
    h3: {
      component: Typography,
      props: {
        variant: 'h3',
        marginBottom: true,
      } satisfies TypographyProps,
    },
    h4: {
      component: Typography,
      props: {
        variant: 'h4',
        marginBottom: true,
      } satisfies TypographyProps,
    },
    h5: {
      component: Typography,
      props: {
        variant: 'h5',
        marginBottom: true,
      } satisfies TypographyProps,
    },
    h6: {
      component: Typography,
      props: {
        variant: 'h6',
        marginBottom: true,
      } satisfies TypographyProps,
    },
    p: {
      component: Typography,
      props: {
        variant: 'body1',
        marginBottom: true,
      } satisfies TypographyProps,
    },
    a: {
      component: Link,
      props: {
        underline: 'always',
      } satisfies LinkProps,
    },
    hr: { component: Divider },
    img: { component: Image },
    pre: {
      component: Typography,
      props: {
        element: 'pre',
        variant: 'body2',
        marginBottom: true,
      } satisfies TypographyProps,
    },
    code: { component: Container },
    Container: { component: Container },
  },
}
