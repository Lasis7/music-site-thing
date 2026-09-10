import type { ReactNode } from 'react';

export default function Card({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="bg-card w-full min-w-30 p-8 border-border-color border rounded-md mt-10 max-w-190 xl:max-w-3/4">
        {children}
      </div>
    </div>
  );
}
