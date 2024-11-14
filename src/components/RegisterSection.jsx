import Link from "next/link";

function RegisterSection() {
  return (
    <div className="bg-[#285398] py-10">
      <div className="container lg:max-w-[1241px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="flex flex-col justify-center">
            <h1 className="text-xl lg:text-4xl font-black mb-5 text-white">
              Đăng ký hội viên
            </h1>
            <p className="text-white">
              Đăng ký hội viên ngay bây giờ để nhận thông báo phạt nguội kịp
              thời và hướng dẫn cách giải quyết đơn giản nhất.
            </p>
          </div>
          <div>
            <form className="flex flex-col space-y-4 mx-auto">
              {/* Full Name */}
              <label>
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full px-4 py-3 bg-white rounded-md shadow-sm transition-all"
                />
              </label>

              {/* Phone Number */}
              <label>
                <input
                  type="text"
                  placeholder="Số điện thoại"
                  className="w-full px-4 py-3 bg-white rounded-md shadow-sm transition-all"
                />
              </label>

              {/* License Plate */}
              <label>
                <input
                  type="text"
                  placeholder="Biển kiểm soát"
                  className="w-full px-4 py-3 bg-white rounded-md shadow-sm transition-all"
                />
              </label>

              {/* Vehicle Type */}
              <label>
                <select
                  className="w-full px-4 py-3 bg-white rounded-md shadow-sm transition-all"
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
                  className="w-full px-4 py-3 bg-white rounded-md shadow-sm transition-all"
                />
              </label>

              <label>
                <input
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  className="w-full px-4 py-3 bg-white rounded-md shadow-sm transition-all"
                />
              </label>

              {/* Terms and Conditions */}
              <label className="flex items-center space-x-2 justify-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-white">
                  Tôi đồng ý với{" "}
                  <Link
                    href="/dieu-khoan-su-dung"
                    className="text-[#759cff] cursor-pointer"
                  >
                    điều khoản chính sách
                  </Link>
                </span>
              </label>

              {/* Submit Button */}
              <button className="bg-[#da9956] block lg:w-2/3 mx-auto text-white font-semibold text-lg uppercase py-2 px-10 transition-all hover:opacity-80">
                Đăng ký hội viên
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterSection;
