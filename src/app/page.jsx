"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Button } from "@radix-ui/themes";

export default function Home() {
  return (
    <>
      <MainBanner />
      <RegisterForm />
      <Benefit />
      <OurClient />
    </>
  );
}

const MainBanner = () => {
  return (
    <div className="container lg:max-w-[1241px] mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-20">
        <div className="flex flex-col justify-center mb-20 lg:m-0">
          <h1 className="lg:text-4xl text-4xl text-[#2196F3] font-bold text-center lg:text-left">
            Chào mừng bạn đến với
          </h1>
          <h1 className="lg:text-4xl text-4xl text-[#2196F3] font-bold mb-5 text-center lg:text-left">
            Giao thông 365
          </h1>
          <h2 className="lg:text-2xl text-lg text-black font-semibold text-center lg:text-left mb-10">
            Kiểm tra và quản lý vi phạm phạt nguội của bạn một cách nhanh chóng và dễ dàng
          </h2>
          <Button className="block lg:inline mx-auto lg:m-0 hover:cursor-pointer hover:opacity-85 text-base transition-all bg-[#2196F3] uppercase !h-[50px] !w-[300px]">
            Đăng ký hội viên ngay
          </Button>
        </div>
        <div>
          <img src="/images/main-banner.png" className="block mx-auto" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div>
          <h1 className="text-[#2196F3] text-3xl font-semibold mb-5 text-center lg:text-left">
            Tra cứu phạt nguội
          </h1>
          <p className="line-clamp-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <h1 className="text-[#2196F3] text-3xl font-semibold mb-5 text-center lg:text-left">
            Thông báo vi phạm
          </h1>
          <p className="line-clamp-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <h1 className="text-[#2196F3] text-3xl font-semibold mb-5 text-center lg:text-left">
            Tư vấn hỗ trợ
          </h1>
          <p className="line-clamp-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
};

const RegisterForm = () => {
  return (
    <div className="container lg:max-w-[1241px] mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <img src={`/images/register-image.png`} alt="" />
        </div>
        <div>
          <h1 className="font-black text-[#0D47A1] text-3xl mb-5 text-center lg:text-left">
            ĐĂNG KÝ HỘI VIÊN
          </h1>
          <p className="text-base mb-10 text-center lg:text-left">
            Chỉ cần nhập thông tin cơ bản, Giao thông 365 sẽ giúp bạn theo dõi
            và xử lý vi phạm giao thông một cách dễ dàng, tiện lợi!
          </p>
          <form className="flex flex-col space-y-4 mx-auto">
            {/* Full Name */}
            <label>
              <input
                type="text"
                placeholder="Họ và tên"
                className="w-full px-4 py-3 border-solid border-[#0D47A1] focus:bg-blue-100 rounded-md shadow-sm transition-all"
              />
            </label>

            {/* Phone Number */}
            <label>
              <input
                type="text"
                placeholder="Số điện thoại"
                className="w-full px-4 py-3 border-solid border-[#0D47A1] focus:bg-blue-100 rounded-md shadow-sm transition-all"
              />
            </label>

            {/* License Plate */}
            <label>
              <input
                type="text"
                placeholder="Biển kiểm soát"
                className="w-full px-4 py-3 border-solid border-[#0D47A1] focus:bg-blue-100 rounded-md shadow-sm transition-all"
              />
            </label>

            {/* Vehicle Type */}
            <label>
              <select
                className="w-full px-4 py-3 border-solid border-[#0D47A1] focus:bg-blue-100 rounded-md shadow-sm transition-all"
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

            {/* Terms and Conditions */}
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Tôi đồng ý với Điều khoản chính sách</span>
            </label>

            {/* Submit Button */}
            <button className="w-full py-3 hover:bg-[#2196F3] transition-all text-white font-semibold rounded-md bg-[#0D47A1] focus:outline-none">
              ĐĂNG KÝ HỘI VIÊN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Benefit = () => {
  return (
    <div className="container lg:max-w-[1241px] mb-20">
      <h1 className="text-center text-3xl font-bold mb-2">
        Lợi ích khi đăng ký hội viên
      </h1>
      <p className="text-center text-base text-[#072670] mb-10">
        Trở thành hội viên GiaoThong365 để nhận thông báo phạt nguội tức thì và
        nhiều ưu đãi khác!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div>
          <img src="/images/benefit.png" alt="" />
        </div>
        <div className="flex flex-col justify-center gap-10">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-2 flex flex-col justify-center">
              <img
                className="block mx-auto"
                src="/images/benefit-icon.svg"
                alt=""
              />
            </div>
            <div className="col-span-10 flex flex-col justify-center">
              <h1 className="font-black text-xl">
                Cập nhật phạt nguội qua SMS/ Email
              </h1>
              <p className="text-base">
                Nhận thông báo ngay lập tức khi có vi phạm phạt nguội liên quan
                đến phương tiện của bạn, qua cả SMS và Email. Không còn lo lắng
                bỏ lỡ thông tin quan trọng.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-2 flex flex-col justify-center">
              <img
                className="block mx-auto"
                src="/images/benefit-icon.svg"
                alt=""
              />
            </div>
            <div className="col-span-10 flex flex-col justify-center">
              <h1 className="font-black text-xl">
                Cập nhật điểm nóng giao thông
              </h1>
              <p className="text-base">
                Dễ dàng tìm kiếm và theo dõi các điểm có gắn camera phạt nguội
                hoặc các điểm giao thông thường xảy ra vi phạm
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-2 flex flex-col justify-center">
              <img
                className="block mx-auto"
                src="/images/benefit-icon.svg"
                alt=""
              />
            </div>
            <div className="col-span-10 flex flex-col justify-center">
              <h1 className="font-black text-xl">
                Tư vấn, hỗ trợ xử lý vi phạm nhanh chóng
              </h1>
              <p className="text-base">
                Hỗ trợ khách hàng xử lý khi có vi phạm
              </p>
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
    <div className="container lg:max-w-[1241px] mb-20">
      <h1 className="text-center text-3xl font-bold mb-10">
        Đối tác của chúng tôi
      </h1>
      <Swiper
        spaceBetween={50}
        autoplay
        slidesPerView={isDesktop ? 5 : 1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src="/images/vni-logo.svg" alt="" className="block mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/mic-logo.svg" alt="" className="block mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/pvi-logo.svg" alt="" className="block mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/tasco-logo.svg" alt="" className="block mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/pti-logo.svg" alt="" className="block mx-auto" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
