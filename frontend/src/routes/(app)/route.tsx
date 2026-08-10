import { createFileRoute, redirect } from '@tanstack/react-router';
import { AppLayout } from '@/features/app/AppLayout';

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
