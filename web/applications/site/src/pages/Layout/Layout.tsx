import NavigationLink from '@/components/NavigationLink'
import RootStoreContext from '@/contexts/RootStoreContext'
import Blog from '@/pages/Blog'
import Home from '@/pages/Home'
import { AppBar, IconButton, Toolbar, Typography } from '@kusite/components'
import { RiEarthLine } from '@remixicon/react'
import { observer } from 'mobx-react'
import type { ComponentChildren } from 'preact'
import { useTranslation } from 'react-i18next'
import { Route, Switch } from 'wouter'
import * as styles from './Layout.module.scss'
import { useContext } from 'preact/hooks'

function Layout(): ComponentChildren {
  const { t } = useTranslation('page', { keyPrefix: 'root' })
  const context = useContext(RootStoreContext)!
  const copyrightYear = new Date().getFullYear()

  return (
    <div className={styles.layoutRoot}>
      <AppBar element="header" className={styles.layoutHeader}>
        <Toolbar element="nav" className={styles.layoutNavigationRail}>
          <NavigationLink to={'/'} children={t('header.navigation.home')} />
          <NavigationLink to={'/blog'} children={t('header.navigation.blog')} />
        </Toolbar>
        <Toolbar element="fieldset" className={styles.layoutActionRail}>
          <IconButton onClick={() => context.i18n.nextLanguage()}>
            <RiEarthLine size={24} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main className={styles.layoutContent}>
        <Switch>
          <Route path={'/'} children={<Home />} />
          <Route path={'/blog'} children={<Blog />} />
        </Switch>
      </main>
      <AppBar element="footer" className={styles.layoutFooter}>
        <Typography children={t('footer.copyright', { year: copyrightYear })} />
      </AppBar>
    </div>
  )
}

export default observer(Layout)
