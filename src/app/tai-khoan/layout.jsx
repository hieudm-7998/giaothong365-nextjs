import { Montserrat } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./../globals.css";
import NoBGHeader from "@/components/NoBGHeader";

export const metadata = {
  title: "Giao thông 365 | Tra cứu phạt nguội, điểm phạt nguội",
  description: "Tra cứu phạt nguội, điểm phạt nguội",
};

export default function RootLayout({ children }) {
  return (
    <>
      <NoBGHeader />
      {children}
    </>
  );
}
