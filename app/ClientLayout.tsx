"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { Calender } from "@/components/Calendar"
import UserProvider from "@/components/UserProvider";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <UserProvider>
      <Header onClicktoggleMenu={toggleMenu} />
      {/* {isMenuOpen && <MenuData onClickcrossMenu={toggleMenu} />} */}
      <Calender isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Toaster position="top-right" />
      <main className="flex-grow">{children}</main>
      <Footer />
    </UserProvider>
  );
}
