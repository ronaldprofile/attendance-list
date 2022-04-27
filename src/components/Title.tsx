import { ReactNode } from "react";
import clsx from "clsx";

type TitleProps = {
  children: ReactNode;
  className?: string;
};

export function Title({ children, className }: TitleProps) {
  return <h2 className={clsx(`text-left text-2xl`, className)}>{children}</h2>;
}
