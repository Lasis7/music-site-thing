import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { NavBar } from '../-components/-navbar/-navbar';

export const Route = createFileRoute('/(app)')({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.user) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: AppLayout,
});

function AppLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
