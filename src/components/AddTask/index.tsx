// Style
import { SAddTask } from "./style";

// Components
import Input from "../Input";
import Button from "../Button";

export default function AddTask() {
  return (
    <>
      <SAddTask>
        <Input type="text" placeholder="Adicione uma nova tarefa" />
        <Button title="Criar" isIconPlus />
      </SAddTask>
    </>
  );
}
