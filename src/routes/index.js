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
    hidden: true,
    exact: true,
  },
  {
    path: '/workplace',
    component: Layouts,
    title: 'Workplace Manage',
    icon: 'dashboard',
    children: [
      {
        path: '/workplace/index',
        component: Dashboard,
        hidden: false,
        exact: true,
        title: 'Dashboard'
      },
    ]
  },
  {
    path: '/notes',
    component: Layouts,
    hidden: false,
    title: 'Notes Manage',
    icon: 'profile',
    children: [
      {
        path: '/notes/index',
        component: Notes,
        hidden: false,
        exact: true,
        title: 'Notes'
      }
    ]
  },
  {
    path: '/document',
    component: Layouts,
    hidden: false,
    title: 'Document Manage',
    icon: 'folder-open',
    children: [
      {
        path: '/document/folder',
        component: Folder,
        hidden: false,
        exact: true,
        title: 'Folder',
      },
      {
        path: '/document/file',
        component: File,
        hidden: false,
        exact: true,
        title: 'File'
      },
    ]
  },
]

export default routerMap;
