import { Contacs } from "../contacts/Contacs";

export const Footer = () => {
  return (
    <footer className="w-full h-[20%]  -shadow-md p-8  bg-slate-200  flex items-center flex-col">
      <span className=" hover:-translate-y-1  transition-all  hover:shadow-lg  hover:shadow-white text-xl   bg-gradient-to-b from-blue-300 to-red-300 border-blue-400  rounded-2xl p-2 ">
        Creado por{" "}
        <h3 className="inline font-bold font-serif hover:-scale-105 duration-100  transition-all  hover:text-blue-500">
          {" "}
          Wilgrey Ravelo Cruz
        </h3>
      </span>
      <p>Contactame</p>
      <Contacs />
    </footer>
  );
};
