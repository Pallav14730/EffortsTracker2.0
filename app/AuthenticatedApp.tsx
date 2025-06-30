"use client";

import { useState, useContext } from "react";
import { userContext } from "../components/UserProvder";
import Header from "../components/Header";
import Calender from "../components/Calendar";
import Footer from "../components/Footer";
import Login from "../components/Login";
import { Toaster } from "react-hot-toast";

export default function AuthenticatedApp({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useContext(userContext);
  const isLoggedIn = user;

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return isLoggedIn ? (
    <>
      <Header onClicktoggleMenu={toggleMenu} />
      <Calender isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Toaster position="top-right" />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  ) : (
    <Login />
  );
}
