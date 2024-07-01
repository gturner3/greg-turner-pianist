import { EmailIcon, FacebookIcon, InstagramIcon, YoutubeIcon } from './icons';
import { Link } from '@nextui-org/link';

export default function UnderConstruction() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1280px] px-6 py-4 bg-warning text-foreground">
        <div className="text-center pb-2">
          This website is under construction. In the meantime, here are my
          socials and contact information!
        </div>
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
        </div>
      </div>
    </div>
  );
}
