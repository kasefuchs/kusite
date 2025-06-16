import I18nProvider from '@/providers/I18nProvider'
import StoreProvider from '@/providers/StoreProvider'
import { Router } from 'wouter'
import type { Props } from './types'
import type { ComponentChildren } from 'preact'

export default function ApplicationProvider(props: Props): ComponentChildren {
  const routerBase = import.meta.env.BASE_URL.replace(/\/$/, '')

  return (
    <I18nProvider>
      <StoreProvider>
        <Router base={routerBase} children={props.children} />
      </StoreProvider>
    </I18nProvider>
  )
}
