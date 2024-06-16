import {
  Button,
  Kbd,
  Avatar,
  Link,
  Input,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  link as linkStyles,
  NavbarItem,
  NavbarMenuItem,
} from '@nextui-org/react';
import { siteConfig } from '@/config/site';
import clsx from 'clsx';
import { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentNav, setCurrentNav] = useState('/');

  const updateNav = (nav: string) => {
    setCurrentNav(nav);
    setIsMenuOpen(false);
  };

  return (
    <NextUINavbar
      className="gap-0"
      maxWidth="xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent
        className="sm:hidden"
        justify="start"
      >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
        <Brand onClick={() => updateNav('/')} />
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex"
        justify="center"
      >
        <Brand onClick={() => updateNav('/')} />
        {siteConfig.navItems.map((item) => (
          <NavbarItem
            key={item.href}
            isActive={currentNav === item.href}
          >
            <NavLink
              href={item.href}
              label={item.label}
              onPress={() => updateNav(item.href)}
            />
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent
        justify="end"
        className="invisible sm:visible"
      >
        <NavbarItem>
          <Button
            color="primary"
            radius="full"
            as={Link}
            href="/contact"
            onPress={() => updateNav('/contact')}
          >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {siteConfig.navItems.map((item) => (
          <NavbarMenuItem
            key={item.href}
            isActive={currentNav === item.href}
          >
            <NavLink
              href={item.href}
              label={item.label}
              onPress={() => updateNav(item.href)}
            />
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
};

type BrandProps = {
  onClick: () => void;
};

const Brand = (props: BrandProps) => {
  return (
    <NavbarBrand>
      <NavLink
        href="/"
        label="Greg Turner"
        onPress={props.onClick}
        bold
      />
    </NavbarBrand>
  );
};

type NavLinkProps = {
  href: string;
  bold?: boolean;
  label: string;
  onPress: () => void;
};

const NavLink = (props: NavLinkProps) => {
  const fontStyle = props.bold ? 'font-bold' : 'font-medium';
  return (
    <Link
      onPress={props.onPress}
      className={clsx(
        linkStyles({ color: 'foreground' }),
        `data-[active=true]:text-primary data-[active=true]:${fontStyle}`,
        props.bold ? 'font-bold text-xl' : 'text-inherit'
      )}
      color="foreground"
      href={props.href}
    >
      {props.label}
    </Link>
  );
};
