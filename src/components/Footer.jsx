"use client";

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
  const pathname = usePathname();

  return (
    <div className="bg-white py-20 ">
      <div className="container lg:max-w-[1241px]">
        <Link
          className="text-base   lg:text-black block text-center lg:text-left"
          href="/"
        >
          <img src="/images/logo.png" alt="" className="max-w-[300px] mb-10" />
        </Link>
        <div className="grid lg:grid-cols-4 gap-5 lg:gap-10">
          <div className="col-span-1">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className={`text-base   lg:text-black hover:opacity-85 transition-all ${
                  pathname === "/" &&
                  "  lg:text-[#285398] border-white border-l-0 border-t-0 border-r-0 border-solid font-semibold"
                }`}
              >
                Trang chủ
              </Link>
              <Link
                href="/tra-cuu"
                className={`text-base   lg:text-black hover:opacity-85 transition-all ${
                  pathname === "/tra-cuu" &&
                  "  lg:text-[#285398] border-white border-l-0 border-t-0 border-r-0 border-solid font-semibold"
                }`}
              >
                Tra cứu
              </Link>
              <Link
                href="/ho-tro"
                className={`text-base   lg:text-black hover:opacity-85 transition-all ${
                  pathname === "/ho-tro" &&
                  "  lg:text-[#285398] border-white border-l-0 border-t-0 border-r-0 border-solid font-semibold"
                }`}
              >
                Hỗ trợ
              </Link>
              <Link
                href="/chinh-sach-dieu-khoan"
                className={`text-base   lg:text-black hover:opacity-85 transition-all ${
                  pathname === "/chinh-sach-dieu-khoan" &&
                  "  lg:text-[#285398] border-white border-l-0 border-t-0 border-r-0 border-solid font-semibold"
                }`}
              >
                Chính sách điều khoản
              </Link>
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-2">
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
                  Address: Số 51, Đường Trần Phú, Phường Dữu Lâu, Thành phố Việt
                  Trì, Tỉnh Phú Thọ, Việt Nam
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
          <div className="col-span-1 flex items-center justify-center lg:justify-start gap-4">
            <Button
              variant="soft"
              radius="full"
              className="!w-9 !h-9 !p-0 hover:cursor-pointer"
            >
              <Facebook className="lg:text-black" />
            </Button>
            <Button
              variant="soft"
              radius="full"
              className="!w-9 !h-9 !p-0 hover:cursor-pointer"
            >
              <Linkedin className="lg:text-black" />
            </Button>
            <Button
              variant="soft"
              radius="full"
              className="!w-9 !h-9 !p-0 hover:cursor-pointer"
            >
              <Twitter className="lg:text-black" />
            </Button>
            <Button
              variant="soft"
              radius="full"
              className="!w-9 !h-9 !p-0 hover:cursor-pointer"
            >
              <Instagram className="lg:text-black" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
