const routes = [
  {
    name: 'transition',
    path: '/transition',
    component: () => import('../../Pages/Transition/TransitionPage.vue'),
  },
  {
    name: 'transitionGroup',
    path: '/transitionGroup',
    component: () => import('../../Pages/Transition/TransitionGroupPage.vue'),
  },
  {
    name: 'transitionGroup2',
    path: '/transitionGroup2',
    component: () => import('../../Pages/Transition/TransitionGroupPage2.vue'),
  },
];

export default routes;
