import { InputHTMLAttributes } from "react";
import clsx from "clsx";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={clsx(
        `
         h-[50px] w-full px-3 rounded
         outline-none
         rounded-t-sm
         rounded-b-sm
         border-2
         border-transparent
         transition ease-linear
      `,
        className
      )}
    />
  );
}
