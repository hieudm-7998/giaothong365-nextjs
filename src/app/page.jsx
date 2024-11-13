"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Button } from "@radix-ui/themes";
import {
  DEFAULT,
  HAS_VIOLATION,
  NO_VIOLATION,
  useLoginContext,
} from "@/context/LoginContext";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <MainBanner />
      <NewsBlock />
      <Benefit />
      <OurClient />
    </>
  );
}

const MainBanner = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const { loginType } = useLoginContext();
  const { toggleLoginType } = useLoginContext();

  return (
    <div className="main-banner py-14">
      <div className="container lg:max-w-[1241px] mb-10 lg:mb-20">
        <div className="my-10 lg:my-20 lg:m-0 col-span-1 lg:col-span-2">
          {loginType === DEFAULT && (
            <div className="bg-white/20 lg:max-w-[560px] rounded-2xl p-5 lg:p-10 flex flex-col items-center">
              <h1 className="lg:text-[31px] gap-3 text-xl text-justify text-white font-bold lg:text-left uppercase mb-3">
                Chào mừng bạn đến với
              </h1>
              <h1 className=" uppercase text-[#89a4d5] text-4xl lg:text-5xl font-black text-justify mb-3">
                Giao thông <span className="text-[#da9956]">365</span>
              </h1>
              <h2 className="text-sm text-white text-center mb-8">
                Chỉ cần nhập thông tin cơ bản, Giao thông 365 sẽ giúp bạn theo
                dõi và xử lý vi phạm giao thông một cách dễ dàng, tiện lợi!
              </h2>
              <form className="flex flex-col space-y-4 mx-auto w-full">
                {/* Full Name */}
                <label>
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    className="w-full px-4 py-3   rounded-md shadow-sm transition-all"
                  />
                </label>

                {/* Phone Number */}
                <label>
                  <input
                    type="text"
                    placeholder="Số điện thoại"
                    className="w-full px-4 py-3   rounded-md shadow-sm transition-all"
                  />
                </label>

                {/* License Plate */}
                <label>
                  <input
                    type="text"
                    placeholder="Biển kiểm soát"
                    className="w-full px-4 py-3   rounded-md shadow-sm transition-all"
                  />
                </label>

                {/* Vehicle Type */}
                <label>
                  <select
                    className="w-full px-4 py-3   rounded-md shadow-sm transition-all"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Chọn loại phương tiện
                    </option>
                    <option value="car">Ô tô</option>
                    <option value="motorbike">Xe máy</option>
                    <option value="bicycle">Xe đạp</option>
                  </select>
                </label>

                <label>
                  <input
                    type="password"
                    placeholder="Mật khẩu"
                    className="w-full px-4 py-3 rounded-md shadow-sm transition-all"
                  />
                </label>

                <label>
                  <input
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                    className="w-full px-4 py-3 rounded-md shadow-sm transition-all"
                  />
                </label>

                {/* Terms and Conditions */}
                <label className="flex items-center space-x-2 justify-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-white">
                    Tôi đồng ý với{" "}
                    <span className="text-[#759cff] cursor-pointer">
                      điều khoản chính sách
                    </span>
                  </span>
                </label>

                {/* Submit Button */}
                <button className="bg-[#da9956] block lg:w-2/3 mx-auto text-white font-semibold text-lg uppercase py-2 px-10 transition-all hover:opacity-80">
                  Đăng ký hội viên
                </button>
              </form>
            </div>
          )}
          {loginType === NO_VIOLATION && (
            <>
              <h1 className="lg:text-[31px] gap-3 text-xl text-center text-white font-bold lg:text-left uppercase mb-3">
                Chào mừng bạn đến với
              </h1>
              <h1 className=" uppercase text-[#89a4d5] text-3xl lg:text-5xl font-black text-center mb-3">
                Giao thông <span className="text-[#da9956]">365</span>
              </h1>
              <h2 className="text-base text-white text-center lg:text-left mb-5">
                Nhận thông báo phạt nguội nhanh chóng và chính xác
              </h2>
              <div className="bg-white/20 lg:max-w-[440px] rounded-2xl p-6 flex flex-col items-center">
                <svg
                  width="80px"
                  height="80px"
                  viewBox="-1.6 -1.6 19.20 19.20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                  strokeWidth="0.00016"
                  className="mb-2"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0">
                    <rect
                      x="-1.6"
                      y="-1.6"
                      width="19.20"
                      height="19.20"
                      rx="9.6"
                      fill="#ffffff"
                      strokeWidth="0"
                    ></rect>
                  </g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z"
                      fill="#2c6672"
                    ></path>{" "}
                    <path
                      d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z"
                      fill="#2c6672"
                    ></path>{" "}
                  </g>
                </svg>
                <h1 className="mb-3 text-center font-bold text-4xl bg-gradient-to-r from-[#89a4d5] to-[#da9956] bg-clip-text text-transparent">
                  30H-XXX.XX
                </h1>
                <p className="text-center text-[#24ff00]">
                  Không phát hiện lỗi vi phạm
                </p>
                <p className="text-center text-white">
                  Mong bạn tiếp tục tuân thủ luật giao thông
                  <br />
                  và lái xe an toàn!
                </p>
              </div>
            </>
          )}
          {loginType === HAS_VIOLATION && (
            <>
              <h1 className="lg:text-[31px] gap-3 text-xl text-center text-white font-bold lg:text-left uppercase mb-3">
                Chào mừng bạn đến với
              </h1>
              <h1 className=" uppercase text-[#89a4d5] text-3xl lg:text-5xl font-black text-center mb-3">
                Giao thông <span className="text-[#da9956]">365</span>
              </h1>
              <h2 className="text-base text-white text-center lg:text-left mb-5">
                Nhận thông báo phạt nguội nhanh chóng và chính xác
              </h2>
              <div className="bg-white/20 lg:max-w-[440px] rounded-2xl p-6 flex flex-col items-center">
                <svg
                  width="80px"
                  height="80px"
                  viewBox="-1.6 -1.6 19.20 19.20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                  strokeWidth="0.00016"
                  className="mb-2"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0">
                    <rect
                      x="-1.6"
                      y="-1.6"
                      width="19.20"
                      height="19.20"
                      rx="9.6"
                      fill="#ffffff"
                      strokeWidth="0"
                    ></rect>
                  </g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z"
                      fill="#2c6672"
                    ></path>{" "}
                    <path
                      d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z"
                      fill="#2c6672"
                    ></path>{" "}
                  </g>
                </svg>
                <h1 className="mb-3 text-center font-bold text-4xl bg-gradient-to-r from-[#89a4d5] to-[#da9956] bg-clip-text text-transparent">
                  30H-XXX.XX
                </h1>
                <p className="text-center text-white mb-5">
                  Bạn đang có <span className="text-red-600 font-bold">01</span>{" "}
                  thông báo vi phạm!
                </p>
                <button className="bg-[#da9956] text-white font-semibold text-lg uppercase py-2 px-10 transition-all hover:opacity-80">
                  Xem chi tiết
                </button>
              </div>
            </>
          )}
        </div>
        <Button onClick={() => toggleLoginType("default")}>
          Chưa ĐK (Mặc định)
        </Button>
        <Button onClick={() => toggleLoginType("no-violation")}>
          Đã ĐN (Ko lỗi)
        </Button>
        <Button onClick={() => toggleLoginType("has-violation")}>
          Đã ĐN (Có lỗi)
        </Button>
      </div>
    </div>
  );
};

