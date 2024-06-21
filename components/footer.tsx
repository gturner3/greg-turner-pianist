import { ThemeSwitch } from '@/components/theme-switch';

export default function Footer() {
  return (
    <div className="flex justify-center px-6 pt-8 pb-6 items-center">
      <span className="font-thin pr-2 text-s text-foreground">
        gregturnerpianist@gmail.com
      </span>
      <ThemeSwitch />
    </div>
  );
}
