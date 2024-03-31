import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movies App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} "dark:bg-body bg-white font-[Sora] dark:text-white text-dark mx-auto"`}
      >
        <Header></Header>
        {children}
        <div id="modal-root-content" />
        <Footer></Footer>
      </body>
    </html>
  );
}
