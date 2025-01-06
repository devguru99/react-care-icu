import HomeIcon from '@mui/icons-material/Home';

import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Homepage]: {
    component: asyncComponentLoader(() => import('@/pages/Homepage')),
    path: '/',
    title: 'Home',
    icon: HomeIcon,
  },
  [Pages.About]: {
    component: asyncComponentLoader(() => import('@/pages/About')),
    path: '/about',
    title: 'About',
  },
  [Pages.Contact]: {
    component: asyncComponentLoader(() => import('@/pages/Contact')),
    path: '/contact',
    title: 'Contact',
  },
  [Pages.Faq]: {
    component: asyncComponentLoader(() => import('@/pages/Faq')),
    path: '/faq',
    title: 'Faq',
  },
  [Pages.Blogs]: {
    component: asyncComponentLoader(() => import('@/pages/Blogs')),
    path: '/blogs',
    title: 'Blogs',
  },
  [Pages.Blog]: {
    component: asyncComponentLoader(() => import('@/pages/Blog')),
    path: '/blog/:slug',
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '/*',
  },
};

export default routes;
