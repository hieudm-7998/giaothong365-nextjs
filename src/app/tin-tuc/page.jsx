"use client";

import { ChevronRight, Eye, MessageSquareText, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const news = [
  {
    date: "19/09/2024",
    title:
      "Cập nhật tình hình giao thông mùa mưa bão và cách bảo vệ bạn của bảo hiểm ô tô",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    date: "19/09/2024",
    title:
      "Cập nhật tình hình giao thông mùa mưa bão và cách bảo vệ bạn của bảo hiểm ô tô",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    date: "19/09/2024",
    title:
      "Cập nhật tình hình giao thông mùa mưa bão và cách bảo vệ bạn của bảo hiểm ô tô",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

function TinTuc() {
  return (
    <>
      <div className="pt-20 lg:pt-[105px]">
        <Swiper spaceBetween={50} autoplay slidesPerView={1}>
          <SwiperSlide>
            <img src="/images/tin-tuc-1.png" alt="" className="block mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/tin-tuc-2.png" alt="" className="block mx-auto" />
          </SwiperSlide>
        </Swiper>
      </div>
      <PopularNewsBlock />
      <TrafficNews />
      <LatestNews />
    </>
  );
}

const PopularNewsBlock = () => {
  const router = useRouter();
  return (
    <div className="py-10">
      <div className="container lg:max-w-[1024px]">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-3xl text-[#0d47a1] font-semibold uppercase">
            Tin tức nổi bật
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          <div className="lg:col-span-3">
            <div className="rounded-2xl shadow-md">
              <div>
                <img
                  src="/images/news-item.webp"
                  className="block w-full h-[323px] rounded-t-2xl object-cover"
                  alt=""
                />
              </div>
              <div className="p-5">
                <p className="text-[#898989] text-sm">{news[0].date}</p>
                <h1 className="text-lg text-[#0d47a1] font-semibold line-clamp-2">
                  {news[0].title}
                </h1>
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex items-center gap-1">
                    <Eye className="text-[#898989] w-5" />
                    <p className="text-[#898989]">39</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Share2 className="text-[#898989] w-5" />
                    <p className="text-[#898989]">14</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquareText className="text-[#898989] w-5" />
                    <p className="text-[#898989]">14</p>
                  </div>
                </div>
                <p className="line-clamp-4 mb-2">{news[0].description}</p>
                <button
                  className="flex items-center text-[#0f8dd4]"
                  onClick={() => router.push("/tin-tuc/detail")}
                >
                  Xem thêm <ChevronRight className="h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col items-center gap-5">
            {news.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 rounded-2xl shadow-md h-[185px]"
              >
                <div className="col-span-1">
                  <div>
                    <img
                      src="/images/news-item.webp"
                      alt=""
                      className="block h-[185px] rounded-l-2xl object-cover"
                    />
                  </div>
                </div>
                <div className="col-span-2 p-3">
                  <p className="text-[#898989] text-xs">{item.date}</p>
                  <h1 className="text-base text-[#0d47a1] font-semibold line-clamp-2">
                    {item.title}
                  </h1>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Eye className="text-[#898989] w-3" />
                      <p className="text-[#898989] text-xs">39</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Share2 className="text-[#898989] w-3" />
                      <p className="text-[#898989] text-xs">14</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquareText className="text-[#898989] w-3" />
                      <p className="text-[#898989] text-xs">14</p>
                    </div>
                  </div>
                  <p className="line-clamp-3 mb-2 text-xs">
                    {item.description}
                  </p>
                  <button
                    className="flex items-center text-xs text-[#0f8dd4]"
                    onClick={() => router.push("/tin-tuc/detail")}
                  >
                    Xem thêm <ChevronRight className="h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TrafficNews = () => {
  const router = useRouter();
  return (
    <div className="container lg:max-w-[1024px] py-10">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl text-[#0d47a1] font-semibold uppercase">
          Tin tức về giao thông
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {news.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-3 rounded-2xl shadow-md h-[185px]"
          >
            <div className="col-span-1">
              <div>
                <img
                  src="/images/news-item.webp"
                  alt=""
                  className="block h-[185px] rounded-l-2xl object-cover"
                />
              </div>
            </div>
            <div className="col-span-2 p-3">
              <p className="text-[#898989] text-xs">{item.date}</p>
              <h1 className="text-base text-[#0d47a1] font-semibold line-clamp-2">
                {item.title}
              </h1>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Eye className="text-[#898989] w-3" />
                  <p className="text-[#898989] text-xs">39</p>
                </div>
                <div className="flex items-center gap-1">
                  <Share2 className="text-[#898989] w-3" />
                  <p className="text-[#898989] text-xs">14</p>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquareText className="text-[#898989] w-3" />
                  <p className="text-[#898989] text-xs">14</p>
                </div>
              </div>
              <p className="line-clamp-3 mb-2 text-xs">{item.description}</p>
              <button
                className="flex items-center text-xs text-[#0f8dd4]"
                onClick={() => router.push("/tin-tuc/detail")}
              >
                Xem thêm <ChevronRight className="h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const LatestNews = () => {
  const router = useRouter();
  return (
    <div className="container lg:max-w-[1024px] py-10">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl text-[#0d47a1] font-semibold uppercase">
          Tin tức mới nhất
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {news.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-3 rounded-2xl shadow-md h-[185px]"
          >
            <div className="col-span-1">
              <div>
                <img
                  src="/images/news-item.webp"
                  alt=""
                  className="block h-[185px] rounded-l-2xl object-cover"
                />
              </div>
            </div>
            <div className="col-span-2 p-3">
              <p className="text-[#898989] text-xs">{item.date}</p>
              <h1 className="text-base text-[#0d47a1] font-semibold line-clamp-2">
                {item.title}
              </h1>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Eye className="text-[#898989] w-3" />
                  <p className="text-[#898989] text-xs">39</p>
                </div>
                <div className="flex items-center gap-1">
                  <Share2 className="text-[#898989] w-3" />
                  <p className="text-[#898989] text-xs">14</p>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquareText className="text-[#898989] w-3" />
                  <p className="text-[#898989] text-xs">14</p>
                </div>
              </div>
              <p className="line-clamp-3 mb-2 text-xs">{item.description}</p>
              <button
                className="flex items-center text-xs text-[#0f8dd4]"
                onClick={() => router.push("/tin-tuc/detail")}
              >
                Xem thêm <ChevronRight className="h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TinTuc;
