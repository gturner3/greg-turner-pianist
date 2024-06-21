import { Head } from './head';

import { Navbar } from '@/components/navbar';
import { ThemeSwitch } from '@/components/theme-switch';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-scroll">
      <Head />
      <Navbar />
      <div>
        {children}
        <div className="flex justify-center p-6 items-center">
          <span className="font-thin pr-2 text-s">
            gregturnerpianist@gmail.com
          </span>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
}
