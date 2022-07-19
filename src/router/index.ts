import { createRouter, createWebHashHistory } from 'vue-router';
import transitionRoutes from './modules/transition';
import keepAliveRoutes from './modules/keepAlive';
import teleportRoutes from './modules/teleport';
import suspenseRoutes from './modules/suspense';
import typescriptRoutes from './modules/typescript';
import testRoutes from './modules/test';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'Test',
      path: '/test',
      component: () => import('../components/Test/TestPage.vue'),
    },
    {
      name: 'Test2',
      path: '/test2',
      component: () => import('../components/Test/TestPage2.vue'),
    },
    {
      name: 'Test3',
      path: '/test3',
      component: () => import('../components/Test/TestPage3.vue'),
    },
    {
      name: 'Test4',
      path: '/test4',
      component: () => import('../components/Test/TestPage4.vue'),
    },
    {
      name: 'Test5',
      path: '/test5',
      component: () => import('../components/Test/TestPage5.vue'),
    },
    {
      name: 'Test6',
      path: '/test6',
      component: () => import('../components/Test/TestPage6.vue'),
    },
    {
      name: 'Test7',
      path: '/test7',
      component: () => import('../components/Test/TestPage7.vue'),
    },
    {
      name: 'Watch',
      path: '/watch',
      component: () => import('../components/Watch/WatchPage.vue'),
    },
    {
      name: 'Animate',
      path: '/animate',
      component: () => import('../components/Animate/AnimatePage.vue'),
    },
    {
      name: 'AnimateGroup',
      path: '/animateGroup',
      component: () => import('../components/Animate/AnimateGroupPage.vue'),
    },
    {
      name: 'AnimateGroup2',
      path: '/animateGroup2',
      component: () => import('../components/Animate/AnimateGroupPage2.vue'),
    },
    {
      name: 'Tree',
      path: '/tree',
      component: () => import('../components/Tree/TreePage.vue'),
    },
    {
      name: 'Async',
      path: '/async',
      component: () => import('../components/Async/AsyncPage.vue'),
    },
    // {
    //   name: 'Button',
    //   path: '/button',
    //   component: () => require('../docs/button.md'),
    // },
    {
      name: 'Slot',
      path: '/slot',
      component: () => import('../components/Slot/SlotPage.vue'),
    },
    {
      name: 'Provide',
      path: '/provide',
      component: () => import('../components/Provide/ProvidePage.vue'),
    },
    {
      name: 'device',
      path: '/device',
      component: () => import('../components/Device/DevicePage.vue'),
    },
    {
      name: 'composition',
      path: '/composition',
      component: () => import('../components/Composition/CompositionPage.vue'),
    },
    {
      name: 'composition2',
      path: '/composition2',
      component: () => import('../components/Composition/CompositionPage2.vue'),
    },
    ...transitionRoutes,
    ...keepAliveRoutes,
    ...teleportRoutes,
    ...suspenseRoutes,
    ...typescriptRoutes,
    ...testRoutes,
  ],
});

export default router;
