"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function TraCuuPhatNguoiBanner() {
  return (
    <div className="pt-20 lg:pt-[97px]">
      <Swiper spaceBetween={50} autoplay slidesPerView={1}>
        <SwiperSlide>
          <img src="/images/tra-cuu-1.png" alt="" className="block mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/tra-cuu-2.png" alt="" className="block mx-auto" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TraCuuPhatNguoiBanner;
