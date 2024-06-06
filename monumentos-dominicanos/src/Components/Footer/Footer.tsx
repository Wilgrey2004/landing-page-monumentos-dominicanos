import { Contacs } from "../contacts/Contacs";

export const Footer = () => {
  return (
    <footer className=" w-full h-[20%]  -shadow-md p-8  bg-slate-200  flex items-center flex-col">
      <span className=" text-xl ">
        Creado por <h3 className="inline font-bold"> Wilgrey Ravelo Cruz</h3>
      </span>
      <p>Contactame</p>
      <Contacs />
    </footer>
  );
};
