import "./globals.css";
import Header from "./commpnents/Header";
import Footer from "./commpnents/Foter";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/700.css";
import { CartProvider } from "./context/CartContext";

export const metadata = {
  title: "ShopNow | فروشگاه اینترنتی",
  description: "خرید آسان از فروشگاه اینترنتی ShopNow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="antialiased">
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
