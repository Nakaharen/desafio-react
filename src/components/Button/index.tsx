import { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function Button({title, ...props}:IButtonProps) {
  return (
    <button 
      className="bg-blue-300 rounded-md p-2 text-sm"
      {...props}
    >
      {title}
    </button>
  )
}