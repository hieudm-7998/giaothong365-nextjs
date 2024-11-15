import { Edit, PlusCircle, Trash } from "lucide-react";

function TaiKhoan() {
  return (
    <div className="container lg:max-w-[1024px] pt-20 lg:pt-[97px]">
      <div className="pt-5 lg:pt-10 border-b-[1px] border-[#0d47a1] border-solid border-t-0 border-l-0 border-r-0">
        <div className="p-6 flex flex-col justify-center">
          <div className="mb-2">
            <svg
              width="80px"
              height="80px"
              viewBox="-1.6 -1.6 19.20 19.20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
              strokeWidth="0.00016"
              className="mb-2 block mx-auto border border-gray-600 border-solid rounded-full"
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
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <button className="px-4 py-1 bg-[#0d47a1] text-white rounded transition-all hover:opacity-85">
              Đổi ảnh đại diện
            </button>
            <button className="px-4 py-1 rounded bg-white border-[1px] border-solid border-red-600 text-red-600 hover:text-white hover:bg-red-600 transition-all hover:opacity-85">
              Xoá ảnh
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mb-5">
          <div className="flex items-center gap-2">
            <p>Loại tài khoản:</p>
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
        <div className="lg:p-6 pb-10 mx-auto">
          <h1 className="text-center text-2xl font-semibold text-[#0d47a1] mb-6">
            Thông tin tài khoản
          </h1>
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 mb-4">
            <div className="flex flex-col">
              <label className="mb-1 font-semibold">
                <span className="text-red-300">*</span>Họ và tên
              </label>
              <input
                type="text"
                placeholder="Nhập họ và tên"
                className="border border-solid border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-semibold">Ngày sinh</label>
              <input
                type="date"
                className="border border-solid border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-semibold">Giới tính</label>
              <select className="border border-solid border-gray-300 p-2 rounded">
                <option value="1">Nam</option>
                <option value="2">Nữ</option>
                <option value="3">Khác</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
            <div className="flex flex-col flex-1">
              <label className="mb-1 font-semibold">
                Số điện thoại đăng nhập
              </label>
              <input
                type="text"
                placeholder="0909909099"
                className="border border-solid border-gray-300 p-2 rounded bg-gray-100"
                disabled
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="mb-1 font-semibold">Email</label>
              <input
                type="email"
                placeholder="Nhập email"
                className="border border-solid border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
            <div className="flex flex-col">
              <label className="mb-1 font-semibold">Địa chỉ</label>
              <input
                type="text"
                placeholder="Nhập địa chỉ"
                className="border border-solid border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-semibold">Quận/Huyện</label>
              <select
                defaultValue=""
                className="border border-solid border-gray-300 p-2 rounded"
              >
                <option disabled value="">
                  Chọn quận/huyện
                </option>
                <option>Quận Cầu Giấy</option>
                <option>Quận Ba Đình</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-semibold">Thành Phố</label>
              <select
                defaultValue=""
                className="border border-solid border-gray-300 p-2 rounded"
              >
                <option disabled value="">
                  Chọn thành phố
                </option>
                <option>Hà Nội</option>
                <option>TP. Hồ Chí Minh</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-3 flex justify-center mt-6">
            <button className="bg-[#da9956] block lg:w-1/3 mx-auto text-center text-white font-semibold text-lg py-2 px-10 transition-all hover:opacity-80">
              Lưu thông tin
            </button>
          </div>
        </div>
      </div>
      <div className="pt-5 lg:pt-8">
        <h1 className="text-center text-2xl font-semibold text-[#0d47a1]">
          Thông tin phương tiện
        </h1>
        <div className="lg:p-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4 mb-4 rounded-2xl shadow-lg p-6">
              <h1 className="text-center font-semibold">Phương tiện 01</h1>
              <div className="flex flex-col flex-1">
                <label className="mb-1 font-semibold">Biển kiểm soát</label>
                <input
                  type="text"
                  placeholder="29K1-903.98"
                  disabled
                  className="border border-solid border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="mb-1 font-semibold">Loại phương tiện</label>
                <input
                  type="text"
                  placeholder="Ô tô"
                  className="border border-solid border-gray-300 p-2 rounded bg-gray-100"
                  disabled
                />
              </div>
              <div className="flex items-center justify-between gap-4">
                <button className="flex text-sm items-center gap-2 px-2 py-1 border-[1px] border-solid border-[#0d47a1] text-[#0d47a1] hover:text-white hover:bg-[#0d47a1] rounded transition-all hover:opacity-85">
                  <Edit className="w-4" />
                  Chỉnh sửa
                </button>
                <button className="flex text-sm items-center gap-2 px-2 py-1 rounded bg-white border-[1px] border-solid border-red-600 text-red-600 hover:text-white hover:bg-red-600 transition-all hover:opacity-85">
                  <Trash className="w-4" />
                  Xoá phương tiện
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4 mb-4 rounded-2xl shadow-lg p-6">
              <h1 className="text-center font-semibold">Phương tiện 02</h1>
              <div className="flex flex-col flex-1">
                <label className="mb-1 font-semibold">Biển kiểm soát</label>
                <input
                  type="text"
                  placeholder="29F1-125.53"
                  disabled
                  className="border border-solid border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="mb-1 font-semibold">Loại phương tiện</label>
                <input
                  type="text"
                  placeholder="Ô tô"
                  className="border border-solid border-gray-300 p-2 rounded bg-gray-100"
                  disabled
                />
              </div>
              <div className="flex items-center justify-between gap-4">
                <button className="flex text-sm items-center gap-2 px-2 py-1 border-[1px] border-solid border-[#0d47a1] text-[#0d47a1] hover:text-white hover:bg-[#0d47a1] rounded transition-all hover:opacity-85">
                  <Edit className="w-4" />
                  Chỉnh sửa
                </button>
                <button className="flex text-sm items-center gap-2 px-2 py-1 rounded bg-white border-[1px] border-solid border-red-600 text-red-600 hover:text-white hover:bg-red-600 transition-all hover:opacity-85">
                  <Trash className="w-4" />
                  Xoá phương tiện
                </button>
              </div>
            </div>
          </div>

          <button className="mx-auto mt-4 flex text-sm text-center items-center gap-2 px-2 py-1 border-[1px] border-solid border-[#0d47a1] text-[#0d47a1] hover:text-white hover:bg-[#0d47a1] rounded transition-all hover:opacity-85">
            <PlusCircle className="w-4" />
            Thêm phương tiện
          </button>
          <div className="sm:col-span-2 lg:col-span-3 flex justify-center mt-4">
            <button className="bg-[#da9956] block lg:w-1/3 mx-auto text-center text-white font-semibold text-lg py-2 px-10 transition-all hover:opacity-80">
              Lưu thông tin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaiKhoan;
