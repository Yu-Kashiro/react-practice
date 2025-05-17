import * as React from "react";
import { PropsWithChildren } from "react";

type Props = {
  onClick: () => void;
};

export const Button = ({ onClick, children }: PropsWithChildren<Props>) => {
  return (
    <div>
      <button className="border p-2 w-16 item-center" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
