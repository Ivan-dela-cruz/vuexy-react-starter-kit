import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [
  {
    path: '/error',
    component: lazy(() => import('../../components/public/error/Error')),
    layout: 'BlankLayout'
  },
  {
    path: '/home',
    component: lazy(() => import('../../components/public/home/Home')),
    layout: 'BlankLayout'
  },
  {
    path: '/login',
    component: lazy(() => import('../../components/public/login/LoginV2')),
    layout: 'BlankLayout'
  },
  {
    path: '/second-page',
    component: lazy(() => import('../../components/user/second-page/SecondPage')),
    meta: {
      authRoute: true
    }
  }
]

export { DefaultRoute, TemplateTitle, Routes }
