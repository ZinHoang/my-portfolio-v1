import { Container } from 'src/styles/Container';
import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  width: 100vw;
  height: 5rem;
  display: grid;
  place-items: center;
  background: var(--color-primary);
  position: fixed;
  top: 0;
  left: 0;
  /* Try removing this z-index if possible */
  z-index: 9;
  box-shadow: 0 1rem 1.5rem hsla(var(--primary-hue), 68%, 42%, 20%);
  transition: var(--transition);
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarLogoLink = styled.a`
  width: 2.5rem;
  border-radius: 50%;
  overflow: hidden;
`;

export const NavbarMenu = styled.ul`
  display: flex;
  gap: 3.5rem;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const MenuItem = styled.a`
  color: white;
`;

export const ThemeButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;
