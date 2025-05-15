import * as React from "react";
import { Todo } from "./type";

type TodoItemProps = {
  id: number;
  task: string;
  person: string;
  deadline: string;
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const TodoItem: React.FC<TodoItemProps> = ({id, task, person, deadline, setTodoList }) => {
  return (
    <>
      <li className="grid grid-cols-4 p-1">
        <div>{task}</div>
        <div>{person}</div>
        <div>{deadline}</div>
        <div>
          <button className="border p-2 w-16 item-center" onClick={() =>
            setTodoList((prev) => prev.filter((todo) => todo.id !== id))
          }>
            削除
          </button>
        </div>
      </li>
    </>
  );
};