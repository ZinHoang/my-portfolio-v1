import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export const HeaderPhotoSliderContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 0;
  width: 100%;
`;

export const MyBackPortraitImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  z-index: 2;
  max-width: 28rem;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 70vh;
  position: relative;
  object-position: bottom;
  object-fit: cover;
`;

export const SwiperContainer = styled(Swiper)`
  width: 100%;
  height: 100%;
  .swiper-pagination-bullet {
    background: var(--color-primary);
  }
`;






