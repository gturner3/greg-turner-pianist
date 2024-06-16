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
      <div className="flex flex-col flex-grow">{children}</div>
      <footer className="flex justify-center p-6 items-center">
        <span className="font-thin pr-2 text-xs">Last updated June 2024</span>
        <ThemeSwitch />
      </footer>
    </div>
  );
}
