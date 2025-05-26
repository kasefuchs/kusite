import NavigationLink from '#/components/NavigationLink'
import RootStoreContext from '#/contexts/RootStoreContext'
import Blog from '#/pages/Blog'
import Home from '#/pages/Home'
import { AppBar, IconButton, Toolbar, Typography } from '@kusite/components'
import { RiEarthLine } from '@remixicon/react'
import { observer } from 'mobx-react'
import { Component, type ComponentChildren, type ContextType } from 'preact'
import { withTranslation } from 'react-i18next'
import { Route, Switch } from 'wouter'
import * as styles from './Layout.module.scss'
import type { Props } from './types'

@observer
class Layout extends Component<Props> {
  private static readonly copyrightYear: number = new Date().getFullYear()

  public static override readonly contextType = RootStoreContext
  public declare readonly context: NonNullable<ContextType<typeof RootStoreContext>>

  public override render(): ComponentChildren {
    const { t } = this.props

    return (
      <div className={styles.layoutRoot}>
        <AppBar element="header" className={styles.layoutHeader}>
          <img className={styles.layoutHeaderLogo} src={'https://avatars.githubusercontent.com/u/64592097'} />
          <Toolbar className={styles.layoutHeaderContent}>
            <Toolbar element="nav" className={styles.layoutNavigationRail}>
              <NavigationLink to={'/'} children={t('header.navigation.home')} />
              <NavigationLink to={'/blog'} children={t('header.navigation.blog')} />
            </Toolbar>
            <Toolbar element="fieldset" className={styles.layoutActionRail}>
              <IconButton onClick={() => this.context.i18n.nextLanguage()}>
                <RiEarthLine size={24} />
              </IconButton>
            </Toolbar>
          </Toolbar>
        </AppBar>
        <main className={styles.layoutContent}>
          <Switch>
            <Route path={'/'} children={<Home />} />
            <Route path={'/blog'} children={<Blog />} />
          </Switch>
        </main>
        <AppBar element="footer" className={styles.layoutFooter}>
          <Typography children={t('footer.copyright', { year: Layout.copyrightYear })} />
        </AppBar>
      </div>
    )
  }
}

export default withTranslation('page', { keyPrefix: 'root' })(Layout)
