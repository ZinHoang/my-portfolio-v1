import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const HeaderPhotoSliderContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  /* width: 100%; */
  padding: 0;
  width: 50%;
  margin: 9.5rem auto;
  border: 0.313rem solid black;
  /* height: 100vh; */
  /* overflow: hidden; */
`;

export const SwipeRightContainer = styled.div`
  position: absolute;
  top: 10rem;
  right: 0;
  width: 10rem;
  height: 8rem;
  background-color: white;
  border-radius: 0.625rem 0 0 0.625rem;
  z-index: 3;
`;

export const SwipeRightGif = styled.img`
  position: absolute;
  top: -3rem;
  width: 12rem;
  height: 12rem;
`;

export const MyBackPortraitImage = styled.img`
  position: absolute;
  bottom: 0;
  z-index: 2;
  max-width: 28rem;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 65vh;
  position: relative;
  object-position: bottom;
  object-fit: cover;
  /* z-index: 1; */
`;

export const BlankWhiteBackground = styled.div`
  background-color: white; // just a placeholder, has no effect
`;

export const SwiperContainer = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

export const SwiperSlideWrapper = styled(SwiperSlide)`
  position: relative;
  text-align: center;
  font-size: 18px;
  /* background: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

// .title {
//   position: absolute;
//   top: 18%;
//   left: 50%;
//   -ms-transform: translate(-50%, -50%);
//   transform: translate(-50%, -50%);
//   font-size: 5rem;
//   letter-spacing: 0.3rem;
//   z-index: 5;
//   color: transparent;
//   background-position: 0 0;
//   animation: animated-text 20s linear infinite;
// }

// @keyframes animated-text {
//   100% {
//     background-position: 200% 0;
//   }
// }

// .one,
// .five {
//   -webkit-text-stroke: 1px rgba(16, 104, 31, 0.8);
//   background: url(https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e9d06cb6-2844-49ed-9bde-23d3364b9fa4);
//   background-clip: text;
//   -webkit-background-clip: text;
// }

// .two,
// .three,
// .four,
// .six {
//   -webkit-text-stroke: 1px #fff;
//   background: url(https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/ba4edde6-822d-437a-88c2-f54392d7a56f);
//   background-clip: text;
//   -webkit-background-clip: text;
// }
