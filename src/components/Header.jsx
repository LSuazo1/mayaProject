import React, { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
      <div className="xl:w-1/6 text-left -mt-4">
        <h1 className="text-2xl font-bold relative p-1 bg-black"> TRY-IT</h1> <span className="text-primary 	font-style: italic text-5xl">.</span>{" "}
      </div>

      <nav className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"} top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}>
      </nav>
    </header>
  );
};

export default Header;
