import Toolbar from '@/Toolbar'
import Typography from '@/Typography'
import clsx from 'clsx'
import type { ComponentChildren } from 'preact'
import type { Props } from './types'
import * as styles from './WidgetHeader.module.scss'

export default function WidgetHeader({
  element: Element = 'div',
  className,
  label,
  action,
  ...rest
}: Props): ComponentChildren {
  return (
    <Element className={clsx(styles.widgetHeader, className)} {...rest}>
      <Typography variant="subtitle1" className={styles.widgetHeaderTitle} children={label} />
      <Toolbar children={action} />
    </Element>
  )
}
