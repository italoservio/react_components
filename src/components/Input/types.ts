import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export interface StyleLabelProps {
  focused: boolean
}