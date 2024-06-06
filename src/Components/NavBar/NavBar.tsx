export const NavBar = () => {
  return (
    <nav className="absolute top-0 p-4 w-full h-[15vh] bg-slate-200 shadow-md flex justify-center items-center  md:flex  md:justify-between  ">
      <span className="flex gap-2 cursor-pointer">
        <img
          className="inline h-7 "
          src="https://i.pinimg.com/originals/c3/47/c5/c347c5c5e1dc207fc6dea7d83bbbda11.png"
          alt=""
        />
        <h2 className=" font-bold inline">Monumentos Dominicanos </h2>
      </span>
    </nav>
  );
};
