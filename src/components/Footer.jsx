"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import { Button } from "@radix-ui/themes";
import {
  Building,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const isDesktop = useMediaQuery('(min-width: 960px)')
  const pathname = usePathname();

  return (
    <div className="footer-bg py-20 ">
      <div className="container lg:max-w-[1241px]">
        <Link
          className="text-base   lg:text-black block text-center lg:text-left"
          href="/"
        >
          <img
            src="/images/logo-black.png"
            alt=""
            className="max-w-[300px] mb-10"
          />
        </Link>
        <div className="grid lg:grid-cols-4 lg:gap-10">
          <div className="col-span-1">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className={`text-base   lg:text-black hover:opacity-85 transition-all ${
                  pathname === "/" && "  lg:text-[#285398]  font-semibold"
                }`}
              >
                Trang chủ
              </Link>
              <Link
                href="/tra-cuu-phat-nguoi"
                className={`text-base   lg:text-black hover:opacity-85 transition-all ${
                  pathname === "/tra-cuu-phat-nguoi" &&
                  "  lg:text-[#285398] font-semibold"
                }`}
              >
                Tra cứu phạt nguội
              </Link>
              <Link
                href="/tra-cuu-diem-phat-nguoi"
                className={`text-base   lg:text-black hover:opacity-85 transition-all ${
                  pathname === "/tra-cuu-diem-phat-nguoi" &&
                  "  lg:text-[#285398] font-semibold"
                }`}
              >
                Tra cứu điểm phạt nguội
              </Link>
              <Link
                href="/faqs"
                className={`text-base   lg:text-black hover:opacity-85 transition-all ${
                  pathname === "/faqs" && "lg:text-[#285398] font-semibold"
                }`}
              >
                FAQs
              </Link>
              <Link
                href="/doi-tac"
                className={`text-base   lg:text-black hover:opacity-85 transition-all ${
                  pathname === "/doi-tac" && "lg:text-[#285398] font-semibold"
                }`}
              >
                Đối tác
              </Link>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col gap-2">
              <Link
                href="/dieu-khoan-su-dung"
                className={`text-base   lg:text-black hover:opacity-85 transition-all ${
                  pathname === "/dieu-khoan-su-dung" &&
                  "  lg:text-[#285398] font-semibold"
                }`}
              >
                Điều khoản sử dụng
              </Link>
              <Link
                href="/chinh-sach-bao-mat-thong-tin-khach-hang"
                className={`text-base   lg:text-black hover:opacity-85 transition-all ${
                  pathname === "/chinh-sach-bao-mat-thong-tin-khach-hang" &&
                  "  lg:text-[#285398] font-semibold"
                }`}
              >
                {isDesktop ? (
                  <>
                    <span className="block mb-2">
                      Chính sách bảo mật thông tin
                    </span>
                    khách hàng
                  </>
                ) : (
                  "Chính sách bảo mật thông tin khách hàng"
                )}
              </Link>
              <Link
                href="/chinh-sach-xu-ly-du-lieu-ca-nhan"
                className={`text-base   lg:text-black hover:opacity-85 transition-all ${
                  pathname === "/chinh-sach-xu-ly-du-lieu-ca-nhan" &&
                  "  lg:text-[#285398] font-semibold"
                }`}
              >
                Chính sách xử lý dữ liệu cá nhân
              </Link>
              <Link
                href="/dieu-khoan-mang-xa-hoi"
                className={`text-base   lg:text-black hover:opacity-85 transition-all ${
                  pathname === "/dieu-khoan-mang-xa-hoi" &&
                  "  lg:text-[#285398] font-semibold"
                }`}
              >
                Điều khoản mạng xã hội
              </Link>
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-2 mt-5 lg:mt-0">
            <div className="flex items-center gap-2">
              <div className="col-span-1">
                <Building className="w-4" />
              </div>
              <div className="col-span-11">
                <p>Company: CÔNG TY TNHH PMC BẢO HIỂM</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="col-span-1">
                <MapPin className="w-4" />
              </div>

              <div className="col-span-11">
                <p>
                  <span className="block mb-2">
                    Address: Số 51, Đường Trần Phú, Phường Dữu Lâu, Thành phố
                    Việt Trì,
                  </span>{" "}
                  Tỉnh Phú Thọ, Việt Nam
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="col-span-1">
                <Mail className="w-4" />
              </div>

              <div className="col-span-11">
                <p>Email: lienhe@baohiem24h.vn</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="col-span-1">
                <Phone className="w-4" />
              </div>

              <div className="col-span-11">
                <p>Tel: 1900 63 63 66</p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
