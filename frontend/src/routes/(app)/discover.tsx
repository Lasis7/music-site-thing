import { createFileRoute } from '@tanstack/react-router';
import { Discover } from '@/features/app/Discover';

export const Route = createFileRoute('/(app)/discover')({
  component: Discover,
});
