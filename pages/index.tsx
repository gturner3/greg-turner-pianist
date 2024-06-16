import { title, subtitle } from '@/components/primitives';
import Splash from '@/components/splash';
import DefaultLayout from '@/layouts/default';
import Section from '@/layouts/section';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Splash />
    </DefaultLayout>
  );
}
