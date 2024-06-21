import { ThemeSwitch } from '@/components/theme-switch';
import { EmailIcon, FacebookIcon, InstagramIcon, YoutubeIcon } from './icons';
import { Divider } from '@nextui-org/divider';
import Section from '@/layouts/section';

export default function Footer() {
  return (
    <div className="pb-8">
      <Section>
        <div className="flex flex-col">
          <Divider className="my-4" />
          <div className="w-full flex justify-center items-center gap-6">
            <InstagramIcon />
            <FacebookIcon />
            <YoutubeIcon />
            <EmailIcon />
            <ThemeSwitch />
          </div>
        </div>
      </Section>
    </div>
  );
}
