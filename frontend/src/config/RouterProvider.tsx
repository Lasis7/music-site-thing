import { useAuth } from '@/providers/AuthProvider/useAuth';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from '@/routeTree.gen';
import { useEffect } from 'react';

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
  context: { auth: undefined! },
});

// Typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export function InnerApp() {
  const auth = useAuth();

  useEffect(() => {
    router.invalidate();
  }, [auth.user]);

  return <RouterProvider router={router} context={{ auth }} />;
}
