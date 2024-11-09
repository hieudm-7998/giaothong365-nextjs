"use client";

import { Button } from "@radix-ui/themes";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();

  return (
    <div className="bg-[#2196F3] lg:bg-white py-20 ">
      <div className="container lg:max-w-[1241px]">
        <div className="grid lg:grid-cols-5 gap-5 lg:gap-10">
          <div className="col-span-3 lg:col-span-1">
            <Link className="text-base text-white lg:text-black block text-center lg:text-left" href="/">
              ##logo
            </Link>
          </div>
          <div className="col-span-3 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
            <Link
              href="/"
              className={`text-base text-white lg:text-black hover:opacity-85 transition-all ${
                pathname === "/" &&
                "border-b-2 lg:border-b-[#2196F3] text-white lg:text-[#2196F3] border-white border-l-0 border-t-0 border-r-0 border-solid font-semibold"
              }`}
            >
              Trang chủ
            </Link>
            <Link
              href="/tra-cuu"
              className={`text-base text-white lg:text-black hover:opacity-85 transition-all ${
                pathname === "/tra-cuu" &&
                "border-b-2 lg:border-b-[#2196F3] text-white lg:text-[#2196F3] border-white border-l-0 border-t-0 border-r-0 border-solid font-semibold"
              }`}
            >
              Tra cứu
            </Link>
            <Link
              href="/ho-tro"
              className={`text-base text-white lg:text-black hover:opacity-85 transition-all ${
                pathname === "/ho-tro" &&
                "border-b-2 lg:border-b-[#2196F3] text-white lg:text-[#2196F3] border-white border-l-0 border-t-0 border-r-0 border-solid font-semibold"
              }`}
            >
              Hỗ trợ
            </Link>
            <Link
              href="/chinh-sach-dieu-khoan"
              className={`text-base text-white lg:text-black hover:opacity-85 transition-all ${
                pathname === "/chinh-sach-dieu-khoan" &&
                "border-b-2 lg:border-b-[#2196F3] text-white lg:text-[#2196F3] border-white border-l-0 border-t-0 border-r-0 border-solid font-semibold"
              }`}
            >
              Chính sách điều khoản
            </Link>
          </div>
          <div className="col-span-3 lg:col-span-1 flex items-center justify-center lg:justify-start gap-4">
            <Button
              variant="soft"
              radius="full"
              className="!w-9 !h-9 !p-0 hover:cursor-pointer"
            >
              <Facebook className="text-white lg:text-black" />
            </Button>
            <Button
              variant="soft"
              radius="full"
              className="!w-9 !h-9 !p-0 hover:cursor-pointer"
            >
              <Linkedin className="text-white lg:text-black" />
            </Button>
            <Button
              variant="soft"
              radius="full"
              className="!w-9 !h-9 !p-0 hover:cursor-pointer"
            >
              <Twitter className="text-white lg:text-black" />
            </Button>
            <Button
              variant="soft"
              radius="full"
              className="!w-9 !h-9 !p-0 hover:cursor-pointer"
            >
              <Instagram className="text-white lg:text-black" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
