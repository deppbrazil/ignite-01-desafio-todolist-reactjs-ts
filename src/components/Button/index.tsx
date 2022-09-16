// Style
import { SWrapperButton } from "./style.js";
import { PlusCircle } from "phosphor-react";

interface IButtonProps {
  title?: string;
  isButtonBlock?: boolean;
  isIconPlus?: boolean;
  children?: React.ReactNode;
}

export default function Button({
  title,
  isIconPlus,
  isButtonBlock,
  children,
}: IButtonProps) {
  return (
    <SWrapperButton>
      <button className={isButtonBlock ? "button-block" : undefined}>
        {title}
        {isIconPlus && <PlusCircle color="white" size={16} />}
        {children}
      </button>
    </SWrapperButton>
  );
}
