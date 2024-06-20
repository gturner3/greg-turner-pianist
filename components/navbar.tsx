import {
  Button,
  Link,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@nextui-org/react';
import { siteConfig } from '@/config/site';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const currentNav = usePathname();

  return (
    <NextUINavbar
      className="gap-0"
      maxWidth="xl"
    >
      <NavbarContent
        className="sm:hidden"
        justify="start"
      >
        <NavbarMenuToggle />
        <Brand />
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex"
        justify="center"
      >
        <Brand />
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <NavLink
              currentNav={currentNav}
              href={item.href}
              label={item.label}
            />
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent
        justify="end"
        className="hidden sm:flex"
      >
        <NavbarItem>
          <Button
            color="primary"
            variant="shadow"
            radius="full"
            as={Link}
            href="/contact"
          >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {siteConfig.navItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <NavLink
              currentNav={currentNav}
              href={item.href}
              label={item.label}
            />
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button
            color="primary"
            variant="shadow"
            radius="full"
            as={Link}
            href="/contact"
            fullWidth
          >
            Contact
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};

type BrandProps = {
  onPress?: () => void;
};

const Brand = (props: BrandProps) => {
  return (
    <NavbarBrand>
      <Link
        href="/"
        onPress={props.onPress}
        color="foreground"
        size="lg"
        className="font-bold"
      >
        Greg Turner
      </Link>
    </NavbarBrand>
  );
};

type NavLinkProps = {
  href: string;
  currentNav: string;
  label: string;
};

const NavLink = (props: NavLinkProps) => {
  return (
    <Link
      color={props.currentNav === props.href ? 'primary' : 'foreground'}
      href={props.href}
    >
      {props.label}
    </Link>
  );
};
