import { ChangeEventHandler, InvalidEvent } from "react";

// Style
import { WrapperInput } from "./style.js";

interface IInputProps {
  type: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  isInputBlock?: boolean;
  defaultChecked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onInvalid?: (event: InvalidEvent<HTMLInputElement>) => void;
}

export default function Input({
  type,
  value,
  placeholder,
  onChange,
  required,
  defaultChecked,
  onInvalid,
  isInputBlock,
}: IInputProps) {
  return (
    <WrapperInput>
      {type === "text" && (
        <input
          className={isInputBlock ? "is-block" : undefined}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onInvalid={onInvalid}
          required={required}
        />
      )}

      {type === "checkbox" && (
        <input type={type} checked={defaultChecked} onChange={onChange} />
      )}
    </WrapperInput>
  );
}
