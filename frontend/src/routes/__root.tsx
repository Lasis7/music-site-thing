import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import type { AuthContextType } from '@/providers/AuthProvider/AuthContext';

interface RouterContext {
  auth: AuthContextType;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => {
    return (
      <div className="min-h-dvh w-full bg-background p-12">
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    );
  },
});
