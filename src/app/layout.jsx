import { Inter } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const robotoFont = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Giao thông 365 | Tra cứu phạt nguội, điểm phạt nguội",
  description: "Tra cứu phạt nguội, điểm phạt nguội",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      {/* <body className={`antialiased`}> */}
      <body className={`${robotoFont.variable} antialiased`}>
        <Theme>
          <Header />
          {children}
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
