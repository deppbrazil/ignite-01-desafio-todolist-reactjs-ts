// Style
import { SAddTask } from "./style";

// Components
import Input from "../Input";
import Button from "../Button";

export default function AddTask() {
  return (
    <>
      <SAddTask>
        <div className="block-wrapper">
          <Input
            isInputBlock
            type="text"
            placeholder="Adicione uma nova tarefa"
          />
        </div>
        <div>
          <Button title="Criar" isIconPlus />
        </div>
      </SAddTask>
    </>
  );
}
