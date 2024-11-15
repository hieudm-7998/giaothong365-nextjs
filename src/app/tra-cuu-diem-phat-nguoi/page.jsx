"use client";

import RegisterSection from "@/components/RegisterSection";
import TraCuuPhatNguoiBanner from "@/components/TraCuuPhatNguoiBanner";
import { Button, TextField } from "@radix-ui/themes";
import { Flame, Map, MapPin, Search } from "lucide-react";
import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
import "./style.css";
import {
  DEFAULT,
  HAS_VIOLATION,
  NO_VIOLATION,
  useLoginContext,
} from "@/context/LoginContext";

function TraCuuDiemPhatNguoi() {
  const { loginType } = useLoginContext();

  return (
    <>
      <TraCuuPhatNguoiBanner />
      <div className="container lg:max-w-[1024px] mb-20 pt-16">
        {/* <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div className="col-span-4 lg:col-span-1">
            <div
              className="flex flex-col p-5 rounded-2xl shadow-xl gap-3 w-full"
              style={{ background: "rgba(255,255,255, 0.8)" }}
            >
              <Button
                className={`flex items-center justify-start !h-10 transition-all text-black hover:cursor-pointer ${
                  tab === "diem-gan-ban" ? "bg-[#EEEEEF]" : "!bg-white"
                }`}
                variant="soft"
                onClick={() => setTab("diem-gan-ban")}
              >
                <MapPin />
                <p>Điểm gần bạn</p>
              </Button>
              <Button
                className={`flex items-center justify-start !h-10 transition-all text-black hover:cursor-pointer ${
                  tab === "diem-nong" ? "bg-[#EEEEEF]" : "!bg-white"
                }`}
                variant="soft"
                onClick={() => setTab("diem-nong")}
              >
                <Flame />
                <p>Điểm nóng</p>
              </Button>
              <Button
                className={`flex items-center justify-start !h-10 transition-all text-black hover:cursor-pointer ${
                  tab === "lo-trinh-ban-den" ? "bg-[#EEEEEF]" : "!bg-white"
                }`}
                variant="soft"
                onClick={() => setTab("lo-trinh-ban-den")}
              >
                <Map />
                <p>Lộ trình bạn đến</p>
              </Button>
            </div>
          </div>
          <div className="col-span-4 lg:col-span-3">
            <div
              className="flex flex-col p-10 rounded-2xl shadow-xl"
              style={{ background: "rgba(255,255,255, 0.8)" }}
            >
              {tab === "diem-gan-ban" && <DiemGanBan />}
              {tab === "diem-nong" && <DiemNong />}
              {tab === "lo-trinh-ban-den" && <LoTrinhBanDen />}
            </div>
          </div>
        </div> */}

        <Tabs.Root
          className="TabsRoot shadow-lg rounded-3xl"
          defaultValue="diem-gan-ban"
        >
          <Tabs.List className="TabsList" aria-label="Manage your account">
            <Tabs.Trigger className="TabsTrigger" value="diem-gan-ban">
              Điểm gần bạn
            </Tabs.Trigger>
            <Tabs.Trigger className="TabsTrigger" value="diem-nong">
              Điểm nóng
            </Tabs.Trigger>
            <Tabs.Trigger className="TabsTrigger" value="lo-trinh-ban-den">
              Lộ trình bạn đến
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content className="TabsContent" value="diem-gan-ban">
            {loginType === HAS_VIOLATION && <DiemGanBan />}
            {loginType === NO_VIOLATION && <DiemGanBan />}
            {loginType === DEFAULT && (
              <div>
                <img
                  src="/images/lock.png"
                  className="block mx-auto w-10 mb-3"
                  alt=""
                />
                <h1 className="text-center font-semibold text-lg text-black">
                  Bạn cần đăng nhập/trở thành thành viên hạng gold trở lên
                  <br />
                  để mở khoá tính năng này.
                </h1>
              </div>
            )}
          </Tabs.Content>
          <Tabs.Content className="TabsContent" value="diem-nong">
            {loginType === HAS_VIOLATION && <DiemNong />}
            {loginType === NO_VIOLATION && <DiemNong />}
            {loginType === DEFAULT && (
              <div>
                <img
                  src="/images/lock.png"
                  className="block mx-auto w-10 mb-3"
                  alt=""
                />
                <h1 className="text-center font-semibold text-lg text-black">
                  Bạn cần đăng nhập/trở thành thành viên hạng gold trở lên
                  <br />
                  để mở khoá tính năng này.
                </h1>
              </div>
            )}
          </Tabs.Content>
          <Tabs.Content className="TabsContent" value="lo-trinh-ban-den">
            {loginType === HAS_VIOLATION && <LoTrinhBanDen />}
            {loginType === NO_VIOLATION && <LoTrinhBanDen />}
            {loginType === DEFAULT && (
              <div>
                <img
                  src="/images/lock.png"
                  className="block mx-auto w-10 mb-3"
                  alt=""
                />
                <h1 className="text-center font-semibold text-lg text-black">
                  Bạn cần đăng nhập/trở thành thành viên hạng gold trở lên
                  <br />
                  để mở khoá tính năng này.
                </h1>
              </div>
            )}
          </Tabs.Content>
        </Tabs.Root>
      </div>
      {loginType === DEFAULT && <RegisterSection />}
    </>
  );
}

