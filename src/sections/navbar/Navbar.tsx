import React from 'react'
import logo from '../../assets/logo.jpg';
import { IoIosColorPalette } from 'react-icons/io';
import {
  NavbarContainer,
  NavbarLogoLink,
  NavbarMenu,
  MenuItem,
  NavbarWrapper,
  ThemeButton,
} from './Navbar.styles';

/**
 * NavBar is only rendered for larger devices
 */
export const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarLogoLink href="index.html">
          {/* To change this logo image to my signature brand of ZH or something minimal but elegant */}
          <img src={logo} alt="Logo" />
        </NavbarLogoLink>
        <NavbarMenu>
          <NavbarMenuItem link="#home" title="Home" />
          <NavbarMenuItem link="#about" title="About" />
          <NavbarMenuItem link="#services" title="Services" />
          <NavbarMenuItem link="#portfolio" title="Portfolio" />
          <NavbarMenuItem link="#contact" title="Contact" />
        </NavbarMenu>
        <ThemeButton
        // onClick={showModalHandler}
        >
          <IoIosColorPalette />
        </ThemeButton>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

interface NavbarMenuItemProps {
  link: string;
  title: string;
}

const NavbarMenuItem = ({ link, title }: NavbarMenuItemProps) => {
  return (
    <li>
      <MenuItem href={link}>{title}</MenuItem>
    </li>
  );
};