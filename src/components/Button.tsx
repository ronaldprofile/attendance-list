import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
};

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      type="submit"
      className={clsx(
        `
          h-[50px] px-4
          font-bold uppercase text-sm
          rounded-tr-sm
          rounded-br-sm
          transition ease-linear
      `,
        className
      )}
    >
      {children}
    </button>
  );
}
