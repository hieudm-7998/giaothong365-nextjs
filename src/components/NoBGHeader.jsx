"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import {
  Button,
  Dialog,
  DropdownMenu,
  Flex,
  IconButton,
  Text,
  TextField,
} from "@radix-ui/themes";
import { AlertCircle, LogOut, Menu, Settings, User, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  DEFAULT,
  HAS_VIOLATION,
  NO_VIOLATION,
  useLoginContext,
} from "@/context/LoginContext";
import { useIsHome } from "@/context/HeaderContext";

const NoBGHeader = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return <>{isDesktop ? <DesktopHeader /> : <MobileHeader />}</>;
};

const DesktopHeader = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { loginType } = useLoginContext();
  const isHome = useIsHome();

  return (
    <div className={`fixed w-full top-0 bg-white shadow-md`}>
      <div className="container lg:max-w-[1241px] py-7">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/" className="text-base">
              <img
                src={`/images/logo-black.png`}
                alt=""
                className="max-w-[250px]"
              />
            </Link>
          </div>
          <div className="flex items-center gap-10">
            <div>
              <div className="flex items-center gap-10">
                <Link
                  href="/"
                  className={`text-base hover:opacity-85 transition-all uppercase ${
                    isHome ? "text-white" : "text-[#0d47a1]"
                  } ${pathname === "/" && "font-semibold"}`}
                >
                  Trang chủ
                </Link>
                <Link
                  href="/tra-cuu-phat-nguoi"
                  className={`text-base hover:opacity-85 transition-all uppercase ${
                    isHome ? "text-white" : "text-[#0d47a1]"
                  } ${pathname === "/tra-cuu-phat-nguoi" && "font-semibold"}`}
                >
                  Tra cứu phạt nguội
                </Link>
                <Link
                  href="/tra-cuu-diem-phat-nguoi"
                  className={`text-base hover:opacity-85 transition-all uppercase ${
                    isHome ? "text-white" : "text-[#0d47a1]"
                  } ${
                    pathname === "/tra-cuu-diem-phat-nguoi" && "font-semibold"
                  }`}
                >
                  Điểm phạt nguội
                </Link>
                <Link
                  href="/tin-tuc"
                  className={`text-base hover:opacity-85 transition-all uppercase ${
                    isHome ? "text-white" : "text-[#0d47a1]"
                  } ${pathname === "/tin-tuc" && "font-semibold"}`}
                >
                  Tin tức
                </Link>
              </div>

              {loginType === DEFAULT && (
                <div className="flex justify-end gap-2">
                  <LoginDialog />
                  <span className={isHome ? "text-white" : "text-[#0d47a1]"}>
                    |
                  </span>
                  <RegisterDialog />
                </div>
              )}
            </div>
            {loginType === HAS_VIOLATION && (
              <>
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <Button
                      variant="soft"
                      radius="full"
                      className="!w-10 !h-10 hover:cursor-pointer border-[#285398] border border-solid !p-0 relative"
                    >
                      <img src="/images/avatar.png" className="border-[#285398] border border-solid rounded-full" alt="" />
                      <div className="absolute flex items-center justify-center flex-col w-5 h-5 z-20 text-white text-sm -right-2 -top-1 bg-red-600 rounded-full">
                        1
                      </div>
                    </Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content align="end">
                    <DropdownMenu.Item
                      color="red"
                      className="hover:cursor-pointer"
                      onClick={() => router.push("/tra-cuu-phat-nguoi")}
                    >
                      <AlertCircle className="w-5" />
                      Thông báo: Có 01 lỗi vi phạm !
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item className="hover:cursor-pointer">
                      <User className="w-5" />
                      Tài khoản
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item className="hover:cursor-pointer">
                      <LogOut className="w-5" />
                      Đăng xuất
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              </>
            )}
            {loginType === NO_VIOLATION && (
              <>
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <Button
                      variant="soft"
                      radius="full"
                      className="!w-10 !h-10 hover:cursor-pointer border-[#285398] border border-solid !p-0 relative"
                    >
                      <img src="/images/avatar.png" className="border-[#285398] border border-solid rounded-full" alt="" />
                    </Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content align="end">
                    <DropdownMenu.Item className="hover:cursor-pointer">
                      <User className="w-5" />
                      Tài khoản
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item className="hover:cursor-pointer">
                      <LogOut className="w-5" />
                      Đăng xuất
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
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

  const pathname = usePathname();
  const router = useRouter();
  const { loginType } = useLoginContext();
  const isHome = useIsHome();

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsScrolling(false);
      } else if (window.scrollY > 20) {
        setIsScrolling(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-screen transition-all top-0 z-30 ${
        (isShow && isHome) || isScrolling ? "bg-white" : "bg-transparent"
      } `}
    >
      <div className="py-5 relative">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/" className="text-base text-white">
                <img
                  src={`/images/logo-black.png`}
                  alt=""
                  className="max-w-[200px]"
                />
              </Link>
            </div>
            <div className="flex items-center gap-3">
              {loginType === NO_VIOLATION && (
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <Button
                      variant="soft"
                      radius="full"
                      className="!w-10 !h-10 hover:cursor-pointer border-[#285398] border border-solid !p-0 relative"
                    >
                      <img src="/images/avatar.png" className="border-[#285398] border border-solid rounded-full" alt="" />
                    </Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content align="end">
                    <DropdownMenu.Item
                      className="hover:cursor-pointer"
                      onClick={() => router.push("/tai-khoan")}
                    >
                      <User className="w-5" />
                      Tài khoản
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item className="hover:cursor-pointer">
                      <LogOut className="w-5" />
                      Đăng xuất
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              )}
              {loginType === HAS_VIOLATION && (
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <Button
                      variant="soft"
                      radius="full"
                      className="!w-10 !h-10 hover:cursor-pointer border-[#285398] border border-solid !p-0 relative"
                    >
                      <img src="/images/avatar.png" className="border-[#285398] border border-solid rounded-full" alt="" />
                      <div className="absolute flex items-center justify-center flex-col w-5 h-5 z-20 text-white text-sm -right-2 -top-1 bg-red-600 rounded-full">
                        1
                      </div>
                    </Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content align="end">
                    <DropdownMenu.Item
                      color="red"
                      className="hover:cursor-pointer"
                      onClick={() => router.push("/tra-cuu-phat-nguoi")}
                    >
                      <AlertCircle className="w-5" />
                      Thông báo: Có 01 lỗi vi phạm !
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item
                      className="hover:cursor-pointer"
                      onClick={() => router.push("/tai-khoan")}
                    >
                      <User className="w-5" />
                      Tài khoản
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item className="hover:cursor-pointer">
                      <LogOut className="w-5" />
                      Đăng xuất
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              )}
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
              <Link
                href={"/tra-cuu-phat-nguoi"}
                className={`text-xl text-[#285398] hover:opacity-85 font-semibold transition-all ${
                  pathname === "/tra-cuu-phat-nguoi" &&
                  "border-b-2 border-b-white border-l-0 border-t-0 border-r-0 border-solid font-semibold pb-1"
                }`}
                onClick={() => setIsShow((show) => !show)}
              >
                Tra cứu phạt nguội
              </Link>
              <Link
                href={"/tra-cuu-diem-phat-nguoi"}
                className={`text-xl text-[#285398] hover:opacity-85 font-semibold transition-all ${
                  pathname === "/tra-cuu-diem-phat-nguoi" &&
                  "border-b-2 border-b-white border-l-0 border-t-0 border-r-0 border-solid font-semibold pb-1"
                }`}
                onClick={() => setIsShow((show) => !show)}
              >
                Điểm phạt nguội
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
              {loginType === DEFAULT && (
                <div className="grid grid-cols-2 gap-4 mt-5">
                  <MobileRegisterDialog />
                  <MobileLoginDialog />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const RegisterDialog = () => {
  const isHome = useIsHome();
  const {
    loginType,
    isRegisterSuccess,
    toggleLoginType,
    toggleRegisterSuccess,
  } = useLoginContext();
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button
          className={`transition-all hover:opacity-85 text-sm ${
            isHome ? "text-white" : "text-[#0d47a1]"
          }`}
        >
          Đăng ký
        </button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        {isRegisterSuccess === false ? (
          <>
            <Dialog.Title>Đăng ký hội viên</Dialog.Title>
            <Dialog.Description size="2" mb="4">
              Kiểm tra và quản lý vi phạm phạt nguội của bạn một cách nhanh
              chóng và dễ dàng.
            </Dialog.Description>

            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Họ và tên
                </Text>
                <TextField.Root placeholder="Họ và tên" />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Số điện thoại
                </Text>
                <TextField.Root placeholder="Số điện thoại" />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Biển số xe (BKS)
                </Text>
                <TextField.Root placeholder="Ví dụ: 30K12363" />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Loại phương tiện
                </Text>
                <select
                  className="w-full px-2 !py-1 border border-solid focus:outline-[#8CA4F0] rounded-md shadow-sm transition-all hover:cursor-pointer"
                  style={{ borderColor: "rgba(0.01,0.03,0.18,0.2)" }}
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
                <Text as="div" size="2" mb="1" weight="bold">
                  Mật khẩu
                </Text>
                <TextField.Root type="password" placeholder="Mật khẩu" />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Nhập lại mật khẩu
                </Text>
                <TextField.Root
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                />
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>
                  Tôi đồng ý với
                  <Link
                    target="_blank"
                    href="/dieu-khoan-su-dung"
                    className="text-[#759cff] cursor-pointer ml-1"
                  >
                    điều khoản chính sách
                  </Link>
                </span>
              </label>
            </Flex>

            <Flex gap="3" mt="5" justify="center">
              <Button
                className="!bg-[#285398] transition-all hover:cursor-pointer"
                onClick={() => {
                  toggleRegisterSuccess(true);
                }}
              >
                Đăng ký
              </Button>
              <Dialog.Close>
                <Button variant="soft" color="gray">
                  Huỷ
                </Button>
              </Dialog.Close>
            </Flex>
          </>
        ) : (
          <>
            <Dialog.Title className="text-center text-green-500">
              Đăng ký thành công !
            </Dialog.Title>
            <Dialog.Description size="2" mb="4" className="text-center">
              <span>
                Bạn đã đăng ký thành công với số điện thoại{" "}
                <span className="font-semibold">037xxxxxxx</span>.
              </span>
              <span className="block">
                Đóng hộp thoại để tự động đăng nhập.
              </span>
            </Dialog.Description>

            <Flex gap="3" mt="3" justify="center">
              <Button
                variant="soft"
                color="gray"
                onClick={() => toggleLoginType(NO_VIOLATION)}
              >
                Đóng
              </Button>
            </Flex>
          </>
        )}
      </Dialog.Content>
    </Dialog.Root>
  );
};

const LoginDialog = () => {
  const isHome = useIsHome();
  const {
    loginType,
    isRegisterSuccess,
    toggleLoginType,
    toggleIsLoggedIn,
    isLoggedIn,
    toggleRegisterSuccess,
  } = useLoginContext();
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button
          className={`transition-all hover:opacity-85 text-sm ${
            isHome ? "text-white" : "text-[#0d47a1]"
          }`}
        >
          Đăng nhập
        </button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        {!isLoggedIn ? (
          <>
            <Dialog.Title>Đăng nhập</Dialog.Title>

            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Số điện thoại
                </Text>
                <TextField.Root placeholder="Số điện thoại " />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Mật khẩu
                </Text>
                <TextField.Root type="password" placeholder="Nhập mật khẩu " />
              </label>
            </Flex>

            <Flex gap="3" mt="5" justify="center">
              <Button
                className="!bg-[#285398] transition-all hover:cursor-pointer"
                onClick={() => {
                  toggleIsLoggedIn(true);
                }}
              >
                Đăng nhập
              </Button>
              <Dialog.Close>
                <Button variant="soft" color="gray">
                  Huỷ
                </Button>
              </Dialog.Close>
            </Flex>
          </>
        ) : (
          <>
            <Dialog.Title className="text-center text-green-500">
              Đăng nhập thành công !
            </Dialog.Title>
            <Dialog.Description size="2" mb="4" className="text-center">
              <span>
                Đăng nhập thành công với số điện thoại{" "}
                <span className="font-semibold">037xxxxxxx</span>.
              </span>
            </Dialog.Description>

            <Flex gap="3" mt="3" justify="center">
              <Button
                variant="soft"
                color="gray"
                onClick={() => toggleLoginType(NO_VIOLATION)}
              >
                Đóng
              </Button>
            </Flex>
          </>
        )}
      </Dialog.Content>
    </Dialog.Root>
  );
};

const MobileLoginDialog = () => {
  const isHome = useIsHome();
  const {
    loginType,
    isLoggedIn,
    toggleIsLoggedIn,
    isRegisterSuccess,
    toggleLoginType,
    toggleRegisterSuccess,
  } = useLoginContext();
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button className="transition-all font-medium hover:opacity-85 text-sm text-[#0d47a1]">
          Đăng nhập
        </button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        {!isLoggedIn ? (
          <>
            <Dialog.Title>Đăng nhập</Dialog.Title>

            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Số điện thoại
                </Text>
                <TextField.Root placeholder="Số điện thoại " />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Mật khẩu
                </Text>
                <TextField.Root type="password" placeholder="Nhập mật khẩu " />
              </label>
            </Flex>

            <Flex gap="3" mt="5" justify="center">
              <Button
                className="!bg-[#285398] transition-all hover:cursor-pointer"
                onClick={() => {
                  toggleIsLoggedIn(true);
                }}
              >
                Đăng nhập
              </Button>
              <Dialog.Close>
                <Button variant="soft" color="gray">
                  Huỷ
                </Button>
              </Dialog.Close>
            </Flex>
          </>
        ) : (
          <>
            <Dialog.Title className="text-center text-green-500">
              Đăng nhập thành công !
            </Dialog.Title>
            <Dialog.Description size="2" mb="4" className="text-center">
              <span>
                Đăng nhập thành công với số điện thoại{" "}
                <span className="font-semibold">037xxxxxxx</span>.
              </span>
            </Dialog.Description>

            <Flex gap="3" mt="3" justify="center">
              <Button
                variant="soft"
                color="gray"
                onClick={() => toggleLoginType(NO_VIOLATION)}
              >
                Đóng
              </Button>
            </Flex>
          </>
        )}
      </Dialog.Content>
    </Dialog.Root>
  );
};

const MobileRegisterDialog = () => {
  const {
    loginType,
    isRegisterSuccess,
    toggleLoginType,
    toggleRegisterSuccess,
  } = useLoginContext();
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button className="transition-all font-medium hover:opacity-85 text-sm text-[#0d47a1]">
          Đăng ký
        </button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        {isRegisterSuccess === false ? (
          <>
            <Dialog.Title>Đăng ký hội viên</Dialog.Title>
            <Dialog.Description size="2" mb="4">
              Kiểm tra và quản lý vi phạm phạt nguội của bạn một cách nhanh
              chóng và dễ dàng.
            </Dialog.Description>

            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Họ và tên
                </Text>
                <TextField.Root placeholder="Họ và tên" />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Số điện thoại
                </Text>
                <TextField.Root placeholder="Số điện thoại" />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Biển số xe (BKS)
                </Text>
                <TextField.Root placeholder="Ví dụ: 30K12363" />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Loại phương tiện
                </Text>
                <select
                  className="w-full px-2 !py-1 border border-solid focus:outline-[#8CA4F0] rounded-md shadow-sm transition-all hover:cursor-pointer"
                  style={{ borderColor: "rgba(0.01,0.03,0.18,0.2)" }}
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
                <Text as="div" size="2" mb="1" weight="bold">
                  Mật khẩu
                </Text>
                <TextField.Root type="password" placeholder="Mật khẩu" />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Nhập lại mật khẩu
                </Text>
                <TextField.Root
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                />
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>
                  Tôi đồng ý với
                  <Link
                    target="_blank"
                    href="/dieu-khoan-su-dung"
                    className="text-[#759cff] cursor-pointer ml-1"
                  >
                    điều khoản chính sách
                  </Link>
                </span>
              </label>
            </Flex>

            <Flex gap="3" mt="5" justify="center">
              <Button
                className="!bg-[#285398] transition-all hover:cursor-pointer"
                onClick={() => toggleRegisterSuccess(true)}
              >
                Đăng ký
              </Button>
              <Dialog.Close>
                <Button variant="soft" color="gray">
                  Huỷ
                </Button>
              </Dialog.Close>
            </Flex>
          </>
        ) : (
          <>
            <Dialog.Title className="text-center text-green-500">
              Đăng ký thành công !
            </Dialog.Title>
            <Dialog.Description size="2" mb="4" className="text-center">
              <span>
                Bạn đã đăng ký thành công với số điện thoại{" "}
                <span className="font-semibold">037xxxxxxx</span>.
              </span>
              <span className="block">
                Đóng hộp thoại để tự động đăng nhập.
              </span>
            </Dialog.Description>

            <Flex gap="3" mt="5" justify="center">
              <Button
                variant="soft"
                color="gray"
                onClick={() => toggleLoginType(NO_VIOLATION)}
              >
                Đóng
              </Button>
            </Flex>
          </>
        )}
      </Dialog.Content>
    </Dialog.Root>
  );
};
export default NoBGHeader;
