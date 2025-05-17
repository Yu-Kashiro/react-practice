import * as React from "react";
import { Todo } from "./type";
import { Button } from "../parts/Button";

type TodoItemProps = {
  id: number;
  task: string;
  person: string;
  deadline: string;
  deleteTodo: (id: number) => void
};

export const TodoItem: React.FC<TodoItemProps> = ({id, task, person, deadline, deleteTodo }) => {

  return (
    <>
      <li className="grid grid-cols-4 p-1 items-center">
        <div>{task}</div>
        <div>{person}</div>
        <div>{deadline}</div>
        <div>
          <Button onClick={() => deleteTodo(id)}>削除</Button>
        </div>
      </li>
    </>
  );
};