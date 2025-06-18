import { IconButton, Typography, Widget, WidgetContent, WidgetHeader } from '@kusite/components'
import { RiRssLine } from '@remixicon/react'
import type { ComponentChildren } from 'preact'
import { useTranslation } from 'react-i18next'
import * as styles from './Blog.module.scss'

export default function Blog(): ComponentChildren {
  const { t } = useTranslation('page', { keyPrefix: 'blog' })

  return (
    <div className={styles.blogRoot}>
      <Widget>
        <WidgetHeader
          label={t('articles.title')}
          action={
            <IconButton element="a" href="/">
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
