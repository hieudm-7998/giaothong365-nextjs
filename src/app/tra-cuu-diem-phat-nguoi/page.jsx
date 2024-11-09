"use client";

import RegisterSection from "@/components/RegisterSection";
import { Button } from "@radix-ui/themes";
import { BriefcaseBusiness, LockKeyhole, User } from "lucide-react";
import { useState } from "react";

function TraCuuDiemPhatNguoi() {
  const [tab, setTab] = useState("diem-gan-ban");

  return (
    <>
      <div className="container lg:max-w-[1241px] mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div className="col-span-4 lg:col-span-1">
            <div className="flex flex-col p-5 rounded border border-[#D5D5D7] border-solid shadow-xl gap-3 w-full">
              <Button
                className={`flex items-center justify-start !h-10 transition-all text-black hover:cursor-pointer ${
                  tab === "diem-gan-ban" ? "bg-[#EEEEEF]" : "!bg-white"
                }`}
                variant="soft"
                onClick={() => setTab("diem-gan-ban")}
              >
                <User />
                <p>Điểm gần bạn</p>
              </Button>
              <Button
                className={`flex items-center justify-start !h-10 transition-all text-black hover:cursor-pointer ${
                  tab === "diem-nong" ? "bg-[#EEEEEF]" : "!bg-white"
                }`}
                variant="soft"
                onClick={() => setTab("diem-nong")}
              >
                <BriefcaseBusiness />
                <p>Điểm nóng</p>
              </Button>
              <Button
                className={`flex items-center justify-start !h-10 transition-all text-black hover:cursor-pointer ${
                  tab === "lo-trinh-ban-den" ? "bg-[#EEEEEF]" : "!bg-white"
                }`}
                variant="soft"
                onClick={() => setTab("lo-trinh-ban-den")}
              >
                <LockKeyhole />
                <p>Lộ trình bạn đến</p>
              </Button>
            </div>
          </div>
          <div className="col-span-4 lg:col-span-3">
            <div className="flex flex-col p-10 rounded border border-[#D5D5D7] border-solid shadow-xl">
              {tab === "diem-gan-ban" && <DiemGanBan />}
              {tab === "diem-nong" && <DiemNong />}
              {tab === "lo-trinh-ban-den" && <LoTrinhBanDen />}
            </div>
          </div>
        </div>
      </div>
      <RegisterSection />
    </>
  );
}

const DiemGanBan = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold text-[#2196F3] mb-10">
        Tra cứu điểm phạt nguội gần bạn
      </h1>
      <p className="mb-10">(*) Vui lòng chọn khu vực muốn tra cứu.</p>
      <form className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
        <label>
          <select
            className="w-full px-4 py-3 border-solid border-[#0D47A1] focus:bg-blue-100 rounded-md shadow-sm transition-all"
            defaultValue=""
          >
            <option value="" disabled>
              Tỉnh/Thành phố
            </option>
            <option value="car">Hà Nội</option>
            <option value="motorbike">TP. Hồ Chí Minh</option>
            <option value="bicycle">Đà Nẵng</option>
          </select>
        </label>

        <label>
          <select
            className="w-full px-4 py-3 border-solid border-[#0D47A1] focus:bg-blue-100 rounded-md shadow-sm transition-all"
            defaultValue=""
          >
            <option value="" disabled>
              Quận/Huyện
            </option>
            <option value="car">Ô tô</option>
            <option value="motorbike">Xe máy</option>
            <option value="bicycle">Xe đạp</option>
          </select>
        </label>
      </form>
      <button className="w-full block mx-auto lg:w-1/3 py-3 bg-[#2196F3] transition-all text-white font-semibold rounded-md hover:bg-[#0D47A1] focus:outline-none">
        Tra cứu
      </button>
    </div>
  );
};

const DiemNong = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold text-[#2196F3] mb-10">
      Tra cứu điểm phạt nguội có tần suất cao
      </h1>
      <p className="mb-10">(*) Vui lòng chọn khu vực muốn tra cứu.</p>
      <form className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
        <label>
          <select
            className="w-full px-4 py-3 border-solid border-[#0D47A1] focus:bg-blue-100 rounded-md shadow-sm transition-all"
            defaultValue=""
          >
            <option value="" disabled>
              Tỉnh/Thành phố
            </option>
            <option value="car">Hà Nội</option>
            <option value="motorbike">TP. Hồ Chí Minh</option>
            <option value="bicycle">Đà Nẵng</option>
          </select>
        </label>

        <div></div>
      </form>
      <button className="w-full block mx-auto lg:w-1/3 py-3 bg-[#2196F3] transition-all text-white font-semibold rounded-md hover:bg-[#0D47A1] focus:outline-none">
        Tra cứu
      </button>
    </div>
  );
};

const LoTrinhBanDen = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold text-[#2196F3] mb-10">
        Tra cứu điểm phạt nguội gần bạn
      </h1>
      <p className="mb-10">(*) Vui lòng chọn loại đường bạn muốn tra cứu.</p>
      <form className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
        <label>
          <select
            className="w-full px-4 py-3 border-solid border-[#0D47A1] focus:bg-blue-100 rounded-md shadow-sm transition-all"
            defaultValue=""
          >
            <option value="" disabled>
              Loại lộ trình
            </option>
            <option value="car">Hà Nội</option>
            <option value="motorbike">TP. Hồ Chí Minh</option>
            <option value="bicycle">Đà Nẵng</option>
          </select>
        </label>

        <label>
          <select
            className="w-full px-4 py-3 border-solid border-[#0D47A1] focus:bg-blue-100 rounded-md shadow-sm transition-all"
            defaultValue=""
          >
            <option value="" disabled>
              Tên lộ trình
            </option>
            <option value="car">Ô tô</option>
            <option value="motorbike">Xe máy</option>
            <option value="bicycle">Xe đạp</option>
          </select>
        </label>
      </form>
      <button className="w-full block mx-auto lg:w-1/3 py-3 bg-[#2196F3] transition-all text-white font-semibold rounded-md hover:bg-[#0D47A1] focus:outline-none">
        Tra cứu
      </button>
    </div>
  );
};

export default TraCuuDiemPhatNguoi;
