import * as pages from './pages'
import { StoriesIcon } from './external_components'

export const routes = [
  {
    path: '/',
    component: pages.Stories,
    exact: true,
    isMenuItems: true,
    label: 'Stories',
    icon: StoriesIcon
  },
  // {
  //   path: '/stories/:id',
  //   component: pages.Story,
  // },
]