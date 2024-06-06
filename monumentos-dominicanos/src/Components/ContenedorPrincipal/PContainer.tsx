import { ReactNode } from "react";

type props = {
  children?: ReactNode;
};
export const PContainer = ({ children }: props) => {
  return (
    <div className="absolute top-1 flex flex-col justify-center items-center gap-4">
      <div className="relative top-10 mt-8">{children}</div>
    </div>
  );
};
