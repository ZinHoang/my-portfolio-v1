import React from 'react';
import myBackPortrait from '../../../assets/my-back-portrait.png';
import lakePukaki from '../../../assets/lake-pukaki.jpg';
import fansipanMountain from '../../../assets/fansipan-mountain.jpg';
import childrenPlaying from '../../../assets/children-playing.jpg';
import {
  BackgroundImage,
  HeaderPhotoSliderContainer,
  MyBackPortraitImage,
  SwiperContainer,
} from './HeaderPhotoSlider.styles';
import 'swiper/swiper-bundle.css';
import styled from 'styled-components';
import { Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { Typewriter } from 'react-simple-typewriter';
import { RxCamera } from 'react-icons/rx';

export const HeaderPhotoSlider = () => {
  const firstSlideWords = [
    `👋 I'm Zin, a pull-stack developer hailing from the windiest city on Earth...`,
    `Yep, that's Wellington, New Zealand - where umbrellas are practically a fashion accessory`,
    `It's so windy that I once saw a bird flying backwards `,
  ];

  return (
    <>
      <HeaderPhotoSliderContainer
      // onMouseEnter={() => setTransitionEnded(true)}
      // onMouseLeave={() => setTransitionEnded(false)}
      >
        {/* <MyBackPortraitImage src={myBackPortrait} alt="my-back-portrait" /> */}
        <SwiperContainer
          spaceBetween={0}
          slidesPerView={1}
          grabCursor={true}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            type: 'bullets',
          }}
        >
          <MyBackPortraitImage src={myBackPortrait} alt="my-back-portrait" />
          {/* Might rename this styled component as it does not currently apply any styling */}
          <SwiperSlide>
            <BackgroundImage src={lakePukaki} alt="" />

            <TypeWriterContainer>
              <Typewriter
                words={firstSlideWords}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={45}
                deleteSpeed={15}
                delaySpeed={5000}
              />
            </TypeWriterContainer>
            <PictureInfo>
              <CameraIcon>
                <RxCamera />
              </CameraIcon>
              Lake Pukaki, Canterbury
            </PictureInfo>
          </SwiperSlide>

          <SwiperSlide>
            <BackgroundImage src={childrenPlaying} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <BackgroundImage src={fansipanMountain} alt="" />
          </SwiperSlide>
        </SwiperContainer>
      </HeaderPhotoSliderContainer>
    </>
  );
};

const PictureInfo = styled.div`
  position: absolute;
  bottom: 30;
  right: 50;
  color: white;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CameraIcon = styled(RxCamera)`
  font-size: 1.5em;
  margin-bottom: 0.5rem;
`;

const TypeWriterContainer = styled.div`
  position: absolute;
  top: 110;
  /* left: 0; */
  font-weight: bold;
  color: white;
  font-size: 1.3em;
  margin-left: 4rem;
  width: 20rem;
`;
