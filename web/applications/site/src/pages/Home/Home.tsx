import MarkdownWidget from '@/components/MarkdownWidget'
import type { ComponentChildren } from 'preact'
import { useTranslation } from 'react-i18next'
import * as styles from './Home.module.scss'

export default function Home(): ComponentChildren {
  const { t } = useTranslation('page', { keyPrefix: 'home' })

  return (
    <div className={styles.homeRoot}>
      <div className={styles.homePrimary}>
        <MarkdownWidget title={t('primary.welcome.title')} children={t('primary.welcome.content')} />
      </div>
      <div className={styles.homeSecondary}>
        <MarkdownWidget title="Test">Hello?</MarkdownWidget>
      </div>
    </div>
  )
}
