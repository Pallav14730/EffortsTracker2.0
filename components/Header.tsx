"use client";
import { MenuIcon } from "lucide-react";
import { useContext } from "react";
import { userContext } from "./UserProvder";

interface toggleMenu {
  onClicktoggleMenu: () => void;
}

function Header({ onClicktoggleMenu }: toggleMenu) {
  const { user } = useContext(userContext);
  const { logout } = useContext(userContext);

  function handleLogout() {
    logout();
  }
  return (
    <header className="flex justify-center items-center space-x-4 p-2 bg-gradient-to-b from-[#4e0ecf] to-[#2e005d] text-white font-bold cursor-pointer">
      <div className="flex flex-1 space-x-10">
        <h1 className="">Resouce Loading</h1>
        <MenuIcon onClick={onClicktoggleMenu} />
      </div>
      <p onClick={handleLogout}>Hi,{user.username}</p>
    </header>
  );
}
export default Header;
