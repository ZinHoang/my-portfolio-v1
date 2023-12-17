import React, { useState } from 'react';
import myBackPortrait from '../../../assets/my-back-portrait.png';
import cloneMyself from '../../../assets/CloneMyself.png';
import moonwalk from '../../../assets/moonwalk.gif';
import {
  BackgroundImage,
  HeaderPhotoSliderContainer,
  MyBackPortraitImage,
  SwipeRightGif,
  SwiperContainer,
  SwipeRightContainer,
  SwiperSlideWrapper,
  BlankWhiteBackground,
} from './HeaderPhotoSlider.styles';
import 'swiper/swiper-bundle.css';

export const HeaderPhotoSlider = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hasSwiped, setHasSwiped] = useState(false);

  return (
    <>
      <HeaderPhotoSliderContainer
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && !hasSwiped && (
          <SwipeRightContainer>
            <SwipeRightGif src={moonwalk} alt="moonwalk" />
          </SwipeRightContainer>
        )}
        <MyBackPortraitImage src={myBackPortrait} alt="my-back-portrait" />
        <SwiperContainer
          spaceBetween={0}
          slidesPerView={1}
          grabCursor={true}
          loop={true}
          onTransitionStart={() => setHasSwiped(true)}
        >
          {/* <SwiperSlideWrapper>
            <BlankWhiteBackground />
          </SwiperSlideWrapper> */}
          <SwiperSlideWrapper>
            <BackgroundImage src={cloneMyself} alt="" />
          </SwiperSlideWrapper>
          <SwiperSlideWrapper>
            <BackgroundImage
              src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/1bdebd02-d675-4469-be36-dc248448980d"
              alt=""
            />
          </SwiperSlideWrapper>
          <SwiperSlideWrapper>
            <BackgroundImage
              src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/62411bbf-dde9-4654-9298-1fe3e7da2d64"
              alt=""
            />
          </SwiperSlideWrapper>
        </SwiperContainer>
      </HeaderPhotoSliderContainer>
    </>
  );
};
