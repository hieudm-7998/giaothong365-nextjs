"use client";

import { Box, ScrollArea } from "@radix-ui/themes";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

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

  return (
    <div className="container lg:max-w-[1024px] pt-20 lg:pt-[97px]">
      <div className="py-10">
        <h1 className="text-center text-2xl font-semibold text-[#0d47a1] mb-6">
          Đối tác của Giao thông 365
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
          <div className="flex flex-col justify-center gap-2 rounded-lg shadow-lg px-4 py-8">
            <h1 className="text-lg font-semibold text-[#0d47a1]">
              Có chất lượng
            </h1>
            <p>
              Thương hiệu sở hữu sản phẩm, dịch vụ chất lượng cao và ổn định
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 rounded-lg shadow-lg px-4 py-8">
            <h1 className="text-lg font-semibold text-[#0d47a1]">
              Có danh tiếng
            </h1>
            <p>
              Thương hiệu sở hữu sản phẩm, dịch vụ chất lượng cao và ổn định
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 rounded-lg shadow-lg px-4 py-8">
            <h1 className="text-lg font-semibold text-[#0d47a1]">
              Có hệ thống, chuỗi
            </h1>
            <p>
              Thương hiệu sở hữu sản phẩm, dịch vụ chất lượng cao và ổn định
            </p>
          </div>
        </div>
        <div>
          <input
            className="w-full py-1 px-4 border-solid border-[1px] border-[#0d47a1] rounded-md mb-3"
            placeholder="Tìm thương hiệu"
          />
          <div className="flex overflow-x-auto space-x-2 scrollbar-hide mb-20">
            {btns.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelected(item)}
                className={`${
                  selected === item ? "border-solid border-[#0d47a1]" : ""
                } px-10 bg-[#E0E0E0] rounded-xl whitespace-nowrap`}
              >
                {item}
              </button>
            ))}
          </div>
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
