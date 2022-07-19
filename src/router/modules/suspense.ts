const suspenseRoutes = [
  {
    name: 'suspense',
    path: '/suspense',
    component: () => import('../../Pages/Suspense/SuspensePage.vue'),
  },
];

export default suspenseRoutes;