// const RegisterForm = () => {
//   return (
//     <div className="container lg:max-w-[1241px] mb-20 lg:mb-10 px-6">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//         <div className="flex flex-col justify-center">
//           <h1 className="font-black text-[#0D47A1] text-3xl mb-5 text-center lg:text-left">
//             ĐĂNG KÝ HỘI VIÊN
//           </h1>
//           <p className="text-base mb-10 text-center lg:text-left">
//             Chỉ cần nhập thông tin cơ bản, Giao thông 365 sẽ giúp bạn theo dõi
//             và xử lý vi phạm giao thông một cách dễ dàng, tiện lợi!
//           </p>
//           <form className="flex flex-col space-y-4 mx-auto w-full">
//             {/* Full Name */}
//             <label>
//               <input
//                 type="text"
//                 placeholder="Họ và tên"
//                 className="w-full px-4 py-3 border-solid border-[#0D47A1]   rounded-md shadow-sm transition-all"
//               />
//             </label>

//             {/* Phone Number */}
//             <label>
//               <input
//                 type="text"
//                 placeholder="Số điện thoại"
//                 className="w-full px-4 py-3 border-solid border-[#0D47A1]   rounded-md shadow-sm transition-all"
//               />
//             </label>

//             {/* License Plate */}
//             <label>
//               <input
//                 type="text"
//                 placeholder="Biển kiểm soát"
//                 className="w-full px-4 py-3 border-solid border-[#0D47A1]   rounded-md shadow-sm transition-all"
//               />
//             </label>

//             {/* Vehicle Type */}
//             <label>
//               <select
//                 className="w-full px-4 py-3 border-solid border-[#0D47A1]   rounded-md shadow-sm transition-all"
//                 defaultValue=""
//               >
//                 <option value="" disabled>
//                   Chọn loại phương tiện
//                 </option>
//                 <option value="car">Ô tô</option>
//                 <option value="motorbike">Xe máy</option>
//                 <option value="bicycle">Xe đạp</option>
//               </select>
//             </label>

