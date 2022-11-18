import { ChangeEvent, useState } from "react";

// Style
import { WrapperTodoList, ContentTodoList } from "./style";

// SVG
import Clipboard from "../Icons/Clipboard";

// Components
import AddTask from "../AddTask";
import Task from "../Task";

export default function TodoList() {
  const [tasks, setTasks] = useState(Array<string>);
  const [newTask, setNewTask] = useState("");

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  function handleCreateNewTask() {
    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  function handleDeleteTask(selectedTask: string) {
    const taskdelete = tasks.filter((task) => {
      return task !== selectedTask;
    });

    setTasks(taskdelete);
  }

  return (
    <WrapperTodoList>
      <AddTask
        onChange={handleNewTaskChange}
        onCreateTask={handleCreateNewTask}
        value={newTask}
      />

      <ContentTodoList>
        <div className="header-list">
          <div>
            <span className="created">Tarefas criadas</span>
            <span className="counter">{tasks.length}</span>
          </div>
          <div>
            <span className="done">Concluídas</span>
            <span className="counter">
              {tasks.length > 0 ? 0 + " de " + tasks.length : tasks.length}
            </span>
          </div>
        </div>

        <div className="content-list">
          {tasks.length === 0 && (
            <div className="list-empty">
              <Clipboard />
              <div>
                <span>
                  <b>Você ainda não tem tarefas cadastradas</b>
                </span>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            </div>
          )}

          {tasks.map((task, index) => {
            return (
              <div key={index}>
                <Task content={task} onDelete={handleDeleteTask} />
              </div>
            );
          })}
        </div>
      </ContentTodoList>
    </WrapperTodoList>
  );
}
