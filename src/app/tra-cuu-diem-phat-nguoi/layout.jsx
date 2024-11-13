import { Montserrat } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./../globals.css";
import NoBGHeader from "@/components/NoBGHeader";
import Footer from "@/components/Footer";

const montserratFont = Montserrat({
  subsets: ["vietnamese"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

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
