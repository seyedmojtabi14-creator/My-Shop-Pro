
import "./globals.css";
import Header from "./commpnents/Header";
import Footer from "./commpnents/Foter";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/700.css";

export const metadata = {
  title: "ShopNow | فروشگاه اینترنتی",
  description: "خرید آسان از فروشگاه اینترنتی ShopNow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}