import { useState } from "react";

// Style
import { WrapperTask } from "./style";

// Components
import Input from "../Input";
import Button from "../Button";

// Icon
import { Trash } from "phosphor-react";

export interface ITaskProps {
  content: string;
  onDelete: (taskDelete: string) => void;
}

export default function Task({ content, onDelete }: ITaskProps) {
  const [checked, setChecked] = useState(false);

  function isChecked() {
    if (!checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }

  return (
    <WrapperTask>
      <Input type="checkbox" defaultChecked={checked} onChange={isChecked} />
      <label className={checked ? "label-checked" : undefined}>{content}</label>
      <Button type="button" degree="icon" onDelete={onDelete} task={content}>
        <Trash size={16} color="#808080" />
      </Button>
    </WrapperTask>
  );
}
