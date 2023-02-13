import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import 'swiper/css';
import { heroBanner } from './Banner.types';
import { urlFor } from '@/lib/client';
import { Image, Promotion, Wrapper,SliderWrapper, ShopNow, TextWrapper } from './BannerSlieder.styles';


type Props = {
  banner: heroBanner[]
}
const BannerSlider: React.FC<Props> = ({ banner }) => {
  return (

    <Swiper
      style={Wrapper}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {banner.map(img => (
        <SwiperSlide key={img._id}>
          <SliderWrapper>
          <Image src={urlFor(img.image).url()} />
          <Promotion>{img.discount}</Promotion>
          </SliderWrapper>
          <TextWrapper>
          <ShopNow>{img.largeText1}</ShopNow>
          </TextWrapper>
        </SwiperSlide>
      ))}



    </Swiper>
  )
}

export default BannerSlider