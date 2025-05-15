import * as React from "react";
import { PropsWithChildren } from "react";

type Props = {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  classname?: string;
};

export const Heading = ({ level, children, classname }: PropsWithChildren<Props>) => {
  if ((level === "h1")) return <h1 className={`font-bold text-5xl ${classname}`}>{children}</h1>;
  if ((level === "h2")) return <h2 className={`font-bold text-4xl ${classname}`}>{children}</h2>;
  if ((level === "h3")) return <h3 className={`font-bold text-3xl ${classname}`}>{children}</h3>;
  if ((level === "h4")) return <h4 className={`font-bold text-2xl ${classname}`}>{children}</h4>;
  if ((level === "h5")) return <h5 className={`font-bold text-xl ${classname}`}>{children}</h5>;
  if ((level === "h6")) return <h6 className={`font-bold text-lg ${classname}`}>{children}</h6>;
};
