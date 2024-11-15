"use client";

import { ChevronRight, Eye, MessageSquareText, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";

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

function TinTucGiaoThong() {
  const router = useRouter();

  return (
    <div className="container lg:max-w-[1024px] pt-20 lg:pt-[97px]">
      <div className="mb-5 py-10">
        <h1 className="text-2xl text-[#0d47a1] font-semibold uppercase mb-10">
          Tin tức về giao thông
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
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

        <Pagination />
      </div>
    </div>
  );
}

const Pagination = () => {
  const totalPages = 5;
  const currentPage = 1; // Set this dynamically as needed

  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      <button
        className="px-3 py-1 bg-gray-200 text-gray-500 rounded-lg hover:bg-gray-300"
        aria-label="Previous Page"
      >
        Trước
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`px-3 py-1 rounded-lg ${
            currentPage === index + 1
              ? "bg-[#0d47a1] text-white"
              : "bg-gray-200 text-gray-500 hover:bg-gray-300"
          }`}
        >
          {index + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        className="px-3 py-1 bg-gray-200 text-gray-500 rounded-lg hover:bg-gray-300"
        aria-label="Next Page"
      >
        Sau
      </button>
    </div>
  );
};

export default TinTucGiaoThong;
