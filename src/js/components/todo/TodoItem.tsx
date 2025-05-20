import * as React from "react";
import { Button } from "../parts/Button";
import { useAuth } from "../../hooks/use-auth";

type TodoItemProps = {
  id: number;
  task: string;
  person: string;
  deadline: string;
  deleteTodo: (id: number) => void;
};

export const TodoItem: React.FC<TodoItemProps> = ({
  id,
  task,
  person,
  deadline,
  deleteTodo,
}) => {
  const { userName } = useAuth();
  const style = userName === person ? "text-red-600 font-bold" : "";
  return (
    <>
      <li className="grid grid-cols-4 p-1 items-center">
        <div>{task}</div>
        <div className={style}>{person}</div>
        <div>{deadline}</div>
        <div>
          <Button onClick={() => deleteTodo(id)}>削除</Button>
        </div>
      </li>
    </>
  );
};
