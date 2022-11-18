// Style
import { WrapperButton } from "./style.js";

interface IButtonProps {
  title?: string;
  task: string;
  type?: "button" | "submit";
  isButtonBlock?: boolean;
  degree: "default" | "icon";
  children?: React.ReactNode;
  handleClick?: () => void;
  onDelete?: (taskDelete: string) => void;
}

export default function Button({
  title,
  task,
  type,
  degree,
  isButtonBlock,
  children,
  handleClick,
  onDelete,
}: IButtonProps) {
  return (
    <WrapperButton
      style={isButtonBlock ? { width: "100%" } : { width: "auto" }}
    >
      {degree === "default" && (
        <button
          type={type}
          onClick={handleClick}
          className={
            isButtonBlock ? "default-button is-block" : "default-button"
          }
        >
          {title}
          {children}
        </button>
      )}

      {degree === "icon" && (
        <button className="icon-button" onClick={() => onDelete?.(task)}>
          {children}
        </button>
      )}
    </WrapperButton>
  );
}
