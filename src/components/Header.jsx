"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import { Button, DropdownMenu, IconButton } from "@radix-ui/themes";
import * as Collapsible from "@radix-ui/react-collapsible";
import {
  AlertCircle,
  ChevronDown,
  ChevronRight,
  LogOut,
  Menu,
  Settings,
  User,
  UserRound,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return <>{isDesktop ? <DesktopHeader /> : <MobileHeader />}</>;
};

const DesktopHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="absolute w-screen top-0">
      <div className="container lg:max-w-[1241px] py-5 mb-10">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/" className="text-base">
              <img src="/images/logo.png" alt="" className="max-w-[250px]" />
            </Link>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-10">
              <Link
                href="/"
                className={`text-base hover:text-[#285398] hover:opacity-85 font-semibold transition-all ${
                  pathname === "/" &&
                  "border-b-2 border-b-[#285398] text-[#285398] border-l-0 border-t-0 border-r-0 border-solid font-bold"
                }`}
              >
                Trang chủ
              </Link>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button
                    variant="soft"
                    className="hover:cursor-pointer  font-semibold transition-all !px-0 text-base bg-transparent hover:opacity-85 outline-none border-none text-black"
                  >
                    Tra cứu
                    <DropdownMenu.TriggerIcon />
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Item
                    className="hover:bg-[#285398] hover:cursor-pointer"
                    onClick={() => router.push("/tra-cuu-phat-nguoi")}
                  >
                    Tra cứu phạt nguội
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    className="hover:bg-[#285398] hover:cursor-pointer"
                    onClick={() => router.push("/tra-cuu-diem-phat-nguoi")}
                  >
                    Điểm phạt nguội
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
              <Link
                href="/"
                className={`text-base hover:text-[#285398] font-semibold hover:opacity-85 transition-all ${
                  pathname === "/faqs" &&
                  "border-b-2 border-b-[#285398] text-[#285398] border-l-0 border-t-0 border-r-0 border-solid font-bold"
                }`}
              >
                FAQs
              </Link>
              <Link
                href="/"
                className={`text-base hover:text-[#285398] hover:opacity-85 font-semibold transition-all ${
                  pathname === "/hop-tac" &&
                  "border-b-2 border-b-[#285398] text-[#285398] border-l-0 border-t-0 border-r-0 border-solid font-bold"
                }`}
              >
                Hợp tác
              </Link>
              <Link
                href="/"
                className={`text-base hover:text-[#285398] hover:opacity-85 font-semibold transition-all ${
                  pathname === "/lien-he" &&
                  "border-b-2 border-b-[#285398] text-[#285398] border-l-0 border-t-0 border-r-0 border-solid font-bold"
                }`}
              >
                Liên hệ
              </Link>
              <Link
                href="/tin-tuc"
                className={`text-base hover:text-[#285398] hover:opacity-85 font-semibold transition-all ${
                  pathname === "/tin-tuc" &&
                  "border-b-2 border-b-[#285398] text-[#285398] border-l-0 border-t-0 border-r-0 border-solid font-bold"
                }`}
              >
                Tin tức
              </Link>
            </div>
            {isLoggedIn ? (
              <>
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <Button
                      variant="soft"
                      radius="full"
                      className="!w-10 !h-10 hover:cursor-pointer border-[#285398] border border-solid !p-2 relative"
                    >
                      <UserRound cas />
                      <div className="absolute flex items-center justify-center flex-col w-5 h-5 z-20 text-white text-sm -right-2 -top-1 bg-red-600 rounded-full">
                        1
                      </div>
                    </Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content align="end">
                    <DropdownMenu.Item
                      color="red"
                      className="hover:cursor-pointer"
                    >
                      <AlertCircle className="w-5" />
                      Thông báo: Có 01 lỗi vi phạm !
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item className="hover:cursor-pointer">
                      <User className="w-5" />
                      Tài khoản
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="hover:cursor-pointer">
                      <Settings className="w-5" />
                      Cài đặt
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item className="hover:cursor-pointer">
                      <LogOut className="w-5" />
                      Đăng xuất
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    className="hover:cursor-pointer hover:opacity-85 text-base transition-all !outline-[#285398] text-[#285398]"
                  >
                    Đăng ký
                  </Button>
                  <Button className="hover:cursor-pointer hover:opacity-85 text-base transition-all bg-[#285398]">
                    Đăng nhập
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileHeader = () => {
  const [isShow, setIsShow] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openCollapse, setOpenCollapse] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={`absolute w-screen top-0 ${
        isShow ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="py-5 relative">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/" className="text-base text-white">
                <img src="/images/logo.png" alt="" className="max-w-[200px]" />
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button
                    variant="soft"
                    radius="full"
                    className="!w-10 !h-10 hover:cursor-pointer border-[#285398] border border-solid !p-2 relative"
                  >
                    <UserRound cas />
                    <div className="absolute flex items-center justify-center flex-col w-5 h-5 z-20 text-white text-sm -right-2 -top-1 bg-red-600 rounded-full">
                      1
                    </div>
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content align="end">
                  <DropdownMenu.Item
                    color="red"
                    className="hover:cursor-pointer"
                  >
                    <AlertCircle className="w-5" />
                    Thông báo: Có 01 lỗi vi phạm !
                  </DropdownMenu.Item>
                  <DropdownMenu.Separator />
                  <DropdownMenu.Item className="hover:cursor-pointer">
                    <User className="w-5" />
                    Tài khoản
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="hover:cursor-pointer">
                    <Settings className="w-5" />
                    Cài đặt
                  </DropdownMenu.Item>
                  <DropdownMenu.Separator />
                  <DropdownMenu.Item className="hover:cursor-pointer">
                    <LogOut className="w-5" />
                    Đăng xuất
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
              <IconButton
                className="!w-10 !h-10 !p-0 !border-none !bg-transparent !outline-none"
                onClick={() => setIsShow((show) => !show)}
              >
                {isShow ? (
                  <X className="text-[#285398]" />
                ) : (
                  <Menu className="text-[#285398]" />
                )}
              </IconButton>
            </div>
          </div>
        </div>
        {isShow && (
          <div className="absolute container bg-white w-full py-4 z-10">
            <div className="flex flex-col justify-center gap-2">
              <Link
                href={"/"}
                className={`text-xl text-[#285398] hover:opacity-85 font-semibold !mb-[-2px] !pb-0 transition-all ${
                  pathname === "/" &&
                  "border-b-2 border-b-white border-l-0 border-t-0 border-r-0 border-solid font-semibold"
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
                    <p className="text-xl text-[#285398] hover:opacity-85 font-semibold transition-all">
                      Tra cứu
                    </p>
                    {openCollapse ? (
                      <ChevronDown className="text-[#285398]" />
                    ) : (
                      <ChevronRight className="text-[#285398]" />
                    )}
                  </div>
                </Collapsible.Trigger>
                <Collapsible.Content>
                  <div className="pl-4 pt-3">
                    <ul className="py-2">
                      <li className="mb-2 block">
                        <Link
                          href="/tra-cuu-phat-nguoi"
                          className={`text-xl text-[#285398] hover:opacity-85 font-semibold transition-all ${
                            pathname === "/tra-cuu-phat-nguoi" &&
                            "border-b-2 border-b-white border-l-0 border-t-0 border-r-0 border-solid font-semibold pb-1"
                          }`}
                          onClick={() => setIsShow((show) => !show)}
                        >
                          Tra cứu phạt nguội
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`text-xl text-[#285398] hover:opacity-85 font-semibold transition-all ${
                            pathname === "/tra-cuu-diem-phat-nguoi" &&
                            "border-b-2 border-b-white border-l-0 border-t-0 border-r-0 border-solid font-semibold pb-1"
                          }`}
                          href="/tra-cuu-diem-phat-nguoi"
                          onClick={() => setIsShow((show) => !show)}
                        >
                          Điểm phạt nguội
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Collapsible.Content>
              </Collapsible.Root>
              <Link
                href={"/faqs"}
                className={`text-xl text-[#285398] hover:opacity-85 font-semibold transition-all ${
                  pathname === "/faqs" &&
                  "border-b-2 border-b-white border-l-0 border-t-0 border-r-0 border-solid font-semibold pb-1"
                }`}
                onClick={() => setIsShow((show) => !show)}
              >
                FAQs
              </Link>
              <Link
                href={"/hop-tac"}
                className={`text-xl text-[#285398] hover:opacity-85 font-semibold transition-all ${
                  pathname === "/hop-tac" &&
                  "border-b-2 border-b-white border-l-0 border-t-0 border-r-0 border-solid font-semibold pb-1"
                }`}
                onClick={() => setIsShow((show) => !show)}
              >
                Hợp tác
              </Link>
              <Link
                href={"/lien-he"}
                className={`text-xl text-[#285398] hover:opacity-85 font-semibold transition-all ${
                  pathname === "/lien-he" &&
                  "border-b-2 border-b-white border-l-0 border-t-0 border-r-0 border-solid font-semibold pb-1"
                }`}
                onClick={() => setIsShow((show) => !show)}
              >
                Liên hệ
              </Link>
              <Link
                href={"/tin-tuc"}
                className={`text-xl text-[#285398] hover:opacity-85 font-semibold transition-all ${
                  pathname === "/tin-tuc" &&
                  "border-b-2 border-b-white border-l-0 border-t-0 border-r-0 border-solid font-semibold pb-1"
                }`}
                onClick={() => setIsShow((show) => !show)}
              >
                Tin tức
              </Link>
              {isLoggedIn && (
                <div className="grid grid-cols-2 gap-4 mt-5">
                  <Button
                    variant="outline"
                    className="h-10 hover:cursor-pointer hover:opacity-85 text-base transition-all !outline-[#285398] text-[#285398]"
                  >
                    Đăng ký
                  </Button>
                  <Button className="h-10 hover:cursor-pointer hover:opacity-85 text-base transition-all bg-[#285398]">
                    Đăng nhập
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
