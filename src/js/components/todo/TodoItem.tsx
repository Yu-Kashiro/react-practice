import * as React from "react";

type TodoItemProps = {
  task: string;
  person: string;
  deadline: string;
};

export const TodoItem: React.FC<TodoItemProps> = ({task, person, deadline }) => {
  return (
    <li className="text-sm">
    {task} 担当者: {person} 締め切り: {deadline}
    </li>
  );
};