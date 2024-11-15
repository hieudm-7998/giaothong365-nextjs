"use client";

import React, { useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useMediaQuery from "@/hooks/useMediaQuery";

const btns = [
  "Tất cả",
  "Tài chính",
  "Bảo hiểm",
  "Thể thao",
  "Sức khoẻ",
  "Công nghệ",
  "Phim ảnh",
  "Ô tô điện xe máy điện",
  "Ẩm thực",
  "Làm đẹp",
  "Vé máy bay",
];

function DoiTac() {
  const [selected, setSelected] = useState(btns[0]);
  const isDesktop = useMediaQuery("(min-width: 960px)");

  const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    slidesToShow: isDesktop ? 4 : 1,
    slidesToScroll: 1,
    edgeFriction: 0,
  };

  return (
    <div className="container lg:max-w-[1024px] pt-20 lg:pt-[97px]">
      <div className="py-10">
        <h1 className="text-center text-2xl font-semibold text-[#0d47a1] mb-6">
          Đối tác của Giao thông 365
        </h1>
        <div>
          <input
            className="w-full py-1 px-4 border-solid border-[1px] border-[#0d47a1] rounded-md mb-3"
            placeholder="Tìm thương hiệu"
          />
          <Slider {...settings} className="mb-5">
            {btns.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelected(item)}
                className={`${
                  selected === item
                    ? "outline outline-[2px] outline-[#0d47a1]"
                    : ""
                } mb-[2px] text-center bg-[#E0E0E0] rounded-xl `}
              >
                {item}
              </button>
            ))}
          </Slider>
          <div>
            <h1 className="text-2xl font-semibold text-[#0d47a1]">
              Thương hiệu hợp tác
            </h1>
            <div className="grid grid-cols-3 lg:grid-cols-5">
              <div>
                <img
                  src="/images/vni-logo.png"
                  alt=""
                  className="block mx-auto"
                />
              </div>
              <div>
                <img
                  src="/images/mic-logo.png"
                  alt=""
                  className="block mx-auto"
                />
              </div>
              <div>
                <img
                  src="/images/pvi-logo.png"
                  alt=""
                  className="block mx-auto"
                />
              </div>
              <div>
                <img
                  src="/images/tasco-logo.png"
                  alt=""
                  className="block mx-auto"
                />
              </div>
              <div>
                <img
                  src="/images/pti-logo.png"
                  alt=""
                  className="block mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoiTac;
