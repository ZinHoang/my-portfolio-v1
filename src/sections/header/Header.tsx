import React from 'react';
// import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FadeUpAnimation,
  HeaderButtonLinkContainer,
  HeaderContainer,
  HeaderParagraph,
  HeaderWrapper,
  IconLink,
  SocialMediaLinkContainer,
} from './Header.styles';
import { FaFacebookF } from 'react-icons/fa';
import { PiGithubLogoFill } from 'react-icons/pi';
import { BiLogoLinkedin } from 'react-icons/bi';
import { RiMessengerFill } from 'react-icons/ri';
import { PrimaryButtonLink, ButtonLink } from 'src/styles/ButtonLink';
import { HeaderPhotoSlider } from './components/HeaderPhotoSlider';

export const Header = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 2000 });
  // }, []);

  return (
    // Might need to apply separate animation for different sections
    <FadeUpAnimation>
      <HeaderPhotoSlider />
      <HeaderWrapper>
        <HeaderContainer>
          <h3> Zin Hoang</h3>

          <HeaderParagraph>
            You are a click away from building your dream website or web app.
            Send me the details of your project for a modern, mobile responsive,
            highly performant website today!
          </HeaderParagraph>

          <HeaderButtonLinkContainer>
            <PrimaryButtonLink href="#contact">Say Hi</PrimaryButtonLink>
            <ButtonLink href="#portfolio">View Projects</ButtonLink>
          </HeaderButtonLinkContainer>

          <SocialMediaLinkContainer>
            <SocialMediaLink
              href="https://www.linkedin.com/in/zinhoang/"
              icon={<BiLogoLinkedin />}
            />
            <SocialMediaLink
              href="https://m.me/zinedine.hoang"
              icon={<RiMessengerFill />}
            />
            <SocialMediaLink
              href="https://www.facebook.com/zinedine.hoang"
              icon={<FaFacebookF />}
            />
            <SocialMediaLink
              href="https://github.com/ZinHoang"
              icon={<PiGithubLogoFill />}
            />
          </SocialMediaLinkContainer>
        </HeaderContainer>
      </HeaderWrapper>
    </FadeUpAnimation>
  );
};

interface SocialMediaLinkProps {
  href: string;
  icon: JSX.Element;
}

const SocialMediaLink = ({ href, icon }: SocialMediaLinkProps) => (
  /**
   * the rel attribute is for security purposes
   * noreferrer hides the Referer header from the request to the new page, which prevents tracking the originating site
   * noopener prevents the newly opened tab or window from having access to the window.opener property of the original window
   * the window.opener property allows the child window to access and modify the properties of the parent window
   */
  <IconLink href={href} target="_blank" rel="noopener noreferrer">
    {icon}
  </IconLink>
);
