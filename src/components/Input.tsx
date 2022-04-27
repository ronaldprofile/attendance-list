import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {};

export function Input({ ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`
        h-[50px] w-full px-3 rounded bg-slate-200
        outline-none
        rounded-t-sm
        rounded-b-sm
        border-2
        border-transparent
        transition
      focus:border-purple-500
      `}
    />
  );
}
