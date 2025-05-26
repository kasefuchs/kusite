import { Link } from '@kusite/components'
import clsx from 'clsx'
import { Link as WouterLink, useRoute } from 'wouter'
import * as styles from './NavigationLink.module.scss'
import type { Props } from './types'

export default function NavigationLink({ children, ...rest }: Props) {
  const [isActive] = useRoute(rest.to)

  return (
    <WouterLink asChild {...rest}>
      <Link
        underline="never"
        variant={isActive ? 'subtitle1' : 'body1'}
        children={children}
        className={clsx(styles.navigationLink, isActive && styles.navigationLinkActive)}
      />
    </WouterLink>
  )
}
