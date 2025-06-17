import type { ComponentChildren } from 'preact'
import type { Props } from './types'
import Container from '@/Container'
import * as styles from './Image.module.scss'
import clsx from 'clsx'

export default function Image({ element = 'img', className, ...rest }: Props): ComponentChildren {
  return <Container element={element} className={clsx(styles.image, className)} {...rest} />
}
