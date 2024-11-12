import { Montserrat } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LoginProvider } from "@/context/LoginContext";

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
    <html lang="vi">
      {/* <body className={`antialiased`}> */}
      <body className={`${montserratFont.className} antialiased`}>
        <Theme>
          <LoginProvider>
            <Header />
            {children}
            <Footer />
          </LoginProvider>
        </Theme>
      </body>
    </html>
  );
}
