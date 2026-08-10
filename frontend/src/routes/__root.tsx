import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import type { AuthContextType } from '../providers/AuthProvider/AuthContext';

interface RouterContext {
  auth: AuthContextType;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => {
    return (
      <div className="bg-linear-to-r from-bglighter to-bglighter p-12 min-w-screen w-full min-h-screen h-full relative">
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    );
  },
});
