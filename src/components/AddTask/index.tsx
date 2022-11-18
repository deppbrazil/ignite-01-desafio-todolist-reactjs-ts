import { ChangeEvent, InvalidEvent } from "react";

// Style
import { Form } from "./style";

// Components
import Input from "../Input";
import Button from "../Button";

// Icon
import { PlusCircle } from "phosphor-react";

interface IAddTaskProps {
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onCreateTask: () => void;
}

export default function AddTask({
  onCreateTask,
  onChange,
  value,
}: IAddTaskProps) {
  function handleCreateTask(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    onCreateTask();
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  return (
    <>
      <Form onSubmit={handleCreateTask} className="block-wrapper">
        <Input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={value}
          onChange={onChange}
          onInvalid={handleNewTaskInvalid}
          isInputBlock
          required
        />

        <Button type="submit" title="Criar" degree="default" task={value}>
          <PlusCircle color="white" size={16} />
        </Button>
      </Form>
    </>
  );
}
