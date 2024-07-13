import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartProvider from "@/provider/cartProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Timbu Cloud Shop",
  description:
    "Timbu Cloud Shop is an ecommerce app for a shopping experience, this is HNG-Internship stage 2 task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <CartProvider>
          <Navbar />
          <main className="w-full">{children}</main>
          <ToastContainer />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