//             {/* Terms and Conditions */}
//             <label className="flex items-center space-x-2">
//               <input type="checkbox" className="form-checkbox" />
//               <span>Tôi đồng ý với Điều khoản chính sách</span>
//             </label>

//             {/* Submit Button */}
//             <button className="w-full py-3 hover:bg-[#285398] transition-all text-white font-semibold rounded-md bg-[#0D47A1] focus:outline-none">
//               ĐĂNG KÝ HỘI VIÊN
//             </button>
//           </form>
//         </div>
//         <div>
//           <img src={`/images/register-image.png`} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

const NewsBlock = () => {
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

  return (
    <div className="news-bg py-10">
      <div className="container lg:max-w-[1024px]">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-3xl text-[#0d47a1] font-semibold uppercase">
            Tin tức
          </h1>
          <button className="text-[#3c73a7] text-xl font-semibold">
            Xem tất cả
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          <div className="lg:col-span-3">
            <div className="rounded-2xl shadow-md">
              <div>
                <img
                  src="/images/news-item.webp"
                  className="block w-full h-[283px] rounded-t-2xl object-cover"
                  alt=""
                />
              </div>
              <div className="p-5">
                <p className="text-[#898989] text-sm">{news[0].date}</p>
                <h1 className="text-lg text-[#0d47a1] font-semibold line-clamp-2 mb-1">
                  {news[0].title}
                </h1>
                <p className="line-clamp-4 mb-2">{news[0].description}</p>
                <button className="flex items-center text-[#0f8dd4]">
                  Xem thêm <ChevronRight className="h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col items-center gap-5">
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
  );
};

const Benefit = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return (
    <div className="benefit-bg py-20">
      <div className="container lg:max-w-[1241px] mb-10 lg:mb-10">
        <h1 className="text-center text-3xl font-bold mb-10 text-[#0d47a1] uppercase">
          Quyền lợi hội viên
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <img src="/images/benefit-illus.png" alt="" />
          </div>
          <div className="flex flex-col justify-center gap-10">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-2 flex flex-col justify-center">
                <img
                  className="block mx-auto"
                  src="/images/benefit-icon-1.png"
                  alt=""
                />
              </div>
              <div className="col-span-10 flex flex-col justify-center">
                <h1 className="font-semibold text-lg lg:text-xl text-[#285398] mb-2">
                  Cập nhật phạt nguội tự động
                </h1>
                <p className="text-base text-gray-700">
                  Nhận thông báo ngay lập tức khi có vi phạm phạt nguội liên
                  quan đến phương tiện của bạn, qua cả SMS và Email. Không còn
                  lo lắng bỏ lỡ thông tin quan trọng.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-2 flex flex-col justify-center">
                <img
                  className="block mx-auto"
                  src="/images/benefit-icon-2.png"
                  alt=""
                />
              </div>
              <div className="col-span-10 flex flex-col justify-center">
                <h1 className="font-semibold text-lg lg:text-xl text-[#285398] mb-2">
                  Cập nhật điểm nóng giao thông
                </h1>
                <p className="text-base text-gray-700">
                  Dễ dàng tìm kiếm và theo dõi các điểm có gắn camera phạt nguội
                  hoặc các điểm giao thông thường xảy ra vi phạm
                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-2 flex flex-col justify-center">
                <img
                  className="block mx-auto"
                  src="/images/benefit-icon-3.png"
                  alt=""
                />
              </div>
              <div className="col-span-10 flex flex-col justify-center">
                <h1 className="font-semibold text-lg lg:text-xl text-[#285398] mb-2">
                  Tư vấn, hỗ trợ xử lý vi phạm nhanh chóng
                </h1>
                <p className="text-base text-gray-700">
                  Hỗ trợ khách hàng xử lý khi có vi phạm
                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-2 flex flex-col justify-center">
                <img
                  className="block mx-auto"
                  src="/images/benefit-icon-4.png"
                  alt=""
                />
              </div>
              <div className="col-span-10 flex flex-col justify-center">
                <h1 className="font-semibold text-lg lg:text-xl text-[#285398] mb-2">
                  Kết nối cộng đồng giao thông, chia sẻ thông tin, tin tức
                </h1>
                <p className="text-base text-gray-700">
                  Hỗ trợ khách hàng xử lý khi có vi phạm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OurClient = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return (
    <div className="pt-10">
      <div className="container lg:max-w-[1241px]">
        <h1 className="text-center text-3xl font-bold text-[#0d47a1]">
          Đối tác của chúng tôi
        </h1>
        <Swiper
          spaceBetween={50}
          autoplay
          slidesPerView={isDesktop ? 5 : 2}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src="/images/vni-logo.png" alt="" className="block mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/mic-logo.png" alt="" className="block mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/pvi-logo.png" alt="" className="block mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/tasco-logo.png"
              alt=""
              className="block mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/pti-logo.png" alt="" className="block mx-auto" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
