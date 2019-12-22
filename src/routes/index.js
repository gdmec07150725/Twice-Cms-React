/* 路由定义 */
import { lazy } from 'react';

import Layouts from '@/pages/Layouts';
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Notes = lazy(() => import('@/pages/Notes'));
const Folder = lazy(() => import('@/pages/Document/Folder'));
const File = lazy(() => import('@/pages/Document/File'));

/* 需要权限的路由 */
const routerMap = [
  {
    path: '/',
    redirect: '/workplace/index',
    hidden: false,
    exact: true,
  },
  {
    path: '/workplace',
    // redirect: '/workplace/index',
    component: Layouts,
    children: [
      {
        path: '/workplace/index',
        component: Dashboard,
        hidden: false,
        exact: true,
      },
    ]
  },
  {
    path: '/notes',
    component: Layouts,
    hidden: false,
    children: [
      {
        path: '/notes/index',
        component: Notes,
        hidden: false,
        exact: true,
      }
    ]
  },
  {
    path: '/document',
    component: Layouts,
    hidden: false,
    children: [
      {
        path: '/document/folder',
        component: Folder,
        hidden: false,
        exact: true,
      },
      {
        path: '/document/file',
        component: File,
        hidden: false,
        exact: true,
      },
    ]
  },
]

export default routerMap;
