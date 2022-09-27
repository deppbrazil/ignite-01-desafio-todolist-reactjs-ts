// Components
import Input from "../Input";

// Style
import { WrapperList, HeaderList, ContentList } from "./style";

const todoList = [
  {
    id: 1,
    checked: true,
    content:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  },
  {
    id: 2,
    checked: false,
    content:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  },
];

export default function ListTask() {
  return (
    <WrapperList>
      <HeaderList>
        <div>
          <span className="created">Tarefas criadas</span>
          <span className="counter">5</span>
        </div>
        <div>
          <span className="done">Concluídas</span>
          <span className="counter">2 de 5</span>
        </div>
      </HeaderList>

      <ContentList>
        {todoList.map((item, index) => (
          <Input
            type="checkbox"
            content={item.content}
            key={index}
            value={index}
            defaultChecked={item.checked}
          />
        ))}
      </ContentList>
    </WrapperList>
  );
}
