import { ChevronRight } from "lucide-react";

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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

function NewsDetail() {
  return (
    <div className="pt-20 lg:pt-28">
      <div className="container lg:max-w-[1241px] pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="col-span-3 lg:col-span-2">
            <div className="rounded-2xl shadow-md">
              <div className="p-5">
                <p className="text-[#898989] text-sm">{news[2].date}</p>
                <h1 className="text-lg text-[#0d47a1] font-semibold mb-3">
                  {news[2].title}
                </h1>

                <div>
                  <img
                    src="/images/news-item.webp"
                    className="block w-full object-cover mb-2"
                    alt=""
                  />
                </div>
                <p className="mb-2 text-justify">{news[2].description}</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-lg text-[#0d47a1] font-semibold uppercase mb-5">
              Tin tức liên quan
            </h1>
            <div className="col-span-3 lg:col-span-1 flex flex-col items-center gap-5">
              {news.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 rounded-2xl shadow-md h-[164px]"
                >
                  <div className="col-span-1">
                    <div>
                      <img
                        src="/images/news-item.webp"
                        alt=""
                        className="block h-[164px] rounded-l-2xl object-cover"
                      />
                    </div>
                  </div>
                  <div className="col-span-2 p-3">
                    <p className="text-[#898989] text-xs">{item.date}</p>
                    <h1 className="text-base text-[#0d47a1] font-semibold line-clamp-2 mb-1">
                      {item.title}
                    </h1>
                    <p className="line-clamp-3 mb-2 text-xs">
                      {item.description}
                    </p>
                    <button className="flex items-center text-xs text-[#0f8dd4]">
                      Xem thêm <ChevronRight className="h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;
