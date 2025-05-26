import Container from '#/Container'
import clsx from 'clsx'
import type { ComponentChildren } from 'preact'
import type { Props } from './types'
import * as styles from './WidgetContent.module.scss'

export default function WidgetContent({ className, ...rest }: Props): ComponentChildren {
  return <Container className={clsx(styles.widgetContent, className)} {...rest} />
}
