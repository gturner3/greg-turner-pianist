import { ThemeSwitch } from '@/components/theme-switch';
import { EmailIcon, FacebookIcon, InstagramIcon, YoutubeIcon } from './icons';
import { Divider } from '@nextui-org/divider';
import Section from '@/layouts/section';
import { Link } from '@nextui-org/link';

export default function Footer() {
  return (
    <div className="pb-6">
      <Section>
        <div className="flex flex-col">
          <Divider className="my-4" />
          <div className="w-full flex justify-center items-center gap-6">
            <Link
              color="foreground"
              href="https://instagram.com/gregturnerpianist"
              target="_blank"
            >
              <InstagramIcon />
            </Link>
            <Link
              color="foreground"
              href="https://facebook.com"
              target="_blank"
            >
              <FacebookIcon />
            </Link>
            <Link
              color="foreground"
              href="https://www.youtube.com/@gregturnerpianist"
              target="_blank"
            >
              <YoutubeIcon />
            </Link>
            <Link
              color="foreground"
              href="mailto:gregturnerpianist@gmail.com"
              target="_blank"
            >
              <EmailIcon />
            </Link>
            <ThemeSwitch />
          </div>
        </div>
      </Section>
    </div>
  );
}