const DiemGanBan = () => {
  return (
    <>
      <h1 className="text-center text-lg font-semibold mb-5">
        Vui lòng chọn tỉnh/thành phố & quận/huyện.
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <select
          className="w-full px-4 py-2 !h-10 bg-white rounded-md shadow-sm hover:cursor-pointer border-[1px] border-solid border-[#0d47a1] transition-all opacity-70"
          defaultValue=""
        >
          <option value="" disabled>
            Chọn tỉnh/thành phố
          </option>
          <option value="car">Ô tô</option>
          <option value="motorbike">Xe máy</option>
          <option value="bicycle">Xe đạp</option>
        </select>
        <select
          className="w-full px-4 py-2 !h-10 mb-5 bg-white rounded-md shadow-sm hover:cursor-pointer border-[1px] border-solid border-[#0d47a1] transition-all opacity-70"
          defaultValue=""
        >
          <option value="" disabled>
            Chọn quận/huyện
          </option>
          <option value="car">Ô tô</option>
          <option value="motorbike">Xe máy</option>
          <option value="bicycle">Xe đạp</option>
        </select>
      </div>
      <p className="text-center mb-5">
        Hình ảnh bản đồ điểm phạt nguội gần khu vực bạn vừa tìm kiếm:
      </p>
      <div>
        <img src="/images/map.png" className="block mx-auto mb-10" alt="" />
      </div>
      <div className="mb-5">
        <h1 className="font-semibold text-lg text-[#0d47a1]">
          Điểm phạt nguội Giảng Võ
        </h1>
        <p className="text-base">23 Giảng Võ, Ba Đình, Hà Nội</p>
      </div>
      <div className="mb-5">
        <h1 className="font-semibold text-lg text-[#0d47a1]">
          Điểm phạt nguội Tôn Đức Thắng
        </h1>
        <p className="text-base">23 Tôn Đức Thắng, Đống Đa, Hà Nội</p>
      </div>
      <div className="mb-5">
        <h1 className="font-semibold text-lg text-[#0d47a1]">
          Điểm phạt nguội Hào Nam
        </h1>
        <p className="text-base">23 Hào Nam, Đống Đa, Hà Nội</p>
      </div>
    </>
  );
};

const DiemNong = () => {
  return (
    <>
      <h1 className="text-center text-lg font-semibold mb-5">
        Vui lòng chọn tỉnh/thành phố.
      </h1>
      <select
        className="w-full px-4 py-2 !h-10 mb-5 bg-white rounded-md shadow-sm hover:cursor-pointer border-[1px] border-solid border-[#0d47a1] transition-all opacity-70"
        defaultValue=""
      >
        <option value="" disabled>
          Chọn tỉnh/thành phố
        </option>
        <option value="car">Ô tô</option>
        <option value="motorbike">Xe máy</option>
        <option value="bicycle">Xe đạp</option>
      </select>
      <p className="text-center mb-5">
        Hình ảnh bản đồ điểm phạt nguội gần khu vực bạn vừa tìm kiếm:
      </p>
      <div>
        <img src="/images/map.png" className="block mx-auto mb-10" alt="" />
      </div>
      <div className="mb-5">
        <h1 className="font-semibold text-lg text-[#0d47a1]">
          Điểm phạt nguội Giảng Võ
        </h1>
        <p className="text-base">23 Giảng Võ, Ba Đình, Hà Nội</p>
      </div>
      <div className="mb-5">
        <h1 className="font-semibold text-lg text-[#0d47a1]">
          Điểm phạt nguội Tôn Đức Thắng
        </h1>
        <p className="text-base">23 Tôn Đức Thắng, Đống Đa, Hà Nội</p>
      </div>
      <div className="mb-5">
        <h1 className="font-semibold text-lg text-[#0d47a1]">
          Điểm phạt nguội Hào Nam
        </h1>
        <p className="text-base">23 Hào Nam, Đống Đa, Hà Nội</p>
      </div>
    </>
  );
};

const LoTrinhBanDen = () => {
  return (
    <>
      <h1 className="text-center text-lg font-semibold mb-5">
        Vui lòng chọn loại lộ trình.
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <select
          className="w-full px-4 py-2 !h-10 bg-white rounded-md shadow-sm hover:cursor-pointer border-[1px] border-solid border-[#0d47a1] transition-all opacity-70"
          defaultValue=""
        >
          <option value="" disabled>
            Chọn loại lộ trình
          </option>
          <option value="car">Cao tốc</option>
          <option value="motorbike">Nội đô</option>
          <option value="bicycle">Quốc lộ</option>
        </select>
        <select
          className="w-full px-4 py-2 !h-10 mb-5 bg-white rounded-md shadow-sm hover:cursor-pointer border-[1px] border-solid border-[#0d47a1] transition-all opacity-70"
          defaultValue=""
        >
          <option value="" disabled>
            Chọn tuyến đường
          </option>
          <option value="car">Ô tô</option>
          <option value="motorbike">Xe máy</option>
          <option value="bicycle">Xe đạp</option>
        </select>
      </div>
      <p className="text-center mb-5">
        Hình ảnh bản đồ điểm phạt nguội gần khu vực bạn vừa tìm kiếm:
      </p>
      <div>
        <img src="/images/map.png" className="block mx-auto mb-10" alt="" />
      </div>
      <div className="mb-5">
        <h1 className="font-semibold text-lg text-[#0d47a1]">
          Điểm phạt nguội Giảng Võ
        </h1>
        <p className="text-base">23 Giảng Võ, Ba Đình, Hà Nội</p>
      </div>
      <div className="mb-5">
        <h1 className="font-semibold text-lg text-[#0d47a1]">
          Điểm phạt nguội Tôn Đức Thắng
        </h1>
        <p className="text-base">23 Tôn Đức Thắng, Đống Đa, Hà Nội</p>
      </div>
      <div className="mb-5">
        <h1 className="font-semibold text-lg text-[#0d47a1]">
          Điểm phạt nguội Hào Nam
        </h1>
        <p className="text-base">23 Hào Nam, Đống Đa, Hà Nội</p>
      </div>
    </>
  );
};

export default TraCuuDiemPhatNguoi;
