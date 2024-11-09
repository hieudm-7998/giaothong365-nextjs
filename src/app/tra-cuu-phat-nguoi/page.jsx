import RegisterSection from "@/components/RegisterSection";
import React from "react";

function TraCuuPhatNguoi() {
  return (
    <>
      <div className="container lg:max-w-[1241px] mb-20">
        <div className="w-full lg:w-2/3 mx-auto rounded shadow-xl p-10">
          <h1 className="text-3xl text-center font-bold text-[#2196F3] mb-10">
            Tra cứu phạt nguội
          </h1>
          <p className="mb-10">
            (*) Vui lòng nhập số Biển kiểm soát xe của bạn để tra cứu.
          </p>
          <form className="flex flex-col space-y-4 mx-auto">
            {/* License Plate */}
            <label>
              <input
                type="text"
                placeholder="*Biển kiểm soát"
                className="w-full px-4 py-3 border-solid border-[#0D47A1] focus:bg-blue-100 rounded-md shadow-sm transition-all"
              />
            </label>

            {/* Vehicle Type */}
            <label>
              <select
                className="w-full px-4 py-3 border-solid border-[#0D47A1] focus:bg-blue-100 rounded-md shadow-sm transition-all mb-5"
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

            {/* Submit Button */}
            <button className="w-full py-3 bg-[#2196F3] transition-all text-white font-semibold rounded-md hover:bg-[#0D47A1] focus:outline-none">
              Tra cứu
            </button>
          </form>
        </div>
      </div>
      <RegisterSection />
    </>
  );
}

export default TraCuuPhatNguoi;
