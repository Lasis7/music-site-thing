import type { ReactNode } from 'react';

export default function InnerCard({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full bg-card p-8 border-general border rounded-md mt-10 min-w-25 max-w-190 xl:max-w-3/4">
        {children}
      </div>
    </div>
  );
}
