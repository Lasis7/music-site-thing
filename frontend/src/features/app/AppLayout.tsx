import { NavBar } from '@/components/navbar/navbar';
import { Outlet } from '@tanstack/react-router';

export function AppLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
