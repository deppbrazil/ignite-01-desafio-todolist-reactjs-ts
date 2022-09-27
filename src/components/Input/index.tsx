// Style
import { SWrapperInput } from "./style.js";

// Icon
import { Trash } from "phosphor-react";

interface IInputProps {
  type: string;
  placeholder?: string;
  isInputBlock?: boolean;
  content?: string;
  value?: number;
  defaultChecked?: boolean;
}

export default function Input({
  type,
  placeholder,
  isInputBlock,
  content,
  value,
  defaultChecked,
}: IInputProps) {
  return (
    <SWrapperInput>
      {type === "text" && (
        <input
          className={isInputBlock ? "input-block" : undefined}
          type={type}
          placeholder={placeholder}
        />
      )}

      {type === "checkbox" && (
        <div className="wrapper-item">
          <input type={type} value={value} defaultChecked={defaultChecked} />
          <label className={defaultChecked ? "label-checked" : undefined}>
            {content}
          </label>
          <button>
            <Trash size={16} color="#808080" />
          </button>
        </div>
      )}
    </SWrapperInput>
  );
}
