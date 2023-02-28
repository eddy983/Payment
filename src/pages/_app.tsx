import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React from 'react'
import ReactQueryProvider from '@/lib/react-query'
import '@/styles/globals.css'

import { Layout } from '@/components'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../public/styles/globals.css'
import 'slick-carousel/slick/slick.css'
import { pageAnimation } from '@/utils'

function MyApp({ Component, pageProps, ...appProps }: AppProps) {
  const router = useRouter()
  const routesWithLayout = ['/', '/invoice', '/card-details', '/create-pin']

  const isInRoutes = routesWithLayout.includes(appProps.router.pathname)
  const LayoutComponent = isInRoutes ? Layout : React.Fragment

  // const LayoutComponent = hasEmploymentFormsLayout ? EmploymentFormsLayout : isProtected ? Layout
  // : React.Fragment;

  return (
    <ReactQueryProvider>
      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="popLayout">
          <m.div
            variants={pageAnimation}
            key={router.pathname}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <LayoutComponent>
              <Component {...pageProps} />
            </LayoutComponent>
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </ReactQueryProvider>
  )
}

export default MyApp
