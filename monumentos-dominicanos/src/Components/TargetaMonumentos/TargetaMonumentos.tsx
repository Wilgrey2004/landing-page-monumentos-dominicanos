import { useEffect, useState } from "react";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
type props = {
  imgs?: string[];
  titulo: string;
  leyenda: string;
  ruta: string;
};
export const TargetaMonumentos = ({
  imgs = [
    "https://static.vecteezy.com/system/resources/previews/005/720/408/non_2x/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg",
  ],
  titulo,
  leyenda,
  ruta = "/",
}: props) => {
  const imagenes: string[] = imgs;

  const [count, setCount] = useState<number>(0);

  const [isDisableLeft, setIsDisabeleLeft] = useState<boolean>(false);
  const [isDisableRit, setIsDisableRit] = useState<boolean>(false);

  const aumentarCount = () => {
    if (count < imagenes.length - 1) {
      setCount(count + 1);
    }
  };

  const restarCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    if (count >= imagenes.length - 1) {
      setIsDisableRit(true);
    } else {
      setIsDisableRit(false);
    }

    if (count <= 0) {
      setIsDisabeleLeft(true);
    } else {
      setIsDisabeleLeft(false);
    }
  }, [count]);

  const returnUrl = () => {
    return imagenes[count];
  };

  return (
    <div className="mb-2 m-auto mt-10">
      <section className="flex flex-col justify-center  items-center  gap-4 rounded-xl bg-blue-200 w-[80%] m-auto sm:flex-row">
        <div className="flex flex-col gap-4 rounded-xl bg-white w-[90%] md:w-[100%] m-4 shadow-md">
          <h2 className="ml-2 mt-2 truncate text-left font-bold text-2xl hover:-translate-y-1 transition duration-75">
            {titulo}
          </h2>
          <article className="flex gap-10 flex-col  bg-gray-200 w-[90%]  rounded-xl shadow-xl m-auto p-4 ">
            <p className="text-balance md:text-x  selection:bg-red-200">
              {leyenda}
            </p>
          </article>

          <div className="m-auto truncate cursor-pointer border-2 border-blue-900 bg-blue-300 text-center p-2 rounded-3xl  font-bold hover:bg-blue-500 transition duration-75   hover:shadow-xl  hover:shadow-blue-700 hover:-translate-y-1 mb-4">
            <BrowserRouter>
              <Link className="truncate" to={ruta}>
                Mas Sobre {titulo}!!
              </Link>
              <Routes>
                <Route path={ruta} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>

        <article className="m-4 bg-red-700 w-[90%] rounded-xl shadow-xl flex flex-col justify-center items-center">
          <img
            className="h-[200px] w-[280px] md:h-[250px] md:w-[300px]  rounded-3xl hover:scale-100 scale-95 hover:transition hover:duration-75  shadow-lg shadow-red-950 mt-4"
            src={returnUrl()}
            alt={titulo}
          />

          <div className="flex flex-row gap-4">
            <button
              className=" bg-red-500 disabled:bg-gray-300  disabled:border-gray-300 cursor-pointer  border-2 border-red-300 rounded-2xl p-2 m-2   shadow-md hover:shadow-xl  transition  duration-100 hover:-translate-y-1  delay-100 "
              onClick={restarCount}
              disabled={isDisableLeft}
            >
              {"<--"}
            </button>
            <h3 className=" text-center font-bold mt-4">
              {count + 1}/{imagenes.length}
            </h3>
            <button
              className="bg-red-500 disabled:bg-gray-300  disabled:border-gray-300  cursor-pointer border-2 border-red-300 rounded-2xl p-2 m-2   shadow-md hover:shadow-xl  transition  duration-100 hover:-translate-y-1  delay-100 "
              onClick={aumentarCount}
              disabled={isDisableRit}
            >
              {"-->"}
            </button>
          </div>
        </article>
      </section>
    </div>
  );
};
