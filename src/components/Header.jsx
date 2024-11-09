"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import { Button, DropdownMenu } from "@radix-ui/themes";
import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown, ChevronRight, Menu, UserRound, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return <>{isDesktop ? <DesktopHeader /> : <MobileHeader />}</>;
};

const DesktopHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  return (
    <div className="container lg:max-w-[1241px] py-5 mb-20">
      <div className="flex justify-between items-center">
        <div>
          <Link href="/" className="text-base">
            ##logo
          </Link>
        </div>
        <div className="flex items-center gap-10">
          <Link
            href="/"
            className={`text-base hover:text-[#2196F3] hover:opacity-85 transition-all ${
              pathname === "/" &&
              "border-b-2 border-b-[#2196F3] text-[#2196F3] border-l-0 border-t-0 border-r-0 border-solid font-semibold"
            }`}
          >
            Trang chủ
          </Link>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button
                variant="soft"
                className="hover:cursor-pointer transition-all !px-0 text-base bg-transparent hover:opacity-85 outline-none border-none text-black font-normal"
              >
                Tra cứu
                <DropdownMenu.TriggerIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item className="hover:bg-[#2196F3] hover:cursor-pointer">
                Tra cứu phạt nguội
              </DropdownMenu.Item>
              <DropdownMenu.Item className="hover:bg-[#2196F3] hover:cursor-pointer">
                Điểm phạt nguội
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          <Link
            href="/"
            className={`text-base hover:text-[#2196F3] hover:opacity-85 transition-all ${
              pathname === "/faqs" &&
              "border-b-2 border-b-[#2196F3] text-[#2196F3] border-l-0 border-t-0 border-r-0 border-solid font-semibold"
            }`}
          >
            FAQs
          </Link>
          <Link
            href="/"
            className={`text-base hover:text-[#2196F3] hover:opacity-85 transition-all ${
              pathname === "/hop-tac" &&
              "border-b-2 border-b-[#2196F3] text-[#2196F3] border-l-0 border-t-0 border-r-0 border-solid font-semibold"
            }`}
          >
            Hợp tác
          </Link>
          <Link
            href="/"
            className={`text-base hover:text-[#2196F3] hover:opacity-85 transition-all ${
              pathname === "/lien-he" &&
              "border-b-2 border-b-[#2196F3] text-[#2196F3] border-l-0 border-t-0 border-r-0 border-solid font-semibold"
            }`}
          >
            Liên hệ
          </Link>
          <Link
            href="/tin-tuc"
            className={`text-base hover:text-[#2196F3] hover:opacity-85 transition-all ${
              pathname === "/tin-tuc" &&
              "border-b-2 border-b-[#2196F3] text-[#2196F3] border-l-0 border-t-0 border-r-0 border-solid font-semibold"
            }`}
          >
            Tin tức
          </Link>
        </div>
        {isLoggedIn ? (
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button
                variant="soft"
                radius="full"
                className="!w-10 !h-10 hover:cursor-pointer"
              >
                <UserRound />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
              <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
                <DropdownMenu.SubContent>
                  <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
                  <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

                  <DropdownMenu.Separator />
                  <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Sub>

              <DropdownMenu.Separator />
              <DropdownMenu.Item>Share</DropdownMenu.Item>
              <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        ) : (
          <div className="flex items-center gap-5">
            <Button
              variant="outline"
              className="hover:cursor-pointer hover:opacity-85 text-base transition-all !outline-[#2196F3] text-[#2196F3]"
            >
              Đăng ký
            </Button>
            <Button className="hover:cursor-pointer hover:opacity-85 text-base transition-all bg-[#2196F3]">
              Đăng nhập
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

const MobileHeader = () => {
  const [isShow, setIsShow] = useState(false);
  const [openCollapse, setOpenCollapse] = useState(false);
  const pathname = usePathname();

  return (
    <div className="py-5 mb-20 bg-[#2196F3] relative">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="text-base text-white">
              ##logo
            </Link>
          </div>
          <div>
            <Button
              variant="outline"
              className="!w-10 !h-10 !p-0 !border !border-white !border-solid !outline-none"
              onClick={() => setIsShow((show) => !show)}
            >
              {isShow ? (
                <X className="text-white" />
              ) : (
                <Menu className="text-white" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {isShow && (
        <div className="absolute container bg-[#2196F3] w-full py-4">
          <div className="flex flex-col justify-center gap-5">
            <Link
              href={"/"}
              className={`text-base text-white hover:opacity-85 transition-all ${
                pathname === "/" &&
                "border-b-2 border-b-white border-l-0 border-t-0 border-r-0 border-solid font-semibold pb-1"
              }`}
              onClick={() => setIsShow((show) => !show)}
            >
              Trang chủ
            </Link>
            <Collapsible.Root
              open={openCollapse}
              onOpenChange={setOpenCollapse}
            >
              <Collapsible.Trigger>
                <div className="flex items-center gap-2">
                  <p className="text-white text-lg">Tra cứu</p>
                  {openCollapse ? (
                    <ChevronDown className="text-white" />
                  ) : (
                    <ChevronRight className="text-white" />
                  )}
                </div>
              </Collapsible.Trigger>
              <Collapsible.Content>
                <div className="pl-4 pt-3">
                  <ul>
                    <li className="text-white text-lg mb-2">
                      Tra cứu phạt nguội
                    </li>
                    <li className="text-white text-lg">Điểm phạt nguội</li>
                  </ul>
                </div>
              </Collapsible.Content>
            </Collapsible.Root>
            <Link
              href={"/faqs"}
              className={`text-base text-white hover:opacity-85 transition-all ${
                pathname === "/faqs" &&
                "border-b-2 border-b-white border-l-0 border-t-0 border-r-0 border-solid font-semibold pb-1"
              }`}
              onClick={() => setIsShow((show) => !show)}
            >
              FAQs
            </Link>
            <Link
              href={"/hop-tac"}
              className={`text-base text-white hover:opacity-85 transition-all ${
                pathname === "/hop-tac" &&
                "border-b-2 border-b-white border-l-0 border-t-0 border-r-0 border-solid font-semibold pb-1"
              }`}
              onClick={() => setIsShow((show) => !show)}
            >
              Hợp tác
            </Link>
            <Link
              href={"/lien-he"}
              className={`text-base text-white hover:opacity-85 transition-all ${
                pathname === "/lien-he" &&
                "border-b-2 border-b-white border-l-0 border-t-0 border-r-0 border-solid font-semibold pb-1"
              }`}
              onClick={() => setIsShow((show) => !show)}
            >
              Liên hệ
            </Link>
            <Link
              href={"/tin-tuc"}
              className={`text-base text-white hover:opacity-85 transition-all ${
                pathname === "/tin-tuc" &&
                "border-b-2 border-b-white border-l-0 border-t-0 border-r-0 border-solid font-semibold pb-1"
              }`}
              onClick={() => setIsShow((show) => !show)}
            >
              Tin tức
            </Link>
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="w-full text-white hover:cursor-pointer hover:opacity-85 text-base transition-all !h-10 !border !border-white !border-solid"
              >
                Đăng ký
              </Button>
              <Button className="w-full hover:cursor-pointer hover:opacity-85 text-base transition-all bg-white text-[#2196F3] !h-10">
                Đăng nhập
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
