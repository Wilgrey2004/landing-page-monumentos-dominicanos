import React from "react";

export const NavBar = () => {
  return (
    <nav className="absolute top-0 p-4 w-full h-[15vh] bg-white shadow  md:flex items-center md:justify-between  ">
        <span className="flex gap-2 cursor-pointer">
          <img
            className="inline h-7 "
            src="https://i.pinimg.com/originals/c3/47/c5/c347c5c5e1dc207fc6dea7d83bbbda11.png"
            alt=""
          />
          <h2 className=" font-bold inline">Monumentos Dominicanos </h2>
        </span>

        <ul>
            <li><a href="#" className="text-xl hover:text-blue-500  duration-500 ">Home</a></li>
        </ul>
      
    </nav>
  );
};
