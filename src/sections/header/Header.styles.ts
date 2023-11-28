import { Container } from 'src/styles/Container';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({ duration: 2000 });

export const FadeUpAnimation = styled.div.attrs({
  'data-aos': 'fade-up',
} as React.HTMLAttributes<HTMLDivElement>)``;

export const HeaderWrapper = styled.header`
  margin-top: 5rem;
  height: calc(100vh - 5rem);
  display: grid;
  place-items: center;
  background: var(--color-white);
  transition: var(--transition);

  /* MEDIA QUERIES (tablets) */
  @media screen and (max-width: 1024px) {
    margin-top: 0;
    height: 100vh;
  }
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const HeaderProfile = styled.div`
  width: 18rem;
  height: 22rem;
  border-radius: 9rem 9rem 2rem 2rem;
  overflow: hidden;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 600px) {
    width: 14rem;
    height: 17rem;
    max-width: 60%;
    max-height: 35vh;
  }
`;

export const HeaderParagraph = styled.p`
  width: 35rem;
  text-align: center;
  margin: 0.6rem 0 2rem;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const HeaderButtonLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  @media screen and (max-width: 600px) {
    gap: 1rem;
  }
`;

export const SocialMediaLinkContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const IconLink = styled.a`
  width: 1.8rem;
  aspect-ratio: 1/1;
  background: var(--color-light);
  color: var(--color-black);
  display: grid;
  place-items: center;
  border-radius: var(--border-radius-3);

  &:hover {
    background: var(--color-primary);
    color: var(--color-white);
    transform: translateX(-0.5rem);
  }
  &:not(:hover) {
    transform: translateX(0);
  }
`;
