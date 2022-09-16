// Style
import { SInput } from "./style.js";

interface IInputProps {
  type: string;
  placeholder?: string;
}

export default function Input({ type, placeholder }: IInputProps) {
  return <SInput type={type} placeholder={placeholder} />;
}
