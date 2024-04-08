import { InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export function Input({...props}:IInputProps) {
  return (
    <input type="text" className="rounded-md w-full p-1" {...props}></input>
  )
}