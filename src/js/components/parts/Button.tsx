import * as React from "react";
import { PropsWithChildren } from "react";

type Props = {
  onClick: () => void;
};

export const Button = ({ onClick, children }: PropsWithChildren<Props>) => {
  return (
    <div>
      <button className="border px-2 w-fit item-center" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
