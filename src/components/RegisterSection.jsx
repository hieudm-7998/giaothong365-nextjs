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
              thời <br/>và hướng dẫn cách giải quyết đơn giản nhất.
            </p>
          </div>
          <div>
            <form className="flex flex-col space-y-4 mx-auto">
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
                  className="w-full px-4 py-3 border-solid border-[#0D47A1] focus:bg-blue-100 rounded-md shadow-sm transition-all mb-10"
                />
              </label>

              {/* Submit Button */}
              <button className="w-full py-3 bg-[#EB5325] transition-all text-white font-semibold rounded-md hover:opacity-80 focus:outline-none">
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
