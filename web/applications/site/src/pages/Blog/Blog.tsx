import { IconButton, Typography, Widget, WidgetContent, WidgetHeader } from '@kusite/components'
import { RiRssLine } from '@remixicon/react'
import { Component, type ComponentChildren } from 'preact'
import { withTranslation } from 'react-i18next'
import * as styles from './Blog.module.scss'
import type { Props } from './types'

class Blog extends Component<Props> {
  public override render(): ComponentChildren {
    const { t } = this.props

    return (
      <div className={styles.blogRoot}>
        <Widget>
          <WidgetHeader
            title={t('articles.title')}
            action={
              <IconButton>
                <RiRssLine />
              </IconButton>
            }
          />
          <WidgetContent>
            <Typography children=":(" />
          </WidgetContent>
        </Widget>
      </div>
    )
  }
}

export default withTranslation('page', { keyPrefix: 'blog' })(Blog)
