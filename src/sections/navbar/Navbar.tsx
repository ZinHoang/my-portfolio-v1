import React from 'react'
import logo from '../../assets/logo.jpg';
import { GiPaintRoller } from 'react-icons/gi';
import {
  NavbarContainer,
  NavbarLogoLink,
  NavbarMenu,
  NavbarWrapper,
  ThemeButton,
} from './Navbar.styles';
import { Link } from 'react-router-dom';

/**
 * NavBar is only rendered for larger devices
 */
export const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarLogoLink href="/">
          {/* To change this logo image to my signature brand of ZH or something minimal but elegant */}
          {/* <img src={logo} alt="Logo" /> */}
          ZH
        </NavbarLogoLink>
        <NavbarMenu>
          {/* Will eventually remove Home and creata a clickable ZH logo like Adham AD */}
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          {/* Consider to add Resume that will open a PDF file in a new page  */}
        </NavbarMenu>
        <ThemeButton
        // onClick={showModalHandler}
        >
          <GiPaintRoller />
        </ThemeButton>
      </NavbarContainer>
    </NavbarWrapper>
  );
};
