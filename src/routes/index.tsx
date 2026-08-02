import { createFileRoute, Navigate } from '@tanstack/react-router';
import { useAuth } from './-providers/-useAuth';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }
  return <Navigate to="/discover" />;
}
