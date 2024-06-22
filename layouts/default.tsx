import { Head } from './head';

import { Navbar } from '@/components/navbar';
import Footer from '@/components/footer';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-scroll">
      <Head />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
