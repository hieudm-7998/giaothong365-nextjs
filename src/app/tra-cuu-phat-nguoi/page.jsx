"use client";

import RegisterSection from "@/components/RegisterSection";
import React from "react";
import TraCuuPhatNguoiBanner from "@/components/TraCuuPhatNguoiBanner";
import {
  DEFAULT,
  HAS_VIOLATION,
  NO_VIOLATION,
  useLoginContext,
} from "@/context/LoginContext";

function TraCuuPhatNguoi() {
  const { loginType } = useLoginContext();
  return (
    <>
      <TraCuuPhatNguoiBanner />
      <ViolationResult loginType={loginType} />
      {loginType === DEFAULT && <RegisterSection />}
    </>
  );
}

const ViolationResult = ({ loginType }) => {
  return (
    <div className="container lg:max-w-[1024px] mb-20 pt-16">
      {loginType === DEFAULT && <ViolationSearch />}
      {loginType === NO_VIOLATION && (
        <div className="bg-[#f5fafe] rounded-2xl shadow-lg p-10">
          <div className="lg:w-2/5 mx-auto">
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-1 flex flex-col items-center justify-center">
                <img
                  src="/images/avatar.png"
                  className="border-[#285398] border border-solid rounded-full block mx-auto"
                  alt=""
                />
              </div>
              <div className="col-span-3">
                <p className="text-black">Nguyễn Duy Bảo</p>
                <p className="mb-1">0963835542</p>
                <div className="flex items-center gap-2">
                  <span className="bg-gray-400 text-white rounded-full px-2">
                    Free
                  </span>
                  <span className="bg-gradient-to-r from-[#f6df91] to-[#d4af37] text-white rounded-full px-2">
                    Gold
                  </span>
                  <span className="bg-gradient-to-r from-[#cac9c2] via-[#fafaeb] to-[#cac9c2] text-black rounded-full px-2">
                    Platinum
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-[#24ff00] mt-5">
            Không phát hiện lỗi vi phạm
          </p>
          <p className="text-center text-black mb-10">
            Mong bạn tiếp tục tuân thủ luật giao thông và lái xe an toàn!
          </p>

          <div className="lg:w-[912px] border-solid border-l-0 border-t-0 border-r-0 border-b-[1px] border-[#b7c8fd] mt-2 mx-auto mb-5"></div>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 mb-5">
              <div className="flex flex-col justify-center gap-2">
                <p>Biển số xe:</p>
                <label>
                  <input
                    type="text"
                    placeholder="VD: 30K12363"
                    className="w-full px-4 py-3 bg-white rounded-md transition-all border-solid border-gray-200 border-[1px]"
                  />
                </label>
              </div>
              <div className="flex flex-col justify-center gap-2">
                <p>Loại phương tiện:</p>
                <label>
                  <select
                    className="w-full px-4 py-3 bg-white rounded-md transition-all border-solid border-gray-200 border-[1px]"
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
              </div>
            </div>
            <button className="bg-[#da9956] block lg:w-1/3 mx-auto text-white font-semibold text-lg py-2 px-10 transition-all hover:opacity-80">
              Tra cứu
            </button>
          </div>
          <h1 className="text-center font-normal italic mt-10 text-[#0d47a1]">
            Trích nguồn dữ liệu: Cổng thông tin điện tử Cục Cảnh sát giao thông
            và Cục Đăng kiểm Việt Nam
          </h1>
        </div>
      )}
      {loginType === HAS_VIOLATION && (
        <>
          <div className="bg-[#f5fafe] rounded-2xl shadow-lg p-4 lg:p-10">
            <div className="lg:w-3/5 mx-auto">
              <div className="flex items-center justify-center gap-4">
                <div className="col-span-1 flex flex-col items-center justify-center">
                  <img
                    src="/images/avatar.png"
                    className="border-[#285398] border border-solid rounded-full block mx-auto"
                    alt=""
                  />
                </div>
                <div className="col-span-3 flex flex-col justify-center">
                  <p className="text-black">Nguyễn Duy Bảo</p>
                  <p className="mb-1">0963835542</p>
                  <div className="flex items-center gap-2">
                    <span className="bg-gray-400 text-white rounded-full px-2">
                      Free
                    </span>
                    <span className="bg-gradient-to-r from-[#f6df91] to-[#d4af37] text-white rounded-full px-2">
                      Gold
                    </span>
                    <span className="bg-gradient-to-r from-[#cac9c2] via-[#fafaeb] to-[#cac9c2] text-black rounded-full px-2">
                      Platinum
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-red-600 text-center py-10">
              Bạn đang có 2 thông báo vi phạm
            </h1>
            <ViolationTable />
            <ViolationTable2 />
            <h1 className="text-center font-normal italic mt-10 text-[#0d47a1]">
              Trích nguồn dữ liệu: Cổng thông tin điện tử Cục Cảnh sát giao
              thông và Cục Đăng kiểm Việt Nam
            </h1>
          </div>
          <ViolationSearch />
        </>
      )}
    </div>
  );
};

const ViolationTable = () => {
  return (
    <div className="mb-10">
      <h1 className="text-center text-xl font-bold text-[#0d47a1] mb-5">
        Lỗi 1 <span className="italic font-normal">(10:55, 13/11/2024)</span>
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-[#0d47a1] border-solid text-sm">
          <tbody>
            <tr className="border-b border-solid border-l-0 border-t-0 border-r-0 bg-[#e5edf4] border-[#0d47a1]">
              <td className="px-4 py-2 font-semibold text-gray-600">
                Biển kiểm soát
              </td>
              <td className="px-4 py-2 text-gray-700">30H-XXXXX</td>
            </tr>
            <tr className="border-b border-[#0d47a1] border-solid border-l-0 border-t-0 border-r-0 bg-[#cddbe9]">
              <td className="w-1/5 px-4 py-2 font-semibold text-gray-600">
                Loại phương tiện
              </td>
              <td className="px-4 py-2 text-gray-700">Ô tô</td>
            </tr>
            <tr className="border-b border-solid border-l-0 border-t-0 border-r-0 bg-[#e5edf4] border-[#0d47a1]">
              <td className="px-4 py-2 font-semibold text-gray-600">
                Loại biển kiểm soát
              </td>
              <td className="px-4 py-2 text-gray-700">
                Chữ đen trên nền trắng
              </td>
            </tr>
            <tr className="border-b border-[#0d47a1] border-solid border-l-0 border-t-0 border-r-0 bg-[#cddbe9]">
              <td className="w-1/5 px-4 py-2 font-semibold text-gray-600">
                Địa điểm vi phạm
              </td>
              <td className="px-4 py-2 text-gray-700">
                Km 27+800, phường Phả Lại, thành phố Chí Linh, tỉnh Hải Dương,
                Quốc lộ 18
              </td>
            </tr>
            <tr className="border-b border-solid border-l-0 border-t-0 border-r-0 bg-[#e5edf4] border-[#0d47a1]">
              <td className="px-4 py-2 font-semibold text-gray-600">
                Hành vi vi phạm
              </td>
              <td className="px-4 py-2 text-gray-700">
                Điều khiển xe chạy quá tốc độ quy định từ 10 km/h đến 20 km/h
              </td>
            </tr>
            <tr className="border-b border-solid border-l-0 border-t-0 border-r-0 bg-[#cddbe9] border-[#0d47a1]">
              <td className="px-4 py-2 font-semibold text-gray-600">
                Mức phạt
              </td>
              <td className="px-4 py-2 text-gray-700">
                Đối với lỗi "điều khiển xe chạy quá tốc độ quy định từ 10 km/h
                đến 20 km/h", theo Nghị định 100/2019/NĐ-CP, người vi phạm sẽ bị
                phạt từ 4,000,000 đến 6,000,000 VND. Đồng thời, người điều khiển
                vi phạm sẽ bị tước quyền sử dụng Giấy phép lái xe từ 1-3 tháng.
              </td>
            </tr>
            <tr className="border-b border-solid border-l-0 border-t-0 border-r-0 bg-[#e5edf4] border-[#0d47a1]">
              <td className="px-4 py-2 font-semibold text-gray-600">
                Trạng thái
              </td>
              <td className="px-4 py-2 font-semibold text-red-600">
                CHƯA XỬ PHẠT
              </td>
            </tr>
            <tr className="border-b border-solid border-l-0 border-t-0 border-r-0 bg-[#cddbe9] border-[#0d47a1]">
              <td className="px-4 py-2 font-semibold text-gray-600">
                Đơn vị phụ trách
              </td>
              <td className="px-4 py-2 text-gray-700">
                ĐỘI CSGT ĐB SỐ 1 - PHÒNG CSGT HẢI DƯƠNG
              </td>
            </tr>
            <tr className="border-b border-solid border-l-0 border-t-0 border-r-0 bg-[#e5edf4] border-[#0d47a1]">
              <td className="px-4 py-2 font-semibold text-gray-600">
                ĐT liên hệ
              </td>
              <td className="px-4 py-2 text-gray-700">692829303</td>
            </tr>
            <tr className="bg-[#cddbe9]">
              <td className="px-4 py-2 font-semibold text-gray-600">
                Địa điểm nộp phạt
              </td>
              <td className="px-4 py-2 text-gray-700">
                1. ĐỘI CSGT ĐB SỐ 1 - PHÒNG CSGT HẢI DƯƠNG <br />
                Địa chỉ: Phòng CSGT - Km41+700 QL 18 Hoàng Tân, Chí Linh, Hải
                Dương <br />
                Số điện thoại liên hệ: 0692829303 <br />
                2. Đội Cảnh sát giao thông, Trật tự - Công an huyện Lục Nam -
                Tỉnh Bắc Giang <br />
                Địa chỉ: huyện Lục Nam
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ViolationTable2 = () => {
  return (
    <div>
      <h1 className="text-center text-xl font-bold text-[#0d47a1] mb-5">
        Lỗi 2 <span className="italic font-normal">(10:55, 13/11/2024)</span>
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-[#0d47a1] border-solid text-sm">
          <tbody>
            <tr className="border-b border-solid border-l-0 border-t-0 border-r-0 bg-[#e5edf4] border-[#0d47a1]">
              <td className="px-4 py-2 font-semibold text-gray-600">
                Biển kiểm soát
              </td>
              <td className="px-4 py-2 text-gray-700">30H-XXXXX</td>
            </tr>
            <tr className="border-b border-[#0d47a1] border-solid border-l-0 border-t-0 border-r-0 bg-[#cddbe9]">
              <td className="w-1/5 px-4 py-2 font-semibold text-gray-600">
                Loại phương tiện
              </td>
              <td className="px-4 py-2 text-gray-700">Ô tô</td>
            </tr>
            <tr className="border-b border-solid border-l-0 border-t-0 border-r-0 bg-[#e5edf4] border-[#0d47a1]">
              <td className="px-4 py-2 font-semibold text-gray-600">
                Loại biển kiểm soát
              </td>
              <td className="px-4 py-2 text-gray-700">
                Chữ đen trên nền trắng
              </td>
            </tr>
            <tr className="border-b border-[#0d47a1] border-solid border-l-0 border-t-0 border-r-0 bg-[#cddbe9]">
              <td className="w-1/5 px-4 py-2 font-semibold text-gray-600">
                Địa điểm vi phạm
              </td>
              <td className="px-4 py-2 text-gray-700">
                Km 27+800, phường Phả Lại, thành phố Chí Linh, tỉnh Hải Dương,
                Quốc lộ 18
              </td>
            </tr>
            <tr className="border-b border-solid border-l-0 border-t-0 border-r-0 bg-[#e5edf4] border-[#0d47a1]">
              <td className="px-4 py-2 font-semibold text-gray-600">
                Hành vi vi phạm
              </td>
              <td className="px-4 py-2 text-gray-700">
                Điều khiển xe chạy quá tốc độ quy định từ 10 km/h đến 20 km/h
              </td>
            </tr>
            <tr className="border-b border-solid border-l-0 border-t-0 border-r-0 bg-[#cddbe9] border-[#0d47a1]">
              <td className="px-4 py-2 font-semibold text-gray-600">
                Mức phạt
              </td>
              <td className="px-4 py-2 text-gray-700">
                Đối với lỗi "điều khiển xe chạy quá tốc độ quy định từ 10 km/h
                đến 20 km/h", theo Nghị định 100/2019/NĐ-CP, người vi phạm sẽ bị
                phạt từ 4,000,000 đến 6,000,000 VND. Đồng thời, người điều khiển
                vi phạm sẽ bị tước quyền sử dụng Giấy phép lái xe từ 1-3 tháng.
              </td>
            </tr>
            <tr className="border-b border-solid border-l-0 border-t-0 border-r-0 bg-[#e5edf4] border-[#0d47a1]">
              <td className="px-4 py-2 font-semibold text-gray-600">
                Trạng thái
              </td>
              <td className="px-4 py-2 font-semibold text-red-600">
                CHƯA XỬ PHẠT
              </td>
            </tr>
            <tr className="border-b border-solid border-l-0 border-t-0 border-r-0 bg-[#cddbe9] border-[#0d47a1]">
              <td className="px-4 py-2 font-semibold text-gray-600">
                Đơn vị phụ trách
              </td>
              <td className="px-4 py-2 text-gray-700">
                ĐỘI CSGT ĐB SỐ 1 - PHÒNG CSGT HẢI DƯƠNG
              </td>
            </tr>
            <tr className="border-b border-solid border-l-0 border-t-0 border-r-0 bg-[#e5edf4] border-[#0d47a1]">
              <td className="px-4 py-2 font-semibold text-gray-600">
                ĐT liên hệ
              </td>
              <td className="px-4 py-2 text-gray-700">692829303</td>
            </tr>
            <tr className="bg-[#cddbe9]">
              <td className="px-4 py-2 font-semibold text-gray-600">
                Địa điểm nộp phạt
              </td>
              <td className="px-4 py-2 text-gray-700">
                1. ĐỘI CSGT ĐB SỐ 1 - PHÒNG CSGT HẢI DƯƠNG <br />
                Địa chỉ: Phòng CSGT - Km41+700 QL 18 Hoàng Tân, Chí Linh, Hải
                Dương <br />
                Số điện thoại liên hệ: 0692829303 <br />
                2. Đội Cảnh sát giao thông, Trật tự - Công an huyện Lục Nam -
                Tỉnh Bắc Giang <br />
                Địa chỉ: huyện Lục Nam
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ViolationSearch = () => {
  return (
    <div className="bg-[#f5fafe] rounded-2xl shadow-lg p-10 mt-10">
      <h1 className="text-center text-lg uppercase font-semibold">
        Mời khách hàng nhập thông tin BKS cho mỗi lần tra cứu
      </h1>
      <p className="text-center mb-5">
        Nhập thông tin vào những ô dưới để tra cứu nhé bạn!
      </p>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 mb-10">
          <div className="flex flex-col justify-center gap-2">
            <p>Biển số xe:</p>
            <label>
              <input
                type="text"
                placeholder="VD: 30K12363"
                className="w-full px-4 py-3 bg-white rounded-md transition-all border-solid border-gray-200 border-[1px]"
              />
            </label>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <p>Loại phương tiện:</p>
            <label>
              <select
                className="w-full px-4 py-3 bg-white rounded-md transition-all border-solid border-gray-200 border-[1px]"
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
          </div>
        </div>
        <button className="bg-[#da9956] block lg:w-1/3 mx-auto text-white font-semibold text-lg py-2 px-10 transition-all hover:opacity-80">
          Tra cứu
        </button>
      </div>
    </div>
  );
};

const OldFile = () => {
  return (
    <div className="container lg:max-w-[1241px] mb-20 pt-16">
      <div className="w-full lg:w-2/3 mx-auto rounded-2xl shadow-xl p-10">
        <h1 className="text-3xl text-center font-bold text-[#285398] mb-10">
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
          <button className="w-full py-3 bg-[#285398] transition-all text-white font-semibold rounded-md hover:bg-[#0D47A1] focus:outline-none">
            Tra cứu
          </button>
        </form>
      </div>
    </div>
  );
};

export default TraCuuPhatNguoi;
