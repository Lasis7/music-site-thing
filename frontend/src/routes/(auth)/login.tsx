import { createFileRoute, redirect } from '@tanstack/react-router';
import { Login } from '@/features/auth/Login';

export const Route = createFileRoute('/(auth)/login')({
  beforeLoad: ({ context }) => {
    if (context.auth.user) {
      throw redirect({ to: '/discover' });
    }
  },

  component: Login,
});
